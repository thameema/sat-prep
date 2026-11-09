/**
 * DIGITAL SAT OPEN MASTERY CURRICULUM & QUESTION BANK
 * Comprehensive multi-paper repository covering Full Exams, Section Sprints, and Domain Drills.
 * Open-source format: Includes worked derivations, Desmos shortcuts, and College Board trap analyses.
 */

const CURRICULUM_DATA = {
  // ==========================================
  // FULL PRACTICE PAPERS (RW + MATH)
  // ==========================================
  full_test_1: {
    id: "full_test_1",
    title: "Exam 1: Full Diagnostic Mock",
    category: "Full Practice Exams",
    description: "25-question mixed diagnostic covering foundational Reading & Writing and Math with Desmos.",
    timeLimit: 35 * 60,
    questions: [
      {
        id: 101,
        section: "Reading & Writing",
        domain: "Craft & Structure",
        skill: "Words in Context",
        stem: "Ecologists studying the regeneration of temperate pine forests noted that controlled burns did not deplete topsoil nutrients as previously feared; rather, post-fire soil analyses demonstrated that the ash deposit served to ______ the presence of bioavailable potassium and phosphorus, accelerating seedling growth.",
        prompt: "Which choice completes the text with the most logical and precise word?",
        type: "choice",
        choices: [
          { letter: "A", text: "mitigate" },
          { letter: "B", text: "augment" },
          { letter: "C", text: "obscure" },
          { letter: "D", text: "fabricate" }
        ],
        correct: "B",
        explanation: "The transition 'rather' indicates a direct contrast to 'deplete.' Post-fire analyses showed the ash deposit increased nutrient availability, which accelerated seedling growth. 'Augment' means to increase, expand, or enlarge.",
        trap_breakdown: {
          A: "'Mitigate' means to lessen or relieve a negative condition. Ash does not lessen nutrients; it provides them.",
          C: "'Obscure' means to hide or make unclear.",
          D: "'Fabricate' means to invent out of thin air or forge."
        },
        hack: "Rule: Contrast transition ('rather') + positive outcome ('accelerating') = word MUST mean increase/improve."
      },
      {
        id: 102,
        section: "Reading & Writing",
        domain: "Craft & Structure",
        skill: "Words in Context (Hard Module 2)",
        stem: "The biographer refused to depict the diplomat as a one-dimensional hero, recognizing that historical legacy is rarely unblemished; instead, she provided a nuanced account that did not shy away from the diplomat’s ______ tendencies during bilateral treaty negotiations.",
        prompt: "Which choice completes the text with the most logical and precise word?",
        type: "choice",
        choices: [
          { letter: "A", text: "duplicitous" },
          { letter: "B", text: "magnanimous" },
          { letter: "C", text: "exemplary" },
          { letter: "D", text: "fortuitous" }
        ],
        correct: "A",
        explanation: "The text states the diplomat was not a 'one-dimensional hero' and that historical legacy is 'rarely unblemished.' Therefore, the missing word must be a flawed or negative trait. 'Duplicitous' means deceitful, double-dealing, or dishonest.",
        trap_breakdown: {
          B: "'Magnanimous' means noble, generous, and forgiving (positive trait).",
          C: "'Exemplary' means model/worthy of imitation (positive trait).",
          D: "'Fortuitous' means occurring by happy chance."
        },
        hack: "Rule: 'Rarely unblemished' + 'did not shy away from' = must pick the critical/negative character trait."
      },
      {
        id: 103,
        section: "Reading & Writing",
        domain: "Information & Ideas",
        skill: "Central Ideas & Details",
        stem: "Many neuroscientists long adhered to the hypothesis that adult neurogenesis—the birth of new neurons—ceased completely in the mammalian brain once maturity was reached. However, recent histological studies using carbon-14 dating on post-mortem human hippocampus samples have detected measurable rates of new cell integration throughout adulthood. While the exact cognitive role of these newly formed neurons remains subject to vigorous debate, the structural plasticity of the human brain is demonstrably more enduring than previously acknowledged.",
        prompt: "Which choice best states the main idea of the text?",
        type: "choice",
        choices: [
          { letter: "A", text: "Adult neurogenesis has been proven to reverse memory impairment in aging mammals." },
          { letter: "B", text: "Recent empirical findings challenge the traditional belief that neuron production ends in adulthood." },
          { letter: "C", text: "Carbon-14 dating is the only reliable methodology for analyzing hippocampal neurogenesis." },
          { letter: "D", text: "The structural plasticity of the mammalian brain decreases linearly across an organism's lifespan." }
        ],
        correct: "B",
        explanation: "The passage pivots from the old consensus ('adult neurogenesis ceased') with 'However, recent histological studies... detected measurable rates... throughout adulthood.' The main idea is that empirical findings challenge the belief that neuron production ends at maturity.",
        hack: "Formula: Old Consensus ('long adhered') + Pivot ('However') = The Main Idea is the new scientific discovery."
      },
      {
        id: 104,
        section: "Reading & Writing",
        domain: "Craft & Structure",
        skill: "Cross-Text Connections",
        stem: "Text 1\nAdvocates of vertical farming argue that cultivating crops indoors within stacked urban layers is the most viable solution to agricultural land degradation. By utilizing automated LED lighting spectra and closed-loop hydroponic systems, vertical farms consume up to 95% less water than traditional open-field agriculture while completely eliminating chemical pesticide runoff into local waterways.\n\nText 2\nAgricultural economist Dr. Marcus Vance cautions that vertical farming’s eco-friendly reputation overlooks severe thermodynamic limitations. The electrical energy required to power artificial lighting arrays and high-capacity climate-control equipment generates an immense carbon footprint unless the facility is tied directly to dedicated zero-emission renewable energy grids, which are currently cost-prohibitive in most metropolitan centers.",
        prompt: "Based on the texts, how would Dr. Vance (Text 2) most likely respond to the claims made in Text 1 regarding environmental benefits?",
        type: "choice",
        choices: [
          { letter: "A", text: "By disputing that hydroponic facilities achieve significant reductions in agricultural water consumption." },
          { letter: "B", text: "By arguing that pesticide runoff is less detrimental to waterways than commonly reported." },
          { letter: "C", text: "By asserting that operational energy demands may offset the ecological gains highlighted by proponents." },
          { letter: "D", text: "By recommending that vertical farming initiatives be moved strictly to rural locations." }
        ],
        correct: "C",
        explanation: "Text 1 claims major eco-benefits (water savings, zero runoff). Text 2 argues that operational electricity for high-capacity lighting and climate control produces an immense carbon footprint that offsets those advertised gains.",
        hack: "Cross-Text Rule: Identify Author 2's specific critique and see how it directly qualifies or undermines Author 1's claim."
      },
      {
        id: 105,
        section: "Reading & Writing",
        domain: "Standard English Conventions",
        skill: "Sentence Boundaries",
        stem: "Biochemist Katalin Karikó spent decades refining the synthetic modification of messenger ______ her pioneering work on pseudouridine substitution directly prevented lethal inflammatory responses and enabled the rapid development of modern mRNA vaccines.",
        prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
        type: "choice",
        choices: [
          { letter: "A", text: "RNA, nevertheless," },
          { letter: "B", text: "RNA," },
          { letter: "C", text: "RNA;" },
          { letter: "D", text: "RNA" }
        ],
        correct: "C",
        explanation: "Both sides of the blank are complete independent clauses ('Katalin Karikó spent decades...' and 'her pioneering work directly prevented...'). Two independent clauses must be joined by a semicolon, period, or comma + FANBOYS.",
        hack: "Boundary Rule: Semicolon (;) = Period (.) = Comma + FANBOYS. A comma alone is an illegal comma splice."
      },
      {
        id: 106,
        section: "Reading & Writing",
        domain: "Standard English Conventions",
        skill: "Punctuation & Modifiers",
        stem: "Astronomer Cecilia Payne-Gaposchkin, having deduced that hydrogen and helium are the primary constituents of ______ overturned the prevailing scientific consensus that stars possessed the same elemental composition as Earth.",
        prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
        type: "choice",
        choices: [
          { letter: "A", text: "stars," },
          { letter: "B", text: "stars" },
          { letter: "C", text: "stars;" },
          { letter: "D", text: "stars:" }
        ],
        correct: "A",
        explanation: "The nonrestrictive participial phrase opened with a comma after the subject: 'Astronomer Cecilia Payne-Gaposchkin, having deduced that hydrogen and helium are the primary constituents of stars, overturned...' It must close with a comma before the main verb 'overturned.'",
        hack: "Appositive Rule: An interrupting nonessential modifier opened with a comma MUST close with a comma before the main verb."
      },
      {
        id: 107,
        section: "Reading & Writing",
        domain: "Standard English Conventions",
        skill: "Subject-Verb Agreement",
        stem: "The collection of fossilized marine bivalves, along with several amber fragments containing prehistoric insect inclusions, ______ currently housed in the university’s Department of Earth and Planetary Sciences.",
        prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
        type: "choice",
        choices: [
          { letter: "A", text: "are" },
          { letter: "B", text: "were" },
          { letter: "C", text: "is" },
          { letter: "D", text: "have been" }
        ],
        correct: "C",
        explanation: "The true subject is 'The collection' (singular). The prepositional phrase 'of fossilized marine bivalves, along with several amber fragments...' does not change the subject. Singular subject takes the singular verb 'is.'",
        hack: "S-V Agreement Hack: Cross out prepositional and additive phrases ('along with', 'as well as'). Match verb directly to the head noun."
      },
      {
        id: 108,
        section: "Reading & Writing",
        domain: "Standard English Conventions",
        skill: "Modifier Placement",
        stem: "Originating in the highlands of southwestern Ethiopia, ______",
        prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
        type: "choice",
        choices: [
          { letter: "A", text: "coffee trade networks expanded rapidly across the Arabian Peninsula during the fifteenth century." },
          { letter: "B", text: "the Arabian Peninsula witnessed the rapid expansion of coffee cultivation during the fifteenth century." },
          { letter: "C", text: "the Coffea arabica plant was cultivated and traded throughout the Arabian Peninsula in the fifteenth century." },
          { letter: "D", text: "traders transported Coffea arabica seeds across the Arabian Peninsula in the fifteenth century." }
        ],
        correct: "C",
        explanation: "The introductory descriptive phrase is 'Originating in the highlands of southwestern Ethiopia...' The noun immediately following the comma must be the entity that actually originated in Ethiopia: 'the Coffea arabica plant.'",
        hack: "Dangling Modifier Hack: Ask 'WHO or WHAT did the action in the opening phrase?' That noun must touch the comma immediately."
      },
      {
        id: 109,
        section: "Reading & Writing",
        domain: "Standard English Conventions",
        skill: "Transitions",
        stem: "For centuries, cartographers struggled to project the three-dimensional curvature of the Earth onto a flat surface without distorting either area or shape. In 1569, Gerardus Mercator developed a cylindrical conformal projection that preserved navigational angles, making compass bearings straight lines. ______, the Mercator projection drastically distorts the relative size of landmasses situated near polar latitudes, making Greenland appear equivalent in scale to the continent of Africa.",
        prompt: "Which choice completes the text with the most logical transition?",
        type: "choice",
        choices: [
          { letter: "A", text: "Furthermore," },
          { letter: "B", text: "However," },
          { letter: "C", text: "Consequently," },
          { letter: "D", text: "Specifically," }
        ],
        correct: "B",
        explanation: "The preceding sentence describes a major benefit (straight compass bearings). The next sentence details a major flaw (drastically distorts polar landmasses). This is a contrast, requiring 'However.'",
        hack: "Transition Hack: Strength followed by Flaw = Contrast ('However')."
      },
      {
        id: 110,
        section: "Reading & Writing",
        domain: "Information & Ideas",
        skill: "Rhetorical Synthesis",
        stem: "While researching a topic, a student has taken the following notes:\n• The James Webb Space Telescope (JWST) carries the Near-Infrared Spectrograph (NIRSpec).\n• NIRSpec can observe up to 100 astronomical objects simultaneously using a microshutter array.\n• In 2023, NIRSpec analyzed the atmospheric composition of exoplanet WASP-39b.\n• The transmission spectrum confirmed the presence of carbon dioxide and sulfur dioxide in WASP-39b’s atmosphere.\n• This was the first definitive detection of sulfur dioxide in any exoplanet atmosphere.",
        prompt: "The student wants to highlight the specific scientific breakthrough achieved by NIRSpec on WASP-39b. Which choice most effectively uses the relevant information to accomplish this goal?",
        type: "choice",
        choices: [
          { letter: "A", text: "Equipped with a microshutter array, the JWST's NIRSpec instrument can analyze up to 100 astronomical bodies at the same time." },
          { letter: "B", text: "When NIRSpec observed exoplanet WASP-39b, it made the historic first definitive detection of sulfur dioxide in an exoplanetary atmosphere." },
          { letter: "C", text: "Among its various targets, the James Webb Space Telescope analyzed the atmosphere of exoplanet WASP-39b in 2023." },
          { letter: "D", text: "Sulfur dioxide and carbon dioxide are both molecules that can be identified via transmission spectra using NIRSpec." }
        ],
        correct: "B",
        explanation: "The prompt asks to highlight the specific scientific breakthrough achieved on WASP-39b. Choice B directly names the historic first definitive detection of sulfur dioxide in an exoplanetary atmosphere.",
        hack: "Rhetorical Synthesis Hack: NEVER read the bullets first! Read ONLY the prompt instruction, then pick the choice that matches that exact goal."
      },
      {
        id: 111,
        section: "Math",
        domain: "Algebra",
        skill: "Linear Systems with Constants",
        stem: "3x - 5y = 14\nkx - 15y = 42\n\nIn the system of equations above, k is a constant. If the system has infinitely many solutions, what is the value of k?",
        prompt: "Select the correct value of k:",
        type: "choice",
        choices: [
          { letter: "A", text: "3" },
          { letter: "B", text: "6" },
          { letter: "C", text: "9" },
          { letter: "D", text: "15" }
        ],
        correct: "C",
        desmosEquation: ["3x - 5y = 14", "kx - 15y = 42"],
        explanation: "For a system to have infinitely many solutions, the two equations must be identical lines (same slope, same y-intercept). In 3x - 5y = 14 and kx - 15y = 42, the second equation's constants (-15 and 42) are exactly 3 times the first (-5 and 14). Therefore, k must also be 3 * 3 = 9.",
        hack: "Desmos Keystrokes:\n1. Type: 3x - 5y = 14\n2. Type: kx - 15y = 42 (add slider for k)\n3. Slide k to 9. The two lines overlap perfectly!"
      },
      {
        id: 112,
        section: "Math",
        domain: "Algebra",
        skill: "Linear Inequality Modeling",
        stem: "A hospital volunteer coordinator needs to assemble hygiene care packages. Large packages require 4 bottles of antiseptic wash and 6 rolls of bandages. Small packages require 2 bottles of antiseptic wash and 2 rolls of bandages.\n\nThe coordinator has a maximum budget allowance providing no more than 60 bottles of antiseptic wash and 72 rolls of bandages. If the coordinator must prepare at least 8 large packages, what is the maximum number of small packages that can be assembled?",
        prompt: "Select the maximum number of small packages:",
        type: "choice",
        choices: [
          { letter: "A", text: "10" },
          { letter: "B", text: "12" },
          { letter: "C", text: "14" },
          { letter: "D", text: "18" }
        ],
        correct: "B",
        desmosEquation: ["4(8) + 2y <= 60", "6(8) + 2y <= 72"],
        explanation: "To maximize small packages S, set large packages L to its minimum (L = 8). Wash: 4(8) + 2S <= 60 -> 2S <= 28 -> S <= 14. Bandages: 6(8) + 2S <= 72 -> 2S <= 24 -> S <= 12. Both constraints must hold, so the maximum is S = 12.",
        hack: "Desmos Shortcut:\nType: 4(8) + 2y <= 60 and 6(8) + 2y <= 72. Look at the upper boundary on the y-axis: it caps at y = 12."
      },
      {
        id: 113,
        section: "Math",
        domain: "Advanced Math",
        skill: "Quadratic Trajectory & Vertex",
        stem: "A model rocket is launched vertically from an elevated platform. Its height above the ground h(t), in feet, t seconds after launch is modeled by the function:\n\nh(t) = -16t^2 + 80t + 96\n\nWhat is the maximum height, in feet, reached by the rocket?",
        prompt: "Select the maximum height:",
        type: "choice",
        choices: [
          { letter: "A", text: "80" },
          { letter: "B", text: "144" },
          { letter: "C", text: "196" },
          { letter: "D", text: "256" }
        ],
        correct: "C",
        desmosEquation: ["y = -16x^2 + 80x + 96"],
        explanation: "The vertex of downward parabola h(t) = -16t^2 + 80t + 96 occurs at t = -b / (2a) = -80 / (2 * -16) = 2.5 seconds. Substitute t = 2.5: h(2.5) = -16(6.25) + 80(2.5) + 96 = -100 + 200 + 96 = 196 feet.",
        hack: "Desmos 5-Second Click:\n1. Type: y = -16x^2 + 80x + 96\n2. Click the top peak (vertex). Desmos displays (2.5, 196). Height = 196!"
      },
      {
        id: 114,
        section: "Math",
        domain: "Advanced Math",
        skill: "Discriminant Analysis",
        stem: "2x^2 - 8x + c = 0\n\nIn the quadratic equation above, c is a constant. If the equation has exactly one distinct real solution, what is the value of c?",
        prompt: "Select the value of c:",
        type: "choice",
        choices: [
          { letter: "A", text: "-8" },
          { letter: "B", text: "4" },
          { letter: "C", text: "8" },
          { letter: "D", text: "16" }
        ],
        correct: "C",
        desmosEquation: ["y = 2x^2 - 8x + c"],
        explanation: "A quadratic equation 2x^2 - 8x + c = 0 has exactly one real solution when its discriminant equals zero: b^2 - 4ac = 0. (-8)^2 - 4(2)(c) = 0 -> 64 - 8c = 0 -> c = 8.",
        hack: "Desmos Shortcut:\nType: y = 2x^2 - 8x + c with slider for c. Move slider until the vertex touches the x-axis (tangent at y=0). At c = 8, it touches once."
      },
      {
        id: 115,
        section: "Math",
        domain: "Advanced Math",
        skill: "Nonlinear System Intersection",
        stem: "y = x^2 - 4x + 3\ny = 2x - 2\n\nThe solutions to the system of equations above are (x1, y1) and (x2, y2), where x2 > x1. What is the value of x2 - y1?",
        prompt: "Select the value of x2 - y1:",
        type: "choice",
        choices: [
          { letter: "A", text: "1" },
          { letter: "B", text: "3" },
          { letter: "C", text: "5" },
          { letter: "D", text: "7" }
        ],
        correct: "C",
        desmosEquation: ["y = x^2 - 4x + 3", "y = 2x - 2"],
        explanation: "Equate y = x^2 - 4x + 3 and y = 2x - 2: x^2 - 6x + 5 = 0 -> (x - 1)(x - 5) = 0. Roots are x1 = 1, x2 = 5. Find y1: y1 = 2(1) - 2 = 0. Then x2 - y1 = 5 - 0 = 5.",
        hack: "Desmos Click Trick:\nType both equations into Desmos. Click the two grey intersection dots: (1, 0) and (5, 8). x2 = 5, y1 = 0 -> 5 - 0 = 5!"
      },
      {
        id: 116,
        section: "Math",
        domain: "Advanced Math",
        skill: "Exponential Modeling & Growth",
        stem: "A population of beneficial probiotic bacteria in a laboratory culture grows exponentially according to the function P(t) = P0 * b^t, where t is measured in hours. At t = 0, the culture contains 40 bacteria. At t = 3 hours, the culture contains 320 bacteria. How many bacteria will be present in the culture at t = 6 hours?",
        prompt: "Select the population at t = 6:",
        type: "choice",
        choices: [
          { letter: "A", text: "640" },
          { letter: "B", text: "1,280" },
          { letter: "C", text: "2,560" },
          { letter: "D", text: "5,120" }
        ],
        correct: "C",
        desmosEquation: ["y_1 ~ a * b^(x_1)"],
        explanation: "Initial population is 40. At t = 3, it grew to 320 (an 8-fold increase: 320 / 40 = 8). In the next 3 hours (from t = 3 to t = 6), it will multiply by 8 again: 320 * 8 = 2,560.",
        hack: "Exponential Pattern Trick: In the first 3 hours, the population grew by 320 / 40 = 8x. In the next 3 hours (from t = 3 to t = 6), it must also grow by 8x: 320 * 8 = 2,560!"
      },
      {
        id: 117,
        section: "Math",
        domain: "Geometry",
        skill: "Circle Equation & Radius",
        stem: "x^2 + y^2 - 10x + 6y = 47\n\nThe equation of a circle in the xy-plane is shown above. What is the radius of the circle?",
        prompt: "Select the radius:",
        type: "choice",
        choices: [
          { letter: "A", text: "sqrt(47)" },
          { letter: "B", text: "7" },
          { letter: "C", text: "9" },
          { letter: "D", text: "12" }
        ],
        correct: "C",
        desmosEquation: ["x^2 + y^2 - 10x + 6y = 47"],
        explanation: "Complete square: (x - 5)^2 - 25 + (y + 3)^2 - 9 = 47 -> (x - 5)^2 + (y + 3)^2 = 81. Radius r = sqrt(81) = 9.",
        hack: "Desmos 10-Second Diameter Trick:\n1. Paste: x^2 + y^2 - 10x + 6y = 47\n2. Click left edge (-4, -3) and right edge (14, -3).\n3. Diameter = 18 -> Radius = 9."
      },
      {
        id: 118,
        section: "Math",
        domain: "Geometry & Trigonometry",
        skill: "Complementary Angles",
        stem: "In right triangle PQR where angle Q is 90°, if sin(P) = 7/25, what is the value of cos(R)?",
        prompt: "Select the value of cos(R):",
        type: "choice",
        choices: [
          { letter: "A", text: "7/25" },
          { letter: "B", text: "24/25" },
          { letter: "C", text: "7/24" },
          { letter: "D", text: "25/24" }
        ],
        correct: "A",
        explanation: "In right triangle PQR where Q is 90°, P and R are complementary (P + R = 90°). Therefore sin(P) = cos(90° - P) = cos(R). Since sin(P) = 7/25, then cos(R) = 7/25.",
        hack: "Golden SAT Trig Identity: In right triangles, sin(A) = cos(B) ALWAYS. Zero calculation needed!"
      },
      {
        id: 119,
        section: "Math",
        domain: "Geometry",
        skill: "Similar Triangles & Area Ratios",
        stem: "Triangle ABC is similar to triangle DEF, such that vertices A, B, and C correspond to vertices D, E, and F, respectively. The length of side AB is 8 centimeters, and the length of corresponding side DE is 24 centimeters. If the area of triangle ABC is 15 square centimeters, what is the area, in square centimeters, of triangle DEF?",
        prompt: "Select the area of triangle DEF:",
        type: "choice",
        choices: [
          { letter: "A", text: "45" },
          { letter: "B", text: "90" },
          { letter: "C", text: "120" },
          { letter: "D", text: "135" }
        ],
        correct: "D",
        explanation: "Side scale factor k = 24 / 8 = 3. Area scales as k^2 = 3^2 = 9. Area of DEF = 15 * 9 = 135 cm^2.",
        hack: "Scale Factor Rule: Length scales by k; Area scales by k^2; Volume scales by k^3. Never multiply area by just k!"
      },
      {
        id: 120,
        section: "Math",
        domain: "Problem Solving & Data Analysis",
        skill: "Standard Deviation Shift",
        stem: "Data Set X consists of 7 integers: {12, 15, 18, 21, 24, 27, 30}.\nData Set Y is created by adding 15 to each value in Data Set X: {27, 30, 33, 36, 39, 42, 45}.\n\nWhich statement correctly compares the mean and the standard deviation of Data Set X and Data Set Y?",
        prompt: "Select the correct statement:",
        type: "choice",
        choices: [
          { letter: "A", text: "The mean of Data Set Y is greater, and the standard deviation of Data Set Y is greater." },
          { letter: "B", text: "The mean of Data Set Y is greater, and the standard deviation of Data Set Y is equal." },
          { letter: "C", text: "The mean of Data Set Y is equal, and the standard deviation of Data Set Y is greater." },
          { letter: "D", text: "Both the mean and standard deviation are equal." }
        ],
        correct: "B",
        explanation: "Adding a constant (+15) shifts every number right by 15, so the mean increases by 15. But standard deviation measures spread/distances between numbers. Since all numbers shifted together, the spread is identical.",
        hack: "SAT Statistics Law: Adding/subtracting a constant changes Mean and Median, but NEVER changes Standard Deviation or Range!"
      },
      {
        id: 121,
        section: "Math",
        domain: "Algebra",
        skill: "Rational Equations (Grid-In)",
        stem: "5 / (x - 2) = 3 / (x + 6)\n\nWhat real value of x satisfies the equation above?",
        prompt: "Enter the value of x:",
        type: "gridin",
        correct: "-18",
        desmosEquation: ["y = 5/(x - 2)", "y = 3/(x + 6)"],
        explanation: "Cross-multiply: 5(x + 6) = 3(x - 2) -> 5x + 30 = 3x - 6 -> 2x = -36 -> x = -18.",
        hack: "Desmos Keystrokes:\n1. Type: y = 5/(x - 2)\n2. Type: y = 3/(x + 6)\n3. Zoom out to find where the graphs cross: (-18, -0.25). The answer is x = -18."
      },
      {
        id: 122,
        section: "Math",
        domain: "Problem Solving & Data Analysis",
        skill: "Successive Percent Change (Grid-In)",
        stem: "A diagnostic medical lab kit is priced at k dollars. During a vendor promotion in October, the price is reduced by 20%. In November, the promotional price is increased by 25%. The final price in November is equal to m * k. What is the value of m?",
        prompt: "Enter the value of m (as a decimal):",
        type: "gridin",
        correct: "1",
        explanation: "20% reduction = 0.80k. Then 25% increase = (0.80k) * 1.25 = 1.00k. Therefore m = 1 (or 1.0).",
        hack: "Fraction Hack: 20% down = 4/5. 25% up = 5/4. (4/5) * (5/4) = 1. Back to exactly 100%!"
      }
    ]
  },

  // ==========================================
  // SECTION SPRINTS: MATH ONLY
  // ==========================================
  math_sprint_1: {
    id: "math_sprint_1",
    title: "⚡ Math Section Sprint: Pure Math & Desmos",
    category: "Subject Sprints",
    description: "Intensive 15-question Math module with Desmos keystrokes for every problem.",
    timeLimit: 25 * 60,
    questions: [
      {
        id: 201,
        section: "Math",
        domain: "Algebra",
        skill: "Linear Systems (No Solution)",
        stem: "4x - 6y = 10\n2x - 3y = c\n\nIn the system of equations above, c is a constant. If the system has NO solution, which of the following could be the value of c?",
        prompt: "Select the value of c:",
        type: "choice",
        choices: [
          { letter: "A", text: "5" },
          { letter: "B", text: "10" },
          { letter: "C", text: "15" },
          { letter: "D", text: "Any real number" }
        ],
        correct: "C",
        desmosEquation: ["4x - 6y = 10", "2x - 3y = c"],
        explanation: "The first equation is 2 times the second equation. If 2c = 10 (c = 5), the lines are identical (infinite solutions). Any value OTHER than 5 produces parallel lines with NO solution. Therefore, c = 15 yields no solution.",
        hack: "Desmos Keystrokes:\n1. Type: 4x - 6y = 10\n2. Type: 2x - 3y = 15 (lines are parallel = 0 solutions)."
      },
      {
        id: 202,
        section: "Math",
        domain: "Algebra",
        skill: "Absolute Value Equations",
        stem: "|2x - 7| = 15\n\nWhat is the sum of the solutions to the equation above?",
        prompt: "Select the sum of the solutions:",
        type: "choice",
        choices: [
          { letter: "A", text: "0" },
          { letter: "B", text: "7" },
          { letter: "C", text: "14" },
          { letter: "D", text: "15" }
        ],
        correct: "B",
        desmosEquation: ["y = |2x - 7|", "y = 15"],
        explanation: "Case 1: 2x - 7 = 15 -> 2x = 22 -> x = 11.\nCase 2: 2x - 7 = -15 -> 2x = -8 -> x = -4.\nSum of solutions: 11 + (-4) = 7.",
        hack: "Sum Shortcut: For |ax - b| = c, the sum of solutions is 2 * (b/a). Here: 2 * (7/2) = 7!"
      },
      {
        id: 203,
        section: "Math",
        domain: "Advanced Math",
        skill: "Factoring & Zeros of Quadratics",
        stem: "g(x) = (2x - 5)(3x + 12)\n\nWhat is the sum of the zeros of the function g?",
        prompt: "Select the sum of the zeros:",
        type: "choice",
        choices: [
          { letter: "A", text: "-1.5" },
          { letter: "B", text: "-0.5" },
          { letter: "C", text: "1.5" },
          { letter: "D", text: "6.5" }
        ],
        correct: "A",
        desmosEquation: ["y = (2x - 5)(3x + 12)"],
        explanation: "Zero 1: 2x - 5 = 0 -> x = 2.5.\nZero 2: 3x + 12 = 0 -> x = -4.\nSum = 2.5 + (-4) = -1.5.",
        hack: "Desmos 5-Second Click: Type y = (2x - 5)(3x + 12). Click the x-intercepts: (-4, 0) and (2.5, 0). Add them: -1.5."
      },
      {
        id: 204,
        section: "Math",
        domain: "Advanced Math",
        skill: "Nonlinear System Intersections",
        stem: "x^2 + y^2 = 25\ny = x - 1\n\nThe solutions to the system of equations above are (x1, y1) and (x2, y2), where x1 > x2. What is the value of x1?",
        prompt: "Select the value of x1:",
        type: "choice",
        choices: [
          { letter: "A", text: "3" },
          { letter: "B", text: "4" },
          { letter: "C", text: "5" },
          { letter: "D", text: "7" }
        ],
        correct: "B",
        desmosEquation: ["x^2 + y^2 = 25", "y = x - 1"],
        explanation: "Substitute y = x - 1 into circle: x^2 + (x - 1)^2 = 25 -> 2x^2 - 2x - 24 = 0 -> (x - 4)(x + 3) = 0. The larger root is x1 = 4.",
        hack: "Desmos Click Trick: Type both equations. Click the intersection dots: (-3, -4) and (4, 3). Larger x = 4."
      },
      {
        id: 205,
        section: "Math",
        domain: "Advanced Math",
        skill: "Quadratic Vertex Form Conversion",
        stem: "f(x) = -2x^2 + 12x - 10\n\nWhich of the following equivalent forms of f(x) displays the maximum value of the function as a constant or coefficient?",
        prompt: "Select the correct form:",
        type: "choice",
        choices: [
          { letter: "A", text: "f(x) = -2(x - 3)^2 + 8" },
          { letter: "B", text: "f(x) = -2(x - 1)(x - 5)" },
          { letter: "C", text: "f(x) = -2(x^2 - 6x + 5)" },
          { letter: "D", text: "f(x) = -(2x - 6)^2 + 8" }
        ],
        correct: "A",
        desmosEquation: ["y = -2x^2 + 12x - 10", "y = -2(x - 3)^2 + 8"],
        explanation: "The SAT code phrase 'displays maximum as a constant' ALWAYS means vertex form: a(x - h)^2 + k. Vertex is (3, 8), so f(x) = -2(x - 3)^2 + 8.",
        hack: "Rule: Pick the ONLY option written in vertex form a(x - h)^2 + k!"
      },
      {
        id: 206,
        section: "Math",
        domain: "Advanced Math",
        skill: "Rational Function Asymptotes & Holes",
        stem: "f(x) = (x - 3) / (x^2 - 9)\n\nAt what value of x does the graph of y = f(x) have a vertical asymptote?",
        prompt: "Select the vertical asymptote x-value:",
        type: "choice",
        choices: [
          { letter: "A", text: "x = -3 only" },
          { letter: "B", text: "x = 3 only" },
          { letter: "C", text: "Both x = -3 and x = 3" },
          { letter: "D", text: "There are no vertical asymptotes" }
        ],
        correct: "A",
        desmosEquation: ["y = (x - 3)/(x^2 - 9)"],
        explanation: "Factor denominator: (x - 3)/[(x - 3)(x + 3)]. The (x - 3) cancels, creating a HOLE at x = 3, not an asymptote. The remaining (x + 3) denominator creates a true vertical asymptote at x = -3.",
        hack: "Desmos Graphing: Graph the equation and zoom in. Curve passes right through x = 3, but shoots to infinity at x = -3!"
      },
      {
        id: 207,
        section: "Math",
        domain: "Algebra",
        skill: "Radical Equations & Extraneous Roots (Grid-In)",
        stem: "sqrt(3x + 16) = x + 2\n\nWhat is the solution to the equation above?",
        prompt: "Enter the real solution for x:",
        type: "gridin",
        correct: "3",
        desmosEquation: ["y = sqrt(3x + 16)", "y = x + 2"],
        explanation: "3x + 16 = x^2 + 4x + 4 -> x^2 + x - 12 = 0 -> (x + 4)(x - 3) = 0. x = -4 gives extraneous root sqrt(4) = -2 (false). x = 3 gives sqrt(25) = 5 (valid). Solution is x = 3.",
        hack: "Desmos Intersection: Graph y = sqrt(3x + 16) and y = x + 2. Intersection is (3, 5). Desmos automatically eliminates extraneous roots!"
      },
      {
        id: 208,
        section: "Math",
        domain: "Algebra",
        skill: "Exponential Base Equality (Grid-In)",
        stem: "3^(2x - 1) = 27^(x - 2)\n\nWhat is the value of x in the equation above?",
        prompt: "Enter the value of x:",
        type: "gridin",
        correct: "5",
        desmosEquation: ["y = 3^(2x - 1)", "y = 27^(x - 2)"],
        explanation: "27 = 3^3 -> 27^(x - 2) = 3^(3x - 6). Equate exponents: 2x - 1 = 3x - 6 -> x = 5.",
        hack: "Desmos Intersection: Graph y = 3^(2x - 1) and y = 27^(x - 2). They intersect at x = 5."
      }
    ]
  },

  // ==========================================
  // SECTION SPRINTS: READING & WRITING ONLY
  // ==========================================
  rw_sprint_1: {
    id: "rw_sprint_1",
    title: "📖 Reading & Writing Section Sprint",
    category: "Subject Sprints",
    description: "12-question verbal sprint covering nuanced vocabulary, grammar boundaries, and inferences.",
    timeLimit: 18 * 60,
    questions: [
      {
        id: 301,
        section: "Reading & Writing",
        domain: "Craft & Structure",
        skill: "Words in Context",
        stem: "Although the archival records from the seventeenth-century trading post were long believed to be entirely lost, recent architectural excavations at the harbor site have managed to ______ key ledgers and bills of lading, illuminating previously unknown maritime trade routes.",
        prompt: "Which choice completes the text with the most logical and precise word?",
        type: "choice",
        choices: [
          { letter: "A", text: "fabricate" },
          { letter: "B", text: "retrieve" },
          { letter: "C", text: "relinquish" },
          { letter: "D", text: "repudiate" }
        ],
        correct: "B",
        explanation: "The pivot 'Although... were long believed lost' requires a word showing they were recovered. 'Retrieve' means to find and bring back.",
        hack: "Clue: 'believed lost' + 'excavations managed to [find]' = retrieve."
      },
      {
        id: 302,
        section: "Reading & Writing",
        domain: "Craft & Structure",
        skill: "Words in Context (Hard Module 2)",
        stem: "The clinical research director noted that while preliminary animal trials suggested the novel compound held promise, its long-term physiological efficacy in humans remained strictly ______ until double-blind clinical trials could be completed.",
        prompt: "Which choice completes the text with the most logical and precise word?",
        type: "choice",
        choices: [
          { letter: "A", text: "hypothetical" },
          { letter: "B", text: "salutary" },
          { letter: "C", text: "ubiquitous" },
          { letter: "D", text: "irreproachable" }
        ],
        correct: "A",
        explanation: "Because human trials are not yet completed, efficacy in humans is not confirmed. It remains theoretical or 'hypothetical.'",
        hack: "Rule: 'remained [unconfirmed] until double-blind trials completed' = hypothetical."
      },
      {
        id: 303,
        section: "Reading & Writing",
        domain: "Information & Ideas",
        skill: "Central Ideas & Details",
        stem: "Bioluminescence in deep-sea cephalopods serves multiple evolutionary functions beyond basic illumination. While counterillumination—emitting ventral light to match downwelling sunlight and camouflage from predators below—is the most thoroughly documented adaptation, recent photographic evidence reveals that several squid species produce sudden, blinding photophore flashes to disorient attacking cetaceans. Furthermore, species-specific luminous patterning along the tentacular clubs suggests that bioluminescence also plays an essential role in intraspecific reproductive signaling.",
        prompt: "Which choice best states the primary purpose of the text?",
        type: "choice",
        choices: [
          { letter: "A", text: "To dispute the hypothesis that counterillumination provides effective camouflage." },
          { letter: "B", text: "To demonstrate that cephalopod bioluminescence serves diverse survival and reproductive purposes." },
          { letter: "C", text: "To argue that cephalopods rely on bioluminescence exclusively for hunting." },
          { letter: "D", text: "To prove that cetaceans are incapable of detecting luminous cephalopod patterning." }
        ],
        correct: "B",
        explanation: "The passage opens by stating bioluminescence 'serves multiple evolutionary functions' and details three purposes: camouflage, predator defense, and reproductive signaling. Option B accurately states this comprehensive idea.",
        hack: "Main Idea Tip: Notice 'multiple evolutionary functions.' The correct answer must be broad."
      },
      {
        id: 304,
        section: "Reading & Writing",
        domain: "Standard English Conventions",
        skill: "Sentence Boundaries (Colons)",
        stem: "During the 1920s Harlem Renaissance, sculptor Augusta Savage established an influential community art studio with an ambitious ______ to provide free artistic mentorship to aspiring African American painters and sculptors who faced racial exclusion from mainstream institutions.",
        prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
        type: "choice",
        choices: [
          { letter: "A", text: "mission:" },
          { letter: "B", text: "mission;" },
          { letter: "C", text: "mission," },
          { letter: "D", text: "mission" }
        ],
        correct: "A",
        explanation: "Before the blank is an independent clause. A colon introduces the explanation or definition of that 'ambitious mission.'",
        hack: "Colon Law: What comes BEFORE must be a full sentence. What follows defines or elaborates on the noun before the colon."
      },
      {
        id: 305,
        section: "Reading & Writing",
        domain: "Standard English Conventions",
        skill: "Subject-Verb Agreement (Inverted Syntax)",
        stem: "Deep beneath the Antarctic ice sheet, shielded from solar radiation and atmospheric contact for millennia, ______ subglacial Lake Vostok, which harbors unique microbial ecosystems.",
        prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
        type: "choice",
        choices: [
          { letter: "A", text: "lie" },
          { letter: "B", text: "lies" },
          { letter: "C", text: "are lying" },
          { letter: "D", text: "have lain" }
        ],
        correct: "B",
        explanation: "The true grammatical subject is 'subglacial Lake Vostok' (singular). Therefore, it requires the singular verb 'lies.'",
        hack: "Inverted Sentence Tip: When a sentence starts with location phrases, look AFTER the verb for the subject!"
      },
      {
        id: 306,
        section: "Reading & Writing",
        domain: "Standard English Conventions",
        skill: "Transitions",
        stem: "When urban planners in Curitiba, Brazil, redesigned the city’s transit network in 1974, they prioritized dedicated surface bus lanes over an expensive underground subway. ______, Curitiba built the world’s first Bus Rapid Transit (BRT) system at a fraction of the capital cost, providing high-frequency transit while avoiding municipal debt.",
        prompt: "Which choice completes the text with the most logical transition?",
        type: "choice",
        choices: [
          { letter: "A", text: "In contrast," },
          { letter: "B", text: "Consequently," },
          { letter: "C", text: "Nonetheless," },
          { letter: "D", text: "Previously," }
        ],
        correct: "B",
        explanation: "Sentence 1 describes the planning decision. Sentence 2 describes the direct resulting achievement. This is cause and effect ('Consequently').",
        hack: "Transition Tip: Plan -> Result = Cause & Effect ('Consequently')."
      }
    ]
  },

  // ==========================================
  // TOPIC DRILLS: ALGEBRA & DESMOS
  // ==========================================
  drill_algebra: {
    id: "drill_algebra",
    title: "📐 Algebra & Desmos Constants Drill",
    category: "Topic Drills",
    description: "Master unknown constants (k, c), linear systems, and boundary inequalities.",
    timeLimit: 15 * 60,
    questions: [
      {
        id: 401,
        section: "Math",
        domain: "Algebra",
        skill: "Linear Systems with Constants",
        stem: "3x - 5y = 14\nkx - 15y = 42\n\nIn the system of equations above, k is a constant. If the system has infinitely many solutions, what is the value of k?",
        prompt: "Select the correct value of k:",
        type: "choice",
        choices: [
          { letter: "A", text: "3" },
          { letter: "B", text: "6" },
          { letter: "C", text: "9" },
          { letter: "D", text: "15" }
        ],
        correct: "C",
        desmosEquation: ["3x - 5y = 14", "kx - 15y = 42"],
        explanation: "Both equations must represent identical lines. Equation 2 is 3 times Equation 1 (-15 = 3 * -5, 42 = 3 * 14). Therefore k = 3 * 3 = 9.",
        hack: "Desmos Slider: Type both equations. Add slider for k. Slide to 9: lines merge."
      },
      {
        id: 402,
        section: "Math",
        domain: "Algebra",
        skill: "Linear Systems (No Solution)",
        stem: "4x - 6y = 10\n2x - 3y = c\n\nIn the system of equations above, c is a constant. If the system has NO solution, which of the following could be the value of c?",
        prompt: "Select the value of c:",
        type: "choice",
        choices: [
          { letter: "A", text: "5" },
          { letter: "B", text: "10" },
          { letter: "C", text: "15" },
          { letter: "D", text: "Any real number" }
        ],
        correct: "C",
        desmosEquation: ["4x - 6y = 10", "2x - 3y = c"],
        explanation: "Parallel lines require identical slope but different intercepts. If c = 5, lines are identical (infinite solutions). Any value other than 5 produces parallel lines with no solution. Pick 15.",
        hack: "Desmos Graphing: Type 4x - 6y = 10 and 2x - 3y = 15. The lines never cross (no solution)."
      },
      {
        id: 403,
        section: "Math",
        domain: "Algebra",
        skill: "Rational Equations (Grid-In)",
        stem: "5 / (x - 2) = 3 / (x + 6)\n\nWhat real value of x satisfies the equation above?",
        prompt: "Enter the value of x:",
        type: "gridin",
        correct: "-18",
        desmosEquation: ["y = 5/(x - 2)", "y = 3/(x + 6)"],
        explanation: "5(x + 6) = 3(x - 2) -> 5x + 30 = 3x - 6 -> 2x = -36 -> x = -18.",
        hack: "Desmos Intersection: Graph y = 5/(x - 2) and y = 3/(x + 6). They cross at x = -18."
      }
    ]
  }
};
