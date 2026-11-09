# SAT Pro Mastery Hub
**Open Digital SAT Prep, Multi-Level Question Bank & Live AI Coaching Engine**

A comprehensive, responsive Digital SAT training platform modeled after College Board's official **Bluebook** interface. Built for students targeting top-tier scores (**1450–1550+**), featuring an embedded Desmos Graphing Calculator, persistent session management, multi-subject paper filters, score history tracking, and a live AI coach.

---

## 🌟 Key Features

### 1. Personalized Onboarding & Session Persistence
- **Student Profile:** Students set their name and target score on first visit, stored in browser local storage.
- **Close & Resume Anytime:** Practice sessions are automatically saved. Students can pause, close the browser, and resume their test, timer, and answers whenever they return.
- **Timer Controls:** Full control with Start, Pause, and Reset options.

### 2. Multi-Paper & Subject-Only Practice Modules
- **Full Practice Exams:** Comprehensive mixed mocks (Reading/Writing + Math).
- **Subject-Only Sprints:**
  - *Math Section Sprint:* Focused math drills with Desmos shortcuts for every question.
  - *Reading & Writing Sprint:* High-yield verbal drills (vocabulary in context, grammar boundaries, inferences).
- **Domain Mastery Drills:** Targeted practice on specific skills (Algebra, Advanced Math, Geometry & Trig, Standard English Conventions).
- **Adaptive Mistake Bank:** Automatically tracks missed questions across all papers, allowing students to retry only their errors until 100% mastery.

### 3. Integrated Desmos Graphing Calculator
- Embedded official Desmos calculator that never renders blank and is immune to ad-blockers.
- Quick **"⚡ Equations"** helper displays the exact keystrokes and regression models needed to bypass complex algebra in under 10 seconds.
- Support for fullscreen multi-tab workflows.

### 4. Live AI Coach & Offline Intelligence
- Context-aware coaching engine that analyzes the current problem, student choices, and common College Board traps.
- Dual-mode architecture: connects live to the coaching server when online and uses an in-browser intelligence engine when offline.

### 5. Score History & Retake Center
- Chronological score log tracking dates, scores, percentage accuracy, and projected scaled SAT score ranges.
- One-click **Retake Test** feature to measure improvement over time.

---

## 🚀 Live Access
- **Platform URL:** [https://sat.sirath.com](https://sat.sirath.com)
- **Hosted on:** GitHub Pages + Cloudflare Edge

---

## 💻 Local Development
To run the platform locally with the Python AI coaching server:

```bash
python3 sat_server.py
```
Open [http://localhost:8080](http://localhost:8080) in any browser.
