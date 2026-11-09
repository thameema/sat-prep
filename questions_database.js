/**
 * DIGITAL SAT DAILY CURRICULUM DATABASE
 * Prepared for Hamna | Target: 1450+ | Frisco ISD
 * Curated from College Board Educator Question Bank & OpenBoard SAT Archives
 */

const CURRICULUM_DATA = {
  day1: {
    title: "📅 Day 1: Diagnostic & Desmos Speed",
    level: "Level 1: Foundations",
    questions: [
      {
        id: 1,
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
        hack: "Rule: Contrast transition ('rather') + positive outcome ('accelerating') = word MUST mean increase/improve."
      },
      {
        id: 2,
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
        hack: "Rule: 'Rarely unblemished' + 'did not shy away from' = must pick the critical/negative character trait."
      },
      {
        id: 3,
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
        id: 4,
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
        id: 5,
        section: "Reading & Writing",
        domain: "Information & Ideas",
        skill: "Command of Evidence (Quantitative)",
        stem: "Average Foraging Flight Time and Nectar Yield of Bombus impatiens Across Habitat Types:\n\n• Fragmented Urban: Flight 420m | Duration 38.4 min | Nectar Yield 14.2 mg\n• Continuous Prairie: Flight 185m | Duration 19.6 min | Nectar Yield 31.8 mg\n• Monoculture Agroecosystem: Flight 510m | Duration 44.2 min | Nectar Yield 11.5 mg\n• Suburban Floral Corridor: Flight 240m | Duration 22.1 min | Nectar Yield 27.6 mg\n\nAn entomologist hypothesizes that habitat fragmentation forces Bombus impatiens to expend disproportionate energetic reserves searching for floral patches, thereby reducing net foraging efficiency.",
        prompt: "Which choice from the data most directly supports the entomologist's hypothesis?",
        type: "choice",
        choices: [
          { letter: "A", text: "Bees in the Continuous Prairie traveled shorter flight distances (185 m) than bees in the Suburban Floral Corridor (240 m)." },
          { letter: "B", text: "Bees in the Fragmented Urban habitat required longer foraging durations (38.4 min) yet collected less than half the mean nectar yield (14.2 mg) of bees in the Continuous Prairie (31.8 mg)." },
          { letter: "C", text: "Bees in the Monoculture Agroecosystem experienced the longest foraging duration (44.2 min) among all surveyed groups." },
          { letter: "D", text: "The mean nectar yield in the Suburban Floral Corridor was 27.6 mg, which exceeded the yield in the Fragmented Urban habitat." }
        ],
        correct: "B",
        explanation: "The hypothesis links increased search exertion to diminished foraging efficiency. Choice B pairs longer foraging duration (38.4 min) in Fragmented Urban habitat with less than half the nectar yield (14.2 mg) of Continuous Prairie (31.8 mg).",
        hack: "Data Rule: Pick the choice that pairs BOTH the exertion cause (longer time) AND the efficiency effect (lower yield)."
      },
      {
        id: 6,
        section: "Reading & Writing",
        domain: "Information & Ideas",
        skill: "Inferences",
        stem: "In marine biology, the 'coral bleaching threshold' refers to sustained thermal anomalies that cause scleractinian corals to expel their symbiotic dinoflagellates (Symbiodiniaceae). Recent laboratory trials on Acropora hyacinthus colonies native to shallow reef flats with extreme diurnal temperature fluctuations revealed that these corals harbor epigenetic modifications that modulate heat-shock protein expression. When exposed to heat stress exceeding historical reef averages by 2.5°C, these pre-conditioned colonies retained their symbionts and exhibited minimal chlorophyll degradation, suggesting that ______",
        prompt: "Which choice most logically completes the text?",
        type: "choice",
        choices: [
          { letter: "A", text: "thermal stress inevitably leads to permanent loss of calcification capacity in shallow reef corals." },
          { letter: "B", text: "prior exposure to microclimate thermal variability may confer heightened resilience against elevated ocean temperatures." },
          { letter: "C", text: "dinoflagellate expulsion is solely triggered by changes in salinity rather than ocean temperature fluctuations." },
          { letter: "D", text: "Acropora hyacinthus will migrate away from shallow reef flats into deep pelagic ocean ecosystems." }
        ],
        correct: "B",
        explanation: "Corals from shallow flats with extreme diurnal temperature fluctuations suffered minimal damage and retained symbionts during +2.5°C thermal stress. The logical inference is that prior exposure to temperature swings builds resilience.",
        hack: "Inference Rule: Pick the most conservative conclusion directly tied to the data. Avoid extreme words like 'inevitably'."
      },
      {
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
        section: "Math",
        domain: "Advanced Math",
        skill: "Equivalent Rational Expressions",
        stem: "Which of the following expressions is equivalent to (3x^2 + 11x - 4) / (x + 4) for all x != -4?",
        prompt: "Select the equivalent expression:",
        type: "choice",
        choices: [
          { letter: "A", text: "3x - 1" },
          { letter: "B", text: "3x + 1" },
          { letter: "C", text: "3x - 4" },
          { letter: "D", text: "x - 1" }
        ],
        correct: "A",
        desmosEquation: ["y = (3x^2 + 11x - 4)/(x + 4)", "y = 3x - 1"],
        explanation: "Factor the numerator: 3x^2 + 11x - 4 = (3x - 1)(x + 4). Divide by (x + 4) gives 3x - 1.",
        hack: "Desmos Graph Matching:\n1. Type original: y = (3x^2 + 11x - 4)/(x + 4)\n2. Type Choice A: y = 3x - 1\n3. Both lines overlap everywhere!"
      },
      {
        id: 20,
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
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        id: 25,
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

  day2: {
    title: "📅 Day 2: Pacing & Grammar Sprints",
    level: "Level 1: Foundations",
    questions: [
      {
        id: 1,
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
        explanation: "The contrast pivot 'Although... were long believed to be entirely lost' requires a word showing they were found or brought back. 'Retrieve' means to recover or regain possession of.",
        hack: "Context Clue: 'long believed lost' + 'excavations have managed to [find]' = retrieve."
      },
      {
        id: 2,
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
        explanation: "The phrase 'until double-blind clinical trials could be completed' indicates the human efficacy is not yet confirmed or proven. Therefore, it is 'hypothetical' (based on assumption or theory rather than established fact).",
        hack: "Rule: 'While preliminary trials held promise... remained [unconfirmed] until trials completed' = hypothetical."
      },
      {
        id: 3,
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
        explanation: "The passage opens by stating bioluminescence 'serves multiple evolutionary functions beyond basic illumination' and provides three examples: camouflage (counterillumination), defensive disorientation (flashes), and reproductive signaling. Option B accurately captures this broad, multi-purpose thesis.",
        hack: "Main Idea Tip: Notice the phrase 'multiple evolutionary functions.' The correct answer will be broad, not limited to one single example."
      },
      {
        id: 4,
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
        explanation: "The clause before the blank ('During the 1920s Harlem Renaissance, sculptor Augusta Savage established an influential community art studio with an ambitious mission') is an independent clause. A colon (:) is used to introduce an explanation or elaboration of that mission.",
        hack: "Colon Law: What comes BEFORE a colon must be a complete independent clause. What follows explains or defines the noun right before the colon ('mission')."
      },
      {
        id: 5,
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
        explanation: "This is an inverted sentence where the prepositional phrases come first. The true grammatical subject is 'subglacial Lake Vostok' (singular). Therefore, it requires the singular verb 'lies.'",
        hack: "Inverted Sentence Alert: When a sentence starts with location phrases ('Deep beneath...'), look AFTER the verb to find the real subject! '[Lake Vostok] lies.'"
      },
      {
        id: 6,
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
        explanation: "The first sentence explains the prioritization of surface bus lanes. The second sentence gives the direct result: Curitiba successfully built the world's first BRT system. This is a cause-and-effect relationship, requiring 'Consequently.'",
        hack: "Transition Tip: Decision in Sentence 1 -> Result in Sentence 2 = Cause & Effect ('Consequently')."
      },
      {
        id: 7,
        section: "Reading & Writing",
        domain: "Standard English Conventions",
        skill: "Modifier Placement",
        stem: "Renowned for developing the mathematical foundation of computer programming, ______",
        prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
        type: "choice",
        choices: [
          { letter: "A", text: "an algorithm for Charles Babbage’s Analytical Engine was authored by Ada Lovelace in 1843." },
          { letter: "B", text: "Ada Lovelace published an annotated algorithm for the Analytical Engine in 1843." },
          { letter: "C", text: "the Analytical Engine was described in detailed notes by Ada Lovelace in 1843." },
          { letter: "D", text: "in 1843, an algorithm for calculating Bernoulli numbers was created by Ada Lovelace." }
        ],
        correct: "B",
        explanation: "The opening modifier is 'Renowned for developing the mathematical foundation of computer programming...' The noun that immediately follows the comma must be the person who holds that renown: 'Ada Lovelace.'",
        hack: "Dangling Modifier Hack: WHO is renowned? 'Ada Lovelace.' Put her name right after the comma!"
      },
      {
        id: 8,
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
        explanation: "Notice the coefficients: the first equation is 2 times the second equation (4x = 2 * 2x, -6y = 2 * -3y). For 'no solution', the lines must be parallel (same slope) but have different y-intercepts. If 2c = 10 -> c = 5, the lines are identical (infinitely many solutions). Any value OTHER than 5 produces parallel lines with NO solution. Among the choices, c = 15 yields no solution.",
        hack: "Desmos Keystrokes:\n1. Type: 4x - 6y = 10\n2. Type: 2x - 3y = 5 (they overlap = infinite)\n3. Type: 2x - 3y = 15 (they are parallel = zero solutions!). Pick 15!"
      },
      {
        id: 9,
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
        hack: "Absolute Value Sum Shortcut: For any equation |ax - b| = c, the sum of solutions is ALWAYS 2 * (b / a). Here: 2 * (7 / 2) = 7! Or in Desmos: graph y = |2x - 7| and y = 15. The x-intercepts are -4 and 11. -4 + 11 = 7!"
      },
      {
        id: 10,
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
        explanation: "Zero 1: 2x - 5 = 0 -> 2x = 5 -> x = 2.5.\nZero 2: 3x + 12 = 0 -> 3x = -12 -> x = -4.\nSum of zeros = 2.5 + (-4) = -1.5.",
        hack: "Desmos 5-Second Click:\nType: y = (2x - 5)(3x + 12). Click the two x-intercepts on the screen: (-4, 0) and (2.5, 0). Add them: -4 + 2.5 = -1.5!"
      },
      {
        id: 11,
        section: "Math",
        domain: "Advanced Math",
        skill: "Exponents & Fractional Powers",
        stem: "Which of the following expressions is equivalent to x^(5/3) * cbrt(x) for all x > 0?",
        prompt: "Select the equivalent expression:",
        type: "choice",
        choices: [
          { letter: "A", text: "x^2" },
          { letter: "B", text: "x^(5/9)" },
          { letter: "C", text: "x^(6/9)" },
          { letter: "D", text: "x^(8/3)" }
        ],
        correct: "A",
        explanation: "Recall that cbrt(x) = x^(1/3). When multiplying like bases, add the exponents: x^(5/3) * x^(1/3) = x^((5+1)/3) = x^(6/3) = x^2.",
        hack: "Exponents Law: Root of degree n is 1/n. (5/3) + (1/3) = 6/3 = 2."
      },
      {
        id: 12,
        section: "Math",
        domain: "Geometry",
        skill: "Circle Center & Radius",
        stem: "(x + 3)^2 + (y - 4)^2 = 49\n\nIn the xy-plane, the graph of the equation above is a circle. Which of the following points lies on the circle?",
        prompt: "Select the point on the circle:",
        type: "choice",
        choices: [
          { letter: "A", text: "(4, 4)" },
          { letter: "B", text: "(-3, 11)" },
          { letter: "C", text: "(0, 4)" },
          { letter: "D", text: "(-3, 4)" }
        ],
        correct: "B",
        desmosEquation: ["(x + 3)^2 + (y - 4)^2 = 49"],
        explanation: "The circle has center (-3, 4) and radius r = sqrt(49) = 7. A point 7 units directly above the center has coordinates (-3, 4 + 7) = (-3, 11). Test (-3, 11): (-3 + 3)^2 + (11 - 4)^2 = 0 + 7^2 = 49.",
        hack: "Desmos 5-Second Click:\n1. Type: (x + 3)^2 + (y - 4)^2 = 49\n2. Plot the answer points: (-3, 11) sits right on the top perimeter of the circle!"
      },
      {
        id: 13,
        section: "Math",
        domain: "Geometry & Trigonometry",
        skill: "Right Triangle Trigonometry",
        stem: "In a right triangle, one of the acute angles is theta. If tan(theta) = 3/4, what is the value of sin(theta)?",
        prompt: "Select the value of sin(theta):",
        type: "choice",
        choices: [
          { letter: "A", text: "3/5" },
          { letter: "B", text: "4/5" },
          { letter: "C", text: "3/7" },
          { letter: "D", text: "4/3" }
        ],
        correct: "A",
        explanation: "tan(theta) = opposite / adjacent = 3/4. In a right triangle with legs 3 and 4, the hypotenuse is the classic 3-4-5 Pythagorean triple: hypotenuse = sqrt(3^2 + 4^2) = 5. Therefore, sin(theta) = opposite / hypotenuse = 3/5.",
        hack: "Pythagorean Triple Alert: 3-4-5 is tested constantly on the SAT. If tan = 3/4, then sin = 3/5 and cos = 4/5 instantly."
      },
      {
        id: 14,
        section: "Math",
        domain: "Problem Solving & Data Analysis",
        skill: "Linear Cost Modeling",
        stem: "A commercial equipment rental agency charges a flat equipment reservation fee plus a fixed hourly rate. A contractor rented an excavator for 4 hours and was billed $240. Another contractor rented the same excavator for 7 hours and was billed $375. Which equation models the total cost C, in dollars, to rent the excavator for h hours?",
        prompt: "Select the correct equation:",
        type: "choice",
        choices: [
          { letter: "A", text: "C = 45h + 60" },
          { letter: "B", text: "C = 60h + 45" },
          { letter: "C", text: "C = 35h + 100" },
          { letter: "D", text: "C = 50h + 40" }
        ],
        correct: "A",
        desmosEquation: ["y_1 ~ m * x_1 + b"],
        explanation: "Find the hourly rate (slope m): m = (375 - 240) / (7 - 4) = 135 / 3 = $45/hour. Find reservation fee (b): 240 = 45(4) + b -> 240 = 180 + b -> b = $60. Equation: C = 45h + 60.",
        hack: "Desmos Plug-In: Check Choice A: 45(4) + 60 = 240 and 45(7) + 60 = 375. Both match immediately!"
      },
      {
        id: 15,
        section: "Math",
        domain: "Algebra",
        skill: "Radical Equations & Extraneous Roots (Grid-In)",
        stem: "sqrt(3x + 16) = x + 2\n\nWhat is the solution to the equation above?",
        prompt: "Enter the real solution for x:",
        type: "gridin",
        correct: "3",
        desmosEquation: ["y = sqrt(3x + 16)", "y = x + 2"],
        explanation: "Square both sides: 3x + 16 = (x + 2)^2 -> 3x + 16 = x^2 + 4x + 4 -> x^2 + x - 12 = 0 -> (x + 4)(x - 3) = 0. Potential roots: x = -4, x = 3. Check x = -4: sqrt(3(-4) + 16) = sqrt(4) = 2, but right side is -4 + 2 = -2. Extraneous! Check x = 3: sqrt(9 + 16) = 5, right side is 3 + 2 = 5. Valid solution is x = 3.",
        hack: "Desmos 5-Second Intersection:\n1. Type: y = sqrt(3x + 16)\n2. Type: y = x + 2\n3. Click the intersection point: (3, 5). The solution is x = 3. Desmos automatically eliminates extraneous roots!"
      }
    ]
  },

  day3: {
    title: "📅 Day 3: Hard Module 2 Breakthrough",
    level: "Level 2: Module 2 Mastery",
    questions: [
      {
        id: 1,
        section: "Reading & Writing",
        domain: "Craft & Structure",
        skill: "Words in Context (Elite)",
        stem: "The architecture critic lauded the restoration of the gothic cathedral, observing that the masonry team avoided ______ additions that would compromise historical fidelity, instead employing traditional lime mortar and hand-chiseled limestone that matched the thirteenth-century original.",
        prompt: "Which choice completes the text with the most logical and precise word?",
        type: "choice",
        choices: [
          { letter: "A", text: "anachronistic" },
          { letter: "B", text: "austere" },
          { letter: "C", text: "meticulous" },
          { letter: "D", text: "rudimentary" }
        ],
        correct: "A",
        explanation: "The team wanted to protect 'historical fidelity' by using authentic thirteenth-century materials. Therefore, they avoided additions that belonged to the wrong time period. 'Anachronistic' means chronologically misplaced or belonging to a different era.",
        hack: "Historical Clue: 'avoided [time-inappropriate] additions to protect historical fidelity' = anachronistic."
      },
      {
        id: 2,
        section: "Reading & Writing",
        domain: "Information & Ideas",
        skill: "Cross-Text Connections",
        stem: "Text 1\nFor decades, evolutionary biologists postulated that flowering plants (angiosperms) diversified rapidly during the mid-Cretaceous period, an event Charles Darwin famously described as an 'abominable mystery.' Traditional macrofossil records of leaves and petals supported this sudden burst of speciation occurring roughly 100 to 120 million years ago.\n\nText 2\nRecent molecular clock analyses comparing chloroplast DNA genomes across hundreds of extant botanical lineages propose a drastically different chronology. Genetic divergence estimates suggest that the ancestral angiosperm lineage diverged from gymnosperms over 200 million years ago during the Triassic. Proponents of this revised model argue that early flowering plants existed for tens of millions of years in low-density upland ecosystems where fossilization conditions were extremely unfavorable.",
        prompt: "Based on the texts, how does the discovery in Text 2 address Darwin’s 'abominable mystery' mentioned in Text 1?",
        type: "choice",
        choices: [
          { letter: "A", text: "By suggesting that the rapid diversification occurred during the Triassic rather than the Cretaceous." },
          { letter: "B", text: "By indicating that angiosperm evolution was a much more gradual process that began earlier than fossil evidence previously implied." },
          { letter: "C", text: "By demonstrating that flowering plants evolved from marine algae rather than terrestrial gymnosperms." },
          { letter: "D", text: "By proving that macrofossil records from the mid-Cretaceous were fabricated by early paleontologists." }
        ],
        correct: "B",
        explanation: "Text 1 describes the mystery as a 'sudden burst' of diversification. Text 2's molecular data shows that angiosperms actually diverged 200 million years ago and lived quietly in uplands for tens of millions of years before widespread fossilization. Hence, the diversification was more gradual and began much earlier.",
        hack: "Cross-Text Logic: 'Sudden mystery' vs 'actually started 80 million years earlier in low-density habitats' = gradual and earlier origin."
      },
      {
        id: 3,
        section: "Reading & Writing",
        domain: "Standard English Conventions",
        skill: "Sentence Boundaries with Conjunctive Adverbs",
        stem: "The deep-sea hydrothermal vent ecosystem does not rely on sunlight for primary ______ chemosynthetic bacteria oxidize toxic hydrogen sulfide to synthesize organic molecules, forming the nutritional base for giant tube worms and vent crabs.",
        prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
        type: "choice",
        choices: [
          { letter: "A", text: "production, instead," },
          { letter: "B", text: "production; instead," },
          { letter: "C", text: "production instead" },
          { letter: "D", text: "production, instead" }
        ],
        correct: "B",
        explanation: "Both clauses are independent ('The deep-sea ecosystem does not rely...' and 'chemosynthetic bacteria oxidize toxic hydrogen sulfide...'). The conjunctive adverb 'instead' cannot join two independent clauses with only a comma. It requires a semicolon before it.",
        hack: "Conjunctive Adverb Rule: Independent Clause 1 ; instead/however/therefore , Independent Clause 2. Semicolon before, comma after!"
      },
      {
        id: 4,
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
        explanation: "Substitute y = x - 1 into circle equation: x^2 + (x - 1)^2 = 25 -> x^2 + x^2 - 2x + 1 = 25 -> 2x^2 - 2x - 24 = 0 -> x^2 - x - 12 = 0 -> (x - 4)(x + 3) = 0. The solutions for x are x1 = 4 and x2 = -3 (since x1 > x2).",
        hack: "Desmos Click Trick:\n1. Type: x^2 + y^2 = 25\n2. Type: y = x - 1\n3. Click the intersection dots: (-3, -4) and (4, 3). The larger x-value is x1 = 4!"
      },
      {
        id: 5,
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
        explanation: "The SAT phrase 'displays the maximum/minimum value as a constant' ALWAYS means VERTEX FORM: f(x) = a(x - h)^2 + k. Vertex occurs at x = -b/(2a) = -12/(2 * -2) = 3. f(3) = -2(9) + 36 - 10 = 8. In vertex form: f(x) = -2(x - 3)^2 + 8, where 8 is the maximum value.",
        hack: "Code Phrase Hack: When SAT asks for 'displays maximum/minimum as a constant', ignore the math and pick the ONLY answer in VERTEX form: a(x - h)^2 + k!"
      },
      {
        id: 6,
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
        explanation: "Factor denominator: f(x) = (x - 3) / [(x - 3)(x + 3)]. The factor (x - 3) cancels from numerator and denominator, which creates a removable discontinuity (HOLE) at x = 3, NOT a vertical asymptote. The remaining factor (x + 3) in the denominator cannot cancel, which creates a true VERTICAL ASYMPTOTE at x = -3.",
        hack: "Desmos Inspection:\nType y = (x - 3)/(x^2 - 9). Zoom into x = 3: the curve passes right through at y = 1/6 (hole). Zoom into x = -3: the curve shoots up to infinity (vertical asymptote at x = -3 only)!"
      },
      {
        id: 7,
        section: "Math",
        domain: "Problem Solving & Data Analysis",
        skill: "Conditional Probability Tables",
        stem: "A clinical trial tested an antigen test on 200 participants:\n\n• True Infection & Positive Test: 85\n• True Infection & Negative Test: 15\n• No Infection & Positive Test: 10\n• No Infection & Negative Test: 90\n\nIf a participant who tested positive is selected at random, what is the probability that this person has a true infection?",
        prompt: "Select the probability:",
        type: "choice",
        choices: [
          { letter: "A", text: "85 / 200" },
          { letter: "B", text: "85 / 100" },
          { letter: "C", text: "85 / 95" },
          { letter: "D", text: "95 / 200" }
        ],
        correct: "C",
        explanation: "Condition: 'If a participant who TESTED POSITIVE is selected at random'. Total positive tests = 85 (true infection) + 10 (no infection) = 95. Favorable outcome (true infection among positive tests) = 85. Probability = 85 / 95.",
        hack: "Conditional Probability Rule: Look at the 'IF' clause to find the new denominator! 'If tested positive' -> Denominator is 85 + 10 = 95. Answer = 85/95."
      },
      {
        id: 8,
        section: "Math",
        domain: "Algebra",
        skill: "Exponential Base Equality (Grid-In)",
        stem: "3^(2x - 1) = 27^(x - 2)\n\nWhat is the value of x in the equation above?",
        prompt: "Enter the value of x:",
        type: "gridin",
        correct: "5",
        desmosEquation: ["y = 3^(2x - 1)", "y = 27^(x - 2)"],
        explanation: "Rewrite 27 with base 3: 27 = 3^3. Then 27^(x - 2) = (3^3)^(x - 2) = 3^(3x - 6). Equate exponents: 2x - 1 = 3x - 6 -> x = 5.",
        hack: "Desmos 5-Second Click:\nType line 1: y = 3^(2x - 1)\nType line 2: y = 27^(x - 2)\nFind their intersection: they cross at x = 5!"
      }
    ]
  }
};
