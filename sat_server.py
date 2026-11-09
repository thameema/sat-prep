#!/usr/bin/env python3
"""
SAT Mastery Local Backend Server with Live Coaching Engine
Serves the interactive Digital SAT application and handles real-time coaching interactions.
All student activity is logged in real time to live_student_feed.json.
"""

import http.server
import socketserver
import json
import os
import sys
from datetime import datetime

PORT = 8080
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FEED_FILE = os.path.join(BASE_DIR, "live_student_feed.json")

# Ensure feed file exists
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
        # Keep last 150 events
        if len(data) > 150:
            data = data[-150:]
        with open(FEED_FILE, "w") as f:
            json.dump(data, f, indent=2)
    except Exception as e:
        print(f"Error appending to feed: {e}", file=sys.stderr)

# Knowledge Base for the 25 High-Yield Questions
SAT_KNOWLEDGE = {
    1: {
        "section": "Reading & Writing", "skill": "Words in Context", "correct": "B",
        "explanation": "The transition 'rather' indicates a direct contrast to 'deplete.' Post-fire analyses showed the ash deposit increased nutrient availability, which accelerated seedling growth. 'Augment' means to increase, expand, or enlarge.",
        "trap_breakdown": {
            "A": "'Mitigate' means to reduce or soften something negative (like mitigating damage). Nutrients don't mitigate growth; they boost it.",
            "C": "'Obscure' means to conceal or hide.",
            "D": "'Fabricate' means to invent out of thin air or forge."
        },
        "rule": "Contrast transition ('rather') + positive outcome ('accelerating') = answer MUST mean increase/improve."
    },
    2: {
        "section": "Reading & Writing", "skill": "Words in Context (Hard Module 2)", "correct": "A",
        "explanation": "The text states the diplomat was not a 'one-dimensional hero' and that historical legacy is 'rarely unblemished.' Therefore, the missing word must be a flawed or negative trait. 'Duplicitous' means deceitful, double-dealing, or dishonest.",
        "trap_breakdown": {
            "B": "'Magnanimous' means noble and generous (positive trait).",
            "C": "'Exemplary' means model/worthy of imitation (positive trait).",
            "D": "'Fortuitous' means accidental/lucky."
        },
        "rule": "'Rarely unblemished' + 'did not shy away from' = must pick the critical/negative character trait."
    },
    3: {
        "section": "Reading & Writing", "skill": "Central Ideas & Details", "correct": "B",
        "explanation": "The passage pivots from the old consensus ('adult neurogenesis ceased') with 'However, recent histological studies... detected measurable rates... throughout adulthood.' The main idea is that empirical findings challenge the belief that neuron production ends at maturity.",
        "rule": "Formula: Old Consensus ('long adhered') + Pivot ('However') = The Main Idea is the new scientific discovery."
    },
    4: {
        "section": "Reading & Writing", "skill": "Cross-Text Connections", "correct": "C",
        "explanation": "Text 1 praises vertical farming's eco-benefits (water savings, zero runoff). Text 2 argues that operational electricity for high-capacity lighting and climate control produces an immense carbon footprint that offsets those advertised gains.",
        "rule": "Cross-Text Rule: Identify Author 2's specific critique and see how it directly qualifies or undermines Author 1's claim."
    },
    5: {
        "section": "Reading & Writing", "skill": "Command of Evidence (Quantitative)", "correct": "B",
        "explanation": "The hypothesis links increased search exertion to diminished foraging efficiency. Choice B pairs longer foraging duration (38.4 min) in Fragmented Urban habitat with less than half the nectar yield (14.2 mg) of Continuous Prairie (31.8 mg).",
        "rule": "Data Rule: Pick the choice that pairs BOTH the exertion cause (longer time) AND the efficiency effect (lower yield)."
    },
    6: {
        "section": "Reading & Writing", "skill": "Inferences", "correct": "B",
        "explanation": "Corals from shallow flats with extreme diurnal temperature fluctuations suffered minimal damage and retained symbionts during +2.5°C thermal stress. The logical inference is that prior exposure to temperature swings builds resilience.",
        "rule": "Inference Rule: Pick the most conservative conclusion directly tied to the data. Avoid extreme words like 'inevitably'."
    },
    7: {
        "section": "Reading & Writing", "skill": "Sentence Boundaries", "correct": "C",
        "explanation": "Both sides of the blank are complete independent clauses ('Katalin Karikó spent decades...' and 'her pioneering work directly prevented...'). Two independent clauses must be joined by a semicolon, period, or comma + FANBOYS.",
        "rule": "Boundary Rule: Semicolon (;) = Period (.) = Comma + FANBOYS. A comma alone is an illegal comma splice."
    },
    8: {
        "section": "Reading & Writing", "skill": "Punctuation & Modifiers", "correct": "A",
        "explanation": "The nonrestrictive participial phrase opened with a comma after the subject: 'Astronomer Cecilia Payne-Gaposchkin, having deduced that hydrogen and helium are the primary constituents of stars, overturned...' It must close with a comma before the main verb 'overturned.'",
        "rule": "Appositive Rule: An interrupting nonessential modifier opened with a comma MUST close with a comma before the main verb."
    },
    9: {
        "section": "Reading & Writing", "skill": "Subject-Verb Agreement", "correct": "C",
        "explanation": "The true subject is 'The collection' (singular). The prepositional phrase 'of fossilized marine bivalves, along with several amber fragments...' does not change the subject. Singular subject takes the singular verb 'is.'",
        "rule": "S-V Agreement Hack: Cross out prepositional and additive phrases ('along with', 'as well as'). Match verb directly to the head noun."
    },
    10: {
        "section": "Reading & Writing", "skill": "Modifier Placement", "correct": "C",
        "explanation": "The introductory descriptive phrase is 'Originating in the highlands of southwestern Ethiopia...' The noun immediately following the comma must be the entity that actually originated in Ethiopia: 'the Coffea arabica plant.'",
        "rule": "Dangling Modifier Hack: Ask 'WHO or WHAT did the action in the opening phrase?' That noun must touch the comma immediately."
    },
    11: {
        "section": "Reading & Writing", "skill": "Transitions", "correct": "B",
        "explanation": "The preceding sentence describes a major benefit (straight compass bearings). The next sentence details a major flaw (drastically distorts polar landmasses). This is a contrast, requiring 'However.'",
        "rule": "Transition Hack: Strength followed by Flaw = Contrast ('However')."
    },
    12: {
        "section": "Reading & Writing", "skill": "Rhetorical Synthesis", "correct": "B",
        "explanation": "The prompt asks to highlight the specific scientific breakthrough achieved on WASP-39b. Choice B directly names the historic first definitive detection of sulfur dioxide in an exoplanetary atmosphere.",
        "rule": "Rhetorical Synthesis Hack: NEVER read the bullets first! Read ONLY the prompt instruction, then pick the choice that matches that exact goal."
    },
    13: {
        "section": "Math", "skill": "Linear Systems with Constants", "correct": "C",
        "explanation": "For a system to have infinitely many solutions, the two equations must be identical lines (same slope, same y-intercept). In 3x - 5y = 14 and kx - 15y = 42, the second equation's constants (-15 and 42) are exactly 3 times the first (-5 and 14). Therefore, k must also be 3 * 3 = 9.",
        "desmos": "1. Type: 3x - 5y = 14\n2. Type: kx - 15y = 42\n3. Click 'add slider' for k. Slide k to 9. The lines merge into one!"
    },
    14: {
        "section": "Math", "skill": "Linear Inequality Modeling", "correct": "B",
        "explanation": "To maximize small packages S, set large packages L to its minimum (L = 8). Wash: 4(8) + 2S <= 60 -> 2S <= 28 -> S <= 14. Bandages: 6(8) + 2S <= 72 -> 2S <= 24 -> S <= 12. Both constraints must hold, so the maximum is S = 12.",
        "desmos": "Type: 4(8) + 2y <= 60 and 6(8) + 2y <= 72. Look at the upper boundary on the y-axis: it caps at y = 12."
    },
    15: {
        "section": "Math", "skill": "Quadratic Trajectory & Vertex", "correct": "C",
        "explanation": "The vertex of downward parabola h(t) = -16t^2 + 80t + 96 occurs at t = -b / (2a) = -80 / (2 * -16) = 2.5 seconds. Substitute t = 2.5: h(2.5) = -16(6.25) + 80(2.5) + 96 = -100 + 200 + 96 = 196 feet.",
        "desmos": "1. Type: y = -16x^2 + 80x + 96\n2. Click the top peak (vertex). Desmos displays (2.5, 196). Height = 196!"
    },
    16: {
        "section": "Math", "skill": "Discriminant Analysis", "correct": "C",
        "explanation": "A quadratic equation 2x^2 - 8x + c = 0 has exactly one real solution when its discriminant equals zero: b^2 - 4ac = 0. (-8)^2 - 4(2)(c) = 0 -> 64 - 8c = 0 -> c = 8.",
        "desmos": "Type: y = 2x^2 - 8x + c with slider for c. Move slider until the vertex touches the x-axis (tangent at y=0). At c = 8, it touches once."
    },
    17: {
        "section": "Math", "skill": "Nonlinear System Intersection", "correct": "C",
        "explanation": "Equate y = x^2 - 4x + 3 and y = 2x - 2: x^2 - 6x + 5 = 0 -> (x - 1)(x - 5) = 0. Roots are x1 = 1, x2 = 5. Find y1: y1 = 2(1) - 2 = 0. Then x2 - y1 = 5 - 0 = 5.",
        "desmos": "Type both equations into Desmos. Click the two grey intersection dots: (1, 0) and (5, 8). x2 = 5, y1 = 0 -> 5 - 0 = 5!"
    },
    18: {
        "section": "Math", "skill": "Exponential Modeling & Growth", "correct": "C",
        "explanation": "Initial population is 40. At t = 3, it grew to 320 (an 8-fold increase: 320 / 40 = 8). In the next 3 hours (from t = 3 to t = 6), it will multiply by 8 again: 320 * 8 = 2,560.",
        "desmos": "1. Click + -> Table. Enter (0, 40) and (3, 320).\n2. Type regression: y1 ~ a * b^(x1). Desmos shows a=40, b=2.\n3. Type: 40 * 2^6 -> 2560."
    },
    19: {
        "section": "Math", "skill": "Equivalent Rational Expressions", "correct": "A",
        "explanation": "Factor the numerator: 3x^2 + 11x - 4 = (3x - 1)(x + 4). Divide by (x + 4) gives 3x - 1.",
        "desmos": "Type original: y = (3x^2 + 11x - 4)/(x + 4). Type Choice A: y = 3x - 1. Both lines overlap everywhere!"
    },
    20: {
        "section": "Math", "skill": "Circle Equation & Radius", "correct": "C",
        "explanation": "Complete square: (x - 5)^2 - 25 + (y + 3)^2 - 9 = 47 -> (x - 5)^2 + (y + 3)^2 = 81. Radius r = sqrt(81) = 9.",
        "desmos": "Type: x^2 + y^2 - 10x + 6y = 47. Click left edge (-4, -3) and right edge (14, -3). Diameter = 18 -> Radius = 9."
    },
    21: {
        "section": "Math", "skill": "Complementary Angles", "correct": "A",
        "explanation": "In right triangle PQR where Q is 90°, P and R are complementary (P + R = 90°). Therefore sin(P) = cos(90° - P) = cos(R). Since sin(P) = 7/25, then cos(R) = 7/25.",
        "rule": "Golden SAT Trig Identity: In right triangles, sin(A) = cos(B) ALWAYS. Zero calculation needed!"
    },
    22: {
        "section": "Math", "skill": "Similar Triangles & Area Ratios", "correct": "D",
        "explanation": "Side scale factor k = 24 / 8 = 3. Area scales as k^2 = 3^2 = 9. Area of DEF = 15 * 9 = 135 cm^2.",
        "rule": "Scale Factor Rule: Length scales by k; Area scales by k^2; Volume scales by k^3. Never multiply area by just k!"
    },
    23: {
        "section": "Math", "skill": "Standard Deviation Shift", "correct": "B",
        "explanation": "Adding a constant (+15) shifts every number right by 15, so the mean increases by 15. But standard deviation measures spread/distances between numbers. Since all numbers shifted together, the spread is identical.",
        "rule": "SAT Statistics Law: Adding/subtracting a constant changes Mean and Median, but NEVER changes Standard Deviation or Range!"
    },
    24: {
        "section": "Math", "skill": "Rational Equations (Grid-In)", "correct": "-18",
        "explanation": "Cross-multiply: 5(x + 6) = 3(x - 2) -> 5x + 30 = 3x - 6 -> 2x = -36 -> x = -18.",
        "desmos": "Type y = 5/(x - 2) and y = 3/(x + 6). Find the curve intersection at x = -18."
    },
    25: {
        "section": "Math", "skill": "Successive Percent Change (Grid-In)", "correct": "1",
        "explanation": "20% reduction = 0.80k. Then 25% increase = (0.80k) * 1.25 = 1.00k. Therefore m = 1 (or 1.0).",
        "rule": "Percent Trap: A 20% drop (4/5) followed by a 25% increase (5/4) returns to exactly 100% (m = 1)."
    }
}

def generate_coach_response(q_id, user_choice, student_msg, student_name="", question_data=None, question_number=None):
    name_str = f", {student_name}" if student_name else ""
    msg_clean = (student_msg or "").strip()
    lower_msg = msg_clean.lower()

    # Map 101..125 -> 1..25 in SAT_KNOWLEDGE if needed
    lookup_id = q_id
    if isinstance(lookup_id, int) and 101 <= lookup_id <= 125:
        lookup_id = lookup_id - 100
    q_data = SAT_KNOWLEDGE.get(lookup_id) or SAT_KNOWLEDGE.get(q_id) or {}

    # Merge rich question_data sent directly from the frontend
    if isinstance(question_data, dict):
        merged = dict(q_data)
        for k in ("section", "domain", "skill", "difficulty", "stem", "prompt", "correct", "explanation", "hack", "choices", "desmosEquation", "trap_breakdown", "videoTutorial"):
            if question_data.get(k) is not None:
                merged[k] = question_data[k]
        if not merged.get("rule") and question_data.get("hack"):
            merged["rule"] = question_data["hack"]
        if not merged.get("desmos") and question_data.get("desmosEquation"):
            merged["desmos"] = "\n".join(question_data["desmosEquation"])
        q_data = merged

    if not q_data:
        return f"Select a question in the workspace and choose **Derivation**, **1600 Protocol**, **Trap Analysis**, or **Hint** for targeted coaching."

    q_num_label = f"Question {question_number}" if question_number else f"Question {lookup_id}"
    skill_label = q_data.get("skill", "SAT Concept")
    diff_label = q_data.get("difficulty", "")
    header_suffix = f" ({skill_label} · {diff_label})" if diff_label else f" ({skill_label})"
    correct_ans = str(q_data.get("correct", "")).strip()
    explanation = q_data.get("explanation", "")
    rule_text = q_data.get("rule") or q_data.get("hack") or ""
    desmos_eqs = q_data.get("desmosEquation") or ([] if not q_data.get("desmos") else [q_data["desmos"]])
    traps = q_data.get("trap_breakdown") or {}
    choices = q_data.get("choices") or []
    video = q_data.get("videoTutorial") or {}

    video_line = ""
    if isinstance(video, dict) and video.get("url"):
        video_line = f"\n\n**Video Tutorial:** [{video.get('title', 'Watch Lesson')}]({video.get('url')}) ({video.get('channel', 'YouTube')})"

    # Check if student typed a single letter A/B/C/D in chat to test an answer
    effective_choice = str(user_choice or "").strip().upper()
    if msg_clean.upper() in ("A", "B", "C", "D"):
        effective_choice = msg_clean.upper()

    is_correct = bool(effective_choice and effective_choice == correct_ans.upper())

    # 1. Focused response for "Trap Analysis"
    if "trap" in lower_msg or "distractor" in lower_msg or "wrong" in lower_msg:
        reply = f"**Distractor & Trap Analysis — {q_num_label}{header_suffix}**\n\n"
        if traps:
            for opt, desc in traps.items():
                reply += f"• **Option {opt}:** {desc}\n"
            reply += "\n"
        elif choices:
            wrong_opts = [c for c in choices if str(c.get("letter")).upper() != correct_ans.upper()]
            for c in wrong_opts:
                reply += f"• **Option {c.get('letter')} ({c.get('text')}):** Engineered to catch test-takers who misapply the {skill_label.lower()} principle or stop one step early.\n"
            reply += "\n"
        reply += f"**Elimination Rule:** {rule_text or explanation}\n\n"
        reply += f"**Verified Answer:** **{correct_ans}**{video_line}"
        return reply

    # 2. Focused response for "1600 Protocol / Desmos"
    if "desmos" in lower_msg or "shortcut" in lower_msg or "trick" in lower_msg or "protocol" in lower_msg:
        reply = f"**1600-Scorer Protocol — {q_num_label}{header_suffix}**\n\n"
        if desmos_eqs:
            eq_block = "\n".join(desmos_eqs) if isinstance(desmos_eqs, list) else str(desmos_eqs)
            reply += f"**Desmos Input:**\n```\n{eq_block}\n```\n\n"
        if rule_text:
            reply += f"**Execution:**\n{rule_text}\n\n"
        else:
            reply += f"**Method:**\n{explanation}\n\n"
        reply += f"**Verified Answer:** **{correct_ans}**{video_line}"
        return reply

    # 3. Focused response for "Hint" (without spoiling the final answer)
    if any(w in lower_msg for w in ("hint", "clue", "start", "stuck", "help me")) and "explain" not in lower_msg and "derivation" not in lower_msg:
        reply = f"**Strategic Hint — {q_num_label}{header_suffix}**\n\n"
        if rule_text:
            reply += f"**Core Principle:**\n{rule_text}\n\n"
        if desmos_eqs:
            eq_block = "\n".join(desmos_eqs) if isinstance(desmos_eqs, list) else str(desmos_eqs)
            reply += f"**Desmos Setup:**\n```\n{eq_block}\n```\n\n"
        else:
            first_sentence = explanation.split(". ")[0] + "."
            reply += f"**Starting Step:** {first_sentence}\n\n"
        reply += "Apply this step and select your answer, or click **Derivation** for the complete proof."
        return reply

    # 4. Full Derivation ("Derivation", "Explain Rule", number input, answer check, or general question)
    reply = f"**Formal Derivation — {q_num_label}{header_suffix}**\n\n"
    if effective_choice:
        if is_correct:
            reply += f"**Status:** Option **{effective_choice}** is correct.\n\n"
        else:
            reply += f"**Status:** You selected **{effective_choice}**; the verified answer is **{correct_ans}**.\n\n"
            if traps and effective_choice in traps:
                reply += f"**Why Option {effective_choice} Fails:** {traps[effective_choice]}\n\n"

    reply += f"**Derivation:**\n{explanation}\n\n"

    if rule_text and rule_text != explanation:
        reply += f"**1600-Scorer Protocol:**\n{rule_text}\n\n"

    if traps and not effective_choice:
        reply += "**Distractor Breakdown:**\n"
        for opt, desc in traps.items():
            reply += f"• **Option {opt}:** {desc}\n"
        reply += "\n"

    if not effective_choice:
        reply += f"**Verified Answer:** **{correct_ans}**"

    reply += video_line
    return reply


class SATMasteryHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def end_headers(self):
        # Enable CORS and disable caching so client always gets fresh updates
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

                coach_reply = generate_coach_response(
                    q_id,
                    user_choice,
                    student_msg,
                    student_name,
                    question_data=question_data,
                    question_number=question_number
                )

                # Log event
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
            except:
                self.wfile.write(b"[]")
        else:
            super().do_GET()


if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), SATMasteryHandler) as httpd:
        print(f"SAT Mastery Server running on port {PORT}")
        sys.stdout.flush()
        httpd.serve_forever()
