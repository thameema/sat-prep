/**
 * DIGITAL SAT MASTERY CURRICULUM, 1600 PLAYBOOK & VERIFIED QUESTION BANK
 * Contains 12 structured exams, section sprints, and domain drills + 1600-scorer protocols & verified YouTube lessons.
 */

const SAT_PLAYBOOK_DATA = [
  {
    "category": "Reading & Writing — The 800 Pacing Protocol",
    "title": "Start at Question 15 (Grammar & Synthesis First)",
    "summary": "On every Digital SAT Reading & Writing module, Questions 1–14 are vocabulary and dense reading logic, while Questions 15–27 are Standard English Conventions (grammar), Transitions, and Rhetorical Synthesis.",
    "action": "Jump immediately to Question 15 when the module starts. Finish Questions 15–27 in 8–9 minutes using strict punctuation and synthesis rules. Then return to Question 1 with 23+ minutes banked for dense reading passages.",
    "video": {
      "title": "Digital SAT Reading Pacing & Module Order Strategy",
      "channel": "Settele Tutoring",
      "url": "https://www.youtube.com/watch?v=STjlOnEH5sY",
      "videoId": "STjlOnEH5sY"
    }
  },
  {
    "category": "Reading & Writing — Punctuation Equivalence Law",
    "title": "Semicolon = Period = Comma + FANBOYS",
    "summary": "Between two complete independent clauses (Subject + Verb on both sides), a period, a semicolon, and a comma followed by for/and/nor/but/or/yet/so are functionally identical.",
    "action": "If two answer choices have identical wording and one uses a period while the other uses a semicolon, cross out BOTH immediately—the SAT cannot have two correct answers. Also watch for the 'Restrictive Title' rule: when a title/occupation precedes a name ('Astronomer Vera Rubin'), never put commas around the name.",
    "video": {
      "title": "Commas, Colons & Dashes: SAT Boundaries Within a Sentence",
      "channel": "PrepFriend101",
      "url": "https://www.youtube.com/watch?v=YaU6sZaxA3M",
      "videoId": "YaU6sZaxA3M"
    }
  },
  {
    "category": "Reading & Writing — Rhetorical Synthesis 15-Second Filter",
    "title": "Read ONLY the Goal Prompt Before Touching the Bullet Notes",
    "summary": "Questions 25–27 give you 4–5 bulleted research notes and ask which choice 'most effectively uses relevant information from the notes to accomplish this goal.'",
    "action": "Do not read the bullet notes first. Underline the exact structural verb in the prompt (e.g., 'contrast X and Y', 'specify the date why...', 'illustrate how...'). Typically 3 of the 4 choices fail to perform that action and can be eliminated in 15 seconds without reading the notes.",
    "video": {
      "title": "Digital SAT Reading & Writing: Rhetorical Synthesis Strategy",
      "channel": "Test Innovators",
      "url": "https://www.youtube.com/watch?v=cLDrVb2_0Jc",
      "videoId": "cLDrVb2_0Jc"
    }
  },
  {
    "category": "Math Module 2 — Desmos Regression (~) Weaponization",
    "title": "Use y₁ ~ a·x₁² + b·x₁ + c for Any Function Through Points",
    "summary": "Hard Module 2 questions often give you two or three points (or a vertex and a point, or exponential snapshots) and ask for f(7) or a constant k.",
    "action": "Never solve multi-variable algebraic systems by hand. Click '+' -> 'Table' in Desmos, enter the given coordinates into (x₁, y₁), and type y₁ ~ m x₁ + b, y₁ ~ a(x₁ - h)² + k, or y₁ ~ a·b^(x₁). Desmos solves all parameters instantaneously.",
    "video": {
      "title": "7 Hard SAT Math Questions Solved with Desmos Regression",
      "channel": "SAT Math Common Sense Prep",
      "url": "https://www.youtube.com/watch?v=rSB5oMHfiZc",
      "videoId": "rSB5oMHfiZc"
    }
  },
  {
    "category": "Math Module 2 — Unknown Constants & Discriminants",
    "title": "Perpendicular Slope Ratios, Tangency & Slider Matching",
    "summary": "Questions 16–22 on Hard Module 2 heavily test systems with constants (k, c, r) having 'no solution', 'infinitely many solutions', or 'exactly one real solution'.",
    "action": "For linear systems a₁x + b₁y = c₁ and a₂x + b₂y = c₂: match the ratio a₁/a₂ = b₁/b₂. For quadratics touching a line at one point, either set b² - 4ac = 0 after substitution or graph both in Desmos with a slider for k and zoom in on the point of tangency.",
    "video": {
      "title": "How to Solve Unknown Constant Questions with Desmos",
      "channel": "MVP Learners",
      "url": "https://www.youtube.com/watch?v=LNLbRHAXX4k",
      "videoId": "LNLbRHAXX4k"
    }
  },
  {
    "category": "Test-Day Execution — Error Prevention",
    "title": "The 'Last Four Words' Rule & Trap Verification",
    "summary": "At the 1500+ level, most missed Math points come from solving correctly for x when the question asked for 2x + 3, the y-intercept, or the positive difference of roots.",
    "action": "Before clicking an option or typing a Grid-In answer, re-read the final four words of the prompt. Log every missed question in the Adaptive Mistake Bank and re-solve it cold 48 hours later.",
    "video": {
      "title": "700s Club: The Hardest Digital SAT Math Problems",
      "channel": "Strategic Test Prep",
      "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
      "videoId": "lrIRF-bFjkw"
    }
  }
];

const SAT_VIDEO_LIBRARY = {
  "desmos_master": {
    "title": "The Only SAT Math Desmos Guide You'll Ever Need",
    "channel": "LearnSATMath",
    "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
    "videoId": "jCT0jTVzKy0"
  },
  "desmos_solve": {
    "title": "Digital SAT Math — Desmos Lesson #1: Solve Any Equation",
    "channel": "Tutorllini Test Prep",
    "url": "https://www.youtube.com/watch?v=TFmt1VwZte8",
    "videoId": "TFmt1VwZte8"
  },
  "desmos_params": {
    "title": "Digital SAT Math — Desmos Parameterization & Constants",
    "channel": "Tutorllini Test Prep",
    "url": "https://www.youtube.com/watch?v=3rF4TTAVom4",
    "videoId": "3rF4TTAVom4"
  },
  "desmos_constants": {
    "title": "How to Solve Unknown Constant Questions with Desmos",
    "channel": "MVP Learners",
    "url": "https://www.youtube.com/watch?v=LNLbRHAXX4k",
    "videoId": "LNLbRHAXX4k"
  },
  "desmos_regression": {
    "title": "7 Hard SAT Math Questions Solved with Desmos Regression",
    "channel": "SAT Math Common Sense Prep",
    "url": "https://www.youtube.com/watch?v=rSB5oMHfiZc",
    "videoId": "rSB5oMHfiZc"
  },
  "hard_math_700s": {
    "title": "700s Club: The Hardest Digital SAT Math Problems",
    "channel": "Strategic Test Prep",
    "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
    "videoId": "lrIRF-bFjkw"
  },
  "hard_mod2_25": {
    "title": "25 Hard SAT Math Module 2 Questions + Desmos Regression",
    "channel": "SAT Math Common Sense Prep",
    "url": "https://www.youtube.com/watch?v=661RKRiKDdw",
    "videoId": "661RKRiKDdw"
  },
  "hard_mod2_22": {
    "title": "Module 2 SAT Math Practice: 22 Difficult Questions Walkthrough",
    "channel": "SAT Math Common Sense Prep",
    "url": "https://www.youtube.com/watch?v=Ku5gIHH6h4Q",
    "videoId": "Ku5gIHH6h4Q"
  },
  "rw_perfect_guide": {
    "title": "Digital SAT Writing Guide from a Perfect Scorer",
    "channel": "Hayden Rhodea SAT",
    "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
    "videoId": "1ppKIYbdEk0"
  },
  "rw_boundaries": {
    "title": "Commas, Colons & Dashes: SAT Boundaries Within a Sentence",
    "channel": "PrepFriend101",
    "url": "https://www.youtube.com/watch?v=YaU6sZaxA3M",
    "videoId": "YaU6sZaxA3M"
  },
  "rw_however": {
    "title": "Connector Placement — How to Punctuate 'However' on the SAT",
    "channel": "Settele Tutoring",
    "url": "https://www.youtube.com/watch?v=sQYiSE2JN1I",
    "videoId": "sQYiSE2JN1I"
  },
  "rw_synthesis": {
    "title": "Digital SAT Reading & Writing: Rhetorical Synthesis Strategy",
    "channel": "Test Innovators",
    "url": "https://www.youtube.com/watch?v=cLDrVb2_0Jc",
    "videoId": "cLDrVb2_0Jc"
  },
  "rw_pacing": {
    "title": "Digital SAT Reading Pacing & Module Order Strategy",
    "channel": "Settele Tutoring",
    "url": "https://www.youtube.com/watch?v=STjlOnEH5sY",
    "videoId": "STjlOnEH5sY"
  },
  "rw_walkthrough": {
    "title": "Digital SAT Reading & Writing Full Walkthrough",
    "channel": "Hayden Rhodea SAT",
    "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
    "videoId": "mBe2ghoUrPk"
  }
};

const CURRICULUM_DATA = {
  "full_test_1": {
    "id": "full_test_1",
    "title": "Exam 1: Core & Adaptive Diagnostic",
    "badge": "EXAM 1 · MODULE 1 -> 2",
    "phase": "Phase 1: Diagnostic & Core Foundations",
    "category": "Full Practice Exams",
    "difficulty": "Mixed Adaptive (650–750)",
    "description": "22-question full-spectrum diagnostic across Reading & Writing and Math with guided Desmos protocols.",
    "timeLimit": 1920,
    "questions": [
      {
        "id": 201,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Words in Context — Ecological Regeneration",
        "difficulty": "Module 1 Core",
        "stem": "Ecologists studying the regeneration of temperate pine forests noted that controlled burns did not deplete topsoil nutrients as previously feared; rather, post-fire soil analyses demonstrated that the ash deposit served to ______ the presence of bioavailable potassium and phosphorus, accelerating seedling growth.",
        "prompt": "Which choice completes the text with the most logical and precise word?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "mitigate"
          },
          {
            "letter": "B",
            "text": "augment"
          },
          {
            "letter": "C",
            "text": "obscure"
          },
          {
            "letter": "D",
            "text": "fabricate"
          }
        ],
        "correct": "B",
        "explanation": "The transition 'rather' establishes a direct contrast to 'deplete.' Post-fire analyses showed the ash deposit increased nutrient availability, which accelerated seedling growth. 'Augment' means to increase, enlarge, or supplement.",
        "hack": "Contrast Signal ('did not deplete; rather...') + Positive Effect ('accelerating seedling growth') = must mean 'increase' (augment).",
        "trap_breakdown": {
          "A": "'Mitigate' means to lessen the severity of a negative condition, not to increase beneficial nutrients.",
          "C": "'Obscure' means to conceal or make unclear.",
          "D": "'Fabricate' means to invent falsely."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 202,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Words in Context — Diplomatic History",
        "difficulty": "Module 2 Hard",
        "stem": "The biographer refused to depict the diplomat as a one-dimensional hero, recognizing that historical legacy is rarely unblemished; instead, she provided a nuanced account that did not shy away from the diplomat’s ______ tendencies during bilateral treaty negotiations.",
        "prompt": "Which choice completes the text with the most logical and precise word?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "duplicitous"
          },
          {
            "letter": "B",
            "text": "magnanimous"
          },
          {
            "letter": "C",
            "text": "exemplary"
          },
          {
            "letter": "D",
            "text": "fortuitous"
          }
        ],
        "correct": "A",
        "explanation": "Because the biographer refused to portray a 'one-dimensional hero' and noted that legacy is 'rarely unblemished,' the blank requires a critical or flawed quality. 'Duplicitous' means deceitful or double-dealing.",
        "hack": "Polarity Filter: 'Rarely unblemished' + 'did not shy away from' requires a negative character trait. A is the only negative adjective among the choices.",
        "trap_breakdown": {
          "B": "'Magnanimous' means generous and forgiving (positive).",
          "C": "'Exemplary' means serving as a model (positive).",
          "D": "'Fortuitous' means happening by chance."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 203,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Central Ideas — Adult Neurogenesis",
        "difficulty": "Module 1 Core",
        "stem": "Many neuroscientists long adhered to the hypothesis that adult neurogenesis—the birth of new neurons—ceased completely in the mammalian brain once maturity was reached. However, recent histological studies using carbon-14 dating on post-mortem human hippocampus samples have detected measurable rates of new cell integration throughout adulthood. While the exact cognitive role of these newly formed neurons remains subject to vigorous debate, the structural plasticity of the human brain is demonstrably more enduring than previously acknowledged.",
        "prompt": "Which choice best states the main idea of the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "Adult neurogenesis has been proven to reverse memory impairment in aging mammals."
          },
          {
            "letter": "B",
            "text": "Recent empirical findings challenge the traditional belief that neuron production ends in adulthood."
          },
          {
            "letter": "C",
            "text": "Carbon-14 dating is the only reliable methodology for analyzing hippocampal neurogenesis."
          },
          {
            "letter": "D",
            "text": "The structural plasticity of the mammalian brain decreases linearly across an organism's lifespan."
          }
        ],
        "correct": "B",
        "explanation": "The passage contrasts the traditional view ('adult neurogenesis ceased completely... once maturity was reached') with recent carbon-14 histological evidence showing 'measurable rates of new cell integration throughout adulthood.'",
        "hack": "Old Consensus + 'However' Pivot = The main idea is the new discovery that overturns the old consensus.",
        "trap_breakdown": {
          "A": "Unsupported leap: the text says the 'exact cognitive role... remains subject to vigorous debate.'",
          "C": "Extreme modifier trap ('the only reliable methodology').",
          "D": "Contradicts 'demonstrably more enduring than previously acknowledged.'"
        },
        "videoTutorial": {
          "title": "Digital SAT Reading Pacing & Module Order Strategy",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=STjlOnEH5sY",
          "videoId": "STjlOnEH5sY"
        }
      },
      {
        "id": 204,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Cross-Text Connections — Vertical Farming Thermodynamics",
        "difficulty": "Module 2 Hard",
        "stem": "Text 1\nAdvocates of vertical farming argue that cultivating crops indoors within stacked urban layers is the most viable solution to agricultural land degradation. By utilizing automated LED lighting spectra and closed-loop hydroponic systems, vertical farms consume up to 95% less water than traditional open-field agriculture while completely eliminating chemical pesticide runoff into local waterways.\n\nText 2\nAgricultural economist Dr. Marcus Vance cautions that vertical farming’s eco-friendly reputation overlooks severe thermodynamic limitations. The electrical energy required to power artificial lighting arrays and high-capacity climate-control equipment generates an immense carbon footprint unless the facility is tied directly to dedicated zero-emission renewable energy grids, which are currently cost-prohibitive in most metropolitan centers.",
        "prompt": "Based on the texts, how would Dr. Vance (Text 2) most likely respond to the claims made in Text 1 regarding environmental benefits?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "By disputing that hydroponic facilities achieve significant reductions in agricultural water consumption."
          },
          {
            "letter": "B",
            "text": "By arguing that pesticide runoff is less detrimental to waterways than commonly reported."
          },
          {
            "letter": "C",
            "text": "By asserting that operational energy demands may offset the ecological gains highlighted by proponents."
          },
          {
            "letter": "D",
            "text": "By recommending that vertical farming initiatives be moved strictly to rural locations."
          }
        ],
        "correct": "C",
        "explanation": "Text 1 highlights water and runoff reductions. Dr. Vance in Text 2 argues that the high electricity demand of lighting and climate control generates 'an immense carbon footprint' that undermines the eco-friendly reputation unless powered by dedicated zero-emission grids.",
        "hack": "Cross-Text Qualification: Author 2 doesn't deny Author 1's water facts; instead, Author 2 introduces a hidden cost (energy carbon footprint) that offsets those benefits.",
        "trap_breakdown": {
          "A": "Dr. Vance never disputes the 95% water reduction.",
          "B": "Pesticide runoff is not questioned in Text 2.",
          "D": "Rural relocation is never mentioned."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 112,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Boundaries — Conjunctive Adverb ('However')",
        "difficulty": "Module 2 Hard",
        "stem": "Biochemist Katalin Karikó spent decades investigating synthetic messenger RNA despite repeated grant rejections and institutional ______ her persistence ultimately enabled the rapid development of lipid-nanoparticle vaccines that saved millions of lives.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "demotions, however,"
          },
          {
            "letter": "B",
            "text": "demotions; however,"
          },
          {
            "letter": "C",
            "text": "demotions, however"
          },
          {
            "letter": "D",
            "text": "demotions however"
          }
        ],
        "correct": "B",
        "explanation": "Left of the boundary is a complete independent clause ('Biochemist Katalin Karikó spent... demotions'). Right of the boundary is a second complete independent clause ('her persistence ultimately enabled...'). 'However' is a conjunctive adverb, NOT a FANBOYS conjunction, so it cannot join two independent clauses with a comma. A semicolon before 'however' and a comma after it is required.",
        "hack": "The 'However' Law: Between two independent clauses, ', however,' is ALWAYS a comma-splice trap. You MUST use '; however,' or '. However,'.",
        "trap_breakdown": {
          "A": "Classic comma splice: 'however' is not a coordinating conjunction (FANBOYS).",
          "C": "Still a comma splice before 'however' and missing the comma after it.",
          "D": "Fused run-on sentence with zero punctuation between two independent clauses."
        },
        "videoTutorial": {
          "title": "Connector Placement — How to Punctuate 'However' on the SAT",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=sQYiSE2JN1I",
          "videoId": "sQYiSE2JN1I"
        }
      },
      {
        "id": 113,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Boundaries — Restrictive Appositives (750+ Trap)",
        "difficulty": "750–800 Challenge",
        "stem": "By measuring the Doppler shifts of H-alpha emission lines in the outer disks of spiral galaxies such as Andromeda, observational ______ demonstrated that orbital velocities remained flat at large radii rather than declining in accordance with Keplerian predictions, providing the first robust kinematic evidence for dark matter halos.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "astronomer, Vera Rubin,"
          },
          {
            "letter": "B",
            "text": "astronomer Vera Rubin,"
          },
          {
            "letter": "C",
            "text": "astronomer, Vera Rubin"
          },
          {
            "letter": "D",
            "text": "astronomer Vera Rubin"
          }
        ],
        "correct": "D",
        "explanation": "When a job title or descriptive noun phrase ('observational astronomer') precedes a proper name ('Vera Rubin') without a determiner like 'the', the name is a restrictive appositive that specifies *which* astronomer—so NO commas are placed before or after the name. Furthermore, no single comma may separate the subject ('Vera Rubin') from its verb ('demonstrated').",
        "hack": "Title + Name Rule: [Occupation] + [Name] + [Verb] = ZERO COMMAS ('astronomer Vera Rubin demonstrated'). Never put a comma between a subject and its verb!",
        "trap_breakdown": {
          "A": "Treats 'Vera Rubin' as nonessential; removing it leaves 'By measuring..., observational astronomer demonstrated,' which is ungrammatical (singular countable noun 'astronomer' lacks 'an' or 'the').",
          "B": "Places an illegal single comma between the subject ('Vera Rubin') and its verb ('demonstrated').",
          "C": "Places an illegal single comma between the title ('astronomer') and the restrictive name ('Vera Rubin')."
        },
        "videoTutorial": {
          "title": "Digital SAT Writing Guide from a Perfect Scorer",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
          "videoId": "1ppKIYbdEk0"
        }
      },
      {
        "id": 116,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Form, Structure & Sense — Dangling Modifiers",
        "difficulty": "Module 2 Hard",
        "stem": "Synthesized at pressures exceeding 150 gigapascals inside a diamond anvil cell, ______ at temperatures significantly higher than those tolerated by conventional niobium-titanium alloys.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "physicists observed that lanthanum superhydride exhibited zero electrical resistance"
          },
          {
            "letter": "B",
            "text": "zero electrical resistance was exhibited by lanthanum superhydride"
          },
          {
            "letter": "C",
            "text": "lanthanum superhydride exhibited zero electrical resistance"
          },
          {
            "letter": "D",
            "text": "the diamond anvil cell enabled lanthanum superhydride to exhibit zero electrical resistance"
          }
        ],
        "correct": "C",
        "explanation": "The introductory participial phrase ('Synthesized at pressures exceeding 150 gigapascals inside a diamond anvil cell,') must immediately precede the noun that was actually synthesized. What was synthesized at 150 GPa? 'Lanthanum superhydride'—not the physicists, not 'zero electrical resistance,' and not the anvil cell.",
        "hack": "Dangling Modifier Law: Ask 'WHAT was synthesized at 150 gigapascals?' That exact noun ('lanthanum superhydride') must be the very first grammatical subject after the comma.",
        "trap_breakdown": {
          "A": "Implies that 'physicists' were synthesized at 150 gigapascals inside a diamond anvil cell.",
          "B": "Implies that 'zero electrical resistance' (an abstract property) was synthesized.",
          "D": "Implies the 'diamond anvil cell' was synthesized inside itself."
        },
        "videoTutorial": {
          "title": "Digital SAT Writing Guide from a Perfect Scorer",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
          "videoId": "1ppKIYbdEk0"
        }
      },
      {
        "id": 205,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Modifier Placement — Introductory Participial Phrase",
        "difficulty": "Module 1 Core",
        "stem": "Originating in the highlands of southwestern Ethiopia, ______",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "coffee trade networks expanded rapidly across the Arabian Peninsula during the fifteenth century."
          },
          {
            "letter": "B",
            "text": "the Arabian Peninsula witnessed the rapid expansion of coffee cultivation during the fifteenth century."
          },
          {
            "letter": "C",
            "text": "the Coffea arabica plant was cultivated and traded throughout the Arabian Peninsula in the fifteenth century."
          },
          {
            "letter": "D",
            "text": "traders transported Coffea arabica seeds across the Arabian Peninsula in the fifteenth century."
          }
        ],
        "correct": "C",
        "explanation": "The introductory participial phrase 'Originating in the highlands of southwestern Ethiopia,' must be immediately followed by the grammatical subject that originated there: 'the Coffea arabica plant.'",
        "hack": "Comma-Touch Rule: Ask 'What originated in the highlands of Ethiopia?' The Coffea arabica plant! That exact noun must touch the comma.",
        "trap_breakdown": {
          "A": "Trade networks across the Arabian Peninsula did not originate inside the Ethiopian highlands.",
          "B": "The Arabian Peninsula did not originate in Ethiopia.",
          "D": "Traders did not originate in the highlands of Ethiopia."
        },
        "videoTutorial": {
          "title": "Digital SAT Writing Guide from a Perfect Scorer",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
          "videoId": "1ppKIYbdEk0"
        }
      },
      {
        "id": 117,
        "section": "Reading & Writing",
        "domain": "Expression of Ideas",
        "skill": "Logical Transitions (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "In classical Newtonian celestial mechanics, planetary orbits are modeled as closed Keplerian ellipses that repeat identically unless perturbed by third-body gravitational tugs. Under Einstein's general theory of relativity, ______ the curvature of spacetime around a massive star causes the perihelion of even an isolated planet's orbit to precess slightly with each revolution—an effect famously measured in Mercury's orbit.",
        "prompt": "Which choice completes the text with the most logical transition?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "consequently,"
          },
          {
            "letter": "B",
            "text": "by contrast,"
          },
          {
            "letter": "C",
            "text": "for instance,"
          },
          {
            "letter": "D",
            "text": "similarly,"
          }
        ],
        "correct": "B",
        "explanation": "Sentence 1 states that in Newtonian mechanics, an isolated planet's orbit is a closed ellipse that repeats identically. Sentence 2 states that under Einstein's general relativity, even an isolated planet's orbit precesses (rotates) with each revolution. Because the two frameworks predict opposite behaviors for an isolated orbit, 'by contrast,' is required.",
        "hack": "Transition Polarity: Newtonian (closed/static unless perturbed) vs. Relativity (precesses even when isolated) = Direct Contrast ('by contrast,').",
        "trap_breakdown": {
          "A": "'Consequently' signals cause-and-effect, but Newtonian mechanics did not cause relativistic spacetime curvature.",
          "C": "'For instance' introduces an example of the preceding claim, whereas Sentence 2 contradicts the Newtonian prediction.",
          "D": "'Similarly' signals agreement, ignoring the opposition between closed ellipses and precessing orbits."
        },
        "videoTutorial": {
          "title": "Connector Placement — How to Punctuate 'However' on the SAT",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=sQYiSE2JN1I",
          "videoId": "sQYiSE2JN1I"
        }
      },
      {
        "id": 206,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Rhetorical Synthesis — JWST NIRSpec Breakthrough",
        "difficulty": "Module 1 Core",
        "stem": "While researching a topic, a student has taken the following notes:\n• The James Webb Space Telescope (JWST) carries the Near-Infrared Spectrograph (NIRSpec).\n• NIRSpec can observe up to 100 astronomical objects simultaneously using a microshutter array.\n• In 2023, NIRSpec analyzed the atmospheric composition of exoplanet WASP-39b.\n• The transmission spectrum confirmed the presence of carbon dioxide and sulfur dioxide in WASP-39b’s atmosphere.\n• This was the first definitive detection of sulfur dioxide in any exoplanet atmosphere.",
        "prompt": "The student wants to highlight the specific scientific breakthrough achieved by NIRSpec on WASP-39b. Which choice most effectively uses the relevant information to accomplish this goal?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "Equipped with a microshutter array, the JWST's NIRSpec instrument can analyze up to 100 astronomical bodies at the same time."
          },
          {
            "letter": "B",
            "text": "When NIRSpec observed exoplanet WASP-39b, it made the historic first definitive detection of sulfur dioxide in an exoplanetary atmosphere."
          },
          {
            "letter": "C",
            "text": "Among its various targets, the James Webb Space Telescope analyzed the atmosphere of exoplanet WASP-39b in 2023."
          },
          {
            "letter": "D",
            "text": "Sulfur dioxide and carbon dioxide are both molecules that can be identified via transmission spectra using NIRSpec."
          }
        ],
        "correct": "B",
        "explanation": "The prompt asks to highlight the 'specific scientific breakthrough achieved by NIRSpec on WASP-39b.' Choice B directly states both WASP-39b and the historic breakthrough ('first definitive detection of sulfur dioxide in an exoplanetary atmosphere').",
        "hack": "Goal-First Filter: Prompt asks for 'specific scientific breakthrough on WASP-39b' -> must include both 'WASP-39b' and 'first definitive detection of sulfur dioxide.'",
        "trap_breakdown": {
          "A": "Describes the microshutter array hardware, omitting WASP-39b and the breakthrough.",
          "C": "States that JWST analyzed WASP-39b but omits what was discovered.",
          "D": "Omits WASP-39b and the historic 'first detection' milestone."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing: Rhetorical Synthesis Strategy",
          "channel": "Test Innovators",
          "url": "https://www.youtube.com/watch?v=cLDrVb2_0Jc",
          "videoId": "cLDrVb2_0Jc"
        }
      },
      {
        "id": 119,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Linear Systems — Infinitely Many Solutions",
        "difficulty": "Module 1 Core",
        "stem": "3x - 5y = 14\nkx - 15y = 42\n\nIn the given system of equations, k is a constant. If the system has infinitely many solutions, what is the value of k?",
        "prompt": "Select the correct value of k:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "3"
          },
          {
            "letter": "B",
            "text": "6"
          },
          {
            "letter": "C",
            "text": "9"
          },
          {
            "letter": "D",
            "text": "15"
          }
        ],
        "correct": "C",
        "desmosEquation": [
          "3x - 5y = 14",
          "kx - 15y = 42"
        ],
        "explanation": "For a linear system to have infinitely many solutions, the two equations must be exact scalar multiples of each other (identical lines). Comparing the y-coefficients and constants: (-15) / (-5) = 3 and 42 / 14 = 3. Multiplying the first equation by 3 gives 9x - 15y = 42, so k = 9.",
        "hack": "Desmos Protocol:\n1. Click 'Open & Solve in Desmos' (loads 3x - 5y = 14, kx - 15y = 42, and slider k).\n2. Drag slider k until the two lines lie directly on top of each other: k = 9.",
        "trap_breakdown": {
          "A": "Unchanged coefficient from the first equation (3x), forgetting to multiply by the scaling factor 3.",
          "B": "Added 3 + 3 instead of multiplying 3 * 3.",
          "D": "Copied the absolute value of the y-coefficient (15)."
        },
        "videoTutorial": {
          "title": "How to Solve Unknown Constant Questions with Desmos",
          "channel": "MVP Learners",
          "url": "https://www.youtube.com/watch?v=LNLbRHAXX4k",
          "videoId": "LNLbRHAXX4k"
        }
      },
      {
        "id": 145,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Linear Table Regression & Extrapolation",
        "difficulty": "Module 1 Core",
        "stem": "x | f(x)\n4 | 19\n10 | 46\n16 | 73\n\nThe table above shows three values of x and their corresponding values of f(x) for the linear function f. What is the value of f(28)?",
        "prompt": "Enter the value of f(28):",
        "type": "gridin",
        "correct": "127",
        "desmosEquation": [
          "y_1 ~ m*x_1 + b"
        ],
        "explanation": "Find the slope m: (46 - 19) / (10 - 4) = 27 / 6 = 4.5.\nNotice x jumps by +6 each row (from 4 to 10 to 16), and f(x) jumps by +27 each row. From x = 16 to x = 28 is a jump of +12 (two steps of +6), so f(28) = 73 + 2(27) = 127.",
        "hack": "Desmos Table Regression: Click '+' -> Table, enter (4, 19) and (10, 46), then type f(x) = mx + b or y₁ ~ mx₁ + b. Evaluate at x = 28 -> 127.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "7 Hard SAT Math Questions Solved with Desmos Regression",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=rSB5oMHfiZc",
          "videoId": "rSB5oMHfiZc"
        }
      },
      {
        "id": 122,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Systems of Linear Inequalities",
        "difficulty": "Module 2 Hard",
        "stem": "A biomedical lab processes two types of assay trays: Standard trays (x) and High-Sensitivity trays (y). Each batch must satisfy two constraints:\n• Reagent constraint: 4x + 2y <= 60\n• Incubator time constraint: 6x + 2y <= 72\n\nIf the lab processes at least 8 Standard trays (x >= 8), what is the maximum number of High-Sensitivity trays (y) it can process in a single batch?",
        "prompt": "Enter the maximum value of y:",
        "type": "gridin",
        "correct": "12",
        "desmosEquation": [
          "4x + 2y <= 60",
          "6x + 2y <= 72",
          "x >= 8"
        ],
        "explanation": "Since y decreases as x increases in both inequalities, y is maximized when x is as small as allowed (x = 8).\n• From inequality 1: 4(8) + 2y <= 60 -> 32 + 2y <= 60 -> 2y <= 28 -> y <= 14.\n• From inequality 2: 6(8) + 2y <= 72 -> 48 + 2y <= 72 -> 2y <= 24 -> y <= 12.\nBecause BOTH constraints must hold simultaneously, y cannot exceed 12.",
        "hack": "Desmos Feasible Region: Graph 4x + 2y <= 60, 6x + 2y <= 72, and x >= 8. Click the highest corner of the triple-shaded overlap region: (8, 12). Maximum y = 12.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 123,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Quadratic Vertex & Optimization",
        "difficulty": "Module 1 Core",
        "stem": "h(t) = -16t^2 + 80t + 96\n\nA sensor package is launched vertically upward from a coastal tower. The function above models its height h, in feet, above sea level t seconds after launch. What is the maximum height, in feet, reached by the sensor package?",
        "prompt": "Select the maximum height:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "2.5"
          },
          {
            "letter": "B",
            "text": "6"
          },
          {
            "letter": "C",
            "text": "96"
          },
          {
            "letter": "D",
            "text": "196"
          }
        ],
        "correct": "D",
        "desmosEquation": [
          "y = -16x^2 + 80x + 96"
        ],
        "explanation": "The time of maximum height is the vertex x-coordinate: t = -b / (2a) = -80 / (2 * -16) = 2.5 seconds. Substituting t = 2.5 into h(t): h(2.5) = -16(6.25) + 80(2.5) + 96 = -100 + 200 + 96 = 196 feet.",
        "hack": "Desmos 3-Second Peak Click: Graph y = -16x^2 + 80x + 96 and click the vertex dot (2.5, 196). The prompt asks for 'maximum height' (y = 196), NOT time (x = 2.5)!",
        "trap_breakdown": {
          "A": "2.5 is the time t (in seconds) when the package reaches its peak, not the height.",
          "B": "6 is the positive t-intercept when the package hits the water (h(6) = 0).",
          "C": "96 is the initial launch tower height at t = 0."
        },
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 212,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Vertex Form & Displaying Constants",
        "difficulty": "Module 1 Core",
        "stem": "f(x) = -2x^2 + 12x - 10\n\nWhich of the following equivalent forms of f(x) displays the maximum value of the function as a constant or coefficient?",
        "prompt": "Select the correct equivalent form:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "f(x) = -2(x - 3)^2 + 8"
          },
          {
            "letter": "B",
            "text": "f(x) = -2(x - 1)(x - 5)"
          },
          {
            "letter": "C",
            "text": "f(x) = -2(x^2 - 6x + 5)"
          },
          {
            "letter": "D",
            "text": "f(x) = -(2x - 6)^2 + 8"
          }
        ],
        "correct": "A",
        "desmosEquation": [
          "y = -2x^2 + 12x - 10",
          "y = -2(x - 3)^2 + 8"
        ],
        "explanation": "The parabola opens downward (a = -2 < 0) with vertex at (3, 8), so its maximum value is 8. Vertex form f(x) = -2(x - 3)^2 + 8 is both equivalent to f(x) and displays the maximum value (8) as a constant. (Note that Choice D expands to -4x^2 + 24x - 28, which is NOT equivalent to f(x)!)",
        "hack": "Desmos Equivalence + Constant Check: (1) Click vertex of y = -2x^2 + 12x - 10 -> (3, 8), so 8 must appear in the equation (narrows to A and D). (2) Graph A and D in Desmos: only A overlaps f(x)!",
        "trap_breakdown": {
          "B": "Factored form displays the x-intercepts (1 and 5), not the maximum value (8).",
          "C": "Partially factored form does not display 8.",
          "D": "Displays 8, but -(2x - 6)^2 + 8 = -4(x - 3)^2 + 8 is NOT equivalent to f(x)."
        },
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 207,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Nonlinear System Intersections",
        "difficulty": "Module 1 Core",
        "stem": "y = x^2 - 4x + 3\ny = 2x - 2\n\nThe solutions to the system of equations above are (x₁, y₁) and (x₂, y₂), where x₂ > x₁. What is the value of x₂ - y₁?",
        "prompt": "Select the value of x₂ - y₁:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "1"
          },
          {
            "letter": "B",
            "text": "3"
          },
          {
            "letter": "C",
            "text": "5"
          },
          {
            "letter": "D",
            "text": "7"
          }
        ],
        "correct": "C",
        "desmosEquation": [
          "y = x^2 - 4x + 3",
          "y = 2x - 2"
        ],
        "explanation": "Set x^2 - 4x + 3 = 2x - 2 -> x^2 - 6x + 5 = 0 -> (x - 1)(x - 5) = 0. Since x₂ > x₁, the two intersection points are (x₁, y₁) = (1, 0) and (x₂, y₂) = (5, 8). Therefore, x₂ - y₁ = 5 - 0 = 5.",
        "hack": "Desmos Intersection Click: Graph both equations and click the two intersection dots: (1, 0) and (5, 8). Then x₂ - y₁ = 5 - 0 = 5.",
        "trap_breakdown": {
          "A": "1 is x₁.",
          "B": "Subtracted 8 - 5 = 3.",
          "D": "Subtracted y₂ - x₁ = 8 - 1 = 7."
        },
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Lesson #1: Solve Any Equation",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=TFmt1VwZte8",
          "videoId": "TFmt1VwZte8"
        }
      },
      {
        "id": 208,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Radical Equations & Extraneous Roots",
        "difficulty": "Module 2 Hard",
        "stem": "sqrt(3x + 16) = x + 2\n\nWhat is the set of all real solutions to the given equation?",
        "prompt": "Select the correct solution set:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "-4 only"
          },
          {
            "letter": "B",
            "text": "3 only"
          },
          {
            "letter": "C",
            "text": "-4 and 3"
          },
          {
            "letter": "D",
            "text": "No real solution"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "y = sqrt(3x + 16)",
          "y = x + 2"
        ],
        "explanation": "Square both sides: 3x + 16 = (x + 2)^2 = x^2 + 4x + 4 -> x^2 + x - 12 = 0 -> (x + 4)(x - 3) = 0. Checking x = -4 in the original equation gives sqrt(4) = -2, which is false because the principal square root is always nonnegative. Checking x = 3 gives sqrt(25) = 5, which is valid. Only x = 3 is a real solution.",
        "hack": "Desmos Extraneous Shield: Graph y = sqrt(3x + 16) and y = x + 2. Because Desmos only plots the principal (nonnegative) square root, it NEVER shows extraneous roots! Only (3, 5) intersects.",
        "trap_breakdown": {
          "A": "-4 is the extraneous root.",
          "C": "Fell for the algebraic squaring trap by failing to test x = -4 in the original equation.",
          "D": "x = 3 is a valid real solution."
        },
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Lesson #1: Solve Any Equation",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=TFmt1VwZte8",
          "videoId": "TFmt1VwZte8"
        }
      },
      {
        "id": 211,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Rational Function Asymptotes vs. Removable Discontinuities",
        "difficulty": "Module 2 Hard",
        "stem": "f(x) = (x - 3) / (x^2 - 9)\n\nAt what value of x does the graph of y = f(x) in the xy-plane have a vertical asymptote?",
        "prompt": "Select the vertical asymptote:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "x = -3 only"
          },
          {
            "letter": "B",
            "text": "x = 3 only"
          },
          {
            "letter": "C",
            "text": "Both x = -3 and x = 3"
          },
          {
            "letter": "D",
            "text": "The graph has no vertical asymptotes."
          }
        ],
        "correct": "A",
        "desmosEquation": [
          "y = (x - 3)/(x^2 - 9)"
        ],
        "explanation": "Factor the denominator: f(x) = (x - 3) / [(x - 3)(x + 3)]. For x != 3, the (x - 3) factor cancels, leaving f(x) = 1 / (x + 3) with a removable hole at x = 3 and a vertical asymptote where the remaining denominator is zero: x = -3.",
        "hack": "Desmos Visual Check: Graph y = (x - 3)/(x^2 - 9). At x = -3 the curve shoots to ±∞ (vertical asymptote), whereas at x = 3 it smoothly passes through y = 1/6 (a hole)!",
        "trap_breakdown": {
          "B": "x = 3 is a removable discontinuity (hole), not a vertical asymptote.",
          "C": "Set x^2 - 9 = 0 without canceling the common factor (x - 3).",
          "D": "x = -3 remains in the denominator and creates a vertical asymptote."
        },
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 156,
        "section": "Math",
        "domain": "Problem Solving & Data Analysis",
        "skill": "Conditional Probability from Two-Way Table",
        "difficulty": "Module 1 Core",
        "stem": "                | Passed Inspection | Failed Inspection | Total\nKiln Batch A    |        138        |         12        |  150\nKiln Batch B    |        182        |         18        |  200\nTotal           |        320        |         30        |  350\n\nThe table above summarizes the inspection results for 350 ceramic insulator disks produced across two kiln batches. If one disk that failed inspection is selected at random, what is the probability that the disk came from Kiln Batch B?",
        "prompt": "Select the correct probability:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "18 / 350"
          },
          {
            "letter": "B",
            "text": "18 / 200"
          },
          {
            "letter": "C",
            "text": "18 / 30"
          },
          {
            "letter": "D",
            "text": "30 / 350"
          }
        ],
        "correct": "C",
        "explanation": "Look at the restricting condition after 'If one... is selected at random': 'one disk that FAILED INSPECTION.' That restricts the denominator to the 'Failed Inspection' column total (30). Out of those 30 failed disks, 18 came from Kiln Batch B, so the probability is 18 / 30 (or 3/5).",
        "hack": "Denominator Lock Rule: The phrase between 'If one' and 'is selected at random' ('one disk that failed inspection') ALWAYS defines your denominator (30)!",
        "trap_breakdown": {
          "A": "Used the grand total (350) as the denominator instead of the conditional 'Failed Inspection' total (30).",
          "B": "Conditioned on Kiln Batch B (200) instead of Failed Inspection (30).",
          "D": "Overall proportion of disks that failed inspection."
        },
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 209,
        "section": "Math",
        "domain": "Problem Solving & Data Analysis",
        "skill": "Standard Deviation vs. Mean Under Translation",
        "difficulty": "Module 1 Core",
        "stem": "Data Set X consists of 7 integers: {12, 15, 18, 21, 24, 27, 30}.\nData Set Y is created by adding 15 to each value in Data Set X: {27, 30, 33, 36, 39, 42, 45}.\n\nWhich statement correctly compares the mean and the standard deviation of Data Set X and Data Set Y?",
        "prompt": "Select the correct comparison:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "The mean of Data Set Y is greater, and the standard deviation of Data Set Y is greater."
          },
          {
            "letter": "B",
            "text": "The mean of Data Set Y is greater, and the standard deviation of Data Set Y is equal."
          },
          {
            "letter": "C",
            "text": "The mean of Data Set Y is equal, and the standard deviation of Data Set Y is greater."
          },
          {
            "letter": "D",
            "text": "Both the mean and standard deviation of Data Set Y are equal to those of Data Set X."
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "stdev(12,15,18,21,24,27,30)",
          "stdev(27,30,33,36,39,42,45)"
        ],
        "explanation": "Adding a constant (+15) to every value in a data set shifts the entire distribution right by 15 units, increasing the mean by 15. However, standard deviation measures the spread (distances from the mean), which remains completely unchanged under addition/subtraction of a constant.",
        "hack": "Desmos Built-In Stats: Type stdev(12,15,18,21,24,27,30) and stdev(27,30,33,36,39,42,45) in Desmos—both output 6.48074! Adding a constant NEVER changes standard deviation; multiplying by k scales standard deviation by |k|.",
        "trap_breakdown": {
          "A": "Confused shifting a data set (addition) with scaling a data set (multiplication).",
          "C": "Reversed mean and standard deviation behavior.",
          "D": "Forgot that adding 15 increases the mean by 15."
        },
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 210,
        "section": "Math",
        "domain": "Problem Solving & Data Analysis",
        "skill": "Successive Percent Multipliers (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "In 2022, the annual power output of a municipal solar array was P megawatt-hours. In 2023, its annual power output increased by 35% over the 2022 output. In 2024, equipment maintenance reduced the annual power output by 20% compared to the 2023 output. If the 2024 power output is k * P, what is the value of k?",
        "prompt": "Enter the value of k (as a decimal or fraction):",
        "type": "gridin",
        "correct": "1.08",
        "desmosEquation": [
          "1.35 * 0.80"
        ],
        "explanation": "Convert each percentage change to a decimal multiplier:\n• 35% increase in 2023: multiply by (1 + 0.35) = 1.35.\n• 20% decrease in 2024: multiply by (1 - 0.20) = 0.80.\nCombined multiplier: k = 1.35 * 0.80 = 1.08 (an overall 8% increase, NOT 15%!).",
        "hack": "Multiplier Chain Rule: Never add or subtract percentages (+35% - 20% != +15%)! Always multiply decimal factors: 1.35 * 0.80 = 1.08.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "700s Club: The Hardest Digital SAT Math Problems",
          "channel": "Strategic Test Prep",
          "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
          "videoId": "lrIRF-bFjkw"
        }
      },
      {
        "id": 154,
        "section": "Math",
        "domain": "Geometry & Trigonometry",
        "skill": "Radian Arc Length & Sector Area Ratio (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "In a circle with radius 12 centimeters, a central angle of measure θ radians intercepts an arc of length 15π centimeters. What is the area, in square centimeters, of the sector formed by this central angle?",
        "prompt": "Select the area of the sector:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "45π"
          },
          {
            "letter": "B",
            "text": "90π"
          },
          {
            "letter": "C",
            "text": "144π"
          },
          {
            "letter": "D",
            "text": "180π"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "(1/2) * 12 * 15"
        ],
        "explanation": "Method 1 (Direct Shortcut): Just like a triangle's area is (1/2) * base * height, the area of a circular sector is ALWAYS:\nArea = (1/2) * r * s (where r is the radius and s is the arc length)!\nArea = (1/2) * 12 * (15π) = 90π.\nMethod 2: s = rθ -> 15π = 12θ -> θ = 5π/4. Sector area = (1/2)r^2 θ = (1/2)(144)(5π/4) = 90π.",
        "hack": "Sector Area Golden Formula: A = (1/2) * r * s (half of radius times arc length)! You don't even need to find θ: (1/2)(12)(15π) = 90π in 3 seconds!",
        "trap_breakdown": {
          "A": "Divided by 4 instead of 2.",
          "C": "144π is the area of the entire circle (πr^2).",
          "D": "Multiplied r * s = 12 * 15π = 180π without multiplying by 1/2."
        },
        "videoTutorial": {
          "title": "Module 2 SAT Math Practice: 22 Difficult Questions Walkthrough",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=Ku5gIHH6h4Q",
          "videoId": "Ku5gIHH6h4Q"
        }
      }
    ]
  },
  "full_test_2": {
    "id": "full_test_2",
    "title": "Exam 2: Hard Module 2 Simulation (700–800 Tier)",
    "badge": "EXAM 2 · HARD MODULE 2",
    "phase": "Phase 3: Hard Module 2 Pressure Testing",
    "category": "Full Practice Exams",
    "difficulty": "Hard Module 2 (720–780)",
    "description": "22-question upper-module simulation featuring dense academic passages, punctuation traps, and multi-step constant systems.",
    "timeLimit": 2100,
    "questions": [
      {
        "id": 101,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Words in Context",
        "difficulty": "Module 1 Core",
        "stem": "Ecologists studying the regeneration of temperate pine forests noted that controlled burns did not deplete topsoil nutrients as previously feared; rather, post-fire soil analyses demonstrated that the ash deposit served to ______ the presence of bioavailable potassium and phosphorus, accelerating seedling growth.",
        "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "mitigate"
          },
          {
            "letter": "B",
            "text": "augment"
          },
          {
            "letter": "C",
            "text": "obscure"
          },
          {
            "letter": "D",
            "text": "fabricate"
          }
        ],
        "correct": "B",
        "explanation": "The semicolon and pivot word 'rather' set up a direct contrast with 'deplete' (reduce/exhaust). Because the ash deposit accelerated seedling growth instead of depleting nutrients, the missing verb must mean 'increase' or 'add to.' 'Augment' means to make greater by adding to it.",
        "hack": "Pivot Equation: 'not deplete; rather, [blank]' -> Blank = opposite of deplete = increase (augment).",
        "trap_breakdown": {
          "A": "'Mitigate' means to make less severe or painful. It collocates with negative nouns (mitigate damage/risk), not with increasing nutrient presence.",
          "C": "'Obscure' means to hide or make unclear, which contradicts the empirical post-fire soil analyses.",
          "D": "'Fabricate' means to invent fraudulently or manufacture, which makes no biological sense for ash deposits."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 102,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Words in Context (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "The biographer refused to depict the envoy as a one-dimensional paragon, recognizing that statecraft under duress is rarely unblemished; instead, she constructed a nuanced portrait that did not shy away from the envoy's ______ maneuvers during clandestine treaty negotiations.",
        "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "duplicitous"
          },
          {
            "letter": "B",
            "text": "magnanimous"
          },
          {
            "letter": "C",
            "text": "exemplary"
          },
          {
            "letter": "D",
            "text": "innocuous"
          }
        ],
        "correct": "A",
        "explanation": "The passage contrasts 'one-dimensional paragon' (model of perfection) and 'unblemished' with a 'nuanced portrait that did not shy away from' morally gray or flawed actions during secret ('clandestine') negotiations. 'Duplicitous' means deceitful or double-dealing, fitting the contrast.",
        "hack": "Charge Matching: 'not a paragon' + 'rarely unblemished' + 'did not shy away from' requires a negatively charged adjective describing morally questionable diplomacy.",
        "trap_breakdown": {
          "B": "'Magnanimous' means generous or forgiving toward a rival—a positive trait that would reinforce rather than complicate a 'paragon' image.",
          "C": "'Exemplary' is a near-synonym of 'paragon' (serving as a desirable model), violating the contrast.",
          "D": "'Innocuous' means harmless or inoffensive; a biographer would not need courage ('did not shy away from') to mention harmless actions."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 104,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Words in Context (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "In her critique of minimalist architecture, theorist Sanford Kwinter argues that stripping a civic building of all regional ornament does not achieve universal legibility; instead, such austerity can render the structure ______ to the local public, who find no familiar cultural signposts by which to interpret its purpose.",
        "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "opaque"
          },
          {
            "letter": "B",
            "text": "deferential"
          },
          {
            "letter": "C",
            "text": "ubiquitous"
          },
          {
            "letter": "D",
            "text": "ostentatious"
          }
        ],
        "correct": "A",
        "explanation": "The passage contrasts 'universal legibility' (being easy to read/understand) with a state in which the public has 'no familiar cultural signposts by which to interpret its purpose.' 'Opaque' means impenetrable to understanding or hard to decipher—the exact opposite of 'legible.'",
        "hack": "Antonym Parallelism: 'does not achieve legibility; instead, renders it [blank]' -> Blank = illegible / impenetrable = opaque.",
        "trap_breakdown": {
          "B": "'Deferential' means showing respectful submission, which does not contrast with 'legibility.'",
          "C": "'Ubiquitous' means present everywhere, whereas the passage discusses whether people can interpret a building's purpose.",
          "D": "'Ostentatious' means showy or extravagantly ornate—the exact opposite of 'stripping a building of all ornament' and 'austerity.'"
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 106,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Cross-Text Connections",
        "difficulty": "750–800 Challenge",
        "stem": "Text 1\n paleoanthropologists have long attributed the rapid disappearance of Neanderthals roughly 40,000 years ago to direct resource competition with incoming anatomically modern humans (Homo sapiens), citing archaeological horizons in western Europe where Aurignacian toolkits abruptly replace Mousterian assemblages.\n\nText 2\nHigh-resolution radiocarbon recalibrations by Ludovic Slimak and colleagues indicate that in several Mediterranean river valleys, Mousterian settlements vanished centuries before the earliest documented arrival of Homo sapiens, coinciding instead with extreme Heinrich Stadial 4 geomagnetic and climatic oscillations. Meanwhile, genomic sequencing shows repeated interbreeding pulses between the two hominins over tens of thousands of years.",
        "prompt": "Based on the texts, how would the author of Text 2 most likely characterize the explanation in Text 1?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "As compelling for Mediterranean river valleys but inapplicable to archaeological horizons in western Europe."
          },
          {
            "letter": "B",
            "text": "As an oversimplification that overlooks both chronological mismatches in local extinctions and evidence of demographic assimilation."
          },
          {
            "letter": "C",
            "text": "As fundamentally flawed because Aurignacian toolkits were actually manufactured by Neanderthals rather than Homo sapiens."
          },
          {
            "letter": "D",
            "text": "As accurate regarding the role of climatic oscillations but mistaken about the timing of interbreeding pulses."
          }
        ],
        "correct": "B",
        "explanation": "Text 1 attributes Neanderthal disappearance solely to competition with arriving Homo sapiens. Text 2 counters with two facts: (1) some Neanderthal sites vanished *before* Homo sapiens arrived (chronological mismatch during climate shifts), and (2) genomic data shows repeated interbreeding (assimilation).",
        "hack": "Cross-Text Checklist: When Text 2 has two sentences ('Meanwhile...'), the correct answer often synthesizes BOTH counter-points.",
        "trap_breakdown": {
          "A": "Reverses Text 2: Text 2 shows the competition model fails in Mediterranean valleys because Neanderthals vanished before H. sapiens arrived there.",
          "C": "Unsupported fabrication: neither text claims Neanderthals made Aurignacian tools.",
          "D": "Text 1 never mentioned climatic oscillations or interbreeding."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 107,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Central Ideas & Details",
        "difficulty": "Module 2 Hard",
        "stem": "Many neuroscientists long adhered to the doctrine that neurogenesis—the formation of new functional neurons—ceased completely in the mammalian brain shortly after birth. However, retrospective birth-dating studies measuring carbon-14 isotopes incorporated into neuronal DNA during atmospheric nuclear testing between 1945 and 1963 have detected a steady annual turnover rate of roughly 1.75% in the human hippocampal dentate gyrus well into late adulthood.",
        "prompt": "Which choice best states the main idea of the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "Atmospheric nuclear testing between 1945 and 1963 permanently altered the rate of DNA replication in the human hippocampus."
          },
          {
            "letter": "B",
            "text": "Isotopic dating of neuronal DNA provides empirical evidence challenging the longstanding view that adult human brains cannot generate new neurons."
          },
          {
            "letter": "C",
            "text": "The hippocampal dentate gyrus is the only region of the mammalian brain capable of repairing itself after radiation exposure."
          },
          {
            "letter": "D",
            "text": "Neuroscientists have abandoned carbon-14 birth-dating because its 1.75% margin of error is too large to measure adult neurogenesis."
          }
        ],
        "correct": "B",
        "explanation": "The passage follows the classic 'Old Doctrine + Pivot (However) + New Empirical Discovery' structure. Carbon-14 dating of DNA showed a 1.75% annual neuron turnover in adult humans, refuting the belief that neurogenesis ends after birth.",
        "hack": "Old Consensus ('long adhered') + 'However' = The Main Idea is ALWAYS the post-pivot discovery.",
        "trap_breakdown": {
          "A": "Confuses the measurement tool (carbon-14 tracer from 1945–1963 testing) with a biological cause.",
          "C": "Introduces 'repairing itself after radiation exposure,' which is never mentioned.",
          "D": "Misreads '1.75% annual turnover rate' as a 'margin of error.'"
        },
        "videoTutorial": {
          "title": "Digital SAT Reading Pacing & Module Order Strategy",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=STjlOnEH5sY",
          "videoId": "STjlOnEH5sY"
        }
      },
      {
        "id": 108,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Command of Evidence (Quantitative)",
        "difficulty": "Module 2 Hard",
        "stem": " Pollinator Foraging Metrics Across Three Landscape Types\n• Continuous Tallgrass Prairie: Mean Flight Duration = 14.2 min | Mean Nectar Yield = 31.8 mg | Floral Species Visited = 6.4\n• Suburban Hedgerow Corridor: Mean Flight Duration = 19.5 min | Mean Nectar Yield = 26.1 mg | Floral Species Visited = 4.8\n• Fragmented Urban Patch: Mean Flight Duration = 38.4 min | Mean Nectar Yield = 14.2 mg | Floral Species Visited = 2.1\n\nA conservation biologist hypothesizes that habitat fragmentation forces native bumblebees (Bombus impatiens) to expend substantially more flight time per foraging bout while yielding less than half the caloric nectar reward obtained in intact grassland ecosystems.",
        "prompt": "Which choice most effectively uses data from the table to support the biologist's hypothesis?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "Bumblebees in Suburban Hedgerow Corridors visited an average of 4.8 floral species per bout, whereas those in Fragmented Urban Patches visited 2.1 species."
          },
          {
            "letter": "B",
            "text": "Bumblebees in Fragmented Urban Patches averaged 38.4 minutes per flight but collected only 14.2 mg of nectar, compared with 14.2 minutes and 31.8 mg in Continuous Tallgrass Prairie."
          },
          {
            "letter": "C",
            "text": "Mean nectar yield in Continuous Tallgrass Prairie (31.8 mg) was higher than in Suburban Hedgerow Corridors (26.1 mg), despite both habitats supporting more than 4 floral species."
          },
          {
            "letter": "D",
            "text": "In Fragmented Urban Patches, the numerical value of mean flight duration (38.4) exceeded the numerical value of mean nectar yield in Continuous Tallgrass Prairie (31.8)."
          }
        ],
        "correct": "B",
        "explanation": "The hypothesis makes two linked quantitative claims comparing fragmented habitats to intact grasslands: (1) substantially more flight time, and (2) less than half the nectar reward. Choice B cites both variables for Fragmented Urban Patch vs. Continuous Tallgrass Prairie (38.4 min vs. 14.2 min; and 14.2 mg is less than half of 31.8 mg, since 31.8 / 2 = 15.9).",
        "hack": "Two-Part Claim Rule: If the hypothesis has Cause A (flight time) and Effect B (< 50% nectar yield), the correct choice MUST cite numbers for BOTH A and B.",
        "trap_breakdown": {
          "A": "True data from the table, but cites 'Floral Species Visited' instead of flight duration and nectar yield.",
          "C": "Compares Suburban Hedgerow to Prairie, where 26.1 mg is NOT 'less than half' of 31.8 mg.",
          "D": "Compares apples to oranges (comparing minutes in one habitat to milligrams in another)."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 109,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Inferences (750+ Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "In sovereign debt restructurings, 'collective action clauses' (CACs) allow a supermajority of bondholders—typically 75% by principal value—to bind holdout creditors to revised payment terms. Prior to 2014, however, most sovereign bonds used series-by-series CACs, meaning a distressed nation had to secure a 75% vote within each individual bond issuance; a hedge fund acquiring just 26% of a single small series could block restructuring of that series and litigate for full face value. Consequently, the International Monetary Fund endorsed 'single-limb aggregated' CACs, which pool votes across all outstanding bond series simultaneously, implying that under post-2014 single-limb contracts, ______",
        "prompt": "Which choice most logically completes the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "sovereign borrowers no longer need to obtain the consent of at least 75% of total bondholders to modify payment schedules."
          },
          {
            "letter": "B",
            "text": "accumulating a 26% stake in one isolated bond series is insufficient for a creditor to veto a restructuring if the aggregate supermajority threshold is met across all series."
          },
          {
            "letter": "C",
            "text": "holdout creditors are legally prohibited from purchasing more than 25% of any single sovereign bond issuance on the secondary market."
          },
          {
            "letter": "D",
            "text": "series-by-series voting remains necessary whenever a sovereign borrower seeks to restructure domestic-currency debt rather than foreign-currency debt."
          }
        ],
        "correct": "B",
        "explanation": "Under pre-2014 series-by-series CACs, buying 26% of one small series blocked that series because 75% was required in *each* series. Because post-2014 'single-limb aggregated' CACs pool votes across *all* series simultaneously, holding 26% of a single small series can no longer block the restructuring if the pooled vote across all series reaches the supermajority.",
        "hack": "Logical Completion Rule: Trace the exact mechanism that changed (per-series 75% vote -> pooled all-series vote) and negate the specific loophole (26% in one series blocking the deal).",
        "trap_breakdown": {
          "A": "False: the supermajority threshold across pooled bondholders still applies.",
          "C": "Confuses voting power during restructuring with a ban on purchasing bonds.",
          "D": "Introduces 'domestic-currency vs. foreign-currency debt,' which is never mentioned in the text."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading Pacing & Module Order Strategy",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=STjlOnEH5sY",
          "videoId": "STjlOnEH5sY"
        }
      },
      {
        "id": 114,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Boundaries — Matching Dashes & Colons",
        "difficulty": "Module 2 Hard",
        "stem": "The restoration of the thirteenth-century Alhambra palace complex in Granada required artisans to replicate *alicatado*—a labor-intensive mosaic technique in which glazed ceramic tiles are hand-cut into interlocking geometric ______ and set into wet mortar to form seamless mathematical tessellations.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "polygons—"
          },
          {
            "letter": "B",
            "text": "polygons,"
          },
          {
            "letter": "C",
            "text": "polygons;"
          },
          {
            "letter": "D",
            "text": "polygons"
          }
        ],
        "correct": "D",
        "explanation": "Look at the structure of the appositive phrase opened by the em-dash after *alicatado*: 'a labor-intensive mosaic technique in which glazed ceramic tiles are [hand-cut into interlocking geometric polygons] and [set into wet mortar...]'. Both 'hand-cut...' and 'set into wet mortar...' are parallel passive participles inside the 'in which' clause that continues to the end of the sentence. Therefore, the dash does NOT close after 'polygons'—no punctuation is needed between the two compound phrases joined by 'and.'",
        "hack": "Fake-Closing-Dash Trap: Just because you see an em-dash earlier in the sentence doesn't mean the blank closes it! Check whether 'and set into wet mortar' belongs inside the definition of *alicatado*—it does, so the dash runs all the way to the period.",
        "trap_breakdown": {
          "A": "Closing the dash after 'polygons' leaves 'The restoration... required artisans to replicate alicatado and set into wet mortar,' which is ungrammatical.",
          "B": "A comma before 'and' is only used when joining two complete independent clauses, not two participial phrases ('are hand-cut... and set...').",
          "C": "A semicolon cannot separate two halves of a compound verb phrase."
        },
        "videoTutorial": {
          "title": "Commas, Colons & Dashes: SAT Boundaries Within a Sentence",
          "channel": "PrepFriend101",
          "url": "https://www.youtube.com/watch?v=YaU6sZaxA3M",
          "videoId": "YaU6sZaxA3M"
        }
      },
      {
        "id": 115,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Form, Structure & Sense — Subject-Verb Inversion",
        "difficulty": "750–800 Challenge",
        "stem": "Beneath the hyper-arid salt flats of Chile's Atacama Desert ______ of extremophilic halobacteria and archaea that derive metabolic energy by oxidizing atmospheric trace gases rather than performing photosynthesis.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "lies a diverse consortium"
          },
          {
            "letter": "B",
            "text": "lie a diverse consortium"
          },
          {
            "letter": "C",
            "text": "are lying a diverse consortium"
          },
          {
            "letter": "D",
            "text": "have lain a diverse consortium"
          }
        ],
        "correct": "A",
        "explanation": "When a sentence begins with a locative prepositional phrase ('Beneath the hyper-arid salt flats of Chile's Atacama Desert'), the subject and verb invert: the true subject comes *after* the verb. The head noun of the subject is 'a diverse consortium' (singular collective noun), ignoring the prepositional phrase 'of extremophilic halobacteria and archaea.' Therefore, the singular verb 'lies' is required.",
        "hack": "Inverted Sentence Hack: Flip the sentence around: 'A diverse consortium (singular) [lies] beneath the salt flats.'",
        "trap_breakdown": {
          "B": "Plural verb ('lie')—tricked by the plural nouns 'flats' before the blank and 'halobacteria and archaea' after the subject.",
          "C": "Plural auxiliary ('are lying') fails to agree with singular 'a diverse consortium.'",
          "D": "Plural auxiliary ('have lain') fails to agree with singular 'a diverse consortium.'"
        },
        "videoTutorial": {
          "title": "Digital SAT Writing Guide from a Perfect Scorer",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
          "videoId": "1ppKIYbdEk0"
        }
      },
      {
        "id": 118,
        "section": "Reading & Writing",
        "domain": "Expression of Ideas",
        "skill": "Rhetorical Synthesis (Goal Filtering)",
        "difficulty": "Module 2 Hard",
        "stem": "While researching a topic, a student has taken the following notes:\n• Pando is a clonal colony of quaking aspen (Populus tremuloides) located in the Fishlake National Forest in Utah.\n• Although it appears to be a forest of over 47,000 individual trees, all the stems are genetically identical and connected by a single underground root system.\n• Spanning 106 acres and weighing an estimated 6,000 metric tons, Pando is widely considered the heaviest known living organism on Earth.\n• By contrast, the largest known individual sequoia tree (General Sherman) weighs approximately 1,900 metric tons.\n• Ecologists have warned that deer and cattle overgrazing on young aspen shoots is preventing Pando from regenerating aging stems.\n\nThe student wants to explain why Pando is classified as a single organism despite its appearance. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
        "prompt": "Select the choice that best accomplishes the student's goal:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "Weighing an estimated 6,000 metric tons across 106 acres in Utah, Pando is more than three times heavier than the General Sherman sequoia."
          },
          {
            "letter": "B",
            "text": "Although Pando looks like a forest of 47,000 separate quaking aspen trees, its stems are genetically identical and share a single interconnected underground root system."
          },
          {
            "letter": "C",
            "text": "Located in Utah's Fishlake National Forest, the clonal aspen colony known as Pando faces regeneration threats because deer and cattle graze on its young shoots."
          },
          {
            "letter": "D",
            "text": "Unlike the General Sherman sequoia, which is an individual tree weighing 1,900 metric tons, Pando is threatened by overgrazing across its 106-acre habitat."
          }
        ],
        "correct": "B",
        "explanation": "Filter strictly by the two parts of the student's goal: (1) 'despite its appearance' ('looks like a forest of 47,000 separate trees') and (2) 'why it is classified as a single organism' ('stems are genetically identical and share a single interconnected underground root system'). Only Choice B satisfies both parts.",
        "hack": "15-Second Synthesis Rule: Goal = 'why single organism' + 'despite appearance.' Cross out A (weight comparison), C (grazing threat), and D (sequoia + grazing).",
        "trap_breakdown": {
          "A": "Uses true notes about weight, but never explains why Pando is a single organism or how it appears.",
          "C": "Focuses on location and overgrazing threats rather than the biological basis for being a single organism.",
          "D": "Combines weight and overgrazing facts without addressing the prompt's goal."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing: Rhetorical Synthesis Strategy",
          "channel": "Test Innovators",
          "url": "https://www.youtube.com/watch?v=cLDrVb2_0Jc",
          "videoId": "cLDrVb2_0Jc"
        }
      },
      {
        "id": 120,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Linear Systems — No Solution Fractional Constants (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "(3/4)x - (5/6)y = 11\nkx - (15/8)y = 20\n\nIn the given system of equations, k is a constant. If the system has no solution, what is the value of k?",
        "prompt": "Enter the value of k (as a fraction or decimal):",
        "type": "gridin",
        "correct": "27/16",
        "desmosEquation": [
          "(3/4)x - (5/6)y = 11",
          "kx - (15/8)y = 20"
        ],
        "explanation": "A linear system has no solution when the lines are parallel (identical x-to-y coefficient ratios, different constant ratio). Set the ratio of x-coefficients equal to the ratio of y-coefficients:\nk / (3/4) = (-15/8) / (-5/6)\nk / (3/4) = (15/8) * (6/5) = 18/8 = 9/4\nk = (3/4) * (9/4) = 27/16 (or 1.6875).",
        "hack": "Desmos Ratio Trick: Type k / (3/4) ~ (-15/8) / (-5/6) or graph both lines and adjust k until slopes match: 27/16 = 1.6875.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "How to Solve Unknown Constant Questions with Desmos",
          "channel": "MVP Learners",
          "url": "https://www.youtube.com/watch?v=LNLbRHAXX4k",
          "videoId": "LNLbRHAXX4k"
        }
      },
      {
        "id": 121,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Perpendicular Line Parameter System (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "6x + 8y = 29\nkx - 9y = 14\n\nIn the xy-plane, the graphs of the two linear equations above are perpendicular. What is the value of the constant k?",
        "prompt": "Select the value of k:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "-12"
          },
          {
            "letter": "B",
            "text": "-27/4"
          },
          {
            "letter": "C",
            "text": "27/4"
          },
          {
            "letter": "D",
            "text": "12"
          }
        ],
        "correct": "D",
        "desmosEquation": [
          "6x + 8y = 29",
          "kx - 9y = 14"
        ],
        "explanation": "Rewrite Line 1 in slope-intercept form: 8y = -6x + 29 -> y = (-3/4)x + 29/8, so slope m₁ = -3/4. A perpendicular line has negative reciprocal slope m₂ = +4/3. From Line 2: 9y = kx - 14 -> y = (k/9)x - 14/9, so m₂ = k/9. Setting k/9 = 4/3 gives k = 36/3 = 12.",
        "hack": "Standard Form Dot-Product Shortcut: Two lines A₁x + B₁y = C₁ and A₂x + B₂y = C₂ are perpendicular if and only if A₁A₂ + B₁B₂ = 0. Here: 6(k) + 8(-9) = 0 -> 6k = 72 -> k = 12 in 5 seconds!",
        "trap_breakdown": {
          "A": "Sign error: forgot that the second equation has -9y, so its slope is +k/9, not -k/9.",
          "B": "Set slopes equal (parallel) instead of negative reciprocals: k/9 = -3/4 -> k = -27/4.",
          "C": "Used parallel ratio without sign (-3/4 * -9 = 27/4)."
        },
        "videoTutorial": {
          "title": "700s Club: The Hardest Digital SAT Math Problems",
          "channel": "Strategic Test Prep",
          "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
          "videoId": "lrIRF-bFjkw"
        }
      },
      {
        "id": 124,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Quadratic Discriminant & Tangency (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "y = 2x^2 - 11x + c\ny = 3x - 5\n\nIn the given system of equations, c is a constant. If the system has exactly one real solution (x, y), what is the value of c?",
        "prompt": "Enter the value of c:",
        "type": "gridin",
        "correct": "19.5",
        "desmosEquation": [
          "y = 2x^2 - 11x + c",
          "y = 3x - 5"
        ],
        "explanation": "Set the two equations equal to find their intersection: 2x^2 - 11x + c = 3x - 5 -> 2x^2 - 14x + (c + 5) = 0. For a quadratic equation ax^2 + bx + C = 0 to have exactly one real solution, its discriminant b^2 - 4aC must equal 0:\n(-14)^2 - 4(2)(c + 5) = 0\n196 - 8(c + 5) = 0\nc + 5 = 196 / 8 = 24.5\nc = 19.5 (or 39/2).",
        "hack": "Desmos Tangency Slider: Graph y = 2x^2 - 11x + c and y = 3x - 5. Slide c until the parabola is tangent to the line at a single point (3.5, 5.5): c = 19.5 (or 39/2).",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "25 Hard SAT Math Module 2 Questions + Desmos Regression",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=661RKRiKDdw",
          "videoId": "661RKRiKDdw"
        }
      },
      {
        "id": 125,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Sum of Solutions of Shifted Quadratic (750+ Trap)",
        "difficulty": "750–800 Challenge",
        "stem": "3(x - 7)^2 - 10(x - 7) - 8 = 0\n\nWhat is the sum of all real solutions to the given equation?",
        "prompt": "Select the sum of the solutions:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "10/3"
          },
          {
            "letter": "B",
            "text": "32/3"
          },
          {
            "letter": "C",
            "text": "14"
          },
          {
            "letter": "D",
            "text": "52/3"
          }
        ],
        "correct": "D",
        "desmosEquation": [
          "y = 3(x - 7)^2 - 10(x - 7) - 8"
        ],
        "explanation": "Let u = x - 7. Then 3u^2 - 10u - 8 = 0. By Vieta's formulas, the sum of the two u-values is u₁ + u₂ = -(-10)/3 = 10/3. Since x₁ = u₁ + 7 and x₂ = u₂ + 7, the sum of the x-solutions is:\nx₁ + x₂ = (u₁ + u₂) + 14 = 10/3 + 42/3 = 52/3.\n(Directly: u = 4 or u = -2/3 -> x = 11 or x = 19/3 -> 11 + 19/3 = 52/3.)",
        "hack": "Desmos Zero Click: Graph y = 3(x - 7)^2 - 10(x - 7) - 8. Click the two x-intercepts: (6.333, 0) and (11, 0). Sum = 19/3 + 11 = 52/3 (≈ 17.333)!",
        "trap_breakdown": {
          "A": "10/3 is the sum of u = x - 7, forgetting that shifting right by 7 adds 7 to EACH of the two roots (+14 total).",
          "B": "Added 7 only once (10/3 + 7 = 31/3 or 32/3) instead of adding 7 to both roots.",
          "C": "Doubled the shift (2 * 7 = 14) while ignoring the -10(x - 7) linear term."
        },
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Lesson #1: Solve Any Equation",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=TFmt1VwZte8",
          "videoId": "TFmt1VwZte8"
        }
      },
      {
        "id": 126,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Exponential Time-Scaling Models (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "A culture of bioluminescent marine bacteria initially contains 12,000 cells and triples in population every 4 hours. Which function P(t) models the number of cells in the culture t DAYS after the initial measurement?",
        "prompt": "Select the correct function P(t):",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "P(t) = 12,000(3)^(t/4)"
          },
          {
            "letter": "B",
            "text": "P(t) = 12,000(3)^(4t)"
          },
          {
            "letter": "C",
            "text": "P(t) = 12,000(3)^(6t)"
          },
          {
            "letter": "D",
            "text": "P(t) = 12,000(3)^(t/6)"
          }
        ],
        "correct": "C",
        "desmosEquation": [
          "y = 12000 * 3^(6x)"
        ],
        "explanation": "Watch the unit conversion trap: the growth period is given in HOURS (every 4 hours), but t is measured in DAYS (1 day = 24 hours). In t = 1 day (24 hours), how many 4-hour tripling periods occur? 24 / 4 = 6 tripling periods per day. Therefore, after t days, the population has tripled 6t times: P(t) = 12,000(3)^(6t).",
        "hack": "Plug-in t = 1 Day Test: In 1 day (24 hours), a culture that triples every 4 hours must triple 6 times -> exponent at t = 1 must be 6! Only 3^(6t) gives 3^6 when t = 1.",
        "trap_breakdown": {
          "A": "Classic unit trap: 3^(t/4) would be correct if t were measured in HOURS, not days.",
          "B": "Multiplied by 4 instead of dividing 24 hours / 4 hours = 6.",
          "D": "Divided t by 6 (which would mean tripling once every 6 days)."
        },
        "videoTutorial": {
          "title": "700s Club: The Hardest Digital SAT Math Problems",
          "channel": "Strategic Test Prep",
          "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
          "videoId": "lrIRF-bFjkw"
        }
      },
      {
        "id": 127,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Polynomial Factor & Remainder Theorem (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "p(x) = 2x^3 - kx^2 + 11x - 15\n\nIn the polynomial function above, k is a constant. If p(x) is divisible by (x - 3), what is the value of k?",
        "prompt": "Enter the value of k:",
        "type": "gridin",
        "correct": "8",
        "desmosEquation": [
          "2(3)^3 - k(3)^2 + 11(3) - 15 = 0"
        ],
        "explanation": "By the Polynomial Factor Theorem, p(x) is divisible by (x - 3) if and only if p(3) = 0. Substitute x = 3 into p(x):\n2(3)^3 - k(3)^2 + 11(3) - 15 = 0\n2(27) - 9k + 33 - 15 = 0\n54 - 9k + 18 = 0\n72 = 9k -> k = 8.",
        "hack": "Desmos One-Liner: Type 2(3)^3 - x(3)^2 + 11(3) - 15 = 0 into Desmos. Vertical line appears immediately at x = 8!",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Lesson #1: Solve Any Equation",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=TFmt1VwZte8",
          "videoId": "TFmt1VwZte8"
        }
      },
      {
        "id": 128,
        "section": "Math",
        "domain": "Geometry & Trigonometry",
        "skill": "Circle Equation & Inscribed Square Area (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "x^2 + y^2 - 10x + 6y = 47\n\nThe equation above represents Circle C in the xy-plane. If Square S is inscribed in Circle C (such that all four vertices of Square S lie on Circle C), what is the area of Square S?",
        "prompt": "Select the area of Square S:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "81"
          },
          {
            "letter": "B",
            "text": "162"
          },
          {
            "letter": "C",
            "text": "324"
          },
          {
            "letter": "D",
            "text": "81π"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "x^2 + y^2 - 10x + 6y = 47"
        ],
        "explanation": "Complete the square to find the radius r of Circle C:\n(x - 5)^2 - 25 + (y + 3)^2 - 9 = 47 -> (x - 5)^2 + (y + 3)^2 = 81, so r^2 = 81 and r = 9 (diameter d = 18).\nFor a square inscribed in a circle, the diagonal of the square equals the diameter of the circle (d = 18). The area of a square in terms of its diagonal d is d^2 / 2 = (2r)^2 / 2 = 2r^2 = 2(81) = 162.",
        "hack": "Inscribed Square Formula: Area of inscribed square = 2r^2 (and Area of circumscribed square = 4r^2). Since r^2 = 81 from Desmos/completing the square, Area = 2 * 81 = 162!",
        "trap_breakdown": {
          "A": "81 is r^2 (which would be the area of a square with side length r, not diagonal 2r).",
          "C": "324 is (2r)^2 = 18^2, the area of a square CIRCUMSCRIBED around the circle.",
          "D": "81π is the area of the circle itself."
        },
        "videoTutorial": {
          "title": "Module 2 SAT Math Practice: 22 Difficult Questions Walkthrough",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=Ku5gIHH6h4Q",
          "videoId": "Ku5gIHH6h4Q"
        }
      },
      {
        "id": 129,
        "section": "Math",
        "domain": "Geometry & Trigonometry",
        "skill": "Cofunction & Complementary Angles (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "In right triangle ABC, the measure of angle C is 90°. Point D lies on segment AB such that segment CD is perpendicular to hypotenuse AB. If sin(A) = 8/17, what is the value of cos(∠BCD)?",
        "prompt": "Select the value of cos(∠BCD):",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "8/17"
          },
          {
            "letter": "B",
            "text": "15/17"
          },
          {
            "letter": "C",
            "text": "8/15"
          },
          {
            "letter": "D",
            "text": "15/8"
          }
        ],
        "correct": "B",
        "explanation": "In right triangle ABC, ∠A + ∠B = 90°. In smaller right triangle CBD (where ∠CDB = 90°), ∠BCD + ∠B = 90°. Therefore, ∠BCD = ∠A, and∠BCD is complementary to ∠B! Wait: let's check carefully: since ∠BCD = ∠A, cos(∠BCD) = cos(A)! And since sin(A) = 8/17 ( an 8-15-17 right triangle), cos(A) = 15/17!",
        "hack": "Altitude-to-Hypotenuse Similarity Law: Dropping an altitude CD to the hypotenuse splits right triangle ABC into two smaller similar right triangles where ∠ACD = ∠B and ∠BCD = ∠A. Since sin(A) = 8/17 (8-15-17 triple), cos(∠BCD) = cos(A) = 15/17!",
        "trap_breakdown": {
          "A": "8/17 is sin(A) = sin(∠BCD) = cos(B), confusing ∠BCD with ∠B.",
          "C": "8/15 is tan(A).",
          "D": "15/8 is cot(A) (and cosine can never exceed 1)."
        },
        "videoTutorial": {
          "title": "Module 2 SAT Math Practice: 22 Difficult Questions Walkthrough",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=Ku5gIHH6h4Q",
          "videoId": "Ku5gIHH6h4Q"
        }
      },
      {
        "id": 130,
        "section": "Math",
        "domain": "Geometry & Trigonometry",
        "skill": "3D Similarity & Surface Area / Volume Scaling (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "Right circular cone A and right circular cone B are similar. The volume of cone A is 24π cubic centimeters, and the volume of cone B is 648π cubic centimeters. If the lateral surface area of cone A is 20π square centimeters, what is the lateral surface area, in square centimeters, of cone B?",
        "prompt": "Select the lateral surface area of cone B:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "60π"
          },
          {
            "letter": "B",
            "text": "180π"
          },
          {
            "letter": "C",
            "text": "540π"
          },
          {
            "letter": "D",
            "text": "1,620π"
          }
        ],
        "correct": "B",
        "explanation": "For similar 3D solids with linear scale factor k:\n• Volume ratio = k^3 = (648π) / (24π) = 27 -> k = ∛27 = 3.\n• Surface area ratio = k^2 = 3^2 = 9.\nTherefore, the lateral surface area of cone B is 20π * 9 = 180π.",
        "hack": "k -> k^2 -> k^3 Bridge: Never multiply area by the volume ratio! First take the cube root of the volume ratio (k = ∛27 = 3), then square it for surface area (k^2 = 9 -> 20π * 9 = 180π).",
        "trap_breakdown": {
          "A": "Multiplied area by k = 3 instead of k^2 = 9.",
          "C": "Multiplied area by the volume ratio k^3 = 27 (20π * 27 = 540π).",
          "D": "Multiplied 540π by 3."
        },
        "videoTutorial": {
          "title": "700s Club: The Hardest Digital SAT Math Problems",
          "channel": "Strategic Test Prep",
          "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
          "videoId": "lrIRF-bFjkw"
        }
      },
      {
        "id": 131,
        "section": "Math",
        "domain": "Problem Solving & Data Analysis",
        "skill": "Weighted Mean & Mixture Algebra (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "A research vessel collected water samples from two ocean layers. The 14 samples from the epipelagic zone had a mean dissolved oxygen concentration of 6.8 mg/L, and the n samples from the mesopelagic zone had a mean dissolved oxygen concentration of 2.3 mg/L. If the combined mean dissolved oxygen concentration of all 14 + n samples was 4.1 mg/L, what is the value of n?",
        "prompt": "Enter the value of n:",
        "type": "gridin",
        "correct": "21",
        "explanation": "Total dissolved oxygen = 14(6.8) + 2.3n = 4.1(14 + n).\n95.2 + 2.3n = 57.4 + 4.1n\n37.8 = 1.8n -> n = 21 samples.",
        "hack": "Seesaw / Lever Balance Shortcut: Distance from 6.8 to 4.1 is 2.7; distance from 2.3 to 4.1 is 1.8. Balance equation: 14 * 2.7 = n * 1.8 -> n = 21!",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Lesson #1: Solve Any Equation",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=TFmt1VwZte8",
          "videoId": "TFmt1VwZte8"
        },
        "desmosEquation": [
          "(14 * 6.8 + 2.3x) / (14 + x) = 4.1"
        ]
      },
      {
        "id": 150,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Equivalent Rational Expressions & Polynomial Division (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "(6x^2 + 13x - 8) / (2x + 5) = 3x - 1 + R / (2x + 5)\n\nThe equation above is true for all x != -5/2, where R is a constant. What is the value of R?",
        "prompt": "Select the value of R:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "-13"
          },
          {
            "letter": "B",
            "text": "-3"
          },
          {
            "letter": "C",
            "text": "3"
          },
          {
            "letter": "D",
            "text": "13"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "y = (6x^2 + 13x - 8) - (3x - 1)(2x + 5)"
        ],
        "explanation": "Multiply both sides by (2x + 5):\n6x^2 + 13x - 8 = (3x - 1)(2x + 5) + R.\nSince this holds for all x, either expand (3x - 1)(2x + 5) = 6x^2 + 13x - 5 -> -8 = -5 + R -> R = -3, OR simply plug in x = 0:\n-8 = (-1)(5) + R -> -8 = -5 + R -> R = -3!",
        "hack": "Plug in x = 0 Shortcut: Set x = 0 in the original equation: (-8) / 5 = -1 + R / 5 -> -8 = -5 + R -> R = -3 in 5 seconds!",
        "trap_breakdown": {
          "A": "Subtracted 5 from -8 instead of adding 5 (-8 - 5 = -13).",
          "C": "Sign error: did -5 - (-8) = +3.",
          "D": "Copied the x-coefficient (13)."
        },
        "videoTutorial": {
          "title": "700s Club: The Hardest Digital SAT Math Problems",
          "channel": "Strategic Test Prep",
          "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
          "videoId": "lrIRF-bFjkw"
        }
      },
      {
        "id": 155,
        "section": "Math",
        "domain": "Problem Solving & Data Analysis",
        "skill": "Margin of Error & Sample Size Scaling (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "A municipal transit authority surveyed a random sample of 400 regular commuter rail passengers and estimated that 62% of all regular passengers support extending weekend service hours, with an associated margin of error of 4.8% at the 95% confidence level. If the transit authority repeats the survey using the same methodology with a random sample of 1,600 regular passengers, which of the following is the best estimate of the new margin of error at the 95% confidence level?",
        "prompt": "Select the new margin of error:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "1.2%"
          },
          {
            "letter": "B",
            "text": "2.4%"
          },
          {
            "letter": "C",
            "text": "4.8%"
          },
          {
            "letter": "D",
            "text": "9.6%"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "4.8 / sqrt(1600 / 400)"
        ],
        "explanation": "The margin of error of a sample proportion is inversely proportional to the SQUARE ROOT of the sample size n (ME ∝ 1 / √n). Increasing the sample size from 400 to 1,600 multiplies n by 4. Therefore, the margin of error is divided by √4 = 2:\nNew ME = 4.8% / 2 = 2.4%.",
        "hack": "Inverse Square-Root Law: Margin of Error scales by 1 / √k when sample size multiplies by k. Quadrupling the sample (4x) cuts the margin of error in HALF (4.8% -> 2.4%).",
        "trap_breakdown": {
          "A": "Divided the margin of error by 4 instead of √4 = 2.",
          "C": "Assumed sample size has no effect on margin of error.",
          "D": "Doubled the margin of error (larger samples REDUCE margin of error, never increase it)."
        },
        "videoTutorial": {
          "title": "700s Club: The Hardest Digital SAT Math Problems",
          "channel": "Strategic Test Prep",
          "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
          "videoId": "lrIRF-bFjkw"
        }
      }
    ]
  },
  "full_test_3": {
    "id": "full_test_3",
    "title": "Exam 3: 1550+ Championship Mock",
    "badge": "EXAM 3 · 750–800 TIER",
    "phase": "Phase 4: 1550–1600 Championship Mastery",
    "category": "Full Practice Exams",
    "difficulty": "Championship (750–800)",
    "description": "22-question elite challenge modeling the hardest 15% of Digital SAT items: poetry structure, game-theory logic, Vieta's theorem, tangency, and 3D inscriptions.",
    "timeLimit": 2100,
    "questions": [
      {
        "id": 103,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Words in Context (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "While early twentieth-century historiography treated the collapse of the Late Bronze Age palace economies as an abrupt, monolithic catastrophe triggered solely by foreign raiders, recent archaeobotanical and paleoclimatic records suggest a more ______ process: decades of megadrought, internal Peasant revolts, and supply-chain fractures gradually eroded state capacity at different rates across the eastern Mediterranean.",
        "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "heterogeneous"
          },
          {
            "letter": "B",
            "text": "precipitous"
          },
          {
            "letter": "C",
            "text": "ephemeral"
          },
          {
            "letter": "D",
            "text": "perffunctory"
          }
        ],
        "correct": "A",
        "explanation": "The colon explains the blank: rather than a single ('monolithic') abrupt event caused 'solely by foreign raiders,' the collapse involved multiple distinct factors (megadrought, revolts, supply-chain fractures) unfolding 'at different rates.' 'Heterogeneous' means diverse in character or composed of varied parts, directly opposing 'monolithic.'",
        "hack": "Colon Definition Rule: The clause after a colon defines the blank. 'Multiple causes at different rates' vs. 'monolithic' = heterogeneous.",
        "trap_breakdown": {
          "B": "'Precipitous' means sudden and steep—which repeats 'abrupt' rather than contrasting with it.",
          "C": "'Ephemeral' means lasting for a very short time, contradicting 'decades of megadrought... gradually eroded.'",
          "D": "'Perfunctory' means carried out with minimum effort or reflection, which describes human behavior rather than a historical process."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 105,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Text Structure & Purpose",
        "difficulty": "Module 2 Hard",
        "stem": "The following text is adapted from a 2023 study on mycorrhizal fungal networks in boreal forests.\n\nFor decades, the 'wood-wide web' hypothesis—the claim that forest trees altruistically shuttle carbon and defense signals to distressed neighbors through shared fungal hyphae—captured both popular imagination and introductory biology textbooks. Yet when mycologist Justine Karst and colleagues audited the primary field studies cited in support of the hypothesis, they found that over 60% of the experiments lacked trenching controls to exclude root-graft transmission, while positive-result bias had inflated effect sizes in peer-reviewed summaries.",
        "prompt": "Which choice best describes the function of the second sentence in the overall structure of the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "It explains why introductory biology textbooks were slower than popular media to adopt the wood-wide web hypothesis."
          },
          {
            "letter": "B",
            "text": "It presents methodological and statistical findings that call into question the empirical foundation of a widely accepted ecological model."
          },
          {
            "letter": "C",
            "text": "It proposes a novel experimental protocol using root-graft trenching to prove that trees share carbon altruistically."
          },
          {
            "letter": "D",
            "text": "It argues that mycorrhizal fungi are parasitic rather than mutualistic in boreal forest ecosystems."
          }
        ],
        "correct": "B",
        "explanation": "Sentence 1 introduces a widely popularized model ('wood-wide web' hypothesis). Sentence 2 pivots with 'Yet' and details Karst's audit showing missing controls and publication bias in the underlying studies—thereby questioning the empirical basis of that model.",
        "hack": "Structure Formula: Sentence 1 = Popular Hypothesis; Sentence 2 ('Yet...') = Methodological Critique undermining Sentence 1.",
        "trap_breakdown": {
          "A": "The text states both popular imagination and textbooks embraced the hypothesis; it never compares their speed of adoption.",
          "C": "Karst identified the *absence* of trenching controls in past studies as a flaw, rather than proposing a way to prove altruism.",
          "D": "Questioning the evidence for tree-to-tree altruism is not a claim that fungi are parasitic."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading Pacing & Module Order Strategy",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=STjlOnEH5sY",
          "videoId": "STjlOnEH5sY"
        }
      },
      {
        "id": 110,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Inferences (750+ Scientific Logic)",
        "difficulty": "750–800 Challenge",
        "stem": "Marine biologists investigating coral bleaching in the Coral Sea compared colonies of Acropora millepora from two adjacent reef zones: a deep fore-reef where water temperatures remain stable year-round (26°C–27.5°C) and a shallow back-reef lagoon subject to daily tidal temperature swings of up to 6°C. When both groups were exposed in laboratory tanks to a sustained +2.5°C thermal anomaly for 14 days, fore-reef colonies expelled 82% of their symbiotic zooxanthellae, whereas back-reef colonies retained over 85% of their symbionts and exhibited rapid upregulation of heat-shock protein genes within four hours. These findings suggest that ______",
        "prompt": "Which choice most logically completes the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "symbiotic zooxanthellae in deep fore-reef zones belong to a different taxonomic genus than those inhabiting shallow back-reef lagoons."
          },
          {
            "letter": "B",
            "text": "prior acclimatization to high-frequency thermal variability can confer physiological resilience against acute ocean warming events."
          },
          {
            "letter": "C",
            "text": "shallow back-reef lagoons will be completely immune to coral bleaching if average global ocean temperatures rise by more than 6°C."
          },
          {
            "letter": "D",
            "text": "heat-shock protein genes are absent from the genome of Acropora millepora colonies that develop in stable thermal environments."
          }
        ],
        "correct": "B",
        "explanation": "The only difference between the two groups of the same species (A. millepora) was their native thermal environment: daily 6°C swings (back-reef) vs. stable temperatures (fore-reef). Under +2.5°C stress, the back-reef corals retained >85% of symbionts and rapidly expressed heat-shock genes, supporting the inference that prior exposure to thermal variability builds resilience.",
        "hack": "Eliminate Extreme & Unsupported Claims: Cross out 'completely immune' (C), 'absent from the genome' (D), and 'different genus' (A). Pick the conservative causal link (B).",
        "trap_breakdown": {
          "A": "The passage never mentions zooxanthellae taxonomic genera; it highlights transcriptional upregulation in the coral.",
          "C": "Extreme language trap ('completely immune... more than 6°C')—the experiment tested +2.5°C for 14 days, and 15% of symbionts were still lost.",
          "D": "Having lower/slower upregulation does not mean the genes are absent from the species' genome."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 111,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Command of Evidence (Textual / Literary)",
        "difficulty": "Module 2 Hard",
        "stem": "In Edith Wharton's 1920 novel The Age of Innocence, Newland Archer prides himself on his cosmopolitan detachment from the rigid social orthodoxy of 1870s Old New York, yet in moments of personal crisis he instinctively judges his fiancée May Welland through the very conventions he claims to disdain.",
        "prompt": "Which quotation from The Age of Innocence most effectively illustrates the claim?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "\"The stipulation that the wedding should take place in April, rather than in the autumn, had been made by Mrs. Welland, who wished the young couple to spend their summer in Europe.\""
          },
          {
            "letter": "B",
            "text": "\"He had dawdled over his cigar because he was at heart a dilettante, and thinking over a pleasure to come often gave him a subtler satisfaction than its realization.\""
          },
          {
            "letter": "C",
            "text": "\"How young she is! For what endless years this uncanny crystalline innocence will endure—and how terribly she would bore a man who had no use for the parlor pieties he himself secretly demanded of a wife!\""
          },
          {
            "letter": "D",
            "text": "\"Through the closed windows of the coupé he saw the gas-lamps of Fifth Avenue flaring through the sleet, each house-front identical in its brownstone reticence.\""
          }
        ],
        "correct": "C",
        "explanation": "The claim has two parts: (1) Archer views himself as superior to social orthodoxy ('parlor pieties'), yet (2) he enforces those same conventions on May. Choice C shows him mocking her 'crystalline innocence' while admitting they are the 'parlor pieties he himself secretly demanded of a wife!'",
        "hack": "Two-Half Verification: Match Part 1 (disdain for orthodoxy = 'bore a man who had no use for parlor pieties') + Part 2 (internalizing the orthodoxy = 'he himself secretly demanded of a wife').",
        "trap_breakdown": {
          "A": "Describes Mrs. Welland's scheduling preference, not Archer's psychological contradiction.",
          "B": "Illustrates Archer's aesthetic hesitation, not his double standard regarding May and social conventions.",
          "D": "Describes the setting of Fifth Avenue without mentioning May or Archer's judgment of her."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 132,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Words in Context — Nuanced Academic Register",
        "difficulty": "750–800 Challenge",
        "stem": "Whereas early twentieth-century historiography often treated the decline of the Silk Road overland trade networks as an abrupt collapse precipitated by the fall of the Mongol Empire, contemporary economic historians argue that the transition to maritime routes was far more ______: caravan cities such as Samarkand and Bukhara continued to broker high-volume regional commerce well into the seventeenth century.",
        "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "cataclysmic"
          },
          {
            "letter": "B",
            "text": "protracted"
          },
          {
            "letter": "C",
            "text": "ephemeral"
          },
          {
            "letter": "D",
            "text": "clandestine"
          }
        ],
        "correct": "B",
        "explanation": "The sentence contrasts the old view of an 'abrupt collapse' ('Whereas...') with contemporary evidence that overland cities 'continued to broker high-volume regional commerce well into the seventeenth century.' A process that unfolds slowly over centuries rather than abruptly is 'protracted' (extended or prolonged in time).",
        "hack": "Antonym Pivot + Colon Proof: 'Whereas [old view = abrupt collapse]' + colon showing trade lasted for centuries -> the blank must mean 'gradual / prolonged' = protracted.",
        "trap_breakdown": {
          "A": "'Cataclysmic' means violent and sudden—synonymous with 'abrupt collapse' rather than contrasting with it.",
          "C": "'Ephemeral' means short-lived, which contradicts trade continuing for centuries.",
          "D": "'Clandestine' means secretive or illicit, which is unsupported by the text."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 133,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Words in Context — Philosophical & Literary Analysis",
        "difficulty": "750–800 Challenge",
        "stem": "In her critique of utilitarian moral philosophy, philosopher Bernard Williams's intellectual successor argued that reducing complex ethical dilemmas to a single quantitative calculus of aggregate utility is inherently ______: doing so strips away the personal commitments, integrity, and relational obligations that make moral agency meaningful in the first place.",
        "prompt": "Which choice completes the text with the most logical and precise word?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "reductive"
          },
          {
            "letter": "B",
            "text": "equitable"
          },
          {
            "letter": "C",
            "text": "prescient"
          },
          {
            "letter": "D",
            "text": "deferential"
          }
        ],
        "correct": "A",
        "explanation": "The colon explains the blank: 'reducing complex ethical dilemmas to a single quantitative calculus... strips away the personal commitments, integrity, and relational obligations.' Oversimplifying a complex phenomenon by stripping away essential dimensions is the exact definition of 'reductive.'",
        "hack": "Colon Echo Rule: The clause before the blank literally says 'reducing complex ethical dilemmas to a single calculus... strips away...' -> 'reductive' (oversimplifying complex phenomena).",
        "trap_breakdown": {
          "B": "'Equitable' means fair and impartial (positive connotation, contradicting the critique).",
          "C": "'Prescient' means having foresight of future events.",
          "D": "'Deferential' means showing humble respect."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 135,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Poetic & Literary Structure (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "The following text is adapted from Emily Dickinson’s circa 1862 poem 'There’s a certain Slant of light.'\n\nThere’s a certain Slant of light,\nWinter Afternoons –\nThat oppresses, like the Heft\nOf Cathedral Tunes –\n\nHeavenly Hurt, it gives us –\nWe can find no scar,\nBut internal difference –\nWhere the Meanings, are –\n\nNone may teach it – Any –\n’Tis the Seal Despair –\nAn imperial affliction\nSent us of the Air –\n\nWhen it comes, the Landscape listens –\nShadows – hold their breath –\nWhen it goes, ’tis like the Distance\nOn the look of Death –",
        "prompt": "Which choice best describes the overall structure of the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "It contrasts the comforting warmth of winter sunlight with the austere solemnity of religious architecture, concluding with a celebration of seasonal renewal."
          },
          {
            "letter": "B",
            "text": "It introduces a specific sensory phenomenon, characterizes its intangible yet profound psychological weight, and concludes by depicting nature’s hushed reaction to its arrival and departure."
          },
          {
            "letter": "C",
            "text": "It recounts a specific historical memory from the speaker's youth, analyzes why that memory faded over time, and laments the inevitability of mortality."
          },
          {
            "letter": "D",
            "text": "It presents a philosophical question about human suffering in the first stanza and systematically refutes traditional answers in the remaining stanzas."
          }
        ],
        "correct": "B",
        "explanation": "Stanza 1 introduces the sensory phenomenon ('a certain Slant of light, / Winter Afternoons'). Stanzas 2 and 3 characterize its invisible, inward psychological burden ('We can find no scar, / But internal difference... An imperial affliction'). Stanza 4 depicts the natural world's hushed response to its arrival and departure ('When it comes, the Landscape listens... When it goes, ’tis like the Distance / On the look of Death').",
        "hack": "Stanza-by-Stanza Map: Stanza 1 (Winter light) -> Stanzas 2-3 (Inward psychological hurt/affliction) -> Stanza 4 ('When it comes... When it goes'). Match each stanza to the choice.",
        "trap_breakdown": {
          "A": "Misreads 'oppresses, like the Heft / Of Cathedral Tunes' as 'comforting warmth' and invents 'seasonal renewal.'",
          "C": "No childhood memory is recounted.",
          "D": "No question is posed or refuted."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 137,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Command of Evidence — Scientific Hypothesis Support (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "Plant physiologists investigating alpine cushion plants (such as Silene acaulis) hypothesized that their dense, hemispherical canopy structure acts as a thermal buffer that protects soil microbes beneath the plant from extreme diurnal temperature fluctuations, rather than merely warming the soil during daytime insolation. To test this hypothesis, the researchers placed temperature loggers 2 cm beneath cushion canopies and in adjacent bare alpine soil across a 30-day summer period.",
        "prompt": "Which finding from the temperature loggers, if true, would most directly support the physiologists' hypothesis?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "Soil beneath Silene acaulis canopies exhibited both a significantly lower daytime maximum temperature and a significantly higher nighttime minimum temperature than adjacent bare soil."
          },
          {
            "letter": "B",
            "text": "Soil beneath Silene acaulis canopies reached a daytime maximum temperature 6°C higher than that of adjacent bare soil, while nighttime minimum temperatures were identical in both locations."
          },
          {
            "letter": "C",
            "text": "Microbial biomass was higher in bare alpine soil located at lower elevations than beneath Silene acaulis canopies located at higher elevations."
          },
          {
            "letter": "D",
            "text": "The hemispherical canopy size of Silene acaulis correlated positively with the total number of daylight hours recorded during the 30-day period."
          }
        ],
        "correct": "A",
        "explanation": "The hypothesis states that the canopy acts as a 'thermal buffer that protects soil microbes... from extreme diurnal [day-night] temperature fluctuations, rather than merely warming the soil during daytime.' Showing that the canopy both lowers daytime peaks and raises nighttime lows (reducing the day-to-night temperature swing) directly proves buffering against diurnal fluctuations rather than daytime-only warming.",
        "hack": "Read the 'Rather Than' Clause: Whenever a hypothesis says 'X rather than Y,' the winning evidence MUST distinguish X (narrower day-night spread) from Y (daytime warming only).",
        "trap_breakdown": {
          "B": "Supports the rejected alternative ('merely warming the soil during daytime insolation') and actually increases the diurnal temperature swing.",
          "C": "Compares different elevations rather than testing thermal buffering by the canopy.",
          "D": "Measures canopy size vs. daylight hours, ignoring sub-canopy soil temperature swings."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 138,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Inferences — Economic & Game Theory Logic (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "In classical auctions where bidders submit sealed bids and the highest bidder pays their own bid (first-price sealed-bid auctions), rational participants systematically 'shade' their bids below their true private valuation of the item to secure a positive surplus if they win. By contrast, economist William Vickrey demonstrated mathematically that in a second-price sealed-bid auction—where the highest bidder wins the item but pays the price offered by the second-highest bidder—the amount a winning bidder pays is independent of their own bid. Consequently, in a second-price sealed-bid auction, ______",
        "prompt": "Which choice most logically completes the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "the seller is guaranteed to receive higher total revenue than in any first-price sealed-bid auction."
          },
          {
            "letter": "B",
            "text": "bidders no longer have a strategic incentive to shade their bids below their true private valuation of the item."
          },
          {
            "letter": "C",
            "text": "participants will deliberately bid above their true private valuation in order to inflate the price paid by rivals."
          },
          {
            "letter": "D",
            "text": "the second-highest bidder will frequently acquire the item at a price below the highest bidder's valuation."
          }
        ],
        "correct": "B",
        "explanation": "In a first-price auction, bidders shade their bids below true valuation because their own bid determines the price they pay if they win. In a second-price (Vickrey) auction, 'the amount a winning bidder pays is independent of their own bid.' Therefore, shading one's bid no longer reduces the price paid upon winning—it only risks losing an item one could have profitably won, eliminating the strategic incentive to shade below true valuation.",
        "hack": "Causal Removal Logic: Premise 1: Cause C (paying your own bid) creates Behavior B (bid shading). Premise 2: System 2 removes Cause C. Conclusion: Behavior B is no longer incentivized.",
        "trap_breakdown": {
          "A": "Out-of-scope comparison of seller revenue (known as revenue equivalence, not stated in text).",
          "C": "Bidding above true valuation risks winning and paying a second-highest bid that exceeds one's own valuation.",
          "D": "Contradicts the rule that 'the highest bidder wins the item.'"
        },
        "videoTutorial": {
          "title": "Digital SAT Reading Pacing & Module Order Strategy",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=STjlOnEH5sY",
          "videoId": "STjlOnEH5sY"
        }
      },
      {
        "id": 139,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Verb Forms — Finite Verb vs. Participle in Complex Syntax",
        "difficulty": "750–800 Challenge",
        "stem": "The acoustic properties of ancient Greek amphitheaters, particularly the fourth-century BCE theater at Epidaurus whose limestone seating tiers act as an acoustic trap that filters out low-frequency background noise while amplifying high-frequency vocal consonants from the stage floor, ______ modern architectural acousticians for decades.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "intriguing"
          },
          {
            "letter": "B",
            "text": "having intrigued"
          },
          {
            "letter": "C",
            "text": "has intrigued"
          },
          {
            "letter": "D",
            "text": "have intrigued"
          }
        ],
        "correct": "D",
        "explanation": "Strip out the prepositional phrase ('of ancient Greek amphitheaters') and the long appositive modifier ('particularly the fourth-century BCE theater at Epidaurus whose... stage floor'). The skeleton of the sentence is: 'The acoustic properties [...] ______ modern architectural acousticians for decades.' The sentence requires a finite main verb agreeing with the plural subject 'properties': 'have intrigued.'",
        "hack": "Two-Step Verb Filter: (1) Does the sentence have a main verb outside the modifier? No -> eliminate participles A and B. (2) Is the head subject ('properties') singular or plural? Plural -> pick 'have intrigued' (D).",
        "trap_breakdown": {
          "A": "Participle ('intriguing') leaves the main clause without a finite verb, creating a sentence fragment.",
          "B": "Participle ('having intrigued') also creates a sentence fragment.",
          "C": "Singular verb ('has intrigued') agrees with the local noun 'floor' or 'theater' rather than the plural subject 'properties.'"
        },
        "videoTutorial": {
          "title": "Digital SAT Writing Guide from a Perfect Scorer",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
          "videoId": "1ppKIYbdEk0"
        }
      },
      {
        "id": 144,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Linear Function Parameter & Intercept Ratio (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "f(x) = (3/5)x + b\n\nIn the linear function f above, b is a positive constant. If the x-intercept of the graph of y = f(x) in the xy-plane is (c, 0) and the y-intercept is (0, d), what is the value of c / d?",
        "prompt": "Enter the value of c / d (as a fraction or decimal):",
        "type": "gridin",
        "correct": "-5/3",
        "desmosEquation": [
          "y = (3/5)x + 3"
        ],
        "explanation": "The y-intercept occurs at x = 0: d = f(0) = b.\nThe x-intercept occurs when f(c) = 0: (3/5)c + b = 0 -> c = -(5/3)b.\nTherefore, the ratio c / d = [-(5/3)b] / b = -5/3 (Notice that b cancels out completely!).",
        "hack": "Desmos Arbitrary Constant Trick: Whenever a constant b cancels out, pick b = 3 in Desmos! Graph y = (3/5)x + 3. Click the x-intercept (-5, 0) and y-intercept (0, 3). Then c / d = -5 / 3!",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Parameterization & Constants",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=3rF4TTAVom4",
          "videoId": "3rF4TTAVom4"
        }
      },
      {
        "id": 146,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Identity Equations with Two Constants (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "a(3x - 4) + b(2x + 5) = 18x - 1\n\nIn the given equation, a and b are constants. If the equation is true for all values of x, what is the value of a + b?",
        "prompt": "Select the value of a + b:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "5"
          },
          {
            "letter": "B",
            "text": "6"
          },
          {
            "letter": "C",
            "text": "7"
          },
          {
            "letter": "D",
            "text": "8"
          }
        ],
        "correct": "C",
        "desmosEquation": [
          "-4x + 5y = -1",
          "3x + 2y = 18"
        ],
        "explanation": "For the equation to hold for all values of x, the x-coefficients and constant terms on both sides must match identically:\n• x-coefficient: 3a + 2b = 18\n• Constant term: -4a + 5b = -1\nSolving the system gives a = 4 and b = 3 (check: 3(4)+2(3)=18 and -4(4)+5(3)=-1). Therefore, a + b = 4 + 3 = 7.",
        "hack": "Desmos Two-Point Plug-In: Since an identity holds for ALL x, plug in x = 0 and x = 1 using (x, y) for (a, b) in Desmos:\nLine 1 (at t=0): -4x + 5y = -1\nLine 2 (at t=1): -x + 7y = 17\nClick intersection: (4, 3) -> a + b = 4 + 3 = 7!",
        "trap_breakdown": {
          "A": "Found a = 4 and subtracted 3 instead of adding.",
          "B": "Arithmetic slip when solving the 2x2 system.",
          "D": "Doubled a = 4."
        },
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Parameterization & Constants",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=3rF4TTAVom4",
          "videoId": "3rF4TTAVom4"
        }
      },
      {
        "id": 147,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Absolute Value Equation with Zero or Two Solutions (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "4|3x - k| - 12 = 20\n\nIn the given equation, k is a constant. If the sum of the two solutions to the equation is 10, what is the value of k?",
        "prompt": "Enter the value of k:",
        "type": "gridin",
        "correct": "15",
        "desmosEquation": [
          "4|3x - k| - 12 = 20"
        ],
        "explanation": "Isolate the absolute value: 4|3x - k| = 32 -> |3x - k| = 8.\nThe two solutions are symmetric around the vertex of the V-graph, which occurs where 3x - k = 0 -> x = k/3. Therefore, the average of the two solutions is k/3, and the sum of the two solutions is 2(k/3).\nSetting 2k/3 = 10 gives 2k = 30 -> k = 15.\n(Check: |3x - 15| = 8 -> 3x = 23 or 3x = 7 -> x₁ + x₂ = 23/3 + 7/3 = 30/3 = 10.)",
        "hack": "Symmetry of |ax - k| = c: The two solutions ALWAYS average to the vertex x = k/a, so their sum is ALWAYS 2k/a (independent of c, as long as c > 0)! Here 2k/3 = 10 -> k = 15 in 4 seconds.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "25 Hard SAT Math Module 2 Questions + Desmos Regression",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=661RKRiKDdw",
          "videoId": "661RKRiKDdw"
        }
      },
      {
        "id": 148,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Quadratic Regression from 3 Points (750+ Desmos Weapon)",
        "difficulty": "750–800 Challenge",
        "stem": "In the xy-plane, the graph of the quadratic function f(x) = ax^2 + bx + c passes through the points (-2, 23), (1, -4), and (4, 11). What is the value of a + b + c?",
        "prompt": "Select the value of a + b + c:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "-4"
          },
          {
            "letter": "B",
            "text": "2"
          },
          {
            "letter": "C",
            "text": "7"
          },
          {
            "letter": "D",
            "text": "11"
          }
        ],
        "correct": "A",
        "desmosEquation": [
          "y_1 ~ a*x_1^2 + b*x_1 + c"
        ],
        "explanation": "Wait—look closely at what the question is asking for: 'What is the value of a + b + c?' Notice that for f(x) = ax^2 + bx + c, evaluating f(1) gives:\nf(1) = a(1)^2 + b(1) + c = a + b + c!\nAnd the problem ALREADY gave you the point (1, -4), which means f(1) = -4! Therefore, a + b + c = -4 with zero calculation required!\n(Even if you solve for a, b, c via Desmos regression: a = 2, b = -7, c = 1 -> 2 - 7 + 1 = -4.)",
        "hack": "1600-Scorer Pattern Recognition: For ANY polynomial f(x) = ax^2 + bx + c, the sum of coefficients a + b + c is literally f(1)! Since (1, -4) is given in the stem, a + b + c = -4 in 2 seconds! (Or run y₁ ~ ax₁² + bx₁ + c in Desmos.)",
        "trap_breakdown": {
          "B": "2 is the leading coefficient a.",
          "C": "Calculated 2 + 7 - 2 with a sign error on b.",
          "D": "11 is f(4), not f(1)."
        },
        "videoTutorial": {
          "title": "7 Hard SAT Math Questions Solved with Desmos Regression",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=rSB5oMHfiZc",
          "videoId": "rSB5oMHfiZc"
        }
      },
      {
        "id": 149,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Product of Roots & Vieta's Theorem with Constants (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "2x^2 - 9x + k = 0\n\nIn the given equation, k is a constant. If one solution to the equation is x = (9 + sqrt(17)) / 4, what is the value of k?",
        "prompt": "Enter the value of k:",
        "type": "gridin",
        "correct": "8",
        "desmosEquation": [
          "2((9 + sqrt(17))/4)^2 - 9((9 + sqrt(17))/4) + x = 0"
        ],
        "explanation": "By the quadratic formula for 2x^2 - 9x + k = 0:\nx = [9 ± sqrt((-9)^2 - 4(2)(k))] / (2 * 2) = [9 ± sqrt(81 - 8k)] / 4.\nComparing this with x = (9 + sqrt(17)) / 4 gives:\n81 - 8k = 17 -> 8k = 64 -> k = 8.",
        "hack": "Desmos Direct Substitution: Replace x with (9 + sqrt(17))/4 and replace k with x in Desmos: 2((9+sqrt(17))/4)^2 - 9((9+sqrt(17))/4) + x = 0. Vertical line appears at x = 8!",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "25 Hard SAT Math Module 2 Questions + Desmos Regression",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=661RKRiKDdw",
          "videoId": "661RKRiKDdw"
        }
      },
      {
        "id": 151,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Function Transformations & Shifted Y-Intercept (750+ Trap)",
        "difficulty": "750–800 Challenge",
        "stem": "f(x) = 3^(x - 2) + 5\n\nThe function f is defined above. If g(x) = f(x + 4) - 11, what is the y-intercept of the graph of y = g(x) in the xy-plane?",
        "prompt": "Select the y-intercept of y = g(x):",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "(0, -5)"
          },
          {
            "letter": "B",
            "text": "(0, 3)"
          },
          {
            "letter": "C",
            "text": "(0, 9)"
          },
          {
            "letter": "D",
            "text": "(0, 14)"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "f(x) = 3^(x - 2) + 5",
          "g(x) = f(x + 4) - 11"
        ],
        "explanation": "The y-intercept of y = g(x) occurs at x = 0:\ng(0) = f(0 + 4) - 11 = f(4) - 11.\nEvaluate f(4): f(4) = 3^(4 - 2) + 5 = 3^2 + 5 = 9 + 5 = 14.\nTherefore, g(0) = 14 - 11 = 3, giving the y-intercept (0, 3).",
        "hack": "Desmos Function Notation: Type f(x) = 3^(x - 2) + 5 on Line 1, and g(x) = f(x + 4) - 11 on Line 2! Desmos natively understands f(x + 4) and plots the y-intercept (0, 3) immediately!",
        "trap_breakdown": {
          "A": "Evaluated f(0) - 11 = (1/9 + 5) - 11 instead of f(4) - 11.",
          "C": "Calculated 3^2 = 9 and forgot to add +5 and subtract -11.",
          "D": "14 is f(4), forgetting to subtract 11."
        },
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 152,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Fractional Exponents & Radical Equivalence (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "For all positive values of x, the expression (x^(5/4) * sqrt(x^3)) / cbrt(x^2) is equivalent to x^k, where k is a constant. What is the value of k?",
        "prompt": "Enter the value of k (as a fraction or decimal):",
        "type": "gridin",
        "correct": "25/12",
        "desmosEquation": [
          "5/4 + 3/2 - 2/3"
        ],
        "explanation": "Convert each radical to a fractional exponent using n-th root of x^m = x^(m/n):\n• sqrt(x^3) = x^(3/2)\n• cbrt(x^2) = x^(2/3)\nCombine exponents by adding in the numerator and subtracting the denominator:\nk = 5/4 + 3/2 - 2/3 = 15/12 + 18/12 - 8/12 = 25/12.",
        "hack": "Desmos Fraction Button: Type 5/4 + 3/2 - 2/3 into Desmos and click the little circle-fraction icon on the left of the expression box -> Desmos converts 2.083333... into 25/12 automatically!",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 153,
        "section": "Math",
        "domain": "Geometry & Trigonometry",
        "skill": "Circle Tangent Line Slope (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "(x - 2)^2 + (y + 1)^2 = 169\n\nThe equation above represents a circle in the xy-plane. Point P(7, 11) lies on the circle. If line L is tangent to the circle at point P, what is the slope of line L?",
        "prompt": "Select the slope of line L:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "-12/5"
          },
          {
            "letter": "B",
            "text": "-5/12"
          },
          {
            "letter": "C",
            "text": "5/12"
          },
          {
            "letter": "D",
            "text": "12/5"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "(x - 2)^2 + (y + 1)^2 = 169",
          "y - 11 = (-5/12)(x - 7)"
        ],
        "explanation": "The center of the circle is C(2, -1) and the point of tangency is P(7, 11).\n1. Find the slope of the radius CP:\nm_radius = (11 - (-1)) / (7 - 2) = 12 / 5.\n2. Because a tangent line to a circle is ALWAYS perpendicular to the radius at the point of tangency, the slope of tangent line L is the negative reciprocal of m_radius:\nm_tangent = -5/12.",
        "hack": "Radius-Tangent Perpendicularity Rule: Tangent slope = -1 / (Radius slope). Center = (2, -1), Point = (7, 11) -> Radius Δy/Δx = 12/5 -> Tangent slope = -5/12. Verify visually in Desmos!",
        "trap_breakdown": {
          "A": "Took the negative of the radius slope (-12/5) without taking the reciprocal.",
          "C": "Took the reciprocal (5/12) without negating it.",
          "D": "12/5 is the slope of the radius CP itself, not the perpendicular tangent line."
        },
        "videoTutorial": {
          "title": "Module 2 SAT Math Practice: 22 Difficult Questions Walkthrough",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=Ku5gIHH6h4Q",
          "videoId": "Ku5gIHH6h4Q"
        }
      },
      {
        "id": 157,
        "section": "Math",
        "domain": "Geometry & Trigonometry",
        "skill": "Right Triangle Altitude & Geometric Mean Theorem (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "In right triangle XYZ, the measure of angle Y is 90°, and altitude YW is drawn from vertex Y perpendicular to hypotenuse XZ at point W. If XW = 9 and WZ = 16, what is the length of leg XY?",
        "prompt": "Enter the length of leg XY:",
        "type": "gridin",
        "correct": "15",
        "desmosEquation": [
          "sqrt(9 * (9 + 16))"
        ],
        "explanation": "By right triangle altitude similarity (Triangle XWY ~ Triangle XYZ):\nXY / XZ = XW / XY -> XY^2 = XW * XZ.\nSince XW = 9 and WZ = 16, the full hypotenuse is XZ = 9 + 16 = 25.\nTherefore, XY^2 = 9 * 25 = 225 -> XY = 15.\n(Or find altitude YW = sqrt(9 * 16) = 12, then in right triangle XWY with legs 9 and 12, hypotenuse XY = sqrt(9^2 + 12^2) = 15.)",
        "hack": "Two-Step Altitude Shortcut: (1) Altitude h = √(part₁ * part₂) = √(9 * 16) = 12. (2) Leg XY = √(9² + 12²) = 15 (a 3-4-5 right triangle scaled by 3)!",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "Module 2 SAT Math Practice: 22 Difficult Questions Walkthrough",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=Ku5gIHH6h4Q",
          "videoId": "Ku5gIHH6h4Q"
        }
      },
      {
        "id": 158,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Surface Area of Inscribed Cube / Sphere (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "A solid metal cube is inscribed in a sphere of radius 6*sqrt(3) centimeters such that all eight vertices of the cube lie on the surface of the sphere. What is the total surface area, in square centimeters, of the cube?",
        "prompt": "Enter the total surface area of the cube:",
        "type": "gridin",
        "correct": "864",
        "desmosEquation": [
          "6 * (12)^2"
        ],
        "explanation": "For a cube of side length s inscribed in a sphere, the 3D space diagonal of the cube equals the diameter of the sphere:\nSpace diagonal of cube = s * sqrt(3)\nDiameter of sphere = 2r = 2 * 6*sqrt(3) = 12*sqrt(3).\nSetting s * sqrt(3) = 12*sqrt(3) gives side length s = 12 cm.\nThe total surface area of a cube with 6 faces of area s^2 is 6s^2 = 6(12^2) = 6(144) = 864 cm^2.",
        "hack": "3D Space Diagonal Formula: Cube space diagonal d = s√3 = 2r. So s√3 = 12√3 -> s = 12 -> Surface Area = 6s² = 6(144) = 864.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "Module 2 SAT Math Practice: 22 Difficult Questions Walkthrough",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=Ku5gIHH6h4Q",
          "videoId": "Ku5gIHH6h4Q"
        }
      },
      {
        "id": 124,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Quadratic Discriminant & Tangency (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "y = 2x^2 - 11x + c\ny = 3x - 5\n\nIn the given system of equations, c is a constant. If the system has exactly one real solution (x, y), what is the value of c?",
        "prompt": "Enter the value of c:",
        "type": "gridin",
        "correct": "19.5",
        "desmosEquation": [
          "y = 2x^2 - 11x + c",
          "y = 3x - 5"
        ],
        "explanation": "Set the two equations equal to find their intersection: 2x^2 - 11x + c = 3x - 5 -> 2x^2 - 14x + (c + 5) = 0. For a quadratic equation ax^2 + bx + C = 0 to have exactly one real solution, its discriminant b^2 - 4aC must equal 0:\n(-14)^2 - 4(2)(c + 5) = 0\n196 - 8(c + 5) = 0\nc + 5 = 196 / 8 = 24.5\nc = 19.5 (or 39/2).",
        "hack": "Desmos Tangency Slider: Graph y = 2x^2 - 11x + c and y = 3x - 5. Slide c until the parabola is tangent to the line at a single point (3.5, 5.5): c = 19.5 (or 39/2).",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "25 Hard SAT Math Module 2 Questions + Desmos Regression",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=661RKRiKDdw",
          "videoId": "661RKRiKDdw"
        }
      },
      {
        "id": 128,
        "section": "Math",
        "domain": "Geometry & Trigonometry",
        "skill": "Circle Equation & Inscribed Square Area (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "x^2 + y^2 - 10x + 6y = 47\n\nThe equation above represents Circle C in the xy-plane. If Square S is inscribed in Circle C (such that all four vertices of Square S lie on Circle C), what is the area of Square S?",
        "prompt": "Select the area of Square S:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "81"
          },
          {
            "letter": "B",
            "text": "162"
          },
          {
            "letter": "C",
            "text": "324"
          },
          {
            "letter": "D",
            "text": "81π"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "x^2 + y^2 - 10x + 6y = 47"
        ],
        "explanation": "Complete the square to find the radius r of Circle C:\n(x - 5)^2 - 25 + (y + 3)^2 - 9 = 47 -> (x - 5)^2 + (y + 3)^2 = 81, so r^2 = 81 and r = 9 (diameter d = 18).\nFor a square inscribed in a circle, the diagonal of the square equals the diameter of the circle (d = 18). The area of a square in terms of its diagonal d is d^2 / 2 = (2r)^2 / 2 = 2r^2 = 2(81) = 162.",
        "hack": "Inscribed Square Formula: Area of inscribed square = 2r^2 (and Area of circumscribed square = 4r^2). Since r^2 = 81 from Desmos/completing the square, Area = 2 * 81 = 162!",
        "trap_breakdown": {
          "A": "81 is r^2 (which would be the area of a square with side length r, not diagonal 2r).",
          "C": "324 is (2r)^2 = 18^2, the area of a square CIRCUMSCRIBED around the circle.",
          "D": "81π is the area of the circle itself."
        },
        "videoTutorial": {
          "title": "Module 2 SAT Math Practice: 22 Difficult Questions Walkthrough",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=Ku5gIHH6h4Q",
          "videoId": "Ku5gIHH6h4Q"
        }
      }
    ]
  },
  "math_sprint_1": {
    "id": "math_sprint_1",
    "title": "Math Sprint I: Desmos & Algebraic Speed",
    "badge": "MATH SPRINT · 15 QS",
    "phase": "Phase 2: Section Speed & Desmos Fluency",
    "category": "Subject Sprints",
    "difficulty": "Module 1–2 Bridge",
    "description": "15-question timed Math module designed to build sub-45-second Desmos graphing, regression, and intersection reflexes.",
    "timeLimit": 1320,
    "questions": [
      {
        "id": 119,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Linear Systems — Infinitely Many Solutions",
        "difficulty": "Module 1 Core",
        "stem": "3x - 5y = 14\nkx - 15y = 42\n\nIn the given system of equations, k is a constant. If the system has infinitely many solutions, what is the value of k?",
        "prompt": "Select the correct value of k:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "3"
          },
          {
            "letter": "B",
            "text": "6"
          },
          {
            "letter": "C",
            "text": "9"
          },
          {
            "letter": "D",
            "text": "15"
          }
        ],
        "correct": "C",
        "desmosEquation": [
          "3x - 5y = 14",
          "kx - 15y = 42"
        ],
        "explanation": "For a linear system to have infinitely many solutions, the two equations must be exact scalar multiples of each other (identical lines). Comparing the y-coefficients and constants: (-15) / (-5) = 3 and 42 / 14 = 3. Multiplying the first equation by 3 gives 9x - 15y = 42, so k = 9.",
        "hack": "Desmos Protocol:\n1. Click 'Open & Solve in Desmos' (loads 3x - 5y = 14, kx - 15y = 42, and slider k).\n2. Drag slider k until the two lines lie directly on top of each other: k = 9.",
        "trap_breakdown": {
          "A": "Unchanged coefficient from the first equation (3x), forgetting to multiply by the scaling factor 3.",
          "B": "Added 3 + 3 instead of multiplying 3 * 3.",
          "D": "Copied the absolute value of the y-coefficient (15)."
        },
        "videoTutorial": {
          "title": "How to Solve Unknown Constant Questions with Desmos",
          "channel": "MVP Learners",
          "url": "https://www.youtube.com/watch?v=LNLbRHAXX4k",
          "videoId": "LNLbRHAXX4k"
        }
      },
      {
        "id": 145,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Linear Table Regression & Extrapolation",
        "difficulty": "Module 1 Core",
        "stem": "x | f(x)\n4 | 19\n10 | 46\n16 | 73\n\nThe table above shows three values of x and their corresponding values of f(x) for the linear function f. What is the value of f(28)?",
        "prompt": "Enter the value of f(28):",
        "type": "gridin",
        "correct": "127",
        "desmosEquation": [
          "y_1 ~ m*x_1 + b"
        ],
        "explanation": "Find the slope m: (46 - 19) / (10 - 4) = 27 / 6 = 4.5.\nNotice x jumps by +6 each row (from 4 to 10 to 16), and f(x) jumps by +27 each row. From x = 16 to x = 28 is a jump of +12 (two steps of +6), so f(28) = 73 + 2(27) = 127.",
        "hack": "Desmos Table Regression: Click '+' -> Table, enter (4, 19) and (10, 46), then type f(x) = mx + b or y₁ ~ mx₁ + b. Evaluate at x = 28 -> 127.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "7 Hard SAT Math Questions Solved with Desmos Regression",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=rSB5oMHfiZc",
          "videoId": "rSB5oMHfiZc"
        }
      },
      {
        "id": 122,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Systems of Linear Inequalities",
        "difficulty": "Module 2 Hard",
        "stem": "A biomedical lab processes two types of assay trays: Standard trays (x) and High-Sensitivity trays (y). Each batch must satisfy two constraints:\n• Reagent constraint: 4x + 2y <= 60\n• Incubator time constraint: 6x + 2y <= 72\n\nIf the lab processes at least 8 Standard trays (x >= 8), what is the maximum number of High-Sensitivity trays (y) it can process in a single batch?",
        "prompt": "Enter the maximum value of y:",
        "type": "gridin",
        "correct": "12",
        "desmosEquation": [
          "4x + 2y <= 60",
          "6x + 2y <= 72",
          "x >= 8"
        ],
        "explanation": "Since y decreases as x increases in both inequalities, y is maximized when x is as small as allowed (x = 8).\n• From inequality 1: 4(8) + 2y <= 60 -> 32 + 2y <= 60 -> 2y <= 28 -> y <= 14.\n• From inequality 2: 6(8) + 2y <= 72 -> 48 + 2y <= 72 -> 2y <= 24 -> y <= 12.\nBecause BOTH constraints must hold simultaneously, y cannot exceed 12.",
        "hack": "Desmos Feasible Region: Graph 4x + 2y <= 60, 6x + 2y <= 72, and x >= 8. Click the highest corner of the triple-shaded overlap region: (8, 12). Maximum y = 12.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 123,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Quadratic Vertex & Optimization",
        "difficulty": "Module 1 Core",
        "stem": "h(t) = -16t^2 + 80t + 96\n\nA sensor package is launched vertically upward from a coastal tower. The function above models its height h, in feet, above sea level t seconds after launch. What is the maximum height, in feet, reached by the sensor package?",
        "prompt": "Select the maximum height:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "2.5"
          },
          {
            "letter": "B",
            "text": "6"
          },
          {
            "letter": "C",
            "text": "96"
          },
          {
            "letter": "D",
            "text": "196"
          }
        ],
        "correct": "D",
        "desmosEquation": [
          "y = -16x^2 + 80x + 96"
        ],
        "explanation": "The time of maximum height is the vertex x-coordinate: t = -b / (2a) = -80 / (2 * -16) = 2.5 seconds. Substituting t = 2.5 into h(t): h(2.5) = -16(6.25) + 80(2.5) + 96 = -100 + 200 + 96 = 196 feet.",
        "hack": "Desmos 3-Second Peak Click: Graph y = -16x^2 + 80x + 96 and click the vertex dot (2.5, 196). The prompt asks for 'maximum height' (y = 196), NOT time (x = 2.5)!",
        "trap_breakdown": {
          "A": "2.5 is the time t (in seconds) when the package reaches its peak, not the height.",
          "B": "6 is the positive t-intercept when the package hits the water (h(6) = 0).",
          "C": "96 is the initial launch tower height at t = 0."
        },
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 212,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Vertex Form & Displaying Constants",
        "difficulty": "Module 1 Core",
        "stem": "f(x) = -2x^2 + 12x - 10\n\nWhich of the following equivalent forms of f(x) displays the maximum value of the function as a constant or coefficient?",
        "prompt": "Select the correct equivalent form:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "f(x) = -2(x - 3)^2 + 8"
          },
          {
            "letter": "B",
            "text": "f(x) = -2(x - 1)(x - 5)"
          },
          {
            "letter": "C",
            "text": "f(x) = -2(x^2 - 6x + 5)"
          },
          {
            "letter": "D",
            "text": "f(x) = -(2x - 6)^2 + 8"
          }
        ],
        "correct": "A",
        "desmosEquation": [
          "y = -2x^2 + 12x - 10",
          "y = -2(x - 3)^2 + 8"
        ],
        "explanation": "The parabola opens downward (a = -2 < 0) with vertex at (3, 8), so its maximum value is 8. Vertex form f(x) = -2(x - 3)^2 + 8 is both equivalent to f(x) and displays the maximum value (8) as a constant. (Note that Choice D expands to -4x^2 + 24x - 28, which is NOT equivalent to f(x)!)",
        "hack": "Desmos Equivalence + Constant Check: (1) Click vertex of y = -2x^2 + 12x - 10 -> (3, 8), so 8 must appear in the equation (narrows to A and D). (2) Graph A and D in Desmos: only A overlaps f(x)!",
        "trap_breakdown": {
          "B": "Factored form displays the x-intercepts (1 and 5), not the maximum value (8).",
          "C": "Partially factored form does not display 8.",
          "D": "Displays 8, but -(2x - 6)^2 + 8 = -4(x - 3)^2 + 8 is NOT equivalent to f(x)."
        },
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 207,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Nonlinear System Intersections",
        "difficulty": "Module 1 Core",
        "stem": "y = x^2 - 4x + 3\ny = 2x - 2\n\nThe solutions to the system of equations above are (x₁, y₁) and (x₂, y₂), where x₂ > x₁. What is the value of x₂ - y₁?",
        "prompt": "Select the value of x₂ - y₁:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "1"
          },
          {
            "letter": "B",
            "text": "3"
          },
          {
            "letter": "C",
            "text": "5"
          },
          {
            "letter": "D",
            "text": "7"
          }
        ],
        "correct": "C",
        "desmosEquation": [
          "y = x^2 - 4x + 3",
          "y = 2x - 2"
        ],
        "explanation": "Set x^2 - 4x + 3 = 2x - 2 -> x^2 - 6x + 5 = 0 -> (x - 1)(x - 5) = 0. Since x₂ > x₁, the two intersection points are (x₁, y₁) = (1, 0) and (x₂, y₂) = (5, 8). Therefore, x₂ - y₁ = 5 - 0 = 5.",
        "hack": "Desmos Intersection Click: Graph both equations and click the two intersection dots: (1, 0) and (5, 8). Then x₂ - y₁ = 5 - 0 = 5.",
        "trap_breakdown": {
          "A": "1 is x₁.",
          "B": "Subtracted 8 - 5 = 3.",
          "D": "Subtracted y₂ - x₁ = 8 - 1 = 7."
        },
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Lesson #1: Solve Any Equation",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=TFmt1VwZte8",
          "videoId": "TFmt1VwZte8"
        }
      },
      {
        "id": 208,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Radical Equations & Extraneous Roots",
        "difficulty": "Module 2 Hard",
        "stem": "sqrt(3x + 16) = x + 2\n\nWhat is the set of all real solutions to the given equation?",
        "prompt": "Select the correct solution set:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "-4 only"
          },
          {
            "letter": "B",
            "text": "3 only"
          },
          {
            "letter": "C",
            "text": "-4 and 3"
          },
          {
            "letter": "D",
            "text": "No real solution"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "y = sqrt(3x + 16)",
          "y = x + 2"
        ],
        "explanation": "Square both sides: 3x + 16 = (x + 2)^2 = x^2 + 4x + 4 -> x^2 + x - 12 = 0 -> (x + 4)(x - 3) = 0. Checking x = -4 in the original equation gives sqrt(4) = -2, which is false because the principal square root is always nonnegative. Checking x = 3 gives sqrt(25) = 5, which is valid. Only x = 3 is a real solution.",
        "hack": "Desmos Extraneous Shield: Graph y = sqrt(3x + 16) and y = x + 2. Because Desmos only plots the principal (nonnegative) square root, it NEVER shows extraneous roots! Only (3, 5) intersects.",
        "trap_breakdown": {
          "A": "-4 is the extraneous root.",
          "C": "Fell for the algebraic squaring trap by failing to test x = -4 in the original equation.",
          "D": "x = 3 is a valid real solution."
        },
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Lesson #1: Solve Any Equation",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=TFmt1VwZte8",
          "videoId": "TFmt1VwZte8"
        }
      },
      {
        "id": 211,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Rational Function Asymptotes vs. Removable Discontinuities",
        "difficulty": "Module 2 Hard",
        "stem": "f(x) = (x - 3) / (x^2 - 9)\n\nAt what value of x does the graph of y = f(x) in the xy-plane have a vertical asymptote?",
        "prompt": "Select the vertical asymptote:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "x = -3 only"
          },
          {
            "letter": "B",
            "text": "x = 3 only"
          },
          {
            "letter": "C",
            "text": "Both x = -3 and x = 3"
          },
          {
            "letter": "D",
            "text": "The graph has no vertical asymptotes."
          }
        ],
        "correct": "A",
        "desmosEquation": [
          "y = (x - 3)/(x^2 - 9)"
        ],
        "explanation": "Factor the denominator: f(x) = (x - 3) / [(x - 3)(x + 3)]. For x != 3, the (x - 3) factor cancels, leaving f(x) = 1 / (x + 3) with a removable hole at x = 3 and a vertical asymptote where the remaining denominator is zero: x = -3.",
        "hack": "Desmos Visual Check: Graph y = (x - 3)/(x^2 - 9). At x = -3 the curve shoots to ±∞ (vertical asymptote), whereas at x = 3 it smoothly passes through y = 1/6 (a hole)!",
        "trap_breakdown": {
          "B": "x = 3 is a removable discontinuity (hole), not a vertical asymptote.",
          "C": "Set x^2 - 9 = 0 without canceling the common factor (x - 3).",
          "D": "x = -3 remains in the denominator and creates a vertical asymptote."
        },
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 126,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Exponential Time-Scaling Models (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "A culture of bioluminescent marine bacteria initially contains 12,000 cells and triples in population every 4 hours. Which function P(t) models the number of cells in the culture t DAYS after the initial measurement?",
        "prompt": "Select the correct function P(t):",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "P(t) = 12,000(3)^(t/4)"
          },
          {
            "letter": "B",
            "text": "P(t) = 12,000(3)^(4t)"
          },
          {
            "letter": "C",
            "text": "P(t) = 12,000(3)^(6t)"
          },
          {
            "letter": "D",
            "text": "P(t) = 12,000(3)^(t/6)"
          }
        ],
        "correct": "C",
        "desmosEquation": [
          "y = 12000 * 3^(6x)"
        ],
        "explanation": "Watch the unit conversion trap: the growth period is given in HOURS (every 4 hours), but t is measured in DAYS (1 day = 24 hours). In t = 1 day (24 hours), how many 4-hour tripling periods occur? 24 / 4 = 6 tripling periods per day. Therefore, after t days, the population has tripled 6t times: P(t) = 12,000(3)^(6t).",
        "hack": "Plug-in t = 1 Day Test: In 1 day (24 hours), a culture that triples every 4 hours must triple 6 times -> exponent at t = 1 must be 6! Only 3^(6t) gives 3^6 when t = 1.",
        "trap_breakdown": {
          "A": "Classic unit trap: 3^(t/4) would be correct if t were measured in HOURS, not days.",
          "B": "Multiplied by 4 instead of dividing 24 hours / 4 hours = 6.",
          "D": "Divided t by 6 (which would mean tripling once every 6 days)."
        },
        "videoTutorial": {
          "title": "700s Club: The Hardest Digital SAT Math Problems",
          "channel": "Strategic Test Prep",
          "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
          "videoId": "lrIRF-bFjkw"
        }
      },
      {
        "id": 152,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Fractional Exponents & Radical Equivalence (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "For all positive values of x, the expression (x^(5/4) * sqrt(x^3)) / cbrt(x^2) is equivalent to x^k, where k is a constant. What is the value of k?",
        "prompt": "Enter the value of k (as a fraction or decimal):",
        "type": "gridin",
        "correct": "25/12",
        "desmosEquation": [
          "5/4 + 3/2 - 2/3"
        ],
        "explanation": "Convert each radical to a fractional exponent using n-th root of x^m = x^(m/n):\n• sqrt(x^3) = x^(3/2)\n• cbrt(x^2) = x^(2/3)\nCombine exponents by adding in the numerator and subtracting the denominator:\nk = 5/4 + 3/2 - 2/3 = 15/12 + 18/12 - 8/12 = 25/12.",
        "hack": "Desmos Fraction Button: Type 5/4 + 3/2 - 2/3 into Desmos and click the little circle-fraction icon on the left of the expression box -> Desmos converts 2.083333... into 25/12 automatically!",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 154,
        "section": "Math",
        "domain": "Geometry & Trigonometry",
        "skill": "Radian Arc Length & Sector Area Ratio (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "In a circle with radius 12 centimeters, a central angle of measure θ radians intercepts an arc of length 15π centimeters. What is the area, in square centimeters, of the sector formed by this central angle?",
        "prompt": "Select the area of the sector:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "45π"
          },
          {
            "letter": "B",
            "text": "90π"
          },
          {
            "letter": "C",
            "text": "144π"
          },
          {
            "letter": "D",
            "text": "180π"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "(1/2) * 12 * 15"
        ],
        "explanation": "Method 1 (Direct Shortcut): Just like a triangle's area is (1/2) * base * height, the area of a circular sector is ALWAYS:\nArea = (1/2) * r * s (where r is the radius and s is the arc length)!\nArea = (1/2) * 12 * (15π) = 90π.\nMethod 2: s = rθ -> 15π = 12θ -> θ = 5π/4. Sector area = (1/2)r^2 θ = (1/2)(144)(5π/4) = 90π.",
        "hack": "Sector Area Golden Formula: A = (1/2) * r * s (half of radius times arc length)! You don't even need to find θ: (1/2)(12)(15π) = 90π in 3 seconds!",
        "trap_breakdown": {
          "A": "Divided by 4 instead of 2.",
          "C": "144π is the area of the entire circle (πr^2).",
          "D": "Multiplied r * s = 12 * 15π = 180π without multiplying by 1/2."
        },
        "videoTutorial": {
          "title": "Module 2 SAT Math Practice: 22 Difficult Questions Walkthrough",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=Ku5gIHH6h4Q",
          "videoId": "Ku5gIHH6h4Q"
        }
      },
      {
        "id": 156,
        "section": "Math",
        "domain": "Problem Solving & Data Analysis",
        "skill": "Conditional Probability from Two-Way Table",
        "difficulty": "Module 1 Core",
        "stem": "                | Passed Inspection | Failed Inspection | Total\nKiln Batch A    |        138        |         12        |  150\nKiln Batch B    |        182        |         18        |  200\nTotal           |        320        |         30        |  350\n\nThe table above summarizes the inspection results for 350 ceramic insulator disks produced across two kiln batches. If one disk that failed inspection is selected at random, what is the probability that the disk came from Kiln Batch B?",
        "prompt": "Select the correct probability:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "18 / 350"
          },
          {
            "letter": "B",
            "text": "18 / 200"
          },
          {
            "letter": "C",
            "text": "18 / 30"
          },
          {
            "letter": "D",
            "text": "30 / 350"
          }
        ],
        "correct": "C",
        "explanation": "Look at the restricting condition after 'If one... is selected at random': 'one disk that FAILED INSPECTION.' That restricts the denominator to the 'Failed Inspection' column total (30). Out of those 30 failed disks, 18 came from Kiln Batch B, so the probability is 18 / 30 (or 3/5).",
        "hack": "Denominator Lock Rule: The phrase between 'If one' and 'is selected at random' ('one disk that failed inspection') ALWAYS defines your denominator (30)!",
        "trap_breakdown": {
          "A": "Used the grand total (350) as the denominator instead of the conditional 'Failed Inspection' total (30).",
          "B": "Conditioned on Kiln Batch B (200) instead of Failed Inspection (30).",
          "D": "Overall proportion of disks that failed inspection."
        },
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 209,
        "section": "Math",
        "domain": "Problem Solving & Data Analysis",
        "skill": "Standard Deviation vs. Mean Under Translation",
        "difficulty": "Module 1 Core",
        "stem": "Data Set X consists of 7 integers: {12, 15, 18, 21, 24, 27, 30}.\nData Set Y is created by adding 15 to each value in Data Set X: {27, 30, 33, 36, 39, 42, 45}.\n\nWhich statement correctly compares the mean and the standard deviation of Data Set X and Data Set Y?",
        "prompt": "Select the correct comparison:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "The mean of Data Set Y is greater, and the standard deviation of Data Set Y is greater."
          },
          {
            "letter": "B",
            "text": "The mean of Data Set Y is greater, and the standard deviation of Data Set Y is equal."
          },
          {
            "letter": "C",
            "text": "The mean of Data Set Y is equal, and the standard deviation of Data Set Y is greater."
          },
          {
            "letter": "D",
            "text": "Both the mean and standard deviation of Data Set Y are equal to those of Data Set X."
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "stdev(12,15,18,21,24,27,30)",
          "stdev(27,30,33,36,39,42,45)"
        ],
        "explanation": "Adding a constant (+15) to every value in a data set shifts the entire distribution right by 15 units, increasing the mean by 15. However, standard deviation measures the spread (distances from the mean), which remains completely unchanged under addition/subtraction of a constant.",
        "hack": "Desmos Built-In Stats: Type stdev(12,15,18,21,24,27,30) and stdev(27,30,33,36,39,42,45) in Desmos—both output 6.48074! Adding a constant NEVER changes standard deviation; multiplying by k scales standard deviation by |k|.",
        "trap_breakdown": {
          "A": "Confused shifting a data set (addition) with scaling a data set (multiplication).",
          "C": "Reversed mean and standard deviation behavior.",
          "D": "Forgot that adding 15 increases the mean by 15."
        },
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 210,
        "section": "Math",
        "domain": "Problem Solving & Data Analysis",
        "skill": "Successive Percent Multipliers (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "In 2022, the annual power output of a municipal solar array was P megawatt-hours. In 2023, its annual power output increased by 35% over the 2022 output. In 2024, equipment maintenance reduced the annual power output by 20% compared to the 2023 output. If the 2024 power output is k * P, what is the value of k?",
        "prompt": "Enter the value of k (as a decimal or fraction):",
        "type": "gridin",
        "correct": "1.08",
        "desmosEquation": [
          "1.35 * 0.80"
        ],
        "explanation": "Convert each percentage change to a decimal multiplier:\n• 35% increase in 2023: multiply by (1 + 0.35) = 1.35.\n• 20% decrease in 2024: multiply by (1 - 0.20) = 0.80.\nCombined multiplier: k = 1.35 * 0.80 = 1.08 (an overall 8% increase, NOT 15%!).",
        "hack": "Multiplier Chain Rule: Never add or subtract percentages (+35% - 20% != +15%)! Always multiply decimal factors: 1.35 * 0.80 = 1.08.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "700s Club: The Hardest Digital SAT Math Problems",
          "channel": "Strategic Test Prep",
          "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
          "videoId": "lrIRF-bFjkw"
        }
      },
      {
        "id": 131,
        "section": "Math",
        "domain": "Problem Solving & Data Analysis",
        "skill": "Weighted Mean & Mixture Algebra (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "A research vessel collected water samples from two ocean layers. The 14 samples from the epipelagic zone had a mean dissolved oxygen concentration of 6.8 mg/L, and the n samples from the mesopelagic zone had a mean dissolved oxygen concentration of 2.3 mg/L. If the combined mean dissolved oxygen concentration of all 14 + n samples was 4.1 mg/L, what is the value of n?",
        "prompt": "Enter the value of n:",
        "type": "gridin",
        "correct": "21",
        "explanation": "Total dissolved oxygen = 14(6.8) + 2.3n = 4.1(14 + n).\n95.2 + 2.3n = 57.4 + 4.1n\n37.8 = 1.8n -> n = 21 samples.",
        "hack": "Seesaw / Lever Balance Shortcut: Distance from 6.8 to 4.1 is 2.7; distance from 2.3 to 4.1 is 1.8. Balance equation: 14 * 2.7 = n * 1.8 -> n = 21!",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Lesson #1: Solve Any Equation",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=TFmt1VwZte8",
          "videoId": "TFmt1VwZte8"
        },
        "desmosEquation": [
          "(14 * 6.8 + 2.3x) / (14 + x) = 4.1"
        ]
      }
    ]
  },
  "math_sprint_2": {
    "id": "math_sprint_2",
    "title": "Math Sprint II: Hard Module 2 'Last 5 Questions' Gauntlet",
    "badge": "750–800 MATH GAUNTLET · 15 QS",
    "phase": "Phase 4: 1550–1600 Championship Mastery",
    "category": "Subject Sprints",
    "difficulty": "750–800 Challenge",
    "description": "15 of the hardest Digital SAT Math archetypes: discriminants, circle tangents, shifted roots, constant identities, and 3D scaling.",
    "timeLimit": 1500,
    "questions": [
      {
        "id": 120,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Linear Systems — No Solution Fractional Constants (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "(3/4)x - (5/6)y = 11\nkx - (15/8)y = 20\n\nIn the given system of equations, k is a constant. If the system has no solution, what is the value of k?",
        "prompt": "Enter the value of k (as a fraction or decimal):",
        "type": "gridin",
        "correct": "27/16",
        "desmosEquation": [
          "(3/4)x - (5/6)y = 11",
          "kx - (15/8)y = 20"
        ],
        "explanation": "A linear system has no solution when the lines are parallel (identical x-to-y coefficient ratios, different constant ratio). Set the ratio of x-coefficients equal to the ratio of y-coefficients:\nk / (3/4) = (-15/8) / (-5/6)\nk / (3/4) = (15/8) * (6/5) = 18/8 = 9/4\nk = (3/4) * (9/4) = 27/16 (or 1.6875).",
        "hack": "Desmos Ratio Trick: Type k / (3/4) ~ (-15/8) / (-5/6) or graph both lines and adjust k until slopes match: 27/16 = 1.6875.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "How to Solve Unknown Constant Questions with Desmos",
          "channel": "MVP Learners",
          "url": "https://www.youtube.com/watch?v=LNLbRHAXX4k",
          "videoId": "LNLbRHAXX4k"
        }
      },
      {
        "id": 121,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Perpendicular Line Parameter System (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "6x + 8y = 29\nkx - 9y = 14\n\nIn the xy-plane, the graphs of the two linear equations above are perpendicular. What is the value of the constant k?",
        "prompt": "Select the value of k:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "-12"
          },
          {
            "letter": "B",
            "text": "-27/4"
          },
          {
            "letter": "C",
            "text": "27/4"
          },
          {
            "letter": "D",
            "text": "12"
          }
        ],
        "correct": "D",
        "desmosEquation": [
          "6x + 8y = 29",
          "kx - 9y = 14"
        ],
        "explanation": "Rewrite Line 1 in slope-intercept form: 8y = -6x + 29 -> y = (-3/4)x + 29/8, so slope m₁ = -3/4. A perpendicular line has negative reciprocal slope m₂ = +4/3. From Line 2: 9y = kx - 14 -> y = (k/9)x - 14/9, so m₂ = k/9. Setting k/9 = 4/3 gives k = 36/3 = 12.",
        "hack": "Standard Form Dot-Product Shortcut: Two lines A₁x + B₁y = C₁ and A₂x + B₂y = C₂ are perpendicular if and only if A₁A₂ + B₁B₂ = 0. Here: 6(k) + 8(-9) = 0 -> 6k = 72 -> k = 12 in 5 seconds!",
        "trap_breakdown": {
          "A": "Sign error: forgot that the second equation has -9y, so its slope is +k/9, not -k/9.",
          "B": "Set slopes equal (parallel) instead of negative reciprocals: k/9 = -3/4 -> k = -27/4.",
          "C": "Used parallel ratio without sign (-3/4 * -9 = 27/4)."
        },
        "videoTutorial": {
          "title": "700s Club: The Hardest Digital SAT Math Problems",
          "channel": "Strategic Test Prep",
          "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
          "videoId": "lrIRF-bFjkw"
        }
      },
      {
        "id": 144,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Linear Function Parameter & Intercept Ratio (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "f(x) = (3/5)x + b\n\nIn the linear function f above, b is a positive constant. If the x-intercept of the graph of y = f(x) in the xy-plane is (c, 0) and the y-intercept is (0, d), what is the value of c / d?",
        "prompt": "Enter the value of c / d (as a fraction or decimal):",
        "type": "gridin",
        "correct": "-5/3",
        "desmosEquation": [
          "y = (3/5)x + 3"
        ],
        "explanation": "The y-intercept occurs at x = 0: d = f(0) = b.\nThe x-intercept occurs when f(c) = 0: (3/5)c + b = 0 -> c = -(5/3)b.\nTherefore, the ratio c / d = [-(5/3)b] / b = -5/3 (Notice that b cancels out completely!).",
        "hack": "Desmos Arbitrary Constant Trick: Whenever a constant b cancels out, pick b = 3 in Desmos! Graph y = (3/5)x + 3. Click the x-intercept (-5, 0) and y-intercept (0, 3). Then c / d = -5 / 3!",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Parameterization & Constants",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=3rF4TTAVom4",
          "videoId": "3rF4TTAVom4"
        }
      },
      {
        "id": 146,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Identity Equations with Two Constants (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "a(3x - 4) + b(2x + 5) = 18x - 1\n\nIn the given equation, a and b are constants. If the equation is true for all values of x, what is the value of a + b?",
        "prompt": "Select the value of a + b:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "5"
          },
          {
            "letter": "B",
            "text": "6"
          },
          {
            "letter": "C",
            "text": "7"
          },
          {
            "letter": "D",
            "text": "8"
          }
        ],
        "correct": "C",
        "desmosEquation": [
          "-4x + 5y = -1",
          "3x + 2y = 18"
        ],
        "explanation": "For the equation to hold for all values of x, the x-coefficients and constant terms on both sides must match identically:\n• x-coefficient: 3a + 2b = 18\n• Constant term: -4a + 5b = -1\nSolving the system gives a = 4 and b = 3 (check: 3(4)+2(3)=18 and -4(4)+5(3)=-1). Therefore, a + b = 4 + 3 = 7.",
        "hack": "Desmos Two-Point Plug-In: Since an identity holds for ALL x, plug in x = 0 and x = 1 using (x, y) for (a, b) in Desmos:\nLine 1 (at t=0): -4x + 5y = -1\nLine 2 (at t=1): -x + 7y = 17\nClick intersection: (4, 3) -> a + b = 4 + 3 = 7!",
        "trap_breakdown": {
          "A": "Found a = 4 and subtracted 3 instead of adding.",
          "B": "Arithmetic slip when solving the 2x2 system.",
          "D": "Doubled a = 4."
        },
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Parameterization & Constants",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=3rF4TTAVom4",
          "videoId": "3rF4TTAVom4"
        }
      },
      {
        "id": 147,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Absolute Value Equation with Zero or Two Solutions (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "4|3x - k| - 12 = 20\n\nIn the given equation, k is a constant. If the sum of the two solutions to the equation is 10, what is the value of k?",
        "prompt": "Enter the value of k:",
        "type": "gridin",
        "correct": "15",
        "desmosEquation": [
          "4|3x - k| - 12 = 20"
        ],
        "explanation": "Isolate the absolute value: 4|3x - k| = 32 -> |3x - k| = 8.\nThe two solutions are symmetric around the vertex of the V-graph, which occurs where 3x - k = 0 -> x = k/3. Therefore, the average of the two solutions is k/3, and the sum of the two solutions is 2(k/3).\nSetting 2k/3 = 10 gives 2k = 30 -> k = 15.\n(Check: |3x - 15| = 8 -> 3x = 23 or 3x = 7 -> x₁ + x₂ = 23/3 + 7/3 = 30/3 = 10.)",
        "hack": "Symmetry of |ax - k| = c: The two solutions ALWAYS average to the vertex x = k/a, so their sum is ALWAYS 2k/a (independent of c, as long as c > 0)! Here 2k/3 = 10 -> k = 15 in 4 seconds.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "25 Hard SAT Math Module 2 Questions + Desmos Regression",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=661RKRiKDdw",
          "videoId": "661RKRiKDdw"
        }
      },
      {
        "id": 124,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Quadratic Discriminant & Tangency (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "y = 2x^2 - 11x + c\ny = 3x - 5\n\nIn the given system of equations, c is a constant. If the system has exactly one real solution (x, y), what is the value of c?",
        "prompt": "Enter the value of c:",
        "type": "gridin",
        "correct": "19.5",
        "desmosEquation": [
          "y = 2x^2 - 11x + c",
          "y = 3x - 5"
        ],
        "explanation": "Set the two equations equal to find their intersection: 2x^2 - 11x + c = 3x - 5 -> 2x^2 - 14x + (c + 5) = 0. For a quadratic equation ax^2 + bx + C = 0 to have exactly one real solution, its discriminant b^2 - 4aC must equal 0:\n(-14)^2 - 4(2)(c + 5) = 0\n196 - 8(c + 5) = 0\nc + 5 = 196 / 8 = 24.5\nc = 19.5 (or 39/2).",
        "hack": "Desmos Tangency Slider: Graph y = 2x^2 - 11x + c and y = 3x - 5. Slide c until the parabola is tangent to the line at a single point (3.5, 5.5): c = 19.5 (or 39/2).",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "25 Hard SAT Math Module 2 Questions + Desmos Regression",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=661RKRiKDdw",
          "videoId": "661RKRiKDdw"
        }
      },
      {
        "id": 125,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Sum of Solutions of Shifted Quadratic (750+ Trap)",
        "difficulty": "750–800 Challenge",
        "stem": "3(x - 7)^2 - 10(x - 7) - 8 = 0\n\nWhat is the sum of all real solutions to the given equation?",
        "prompt": "Select the sum of the solutions:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "10/3"
          },
          {
            "letter": "B",
            "text": "32/3"
          },
          {
            "letter": "C",
            "text": "14"
          },
          {
            "letter": "D",
            "text": "52/3"
          }
        ],
        "correct": "D",
        "desmosEquation": [
          "y = 3(x - 7)^2 - 10(x - 7) - 8"
        ],
        "explanation": "Let u = x - 7. Then 3u^2 - 10u - 8 = 0. By Vieta's formulas, the sum of the two u-values is u₁ + u₂ = -(-10)/3 = 10/3. Since x₁ = u₁ + 7 and x₂ = u₂ + 7, the sum of the x-solutions is:\nx₁ + x₂ = (u₁ + u₂) + 14 = 10/3 + 42/3 = 52/3.\n(Directly: u = 4 or u = -2/3 -> x = 11 or x = 19/3 -> 11 + 19/3 = 52/3.)",
        "hack": "Desmos Zero Click: Graph y = 3(x - 7)^2 - 10(x - 7) - 8. Click the two x-intercepts: (6.333, 0) and (11, 0). Sum = 19/3 + 11 = 52/3 (≈ 17.333)!",
        "trap_breakdown": {
          "A": "10/3 is the sum of u = x - 7, forgetting that shifting right by 7 adds 7 to EACH of the two roots (+14 total).",
          "B": "Added 7 only once (10/3 + 7 = 31/3 or 32/3) instead of adding 7 to both roots.",
          "C": "Doubled the shift (2 * 7 = 14) while ignoring the -10(x - 7) linear term."
        },
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Lesson #1: Solve Any Equation",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=TFmt1VwZte8",
          "videoId": "TFmt1VwZte8"
        }
      },
      {
        "id": 127,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Polynomial Factor & Remainder Theorem (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "p(x) = 2x^3 - kx^2 + 11x - 15\n\nIn the polynomial function above, k is a constant. If p(x) is divisible by (x - 3), what is the value of k?",
        "prompt": "Enter the value of k:",
        "type": "gridin",
        "correct": "8",
        "desmosEquation": [
          "2(3)^3 - k(3)^2 + 11(3) - 15 = 0"
        ],
        "explanation": "By the Polynomial Factor Theorem, p(x) is divisible by (x - 3) if and only if p(3) = 0. Substitute x = 3 into p(x):\n2(3)^3 - k(3)^2 + 11(3) - 15 = 0\n2(27) - 9k + 33 - 15 = 0\n54 - 9k + 18 = 0\n72 = 9k -> k = 8.",
        "hack": "Desmos One-Liner: Type 2(3)^3 - x(3)^2 + 11(3) - 15 = 0 into Desmos. Vertical line appears immediately at x = 8!",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Lesson #1: Solve Any Equation",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=TFmt1VwZte8",
          "videoId": "TFmt1VwZte8"
        }
      },
      {
        "id": 148,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Quadratic Regression from 3 Points (750+ Desmos Weapon)",
        "difficulty": "750–800 Challenge",
        "stem": "In the xy-plane, the graph of the quadratic function f(x) = ax^2 + bx + c passes through the points (-2, 23), (1, -4), and (4, 11). What is the value of a + b + c?",
        "prompt": "Select the value of a + b + c:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "-4"
          },
          {
            "letter": "B",
            "text": "2"
          },
          {
            "letter": "C",
            "text": "7"
          },
          {
            "letter": "D",
            "text": "11"
          }
        ],
        "correct": "A",
        "desmosEquation": [
          "y_1 ~ a*x_1^2 + b*x_1 + c"
        ],
        "explanation": "Wait—look closely at what the question is asking for: 'What is the value of a + b + c?' Notice that for f(x) = ax^2 + bx + c, evaluating f(1) gives:\nf(1) = a(1)^2 + b(1) + c = a + b + c!\nAnd the problem ALREADY gave you the point (1, -4), which means f(1) = -4! Therefore, a + b + c = -4 with zero calculation required!\n(Even if you solve for a, b, c via Desmos regression: a = 2, b = -7, c = 1 -> 2 - 7 + 1 = -4.)",
        "hack": "1600-Scorer Pattern Recognition: For ANY polynomial f(x) = ax^2 + bx + c, the sum of coefficients a + b + c is literally f(1)! Since (1, -4) is given in the stem, a + b + c = -4 in 2 seconds! (Or run y₁ ~ ax₁² + bx₁ + c in Desmos.)",
        "trap_breakdown": {
          "B": "2 is the leading coefficient a.",
          "C": "Calculated 2 + 7 - 2 with a sign error on b.",
          "D": "11 is f(4), not f(1)."
        },
        "videoTutorial": {
          "title": "7 Hard SAT Math Questions Solved with Desmos Regression",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=rSB5oMHfiZc",
          "videoId": "rSB5oMHfiZc"
        }
      },
      {
        "id": 149,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Product of Roots & Vieta's Theorem with Constants (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "2x^2 - 9x + k = 0\n\nIn the given equation, k is a constant. If one solution to the equation is x = (9 + sqrt(17)) / 4, what is the value of k?",
        "prompt": "Enter the value of k:",
        "type": "gridin",
        "correct": "8",
        "desmosEquation": [
          "2((9 + sqrt(17))/4)^2 - 9((9 + sqrt(17))/4) + x = 0"
        ],
        "explanation": "By the quadratic formula for 2x^2 - 9x + k = 0:\nx = [9 ± sqrt((-9)^2 - 4(2)(k))] / (2 * 2) = [9 ± sqrt(81 - 8k)] / 4.\nComparing this with x = (9 + sqrt(17)) / 4 gives:\n81 - 8k = 17 -> 8k = 64 -> k = 8.",
        "hack": "Desmos Direct Substitution: Replace x with (9 + sqrt(17))/4 and replace k with x in Desmos: 2((9+sqrt(17))/4)^2 - 9((9+sqrt(17))/4) + x = 0. Vertical line appears at x = 8!",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "25 Hard SAT Math Module 2 Questions + Desmos Regression",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=661RKRiKDdw",
          "videoId": "661RKRiKDdw"
        }
      },
      {
        "id": 150,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Equivalent Rational Expressions & Polynomial Division (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "(6x^2 + 13x - 8) / (2x + 5) = 3x - 1 + R / (2x + 5)\n\nThe equation above is true for all x != -5/2, where R is a constant. What is the value of R?",
        "prompt": "Select the value of R:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "-13"
          },
          {
            "letter": "B",
            "text": "-3"
          },
          {
            "letter": "C",
            "text": "3"
          },
          {
            "letter": "D",
            "text": "13"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "y = (6x^2 + 13x - 8) - (3x - 1)(2x + 5)"
        ],
        "explanation": "Multiply both sides by (2x + 5):\n6x^2 + 13x - 8 = (3x - 1)(2x + 5) + R.\nSince this holds for all x, either expand (3x - 1)(2x + 5) = 6x^2 + 13x - 5 -> -8 = -5 + R -> R = -3, OR simply plug in x = 0:\n-8 = (-1)(5) + R -> -8 = -5 + R -> R = -3!",
        "hack": "Plug in x = 0 Shortcut: Set x = 0 in the original equation: (-8) / 5 = -1 + R / 5 -> -8 = -5 + R -> R = -3 in 5 seconds!",
        "trap_breakdown": {
          "A": "Subtracted 5 from -8 instead of adding 5 (-8 - 5 = -13).",
          "C": "Sign error: did -5 - (-8) = +3.",
          "D": "Copied the x-coefficient (13)."
        },
        "videoTutorial": {
          "title": "700s Club: The Hardest Digital SAT Math Problems",
          "channel": "Strategic Test Prep",
          "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
          "videoId": "lrIRF-bFjkw"
        }
      },
      {
        "id": 151,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Function Transformations & Shifted Y-Intercept (750+ Trap)",
        "difficulty": "750–800 Challenge",
        "stem": "f(x) = 3^(x - 2) + 5\n\nThe function f is defined above. If g(x) = f(x + 4) - 11, what is the y-intercept of the graph of y = g(x) in the xy-plane?",
        "prompt": "Select the y-intercept of y = g(x):",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "(0, -5)"
          },
          {
            "letter": "B",
            "text": "(0, 3)"
          },
          {
            "letter": "C",
            "text": "(0, 9)"
          },
          {
            "letter": "D",
            "text": "(0, 14)"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "f(x) = 3^(x - 2) + 5",
          "g(x) = f(x + 4) - 11"
        ],
        "explanation": "The y-intercept of y = g(x) occurs at x = 0:\ng(0) = f(0 + 4) - 11 = f(4) - 11.\nEvaluate f(4): f(4) = 3^(4 - 2) + 5 = 3^2 + 5 = 9 + 5 = 14.\nTherefore, g(0) = 14 - 11 = 3, giving the y-intercept (0, 3).",
        "hack": "Desmos Function Notation: Type f(x) = 3^(x - 2) + 5 on Line 1, and g(x) = f(x + 4) - 11 on Line 2! Desmos natively understands f(x + 4) and plots the y-intercept (0, 3) immediately!",
        "trap_breakdown": {
          "A": "Evaluated f(0) - 11 = (1/9 + 5) - 11 instead of f(4) - 11.",
          "C": "Calculated 3^2 = 9 and forgot to add +5 and subtract -11.",
          "D": "14 is f(4), forgetting to subtract 11."
        },
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 128,
        "section": "Math",
        "domain": "Geometry & Trigonometry",
        "skill": "Circle Equation & Inscribed Square Area (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "x^2 + y^2 - 10x + 6y = 47\n\nThe equation above represents Circle C in the xy-plane. If Square S is inscribed in Circle C (such that all four vertices of Square S lie on Circle C), what is the area of Square S?",
        "prompt": "Select the area of Square S:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "81"
          },
          {
            "letter": "B",
            "text": "162"
          },
          {
            "letter": "C",
            "text": "324"
          },
          {
            "letter": "D",
            "text": "81π"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "x^2 + y^2 - 10x + 6y = 47"
        ],
        "explanation": "Complete the square to find the radius r of Circle C:\n(x - 5)^2 - 25 + (y + 3)^2 - 9 = 47 -> (x - 5)^2 + (y + 3)^2 = 81, so r^2 = 81 and r = 9 (diameter d = 18).\nFor a square inscribed in a circle, the diagonal of the square equals the diameter of the circle (d = 18). The area of a square in terms of its diagonal d is d^2 / 2 = (2r)^2 / 2 = 2r^2 = 2(81) = 162.",
        "hack": "Inscribed Square Formula: Area of inscribed square = 2r^2 (and Area of circumscribed square = 4r^2). Since r^2 = 81 from Desmos/completing the square, Area = 2 * 81 = 162!",
        "trap_breakdown": {
          "A": "81 is r^2 (which would be the area of a square with side length r, not diagonal 2r).",
          "C": "324 is (2r)^2 = 18^2, the area of a square CIRCUMSCRIBED around the circle.",
          "D": "81π is the area of the circle itself."
        },
        "videoTutorial": {
          "title": "Module 2 SAT Math Practice: 22 Difficult Questions Walkthrough",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=Ku5gIHH6h4Q",
          "videoId": "Ku5gIHH6h4Q"
        }
      },
      {
        "id": 130,
        "section": "Math",
        "domain": "Geometry & Trigonometry",
        "skill": "3D Similarity & Surface Area / Volume Scaling (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "Right circular cone A and right circular cone B are similar. The volume of cone A is 24π cubic centimeters, and the volume of cone B is 648π cubic centimeters. If the lateral surface area of cone A is 20π square centimeters, what is the lateral surface area, in square centimeters, of cone B?",
        "prompt": "Select the lateral surface area of cone B:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "60π"
          },
          {
            "letter": "B",
            "text": "180π"
          },
          {
            "letter": "C",
            "text": "540π"
          },
          {
            "letter": "D",
            "text": "1,620π"
          }
        ],
        "correct": "B",
        "explanation": "For similar 3D solids with linear scale factor k:\n• Volume ratio = k^3 = (648π) / (24π) = 27 -> k = ∛27 = 3.\n• Surface area ratio = k^2 = 3^2 = 9.\nTherefore, the lateral surface area of cone B is 20π * 9 = 180π.",
        "hack": "k -> k^2 -> k^3 Bridge: Never multiply area by the volume ratio! First take the cube root of the volume ratio (k = ∛27 = 3), then square it for surface area (k^2 = 9 -> 20π * 9 = 180π).",
        "trap_breakdown": {
          "A": "Multiplied area by k = 3 instead of k^2 = 9.",
          "C": "Multiplied area by the volume ratio k^3 = 27 (20π * 27 = 540π).",
          "D": "Multiplied 540π by 3."
        },
        "videoTutorial": {
          "title": "700s Club: The Hardest Digital SAT Math Problems",
          "channel": "Strategic Test Prep",
          "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
          "videoId": "lrIRF-bFjkw"
        }
      },
      {
        "id": 158,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Surface Area of Inscribed Cube / Sphere (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "A solid metal cube is inscribed in a sphere of radius 6*sqrt(3) centimeters such that all eight vertices of the cube lie on the surface of the sphere. What is the total surface area, in square centimeters, of the cube?",
        "prompt": "Enter the total surface area of the cube:",
        "type": "gridin",
        "correct": "864",
        "desmosEquation": [
          "6 * (12)^2"
        ],
        "explanation": "For a cube of side length s inscribed in a sphere, the 3D space diagonal of the cube equals the diameter of the sphere:\nSpace diagonal of cube = s * sqrt(3)\nDiameter of sphere = 2r = 2 * 6*sqrt(3) = 12*sqrt(3).\nSetting s * sqrt(3) = 12*sqrt(3) gives side length s = 12 cm.\nThe total surface area of a cube with 6 faces of area s^2 is 6s^2 = 6(12^2) = 6(144) = 864 cm^2.",
        "hack": "3D Space Diagonal Formula: Cube space diagonal d = s√3 = 2r. So s√3 = 12√3 -> s = 12 -> Surface Area = 6s² = 6(144) = 864.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "Module 2 SAT Math Practice: 22 Difficult Questions Walkthrough",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=Ku5gIHH6h4Q",
          "videoId": "Ku5gIHH6h4Q"
        }
      }
    ]
  },
  "rw_sprint_1": {
    "id": "rw_sprint_1",
    "title": "Reading & Writing Sprint I: High-Yield Conventions & Craft",
    "badge": "RW SPRINT · 15 QS",
    "phase": "Phase 2: Section Speed & Desmos Fluency",
    "category": "Subject Sprints",
    "difficulty": "Module 1–2 Bridge",
    "description": "15-question verbal sprint training the 'Question 15 First' pacing protocol: bank grammar, transitions, and synthesis in 35 seconds per item.",
    "timeLimit": 1080,
    "questions": [
      {
        "id": 112,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Boundaries — Conjunctive Adverb ('However')",
        "difficulty": "Module 2 Hard",
        "stem": "Biochemist Katalin Karikó spent decades investigating synthetic messenger RNA despite repeated grant rejections and institutional ______ her persistence ultimately enabled the rapid development of lipid-nanoparticle vaccines that saved millions of lives.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "demotions, however,"
          },
          {
            "letter": "B",
            "text": "demotions; however,"
          },
          {
            "letter": "C",
            "text": "demotions, however"
          },
          {
            "letter": "D",
            "text": "demotions however"
          }
        ],
        "correct": "B",
        "explanation": "Left of the boundary is a complete independent clause ('Biochemist Katalin Karikó spent... demotions'). Right of the boundary is a second complete independent clause ('her persistence ultimately enabled...'). 'However' is a conjunctive adverb, NOT a FANBOYS conjunction, so it cannot join two independent clauses with a comma. A semicolon before 'however' and a comma after it is required.",
        "hack": "The 'However' Law: Between two independent clauses, ', however,' is ALWAYS a comma-splice trap. You MUST use '; however,' or '. However,'.",
        "trap_breakdown": {
          "A": "Classic comma splice: 'however' is not a coordinating conjunction (FANBOYS).",
          "C": "Still a comma splice before 'however' and missing the comma after it.",
          "D": "Fused run-on sentence with zero punctuation between two independent clauses."
        },
        "videoTutorial": {
          "title": "Connector Placement — How to Punctuate 'However' on the SAT",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=sQYiSE2JN1I",
          "videoId": "sQYiSE2JN1I"
        }
      },
      {
        "id": 113,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Boundaries — Restrictive Appositives (750+ Trap)",
        "difficulty": "750–800 Challenge",
        "stem": "By measuring the Doppler shifts of H-alpha emission lines in the outer disks of spiral galaxies such as Andromeda, observational ______ demonstrated that orbital velocities remained flat at large radii rather than declining in accordance with Keplerian predictions, providing the first robust kinematic evidence for dark matter halos.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "astronomer, Vera Rubin,"
          },
          {
            "letter": "B",
            "text": "astronomer Vera Rubin,"
          },
          {
            "letter": "C",
            "text": "astronomer, Vera Rubin"
          },
          {
            "letter": "D",
            "text": "astronomer Vera Rubin"
          }
        ],
        "correct": "D",
        "explanation": "When a job title or descriptive noun phrase ('observational astronomer') precedes a proper name ('Vera Rubin') without a determiner like 'the', the name is a restrictive appositive that specifies *which* astronomer—so NO commas are placed before or after the name. Furthermore, no single comma may separate the subject ('Vera Rubin') from its verb ('demonstrated').",
        "hack": "Title + Name Rule: [Occupation] + [Name] + [Verb] = ZERO COMMAS ('astronomer Vera Rubin demonstrated'). Never put a comma between a subject and its verb!",
        "trap_breakdown": {
          "A": "Treats 'Vera Rubin' as nonessential; removing it leaves 'By measuring..., observational astronomer demonstrated,' which is ungrammatical (singular countable noun 'astronomer' lacks 'an' or 'the').",
          "B": "Places an illegal single comma between the subject ('Vera Rubin') and its verb ('demonstrated').",
          "C": "Places an illegal single comma between the title ('astronomer') and the restrictive name ('Vera Rubin')."
        },
        "videoTutorial": {
          "title": "Digital SAT Writing Guide from a Perfect Scorer",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
          "videoId": "1ppKIYbdEk0"
        }
      },
      {
        "id": 114,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Boundaries — Matching Dashes & Colons",
        "difficulty": "Module 2 Hard",
        "stem": "The restoration of the thirteenth-century Alhambra palace complex in Granada required artisans to replicate *alicatado*—a labor-intensive mosaic technique in which glazed ceramic tiles are hand-cut into interlocking geometric ______ and set into wet mortar to form seamless mathematical tessellations.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "polygons—"
          },
          {
            "letter": "B",
            "text": "polygons,"
          },
          {
            "letter": "C",
            "text": "polygons;"
          },
          {
            "letter": "D",
            "text": "polygons"
          }
        ],
        "correct": "D",
        "explanation": "Look at the structure of the appositive phrase opened by the em-dash after *alicatado*: 'a labor-intensive mosaic technique in which glazed ceramic tiles are [hand-cut into interlocking geometric polygons] and [set into wet mortar...]'. Both 'hand-cut...' and 'set into wet mortar...' are parallel passive participles inside the 'in which' clause that continues to the end of the sentence. Therefore, the dash does NOT close after 'polygons'—no punctuation is needed between the two compound phrases joined by 'and.'",
        "hack": "Fake-Closing-Dash Trap: Just because you see an em-dash earlier in the sentence doesn't mean the blank closes it! Check whether 'and set into wet mortar' belongs inside the definition of *alicatado*—it does, so the dash runs all the way to the period.",
        "trap_breakdown": {
          "A": "Closing the dash after 'polygons' leaves 'The restoration... required artisans to replicate alicatado and set into wet mortar,' which is ungrammatical.",
          "B": "A comma before 'and' is only used when joining two complete independent clauses, not two participial phrases ('are hand-cut... and set...').",
          "C": "A semicolon cannot separate two halves of a compound verb phrase."
        },
        "videoTutorial": {
          "title": "Commas, Colons & Dashes: SAT Boundaries Within a Sentence",
          "channel": "PrepFriend101",
          "url": "https://www.youtube.com/watch?v=YaU6sZaxA3M",
          "videoId": "YaU6sZaxA3M"
        }
      },
      {
        "id": 115,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Form, Structure & Sense — Subject-Verb Inversion",
        "difficulty": "750–800 Challenge",
        "stem": "Beneath the hyper-arid salt flats of Chile's Atacama Desert ______ of extremophilic halobacteria and archaea that derive metabolic energy by oxidizing atmospheric trace gases rather than performing photosynthesis.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "lies a diverse consortium"
          },
          {
            "letter": "B",
            "text": "lie a diverse consortium"
          },
          {
            "letter": "C",
            "text": "are lying a diverse consortium"
          },
          {
            "letter": "D",
            "text": "have lain a diverse consortium"
          }
        ],
        "correct": "A",
        "explanation": "When a sentence begins with a locative prepositional phrase ('Beneath the hyper-arid salt flats of Chile's Atacama Desert'), the subject and verb invert: the true subject comes *after* the verb. The head noun of the subject is 'a diverse consortium' (singular collective noun), ignoring the prepositional phrase 'of extremophilic halobacteria and archaea.' Therefore, the singular verb 'lies' is required.",
        "hack": "Inverted Sentence Hack: Flip the sentence around: 'A diverse consortium (singular) [lies] beneath the salt flats.'",
        "trap_breakdown": {
          "B": "Plural verb ('lie')—tricked by the plural nouns 'flats' before the blank and 'halobacteria and archaea' after the subject.",
          "C": "Plural auxiliary ('are lying') fails to agree with singular 'a diverse consortium.'",
          "D": "Plural auxiliary ('have lain') fails to agree with singular 'a diverse consortium.'"
        },
        "videoTutorial": {
          "title": "Digital SAT Writing Guide from a Perfect Scorer",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
          "videoId": "1ppKIYbdEk0"
        }
      },
      {
        "id": 116,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Form, Structure & Sense — Dangling Modifiers",
        "difficulty": "Module 2 Hard",
        "stem": "Synthesized at pressures exceeding 150 gigapascals inside a diamond anvil cell, ______ at temperatures significantly higher than those tolerated by conventional niobium-titanium alloys.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "physicists observed that lanthanum superhydride exhibited zero electrical resistance"
          },
          {
            "letter": "B",
            "text": "zero electrical resistance was exhibited by lanthanum superhydride"
          },
          {
            "letter": "C",
            "text": "lanthanum superhydride exhibited zero electrical resistance"
          },
          {
            "letter": "D",
            "text": "the diamond anvil cell enabled lanthanum superhydride to exhibit zero electrical resistance"
          }
        ],
        "correct": "C",
        "explanation": "The introductory participial phrase ('Synthesized at pressures exceeding 150 gigapascals inside a diamond anvil cell,') must immediately precede the noun that was actually synthesized. What was synthesized at 150 GPa? 'Lanthanum superhydride'—not the physicists, not 'zero electrical resistance,' and not the anvil cell.",
        "hack": "Dangling Modifier Law: Ask 'WHAT was synthesized at 150 gigapascals?' That exact noun ('lanthanum superhydride') must be the very first grammatical subject after the comma.",
        "trap_breakdown": {
          "A": "Implies that 'physicists' were synthesized at 150 gigapascals inside a diamond anvil cell.",
          "B": "Implies that 'zero electrical resistance' (an abstract property) was synthesized.",
          "D": "Implies the 'diamond anvil cell' was synthesized inside itself."
        },
        "videoTutorial": {
          "title": "Digital SAT Writing Guide from a Perfect Scorer",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
          "videoId": "1ppKIYbdEk0"
        }
      },
      {
        "id": 117,
        "section": "Reading & Writing",
        "domain": "Expression of Ideas",
        "skill": "Logical Transitions (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "In classical Newtonian celestial mechanics, planetary orbits are modeled as closed Keplerian ellipses that repeat identically unless perturbed by third-body gravitational tugs. Under Einstein's general theory of relativity, ______ the curvature of spacetime around a massive star causes the perihelion of even an isolated planet's orbit to precess slightly with each revolution—an effect famously measured in Mercury's orbit.",
        "prompt": "Which choice completes the text with the most logical transition?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "consequently,"
          },
          {
            "letter": "B",
            "text": "by contrast,"
          },
          {
            "letter": "C",
            "text": "for instance,"
          },
          {
            "letter": "D",
            "text": "similarly,"
          }
        ],
        "correct": "B",
        "explanation": "Sentence 1 states that in Newtonian mechanics, an isolated planet's orbit is a closed ellipse that repeats identically. Sentence 2 states that under Einstein's general relativity, even an isolated planet's orbit precesses (rotates) with each revolution. Because the two frameworks predict opposite behaviors for an isolated orbit, 'by contrast,' is required.",
        "hack": "Transition Polarity: Newtonian (closed/static unless perturbed) vs. Relativity (precesses even when isolated) = Direct Contrast ('by contrast,').",
        "trap_breakdown": {
          "A": "'Consequently' signals cause-and-effect, but Newtonian mechanics did not cause relativistic spacetime curvature.",
          "C": "'For instance' introduces an example of the preceding claim, whereas Sentence 2 contradicts the Newtonian prediction.",
          "D": "'Similarly' signals agreement, ignoring the opposition between closed ellipses and precessing orbits."
        },
        "videoTutorial": {
          "title": "Connector Placement — How to Punctuate 'However' on the SAT",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=sQYiSE2JN1I",
          "videoId": "sQYiSE2JN1I"
        }
      },
      {
        "id": 118,
        "section": "Reading & Writing",
        "domain": "Expression of Ideas",
        "skill": "Rhetorical Synthesis (Goal Filtering)",
        "difficulty": "Module 2 Hard",
        "stem": "While researching a topic, a student has taken the following notes:\n• Pando is a clonal colony of quaking aspen (Populus tremuloides) located in the Fishlake National Forest in Utah.\n• Although it appears to be a forest of over 47,000 individual trees, all the stems are genetically identical and connected by a single underground root system.\n• Spanning 106 acres and weighing an estimated 6,000 metric tons, Pando is widely considered the heaviest known living organism on Earth.\n• By contrast, the largest known individual sequoia tree (General Sherman) weighs approximately 1,900 metric tons.\n• Ecologists have warned that deer and cattle overgrazing on young aspen shoots is preventing Pando from regenerating aging stems.\n\nThe student wants to explain why Pando is classified as a single organism despite its appearance. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
        "prompt": "Select the choice that best accomplishes the student's goal:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "Weighing an estimated 6,000 metric tons across 106 acres in Utah, Pando is more than three times heavier than the General Sherman sequoia."
          },
          {
            "letter": "B",
            "text": "Although Pando looks like a forest of 47,000 separate quaking aspen trees, its stems are genetically identical and share a single interconnected underground root system."
          },
          {
            "letter": "C",
            "text": "Located in Utah's Fishlake National Forest, the clonal aspen colony known as Pando faces regeneration threats because deer and cattle graze on its young shoots."
          },
          {
            "letter": "D",
            "text": "Unlike the General Sherman sequoia, which is an individual tree weighing 1,900 metric tons, Pando is threatened by overgrazing across its 106-acre habitat."
          }
        ],
        "correct": "B",
        "explanation": "Filter strictly by the two parts of the student's goal: (1) 'despite its appearance' ('looks like a forest of 47,000 separate trees') and (2) 'why it is classified as a single organism' ('stems are genetically identical and share a single interconnected underground root system'). Only Choice B satisfies both parts.",
        "hack": "15-Second Synthesis Rule: Goal = 'why single organism' + 'despite appearance.' Cross out A (weight comparison), C (grazing threat), and D (sequoia + grazing).",
        "trap_breakdown": {
          "A": "Uses true notes about weight, but never explains why Pando is a single organism or how it appears.",
          "C": "Focuses on location and overgrazing threats rather than the biological basis for being a single organism.",
          "D": "Combines weight and overgrazing facts without addressing the prompt's goal."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing: Rhetorical Synthesis Strategy",
          "channel": "Test Innovators",
          "url": "https://www.youtube.com/watch?v=cLDrVb2_0Jc",
          "videoId": "cLDrVb2_0Jc"
        }
      },
      {
        "id": 140,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Pronoun & Demonstrative Number Agreement (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "Because the thermal conductivity of single-layer graphene sheets exceeds ______ of pure copper by nearly an order of magnitude at room temperature, materials engineers are integrating graphene heat spreaders into next-generation microprocessor architectures.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "those"
          },
          {
            "letter": "B",
            "text": "that"
          },
          {
            "letter": "C",
            "text": "them"
          },
          {
            "letter": "D",
            "text": "these"
          }
        ],
        "correct": "B",
        "explanation": "In a comparison ('exceeds ______ of pure copper'), the demonstrative pronoun stands in for the singular noun 'the thermal conductivity' (not 'graphene sheets'). Singular antecedent requires the singular demonstrative pronoun 'that' ('exceeds that [the thermal conductivity] of pure copper').",
        "hack": "'That of' vs. 'Those of' Rule: Ask WHAT is being compared. Here, 'the thermal conductivity' (singular) of graphene is compared to 'that' (the thermal conductivity) of copper.",
        "trap_breakdown": {
          "A": "'Those' is plural, erroneously matching the local plural noun 'sheets' instead of the compared property 'conductivity.'",
          "C": "'Them' cannot be modified by a prepositional phrase ('them of pure copper' is ungrammatical).",
          "D": "'These' is plural and cannot be used in a comparative 'of' construction."
        },
        "videoTutorial": {
          "title": "Digital SAT Writing Guide from a Perfect Scorer",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
          "videoId": "1ppKIYbdEk0"
        }
      },
      {
        "id": 141,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Genitive / Possessive Nouns vs. Plurals (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "Paleobotanists analyzing fossilized leaf cuticles from the Paleocene-Eocene Thermal Maximum discovered that two sympatric ______ exhibited markedly different stomatal density reductions in response to elevated atmospheric carbon dioxide.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "tree species’ leaves"
          },
          {
            "letter": "B",
            "text": "tree species’s leaves"
          },
          {
            "letter": "C",
            "text": "trees species leaves"
          },
          {
            "letter": "D",
            "text": "tree species’ leaf’s"
          }
        ],
        "correct": "A",
        "explanation": "'Two sympatric tree species' is plural ('species' is the plural noun, modified by the noun adjunct 'tree'). To show that the 'leaves' belong to those plural 'species', we form the plural possessive of a noun ending in -s by adding an apostrophe after the -s: 'species’'. 'Leaves' is the plural subject of the verb 'exhibited' and is not possessive, so it takes no apostrophe.",
        "hack": "Apostrophe Test: Does the second noun ('leaves') own anything? No -> eliminate any choice with an apostrophe on 'leaf's' (D). Does the first noun ('two... species') own the leaves? Yes, and 'species' is plural ending in -s -> 'tree species’ leaves' (A).",
        "trap_breakdown": {
          "B": "'Species' is plural here ('two sympatric tree species'), so its possessive is 'species’', not 'species’s'.",
          "C": "Omits the possessive apostrophe required before 'leaves' and incorrectly pluralizes the noun adjunct 'tree'.",
          "D": "Erroneously makes 'leaf's' singular possessive before the verb 'exhibited'."
        },
        "videoTutorial": {
          "title": "Digital SAT Writing Guide from a Perfect Scorer",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
          "videoId": "1ppKIYbdEk0"
        }
      },
      {
        "id": 142,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Punctuation — Em-Dash Pair Around Interrupting Clause",
        "difficulty": "Module 2 Hard",
        "stem": "The chemical synthesis of cubane—a platonic hydrocarbon whose eight carbon atoms are forced into a 90-degree cubic geometry that defies standard tetrahedral bond ______ was once considered theoretically impossible until Philip Eaton and Thomas Cole isolated the crystalline solid in 1964.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "angles,"
          },
          {
            "letter": "B",
            "text": "angles;"
          },
          {
            "letter": "C",
            "text": "angles—"
          },
          {
            "letter": "D",
            "text": "angles"
          }
        ],
        "correct": "C",
        "explanation": "The interrupting appositive ('—a platonic hydrocarbon... tetrahedral bond angles—') was opened with an em-dash after 'cubane'. By the Symmetric Delimiter Rule, a nonessential phrase opened with an em-dash MUST be closed with a matching em-dash before the main verb 'was once considered.'",
        "hack": "Dash-Matching Law: Scan left of the blank! If you see a single opening em-dash (—) before a nonessential interrupter, you MUST close that interrupter with a second em-dash (—) before the verb. Never mix a dash with a comma!",
        "trap_breakdown": {
          "A": "Mismatched delimiter: opens with an em-dash (—) but closes with a comma (,).",
          "B": "A semicolon cannot close an interrupting phrase or separate a subject from its verb.",
          "D": "Fails to close the interrupting appositive."
        },
        "videoTutorial": {
          "title": "Commas, Colons & Dashes: SAT Boundaries Within a Sentence",
          "channel": "PrepFriend101",
          "url": "https://www.youtube.com/watch?v=YaU6sZaxA3M",
          "videoId": "YaU6sZaxA3M"
        }
      },
      {
        "id": 205,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Modifier Placement — Introductory Participial Phrase",
        "difficulty": "Module 1 Core",
        "stem": "Originating in the highlands of southwestern Ethiopia, ______",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "coffee trade networks expanded rapidly across the Arabian Peninsula during the fifteenth century."
          },
          {
            "letter": "B",
            "text": "the Arabian Peninsula witnessed the rapid expansion of coffee cultivation during the fifteenth century."
          },
          {
            "letter": "C",
            "text": "the Coffea arabica plant was cultivated and traded throughout the Arabian Peninsula in the fifteenth century."
          },
          {
            "letter": "D",
            "text": "traders transported Coffea arabica seeds across the Arabian Peninsula in the fifteenth century."
          }
        ],
        "correct": "C",
        "explanation": "The introductory participial phrase 'Originating in the highlands of southwestern Ethiopia,' must be immediately followed by the grammatical subject that originated there: 'the Coffea arabica plant.'",
        "hack": "Comma-Touch Rule: Ask 'What originated in the highlands of Ethiopia?' The Coffea arabica plant! That exact noun must touch the comma.",
        "trap_breakdown": {
          "A": "Trade networks across the Arabian Peninsula did not originate inside the Ethiopian highlands.",
          "B": "The Arabian Peninsula did not originate in Ethiopia.",
          "D": "Traders did not originate in the highlands of Ethiopia."
        },
        "videoTutorial": {
          "title": "Digital SAT Writing Guide from a Perfect Scorer",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
          "videoId": "1ppKIYbdEk0"
        }
      },
      {
        "id": 206,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Rhetorical Synthesis — JWST NIRSpec Breakthrough",
        "difficulty": "Module 1 Core",
        "stem": "While researching a topic, a student has taken the following notes:\n• The James Webb Space Telescope (JWST) carries the Near-Infrared Spectrograph (NIRSpec).\n• NIRSpec can observe up to 100 astronomical objects simultaneously using a microshutter array.\n• In 2023, NIRSpec analyzed the atmospheric composition of exoplanet WASP-39b.\n• The transmission spectrum confirmed the presence of carbon dioxide and sulfur dioxide in WASP-39b’s atmosphere.\n• This was the first definitive detection of sulfur dioxide in any exoplanet atmosphere.",
        "prompt": "The student wants to highlight the specific scientific breakthrough achieved by NIRSpec on WASP-39b. Which choice most effectively uses the relevant information to accomplish this goal?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "Equipped with a microshutter array, the JWST's NIRSpec instrument can analyze up to 100 astronomical bodies at the same time."
          },
          {
            "letter": "B",
            "text": "When NIRSpec observed exoplanet WASP-39b, it made the historic first definitive detection of sulfur dioxide in an exoplanetary atmosphere."
          },
          {
            "letter": "C",
            "text": "Among its various targets, the James Webb Space Telescope analyzed the atmosphere of exoplanet WASP-39b in 2023."
          },
          {
            "letter": "D",
            "text": "Sulfur dioxide and carbon dioxide are both molecules that can be identified via transmission spectra using NIRSpec."
          }
        ],
        "correct": "B",
        "explanation": "The prompt asks to highlight the 'specific scientific breakthrough achieved by NIRSpec on WASP-39b.' Choice B directly states both WASP-39b and the historic breakthrough ('first definitive detection of sulfur dioxide in an exoplanetary atmosphere').",
        "hack": "Goal-First Filter: Prompt asks for 'specific scientific breakthrough on WASP-39b' -> must include both 'WASP-39b' and 'first definitive detection of sulfur dioxide.'",
        "trap_breakdown": {
          "A": "Describes the microshutter array hardware, omitting WASP-39b and the breakthrough.",
          "C": "States that JWST analyzed WASP-39b but omits what was discovered.",
          "D": "Omits WASP-39b and the historic 'first detection' milestone."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing: Rhetorical Synthesis Strategy",
          "channel": "Test Innovators",
          "url": "https://www.youtube.com/watch?v=cLDrVb2_0Jc",
          "videoId": "cLDrVb2_0Jc"
        }
      },
      {
        "id": 111,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Command of Evidence (Textual / Literary)",
        "difficulty": "Module 2 Hard",
        "stem": "In Edith Wharton's 1920 novel The Age of Innocence, Newland Archer prides himself on his cosmopolitan detachment from the rigid social orthodoxy of 1870s Old New York, yet in moments of personal crisis he instinctively judges his fiancée May Welland through the very conventions he claims to disdain.",
        "prompt": "Which quotation from The Age of Innocence most effectively illustrates the claim?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "\"The stipulation that the wedding should take place in April, rather than in the autumn, had been made by Mrs. Welland, who wished the young couple to spend their summer in Europe.\""
          },
          {
            "letter": "B",
            "text": "\"He had dawdled over his cigar because he was at heart a dilettante, and thinking over a pleasure to come often gave him a subtler satisfaction than its realization.\""
          },
          {
            "letter": "C",
            "text": "\"How young she is! For what endless years this uncanny crystalline innocence will endure—and how terribly she would bore a man who had no use for the parlor pieties he himself secretly demanded of a wife!\""
          },
          {
            "letter": "D",
            "text": "\"Through the closed windows of the coupé he saw the gas-lamps of Fifth Avenue flaring through the sleet, each house-front identical in its brownstone reticence.\""
          }
        ],
        "correct": "C",
        "explanation": "The claim has two parts: (1) Archer views himself as superior to social orthodoxy ('parlor pieties'), yet (2) he enforces those same conventions on May. Choice C shows him mocking her 'crystalline innocence' while admitting they are the 'parlor pieties he himself secretly demanded of a wife!'",
        "hack": "Two-Half Verification: Match Part 1 (disdain for orthodoxy = 'bore a man who had no use for parlor pieties') + Part 2 (internalizing the orthodoxy = 'he himself secretly demanded of a wife').",
        "trap_breakdown": {
          "A": "Describes Mrs. Welland's scheduling preference, not Archer's psychological contradiction.",
          "B": "Illustrates Archer's aesthetic hesitation, not his double standard regarding May and social conventions.",
          "D": "Describes the setting of Fifth Avenue without mentioning May or Archer's judgment of her."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 201,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Words in Context — Ecological Regeneration",
        "difficulty": "Module 1 Core",
        "stem": "Ecologists studying the regeneration of temperate pine forests noted that controlled burns did not deplete topsoil nutrients as previously feared; rather, post-fire soil analyses demonstrated that the ash deposit served to ______ the presence of bioavailable potassium and phosphorus, accelerating seedling growth.",
        "prompt": "Which choice completes the text with the most logical and precise word?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "mitigate"
          },
          {
            "letter": "B",
            "text": "augment"
          },
          {
            "letter": "C",
            "text": "obscure"
          },
          {
            "letter": "D",
            "text": "fabricate"
          }
        ],
        "correct": "B",
        "explanation": "The transition 'rather' establishes a direct contrast to 'deplete.' Post-fire analyses showed the ash deposit increased nutrient availability, which accelerated seedling growth. 'Augment' means to increase, enlarge, or supplement.",
        "hack": "Contrast Signal ('did not deplete; rather...') + Positive Effect ('accelerating seedling growth') = must mean 'increase' (augment).",
        "trap_breakdown": {
          "A": "'Mitigate' means to lessen the severity of a negative condition, not to increase beneficial nutrients.",
          "C": "'Obscure' means to conceal or make unclear.",
          "D": "'Fabricate' means to invent falsely."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 202,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Words in Context — Diplomatic History",
        "difficulty": "Module 2 Hard",
        "stem": "The biographer refused to depict the diplomat as a one-dimensional hero, recognizing that historical legacy is rarely unblemished; instead, she provided a nuanced account that did not shy away from the diplomat’s ______ tendencies during bilateral treaty negotiations.",
        "prompt": "Which choice completes the text with the most logical and precise word?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "duplicitous"
          },
          {
            "letter": "B",
            "text": "magnanimous"
          },
          {
            "letter": "C",
            "text": "exemplary"
          },
          {
            "letter": "D",
            "text": "fortuitous"
          }
        ],
        "correct": "A",
        "explanation": "Because the biographer refused to portray a 'one-dimensional hero' and noted that legacy is 'rarely unblemished,' the blank requires a critical or flawed quality. 'Duplicitous' means deceitful or double-dealing.",
        "hack": "Polarity Filter: 'Rarely unblemished' + 'did not shy away from' requires a negative character trait. A is the only negative adjective among the choices.",
        "trap_breakdown": {
          "B": "'Magnanimous' means generous and forgiving (positive).",
          "C": "'Exemplary' means serving as a model (positive).",
          "D": "'Fortuitous' means happening by chance."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      }
    ]
  },
  "rw_sprint_2": {
    "id": "rw_sprint_2",
    "title": "Reading & Writing Sprint II: Hard Module 2 Logic, Science & Literature",
    "badge": "750–800 RW GAUNTLET · 15 QS",
    "phase": "Phase 3: Hard Module 2 Pressure Testing",
    "category": "Subject Sprints",
    "difficulty": "750–800 Challenge",
    "description": "15-question upper-module verbal challenge covering dense scientific hypotheses, quantitative tables, cross-text debates, and nineteenth-century poetry.",
    "timeLimit": 1200,
    "questions": [
      {
        "id": 101,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Words in Context",
        "difficulty": "Module 1 Core",
        "stem": "Ecologists studying the regeneration of temperate pine forests noted that controlled burns did not deplete topsoil nutrients as previously feared; rather, post-fire soil analyses demonstrated that the ash deposit served to ______ the presence of bioavailable potassium and phosphorus, accelerating seedling growth.",
        "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "mitigate"
          },
          {
            "letter": "B",
            "text": "augment"
          },
          {
            "letter": "C",
            "text": "obscure"
          },
          {
            "letter": "D",
            "text": "fabricate"
          }
        ],
        "correct": "B",
        "explanation": "The semicolon and pivot word 'rather' set up a direct contrast with 'deplete' (reduce/exhaust). Because the ash deposit accelerated seedling growth instead of depleting nutrients, the missing verb must mean 'increase' or 'add to.' 'Augment' means to make greater by adding to it.",
        "hack": "Pivot Equation: 'not deplete; rather, [blank]' -> Blank = opposite of deplete = increase (augment).",
        "trap_breakdown": {
          "A": "'Mitigate' means to make less severe or painful. It collocates with negative nouns (mitigate damage/risk), not with increasing nutrient presence.",
          "C": "'Obscure' means to hide or make unclear, which contradicts the empirical post-fire soil analyses.",
          "D": "'Fabricate' means to invent fraudulently or manufacture, which makes no biological sense for ash deposits."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 102,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Words in Context (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "The biographer refused to depict the envoy as a one-dimensional paragon, recognizing that statecraft under duress is rarely unblemished; instead, she constructed a nuanced portrait that did not shy away from the envoy's ______ maneuvers during clandestine treaty negotiations.",
        "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "duplicitous"
          },
          {
            "letter": "B",
            "text": "magnanimous"
          },
          {
            "letter": "C",
            "text": "exemplary"
          },
          {
            "letter": "D",
            "text": "innocuous"
          }
        ],
        "correct": "A",
        "explanation": "The passage contrasts 'one-dimensional paragon' (model of perfection) and 'unblemished' with a 'nuanced portrait that did not shy away from' morally gray or flawed actions during secret ('clandestine') negotiations. 'Duplicitous' means deceitful or double-dealing, fitting the contrast.",
        "hack": "Charge Matching: 'not a paragon' + 'rarely unblemished' + 'did not shy away from' requires a negatively charged adjective describing morally questionable diplomacy.",
        "trap_breakdown": {
          "B": "'Magnanimous' means generous or forgiving toward a rival—a positive trait that would reinforce rather than complicate a 'paragon' image.",
          "C": "'Exemplary' is a near-synonym of 'paragon' (serving as a desirable model), violating the contrast.",
          "D": "'Innocuous' means harmless or inoffensive; a biographer would not need courage ('did not shy away from') to mention harmless actions."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 103,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Words in Context (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "While early twentieth-century historiography treated the collapse of the Late Bronze Age palace economies as an abrupt, monolithic catastrophe triggered solely by foreign raiders, recent archaeobotanical and paleoclimatic records suggest a more ______ process: decades of megadrought, internal Peasant revolts, and supply-chain fractures gradually eroded state capacity at different rates across the eastern Mediterranean.",
        "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "heterogeneous"
          },
          {
            "letter": "B",
            "text": "precipitous"
          },
          {
            "letter": "C",
            "text": "ephemeral"
          },
          {
            "letter": "D",
            "text": "perffunctory"
          }
        ],
        "correct": "A",
        "explanation": "The colon explains the blank: rather than a single ('monolithic') abrupt event caused 'solely by foreign raiders,' the collapse involved multiple distinct factors (megadrought, revolts, supply-chain fractures) unfolding 'at different rates.' 'Heterogeneous' means diverse in character or composed of varied parts, directly opposing 'monolithic.'",
        "hack": "Colon Definition Rule: The clause after a colon defines the blank. 'Multiple causes at different rates' vs. 'monolithic' = heterogeneous.",
        "trap_breakdown": {
          "B": "'Precipitous' means sudden and steep—which repeats 'abrupt' rather than contrasting with it.",
          "C": "'Ephemeral' means lasting for a very short time, contradicting 'decades of megadrought... gradually eroded.'",
          "D": "'Perfunctory' means carried out with minimum effort or reflection, which describes human behavior rather than a historical process."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 104,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Words in Context (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "In her critique of minimalist architecture, theorist Sanford Kwinter argues that stripping a civic building of all regional ornament does not achieve universal legibility; instead, such austerity can render the structure ______ to the local public, who find no familiar cultural signposts by which to interpret its purpose.",
        "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "opaque"
          },
          {
            "letter": "B",
            "text": "deferential"
          },
          {
            "letter": "C",
            "text": "ubiquitous"
          },
          {
            "letter": "D",
            "text": "ostentatious"
          }
        ],
        "correct": "A",
        "explanation": "The passage contrasts 'universal legibility' (being easy to read/understand) with a state in which the public has 'no familiar cultural signposts by which to interpret its purpose.' 'Opaque' means impenetrable to understanding or hard to decipher—the exact opposite of 'legible.'",
        "hack": "Antonym Parallelism: 'does not achieve legibility; instead, renders it [blank]' -> Blank = illegible / impenetrable = opaque.",
        "trap_breakdown": {
          "B": "'Deferential' means showing respectful submission, which does not contrast with 'legibility.'",
          "C": "'Ubiquitous' means present everywhere, whereas the passage discusses whether people can interpret a building's purpose.",
          "D": "'Ostentatious' means showy or extravagantly ornate—the exact opposite of 'stripping a building of all ornament' and 'austerity.'"
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 105,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Text Structure & Purpose",
        "difficulty": "Module 2 Hard",
        "stem": "The following text is adapted from a 2023 study on mycorrhizal fungal networks in boreal forests.\n\nFor decades, the 'wood-wide web' hypothesis—the claim that forest trees altruistically shuttle carbon and defense signals to distressed neighbors through shared fungal hyphae—captured both popular imagination and introductory biology textbooks. Yet when mycologist Justine Karst and colleagues audited the primary field studies cited in support of the hypothesis, they found that over 60% of the experiments lacked trenching controls to exclude root-graft transmission, while positive-result bias had inflated effect sizes in peer-reviewed summaries.",
        "prompt": "Which choice best describes the function of the second sentence in the overall structure of the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "It explains why introductory biology textbooks were slower than popular media to adopt the wood-wide web hypothesis."
          },
          {
            "letter": "B",
            "text": "It presents methodological and statistical findings that call into question the empirical foundation of a widely accepted ecological model."
          },
          {
            "letter": "C",
            "text": "It proposes a novel experimental protocol using root-graft trenching to prove that trees share carbon altruistically."
          },
          {
            "letter": "D",
            "text": "It argues that mycorrhizal fungi are parasitic rather than mutualistic in boreal forest ecosystems."
          }
        ],
        "correct": "B",
        "explanation": "Sentence 1 introduces a widely popularized model ('wood-wide web' hypothesis). Sentence 2 pivots with 'Yet' and details Karst's audit showing missing controls and publication bias in the underlying studies—thereby questioning the empirical basis of that model.",
        "hack": "Structure Formula: Sentence 1 = Popular Hypothesis; Sentence 2 ('Yet...') = Methodological Critique undermining Sentence 1.",
        "trap_breakdown": {
          "A": "The text states both popular imagination and textbooks embraced the hypothesis; it never compares their speed of adoption.",
          "C": "Karst identified the *absence* of trenching controls in past studies as a flaw, rather than proposing a way to prove altruism.",
          "D": "Questioning the evidence for tree-to-tree altruism is not a claim that fungi are parasitic."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading Pacing & Module Order Strategy",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=STjlOnEH5sY",
          "videoId": "STjlOnEH5sY"
        }
      },
      {
        "id": 106,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Cross-Text Connections",
        "difficulty": "750–800 Challenge",
        "stem": "Text 1\n paleoanthropologists have long attributed the rapid disappearance of Neanderthals roughly 40,000 years ago to direct resource competition with incoming anatomically modern humans (Homo sapiens), citing archaeological horizons in western Europe where Aurignacian toolkits abruptly replace Mousterian assemblages.\n\nText 2\nHigh-resolution radiocarbon recalibrations by Ludovic Slimak and colleagues indicate that in several Mediterranean river valleys, Mousterian settlements vanished centuries before the earliest documented arrival of Homo sapiens, coinciding instead with extreme Heinrich Stadial 4 geomagnetic and climatic oscillations. Meanwhile, genomic sequencing shows repeated interbreeding pulses between the two hominins over tens of thousands of years.",
        "prompt": "Based on the texts, how would the author of Text 2 most likely characterize the explanation in Text 1?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "As compelling for Mediterranean river valleys but inapplicable to archaeological horizons in western Europe."
          },
          {
            "letter": "B",
            "text": "As an oversimplification that overlooks both chronological mismatches in local extinctions and evidence of demographic assimilation."
          },
          {
            "letter": "C",
            "text": "As fundamentally flawed because Aurignacian toolkits were actually manufactured by Neanderthals rather than Homo sapiens."
          },
          {
            "letter": "D",
            "text": "As accurate regarding the role of climatic oscillations but mistaken about the timing of interbreeding pulses."
          }
        ],
        "correct": "B",
        "explanation": "Text 1 attributes Neanderthal disappearance solely to competition with arriving Homo sapiens. Text 2 counters with two facts: (1) some Neanderthal sites vanished *before* Homo sapiens arrived (chronological mismatch during climate shifts), and (2) genomic data shows repeated interbreeding (assimilation).",
        "hack": "Cross-Text Checklist: When Text 2 has two sentences ('Meanwhile...'), the correct answer often synthesizes BOTH counter-points.",
        "trap_breakdown": {
          "A": "Reverses Text 2: Text 2 shows the competition model fails in Mediterranean valleys because Neanderthals vanished before H. sapiens arrived there.",
          "C": "Unsupported fabrication: neither text claims Neanderthals made Aurignacian tools.",
          "D": "Text 1 never mentioned climatic oscillations or interbreeding."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 107,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Central Ideas & Details",
        "difficulty": "Module 2 Hard",
        "stem": "Many neuroscientists long adhered to the doctrine that neurogenesis—the formation of new functional neurons—ceased completely in the mammalian brain shortly after birth. However, retrospective birth-dating studies measuring carbon-14 isotopes incorporated into neuronal DNA during atmospheric nuclear testing between 1945 and 1963 have detected a steady annual turnover rate of roughly 1.75% in the human hippocampal dentate gyrus well into late adulthood.",
        "prompt": "Which choice best states the main idea of the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "Atmospheric nuclear testing between 1945 and 1963 permanently altered the rate of DNA replication in the human hippocampus."
          },
          {
            "letter": "B",
            "text": "Isotopic dating of neuronal DNA provides empirical evidence challenging the longstanding view that adult human brains cannot generate new neurons."
          },
          {
            "letter": "C",
            "text": "The hippocampal dentate gyrus is the only region of the mammalian brain capable of repairing itself after radiation exposure."
          },
          {
            "letter": "D",
            "text": "Neuroscientists have abandoned carbon-14 birth-dating because its 1.75% margin of error is too large to measure adult neurogenesis."
          }
        ],
        "correct": "B",
        "explanation": "The passage follows the classic 'Old Doctrine + Pivot (However) + New Empirical Discovery' structure. Carbon-14 dating of DNA showed a 1.75% annual neuron turnover in adult humans, refuting the belief that neurogenesis ends after birth.",
        "hack": "Old Consensus ('long adhered') + 'However' = The Main Idea is ALWAYS the post-pivot discovery.",
        "trap_breakdown": {
          "A": "Confuses the measurement tool (carbon-14 tracer from 1945–1963 testing) with a biological cause.",
          "C": "Introduces 'repairing itself after radiation exposure,' which is never mentioned.",
          "D": "Misreads '1.75% annual turnover rate' as a 'margin of error.'"
        },
        "videoTutorial": {
          "title": "Digital SAT Reading Pacing & Module Order Strategy",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=STjlOnEH5sY",
          "videoId": "STjlOnEH5sY"
        }
      },
      {
        "id": 108,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Command of Evidence (Quantitative)",
        "difficulty": "Module 2 Hard",
        "stem": " Pollinator Foraging Metrics Across Three Landscape Types\n• Continuous Tallgrass Prairie: Mean Flight Duration = 14.2 min | Mean Nectar Yield = 31.8 mg | Floral Species Visited = 6.4\n• Suburban Hedgerow Corridor: Mean Flight Duration = 19.5 min | Mean Nectar Yield = 26.1 mg | Floral Species Visited = 4.8\n• Fragmented Urban Patch: Mean Flight Duration = 38.4 min | Mean Nectar Yield = 14.2 mg | Floral Species Visited = 2.1\n\nA conservation biologist hypothesizes that habitat fragmentation forces native bumblebees (Bombus impatiens) to expend substantially more flight time per foraging bout while yielding less than half the caloric nectar reward obtained in intact grassland ecosystems.",
        "prompt": "Which choice most effectively uses data from the table to support the biologist's hypothesis?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "Bumblebees in Suburban Hedgerow Corridors visited an average of 4.8 floral species per bout, whereas those in Fragmented Urban Patches visited 2.1 species."
          },
          {
            "letter": "B",
            "text": "Bumblebees in Fragmented Urban Patches averaged 38.4 minutes per flight but collected only 14.2 mg of nectar, compared with 14.2 minutes and 31.8 mg in Continuous Tallgrass Prairie."
          },
          {
            "letter": "C",
            "text": "Mean nectar yield in Continuous Tallgrass Prairie (31.8 mg) was higher than in Suburban Hedgerow Corridors (26.1 mg), despite both habitats supporting more than 4 floral species."
          },
          {
            "letter": "D",
            "text": "In Fragmented Urban Patches, the numerical value of mean flight duration (38.4) exceeded the numerical value of mean nectar yield in Continuous Tallgrass Prairie (31.8)."
          }
        ],
        "correct": "B",
        "explanation": "The hypothesis makes two linked quantitative claims comparing fragmented habitats to intact grasslands: (1) substantially more flight time, and (2) less than half the nectar reward. Choice B cites both variables for Fragmented Urban Patch vs. Continuous Tallgrass Prairie (38.4 min vs. 14.2 min; and 14.2 mg is less than half of 31.8 mg, since 31.8 / 2 = 15.9).",
        "hack": "Two-Part Claim Rule: If the hypothesis has Cause A (flight time) and Effect B (< 50% nectar yield), the correct choice MUST cite numbers for BOTH A and B.",
        "trap_breakdown": {
          "A": "True data from the table, but cites 'Floral Species Visited' instead of flight duration and nectar yield.",
          "C": "Compares Suburban Hedgerow to Prairie, where 26.1 mg is NOT 'less than half' of 31.8 mg.",
          "D": "Compares apples to oranges (comparing minutes in one habitat to milligrams in another)."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 109,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Inferences (750+ Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "In sovereign debt restructurings, 'collective action clauses' (CACs) allow a supermajority of bondholders—typically 75% by principal value—to bind holdout creditors to revised payment terms. Prior to 2014, however, most sovereign bonds used series-by-series CACs, meaning a distressed nation had to secure a 75% vote within each individual bond issuance; a hedge fund acquiring just 26% of a single small series could block restructuring of that series and litigate for full face value. Consequently, the International Monetary Fund endorsed 'single-limb aggregated' CACs, which pool votes across all outstanding bond series simultaneously, implying that under post-2014 single-limb contracts, ______",
        "prompt": "Which choice most logically completes the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "sovereign borrowers no longer need to obtain the consent of at least 75% of total bondholders to modify payment schedules."
          },
          {
            "letter": "B",
            "text": "accumulating a 26% stake in one isolated bond series is insufficient for a creditor to veto a restructuring if the aggregate supermajority threshold is met across all series."
          },
          {
            "letter": "C",
            "text": "holdout creditors are legally prohibited from purchasing more than 25% of any single sovereign bond issuance on the secondary market."
          },
          {
            "letter": "D",
            "text": "series-by-series voting remains necessary whenever a sovereign borrower seeks to restructure domestic-currency debt rather than foreign-currency debt."
          }
        ],
        "correct": "B",
        "explanation": "Under pre-2014 series-by-series CACs, buying 26% of one small series blocked that series because 75% was required in *each* series. Because post-2014 'single-limb aggregated' CACs pool votes across *all* series simultaneously, holding 26% of a single small series can no longer block the restructuring if the pooled vote across all series reaches the supermajority.",
        "hack": "Logical Completion Rule: Trace the exact mechanism that changed (per-series 75% vote -> pooled all-series vote) and negate the specific loophole (26% in one series blocking the deal).",
        "trap_breakdown": {
          "A": "False: the supermajority threshold across pooled bondholders still applies.",
          "C": "Confuses voting power during restructuring with a ban on purchasing bonds.",
          "D": "Introduces 'domestic-currency vs. foreign-currency debt,' which is never mentioned in the text."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading Pacing & Module Order Strategy",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=STjlOnEH5sY",
          "videoId": "STjlOnEH5sY"
        }
      },
      {
        "id": 110,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Inferences (750+ Scientific Logic)",
        "difficulty": "750–800 Challenge",
        "stem": "Marine biologists investigating coral bleaching in the Coral Sea compared colonies of Acropora millepora from two adjacent reef zones: a deep fore-reef where water temperatures remain stable year-round (26°C–27.5°C) and a shallow back-reef lagoon subject to daily tidal temperature swings of up to 6°C. When both groups were exposed in laboratory tanks to a sustained +2.5°C thermal anomaly for 14 days, fore-reef colonies expelled 82% of their symbiotic zooxanthellae, whereas back-reef colonies retained over 85% of their symbionts and exhibited rapid upregulation of heat-shock protein genes within four hours. These findings suggest that ______",
        "prompt": "Which choice most logically completes the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "symbiotic zooxanthellae in deep fore-reef zones belong to a different taxonomic genus than those inhabiting shallow back-reef lagoons."
          },
          {
            "letter": "B",
            "text": "prior acclimatization to high-frequency thermal variability can confer physiological resilience against acute ocean warming events."
          },
          {
            "letter": "C",
            "text": "shallow back-reef lagoons will be completely immune to coral bleaching if average global ocean temperatures rise by more than 6°C."
          },
          {
            "letter": "D",
            "text": "heat-shock protein genes are absent from the genome of Acropora millepora colonies that develop in stable thermal environments."
          }
        ],
        "correct": "B",
        "explanation": "The only difference between the two groups of the same species (A. millepora) was their native thermal environment: daily 6°C swings (back-reef) vs. stable temperatures (fore-reef). Under +2.5°C stress, the back-reef corals retained >85% of symbionts and rapidly expressed heat-shock genes, supporting the inference that prior exposure to thermal variability builds resilience.",
        "hack": "Eliminate Extreme & Unsupported Claims: Cross out 'completely immune' (C), 'absent from the genome' (D), and 'different genus' (A). Pick the conservative causal link (B).",
        "trap_breakdown": {
          "A": "The passage never mentions zooxanthellae taxonomic genera; it highlights transcriptional upregulation in the coral.",
          "C": "Extreme language trap ('completely immune... more than 6°C')—the experiment tested +2.5°C for 14 days, and 15% of symbionts were still lost.",
          "D": "Having lower/slower upregulation does not mean the genes are absent from the species' genome."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 132,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Words in Context — Nuanced Academic Register",
        "difficulty": "750–800 Challenge",
        "stem": "Whereas early twentieth-century historiography often treated the decline of the Silk Road overland trade networks as an abrupt collapse precipitated by the fall of the Mongol Empire, contemporary economic historians argue that the transition to maritime routes was far more ______: caravan cities such as Samarkand and Bukhara continued to broker high-volume regional commerce well into the seventeenth century.",
        "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "cataclysmic"
          },
          {
            "letter": "B",
            "text": "protracted"
          },
          {
            "letter": "C",
            "text": "ephemeral"
          },
          {
            "letter": "D",
            "text": "clandestine"
          }
        ],
        "correct": "B",
        "explanation": "The sentence contrasts the old view of an 'abrupt collapse' ('Whereas...') with contemporary evidence that overland cities 'continued to broker high-volume regional commerce well into the seventeenth century.' A process that unfolds slowly over centuries rather than abruptly is 'protracted' (extended or prolonged in time).",
        "hack": "Antonym Pivot + Colon Proof: 'Whereas [old view = abrupt collapse]' + colon showing trade lasted for centuries -> the blank must mean 'gradual / prolonged' = protracted.",
        "trap_breakdown": {
          "A": "'Cataclysmic' means violent and sudden—synonymous with 'abrupt collapse' rather than contrasting with it.",
          "C": "'Ephemeral' means short-lived, which contradicts trade continuing for centuries.",
          "D": "'Clandestine' means secretive or illicit, which is unsupported by the text."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 133,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Words in Context — Philosophical & Literary Analysis",
        "difficulty": "750–800 Challenge",
        "stem": "In her critique of utilitarian moral philosophy, philosopher Bernard Williams's intellectual successor argued that reducing complex ethical dilemmas to a single quantitative calculus of aggregate utility is inherently ______: doing so strips away the personal commitments, integrity, and relational obligations that make moral agency meaningful in the first place.",
        "prompt": "Which choice completes the text with the most logical and precise word?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "reductive"
          },
          {
            "letter": "B",
            "text": "equitable"
          },
          {
            "letter": "C",
            "text": "prescient"
          },
          {
            "letter": "D",
            "text": "deferential"
          }
        ],
        "correct": "A",
        "explanation": "The colon explains the blank: 'reducing complex ethical dilemmas to a single quantitative calculus... strips away the personal commitments, integrity, and relational obligations.' Oversimplifying a complex phenomenon by stripping away essential dimensions is the exact definition of 'reductive.'",
        "hack": "Colon Echo Rule: The clause before the blank literally says 'reducing complex ethical dilemmas to a single calculus... strips away...' -> 'reductive' (oversimplifying complex phenomena).",
        "trap_breakdown": {
          "B": "'Equitable' means fair and impartial (positive connotation, contradicting the critique).",
          "C": "'Prescient' means having foresight of future events.",
          "D": "'Deferential' means showing humble respect."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 134,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Function of Underlined Sentence — Concession & Counterargument",
        "difficulty": "Module 2 Hard",
        "stem": "Paleoclimatologists reconstructing Pleistocene megafaunal extinctions in Sahul (prehistoric Australia and New Guinea) have long debated the relative roles of climate aridification versus human arrival. [It is undeniable that progressive continental drying between 60,000 and 40,000 years ago contracted freshwater refugia across the Australian interior.] Yet sediment cores from Lynch's Crater in Queensland demonstrate that megafaunal dung fungi—a direct proxy for herbivore biomass—remained abundant through multiple prior glacial-interglacial droughts of equal severity, plummeting to zero only within centuries of archaeological evidence for human colonization.",
        "prompt": "Which choice best describes the function of the bracketed sentence in the overall structure of the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "It introduces the primary hypothesis that the author subsequently validates using palynological evidence from Lynch's Crater."
          },
          {
            "letter": "B",
            "text": "It concedes the validity of an environmental observation before the text presents empirical evidence showing that this factor alone cannot explain the extinction event."
          },
          {
            "letter": "C",
            "text": "It refutes the claim that human colonization coincided temporally with the disappearance of megafaunal dung fungi."
          },
          {
            "letter": "D",
            "text": "It explains the chemical methodology used by paleoclimatologists to date Pleistocene sediment cores."
          }
        ],
        "correct": "B",
        "explanation": "The bracketed sentence begins with 'It is undeniable that...' (a classic concession acknowledging that continental drying did occur), which is immediately followed by 'Yet sediment cores... demonstrate' (the counterargument proving that prior droughts of equal severity did not cause extinction, pointing instead to human arrival).",
        "hack": "Structural Formula: 'It is undeniable that [X]. Yet [Y]' = Concession of a partial truth followed by a pivot to the decisive counter-evidence.",
        "trap_breakdown": {
          "A": "Reverses the author's conclusion: the Lynch's Crater evidence refutes climate-only extinction rather than validating it.",
          "C": "The final sentence supports—rather than refutes—the coincidence of human arrival and fungal collapse.",
          "D": "The bracketed sentence describes continental drying, not laboratory dating methodology."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading Pacing & Module Order Strategy",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=STjlOnEH5sY",
          "videoId": "STjlOnEH5sY"
        }
      },
      {
        "id": 135,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Poetic & Literary Structure (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "The following text is adapted from Emily Dickinson’s circa 1862 poem 'There’s a certain Slant of light.'\n\nThere’s a certain Slant of light,\nWinter Afternoons –\nThat oppresses, like the Heft\nOf Cathedral Tunes –\n\nHeavenly Hurt, it gives us –\nWe can find no scar,\nBut internal difference –\nWhere the Meanings, are –\n\nNone may teach it – Any –\n’Tis the Seal Despair –\nAn imperial affliction\nSent us of the Air –\n\nWhen it comes, the Landscape listens –\nShadows – hold their breath –\nWhen it goes, ’tis like the Distance\nOn the look of Death –",
        "prompt": "Which choice best describes the overall structure of the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "It contrasts the comforting warmth of winter sunlight with the austere solemnity of religious architecture, concluding with a celebration of seasonal renewal."
          },
          {
            "letter": "B",
            "text": "It introduces a specific sensory phenomenon, characterizes its intangible yet profound psychological weight, and concludes by depicting nature’s hushed reaction to its arrival and departure."
          },
          {
            "letter": "C",
            "text": "It recounts a specific historical memory from the speaker's youth, analyzes why that memory faded over time, and laments the inevitability of mortality."
          },
          {
            "letter": "D",
            "text": "It presents a philosophical question about human suffering in the first stanza and systematically refutes traditional answers in the remaining stanzas."
          }
        ],
        "correct": "B",
        "explanation": "Stanza 1 introduces the sensory phenomenon ('a certain Slant of light, / Winter Afternoons'). Stanzas 2 and 3 characterize its invisible, inward psychological burden ('We can find no scar, / But internal difference... An imperial affliction'). Stanza 4 depicts the natural world's hushed response to its arrival and departure ('When it comes, the Landscape listens... When it goes, ’tis like the Distance / On the look of Death').",
        "hack": "Stanza-by-Stanza Map: Stanza 1 (Winter light) -> Stanzas 2-3 (Inward psychological hurt/affliction) -> Stanza 4 ('When it comes... When it goes'). Match each stanza to the choice.",
        "trap_breakdown": {
          "A": "Misreads 'oppresses, like the Heft / Of Cathedral Tunes' as 'comforting warmth' and invents 'seasonal renewal.'",
          "C": "No childhood memory is recounted.",
          "D": "No question is posed or refuted."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 138,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Inferences — Economic & Game Theory Logic (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "In classical auctions where bidders submit sealed bids and the highest bidder pays their own bid (first-price sealed-bid auctions), rational participants systematically 'shade' their bids below their true private valuation of the item to secure a positive surplus if they win. By contrast, economist William Vickrey demonstrated mathematically that in a second-price sealed-bid auction—where the highest bidder wins the item but pays the price offered by the second-highest bidder—the amount a winning bidder pays is independent of their own bid. Consequently, in a second-price sealed-bid auction, ______",
        "prompt": "Which choice most logically completes the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "the seller is guaranteed to receive higher total revenue than in any first-price sealed-bid auction."
          },
          {
            "letter": "B",
            "text": "bidders no longer have a strategic incentive to shade their bids below their true private valuation of the item."
          },
          {
            "letter": "C",
            "text": "participants will deliberately bid above their true private valuation in order to inflate the price paid by rivals."
          },
          {
            "letter": "D",
            "text": "the second-highest bidder will frequently acquire the item at a price below the highest bidder's valuation."
          }
        ],
        "correct": "B",
        "explanation": "In a first-price auction, bidders shade their bids below true valuation because their own bid determines the price they pay if they win. In a second-price (Vickrey) auction, 'the amount a winning bidder pays is independent of their own bid.' Therefore, shading one's bid no longer reduces the price paid upon winning—it only risks losing an item one could have profitably won, eliminating the strategic incentive to shade below true valuation.",
        "hack": "Causal Removal Logic: Premise 1: Cause C (paying your own bid) creates Behavior B (bid shading). Premise 2: System 2 removes Cause C. Conclusion: Behavior B is no longer incentivized.",
        "trap_breakdown": {
          "A": "Out-of-scope comparison of seller revenue (known as revenue equivalence, not stated in text).",
          "C": "Bidding above true valuation risks winning and paying a second-highest bid that exceeds one's own valuation.",
          "D": "Contradicts the rule that 'the highest bidder wins the item.'"
        },
        "videoTutorial": {
          "title": "Digital SAT Reading Pacing & Module Order Strategy",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=STjlOnEH5sY",
          "videoId": "STjlOnEH5sY"
        }
      }
    ]
  },
  "drill_algebra": {
    "id": "drill_algebra",
    "title": "Algebra, Linear Systems & Unknown Constants (k, c)",
    "badge": "DOMAIN DRILL · 10 QS",
    "phase": "Phase 2: Section Speed & Desmos Fluency",
    "category": "Topic Drills",
    "difficulty": "Focused Mastery",
    "description": "Master infinite/no-solution systems, perpendicular slope parameters, identity constants, and feasible inequality regions.",
    "timeLimit": 900,
    "questions": [
      {
        "id": 119,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Linear Systems — Infinitely Many Solutions",
        "difficulty": "Module 1 Core",
        "stem": "3x - 5y = 14\nkx - 15y = 42\n\nIn the given system of equations, k is a constant. If the system has infinitely many solutions, what is the value of k?",
        "prompt": "Select the correct value of k:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "3"
          },
          {
            "letter": "B",
            "text": "6"
          },
          {
            "letter": "C",
            "text": "9"
          },
          {
            "letter": "D",
            "text": "15"
          }
        ],
        "correct": "C",
        "desmosEquation": [
          "3x - 5y = 14",
          "kx - 15y = 42"
        ],
        "explanation": "For a linear system to have infinitely many solutions, the two equations must be exact scalar multiples of each other (identical lines). Comparing the y-coefficients and constants: (-15) / (-5) = 3 and 42 / 14 = 3. Multiplying the first equation by 3 gives 9x - 15y = 42, so k = 9.",
        "hack": "Desmos Protocol:\n1. Click 'Open & Solve in Desmos' (loads 3x - 5y = 14, kx - 15y = 42, and slider k).\n2. Drag slider k until the two lines lie directly on top of each other: k = 9.",
        "trap_breakdown": {
          "A": "Unchanged coefficient from the first equation (3x), forgetting to multiply by the scaling factor 3.",
          "B": "Added 3 + 3 instead of multiplying 3 * 3.",
          "D": "Copied the absolute value of the y-coefficient (15)."
        },
        "videoTutorial": {
          "title": "How to Solve Unknown Constant Questions with Desmos",
          "channel": "MVP Learners",
          "url": "https://www.youtube.com/watch?v=LNLbRHAXX4k",
          "videoId": "LNLbRHAXX4k"
        }
      },
      {
        "id": 120,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Linear Systems — No Solution Fractional Constants (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "(3/4)x - (5/6)y = 11\nkx - (15/8)y = 20\n\nIn the given system of equations, k is a constant. If the system has no solution, what is the value of k?",
        "prompt": "Enter the value of k (as a fraction or decimal):",
        "type": "gridin",
        "correct": "27/16",
        "desmosEquation": [
          "(3/4)x - (5/6)y = 11",
          "kx - (15/8)y = 20"
        ],
        "explanation": "A linear system has no solution when the lines are parallel (identical x-to-y coefficient ratios, different constant ratio). Set the ratio of x-coefficients equal to the ratio of y-coefficients:\nk / (3/4) = (-15/8) / (-5/6)\nk / (3/4) = (15/8) * (6/5) = 18/8 = 9/4\nk = (3/4) * (9/4) = 27/16 (or 1.6875).",
        "hack": "Desmos Ratio Trick: Type k / (3/4) ~ (-15/8) / (-5/6) or graph both lines and adjust k until slopes match: 27/16 = 1.6875.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "How to Solve Unknown Constant Questions with Desmos",
          "channel": "MVP Learners",
          "url": "https://www.youtube.com/watch?v=LNLbRHAXX4k",
          "videoId": "LNLbRHAXX4k"
        }
      },
      {
        "id": 121,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Perpendicular Line Parameter System (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "6x + 8y = 29\nkx - 9y = 14\n\nIn the xy-plane, the graphs of the two linear equations above are perpendicular. What is the value of the constant k?",
        "prompt": "Select the value of k:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "-12"
          },
          {
            "letter": "B",
            "text": "-27/4"
          },
          {
            "letter": "C",
            "text": "27/4"
          },
          {
            "letter": "D",
            "text": "12"
          }
        ],
        "correct": "D",
        "desmosEquation": [
          "6x + 8y = 29",
          "kx - 9y = 14"
        ],
        "explanation": "Rewrite Line 1 in slope-intercept form: 8y = -6x + 29 -> y = (-3/4)x + 29/8, so slope m₁ = -3/4. A perpendicular line has negative reciprocal slope m₂ = +4/3. From Line 2: 9y = kx - 14 -> y = (k/9)x - 14/9, so m₂ = k/9. Setting k/9 = 4/3 gives k = 36/3 = 12.",
        "hack": "Standard Form Dot-Product Shortcut: Two lines A₁x + B₁y = C₁ and A₂x + B₂y = C₂ are perpendicular if and only if A₁A₂ + B₁B₂ = 0. Here: 6(k) + 8(-9) = 0 -> 6k = 72 -> k = 12 in 5 seconds!",
        "trap_breakdown": {
          "A": "Sign error: forgot that the second equation has -9y, so its slope is +k/9, not -k/9.",
          "B": "Set slopes equal (parallel) instead of negative reciprocals: k/9 = -3/4 -> k = -27/4.",
          "C": "Used parallel ratio without sign (-3/4 * -9 = 27/4)."
        },
        "videoTutorial": {
          "title": "700s Club: The Hardest Digital SAT Math Problems",
          "channel": "Strategic Test Prep",
          "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
          "videoId": "lrIRF-bFjkw"
        }
      },
      {
        "id": 122,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Systems of Linear Inequalities",
        "difficulty": "Module 2 Hard",
        "stem": "A biomedical lab processes two types of assay trays: Standard trays (x) and High-Sensitivity trays (y). Each batch must satisfy two constraints:\n• Reagent constraint: 4x + 2y <= 60\n• Incubator time constraint: 6x + 2y <= 72\n\nIf the lab processes at least 8 Standard trays (x >= 8), what is the maximum number of High-Sensitivity trays (y) it can process in a single batch?",
        "prompt": "Enter the maximum value of y:",
        "type": "gridin",
        "correct": "12",
        "desmosEquation": [
          "4x + 2y <= 60",
          "6x + 2y <= 72",
          "x >= 8"
        ],
        "explanation": "Since y decreases as x increases in both inequalities, y is maximized when x is as small as allowed (x = 8).\n• From inequality 1: 4(8) + 2y <= 60 -> 32 + 2y <= 60 -> 2y <= 28 -> y <= 14.\n• From inequality 2: 6(8) + 2y <= 72 -> 48 + 2y <= 72 -> 2y <= 24 -> y <= 12.\nBecause BOTH constraints must hold simultaneously, y cannot exceed 12.",
        "hack": "Desmos Feasible Region: Graph 4x + 2y <= 60, 6x + 2y <= 72, and x >= 8. Click the highest corner of the triple-shaded overlap region: (8, 12). Maximum y = 12.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 144,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Linear Function Parameter & Intercept Ratio (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "f(x) = (3/5)x + b\n\nIn the linear function f above, b is a positive constant. If the x-intercept of the graph of y = f(x) in the xy-plane is (c, 0) and the y-intercept is (0, d), what is the value of c / d?",
        "prompt": "Enter the value of c / d (as a fraction or decimal):",
        "type": "gridin",
        "correct": "-5/3",
        "desmosEquation": [
          "y = (3/5)x + 3"
        ],
        "explanation": "The y-intercept occurs at x = 0: d = f(0) = b.\nThe x-intercept occurs when f(c) = 0: (3/5)c + b = 0 -> c = -(5/3)b.\nTherefore, the ratio c / d = [-(5/3)b] / b = -5/3 (Notice that b cancels out completely!).",
        "hack": "Desmos Arbitrary Constant Trick: Whenever a constant b cancels out, pick b = 3 in Desmos! Graph y = (3/5)x + 3. Click the x-intercept (-5, 0) and y-intercept (0, 3). Then c / d = -5 / 3!",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Parameterization & Constants",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=3rF4TTAVom4",
          "videoId": "3rF4TTAVom4"
        }
      },
      {
        "id": 145,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Linear Table Regression & Extrapolation",
        "difficulty": "Module 1 Core",
        "stem": "x | f(x)\n4 | 19\n10 | 46\n16 | 73\n\nThe table above shows three values of x and their corresponding values of f(x) for the linear function f. What is the value of f(28)?",
        "prompt": "Enter the value of f(28):",
        "type": "gridin",
        "correct": "127",
        "desmosEquation": [
          "y_1 ~ m*x_1 + b"
        ],
        "explanation": "Find the slope m: (46 - 19) / (10 - 4) = 27 / 6 = 4.5.\nNotice x jumps by +6 each row (from 4 to 10 to 16), and f(x) jumps by +27 each row. From x = 16 to x = 28 is a jump of +12 (two steps of +6), so f(28) = 73 + 2(27) = 127.",
        "hack": "Desmos Table Regression: Click '+' -> Table, enter (4, 19) and (10, 46), then type f(x) = mx + b or y₁ ~ mx₁ + b. Evaluate at x = 28 -> 127.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "7 Hard SAT Math Questions Solved with Desmos Regression",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=rSB5oMHfiZc",
          "videoId": "rSB5oMHfiZc"
        }
      },
      {
        "id": 146,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Identity Equations with Two Constants (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "a(3x - 4) + b(2x + 5) = 18x - 1\n\nIn the given equation, a and b are constants. If the equation is true for all values of x, what is the value of a + b?",
        "prompt": "Select the value of a + b:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "5"
          },
          {
            "letter": "B",
            "text": "6"
          },
          {
            "letter": "C",
            "text": "7"
          },
          {
            "letter": "D",
            "text": "8"
          }
        ],
        "correct": "C",
        "desmosEquation": [
          "-4x + 5y = -1",
          "3x + 2y = 18"
        ],
        "explanation": "For the equation to hold for all values of x, the x-coefficients and constant terms on both sides must match identically:\n• x-coefficient: 3a + 2b = 18\n• Constant term: -4a + 5b = -1\nSolving the system gives a = 4 and b = 3 (check: 3(4)+2(3)=18 and -4(4)+5(3)=-1). Therefore, a + b = 4 + 3 = 7.",
        "hack": "Desmos Two-Point Plug-In: Since an identity holds for ALL x, plug in x = 0 and x = 1 using (x, y) for (a, b) in Desmos:\nLine 1 (at t=0): -4x + 5y = -1\nLine 2 (at t=1): -x + 7y = 17\nClick intersection: (4, 3) -> a + b = 4 + 3 = 7!",
        "trap_breakdown": {
          "A": "Found a = 4 and subtracted 3 instead of adding.",
          "B": "Arithmetic slip when solving the 2x2 system.",
          "D": "Doubled a = 4."
        },
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Parameterization & Constants",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=3rF4TTAVom4",
          "videoId": "3rF4TTAVom4"
        }
      },
      {
        "id": 147,
        "section": "Math",
        "domain": "Algebra",
        "skill": "Absolute Value Equation with Zero or Two Solutions (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "4|3x - k| - 12 = 20\n\nIn the given equation, k is a constant. If the sum of the two solutions to the equation is 10, what is the value of k?",
        "prompt": "Enter the value of k:",
        "type": "gridin",
        "correct": "15",
        "desmosEquation": [
          "4|3x - k| - 12 = 20"
        ],
        "explanation": "Isolate the absolute value: 4|3x - k| = 32 -> |3x - k| = 8.\nThe two solutions are symmetric around the vertex of the V-graph, which occurs where 3x - k = 0 -> x = k/3. Therefore, the average of the two solutions is k/3, and the sum of the two solutions is 2(k/3).\nSetting 2k/3 = 10 gives 2k = 30 -> k = 15.\n(Check: |3x - 15| = 8 -> 3x = 23 or 3x = 7 -> x₁ + x₂ = 23/3 + 7/3 = 30/3 = 10.)",
        "hack": "Symmetry of |ax - k| = c: The two solutions ALWAYS average to the vertex x = k/a, so their sum is ALWAYS 2k/a (independent of c, as long as c > 0)! Here 2k/3 = 10 -> k = 15 in 4 seconds.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "25 Hard SAT Math Module 2 Questions + Desmos Regression",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=661RKRiKDdw",
          "videoId": "661RKRiKDdw"
        }
      },
      {
        "id": 207,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Nonlinear System Intersections",
        "difficulty": "Module 1 Core",
        "stem": "y = x^2 - 4x + 3\ny = 2x - 2\n\nThe solutions to the system of equations above are (x₁, y₁) and (x₂, y₂), where x₂ > x₁. What is the value of x₂ - y₁?",
        "prompt": "Select the value of x₂ - y₁:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "1"
          },
          {
            "letter": "B",
            "text": "3"
          },
          {
            "letter": "C",
            "text": "5"
          },
          {
            "letter": "D",
            "text": "7"
          }
        ],
        "correct": "C",
        "desmosEquation": [
          "y = x^2 - 4x + 3",
          "y = 2x - 2"
        ],
        "explanation": "Set x^2 - 4x + 3 = 2x - 2 -> x^2 - 6x + 5 = 0 -> (x - 1)(x - 5) = 0. Since x₂ > x₁, the two intersection points are (x₁, y₁) = (1, 0) and (x₂, y₂) = (5, 8). Therefore, x₂ - y₁ = 5 - 0 = 5.",
        "hack": "Desmos Intersection Click: Graph both equations and click the two intersection dots: (1, 0) and (5, 8). Then x₂ - y₁ = 5 - 0 = 5.",
        "trap_breakdown": {
          "A": "1 is x₁.",
          "B": "Subtracted 8 - 5 = 3.",
          "D": "Subtracted y₂ - x₁ = 8 - 1 = 7."
        },
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Lesson #1: Solve Any Equation",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=TFmt1VwZte8",
          "videoId": "TFmt1VwZte8"
        }
      },
      {
        "id": 131,
        "section": "Math",
        "domain": "Problem Solving & Data Analysis",
        "skill": "Weighted Mean & Mixture Algebra (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "A research vessel collected water samples from two ocean layers. The 14 samples from the epipelagic zone had a mean dissolved oxygen concentration of 6.8 mg/L, and the n samples from the mesopelagic zone had a mean dissolved oxygen concentration of 2.3 mg/L. If the combined mean dissolved oxygen concentration of all 14 + n samples was 4.1 mg/L, what is the value of n?",
        "prompt": "Enter the value of n:",
        "type": "gridin",
        "correct": "21",
        "explanation": "Total dissolved oxygen = 14(6.8) + 2.3n = 4.1(14 + n).\n95.2 + 2.3n = 57.4 + 4.1n\n37.8 = 1.8n -> n = 21 samples.",
        "hack": "Seesaw / Lever Balance Shortcut: Distance from 6.8 to 4.1 is 2.7; distance from 2.3 to 4.1 is 1.8. Balance equation: 14 * 2.7 = n * 1.8 -> n = 21!",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Lesson #1: Solve Any Equation",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=TFmt1VwZte8",
          "videoId": "TFmt1VwZte8"
        },
        "desmosEquation": [
          "(14 * 6.8 + 2.3x) / (14 + x) = 4.1"
        ]
      }
    ]
  },
  "drill_advanced_math": {
    "id": "drill_advanced_math",
    "title": "Quadratics, Discriminants, Exponentials & Regressions",
    "badge": "DOMAIN DRILL · 12 QS",
    "phase": "Phase 3: Hard Module 2 Pressure Testing",
    "category": "Topic Drills",
    "difficulty": "700–800 Mastery",
    "description": "Deep practice on b² - 4ac = 0 tangency, Vieta's root sums, polynomial remainders, exponential unit conversions, and Desmos y₁ ~ ax₁² + bx₁ + c.",
    "timeLimit": 1080,
    "questions": [
      {
        "id": 123,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Quadratic Vertex & Optimization",
        "difficulty": "Module 1 Core",
        "stem": "h(t) = -16t^2 + 80t + 96\n\nA sensor package is launched vertically upward from a coastal tower. The function above models its height h, in feet, above sea level t seconds after launch. What is the maximum height, in feet, reached by the sensor package?",
        "prompt": "Select the maximum height:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "2.5"
          },
          {
            "letter": "B",
            "text": "6"
          },
          {
            "letter": "C",
            "text": "96"
          },
          {
            "letter": "D",
            "text": "196"
          }
        ],
        "correct": "D",
        "desmosEquation": [
          "y = -16x^2 + 80x + 96"
        ],
        "explanation": "The time of maximum height is the vertex x-coordinate: t = -b / (2a) = -80 / (2 * -16) = 2.5 seconds. Substituting t = 2.5 into h(t): h(2.5) = -16(6.25) + 80(2.5) + 96 = -100 + 200 + 96 = 196 feet.",
        "hack": "Desmos 3-Second Peak Click: Graph y = -16x^2 + 80x + 96 and click the vertex dot (2.5, 196). The prompt asks for 'maximum height' (y = 196), NOT time (x = 2.5)!",
        "trap_breakdown": {
          "A": "2.5 is the time t (in seconds) when the package reaches its peak, not the height.",
          "B": "6 is the positive t-intercept when the package hits the water (h(6) = 0).",
          "C": "96 is the initial launch tower height at t = 0."
        },
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 124,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Quadratic Discriminant & Tangency (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "y = 2x^2 - 11x + c\ny = 3x - 5\n\nIn the given system of equations, c is a constant. If the system has exactly one real solution (x, y), what is the value of c?",
        "prompt": "Enter the value of c:",
        "type": "gridin",
        "correct": "19.5",
        "desmosEquation": [
          "y = 2x^2 - 11x + c",
          "y = 3x - 5"
        ],
        "explanation": "Set the two equations equal to find their intersection: 2x^2 - 11x + c = 3x - 5 -> 2x^2 - 14x + (c + 5) = 0. For a quadratic equation ax^2 + bx + C = 0 to have exactly one real solution, its discriminant b^2 - 4aC must equal 0:\n(-14)^2 - 4(2)(c + 5) = 0\n196 - 8(c + 5) = 0\nc + 5 = 196 / 8 = 24.5\nc = 19.5 (or 39/2).",
        "hack": "Desmos Tangency Slider: Graph y = 2x^2 - 11x + c and y = 3x - 5. Slide c until the parabola is tangent to the line at a single point (3.5, 5.5): c = 19.5 (or 39/2).",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "25 Hard SAT Math Module 2 Questions + Desmos Regression",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=661RKRiKDdw",
          "videoId": "661RKRiKDdw"
        }
      },
      {
        "id": 125,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Sum of Solutions of Shifted Quadratic (750+ Trap)",
        "difficulty": "750–800 Challenge",
        "stem": "3(x - 7)^2 - 10(x - 7) - 8 = 0\n\nWhat is the sum of all real solutions to the given equation?",
        "prompt": "Select the sum of the solutions:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "10/3"
          },
          {
            "letter": "B",
            "text": "32/3"
          },
          {
            "letter": "C",
            "text": "14"
          },
          {
            "letter": "D",
            "text": "52/3"
          }
        ],
        "correct": "D",
        "desmosEquation": [
          "y = 3(x - 7)^2 - 10(x - 7) - 8"
        ],
        "explanation": "Let u = x - 7. Then 3u^2 - 10u - 8 = 0. By Vieta's formulas, the sum of the two u-values is u₁ + u₂ = -(-10)/3 = 10/3. Since x₁ = u₁ + 7 and x₂ = u₂ + 7, the sum of the x-solutions is:\nx₁ + x₂ = (u₁ + u₂) + 14 = 10/3 + 42/3 = 52/3.\n(Directly: u = 4 or u = -2/3 -> x = 11 or x = 19/3 -> 11 + 19/3 = 52/3.)",
        "hack": "Desmos Zero Click: Graph y = 3(x - 7)^2 - 10(x - 7) - 8. Click the two x-intercepts: (6.333, 0) and (11, 0). Sum = 19/3 + 11 = 52/3 (≈ 17.333)!",
        "trap_breakdown": {
          "A": "10/3 is the sum of u = x - 7, forgetting that shifting right by 7 adds 7 to EACH of the two roots (+14 total).",
          "B": "Added 7 only once (10/3 + 7 = 31/3 or 32/3) instead of adding 7 to both roots.",
          "C": "Doubled the shift (2 * 7 = 14) while ignoring the -10(x - 7) linear term."
        },
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Lesson #1: Solve Any Equation",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=TFmt1VwZte8",
          "videoId": "TFmt1VwZte8"
        }
      },
      {
        "id": 126,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Exponential Time-Scaling Models (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "A culture of bioluminescent marine bacteria initially contains 12,000 cells and triples in population every 4 hours. Which function P(t) models the number of cells in the culture t DAYS after the initial measurement?",
        "prompt": "Select the correct function P(t):",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "P(t) = 12,000(3)^(t/4)"
          },
          {
            "letter": "B",
            "text": "P(t) = 12,000(3)^(4t)"
          },
          {
            "letter": "C",
            "text": "P(t) = 12,000(3)^(6t)"
          },
          {
            "letter": "D",
            "text": "P(t) = 12,000(3)^(t/6)"
          }
        ],
        "correct": "C",
        "desmosEquation": [
          "y = 12000 * 3^(6x)"
        ],
        "explanation": "Watch the unit conversion trap: the growth period is given in HOURS (every 4 hours), but t is measured in DAYS (1 day = 24 hours). In t = 1 day (24 hours), how many 4-hour tripling periods occur? 24 / 4 = 6 tripling periods per day. Therefore, after t days, the population has tripled 6t times: P(t) = 12,000(3)^(6t).",
        "hack": "Plug-in t = 1 Day Test: In 1 day (24 hours), a culture that triples every 4 hours must triple 6 times -> exponent at t = 1 must be 6! Only 3^(6t) gives 3^6 when t = 1.",
        "trap_breakdown": {
          "A": "Classic unit trap: 3^(t/4) would be correct if t were measured in HOURS, not days.",
          "B": "Multiplied by 4 instead of dividing 24 hours / 4 hours = 6.",
          "D": "Divided t by 6 (which would mean tripling once every 6 days)."
        },
        "videoTutorial": {
          "title": "700s Club: The Hardest Digital SAT Math Problems",
          "channel": "Strategic Test Prep",
          "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
          "videoId": "lrIRF-bFjkw"
        }
      },
      {
        "id": 127,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Polynomial Factor & Remainder Theorem (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "p(x) = 2x^3 - kx^2 + 11x - 15\n\nIn the polynomial function above, k is a constant. If p(x) is divisible by (x - 3), what is the value of k?",
        "prompt": "Enter the value of k:",
        "type": "gridin",
        "correct": "8",
        "desmosEquation": [
          "2(3)^3 - k(3)^2 + 11(3) - 15 = 0"
        ],
        "explanation": "By the Polynomial Factor Theorem, p(x) is divisible by (x - 3) if and only if p(3) = 0. Substitute x = 3 into p(x):\n2(3)^3 - k(3)^2 + 11(3) - 15 = 0\n2(27) - 9k + 33 - 15 = 0\n54 - 9k + 18 = 0\n72 = 9k -> k = 8.",
        "hack": "Desmos One-Liner: Type 2(3)^3 - x(3)^2 + 11(3) - 15 = 0 into Desmos. Vertical line appears immediately at x = 8!",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Lesson #1: Solve Any Equation",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=TFmt1VwZte8",
          "videoId": "TFmt1VwZte8"
        }
      },
      {
        "id": 148,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Quadratic Regression from 3 Points (750+ Desmos Weapon)",
        "difficulty": "750–800 Challenge",
        "stem": "In the xy-plane, the graph of the quadratic function f(x) = ax^2 + bx + c passes through the points (-2, 23), (1, -4), and (4, 11). What is the value of a + b + c?",
        "prompt": "Select the value of a + b + c:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "-4"
          },
          {
            "letter": "B",
            "text": "2"
          },
          {
            "letter": "C",
            "text": "7"
          },
          {
            "letter": "D",
            "text": "11"
          }
        ],
        "correct": "A",
        "desmosEquation": [
          "y_1 ~ a*x_1^2 + b*x_1 + c"
        ],
        "explanation": "Wait—look closely at what the question is asking for: 'What is the value of a + b + c?' Notice that for f(x) = ax^2 + bx + c, evaluating f(1) gives:\nf(1) = a(1)^2 + b(1) + c = a + b + c!\nAnd the problem ALREADY gave you the point (1, -4), which means f(1) = -4! Therefore, a + b + c = -4 with zero calculation required!\n(Even if you solve for a, b, c via Desmos regression: a = 2, b = -7, c = 1 -> 2 - 7 + 1 = -4.)",
        "hack": "1600-Scorer Pattern Recognition: For ANY polynomial f(x) = ax^2 + bx + c, the sum of coefficients a + b + c is literally f(1)! Since (1, -4) is given in the stem, a + b + c = -4 in 2 seconds! (Or run y₁ ~ ax₁² + bx₁ + c in Desmos.)",
        "trap_breakdown": {
          "B": "2 is the leading coefficient a.",
          "C": "Calculated 2 + 7 - 2 with a sign error on b.",
          "D": "11 is f(4), not f(1)."
        },
        "videoTutorial": {
          "title": "7 Hard SAT Math Questions Solved with Desmos Regression",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=rSB5oMHfiZc",
          "videoId": "rSB5oMHfiZc"
        }
      },
      {
        "id": 149,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Product of Roots & Vieta's Theorem with Constants (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "2x^2 - 9x + k = 0\n\nIn the given equation, k is a constant. If one solution to the equation is x = (9 + sqrt(17)) / 4, what is the value of k?",
        "prompt": "Enter the value of k:",
        "type": "gridin",
        "correct": "8",
        "desmosEquation": [
          "2((9 + sqrt(17))/4)^2 - 9((9 + sqrt(17))/4) + x = 0"
        ],
        "explanation": "By the quadratic formula for 2x^2 - 9x + k = 0:\nx = [9 ± sqrt((-9)^2 - 4(2)(k))] / (2 * 2) = [9 ± sqrt(81 - 8k)] / 4.\nComparing this with x = (9 + sqrt(17)) / 4 gives:\n81 - 8k = 17 -> 8k = 64 -> k = 8.",
        "hack": "Desmos Direct Substitution: Replace x with (9 + sqrt(17))/4 and replace k with x in Desmos: 2((9+sqrt(17))/4)^2 - 9((9+sqrt(17))/4) + x = 0. Vertical line appears at x = 8!",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "25 Hard SAT Math Module 2 Questions + Desmos Regression",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=661RKRiKDdw",
          "videoId": "661RKRiKDdw"
        }
      },
      {
        "id": 150,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Equivalent Rational Expressions & Polynomial Division (Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "(6x^2 + 13x - 8) / (2x + 5) = 3x - 1 + R / (2x + 5)\n\nThe equation above is true for all x != -5/2, where R is a constant. What is the value of R?",
        "prompt": "Select the value of R:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "-13"
          },
          {
            "letter": "B",
            "text": "-3"
          },
          {
            "letter": "C",
            "text": "3"
          },
          {
            "letter": "D",
            "text": "13"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "y = (6x^2 + 13x - 8) - (3x - 1)(2x + 5)"
        ],
        "explanation": "Multiply both sides by (2x + 5):\n6x^2 + 13x - 8 = (3x - 1)(2x + 5) + R.\nSince this holds for all x, either expand (3x - 1)(2x + 5) = 6x^2 + 13x - 5 -> -8 = -5 + R -> R = -3, OR simply plug in x = 0:\n-8 = (-1)(5) + R -> -8 = -5 + R -> R = -3!",
        "hack": "Plug in x = 0 Shortcut: Set x = 0 in the original equation: (-8) / 5 = -1 + R / 5 -> -8 = -5 + R -> R = -3 in 5 seconds!",
        "trap_breakdown": {
          "A": "Subtracted 5 from -8 instead of adding 5 (-8 - 5 = -13).",
          "C": "Sign error: did -5 - (-8) = +3.",
          "D": "Copied the x-coefficient (13)."
        },
        "videoTutorial": {
          "title": "700s Club: The Hardest Digital SAT Math Problems",
          "channel": "Strategic Test Prep",
          "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
          "videoId": "lrIRF-bFjkw"
        }
      },
      {
        "id": 151,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Function Transformations & Shifted Y-Intercept (750+ Trap)",
        "difficulty": "750–800 Challenge",
        "stem": "f(x) = 3^(x - 2) + 5\n\nThe function f is defined above. If g(x) = f(x + 4) - 11, what is the y-intercept of the graph of y = g(x) in the xy-plane?",
        "prompt": "Select the y-intercept of y = g(x):",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "(0, -5)"
          },
          {
            "letter": "B",
            "text": "(0, 3)"
          },
          {
            "letter": "C",
            "text": "(0, 9)"
          },
          {
            "letter": "D",
            "text": "(0, 14)"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "f(x) = 3^(x - 2) + 5",
          "g(x) = f(x + 4) - 11"
        ],
        "explanation": "The y-intercept of y = g(x) occurs at x = 0:\ng(0) = f(0 + 4) - 11 = f(4) - 11.\nEvaluate f(4): f(4) = 3^(4 - 2) + 5 = 3^2 + 5 = 9 + 5 = 14.\nTherefore, g(0) = 14 - 11 = 3, giving the y-intercept (0, 3).",
        "hack": "Desmos Function Notation: Type f(x) = 3^(x - 2) + 5 on Line 1, and g(x) = f(x + 4) - 11 on Line 2! Desmos natively understands f(x + 4) and plots the y-intercept (0, 3) immediately!",
        "trap_breakdown": {
          "A": "Evaluated f(0) - 11 = (1/9 + 5) - 11 instead of f(4) - 11.",
          "C": "Calculated 3^2 = 9 and forgot to add +5 and subtract -11.",
          "D": "14 is f(4), forgetting to subtract 11."
        },
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 152,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Fractional Exponents & Radical Equivalence (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "For all positive values of x, the expression (x^(5/4) * sqrt(x^3)) / cbrt(x^2) is equivalent to x^k, where k is a constant. What is the value of k?",
        "prompt": "Enter the value of k (as a fraction or decimal):",
        "type": "gridin",
        "correct": "25/12",
        "desmosEquation": [
          "5/4 + 3/2 - 2/3"
        ],
        "explanation": "Convert each radical to a fractional exponent using n-th root of x^m = x^(m/n):\n• sqrt(x^3) = x^(3/2)\n• cbrt(x^2) = x^(2/3)\nCombine exponents by adding in the numerator and subtracting the denominator:\nk = 5/4 + 3/2 - 2/3 = 15/12 + 18/12 - 8/12 = 25/12.",
        "hack": "Desmos Fraction Button: Type 5/4 + 3/2 - 2/3 into Desmos and click the little circle-fraction icon on the left of the expression box -> Desmos converts 2.083333... into 25/12 automatically!",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 208,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Radical Equations & Extraneous Roots",
        "difficulty": "Module 2 Hard",
        "stem": "sqrt(3x + 16) = x + 2\n\nWhat is the set of all real solutions to the given equation?",
        "prompt": "Select the correct solution set:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "-4 only"
          },
          {
            "letter": "B",
            "text": "3 only"
          },
          {
            "letter": "C",
            "text": "-4 and 3"
          },
          {
            "letter": "D",
            "text": "No real solution"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "y = sqrt(3x + 16)",
          "y = x + 2"
        ],
        "explanation": "Square both sides: 3x + 16 = (x + 2)^2 = x^2 + 4x + 4 -> x^2 + x - 12 = 0 -> (x + 4)(x - 3) = 0. Checking x = -4 in the original equation gives sqrt(4) = -2, which is false because the principal square root is always nonnegative. Checking x = 3 gives sqrt(25) = 5, which is valid. Only x = 3 is a real solution.",
        "hack": "Desmos Extraneous Shield: Graph y = sqrt(3x + 16) and y = x + 2. Because Desmos only plots the principal (nonnegative) square root, it NEVER shows extraneous roots! Only (3, 5) intersects.",
        "trap_breakdown": {
          "A": "-4 is the extraneous root.",
          "C": "Fell for the algebraic squaring trap by failing to test x = -4 in the original equation.",
          "D": "x = 3 is a valid real solution."
        },
        "videoTutorial": {
          "title": "Digital SAT Math — Desmos Lesson #1: Solve Any Equation",
          "channel": "Tutorllini Test Prep",
          "url": "https://www.youtube.com/watch?v=TFmt1VwZte8",
          "videoId": "TFmt1VwZte8"
        }
      },
      {
        "id": 211,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Rational Function Asymptotes vs. Removable Discontinuities",
        "difficulty": "Module 2 Hard",
        "stem": "f(x) = (x - 3) / (x^2 - 9)\n\nAt what value of x does the graph of y = f(x) in the xy-plane have a vertical asymptote?",
        "prompt": "Select the vertical asymptote:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "x = -3 only"
          },
          {
            "letter": "B",
            "text": "x = 3 only"
          },
          {
            "letter": "C",
            "text": "Both x = -3 and x = 3"
          },
          {
            "letter": "D",
            "text": "The graph has no vertical asymptotes."
          }
        ],
        "correct": "A",
        "desmosEquation": [
          "y = (x - 3)/(x^2 - 9)"
        ],
        "explanation": "Factor the denominator: f(x) = (x - 3) / [(x - 3)(x + 3)]. For x != 3, the (x - 3) factor cancels, leaving f(x) = 1 / (x + 3) with a removable hole at x = 3 and a vertical asymptote where the remaining denominator is zero: x = -3.",
        "hack": "Desmos Visual Check: Graph y = (x - 3)/(x^2 - 9). At x = -3 the curve shoots to ±∞ (vertical asymptote), whereas at x = 3 it smoothly passes through y = 1/6 (a hole)!",
        "trap_breakdown": {
          "B": "x = 3 is a removable discontinuity (hole), not a vertical asymptote.",
          "C": "Set x^2 - 9 = 0 without canceling the common factor (x - 3).",
          "D": "x = -3 remains in the denominator and creates a vertical asymptote."
        },
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      }
    ]
  },
  "drill_geometry_trig": {
    "id": "drill_geometry_trig",
    "title": "Circles, Tangents, Radians, Similar Solids & Trig",
    "badge": "DOMAIN DRILL · 10 QS",
    "phase": "Phase 3: Hard Module 2 Pressure Testing",
    "category": "Topic Drills",
    "difficulty": "700–800 Mastery",
    "description": "Conquer circle equations, inscribed squares/cubes, tangent slopes, right-triangle altitudes, radian sectors, and k / k² / k³ scaling.",
    "timeLimit": 960,
    "questions": [
      {
        "id": 128,
        "section": "Math",
        "domain": "Geometry & Trigonometry",
        "skill": "Circle Equation & Inscribed Square Area (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "x^2 + y^2 - 10x + 6y = 47\n\nThe equation above represents Circle C in the xy-plane. If Square S is inscribed in Circle C (such that all four vertices of Square S lie on Circle C), what is the area of Square S?",
        "prompt": "Select the area of Square S:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "81"
          },
          {
            "letter": "B",
            "text": "162"
          },
          {
            "letter": "C",
            "text": "324"
          },
          {
            "letter": "D",
            "text": "81π"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "x^2 + y^2 - 10x + 6y = 47"
        ],
        "explanation": "Complete the square to find the radius r of Circle C:\n(x - 5)^2 - 25 + (y + 3)^2 - 9 = 47 -> (x - 5)^2 + (y + 3)^2 = 81, so r^2 = 81 and r = 9 (diameter d = 18).\nFor a square inscribed in a circle, the diagonal of the square equals the diameter of the circle (d = 18). The area of a square in terms of its diagonal d is d^2 / 2 = (2r)^2 / 2 = 2r^2 = 2(81) = 162.",
        "hack": "Inscribed Square Formula: Area of inscribed square = 2r^2 (and Area of circumscribed square = 4r^2). Since r^2 = 81 from Desmos/completing the square, Area = 2 * 81 = 162!",
        "trap_breakdown": {
          "A": "81 is r^2 (which would be the area of a square with side length r, not diagonal 2r).",
          "C": "324 is (2r)^2 = 18^2, the area of a square CIRCUMSCRIBED around the circle.",
          "D": "81π is the area of the circle itself."
        },
        "videoTutorial": {
          "title": "Module 2 SAT Math Practice: 22 Difficult Questions Walkthrough",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=Ku5gIHH6h4Q",
          "videoId": "Ku5gIHH6h4Q"
        }
      },
      {
        "id": 129,
        "section": "Math",
        "domain": "Geometry & Trigonometry",
        "skill": "Cofunction & Complementary Angles (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "In right triangle ABC, the measure of angle C is 90°. Point D lies on segment AB such that segment CD is perpendicular to hypotenuse AB. If sin(A) = 8/17, what is the value of cos(∠BCD)?",
        "prompt": "Select the value of cos(∠BCD):",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "8/17"
          },
          {
            "letter": "B",
            "text": "15/17"
          },
          {
            "letter": "C",
            "text": "8/15"
          },
          {
            "letter": "D",
            "text": "15/8"
          }
        ],
        "correct": "B",
        "explanation": "In right triangle ABC, ∠A + ∠B = 90°. In smaller right triangle CBD (where ∠CDB = 90°), ∠BCD + ∠B = 90°. Therefore, ∠BCD = ∠A, and∠BCD is complementary to ∠B! Wait: let's check carefully: since ∠BCD = ∠A, cos(∠BCD) = cos(A)! And since sin(A) = 8/17 ( an 8-15-17 right triangle), cos(A) = 15/17!",
        "hack": "Altitude-to-Hypotenuse Similarity Law: Dropping an altitude CD to the hypotenuse splits right triangle ABC into two smaller similar right triangles where ∠ACD = ∠B and ∠BCD = ∠A. Since sin(A) = 8/17 (8-15-17 triple), cos(∠BCD) = cos(A) = 15/17!",
        "trap_breakdown": {
          "A": "8/17 is sin(A) = sin(∠BCD) = cos(B), confusing ∠BCD with ∠B.",
          "C": "8/15 is tan(A).",
          "D": "15/8 is cot(A) (and cosine can never exceed 1)."
        },
        "videoTutorial": {
          "title": "Module 2 SAT Math Practice: 22 Difficult Questions Walkthrough",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=Ku5gIHH6h4Q",
          "videoId": "Ku5gIHH6h4Q"
        }
      },
      {
        "id": 130,
        "section": "Math",
        "domain": "Geometry & Trigonometry",
        "skill": "3D Similarity & Surface Area / Volume Scaling (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "Right circular cone A and right circular cone B are similar. The volume of cone A is 24π cubic centimeters, and the volume of cone B is 648π cubic centimeters. If the lateral surface area of cone A is 20π square centimeters, what is the lateral surface area, in square centimeters, of cone B?",
        "prompt": "Select the lateral surface area of cone B:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "60π"
          },
          {
            "letter": "B",
            "text": "180π"
          },
          {
            "letter": "C",
            "text": "540π"
          },
          {
            "letter": "D",
            "text": "1,620π"
          }
        ],
        "correct": "B",
        "explanation": "For similar 3D solids with linear scale factor k:\n• Volume ratio = k^3 = (648π) / (24π) = 27 -> k = ∛27 = 3.\n• Surface area ratio = k^2 = 3^2 = 9.\nTherefore, the lateral surface area of cone B is 20π * 9 = 180π.",
        "hack": "k -> k^2 -> k^3 Bridge: Never multiply area by the volume ratio! First take the cube root of the volume ratio (k = ∛27 = 3), then square it for surface area (k^2 = 9 -> 20π * 9 = 180π).",
        "trap_breakdown": {
          "A": "Multiplied area by k = 3 instead of k^2 = 9.",
          "C": "Multiplied area by the volume ratio k^3 = 27 (20π * 27 = 540π).",
          "D": "Multiplied 540π by 3."
        },
        "videoTutorial": {
          "title": "700s Club: The Hardest Digital SAT Math Problems",
          "channel": "Strategic Test Prep",
          "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
          "videoId": "lrIRF-bFjkw"
        }
      },
      {
        "id": 153,
        "section": "Math",
        "domain": "Geometry & Trigonometry",
        "skill": "Circle Tangent Line Slope (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "(x - 2)^2 + (y + 1)^2 = 169\n\nThe equation above represents a circle in the xy-plane. Point P(7, 11) lies on the circle. If line L is tangent to the circle at point P, what is the slope of line L?",
        "prompt": "Select the slope of line L:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "-12/5"
          },
          {
            "letter": "B",
            "text": "-5/12"
          },
          {
            "letter": "C",
            "text": "5/12"
          },
          {
            "letter": "D",
            "text": "12/5"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "(x - 2)^2 + (y + 1)^2 = 169",
          "y - 11 = (-5/12)(x - 7)"
        ],
        "explanation": "The center of the circle is C(2, -1) and the point of tangency is P(7, 11).\n1. Find the slope of the radius CP:\nm_radius = (11 - (-1)) / (7 - 2) = 12 / 5.\n2. Because a tangent line to a circle is ALWAYS perpendicular to the radius at the point of tangency, the slope of tangent line L is the negative reciprocal of m_radius:\nm_tangent = -5/12.",
        "hack": "Radius-Tangent Perpendicularity Rule: Tangent slope = -1 / (Radius slope). Center = (2, -1), Point = (7, 11) -> Radius Δy/Δx = 12/5 -> Tangent slope = -5/12. Verify visually in Desmos!",
        "trap_breakdown": {
          "A": "Took the negative of the radius slope (-12/5) without taking the reciprocal.",
          "C": "Took the reciprocal (5/12) without negating it.",
          "D": "12/5 is the slope of the radius CP itself, not the perpendicular tangent line."
        },
        "videoTutorial": {
          "title": "Module 2 SAT Math Practice: 22 Difficult Questions Walkthrough",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=Ku5gIHH6h4Q",
          "videoId": "Ku5gIHH6h4Q"
        }
      },
      {
        "id": 154,
        "section": "Math",
        "domain": "Geometry & Trigonometry",
        "skill": "Radian Arc Length & Sector Area Ratio (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "In a circle with radius 12 centimeters, a central angle of measure θ radians intercepts an arc of length 15π centimeters. What is the area, in square centimeters, of the sector formed by this central angle?",
        "prompt": "Select the area of the sector:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "45π"
          },
          {
            "letter": "B",
            "text": "90π"
          },
          {
            "letter": "C",
            "text": "144π"
          },
          {
            "letter": "D",
            "text": "180π"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "(1/2) * 12 * 15"
        ],
        "explanation": "Method 1 (Direct Shortcut): Just like a triangle's area is (1/2) * base * height, the area of a circular sector is ALWAYS:\nArea = (1/2) * r * s (where r is the radius and s is the arc length)!\nArea = (1/2) * 12 * (15π) = 90π.\nMethod 2: s = rθ -> 15π = 12θ -> θ = 5π/4. Sector area = (1/2)r^2 θ = (1/2)(144)(5π/4) = 90π.",
        "hack": "Sector Area Golden Formula: A = (1/2) * r * s (half of radius times arc length)! You don't even need to find θ: (1/2)(12)(15π) = 90π in 3 seconds!",
        "trap_breakdown": {
          "A": "Divided by 4 instead of 2.",
          "C": "144π is the area of the entire circle (πr^2).",
          "D": "Multiplied r * s = 12 * 15π = 180π without multiplying by 1/2."
        },
        "videoTutorial": {
          "title": "Module 2 SAT Math Practice: 22 Difficult Questions Walkthrough",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=Ku5gIHH6h4Q",
          "videoId": "Ku5gIHH6h4Q"
        }
      },
      {
        "id": 157,
        "section": "Math",
        "domain": "Geometry & Trigonometry",
        "skill": "Right Triangle Altitude & Geometric Mean Theorem (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "In right triangle XYZ, the measure of angle Y is 90°, and altitude YW is drawn from vertex Y perpendicular to hypotenuse XZ at point W. If XW = 9 and WZ = 16, what is the length of leg XY?",
        "prompt": "Enter the length of leg XY:",
        "type": "gridin",
        "correct": "15",
        "desmosEquation": [
          "sqrt(9 * (9 + 16))"
        ],
        "explanation": "By right triangle altitude similarity (Triangle XWY ~ Triangle XYZ):\nXY / XZ = XW / XY -> XY^2 = XW * XZ.\nSince XW = 9 and WZ = 16, the full hypotenuse is XZ = 9 + 16 = 25.\nTherefore, XY^2 = 9 * 25 = 225 -> XY = 15.\n(Or find altitude YW = sqrt(9 * 16) = 12, then in right triangle XWY with legs 9 and 12, hypotenuse XY = sqrt(9^2 + 12^2) = 15.)",
        "hack": "Two-Step Altitude Shortcut: (1) Altitude h = √(part₁ * part₂) = √(9 * 16) = 12. (2) Leg XY = √(9² + 12²) = 15 (a 3-4-5 right triangle scaled by 3)!",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "Module 2 SAT Math Practice: 22 Difficult Questions Walkthrough",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=Ku5gIHH6h4Q",
          "videoId": "Ku5gIHH6h4Q"
        }
      },
      {
        "id": 158,
        "section": "Math",
        "domain": "Advanced Math",
        "skill": "Surface Area of Inscribed Cube / Sphere (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "A solid metal cube is inscribed in a sphere of radius 6*sqrt(3) centimeters such that all eight vertices of the cube lie on the surface of the sphere. What is the total surface area, in square centimeters, of the cube?",
        "prompt": "Enter the total surface area of the cube:",
        "type": "gridin",
        "correct": "864",
        "desmosEquation": [
          "6 * (12)^2"
        ],
        "explanation": "For a cube of side length s inscribed in a sphere, the 3D space diagonal of the cube equals the diameter of the sphere:\nSpace diagonal of cube = s * sqrt(3)\nDiameter of sphere = 2r = 2 * 6*sqrt(3) = 12*sqrt(3).\nSetting s * sqrt(3) = 12*sqrt(3) gives side length s = 12 cm.\nThe total surface area of a cube with 6 faces of area s^2 is 6s^2 = 6(12^2) = 6(144) = 864 cm^2.",
        "hack": "3D Space Diagonal Formula: Cube space diagonal d = s√3 = 2r. So s√3 = 12√3 -> s = 12 -> Surface Area = 6s² = 6(144) = 864.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "Module 2 SAT Math Practice: 22 Difficult Questions Walkthrough",
          "channel": "SAT Math Common Sense Prep",
          "url": "https://www.youtube.com/watch?v=Ku5gIHH6h4Q",
          "videoId": "Ku5gIHH6h4Q"
        }
      },
      {
        "id": 155,
        "section": "Math",
        "domain": "Problem Solving & Data Analysis",
        "skill": "Margin of Error & Sample Size Scaling (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "A municipal transit authority surveyed a random sample of 400 regular commuter rail passengers and estimated that 62% of all regular passengers support extending weekend service hours, with an associated margin of error of 4.8% at the 95% confidence level. If the transit authority repeats the survey using the same methodology with a random sample of 1,600 regular passengers, which of the following is the best estimate of the new margin of error at the 95% confidence level?",
        "prompt": "Select the new margin of error:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "1.2%"
          },
          {
            "letter": "B",
            "text": "2.4%"
          },
          {
            "letter": "C",
            "text": "4.8%"
          },
          {
            "letter": "D",
            "text": "9.6%"
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "4.8 / sqrt(1600 / 400)"
        ],
        "explanation": "The margin of error of a sample proportion is inversely proportional to the SQUARE ROOT of the sample size n (ME ∝ 1 / √n). Increasing the sample size from 400 to 1,600 multiplies n by 4. Therefore, the margin of error is divided by √4 = 2:\nNew ME = 4.8% / 2 = 2.4%.",
        "hack": "Inverse Square-Root Law: Margin of Error scales by 1 / √k when sample size multiplies by k. Quadrupling the sample (4x) cuts the margin of error in HALF (4.8% -> 2.4%).",
        "trap_breakdown": {
          "A": "Divided the margin of error by 4 instead of √4 = 2.",
          "C": "Assumed sample size has no effect on margin of error.",
          "D": "Doubled the margin of error (larger samples REDUCE margin of error, never increase it)."
        },
        "videoTutorial": {
          "title": "700s Club: The Hardest Digital SAT Math Problems",
          "channel": "Strategic Test Prep",
          "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
          "videoId": "lrIRF-bFjkw"
        }
      },
      {
        "id": 209,
        "section": "Math",
        "domain": "Problem Solving & Data Analysis",
        "skill": "Standard Deviation vs. Mean Under Translation",
        "difficulty": "Module 1 Core",
        "stem": "Data Set X consists of 7 integers: {12, 15, 18, 21, 24, 27, 30}.\nData Set Y is created by adding 15 to each value in Data Set X: {27, 30, 33, 36, 39, 42, 45}.\n\nWhich statement correctly compares the mean and the standard deviation of Data Set X and Data Set Y?",
        "prompt": "Select the correct comparison:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "The mean of Data Set Y is greater, and the standard deviation of Data Set Y is greater."
          },
          {
            "letter": "B",
            "text": "The mean of Data Set Y is greater, and the standard deviation of Data Set Y is equal."
          },
          {
            "letter": "C",
            "text": "The mean of Data Set Y is equal, and the standard deviation of Data Set Y is greater."
          },
          {
            "letter": "D",
            "text": "Both the mean and standard deviation of Data Set Y are equal to those of Data Set X."
          }
        ],
        "correct": "B",
        "desmosEquation": [
          "stdev(12,15,18,21,24,27,30)",
          "stdev(27,30,33,36,39,42,45)"
        ],
        "explanation": "Adding a constant (+15) to every value in a data set shifts the entire distribution right by 15 units, increasing the mean by 15. However, standard deviation measures the spread (distances from the mean), which remains completely unchanged under addition/subtraction of a constant.",
        "hack": "Desmos Built-In Stats: Type stdev(12,15,18,21,24,27,30) and stdev(27,30,33,36,39,42,45) in Desmos—both output 6.48074! Adding a constant NEVER changes standard deviation; multiplying by k scales standard deviation by |k|.",
        "trap_breakdown": {
          "A": "Confused shifting a data set (addition) with scaling a data set (multiplication).",
          "C": "Reversed mean and standard deviation behavior.",
          "D": "Forgot that adding 15 increases the mean by 15."
        },
        "videoTutorial": {
          "title": "The Only SAT Math Desmos Guide You'll Ever Need",
          "channel": "LearnSATMath",
          "url": "https://www.youtube.com/watch?v=jCT0jTVzKy0",
          "videoId": "jCT0jTVzKy0"
        }
      },
      {
        "id": 210,
        "section": "Math",
        "domain": "Problem Solving & Data Analysis",
        "skill": "Successive Percent Multipliers (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "In 2022, the annual power output of a municipal solar array was P megawatt-hours. In 2023, its annual power output increased by 35% over the 2022 output. In 2024, equipment maintenance reduced the annual power output by 20% compared to the 2023 output. If the 2024 power output is k * P, what is the value of k?",
        "prompt": "Enter the value of k (as a decimal or fraction):",
        "type": "gridin",
        "correct": "1.08",
        "desmosEquation": [
          "1.35 * 0.80"
        ],
        "explanation": "Convert each percentage change to a decimal multiplier:\n• 35% increase in 2023: multiply by (1 + 0.35) = 1.35.\n• 20% decrease in 2024: multiply by (1 - 0.20) = 0.80.\nCombined multiplier: k = 1.35 * 0.80 = 1.08 (an overall 8% increase, NOT 15%!).",
        "hack": "Multiplier Chain Rule: Never add or subtract percentages (+35% - 20% != +15%)! Always multiply decimal factors: 1.35 * 0.80 = 1.08.",
        "trap_breakdown": {},
        "videoTutorial": {
          "title": "700s Club: The Hardest Digital SAT Math Problems",
          "channel": "Strategic Test Prep",
          "url": "https://www.youtube.com/watch?v=lrIRF-bFjkw",
          "videoId": "lrIRF-bFjkw"
        }
      }
    ]
  },
  "drill_grammar_boundaries": {
    "id": "drill_grammar_boundaries",
    "title": "Standard English Conventions & Punctuation Boundaries",
    "badge": "DOMAIN DRILL · 12 QS",
    "phase": "Phase 2: Section Speed & Desmos Fluency",
    "category": "Topic Drills",
    "difficulty": "100% Accuracy Target",
    "description": "Eliminate every grammar mistake: restrictive appositives, conjunctive adverb semicolons, finite vs. participial verbs, and dangling modifiers.",
    "timeLimit": 840,
    "questions": [
      {
        "id": 112,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Boundaries — Conjunctive Adverb ('However')",
        "difficulty": "Module 2 Hard",
        "stem": "Biochemist Katalin Karikó spent decades investigating synthetic messenger RNA despite repeated grant rejections and institutional ______ her persistence ultimately enabled the rapid development of lipid-nanoparticle vaccines that saved millions of lives.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "demotions, however,"
          },
          {
            "letter": "B",
            "text": "demotions; however,"
          },
          {
            "letter": "C",
            "text": "demotions, however"
          },
          {
            "letter": "D",
            "text": "demotions however"
          }
        ],
        "correct": "B",
        "explanation": "Left of the boundary is a complete independent clause ('Biochemist Katalin Karikó spent... demotions'). Right of the boundary is a second complete independent clause ('her persistence ultimately enabled...'). 'However' is a conjunctive adverb, NOT a FANBOYS conjunction, so it cannot join two independent clauses with a comma. A semicolon before 'however' and a comma after it is required.",
        "hack": "The 'However' Law: Between two independent clauses, ', however,' is ALWAYS a comma-splice trap. You MUST use '; however,' or '. However,'.",
        "trap_breakdown": {
          "A": "Classic comma splice: 'however' is not a coordinating conjunction (FANBOYS).",
          "C": "Still a comma splice before 'however' and missing the comma after it.",
          "D": "Fused run-on sentence with zero punctuation between two independent clauses."
        },
        "videoTutorial": {
          "title": "Connector Placement — How to Punctuate 'However' on the SAT",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=sQYiSE2JN1I",
          "videoId": "sQYiSE2JN1I"
        }
      },
      {
        "id": 113,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Boundaries — Restrictive Appositives (750+ Trap)",
        "difficulty": "750–800 Challenge",
        "stem": "By measuring the Doppler shifts of H-alpha emission lines in the outer disks of spiral galaxies such as Andromeda, observational ______ demonstrated that orbital velocities remained flat at large radii rather than declining in accordance with Keplerian predictions, providing the first robust kinematic evidence for dark matter halos.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "astronomer, Vera Rubin,"
          },
          {
            "letter": "B",
            "text": "astronomer Vera Rubin,"
          },
          {
            "letter": "C",
            "text": "astronomer, Vera Rubin"
          },
          {
            "letter": "D",
            "text": "astronomer Vera Rubin"
          }
        ],
        "correct": "D",
        "explanation": "When a job title or descriptive noun phrase ('observational astronomer') precedes a proper name ('Vera Rubin') without a determiner like 'the', the name is a restrictive appositive that specifies *which* astronomer—so NO commas are placed before or after the name. Furthermore, no single comma may separate the subject ('Vera Rubin') from its verb ('demonstrated').",
        "hack": "Title + Name Rule: [Occupation] + [Name] + [Verb] = ZERO COMMAS ('astronomer Vera Rubin demonstrated'). Never put a comma between a subject and its verb!",
        "trap_breakdown": {
          "A": "Treats 'Vera Rubin' as nonessential; removing it leaves 'By measuring..., observational astronomer demonstrated,' which is ungrammatical (singular countable noun 'astronomer' lacks 'an' or 'the').",
          "B": "Places an illegal single comma between the subject ('Vera Rubin') and its verb ('demonstrated').",
          "C": "Places an illegal single comma between the title ('astronomer') and the restrictive name ('Vera Rubin')."
        },
        "videoTutorial": {
          "title": "Digital SAT Writing Guide from a Perfect Scorer",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
          "videoId": "1ppKIYbdEk0"
        }
      },
      {
        "id": 114,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Boundaries — Matching Dashes & Colons",
        "difficulty": "Module 2 Hard",
        "stem": "The restoration of the thirteenth-century Alhambra palace complex in Granada required artisans to replicate *alicatado*—a labor-intensive mosaic technique in which glazed ceramic tiles are hand-cut into interlocking geometric ______ and set into wet mortar to form seamless mathematical tessellations.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "polygons—"
          },
          {
            "letter": "B",
            "text": "polygons,"
          },
          {
            "letter": "C",
            "text": "polygons;"
          },
          {
            "letter": "D",
            "text": "polygons"
          }
        ],
        "correct": "D",
        "explanation": "Look at the structure of the appositive phrase opened by the em-dash after *alicatado*: 'a labor-intensive mosaic technique in which glazed ceramic tiles are [hand-cut into interlocking geometric polygons] and [set into wet mortar...]'. Both 'hand-cut...' and 'set into wet mortar...' are parallel passive participles inside the 'in which' clause that continues to the end of the sentence. Therefore, the dash does NOT close after 'polygons'—no punctuation is needed between the two compound phrases joined by 'and.'",
        "hack": "Fake-Closing-Dash Trap: Just because you see an em-dash earlier in the sentence doesn't mean the blank closes it! Check whether 'and set into wet mortar' belongs inside the definition of *alicatado*—it does, so the dash runs all the way to the period.",
        "trap_breakdown": {
          "A": "Closing the dash after 'polygons' leaves 'The restoration... required artisans to replicate alicatado and set into wet mortar,' which is ungrammatical.",
          "B": "A comma before 'and' is only used when joining two complete independent clauses, not two participial phrases ('are hand-cut... and set...').",
          "C": "A semicolon cannot separate two halves of a compound verb phrase."
        },
        "videoTutorial": {
          "title": "Commas, Colons & Dashes: SAT Boundaries Within a Sentence",
          "channel": "PrepFriend101",
          "url": "https://www.youtube.com/watch?v=YaU6sZaxA3M",
          "videoId": "YaU6sZaxA3M"
        }
      },
      {
        "id": 115,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Form, Structure & Sense — Subject-Verb Inversion",
        "difficulty": "750–800 Challenge",
        "stem": "Beneath the hyper-arid salt flats of Chile's Atacama Desert ______ of extremophilic halobacteria and archaea that derive metabolic energy by oxidizing atmospheric trace gases rather than performing photosynthesis.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "lies a diverse consortium"
          },
          {
            "letter": "B",
            "text": "lie a diverse consortium"
          },
          {
            "letter": "C",
            "text": "are lying a diverse consortium"
          },
          {
            "letter": "D",
            "text": "have lain a diverse consortium"
          }
        ],
        "correct": "A",
        "explanation": "When a sentence begins with a locative prepositional phrase ('Beneath the hyper-arid salt flats of Chile's Atacama Desert'), the subject and verb invert: the true subject comes *after* the verb. The head noun of the subject is 'a diverse consortium' (singular collective noun), ignoring the prepositional phrase 'of extremophilic halobacteria and archaea.' Therefore, the singular verb 'lies' is required.",
        "hack": "Inverted Sentence Hack: Flip the sentence around: 'A diverse consortium (singular) [lies] beneath the salt flats.'",
        "trap_breakdown": {
          "B": "Plural verb ('lie')—tricked by the plural nouns 'flats' before the blank and 'halobacteria and archaea' after the subject.",
          "C": "Plural auxiliary ('are lying') fails to agree with singular 'a diverse consortium.'",
          "D": "Plural auxiliary ('have lain') fails to agree with singular 'a diverse consortium.'"
        },
        "videoTutorial": {
          "title": "Digital SAT Writing Guide from a Perfect Scorer",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
          "videoId": "1ppKIYbdEk0"
        }
      },
      {
        "id": 116,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Form, Structure & Sense — Dangling Modifiers",
        "difficulty": "Module 2 Hard",
        "stem": "Synthesized at pressures exceeding 150 gigapascals inside a diamond anvil cell, ______ at temperatures significantly higher than those tolerated by conventional niobium-titanium alloys.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "physicists observed that lanthanum superhydride exhibited zero electrical resistance"
          },
          {
            "letter": "B",
            "text": "zero electrical resistance was exhibited by lanthanum superhydride"
          },
          {
            "letter": "C",
            "text": "lanthanum superhydride exhibited zero electrical resistance"
          },
          {
            "letter": "D",
            "text": "the diamond anvil cell enabled lanthanum superhydride to exhibit zero electrical resistance"
          }
        ],
        "correct": "C",
        "explanation": "The introductory participial phrase ('Synthesized at pressures exceeding 150 gigapascals inside a diamond anvil cell,') must immediately precede the noun that was actually synthesized. What was synthesized at 150 GPa? 'Lanthanum superhydride'—not the physicists, not 'zero electrical resistance,' and not the anvil cell.",
        "hack": "Dangling Modifier Law: Ask 'WHAT was synthesized at 150 gigapascals?' That exact noun ('lanthanum superhydride') must be the very first grammatical subject after the comma.",
        "trap_breakdown": {
          "A": "Implies that 'physicists' were synthesized at 150 gigapascals inside a diamond anvil cell.",
          "B": "Implies that 'zero electrical resistance' (an abstract property) was synthesized.",
          "D": "Implies the 'diamond anvil cell' was synthesized inside itself."
        },
        "videoTutorial": {
          "title": "Digital SAT Writing Guide from a Perfect Scorer",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
          "videoId": "1ppKIYbdEk0"
        }
      },
      {
        "id": 117,
        "section": "Reading & Writing",
        "domain": "Expression of Ideas",
        "skill": "Logical Transitions (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "In classical Newtonian celestial mechanics, planetary orbits are modeled as closed Keplerian ellipses that repeat identically unless perturbed by third-body gravitational tugs. Under Einstein's general theory of relativity, ______ the curvature of spacetime around a massive star causes the perihelion of even an isolated planet's orbit to precess slightly with each revolution—an effect famously measured in Mercury's orbit.",
        "prompt": "Which choice completes the text with the most logical transition?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "consequently,"
          },
          {
            "letter": "B",
            "text": "by contrast,"
          },
          {
            "letter": "C",
            "text": "for instance,"
          },
          {
            "letter": "D",
            "text": "similarly,"
          }
        ],
        "correct": "B",
        "explanation": "Sentence 1 states that in Newtonian mechanics, an isolated planet's orbit is a closed ellipse that repeats identically. Sentence 2 states that under Einstein's general relativity, even an isolated planet's orbit precesses (rotates) with each revolution. Because the two frameworks predict opposite behaviors for an isolated orbit, 'by contrast,' is required.",
        "hack": "Transition Polarity: Newtonian (closed/static unless perturbed) vs. Relativity (precesses even when isolated) = Direct Contrast ('by contrast,').",
        "trap_breakdown": {
          "A": "'Consequently' signals cause-and-effect, but Newtonian mechanics did not cause relativistic spacetime curvature.",
          "C": "'For instance' introduces an example of the preceding claim, whereas Sentence 2 contradicts the Newtonian prediction.",
          "D": "'Similarly' signals agreement, ignoring the opposition between closed ellipses and precessing orbits."
        },
        "videoTutorial": {
          "title": "Connector Placement — How to Punctuate 'However' on the SAT",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=sQYiSE2JN1I",
          "videoId": "sQYiSE2JN1I"
        }
      },
      {
        "id": 118,
        "section": "Reading & Writing",
        "domain": "Expression of Ideas",
        "skill": "Rhetorical Synthesis (Goal Filtering)",
        "difficulty": "Module 2 Hard",
        "stem": "While researching a topic, a student has taken the following notes:\n• Pando is a clonal colony of quaking aspen (Populus tremuloides) located in the Fishlake National Forest in Utah.\n• Although it appears to be a forest of over 47,000 individual trees, all the stems are genetically identical and connected by a single underground root system.\n• Spanning 106 acres and weighing an estimated 6,000 metric tons, Pando is widely considered the heaviest known living organism on Earth.\n• By contrast, the largest known individual sequoia tree (General Sherman) weighs approximately 1,900 metric tons.\n• Ecologists have warned that deer and cattle overgrazing on young aspen shoots is preventing Pando from regenerating aging stems.\n\nThe student wants to explain why Pando is classified as a single organism despite its appearance. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
        "prompt": "Select the choice that best accomplishes the student's goal:",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "Weighing an estimated 6,000 metric tons across 106 acres in Utah, Pando is more than three times heavier than the General Sherman sequoia."
          },
          {
            "letter": "B",
            "text": "Although Pando looks like a forest of 47,000 separate quaking aspen trees, its stems are genetically identical and share a single interconnected underground root system."
          },
          {
            "letter": "C",
            "text": "Located in Utah's Fishlake National Forest, the clonal aspen colony known as Pando faces regeneration threats because deer and cattle graze on its young shoots."
          },
          {
            "letter": "D",
            "text": "Unlike the General Sherman sequoia, which is an individual tree weighing 1,900 metric tons, Pando is threatened by overgrazing across its 106-acre habitat."
          }
        ],
        "correct": "B",
        "explanation": "Filter strictly by the two parts of the student's goal: (1) 'despite its appearance' ('looks like a forest of 47,000 separate trees') and (2) 'why it is classified as a single organism' ('stems are genetically identical and share a single interconnected underground root system'). Only Choice B satisfies both parts.",
        "hack": "15-Second Synthesis Rule: Goal = 'why single organism' + 'despite appearance.' Cross out A (weight comparison), C (grazing threat), and D (sequoia + grazing).",
        "trap_breakdown": {
          "A": "Uses true notes about weight, but never explains why Pando is a single organism or how it appears.",
          "C": "Focuses on location and overgrazing threats rather than the biological basis for being a single organism.",
          "D": "Combines weight and overgrazing facts without addressing the prompt's goal."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing: Rhetorical Synthesis Strategy",
          "channel": "Test Innovators",
          "url": "https://www.youtube.com/watch?v=cLDrVb2_0Jc",
          "videoId": "cLDrVb2_0Jc"
        }
      },
      {
        "id": 139,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Verb Forms — Finite Verb vs. Participle in Complex Syntax",
        "difficulty": "750–800 Challenge",
        "stem": "The acoustic properties of ancient Greek amphitheaters, particularly the fourth-century BCE theater at Epidaurus whose limestone seating tiers act as an acoustic trap that filters out low-frequency background noise while amplifying high-frequency vocal consonants from the stage floor, ______ modern architectural acousticians for decades.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "intriguing"
          },
          {
            "letter": "B",
            "text": "having intrigued"
          },
          {
            "letter": "C",
            "text": "has intrigued"
          },
          {
            "letter": "D",
            "text": "have intrigued"
          }
        ],
        "correct": "D",
        "explanation": "Strip out the prepositional phrase ('of ancient Greek amphitheaters') and the long appositive modifier ('particularly the fourth-century BCE theater at Epidaurus whose... stage floor'). The skeleton of the sentence is: 'The acoustic properties [...] ______ modern architectural acousticians for decades.' The sentence requires a finite main verb agreeing with the plural subject 'properties': 'have intrigued.'",
        "hack": "Two-Step Verb Filter: (1) Does the sentence have a main verb outside the modifier? No -> eliminate participles A and B. (2) Is the head subject ('properties') singular or plural? Plural -> pick 'have intrigued' (D).",
        "trap_breakdown": {
          "A": "Participle ('intriguing') leaves the main clause without a finite verb, creating a sentence fragment.",
          "B": "Participle ('having intrigued') also creates a sentence fragment.",
          "C": "Singular verb ('has intrigued') agrees with the local noun 'floor' or 'theater' rather than the plural subject 'properties.'"
        },
        "videoTutorial": {
          "title": "Digital SAT Writing Guide from a Perfect Scorer",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
          "videoId": "1ppKIYbdEk0"
        }
      },
      {
        "id": 140,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Pronoun & Demonstrative Number Agreement (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "Because the thermal conductivity of single-layer graphene sheets exceeds ______ of pure copper by nearly an order of magnitude at room temperature, materials engineers are integrating graphene heat spreaders into next-generation microprocessor architectures.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "those"
          },
          {
            "letter": "B",
            "text": "that"
          },
          {
            "letter": "C",
            "text": "them"
          },
          {
            "letter": "D",
            "text": "these"
          }
        ],
        "correct": "B",
        "explanation": "In a comparison ('exceeds ______ of pure copper'), the demonstrative pronoun stands in for the singular noun 'the thermal conductivity' (not 'graphene sheets'). Singular antecedent requires the singular demonstrative pronoun 'that' ('exceeds that [the thermal conductivity] of pure copper').",
        "hack": "'That of' vs. 'Those of' Rule: Ask WHAT is being compared. Here, 'the thermal conductivity' (singular) of graphene is compared to 'that' (the thermal conductivity) of copper.",
        "trap_breakdown": {
          "A": "'Those' is plural, erroneously matching the local plural noun 'sheets' instead of the compared property 'conductivity.'",
          "C": "'Them' cannot be modified by a prepositional phrase ('them of pure copper' is ungrammatical).",
          "D": "'These' is plural and cannot be used in a comparative 'of' construction."
        },
        "videoTutorial": {
          "title": "Digital SAT Writing Guide from a Perfect Scorer",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
          "videoId": "1ppKIYbdEk0"
        }
      },
      {
        "id": 141,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Genitive / Possessive Nouns vs. Plurals (Hard Module 2)",
        "difficulty": "Module 2 Hard",
        "stem": "Paleobotanists analyzing fossilized leaf cuticles from the Paleocene-Eocene Thermal Maximum discovered that two sympatric ______ exhibited markedly different stomatal density reductions in response to elevated atmospheric carbon dioxide.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "tree species’ leaves"
          },
          {
            "letter": "B",
            "text": "tree species’s leaves"
          },
          {
            "letter": "C",
            "text": "trees species leaves"
          },
          {
            "letter": "D",
            "text": "tree species’ leaf’s"
          }
        ],
        "correct": "A",
        "explanation": "'Two sympatric tree species' is plural ('species' is the plural noun, modified by the noun adjunct 'tree'). To show that the 'leaves' belong to those plural 'species', we form the plural possessive of a noun ending in -s by adding an apostrophe after the -s: 'species’'. 'Leaves' is the plural subject of the verb 'exhibited' and is not possessive, so it takes no apostrophe.",
        "hack": "Apostrophe Test: Does the second noun ('leaves') own anything? No -> eliminate any choice with an apostrophe on 'leaf's' (D). Does the first noun ('two... species') own the leaves? Yes, and 'species' is plural ending in -s -> 'tree species’ leaves' (A).",
        "trap_breakdown": {
          "B": "'Species' is plural here ('two sympatric tree species'), so its possessive is 'species’', not 'species’s'.",
          "C": "Omits the possessive apostrophe required before 'leaves' and incorrectly pluralizes the noun adjunct 'tree'.",
          "D": "Erroneously makes 'leaf's' singular possessive before the verb 'exhibited'."
        },
        "videoTutorial": {
          "title": "Digital SAT Writing Guide from a Perfect Scorer",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=1ppKIYbdEk0",
          "videoId": "1ppKIYbdEk0"
        }
      },
      {
        "id": 142,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Punctuation — Em-Dash Pair Around Interrupting Clause",
        "difficulty": "Module 2 Hard",
        "stem": "The chemical synthesis of cubane—a platonic hydrocarbon whose eight carbon atoms are forced into a 90-degree cubic geometry that defies standard tetrahedral bond ______ was once considered theoretically impossible until Philip Eaton and Thomas Cole isolated the crystalline solid in 1964.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "angles,"
          },
          {
            "letter": "B",
            "text": "angles;"
          },
          {
            "letter": "C",
            "text": "angles—"
          },
          {
            "letter": "D",
            "text": "angles"
          }
        ],
        "correct": "C",
        "explanation": "The interrupting appositive ('—a platonic hydrocarbon... tetrahedral bond angles—') was opened with an em-dash after 'cubane'. By the Symmetric Delimiter Rule, a nonessential phrase opened with an em-dash MUST be closed with a matching em-dash before the main verb 'was once considered.'",
        "hack": "Dash-Matching Law: Scan left of the blank! If you see a single opening em-dash (—) before a nonessential interrupter, you MUST close that interrupter with a second em-dash (—) before the verb. Never mix a dash with a comma!",
        "trap_breakdown": {
          "A": "Mismatched delimiter: opens with an em-dash (—) but closes with a comma (,).",
          "B": "A semicolon cannot close an interrupting phrase or separate a subject from its verb.",
          "D": "Fails to close the interrupting appositive."
        },
        "videoTutorial": {
          "title": "Commas, Colons & Dashes: SAT Boundaries Within a Sentence",
          "channel": "PrepFriend101",
          "url": "https://www.youtube.com/watch?v=YaU6sZaxA3M",
          "videoId": "YaU6sZaxA3M"
        }
      },
      {
        "id": 143,
        "section": "Reading & Writing",
        "domain": "Standard English Conventions",
        "skill": "Relative Clauses — Preposition + Whom/Which Boundaries",
        "difficulty": "750–800 Challenge",
        "stem": "In 2016, mathematician Maryna Viazovska resolved the sphere-packing problem in dimension 8, proving that the E8 lattice achieves the densest possible arrangement of identical spheres—a breakthrough ______ she was awarded the Fields Medal in 2022.",
        "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "for which"
          },
          {
            "letter": "B",
            "text": "and for it"
          },
          {
            "letter": "C",
            "text": "for this,"
          },
          {
            "letter": "D",
            "text": "which"
          }
        ],
        "correct": "A",
        "explanation": "After the em-dash is the noun phrase 'a breakthrough', followed by a modifier describing that breakthrough. Using the relative pronoun 'for which' ('a breakthrough for which she was awarded the Fields Medal') creates a subordinate relative clause modifying 'breakthrough.' Choices B and C would turn the post-dash phrase into an ungrammatical hybrid, and D omits the required preposition 'for' ('awarded the Fields Medal FOR a breakthrough').",
        "hack": "Preposition + 'Which' Check: Ask how the verb connects to the noun: 'She was awarded the Fields Medal FOR the breakthrough' -> 'a breakthrough FOR WHICH she was awarded...'",
        "trap_breakdown": {
          "B": "'A breakthrough and for it she was awarded...' improperly coordinates a noun phrase with an independent clause.",
          "C": "Creates a run-on after the noun phrase 'a breakthrough'.",
          "D": "Omits the preposition 'for' required by 'awarded... for [a breakthrough]'."
        },
        "videoTutorial": {
          "title": "Commas, Colons & Dashes: SAT Boundaries Within a Sentence",
          "channel": "PrepFriend101",
          "url": "https://www.youtube.com/watch?v=YaU6sZaxA3M",
          "videoId": "YaU6sZaxA3M"
        }
      }
    ]
  },
  "drill_logical_synthesis": {
    "id": "drill_logical_synthesis",
    "title": "Inferences, Quantitative Evidence & Rhetorical Synthesis",
    "badge": "DOMAIN DRILL · 12 QS",
    "phase": "Phase 3: Hard Module 2 Pressure Testing",
    "category": "Topic Drills",
    "difficulty": "700–800 Mastery",
    "description": "Master the hardest Reading & Writing reasoning items: scientific hypothesis testing, data tables, causal logic completions, and 15-second synthesis.",
    "timeLimit": 1080,
    "questions": [
      {
        "id": 107,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Central Ideas & Details",
        "difficulty": "Module 2 Hard",
        "stem": "Many neuroscientists long adhered to the doctrine that neurogenesis—the formation of new functional neurons—ceased completely in the mammalian brain shortly after birth. However, retrospective birth-dating studies measuring carbon-14 isotopes incorporated into neuronal DNA during atmospheric nuclear testing between 1945 and 1963 have detected a steady annual turnover rate of roughly 1.75% in the human hippocampal dentate gyrus well into late adulthood.",
        "prompt": "Which choice best states the main idea of the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "Atmospheric nuclear testing between 1945 and 1963 permanently altered the rate of DNA replication in the human hippocampus."
          },
          {
            "letter": "B",
            "text": "Isotopic dating of neuronal DNA provides empirical evidence challenging the longstanding view that adult human brains cannot generate new neurons."
          },
          {
            "letter": "C",
            "text": "The hippocampal dentate gyrus is the only region of the mammalian brain capable of repairing itself after radiation exposure."
          },
          {
            "letter": "D",
            "text": "Neuroscientists have abandoned carbon-14 birth-dating because its 1.75% margin of error is too large to measure adult neurogenesis."
          }
        ],
        "correct": "B",
        "explanation": "The passage follows the classic 'Old Doctrine + Pivot (However) + New Empirical Discovery' structure. Carbon-14 dating of DNA showed a 1.75% annual neuron turnover in adult humans, refuting the belief that neurogenesis ends after birth.",
        "hack": "Old Consensus ('long adhered') + 'However' = The Main Idea is ALWAYS the post-pivot discovery.",
        "trap_breakdown": {
          "A": "Confuses the measurement tool (carbon-14 tracer from 1945–1963 testing) with a biological cause.",
          "C": "Introduces 'repairing itself after radiation exposure,' which is never mentioned.",
          "D": "Misreads '1.75% annual turnover rate' as a 'margin of error.'"
        },
        "videoTutorial": {
          "title": "Digital SAT Reading Pacing & Module Order Strategy",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=STjlOnEH5sY",
          "videoId": "STjlOnEH5sY"
        }
      },
      {
        "id": 108,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Command of Evidence (Quantitative)",
        "difficulty": "Module 2 Hard",
        "stem": " Pollinator Foraging Metrics Across Three Landscape Types\n• Continuous Tallgrass Prairie: Mean Flight Duration = 14.2 min | Mean Nectar Yield = 31.8 mg | Floral Species Visited = 6.4\n• Suburban Hedgerow Corridor: Mean Flight Duration = 19.5 min | Mean Nectar Yield = 26.1 mg | Floral Species Visited = 4.8\n• Fragmented Urban Patch: Mean Flight Duration = 38.4 min | Mean Nectar Yield = 14.2 mg | Floral Species Visited = 2.1\n\nA conservation biologist hypothesizes that habitat fragmentation forces native bumblebees (Bombus impatiens) to expend substantially more flight time per foraging bout while yielding less than half the caloric nectar reward obtained in intact grassland ecosystems.",
        "prompt": "Which choice most effectively uses data from the table to support the biologist's hypothesis?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "Bumblebees in Suburban Hedgerow Corridors visited an average of 4.8 floral species per bout, whereas those in Fragmented Urban Patches visited 2.1 species."
          },
          {
            "letter": "B",
            "text": "Bumblebees in Fragmented Urban Patches averaged 38.4 minutes per flight but collected only 14.2 mg of nectar, compared with 14.2 minutes and 31.8 mg in Continuous Tallgrass Prairie."
          },
          {
            "letter": "C",
            "text": "Mean nectar yield in Continuous Tallgrass Prairie (31.8 mg) was higher than in Suburban Hedgerow Corridors (26.1 mg), despite both habitats supporting more than 4 floral species."
          },
          {
            "letter": "D",
            "text": "In Fragmented Urban Patches, the numerical value of mean flight duration (38.4) exceeded the numerical value of mean nectar yield in Continuous Tallgrass Prairie (31.8)."
          }
        ],
        "correct": "B",
        "explanation": "The hypothesis makes two linked quantitative claims comparing fragmented habitats to intact grasslands: (1) substantially more flight time, and (2) less than half the nectar reward. Choice B cites both variables for Fragmented Urban Patch vs. Continuous Tallgrass Prairie (38.4 min vs. 14.2 min; and 14.2 mg is less than half of 31.8 mg, since 31.8 / 2 = 15.9).",
        "hack": "Two-Part Claim Rule: If the hypothesis has Cause A (flight time) and Effect B (< 50% nectar yield), the correct choice MUST cite numbers for BOTH A and B.",
        "trap_breakdown": {
          "A": "True data from the table, but cites 'Floral Species Visited' instead of flight duration and nectar yield.",
          "C": "Compares Suburban Hedgerow to Prairie, where 26.1 mg is NOT 'less than half' of 31.8 mg.",
          "D": "Compares apples to oranges (comparing minutes in one habitat to milligrams in another)."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 109,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Inferences (750+ Hard Module 2)",
        "difficulty": "750–800 Challenge",
        "stem": "In sovereign debt restructurings, 'collective action clauses' (CACs) allow a supermajority of bondholders—typically 75% by principal value—to bind holdout creditors to revised payment terms. Prior to 2014, however, most sovereign bonds used series-by-series CACs, meaning a distressed nation had to secure a 75% vote within each individual bond issuance; a hedge fund acquiring just 26% of a single small series could block restructuring of that series and litigate for full face value. Consequently, the International Monetary Fund endorsed 'single-limb aggregated' CACs, which pool votes across all outstanding bond series simultaneously, implying that under post-2014 single-limb contracts, ______",
        "prompt": "Which choice most logically completes the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "sovereign borrowers no longer need to obtain the consent of at least 75% of total bondholders to modify payment schedules."
          },
          {
            "letter": "B",
            "text": "accumulating a 26% stake in one isolated bond series is insufficient for a creditor to veto a restructuring if the aggregate supermajority threshold is met across all series."
          },
          {
            "letter": "C",
            "text": "holdout creditors are legally prohibited from purchasing more than 25% of any single sovereign bond issuance on the secondary market."
          },
          {
            "letter": "D",
            "text": "series-by-series voting remains necessary whenever a sovereign borrower seeks to restructure domestic-currency debt rather than foreign-currency debt."
          }
        ],
        "correct": "B",
        "explanation": "Under pre-2014 series-by-series CACs, buying 26% of one small series blocked that series because 75% was required in *each* series. Because post-2014 'single-limb aggregated' CACs pool votes across *all* series simultaneously, holding 26% of a single small series can no longer block the restructuring if the pooled vote across all series reaches the supermajority.",
        "hack": "Logical Completion Rule: Trace the exact mechanism that changed (per-series 75% vote -> pooled all-series vote) and negate the specific loophole (26% in one series blocking the deal).",
        "trap_breakdown": {
          "A": "False: the supermajority threshold across pooled bondholders still applies.",
          "C": "Confuses voting power during restructuring with a ban on purchasing bonds.",
          "D": "Introduces 'domestic-currency vs. foreign-currency debt,' which is never mentioned in the text."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading Pacing & Module Order Strategy",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=STjlOnEH5sY",
          "videoId": "STjlOnEH5sY"
        }
      },
      {
        "id": 110,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Inferences (750+ Scientific Logic)",
        "difficulty": "750–800 Challenge",
        "stem": "Marine biologists investigating coral bleaching in the Coral Sea compared colonies of Acropora millepora from two adjacent reef zones: a deep fore-reef where water temperatures remain stable year-round (26°C–27.5°C) and a shallow back-reef lagoon subject to daily tidal temperature swings of up to 6°C. When both groups were exposed in laboratory tanks to a sustained +2.5°C thermal anomaly for 14 days, fore-reef colonies expelled 82% of their symbiotic zooxanthellae, whereas back-reef colonies retained over 85% of their symbionts and exhibited rapid upregulation of heat-shock protein genes within four hours. These findings suggest that ______",
        "prompt": "Which choice most logically completes the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "symbiotic zooxanthellae in deep fore-reef zones belong to a different taxonomic genus than those inhabiting shallow back-reef lagoons."
          },
          {
            "letter": "B",
            "text": "prior acclimatization to high-frequency thermal variability can confer physiological resilience against acute ocean warming events."
          },
          {
            "letter": "C",
            "text": "shallow back-reef lagoons will be completely immune to coral bleaching if average global ocean temperatures rise by more than 6°C."
          },
          {
            "letter": "D",
            "text": "heat-shock protein genes are absent from the genome of Acropora millepora colonies that develop in stable thermal environments."
          }
        ],
        "correct": "B",
        "explanation": "The only difference between the two groups of the same species (A. millepora) was their native thermal environment: daily 6°C swings (back-reef) vs. stable temperatures (fore-reef). Under +2.5°C stress, the back-reef corals retained >85% of symbionts and rapidly expressed heat-shock genes, supporting the inference that prior exposure to thermal variability builds resilience.",
        "hack": "Eliminate Extreme & Unsupported Claims: Cross out 'completely immune' (C), 'absent from the genome' (D), and 'different genus' (A). Pick the conservative causal link (B).",
        "trap_breakdown": {
          "A": "The passage never mentions zooxanthellae taxonomic genera; it highlights transcriptional upregulation in the coral.",
          "C": "Extreme language trap ('completely immune... more than 6°C')—the experiment tested +2.5°C for 14 days, and 15% of symbionts were still lost.",
          "D": "Having lower/slower upregulation does not mean the genes are absent from the species' genome."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 111,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Command of Evidence (Textual / Literary)",
        "difficulty": "Module 2 Hard",
        "stem": "In Edith Wharton's 1920 novel The Age of Innocence, Newland Archer prides himself on his cosmopolitan detachment from the rigid social orthodoxy of 1870s Old New York, yet in moments of personal crisis he instinctively judges his fiancée May Welland through the very conventions he claims to disdain.",
        "prompt": "Which quotation from The Age of Innocence most effectively illustrates the claim?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "\"The stipulation that the wedding should take place in April, rather than in the autumn, had been made by Mrs. Welland, who wished the young couple to spend their summer in Europe.\""
          },
          {
            "letter": "B",
            "text": "\"He had dawdled over his cigar because he was at heart a dilettante, and thinking over a pleasure to come often gave him a subtler satisfaction than its realization.\""
          },
          {
            "letter": "C",
            "text": "\"How young she is! For what endless years this uncanny crystalline innocence will endure—and how terribly she would bore a man who had no use for the parlor pieties he himself secretly demanded of a wife!\""
          },
          {
            "letter": "D",
            "text": "\"Through the closed windows of the coupé he saw the gas-lamps of Fifth Avenue flaring through the sleet, each house-front identical in its brownstone reticence.\""
          }
        ],
        "correct": "C",
        "explanation": "The claim has two parts: (1) Archer views himself as superior to social orthodoxy ('parlor pieties'), yet (2) he enforces those same conventions on May. Choice C shows him mocking her 'crystalline innocence' while admitting they are the 'parlor pieties he himself secretly demanded of a wife!'",
        "hack": "Two-Half Verification: Match Part 1 (disdain for orthodoxy = 'bore a man who had no use for parlor pieties') + Part 2 (internalizing the orthodoxy = 'he himself secretly demanded of a wife').",
        "trap_breakdown": {
          "A": "Describes Mrs. Welland's scheduling preference, not Archer's psychological contradiction.",
          "B": "Illustrates Archer's aesthetic hesitation, not his double standard regarding May and social conventions.",
          "D": "Describes the setting of Fifth Avenue without mentioning May or Archer's judgment of her."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 134,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Function of Underlined Sentence — Concession & Counterargument",
        "difficulty": "Module 2 Hard",
        "stem": "Paleoclimatologists reconstructing Pleistocene megafaunal extinctions in Sahul (prehistoric Australia and New Guinea) have long debated the relative roles of climate aridification versus human arrival. [It is undeniable that progressive continental drying between 60,000 and 40,000 years ago contracted freshwater refugia across the Australian interior.] Yet sediment cores from Lynch's Crater in Queensland demonstrate that megafaunal dung fungi—a direct proxy for herbivore biomass—remained abundant through multiple prior glacial-interglacial droughts of equal severity, plummeting to zero only within centuries of archaeological evidence for human colonization.",
        "prompt": "Which choice best describes the function of the bracketed sentence in the overall structure of the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "It introduces the primary hypothesis that the author subsequently validates using palynological evidence from Lynch's Crater."
          },
          {
            "letter": "B",
            "text": "It concedes the validity of an environmental observation before the text presents empirical evidence showing that this factor alone cannot explain the extinction event."
          },
          {
            "letter": "C",
            "text": "It refutes the claim that human colonization coincided temporally with the disappearance of megafaunal dung fungi."
          },
          {
            "letter": "D",
            "text": "It explains the chemical methodology used by paleoclimatologists to date Pleistocene sediment cores."
          }
        ],
        "correct": "B",
        "explanation": "The bracketed sentence begins with 'It is undeniable that...' (a classic concession acknowledging that continental drying did occur), which is immediately followed by 'Yet sediment cores... demonstrate' (the counterargument proving that prior droughts of equal severity did not cause extinction, pointing instead to human arrival).",
        "hack": "Structural Formula: 'It is undeniable that [X]. Yet [Y]' = Concession of a partial truth followed by a pivot to the decisive counter-evidence.",
        "trap_breakdown": {
          "A": "Reverses the author's conclusion: the Lynch's Crater evidence refutes climate-only extinction rather than validating it.",
          "C": "The final sentence supports—rather than refutes—the coincidence of human arrival and fungal collapse.",
          "D": "The bracketed sentence describes continental drying, not laboratory dating methodology."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading Pacing & Module Order Strategy",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=STjlOnEH5sY",
          "videoId": "STjlOnEH5sY"
        }
      },
      {
        "id": 136,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Command of Evidence — Textual Support (Literary)",
        "difficulty": "Module 2 Hard",
        "stem": "'The Awakening' is an 1899 novel by Kate Chopin. In the novel, Chopin depicts the protagonist, Edna Pontellier, as experiencing a growing detachment from the social conventions and domestic expectations that previously governed her daily routine, even when she cannot yet articulate the nature of the transformation:",
        "prompt": "Which quotation from 'The Awakening' most effectively illustrates the claim?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "“Mrs. Pontellier’s eyes were quick and bright; they were a yellowish brown, about the color of dried leaves that had retained their luster.”"
          },
          {
            "letter": "B",
            "text": "“She began to do as she liked and to feel as she liked, completely abandoning her Tuesday reception days—which had been a sacred fixture of her household calendar—without offering any explanation even to herself.”"
          },
          {
            "letter": "C",
            "text": "“Mr. Pontellier was very fond of walking about his house examining its various appointments and commenting upon the skill of the New Orleans artisans.”"
          },
          {
            "letter": "D",
            "text": "“The children were accustomed to spend the hottest months of the summer at Grand Isle, where the sea breeze moderated the Gulf coast humidity.”"
          }
        ],
        "correct": "B",
        "explanation": "The claim has two parts: (1) growing detachment from social conventions/domestic expectations ('abandoning her Tuesday reception days—which had been a sacred fixture of her household calendar') and (2) inability to articulate the change ('without offering any explanation even to herself'). Choice B satisfies both halves explicitly.",
        "hack": "Two-Part Checklist: Every SAT Literary Quotation question has two distinct clauses in the claim. Verify that your chosen quote proves BOTH clauses.",
        "trap_breakdown": {
          "A": "Describes only Edna's physical appearance.",
          "C": "Describes Mr. Pontellier's habits, not Edna's transformation.",
          "D": "Describes the family's summer travel routine."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 137,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Command of Evidence — Scientific Hypothesis Support (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "Plant physiologists investigating alpine cushion plants (such as Silene acaulis) hypothesized that their dense, hemispherical canopy structure acts as a thermal buffer that protects soil microbes beneath the plant from extreme diurnal temperature fluctuations, rather than merely warming the soil during daytime insolation. To test this hypothesis, the researchers placed temperature loggers 2 cm beneath cushion canopies and in adjacent bare alpine soil across a 30-day summer period.",
        "prompt": "Which finding from the temperature loggers, if true, would most directly support the physiologists' hypothesis?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "Soil beneath Silene acaulis canopies exhibited both a significantly lower daytime maximum temperature and a significantly higher nighttime minimum temperature than adjacent bare soil."
          },
          {
            "letter": "B",
            "text": "Soil beneath Silene acaulis canopies reached a daytime maximum temperature 6°C higher than that of adjacent bare soil, while nighttime minimum temperatures were identical in both locations."
          },
          {
            "letter": "C",
            "text": "Microbial biomass was higher in bare alpine soil located at lower elevations than beneath Silene acaulis canopies located at higher elevations."
          },
          {
            "letter": "D",
            "text": "The hemispherical canopy size of Silene acaulis correlated positively with the total number of daylight hours recorded during the 30-day period."
          }
        ],
        "correct": "A",
        "explanation": "The hypothesis states that the canopy acts as a 'thermal buffer that protects soil microbes... from extreme diurnal [day-night] temperature fluctuations, rather than merely warming the soil during daytime.' Showing that the canopy both lowers daytime peaks and raises nighttime lows (reducing the day-to-night temperature swing) directly proves buffering against diurnal fluctuations rather than daytime-only warming.",
        "hack": "Read the 'Rather Than' Clause: Whenever a hypothesis says 'X rather than Y,' the winning evidence MUST distinguish X (narrower day-night spread) from Y (daytime warming only).",
        "trap_breakdown": {
          "B": "Supports the rejected alternative ('merely warming the soil during daytime insolation') and actually increases the diurnal temperature swing.",
          "C": "Compares different elevations rather than testing thermal buffering by the canopy.",
          "D": "Measures canopy size vs. daylight hours, ignoring sub-canopy soil temperature swings."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 138,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Inferences — Economic & Game Theory Logic (750+ Tier)",
        "difficulty": "750–800 Challenge",
        "stem": "In classical auctions where bidders submit sealed bids and the highest bidder pays their own bid (first-price sealed-bid auctions), rational participants systematically 'shade' their bids below their true private valuation of the item to secure a positive surplus if they win. By contrast, economist William Vickrey demonstrated mathematically that in a second-price sealed-bid auction—where the highest bidder wins the item but pays the price offered by the second-highest bidder—the amount a winning bidder pays is independent of their own bid. Consequently, in a second-price sealed-bid auction, ______",
        "prompt": "Which choice most logically completes the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "the seller is guaranteed to receive higher total revenue than in any first-price sealed-bid auction."
          },
          {
            "letter": "B",
            "text": "bidders no longer have a strategic incentive to shade their bids below their true private valuation of the item."
          },
          {
            "letter": "C",
            "text": "participants will deliberately bid above their true private valuation in order to inflate the price paid by rivals."
          },
          {
            "letter": "D",
            "text": "the second-highest bidder will frequently acquire the item at a price below the highest bidder's valuation."
          }
        ],
        "correct": "B",
        "explanation": "In a first-price auction, bidders shade their bids below true valuation because their own bid determines the price they pay if they win. In a second-price (Vickrey) auction, 'the amount a winning bidder pays is independent of their own bid.' Therefore, shading one's bid no longer reduces the price paid upon winning—it only risks losing an item one could have profitably won, eliminating the strategic incentive to shade below true valuation.",
        "hack": "Causal Removal Logic: Premise 1: Cause C (paying your own bid) creates Behavior B (bid shading). Premise 2: System 2 removes Cause C. Conclusion: Behavior B is no longer incentivized.",
        "trap_breakdown": {
          "A": "Out-of-scope comparison of seller revenue (known as revenue equivalence, not stated in text).",
          "C": "Bidding above true valuation risks winning and paying a second-highest bid that exceeds one's own valuation.",
          "D": "Contradicts the rule that 'the highest bidder wins the item.'"
        },
        "videoTutorial": {
          "title": "Digital SAT Reading Pacing & Module Order Strategy",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=STjlOnEH5sY",
          "videoId": "STjlOnEH5sY"
        }
      },
      {
        "id": 203,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Central Ideas — Adult Neurogenesis",
        "difficulty": "Module 1 Core",
        "stem": "Many neuroscientists long adhered to the hypothesis that adult neurogenesis—the birth of new neurons—ceased completely in the mammalian brain once maturity was reached. However, recent histological studies using carbon-14 dating on post-mortem human hippocampus samples have detected measurable rates of new cell integration throughout adulthood. While the exact cognitive role of these newly formed neurons remains subject to vigorous debate, the structural plasticity of the human brain is demonstrably more enduring than previously acknowledged.",
        "prompt": "Which choice best states the main idea of the text?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "Adult neurogenesis has been proven to reverse memory impairment in aging mammals."
          },
          {
            "letter": "B",
            "text": "Recent empirical findings challenge the traditional belief that neuron production ends in adulthood."
          },
          {
            "letter": "C",
            "text": "Carbon-14 dating is the only reliable methodology for analyzing hippocampal neurogenesis."
          },
          {
            "letter": "D",
            "text": "The structural plasticity of the mammalian brain decreases linearly across an organism's lifespan."
          }
        ],
        "correct": "B",
        "explanation": "The passage contrasts the traditional view ('adult neurogenesis ceased completely... once maturity was reached') with recent carbon-14 histological evidence showing 'measurable rates of new cell integration throughout adulthood.'",
        "hack": "Old Consensus + 'However' Pivot = The main idea is the new discovery that overturns the old consensus.",
        "trap_breakdown": {
          "A": "Unsupported leap: the text says the 'exact cognitive role... remains subject to vigorous debate.'",
          "C": "Extreme modifier trap ('the only reliable methodology').",
          "D": "Contradicts 'demonstrably more enduring than previously acknowledged.'"
        },
        "videoTutorial": {
          "title": "Digital SAT Reading Pacing & Module Order Strategy",
          "channel": "Settele Tutoring",
          "url": "https://www.youtube.com/watch?v=STjlOnEH5sY",
          "videoId": "STjlOnEH5sY"
        }
      },
      {
        "id": 204,
        "section": "Reading & Writing",
        "domain": "Craft & Structure",
        "skill": "Cross-Text Connections — Vertical Farming Thermodynamics",
        "difficulty": "Module 2 Hard",
        "stem": "Text 1\nAdvocates of vertical farming argue that cultivating crops indoors within stacked urban layers is the most viable solution to agricultural land degradation. By utilizing automated LED lighting spectra and closed-loop hydroponic systems, vertical farms consume up to 95% less water than traditional open-field agriculture while completely eliminating chemical pesticide runoff into local waterways.\n\nText 2\nAgricultural economist Dr. Marcus Vance cautions that vertical farming’s eco-friendly reputation overlooks severe thermodynamic limitations. The electrical energy required to power artificial lighting arrays and high-capacity climate-control equipment generates an immense carbon footprint unless the facility is tied directly to dedicated zero-emission renewable energy grids, which are currently cost-prohibitive in most metropolitan centers.",
        "prompt": "Based on the texts, how would Dr. Vance (Text 2) most likely respond to the claims made in Text 1 regarding environmental benefits?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "By disputing that hydroponic facilities achieve significant reductions in agricultural water consumption."
          },
          {
            "letter": "B",
            "text": "By arguing that pesticide runoff is less detrimental to waterways than commonly reported."
          },
          {
            "letter": "C",
            "text": "By asserting that operational energy demands may offset the ecological gains highlighted by proponents."
          },
          {
            "letter": "D",
            "text": "By recommending that vertical farming initiatives be moved strictly to rural locations."
          }
        ],
        "correct": "C",
        "explanation": "Text 1 highlights water and runoff reductions. Dr. Vance in Text 2 argues that the high electricity demand of lighting and climate control generates 'an immense carbon footprint' that undermines the eco-friendly reputation unless powered by dedicated zero-emission grids.",
        "hack": "Cross-Text Qualification: Author 2 doesn't deny Author 1's water facts; instead, Author 2 introduces a hidden cost (energy carbon footprint) that offsets those benefits.",
        "trap_breakdown": {
          "A": "Dr. Vance never disputes the 95% water reduction.",
          "B": "Pesticide runoff is not questioned in Text 2.",
          "D": "Rural relocation is never mentioned."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing Full Walkthrough",
          "channel": "Hayden Rhodea SAT",
          "url": "https://www.youtube.com/watch?v=mBe2ghoUrPk",
          "videoId": "mBe2ghoUrPk"
        }
      },
      {
        "id": 206,
        "section": "Reading & Writing",
        "domain": "Information & Ideas",
        "skill": "Rhetorical Synthesis — JWST NIRSpec Breakthrough",
        "difficulty": "Module 1 Core",
        "stem": "While researching a topic, a student has taken the following notes:\n• The James Webb Space Telescope (JWST) carries the Near-Infrared Spectrograph (NIRSpec).\n• NIRSpec can observe up to 100 astronomical objects simultaneously using a microshutter array.\n• In 2023, NIRSpec analyzed the atmospheric composition of exoplanet WASP-39b.\n• The transmission spectrum confirmed the presence of carbon dioxide and sulfur dioxide in WASP-39b’s atmosphere.\n• This was the first definitive detection of sulfur dioxide in any exoplanet atmosphere.",
        "prompt": "The student wants to highlight the specific scientific breakthrough achieved by NIRSpec on WASP-39b. Which choice most effectively uses the relevant information to accomplish this goal?",
        "type": "choice",
        "choices": [
          {
            "letter": "A",
            "text": "Equipped with a microshutter array, the JWST's NIRSpec instrument can analyze up to 100 astronomical bodies at the same time."
          },
          {
            "letter": "B",
            "text": "When NIRSpec observed exoplanet WASP-39b, it made the historic first definitive detection of sulfur dioxide in an exoplanetary atmosphere."
          },
          {
            "letter": "C",
            "text": "Among its various targets, the James Webb Space Telescope analyzed the atmosphere of exoplanet WASP-39b in 2023."
          },
          {
            "letter": "D",
            "text": "Sulfur dioxide and carbon dioxide are both molecules that can be identified via transmission spectra using NIRSpec."
          }
        ],
        "correct": "B",
        "explanation": "The prompt asks to highlight the 'specific scientific breakthrough achieved by NIRSpec on WASP-39b.' Choice B directly states both WASP-39b and the historic breakthrough ('first definitive detection of sulfur dioxide in an exoplanetary atmosphere').",
        "hack": "Goal-First Filter: Prompt asks for 'specific scientific breakthrough on WASP-39b' -> must include both 'WASP-39b' and 'first definitive detection of sulfur dioxide.'",
        "trap_breakdown": {
          "A": "Describes the microshutter array hardware, omitting WASP-39b and the breakthrough.",
          "C": "States that JWST analyzed WASP-39b but omits what was discovered.",
          "D": "Omits WASP-39b and the historic 'first detection' milestone."
        },
        "videoTutorial": {
          "title": "Digital SAT Reading & Writing: Rhetorical Synthesis Strategy",
          "channel": "Test Innovators",
          "url": "https://www.youtube.com/watch?v=cLDrVb2_0Jc",
          "videoId": "cLDrVb2_0Jc"
        }
      }
    ]
  }
};
