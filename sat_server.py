#!/usr/bin/env python3
"""
SAT Mastery Local Backend Server with Real Conversational AI Coach (Claude Haiku)
Serves the interactive Digital SAT application and handles live, multi-turn AI coaching.
All student activity is logged in real time to live_student_feed.json.
"""

import http.server
import socketserver
import subprocess
import json
import os
import sys
from datetime import datetime

PORT = 8080
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FEED_FILE = os.path.join(BASE_DIR, "live_student_feed.json")
AGY_BIN = "/Users/thameema/.local/bin/agy"
CLAUDE_BIN = "/Users/thameema/.local/bin/claude"

if not os.path.exists(FEED_FILE):
    with open(FEED_FILE, "w") as f:
        json.dump([], f)


def append_to_feed(entry):
    try:
        data = []
        if os.path.exists(FEED_FILE):
            with open(FEED_FILE, "r") as f:
                data = json.load(f)
        entry["timestamp"] = datetime.now().strftime("%Y-%m-%d %I:%M:%S %p")
        data.append(entry)
        if len(data) > 150:
            data = data[-150:]
        with open(FEED_FILE, "w") as f:
            json.dump(data, f, indent=2)
    except Exception as e:
        print(f"Error appending to feed: {e}", file=sys.stderr)


def build_llm_prompt(question_data, question_number, user_choice, student_msg, student_name, recent_history):
    q = question_data or {}
    q_num = question_number or q.get("id") or 1
    section = q.get("section", "Digital SAT")
    domain = q.get("domain", "")
    skill = q.get("skill", "")
    difficulty = q.get("difficulty", "")
    stem = q.get("stem", "")
    prompt_text = q.get("prompt", "")
    correct = q.get("correct", "")
    explanation = q.get("explanation", "")
    hack = q.get("hack", "")
    desmos_eqs = q.get("desmosEquation") or []
    traps = q.get("trap_breakdown") or {}
    choices = q.get("choices") or []
    video = q.get("videoTutorial") or {}

    choices_str = "\n".join(
        f"  {c.get('letter')}) {c.get('text')}" for c in choices
    ) if choices else "  (Student-Produced Grid-In Response)"

    traps_str = "\n".join(
        f"  Option {k}: {v}" for k, v in traps.items()
    ) if traps else "  None specified"

    desmos_str = "\n".join(desmos_eqs) if isinstance(desmos_eqs, list) else str(desmos_eqs)
    video_str = (
        f"{video.get('title')} ({video.get('channel')}): {video.get('url')}"
        if isinstance(video, dict) and video.get("url")
        else "None"
    )

    history_lines = []
    if isinstance(recent_history, list):
        for turn in recent_history[-6:]:
            if isinstance(turn, dict) and turn.get("text"):
                role = "Student" if turn.get("sender") == "student" else "Coach"
                text_snippet = str(turn.get("text"))[:500]
                history_lines.append(f"{role}: {text_snippet}")
    history_block = "\n".join(history_lines) if history_lines else "(Start of conversation on this question)"

    student_label = student_name if student_name else "the student"
    selected_label = user_choice if user_choice else "nothing selected yet"

    return f"""You are an elite, 1600-scoring Digital SAT tutor coaching {student_label} one-on-one.
Respond directly, naturally, and conversationally to what {student_label} just asked—never dump a rigid, robotic template if they asked a specific question.

STYLE RULES:
- No cheesy AI filler or emoji spam (do not use emojis).
- Be warm, sharp, clear, and concise (typically 80–180 words unless they ask for a full derivation or extra practice problem).
- Directly answer their exact question first. If they ask "why is it correct?" or "explain the answer", walk through the logic step by step in plain, intuitive language so they genuinely understand WHY each number or clause works.
- If they ask about a specific step, number, or wrong choice, focus directly on that.
- Use **bold** for key terms/equations and markdown code blocks only when showing Desmos input.
- If relevant and helpful, you may mention the attached YouTube lesson as a markdown link: [{video.get('title', 'Video Lesson')}]({video.get('url', '')}).

ACTIVE QUESTION CONTEXT (Question #{q_num}):
- Section / Domain / Skill: {section} | {domain} | {skill} ({difficulty})
- Question Stem / Passage:
{stem}
- Prompt: {prompt_text}
- Answer Choices:
{choices_str}
- Student's Current Selection on Screen: {selected_label}
- Verified Correct Answer: {correct}
- Reference Derivation: {explanation}
- 1600-Scorer Shortcut / Desmos Protocol: {hack}
- Desmos Equations: {desmos_str}
- Distractor Trap Notes:
{traps_str}
- Attached Video Tutorial: {video_str}

RECENT CHAT HISTORY:
{history_block}

STUDENT'S NEW MESSAGE:
{student_msg}

Write your coaching response now:"""


def call_gemini_coach(prompt_str):
    env = os.environ.copy()
    # Primary: Google Gemini via agy CLI (Gemini 3.8 Flash / Gemini 4 Argon)
    if os.path.exists(AGY_BIN):
        for model_name in ("Gemini 3.8 Flash (Low)", "Gemini 4 Argon (Low)"):
            try:
                proc = subprocess.run(
                    [
                        AGY_BIN,
                        "--model", model_name,
                        "--disable-slash-commands",
                        f"-p={prompt_str}"
                    ],
                    text=True,
                    capture_output=True,
                    timeout=18,
                    env=env
                )
                if proc.returncode == 0 and proc.stdout and proc.stdout.strip():
                    return proc.stdout.strip()
                else:
                    print(f"agy ({model_name}) non-zero: rc={proc.returncode} err={proc.stderr[:200]}", file=sys.stderr)
            except Exception as e:
                print(f"agy ({model_name}) error: {e}", file=sys.stderr)

    # Secondary fallback: Claude Haiku CLI
    if os.path.exists(CLAUDE_BIN):
        try:
            proc = subprocess.run(
                [
                    CLAUDE_BIN,
                    "-p",
                    "--model", "haiku",
                    "--setting-sources", "",
                    "--strict-mcp-config",
                    "--tools", ""
                ],
                input=prompt_str,
                text=True,
                capture_output=True,
                timeout=20,
                env=env
            )
            if proc.returncode == 0 and proc.stdout and proc.stdout.strip():
                return proc.stdout.strip()
        except Exception as e:
            print(f"Claude CLI error: {e}", file=sys.stderr)

    return None


def generate_fallback_response(q_data, question_number, user_choice, student_msg):
    if not q_data:
        return "Select any question in the workspace and ask me what step you'd like unpacked."
    q_num_label = f"Question {question_number}" if question_number else "Current Question"
    skill_label = q_data.get("skill", "SAT Concept")
    correct_ans = str(q_data.get("correct", "")).strip()
    explanation = q_data.get("explanation", "")
    rule_text = q_data.get("hack") or q_data.get("rule") or ""
    traps = q_data.get("trap_breakdown") or {}
    lower_msg = (student_msg or "").lower()

    if "trap" in lower_msg or "wrong" in lower_msg:
        lines = [f"**Distractor Analysis — {q_num_label} ({skill_label})**", ""]
        for opt, desc in traps.items():
            lines.append(f"• **Option {opt}:** {desc}")
        lines.append("")
        lines.append(f"**Key Rule:** {rule_text or explanation}")
        lines.append(f"**Verified Answer:** **{correct_ans}**")
        return "\n".join(lines)

    if "hint" in lower_msg:
        first_sentence = explanation.split(". ")[0] + "."
        return f"**Hint — {q_num_label} ({skill_label})**\n\n{rule_text or first_sentence}"

    reply = f"**{q_num_label} — {skill_label}**\n\n{explanation}"
    if rule_text:
        reply += f"\n\n**1600-Scorer Protocol:**\n{rule_text}"
    reply += f"\n\n**Verified Answer:** **{correct_ans}**"
    return reply


def generate_coach_response(q_id, user_choice, student_msg, student_name="", question_data=None, question_number=None, chat_history=None):
    q_data = dict(question_data) if isinstance(question_data, dict) else {}

    # Call Google Gemini LLM (Gemini 3.8 Flash / Gemini 4 Argon via agy) with full question & conversation context
    llm_prompt = build_llm_prompt(
        question_data=q_data,
        question_number=question_number,
        user_choice=user_choice,
        student_msg=student_msg,
        student_name=student_name,
        recent_history=chat_history
    )
    ai_reply = call_gemini_coach(llm_prompt)
    if ai_reply:
        return ai_reply

    return generate_fallback_response(q_data, question_number, user_choice, student_msg)


class ThreadedHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    allow_reuse_address = True
    daemon_threads = True


class SATMasteryHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        if self.path == "/api/chat":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)
            try:
                payload = json.loads(body.decode("utf-8"))
                q_id = payload.get("question_id", 101)
                user_choice = payload.get("user_choice", "")
                student_msg = payload.get("student_message", "")
                student_name = payload.get("student_name", "")
                question_data = payload.get("question_data")
                question_number = payload.get("question_number")
                chat_history = payload.get("chat_history")

                coach_reply = generate_coach_response(
                    q_id,
                    user_choice,
                    student_msg,
                    student_name,
                    question_data=question_data,
                    question_number=question_number,
                    chat_history=chat_history
                )

                append_to_feed({
                    "type": "chat_interaction",
                    "student_name": student_name,
                    "question_id": q_id,
                    "student_choice": user_choice,
                    "student_message": student_msg,
                    "coach_reply": coach_reply
                })

                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"reply": coach_reply}).encode("utf-8"))
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))

        elif self.path == "/api/log_event":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)
            try:
                event = json.loads(body.decode("utf-8"))
                append_to_feed(event)
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"status": "logged"}).encode("utf-8"))
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
        else:
            self.send_error(404, "Endpoint Not Found")

    def do_GET(self):
        if self.path == "/api/feed":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            try:
                with open(FEED_FILE, "r") as f:
                    feed_data = json.load(f)
                self.wfile.write(json.dumps(feed_data).encode("utf-8"))
            except Exception:
                self.wfile.write(b"[]")
        else:
            super().do_GET()


if __name__ == "__main__":
    with ThreadedHTTPServer(("", PORT), SATMasteryHandler) as httpd:
        print(f"SAT Mastery Server (Threaded + Claude Haiku AI Coach) running on port {PORT}")
        sys.stdout.flush()
        httpd.serve_forever()
