/* ═══════════════════════════════════════════════════════════════ */
/* NEXA JEE — DATA MODULE                                         */
/* Complete JEE Main content: chapters, formulas, PYQ, mock, etc. */
/* ═══════════════════════════════════════════════════════════════ */

// ─── HIGH-WEIGHTAGE CHAPTERS ──────────────────────────────
const chaptersData = {
    physics: [
        { name: "Mechanics (NLM, WPE, Rotational)", weightage: 18, stars: 3, qCount: "28-32", topics: "Newton's Laws, Friction, Work-Power-Energy, Rotational Motion, Gravitation", pyqYears: "Every year" },
        { name: "Electrostatics & Current Electricity", weightage: 16, stars: 3, qCount: "24-28", topics: "Coulomb's Law, Electric Field, Capacitors, Ohm's Law, Kirchhoff's Laws, RC Circuits", pyqYears: "Every year" },
        { name: "Electromagnetic Induction & AC", weightage: 10, stars: 3, qCount: "15-18", topics: "Faraday's Law, Lenz's Law, Self/Mutual Inductance, AC Circuits, LCR", pyqYears: "Every year" },
        { name: "Modern Physics", weightage: 10, stars: 3, qCount: "14-16", topics: "Photoelectric Effect, Bohr Model, Nuclear Physics, Radioactivity, X-Rays", pyqYears: "Every year" },
        { name: "Optics (Ray + Wave)", weightage: 9, stars: 3, qCount: "12-16", topics: "Reflection, Refraction, Lenses, Mirrors, Young's Experiment, Diffraction", pyqYears: "Every year" },
        { name: "Thermodynamics & KTG", weightage: 8, stars: 2, qCount: "10-14", topics: "Laws of Thermodynamics, Carnot Engine, KTG, Specific Heats", pyqYears: "9/10 years" },
        { name: "Magnetism & Magnetic Effects", weightage: 8, stars: 2, qCount: "10-14", topics: "Biot-Savart, Ampere's Law, Moving Charges, Magnetism", pyqYears: "Every year" },
        { name: "Waves & Oscillations", weightage: 7, stars: 2, qCount: "8-12", topics: "SHM, Wave Motion, Standing Waves, Beats, Doppler Effect", pyqYears: "9/10 years" },
        { name: "Semiconductor Electronics", weightage: 5, stars: 2, qCount: "6-8", topics: "P-N Junction, Diodes, Transistors, Logic Gates", pyqYears: "8/10 years" },
        { name: "Fluid Mechanics", weightage: 4, stars: 1, qCount: "4-6", topics: "Bernoulli's, Viscosity, Surface Tension, Pascal's Law", pyqYears: "7/10 years" },
        { name: "Units, Dimensions & Errors", weightage: 3, stars: 1, qCount: "3-5", topics: "Dimensional Analysis, Significant Figures, Error Analysis", pyqYears: "8/10 years" },
        { name: "Communication Systems", weightage: 2, stars: 1, qCount: "2-3", topics: "Modulation, Bandwidth, Signal Processing", pyqYears: "6/10 years" },
    ],
    chemistry: [
        { name: "Chemical Bonding & Molecular Structure", weightage: 10, stars: 3, qCount: "14-18", topics: "VSEPR, MOT, Hybridization, Hydrogen Bonding, Fajan's Rule", pyqYears: "Every year" },
        { name: "Coordination Compounds", weightage: 8, stars: 3, qCount: "10-14", topics: "Werner Theory, CFT, Isomerism, Nomenclature, EAN Rule", pyqYears: "Every year" },
        { name: "Organic Chemistry: GOC & Reaction Mechanisms", weightage: 10, stars: 3, qCount: "14-18", topics: "Inductive Effect, Resonance, Hyperconjugation, SN1/SN2, E1/E2", pyqYears: "Every year" },
        { name: "Aldehydes, Ketones & Carboxylic Acids", weightage: 8, stars: 3, qCount: "10-14", topics: "Nucleophilic Addition, Cannizzaro, Aldol, Esterification", pyqYears: "Every year" },
        { name: "Chemical Equilibrium & Ionic Equilibrium", weightage: 8, stars: 3, qCount: "10-14", topics: "Le Chatelier's, Kp/Kc, pH, Buffer, Solubility Product", pyqYears: "Every year" },
        { name: "Electrochemistry", weightage: 7, stars: 3, qCount: "8-12", topics: "Nernst Equation, Conductance, Electrolysis, Batteries", pyqYears: "Every year" },
        { name: "Thermodynamics & Thermochemistry", weightage: 6, stars: 2, qCount: "8-10", topics: "Hess's Law, Enthalpy, Entropy, Gibbs Free Energy", pyqYears: "9/10 years" },
        { name: "Chemical Kinetics", weightage: 6, stars: 2, qCount: "8-10", topics: "Rate Law, Order, Arrhenius Equation, Half-life", pyqYears: "9/10 years" },
        { name: "p-Block Elements", weightage: 8, stars: 3, qCount: "10-14", topics: "Group 13-18, Oxoacids, Interhalogen, Noble Gas Compounds", pyqYears: "Every year" },
        { name: "d & f Block Elements", weightage: 5, stars: 2, qCount: "6-8", topics: "Transition Metals, Lanthanoids, Actinoids, Properties", pyqYears: "9/10 years" },
        { name: "Solutions & Colligative Properties", weightage: 5, stars: 2, qCount: "6-8", topics: "Raoult's Law, Osmotic Pressure, Depression, Elevation", pyqYears: "8/10 years" },
        { name: "Atomic Structure", weightage: 4, stars: 2, qCount: "4-6", topics: "Quantum Numbers, Orbitals, Electronic Config, Photoelectric", pyqYears: "8/10 years" },
        { name: "Polymers & Biomolecules", weightage: 4, stars: 1, qCount: "4-6", topics: "Types of Polymers, Amino Acids, Enzymes, DNA/RNA", pyqYears: "7/10 years" },
        { name: "s-Block Elements", weightage: 3, stars: 1, qCount: "3-5", topics: "Alkali & Alkaline Earth Metals, Anomalous Properties", pyqYears: "8/10 years" },
        { name: "Environmental Chemistry & Surface Chemistry", weightage: 3, stars: 1, qCount: "3-5", topics: "Adsorption, Catalysis, Colloids, Pollution, Ozone", pyqYears: "6/10 years" },
    ],
    maths: [
        { name: "Calculus (Limits, Continuity, Differentiability)", weightage: 12, stars: 3, qCount: "16-22", topics: "Limits, L'Hôpital, Continuity, Differentiability, Mean Value Theorems", pyqYears: "Every year" },
        { name: "Integration & Area Under Curves", weightage: 12, stars: 3, qCount: "16-20", topics: "Definite/Indefinite Integrals, By Parts, Partial Fractions, Area", pyqYears: "Every year" },
        { name: "Coordinate Geometry (Straight Lines, Circles, Conics)", weightage: 14, stars: 3, qCount: "18-24", topics: "Lines, Circles, Parabola, Ellipse, Hyperbola", pyqYears: "Every year" },
        { name: "Probability & Statistics", weightage: 8, stars: 3, qCount: "10-14", topics: "Conditional Probability, Bayes', Binomial, Mean, Variance", pyqYears: "Every year" },
        { name: "Matrices & Determinants", weightage: 8, stars: 3, qCount: "10-14", topics: "Matrix Operations, Inverse, Determinants, System of Equations", pyqYears: "Every year" },
        { name: "3D Geometry & Vectors", weightage: 8, stars: 3, qCount: "10-14", topics: "Lines, Planes, Scalar/Vector Product, Shortest Distance", pyqYears: "Every year" },
        { name: "Trigonometry", weightage: 7, stars: 2, qCount: "8-12", topics: "Identities, Equations, Inverse Trig, Properties of Triangles", pyqYears: "Every year" },
        { name: "Differential Equations", weightage: 6, stars: 2, qCount: "6-10", topics: "ODE, Separation of Variables, Linear DE, Homogeneous", pyqYears: "9/10 years" },
        { name: "Sequences & Series", weightage: 6, stars: 2, qCount: "6-10", topics: "AP, GP, HP, AGP, Summation, Special Series", pyqYears: "9/10 years" },
        { name: "Permutations & Combinations", weightage: 5, stars: 2, qCount: "6-8", topics: "nPr, nCr, Circular, Derangements, Multinomial", pyqYears: "8/10 years" },
        { name: "Complex Numbers", weightage: 4, stars: 2, qCount: "4-6", topics: "Argand Plane, De Moivre, Roots of Unity, Geometry", pyqYears: "8/10 years" },
        { name: "Sets, Relations & Functions", weightage: 4, stars: 1, qCount: "4-6", topics: "Types of Functions, Composition, Inverse, Binary Operations", pyqYears: "7/10 years" },
        { name: "Binomial Theorem", weightage: 3, stars: 2, qCount: "3-5", topics: "Expansion, General Term, Middle Term, Properties of Coefficients", pyqYears: "8/10 years" },
        { name: "Mathematical Reasoning & Logic", weightage: 3, stars: 1, qCount: "2-4", topics: "Statements, Connectives, Truth Tables, Contrapositive", pyqYears: "7/10 years" },
    ]
};

// ─── FORMULAS DATABASE ──────────────────────────────
const formulasData = {
    physics: [
        {
            chapter: "Mechanics",
            formulas: [
                { name: "Newton's Second Law", expr: "F = ma", priority: "critical", note: "Vector form: F⃗ = m × a⃗. Always draw FBD first!" },
                { name: "Work Done", expr: "W = F⃗ · d⃗ = Fd cos θ", priority: "critical", note: "Work is scalar. θ = angle between F and displacement." },
                { name: "Kinetic Energy", expr: "KE = ½mv²", priority: "critical", note: "Always positive. Changes only when net work is done." },
                { name: "Work-Energy Theorem", expr: "W_net = ΔKE = ½mv² - ½mu²", priority: "critical", note: "Most powerful tool for single-body problems!" },
                { name: "Potential Energy (Spring)", expr: "PE = ½kx²", priority: "important", note: "x = extension/compression from natural length." },
                { name: "Power", expr: "P = W/t = F⃗ · v⃗ = Fv cos θ", priority: "critical", note: "Instantaneous power: P = F⃗ · v⃗" },
                { name: "Momentum", expr: "p⃗ = mv⃗", priority: "critical", note: "Conserved when net external force = 0" },
                { name: "Impulse", expr: "J = F × Δt = Δp", priority: "important", note: "Area under F-t graph = change in momentum" },
                { name: "Coefficient of Restitution", expr: "e = (v₂ - v₁)/(u₁ - u₂)", priority: "important", note: "e=1: perfectly elastic, e=0: perfectly inelastic" },
                { name: "Moment of Inertia (Parallel Axis)", expr: "I = I_cm + Md²", priority: "critical", note: "d = distance between parallel axes" },
                { name: "Torque", expr: "τ⃗ = r⃗ × F⃗ = Iα", priority: "critical", note: "τ = rF sin θ. Rotational analog of F = ma" },
                { name: "Rotational KE", expr: "KE_rot = ½Iω²", priority: "important", note: "Total KE = ½mv² + ½Iω² for rolling" },
                { name: "Angular Momentum", expr: "L⃗ = r⃗ × p⃗ = Iω⃗", priority: "critical", note: "Conserved when net torque = 0" },
                { name: "Gravitation (Force)", expr: "F = GMm/r²", priority: "critical", note: "Universal law. Inverse square law." },
                { name: "Orbital Velocity", expr: "v₀ = √(GM/r) = √(gR)", priority: "important", note: "Independent of mass of satellite" },
                { name: "Escape Velocity", expr: "vₑ = √(2GM/R) = √(2gR)", priority: "critical", note: "vₑ = √2 × v₀. Independent of direction." },
                { name: "Equations of Motion", expr: "v = u + at, s = ut + ½at², v² = u² + 2as", priority: "critical", note: "Only for constant acceleration! Use calculus otherwise." },
                { name: "Projectile (Range)", expr: "R = u²sin2θ/g", priority: "critical", note: "Max range at θ = 45°. Complementary angles give same R." },
                { name: "Projectile (Max Height)", expr: "H = u²sin²θ/2g", priority: "important", note: "At max height, vertical velocity = 0" },
                { name: "Time of Flight", expr: "T = 2u sinθ/g", priority: "important", note: "Symmetric parabolic path for uniform g" },
            ]
        },
        {
            chapter: "Electrostatics & Current Electricity",
            formulas: [
                { name: "Coulomb's Law", expr: "F = kq₁q₂/r²", priority: "critical", note: "k = 1/(4πε₀) = 9×10⁹ Nm²/C². Vector form exists!" },
                { name: "Electric Field", expr: "E⃗ = F⃗/q₀ = kQ/r² (point charge)", priority: "critical", note: "Superposition applies. E inside conductor = 0" },
                { name: "Electric Potential", expr: "V = kQ/r", priority: "critical", note: "Scalar! Can directly add potentials. V = -∫E⃗·dr⃗" },
                { name: "Gauss's Law", expr: "∮E⃗·dA⃗ = q_enc/ε₀", priority: "critical", note: "Use for symmetric charge distributions!" },
                { name: "Capacitance (Parallel Plate)", expr: "C = ε₀A/d", priority: "critical", note: "With dielectric: C = Kε₀A/d" },
                { name: "Energy in Capacitor", expr: "U = ½CV² = ½QV = Q²/2C", priority: "critical", note: "Energy density = ½ε₀E²" },
                { name: "Series Capacitors", expr: "1/C = 1/C₁ + 1/C₂ + ...", priority: "important", note: "Charge same, voltage divides" },
                { name: "Parallel Capacitors", expr: "C = C₁ + C₂ + ...", priority: "important", note: "Voltage same, charge divides" },
                { name: "Ohm's Law", expr: "V = IR", priority: "critical", note: "Valid for ohmic conductors. R = ρl/A" },
                { name: "Kirchhoff's Junction Rule", expr: "ΣI_in = ΣI_out", priority: "critical", note: "Conservation of charge at a node" },
                { name: "Kirchhoff's Loop Rule", expr: "ΣV = 0 (around closed loop)", priority: "critical", note: "Conservation of energy. Watch sign conventions!" },
                { name: "Power Dissipated", expr: "P = VI = I²R = V²/R", priority: "important", note: "Heat produced: H = I²Rt (Joule's Law)" },
                { name: "Wheatstone Bridge", expr: "P/Q = R/S (balanced)", priority: "important", note: "No current through galvanometer when balanced" },
                { name: "Series Resistors", expr: "R = R₁ + R₂ + ...", priority: "important", note: "Current same, voltage divides" },
                { name: "Parallel Resistors", expr: "1/R = 1/R₁ + 1/R₂ + ...", priority: "important", note: "Voltage same, current divides" },
            ]
        },
        {
            chapter: "Electromagnetic Induction & AC",
            formulas: [
                { name: "Faraday's Law", expr: "EMF = -dΦ_B/dt", priority: "critical", note: "Negative sign = Lenz's Law (opposes change)" },
                { name: "Magnetic Flux", expr: "Φ = B⃗·A⃗ = BA cos θ", priority: "critical", note: "Unit: Weber (Wb). θ = angle between B and area normal" },
                { name: "Motional EMF", expr: "EMF = Bvl", priority: "critical", note: "For rod moving perpendicular to B and its length" },
                { name: "Self Inductance", expr: "EMF = -L(dI/dt)", priority: "important", note: "L = μ₀n²Al for solenoid" },
                { name: "Impedance (LCR Series)", expr: "Z = √(R² + (X_L - X_C)²)", priority: "critical", note: "X_L = ωL, X_C = 1/ωC. Resonance when X_L = X_C" },
                { name: "Resonance Frequency", expr: "f₀ = 1/(2π√(LC))", priority: "critical", note: "At resonance: Z = R (minimum), current maximum" },
                { name: "Transformer Ratio", expr: "V_s/V_p = N_s/N_p = I_p/I_s", priority: "important", note: "Ideal transformer: P_in = P_out" },
                { name: "Power Factor", expr: "cos φ = R/Z", priority: "important", note: "P_avg = V_rms × I_rms × cos φ" },
            ]
        },
        {
            chapter: "Modern Physics",
            formulas: [
                { name: "Photoelectric Equation", expr: "KE_max = hf - φ = h(f - f₀)", priority: "critical", note: "φ = work function = hf₀. No PE effect if f < f₀" },
                { name: "de Broglie Wavelength", expr: "λ = h/p = h/(mv)", priority: "critical", note: "For electron: λ = 12.27/√V Å" },
                { name: "Bohr's Radius", expr: "rₙ = n²a₀/Z (a₀ = 0.529 Å)", priority: "critical", note: "r ∝ n², E ∝ -1/n²" },
                { name: "Energy Levels (H-atom)", expr: "Eₙ = -13.6Z²/n² eV", priority: "critical", note: "Ground state n=1. Ionization energy = 13.6 eV for H" },
                { name: "Radioactive Decay", expr: "N = N₀e^(-λt), t₁/₂ = 0.693/λ", priority: "critical", note: "Activity A = λN = A₀e^(-λt)" },
                { name: "Mass-Energy Equivalence", expr: "E = mc²", priority: "critical", note: "1 amu = 931.5 MeV. Used in nuclear reactions." },
                { name: "Nuclear Binding Energy", expr: "BE = [Zm_p + Nm_n - M]c²", priority: "important", note: "Higher BE/nucleon = more stable nucleus" },
            ]
        },
        {
            chapter: "Optics",
            formulas: [
                { name: "Mirror Formula", expr: "1/f = 1/v + 1/u", priority: "critical", note: "Sign convention matters! f = R/2" },
                { name: "Lens Formula", expr: "1/f = 1/v - 1/u", priority: "critical", note: "Power P = 1/f (in diopters when f in meters)" },
                { name: "Magnification (Mirror)", expr: "m = -v/u = h'/h", priority: "important", note: "Negative m = inverted image" },
                { name: "Snell's Law", expr: "n₁ sin θ₁ = n₂ sin θ₂", priority: "critical", note: "TIR when θ > θ_c, sin θ_c = n₂/n₁ (n₁ > n₂)" },
                { name: "Young's Double Slit", expr: "Δy = λD/d", priority: "critical", note: "Fringe width. Bright fringe: path diff = nλ" },
                { name: "Resolving Power", expr: "RP = 1/dθ = D/1.22λ", priority: "important", note: "Rayleigh criterion for resolution" },
            ]
        },
        {
            chapter: "Thermodynamics & KTG",
            formulas: [
                { name: "First Law", expr: "ΔU = Q - W", priority: "critical", note: "ΔU depends only on T. For ideal gas: ΔU = nCᵥΔT" },
                { name: "Ideal Gas Law", expr: "PV = nRT", priority: "critical", note: "R = 8.314 J/mol·K. Combine with process equations!" },
                { name: "Adiabatic Process", expr: "PVᵞ = const, TVᵞ⁻¹ = const", priority: "critical", note: "Q = 0. γ = Cp/Cv. Steeper than isothermal on PV diagram" },
                { name: "Carnot Efficiency", expr: "η = 1 - T₂/T₁", priority: "critical", note: "Max possible efficiency. T in Kelvin!" },
                { name: "RMS Velocity", expr: "v_rms = √(3RT/M) = √(3kT/m)", priority: "important", note: "v_rms > v_avg > v_mp always" },
                { name: "KE of Gas", expr: "KE = (f/2)nRT", priority: "important", note: "f = degrees of freedom. Monoatomic: f=3" },
            ]
        },
        {
            chapter: "Magnetism",
            formulas: [
                { name: "Biot-Savart Law", expr: "dB = (μ₀/4π)(Idl⃗ × r̂)/r²", priority: "critical", note: "For long wire: B = μ₀I/(2πr)" },
                { name: "Ampere's Circuital Law", expr: "∮B⃗·dl⃗ = μ₀I_enc", priority: "critical", note: "Use for symmetric current distributions" },
                { name: "Force on Current Wire", expr: "F⃗ = Il⃗ × B⃗", priority: "critical", note: "F between parallel wires: F/l = μ₀I₁I₂/(2πd)" },
                { name: "Lorentz Force", expr: "F⃗ = q(E⃗ + v⃗ × B⃗)", priority: "critical", note: "Magnetic force does no work (⊥ to v)" },
                { name: "Solenoid Field", expr: "B = μ₀nI", priority: "important", note: "n = turns per unit length. Uniform inside, zero outside" },
            ]
        },
        {
            chapter: "Waves & Oscillations",
            formulas: [
                { name: "SHM Equation", expr: "x = A sin(ωt + φ)", priority: "critical", note: "ω = 2π/T = 2πf. Velocity: v = Aω cos(ωt + φ)" },
                { name: "Time Period (Spring)", expr: "T = 2π√(m/k)", priority: "critical", note: "Independent of amplitude! Series/parallel spring combos" },
                { name: "Time Period (Pendulum)", expr: "T = 2π√(l/g)", priority: "critical", note: "Valid only for small angles (< 15°)" },
                { name: "Wave Equation", expr: "v = fλ", priority: "critical", note: "Speed depends on medium. f stays constant across media" },
                { name: "Doppler Effect", expr: "f' = f(v ± v₀)/(v ∓ vₛ)", priority: "critical", note: "Upper signs: approach, lower: recede. v = speed of sound" },
                { name: "Beats", expr: "f_beat = |f₁ - f₂|", priority: "important", note: "Useful for tuning. Beat frequency = difference" },
            ]
        },
    ],
    chemistry: [
        {
            chapter: "Chemical Bonding",
            formulas: [
                { name: "Bond Order (MOT)", expr: "BO = (Nb - Na)/2", priority: "critical", note: "Nb = bonding e⁻, Na = antibonding e⁻. Higher BO = stronger bond" },
                { name: "Dipole Moment", expr: "μ = q × d", priority: "important", note: "Unit: Debye. μ = 0 for symmetric molecules (CO₂, BF₃)" },
                { name: "Formal Charge", expr: "FC = V - N - B/2", priority: "important", note: "V=valence, N=non-bonding, B=bonding electrons" },
                { name: "VSEPR Formula", expr: "AXₘEₙ → Geometry", priority: "critical", note: "X=bonding pairs, E=lone pairs. Lone pair > bond pair repulsion" },
                { name: "Hybridization", expr: "H = ½(V + M - C + A)", priority: "critical", note: "V=valence e⁻, M=monovalent, C=cation charge, A=anion charge" },
            ]
        },
        {
            chapter: "Equilibrium",
            formulas: [
                { name: "Equilibrium Constant", expr: "Kc = [Products]ⁿ/[Reactants]ᵐ", priority: "critical", note: "Only at equilibrium. Kp = Kc(RT)^Δn" },
                { name: "Relation Kp and Kc", expr: "Kp = Kc(RT)^Δng", priority: "critical", note: "Δng = moles of gaseous products - reactants" },
                { name: "pH", expr: "pH = -log[H⁺]", priority: "critical", note: "pH + pOH = 14 at 25°C. pKw = 14" },
                { name: "Henderson Equation", expr: "pH = pKa + log([A⁻]/[HA])", priority: "critical", note: "For buffer solutions. pH = pKa when [A⁻] = [HA]" },
                { name: "Solubility Product", expr: "Ksp = [Aⁿ⁺]ᵐ[Bᵐ⁻]ⁿ", priority: "critical", note: "Precipitation if IP > Ksp. Dissolution if IP < Ksp" },
                { name: "Degree of Dissociation", expr: "α = √(Ka/C) for weak acids", priority: "important", note: "Ostwald's dilution law. Valid when α << 1" },
            ]
        },
        {
            chapter: "Electrochemistry",
            formulas: [
                { name: "Nernst Equation", expr: "E = E° - (RT/nF)ln Q", priority: "critical", note: "At 25°C: E = E° - (0.0591/n)log Q" },
                { name: "Cell EMF", expr: "E°cell = E°cathode - E°anode", priority: "critical", note: "Positive E° = spontaneous. ΔG° = -nFE°" },
                { name: "Faraday's Law", expr: "m = (M × I × t)/(n × F)", priority: "critical", note: "F = 96485 C/mol. m = mass deposited" },
                { name: "Conductivity", expr: "κ = 1/ρ = G × (l/A)", priority: "important", note: "Molar conductivity: Λm = κ/c (S cm² mol⁻¹)" },
                { name: "Kohlrausch's Law", expr: "Λ°m = ν₊λ°₊ + ν₋λ°₋", priority: "important", note: "Used to find Λ°m of weak electrolytes" },
            ]
        },
        {
            chapter: "Chemical Kinetics",
            formulas: [
                { name: "Rate Law", expr: "Rate = k[A]ᵐ[B]ⁿ", priority: "critical", note: "Order = m+n (determined experimentally, NOT from stoichiometry)" },
                { name: "First Order Half-life", expr: "t₁/₂ = 0.693/k", priority: "critical", note: "Independent of concentration! k = (2.303/t)log(a/(a-x))" },
                { name: "Arrhenius Equation", expr: "k = Ae^(-Ea/RT)", priority: "critical", note: "ln(k₂/k₁) = (Ea/R)(1/T₁ - 1/T₂). Higher T → higher k" },
                { name: "Zero Order Rate", expr: "[A] = [A]₀ - kt", priority: "important", note: "t₁/₂ = [A]₀/(2k). Linear decrease." },
                { name: "Second Order Half-life", expr: "t₁/₂ = 1/(k[A]₀)", priority: "important", note: "Inversely proportional to initial concentration" },
            ]
        },
        {
            chapter: "Thermodynamics",
            formulas: [
                { name: "Gibbs Free Energy", expr: "ΔG = ΔH - TΔS", priority: "critical", note: "Spontaneous if ΔG < 0. ΔG° = -RT ln K" },
                { name: "Hess's Law", expr: "ΔH_rxn = Σ ΔH_f(products) - Σ ΔH_f(reactants)", priority: "critical", note: "Enthalpy is a state function. Path independent!" },
                { name: "Entropy Change", expr: "ΔS = q_rev/T", priority: "important", note: "ΔS_universe > 0 for spontaneous process" },
                { name: "Heat Capacity Relation", expr: "Cp - Cv = R (for ideal gas)", priority: "important", note: "Cp = Cv + R. γ = Cp/Cv" },
                { name: "Bond Energy Calculation", expr: "ΔH = Σ BE(reactants) - Σ BE(products)", priority: "important", note: "Breaking bonds = endothermic. Forming = exothermic" },
            ]
        },
        {
            chapter: "Solutions",
            formulas: [
                { name: "Raoult's Law", expr: "P = P°ₐxₐ + P°_bx_b", priority: "critical", note: "Ideal solutions. Positive deviation: P > Raoult's" },
                { name: "Boiling Point Elevation", expr: "ΔTb = iKbm", priority: "critical", note: "i = van't Hoff factor. Kb = molal elevation constant" },
                { name: "Freezing Point Depression", expr: "ΔTf = iKfm", priority: "critical", note: "Used for molar mass determination" },
                { name: "Osmotic Pressure", expr: "π = iCRT = inRT/V", priority: "critical", note: "Isotonic solutions have same π. Reverse osmosis: P > π" },
                { name: "Henry's Law", expr: "p = KH × x", priority: "important", note: "Dissolved gas pressure ∝ mole fraction. KH increases with T" },
            ]
        },
    ],
    maths: [
        {
            chapter: "Calculus — Differentiation",
            formulas: [
                { name: "Chain Rule", expr: "d/dx[f(g(x))] = f'(g(x)) · g'(x)", priority: "critical", note: "Most used differentiation rule. Practice nested functions!" },
                { name: "Product Rule", expr: "d/dx[fg] = f'g + fg'", priority: "critical", note: "Extend to 3 functions: (fgh)' = f'gh + fg'h + fgh'" },
                { name: "Quotient Rule", expr: "d/dx[f/g] = (f'g - fg')/g²", priority: "important", note: "Or rewrite as f·g⁻¹ and use product rule" },
                { name: "L'Hôpital's Rule", expr: "lim f/g = lim f'/g' (0/0 or ∞/∞)", priority: "critical", note: "Apply repeatedly if needed. Check conditions first!" },
                { name: "d/dx(sin x) = cos x", expr: "d/dx(cos x) = -sin x", priority: "critical", note: "d/dx(tan x) = sec²x, d/dx(sec x) = sec x tan x" },
                { name: "d/dx(eˣ) = eˣ", expr: "d/dx(aˣ) = aˣ ln a", priority: "critical", note: "d/dx(ln x) = 1/x, d/dx(logₐx) = 1/(x ln a)" },
                { name: "Maxima/Minima Test", expr: "f'(c) = 0, f''(c) > 0 → min", priority: "critical", note: "f''(c) < 0 → max. If f''(c) = 0, use higher derivatives" },
                { name: "Rolle's Theorem", expr: "f(a) = f(b) → ∃c: f'(c) = 0", priority: "important", note: "f must be continuous on [a,b], differentiable on (a,b)" },
                { name: "LMVT", expr: "f'(c) = [f(b) - f(a)]/(b - a)", priority: "important", note: "Lagrange's Mean Value Theorem. Geometric: tangent ∥ secant" },
            ]
        },
        {
            chapter: "Calculus — Integration",
            formulas: [
                { name: "Integration by Parts", expr: "∫u dv = uv - ∫v du", priority: "critical", note: "ILATE rule: Inverse → Log → Algebraic → Trig → Exponential" },
                { name: "∫sin x dx = -cos x + C", expr: "∫cos x dx = sin x + C", priority: "critical", note: "∫sec²x dx = tan x + C, ∫csc²x dx = -cot x + C" },
                { name: "∫eˣ dx = eˣ + C", expr: "∫(1/x) dx = ln|x| + C", priority: "critical", note: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ -1" },
                { name: "∫eˣ[f(x) + f'(x)]dx", expr: "= eˣf(x) + C", priority: "critical", note: "Very common in JEE! Split and identify f and f'" },
                { name: "King's Rule", expr: "∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx", priority: "critical", note: "Powerful for definite integrals. Reduces many to simple forms" },
                { name: "Walli's Formula", expr: "∫₀^(π/2) sinⁿx dx = ...", priority: "important", note: "For even n: (n-1)!!/n!! × π/2. For odd n: (n-1)!!/n!!" },
                { name: "Area Under Curve", expr: "A = ∫ₐᵇ |f(x)| dx", priority: "critical", note: "Use |f(x)| if curve crosses x-axis in [a,b]" },
                { name: "Leibniz Rule", expr: "d/dx ∫ₐ⁽ˣ⁾ᵇ⁽ˣ⁾ f(t)dt = f(b)b' - f(a)a'", priority: "important", note: "For differentiating integrals with variable limits" },
            ]
        },
        {
            chapter: "Coordinate Geometry",
            formulas: [
                { name: "Distance Formula", expr: "d = √[(x₂-x₁)² + (y₂-y₁)²]", priority: "critical", note: "Section formula: (mx₂+nx₁)/(m+n)" },
                { name: "Slope of Line", expr: "m = (y₂-y₁)/(x₂-x₁) = tan θ", priority: "critical", note: "Parallel: m₁=m₂. Perpendicular: m₁m₂=-1" },
                { name: "General Line", expr: "ax + by + c = 0", priority: "critical", note: "Distance from (x₁,y₁): |ax₁+by₁+c|/√(a²+b²)" },
                { name: "Circle (General)", expr: "x² + y² + 2gx + 2fy + c = 0", priority: "critical", note: "Center: (-g,-f), Radius: √(g²+f²-c)" },
                { name: "Tangent to Circle", expr: "y = mx ± a√(1+m²)", priority: "important", note: "For x² + y² = a². Condition: c² = a²(1+m²)" },
                { name: "Parabola (Standard)", expr: "y² = 4ax", priority: "critical", note: "Focus: (a,0), Directrix: x = -a. Parametric: (at², 2at)" },
                { name: "Ellipse (Standard)", expr: "x²/a² + y²/b² = 1", priority: "critical", note: "e = √(1-b²/a²). Foci: (±ae, 0). a > b" },
                { name: "Hyperbola (Standard)", expr: "x²/a² - y²/b² = 1", priority: "critical", note: "e = √(1+b²/a²). Asymptotes: y = ±(b/a)x" },
                { name: "Tangent to Conic", expr: "T = 0 (replace x² → xx₁, etc.)", priority: "critical", note: "T = S₁ at point of contact. S₁ > 0: outside" },
            ]
        },
        {
            chapter: "Probability & Statistics",
            formulas: [
                { name: "Conditional Probability", expr: "P(A|B) = P(A∩B)/P(B)", priority: "critical", note: "Bayes': P(A|B) = P(B|A)P(A)/P(B)" },
                { name: "Total Probability", expr: "P(A) = Σ P(A|Bᵢ)P(Bᵢ)", priority: "critical", note: "When B₁,B₂,...Bₙ partition sample space" },
                { name: "Binomial Distribution", expr: "P(X=r) = ⁿCᵣ pʳ qⁿ⁻ʳ", priority: "critical", note: "Mean = np, Variance = npq. q = 1-p" },
                { name: "Mean", expr: "x̄ = Σxᵢ/n = Σfᵢxᵢ/Σfᵢ", priority: "critical", note: "For grouped data, use class marks" },
                { name: "Variance", expr: "σ² = Σ(xᵢ-x̄)²/n = (Σxᵢ²/n) - x̄²", priority: "critical", note: "SD = √variance. Shortcut: σ² = E(X²) - [E(X)]²" },
            ]
        },
        {
            chapter: "Matrices & Determinants",
            formulas: [
                { name: "Determinant (2×2)", expr: "|A| = ad - bc", priority: "critical", note: "For 3×3: expand along row/column with most zeros" },
                { name: "Inverse Matrix", expr: "A⁻¹ = adj(A)/|A|", priority: "critical", note: "A⁻¹ exists iff |A| ≠ 0. (AB)⁻¹ = B⁻¹A⁻¹" },
                { name: "Cramer's Rule", expr: "x = Dₓ/D, y = Dy/D, z = Dz/D", priority: "important", note: "D=0: infinite or no solutions (check Dₓ, Dy, Dz)" },
                { name: "Properties of Determinants", expr: "|kA| = kⁿ|A| (n×n matrix)", priority: "important", note: "|AB| = |A||B|. Row/Col operations don't change |A| (add type)" },
                { name: "Cayley-Hamilton Theorem", expr: "Every matrix satisfies its own characteristic equation", priority: "important", note: "Used to find A⁻¹ and higher powers of A" },
            ]
        },
        {
            chapter: "Vectors & 3D Geometry",
            formulas: [
                { name: "Dot Product", expr: "a⃗·b⃗ = |a||b|cos θ = a₁b₁+a₂b₂+a₃b₃", priority: "critical", note: "cos θ = a⃗·b⃗/(|a||b|). Perpendicular ⟹ a⃗·b⃗ = 0" },
                { name: "Cross Product", expr: "|a⃗×b⃗| = |a||b|sin θ", priority: "critical", note: "Direction: right-hand rule. Parallel ⟹ a⃗×b⃗ = 0⃗" },
                { name: "Scalar Triple Product", expr: "[a⃗ b⃗ c⃗] = a⃗·(b⃗×c⃗)", priority: "critical", note: "= Volume of parallelepiped. Coplanar ⟹ [a b c] = 0" },
                { name: "Line in 3D", expr: "(x-x₁)/a = (y-y₁)/b = (z-z₁)/c", priority: "critical", note: "Direction ratios: a,b,c. Parametric: r⃗ = a⃗ + λb⃗" },
                { name: "Plane Equation", expr: "ax + by + cz = d", priority: "critical", note: "Normal: (a,b,c). Distance from origin: d/√(a²+b²+c²)" },
                { name: "Shortest Distance (Lines)", expr: "d = |[a₂-a₁  b₁  b₂]|/|b₁×b₂|", priority: "important", note: "For skew lines. Parallel lines: use point-to-line distance" },
            ]
        },
        {
            chapter: "Trigonometry",
            formulas: [
                { name: "Pythagorean Identity", expr: "sin²θ + cos²θ = 1", priority: "critical", note: "1 + tan²θ = sec²θ, 1 + cot²θ = csc²θ" },
                { name: "Sum Formula", expr: "sin(A±B) = sinA cosB ± cosA sinB", priority: "critical", note: "cos(A±B) = cosA cosB ∓ sinA sinB" },
                { name: "Double Angle", expr: "sin 2θ = 2 sinθ cosθ", priority: "critical", note: "cos 2θ = cos²θ - sin²θ = 2cos²θ-1 = 1-2sin²θ" },
                { name: "Half Angle (tan)", expr: "tan(θ/2) = t → sinθ=2t/(1+t²)", priority: "important", note: "cosθ = (1-t²)/(1+t²). Useful for integration!" },
                { name: "Sine Rule", expr: "a/sinA = b/sinB = c/sinC = 2R", priority: "critical", note: "R = circumradius. Useful in triangle problems" },
                { name: "Cosine Rule", expr: "c² = a² + b² - 2ab cosC", priority: "critical", note: "Generalizes Pythagoras. Find angle when all sides known" },
                { name: "Area of Triangle", expr: "Δ = ½ab sinC = √[s(s-a)(s-b)(s-c)]", priority: "important", note: "s = (a+b+c)/2 (semi-perimeter). Heron's formula." },
            ]
        },
        {
            chapter: "Sequences & Series",
            formulas: [
                { name: "AP nth term", expr: "aₙ = a + (n-1)d", priority: "critical", note: "d = common difference. Middle term = average" },
                { name: "AP Sum", expr: "Sₙ = n/2[2a + (n-1)d] = n/2(a + l)", priority: "critical", note: "l = last term. If Sₙ given, aₙ = Sₙ - Sₙ₋₁" },
                { name: "GP nth term", expr: "aₙ = arⁿ⁻¹", priority: "critical", note: "r = common ratio. Take ratios to identify GP" },
                { name: "GP Sum (finite)", expr: "Sₙ = a(rⁿ-1)/(r-1)", priority: "critical", note: "Infinite GP (|r|<1): S∞ = a/(1-r)" },
                { name: "AM ≥ GM ≥ HM", expr: "(a+b)/2 ≥ √(ab) ≥ 2ab/(a+b)", priority: "critical", note: "Equality when a = b. Extremely useful for min/max problems!" },
                { name: "Sum of First n Natural Numbers", expr: "Σn = n(n+1)/2", priority: "critical", note: "Σn² = n(n+1)(2n+1)/6, Σn³ = [n(n+1)/2]²" },
            ]
        },
    ]
};

// ─── PYQ YEAR-WISE DATA ────────────────────────────
const pyqData = {
    physics: [
        { chapter: "Mechanics", counts: [4,5,4,5,4,3,5,4,5,4], total: 43 },
        { chapter: "Electrostatics & Current", counts: [3,4,3,4,3,3,4,3,4,3], total: 34 },
        { chapter: "EMI & AC", counts: [2,2,1,2,2,1,2,2,2,2], total: 18 },
        { chapter: "Modern Physics", counts: [2,2,2,1,2,2,2,2,1,2], total: 18 },
        { chapter: "Optics", counts: [2,1,2,2,1,2,2,1,2,2], total: 17 },
        { chapter: "Thermodynamics & KTG", counts: [1,2,1,2,2,1,1,2,2,1], total: 15 },
        { chapter: "Magnetism", counts: [1,2,2,1,1,2,2,1,1,2], total: 15 },
        { chapter: "Waves & SHM", counts: [1,1,2,1,1,2,1,2,1,1], total: 13 },
        { chapter: "Semiconductors", counts: [1,1,1,1,1,0,1,1,1,1], total: 9 },
        { chapter: "Fluid Mechanics", counts: [1,0,1,0,1,1,0,1,1,0], total: 6 },
    ],
    chemistry: [
        { chapter: "Chemical Bonding", counts: [2,2,2,3,2,2,2,2,2,3], total: 22 },
        { chapter: "Organic: GOC & Mechanisms", counts: [2,3,2,2,3,2,3,2,2,3], total: 24 },
        { chapter: "Aldehydes/Ketones/Acids", counts: [2,2,1,2,2,2,1,2,2,2], total: 18 },
        { chapter: "Equilibrium (Chemical+Ionic)", counts: [2,2,2,2,1,2,2,2,2,1], total: 18 },
        { chapter: "Coordination Compounds", counts: [1,2,2,1,2,1,2,2,1,2], total: 16 },
        { chapter: "Electrochemistry", counts: [1,1,2,1,2,1,1,2,1,1], total: 13 },
        { chapter: "p-Block Elements", counts: [2,1,2,1,1,2,2,1,2,1], total: 15 },
        { chapter: "Chemical Kinetics", counts: [1,1,1,2,1,1,1,2,1,1], total: 12 },
        { chapter: "Thermodynamics", counts: [1,1,1,1,2,1,1,1,1,2], total: 12 },
        { chapter: "Solutions", counts: [1,1,1,1,1,0,1,1,1,1], total: 9 },
    ],
    maths: [
        { chapter: "Calculus (Diff+Int)", counts: [5,6,5,6,5,5,6,5,6,5], total: 54 },
        { chapter: "Coordinate Geometry", counts: [4,3,4,3,4,4,3,4,3,4], total: 36 },
        { chapter: "Probability & Stats", counts: [2,2,2,2,3,2,2,2,2,2], total: 21 },
        { chapter: "Matrices & Determinants", counts: [2,2,2,2,2,2,2,2,2,2], total: 20 },
        { chapter: "3D & Vectors", counts: [2,2,2,2,2,2,2,2,2,2], total: 20 },
        { chapter: "Trigonometry", counts: [1,2,2,1,2,2,1,2,2,1], total: 16 },
        { chapter: "Differential Equations", counts: [1,1,2,1,1,2,1,1,2,1], total: 13 },
        { chapter: "Sequences & Series", counts: [1,1,1,2,1,1,1,2,1,1], total: 12 },
        { chapter: "P&C", counts: [1,1,1,1,1,1,1,1,1,1], total: 10 },
        { chapter: "Complex Numbers", counts: [1,1,0,1,1,1,0,1,1,1], total: 8 },
    ]
};

// ─── PREDICTIONS FOR JEE MAIN JAN 2027 ──────────────
const predictionsData = [
    { subject: "physics", topic: "Rotational Motion + Friction Combo", confidence: 95, reason: "Asked every year. Expect a combined NLM + Rotation problem with rolling on incline." },
    { subject: "physics", topic: "RC/LCR Circuit Analysis", confidence: 90, reason: "Alternating pattern: RC in 2024, LCR in 2025, expect RC/LCR combo in 2027." },
    { subject: "physics", topic: "Photoelectric Effect + de Broglie", confidence: 88, reason: "Consistently tested. Expect numerical on stopping potential or wavelength calculation." },
    { subject: "physics", topic: "Ray Optics — Lens/Mirror Combination", confidence: 85, reason: "Combination optics problems have increased in frequency since 2022." },
    { subject: "physics", topic: "Electromagnetic Induction — Motional EMF", confidence: 92, reason: "High-scoring and frequently asked. Rod on rails in magnetic field is a favorite." },
    { subject: "chemistry", topic: "IUPAC Nomenclature + Stereochemistry", confidence: 93, reason: "GOC is guaranteed 2-3 questions. R/S configuration with nomenclature expected." },
    { subject: "chemistry", topic: "Nernst Equation Numerical", confidence: 88, reason: "Electrochemistry numericals are a staple. Expect EMF calculation with non-standard conditions." },
    { subject: "chemistry", topic: "Buffer Solution pH Calculation", confidence: 90, reason: "Henderson equation problems have appeared 8/10 years. Expect weak acid + salt buffer." },
    { subject: "chemistry", topic: "p-Block: Oxoacids of Phosphorus/Sulphur", confidence: 85, reason: "Structure-based questions on oxoacids are trending. Know basicity and structure." },
    { subject: "chemistry", topic: "Named Reactions in Organic Chemistry", confidence: 92, reason: "Aldol, Cannizzaro, Wittig, Reformatsky — at least one named reaction question is certain." },
    { subject: "maths", topic: "Definite Integration using Properties", confidence: 95, reason: "King's rule/Walli's formula-based problems appear every single session." },
    { subject: "maths", topic: "Conic Sections — Parabola/Ellipse Tangent", confidence: 90, reason: "Tangent/Normal to conics with conditions is highly expected. Know parametric forms." },
    { subject: "maths", topic: "Conditional Probability + Bayes Theorem", confidence: 92, reason: "Application-based probability has replaced direct formula questions since 2023." },
    { subject: "maths", topic: "Matrix Equation Solving (A² = A type)", confidence: 85, reason: "Idempotent/involutory matrix problems have appeared 3 out of last 4 years." },
    { subject: "maths", topic: "Differential Equation — Degree & Order", confidence: 88, reason: "Formation of DE from family of curves is a consistent topic. Know homogeneous DEs." },
];

// ─── MOCK TEST QUESTIONS ────────────────────────────
const mockQuestions = {
    physics: [
        {
            id: 1, chapter: "Mechanics", type: "mcq",
            text: "A block of mass 2 kg is placed on a rough inclined plane making an angle of 30° with the horizontal. The coefficient of friction is 1/√3. The force required to just move the block up the incline is:",
            options: ["20 N", "30 N", "20√3 N", "10√3 N"],
            correct: 0,
            explanation: "F = mg sin θ + μmg cos θ = 2×10×sin30° + (1/√3)×2×10×cos30° = 10 + 10 = 20 N. Trick: When μ = tan θ, the block is on verge of sliding. Force to push up = 2mg sin θ = 20 N."
        },
        {
            id: 2, chapter: "Mechanics", type: "mcq",
            text: "A particle of mass m is projected with velocity v at angle θ with horizontal. The angular momentum about the point of projection when it is at maximum height is:",
            options: ["mv³ sin²θ cosθ / (2g)", "mv³ sinθ cos²θ / (2g)", "mv³ sin²θ cosθ / g", "mv³ sinθ cosθ / (2g)"],
            correct: 0,
            explanation: "At max height H = v²sin²θ/(2g), horizontal velocity = v cosθ. L = m(v cosθ)(H) = mv³sin²θ cosθ/(2g). Trick: Angular momentum = m × v_horizontal × height."
        },
        {
            id: 3, chapter: "Electrostatics", type: "mcq",
            text: "Two capacitors C₁ = 2μF and C₂ = 8μF are connected in series across a 120V supply. The charge on each capacitor and the voltage across C₁ are:",
            options: ["192 μC, 96 V", "240 μC, 120 V", "192 μC, 24 V", "1200 μC, 96 V"],
            correct: 0,
            explanation: "Series: C_eq = (2×8)/(2+8) = 1.6 μF. Q = CV = 1.6×120 = 192 μC (same on both). V₁ = Q/C₁ = 192/2 = 96V. Trick: In series, smaller capacitor gets more voltage!"
        },
        {
            id: 4, chapter: "EMI", type: "mcq",
            text: "A conducting rod of length 1m is moving with a velocity 5 m/s in a direction perpendicular to its length and a uniform magnetic field of 0.1 T. The emf induced is:",
            options: ["0.5 V", "0.05 V", "5 V", "1 V"],
            correct: 0,
            explanation: "EMF = Bvl = 0.1 × 5 × 1 = 0.5 V. Trick: Just multiply B×v×l for perpendicular motion. Direction by Lenz's law."
        },
        {
            id: 5, chapter: "Modern Physics", type: "mcq",
            text: "The work function of a metal is 3.3 eV. The threshold frequency for photoelectric emission is approximately:",
            options: ["8 × 10¹⁴ Hz", "8 × 10¹⁰ Hz", "5 × 10¹⁴ Hz", "4 × 10¹⁵ Hz"],
            correct: 0,
            explanation: "φ = hf₀ ⟹ f₀ = φ/h = 3.3×1.6×10⁻¹⁹/(6.63×10⁻³⁴) ≈ 8×10¹⁴ Hz. Trick: f₀(Hz) ≈ φ(eV) × 2.42 × 10¹⁴"
        },
        {
            id: 6, chapter: "Optics", type: "mcq",
            text: "In Young's double slit experiment with slit separation d = 0.5 mm and screen distance D = 1 m, the wavelength of light used is 500 nm. The fringe width is:",
            options: ["1 mm", "0.5 mm", "2 mm", "0.1 mm"],
            correct: 0,
            explanation: "β = λD/d = (500×10⁻⁹ × 1)/(0.5×10⁻³) = 1×10⁻³ m = 1 mm. Trick: Convert all to meters first!"
        },
        {
            id: 7, chapter: "Thermodynamics", type: "mcq",
            text: "An ideal gas undergoes an isothermal expansion at 300 K from volume V to 2V. The work done by the gas is (n = 1 mol):",
            options: ["300R ln 2", "300R", "150R ln 2", "600R ln 2"],
            correct: 0,
            explanation: "W = nRT ln(V₂/V₁) = 1×R×300×ln(2) = 300R ln 2. Trick: For isothermal, W = nRT ln(V_f/V_i). ΔU = 0."
        },
        {
            id: 8, chapter: "Magnetism", type: "mcq",
            text: "The magnetic field at the centre of a circular coil of radius R carrying current I is B. At what distance from the centre along the axis is the field B/8?",
            options: ["√3 R", "2R", "R/2", "R√2"],
            correct: 0,
            explanation: "B_axis = μ₀IR²/[2(R²+x²)^(3/2)]. B_center = μ₀I/(2R). Setting B_axis = B/8: R³ = (R²+x²)^(3/2)/8 ⟹ x = R√3. Trick: Cube root approach works quickly."
        },
        {
            id: 9, chapter: "Waves", type: "mcq",
            text: "Two tuning forks A and B produce 4 beats per second. When B is loaded with wax, the beat frequency becomes 2. If the frequency of A is 256 Hz, the original frequency of B is:",
            options: ["252 Hz", "260 Hz", "254 Hz", "258 Hz"],
            correct: 1,
            explanation: "Beat freq = |fA - fB| = 4. So fB = 252 or 260. Loading wax decreases fB. If fB was 260, it decreases → closer to 256 → beats decrease to 2 ✓. If fB was 252, it decreases → further from 256 → beats increase ✗. So fB = 260 Hz."
        },
        {
            id: 10, chapter: "Semiconductors", type: "mcq",
            text: "In a full wave rectifier, the input frequency is 50 Hz. The ripple frequency in the output is:",
            options: ["100 Hz", "50 Hz", "25 Hz", "200 Hz"],
            correct: 0,
            explanation: "Full wave rectifier: ripple frequency = 2 × input frequency = 2 × 50 = 100 Hz. Trick: Half wave → same as input, Full wave → double."
        },
        {
            id: 11, chapter: "Current Electricity", type: "integer",
            text: "In the circuit shown, a battery of EMF 12V and internal resistance 2Ω is connected to two resistors of 4Ω and 6Ω in parallel. The current drawn from the battery (in Amperes) is:",
            options: [],
            correct: 3,
            explanation: "R_parallel = (4×6)/(4+6) = 2.4 Ω. Total R = 2 + 2.4 = 4.4 Ω. I = 12/4.4 ≈ 2.73 A ≈ 3 A (rounded). Actually with exact values: 60/22 = 30/11. Answer: 3"
        },
        {
            id: 12, chapter: "Gravitation", type: "mcq",
            text: "The ratio of escape velocity from Earth's surface to orbital velocity of a satellite near Earth's surface is:",
            options: ["√2 : 1", "1 : √2", "2 : 1", "1 : 2"],
            correct: 0,
            explanation: "vₑ = √(2gR), v₀ = √(gR). Ratio = √2 : 1. Trick: Escape velocity is always √2 times orbital velocity at any altitude!"
        },
        // More questions for a fuller test
        {
            id: 13, chapter: "Mechanics", type: "mcq",
            text: "A body of mass 5 kg is moving with velocity 2 m/s. A force of 10 N is applied for 3 seconds. The final kinetic energy is:",
            options: ["160 J", "80 J", "320 J", "40 J"],
            correct: 0,
            explanation: "a = F/m = 10/5 = 2 m/s². v = u + at = 2 + 2×3 = 8 m/s. KE = ½mv² = ½×5×64 = 160 J."
        },
        {
            id: 14, chapter: "Electrostatics", type: "mcq",
            text: "The electric flux through a closed surface enclosing a charge of 2μC is (in Nm²/C):",
            options: ["2.26 × 10⁵", "1.13 × 10⁵", "4.52 × 10⁵", "0.56 × 10⁵"],
            correct: 0,
            explanation: "Gauss's Law: Φ = q/ε₀ = 2×10⁻⁶/(8.85×10⁻¹²) ≈ 2.26 × 10⁵ Nm²/C. Trick: Just divide charge by ε₀. Shape doesn't matter!"
        },
        {
            id: 15, chapter: "Optics", type: "integer",
            text: "A convex lens of focal length 20 cm produces an image at 60 cm from the lens on the same side as the object. The magnification (magnitude) is:",
            options: [],
            correct: 2,
            explanation: "1/f = 1/v - 1/u. 1/20 = 1/60 - 1/u. 1/u = 1/60 - 1/20 = -2/60. u = -30 cm. m = v/u = 60/(-30) = -2. |m| = 2."
        },
    ],
    chemistry: [
        {
            id: 16, chapter: "Chemical Bonding", type: "mcq",
            text: "The hybridization of the central atom in XeF₄ is:",
            options: ["sp³d²", "sp³d", "sp³", "dsp³"],
            correct: 0,
            explanation: "Xe has 8 valence e⁻ + 4 from F = 12 e⁻ around Xe. 6 pairs = sp³d². Shape: square planar (2 lone pairs). Trick: Use steric number = bonds + lone pairs = 6."
        },
        {
            id: 17, chapter: "Equilibrium", type: "mcq",
            text: "The pH of a 0.1 M solution of a weak acid HA (Ka = 10⁻⁵) is:",
            options: ["3", "5", "2", "4"],
            correct: 0,
            explanation: "[H⁺] = √(Ka × C) = √(10⁻⁵ × 0.1) = √(10⁻⁶) = 10⁻³. pH = -log(10⁻³) = 3. Trick: For weak acids, pH = ½(pKa - log C) = ½(5 - (-1)) = 3."
        },
        {
            id: 18, chapter: "Electrochemistry", type: "mcq",
            text: "For the cell Zn|Zn²⁺(0.01M)||Cu²⁺(1M)|Cu, if E°cell = 1.1V, the EMF at 25°C is:",
            options: ["1.159 V", "1.041 V", "1.1 V", "1.2 V"],
            correct: 0,
            explanation: "Nernst: E = E° - (0.0591/n)log Q = 1.1 - (0.0591/2)log(0.01/1) = 1.1 - (0.02955)×(-2) = 1.1 + 0.059 = 1.159 V. Trick: Diluting anode increases cell EMF!"
        },
        {
            id: 19, chapter: "Chemical Kinetics", type: "mcq",
            text: "For a first order reaction, the time required for 99.9% completion is approximately how many times the half-life?",
            options: ["10 times", "5 times", "7 times", "100 times"],
            correct: 0,
            explanation: "t = (2.303/k)log(1000) = (2.303/k)×3 = 6.909/k. t₁/₂ = 0.693/k. Ratio = 6.909/0.693 ≈ 10. Trick: 99.9% ≈ 10 half-lives. 99% ≈ 7, 87.5% = 3."
        },
        {
            id: 20, chapter: "Organic Chemistry", type: "mcq",
            text: "The major product of the reaction CH₃CH=CH₂ + HBr (without peroxide) is:",
            options: ["CH₃CHBrCH₃ (2-bromopropane)", "CH₃CH₂CH₂Br (1-bromopropane)", "CH₂=CHCHBr (allyl bromide)", "CH₃CBr=CH₂"],
            correct: 0,
            explanation: "Markovnikov's rule: H⁺ adds to the carbon with more H atoms. Br⁻ adds to the more substituted carbon → 2-bromopropane. Trick: 'The rich get richer' — more substituted C gets the negative part."
        },
        {
            id: 21, chapter: "Coordination Compounds", type: "mcq",
            text: "The IUPAC name of [Co(NH₃)₄Cl₂]Cl is:",
            options: ["Tetraamminedichloridocobalt(III) chloride", "Tetraamminedichlorocobalt(III) chloride", "Cobalt tetraamine dichloride chloride", "Dichloridotetraamminecobalt(III) chloride"],
            correct: 0,
            explanation: "IUPAC rules: Ligands in alphabetical order (ammine before chlorido), then metal with oxidation state. Trick: Count charges — 2Cl inside + 1Cl outside = Co³⁺. Anionic ligands end in '-ido' (new IUPAC)."
        },
        {
            id: 22, chapter: "p-Block", type: "mcq",
            text: "Among the following, the correct order of acidic strength is:",
            options: ["HClO₄ > HClO₃ > HClO₂ > HClO", "HClO > HClO₂ > HClO₃ > HClO₄", "HClO₂ > HClO₃ > HClO₄ > HClO", "All are equally acidic"],
            correct: 0,
            explanation: "More oxygen = more delocalization of negative charge after H⁺ loss = stronger acid. Trick: For same central atom, more oxygens → stronger acid."
        },
        {
            id: 23, chapter: "Solutions", type: "mcq",
            text: "The freezing point of a 0.1 m aqueous NaCl solution (Kf = 1.86 K kg/mol) is approximately:",
            options: ["-0.372°C", "-0.186°C", "-1.86°C", "-0.093°C"],
            correct: 0,
            explanation: "ΔTf = i×Kf×m = 2×1.86×0.1 = 0.372°C. FP = 0 - 0.372 = -0.372°C. Trick: NaCl → Na⁺ + Cl⁻, so i = 2 (complete dissociation assumed)."
        },
        {
            id: 24, chapter: "Thermodynamics", type: "integer",
            text: "For a reaction at 25°C, ΔH = -10 kJ and ΔS = -30 J/K. The value of ΔG (in kJ) is:",
            options: [],
            correct: -1,
            explanation: "ΔG = ΔH - TΔS = -10 - 298×(-0.03) = -10 + 8.94 = -1.06 kJ ≈ -1 kJ. Trick: Convert ΔS to kJ/K first! Common mistake is unit mismatch."
        },
        {
            id: 25, chapter: "Organic Chemistry", type: "mcq",
            text: "Aldol condensation is characteristic of:",
            options: ["Aldehydes with α-hydrogen", "Aldehydes without α-hydrogen", "All carboxylic acids", "All ketones without α-hydrogen"],
            correct: 0,
            explanation: "Aldol requires α-hydrogen for enolization. Without α-H (like HCHO, PhCHO) → Cannizzaro reaction instead. Trick: α-H → Aldol. No α-H → Cannizzaro."
        },
    ],
    maths: [
        {
            id: 26, chapter: "Calculus", type: "mcq",
            text: "The value of lim(x→0) (sin x - x + x³/6)/x⁵ is:",
            options: ["1/120", "1/6", "1/24", "0"],
            correct: 0,
            explanation: "sin x = x - x³/6 + x⁵/120 - ... So sin x - x + x³/6 = x⁵/120 - ... Dividing by x⁵ → 1/120. Trick: Use Taylor expansion. This is a classic JEE pattern!"
        },
        {
            id: 27, chapter: "Calculus", type: "mcq",
            text: "∫₀^π x sin x dx equals:",
            options: ["π", "2π", "π/2", "0"],
            correct: 0,
            explanation: "By parts: u=x, dv=sinx dx. = [-x cosx]₀^π + ∫₀^π cosx dx = π + [sinx]₀^π = π + 0 = π. Trick: For ∫₀^π x f(sinx)dx, use property: = (π/2)∫₀^π f(sinx)dx."
        },
        {
            id: 28, chapter: "Coordinate Geometry", type: "mcq",
            text: "The length of the latus rectum of the parabola y² = 12x is:",
            options: ["12", "3", "6", "24"],
            correct: 0,
            explanation: "y² = 4ax ⟹ 4a = 12 ⟹ a = 3. Latus rectum = 4a = 12. Trick: LR = coefficient of x in y² = 4ax form."
        },
        {
            id: 29, chapter: "Probability", type: "mcq",
            text: "A bag contains 5 red and 3 blue balls. Two balls are drawn at random without replacement. The probability that both are red is:",
            options: ["5/14", "10/28", "25/64", "5/8"],
            correct: 0,
            explanation: "P = (5/8)×(4/7) = 20/56 = 5/14. Trick: Without replacement → multiply decreasing probabilities. 5/14 = 10/28 but 5/14 is simplified."
        },
        {
            id: 30, chapter: "Matrices", type: "mcq",
            text: "If A = [[1,2],[3,4]], then |2A| equals:",
            options: ["−8", "−2", "8", "4"],
            correct: 0,
            explanation: "|kA| = k²|A| for 2×2 matrix. |A| = 4-6 = -2. |2A| = 4×(-2) = -8. Trick: |kA| = kⁿ|A| where n is the order. Common trap: students forget the kⁿ part!"
        },
        {
            id: 31, chapter: "Vectors", type: "mcq",
            text: "If |a⃗| = 3, |b⃗| = 4, and a⃗·b⃗ = 6, then |a⃗ × b⃗| equals:",
            options: ["6√3", "12", "6", "24"],
            correct: 0,
            explanation: "cos θ = 6/(3×4) = 1/2, so θ = 60°. |a⃗×b⃗| = |a||b|sin θ = 3×4×(√3/2) = 6√3. Trick: Use sin²θ + cos²θ = 1 to find sin from dot product."
        },
        {
            id: 32, chapter: "Trigonometry", type: "mcq",
            text: "The general solution of sin x = 1/2 is:",
            options: ["x = nπ + (-1)ⁿ(π/6)", "x = 2nπ + π/6", "x = nπ + π/6", "x = 2nπ ± π/6"],
            correct: 0,
            explanation: "sin x = sin(π/6). General solution: x = nπ + (-1)ⁿ(π/6). Trick: sin x = sin α ⟹ x = nπ + (-1)ⁿα. cos x = cos α ⟹ x = 2nπ ± α."
        },
        {
            id: 33, chapter: "Differential Equations", type: "mcq",
            text: "The order and degree of the differential equation (d²y/dx²)³ + (dy/dx)² + sin(dy/dx) = 0 are:",
            options: ["Order 2, Degree not defined", "Order 2, Degree 3", "Order 3, Degree 2", "Order 2, Degree 2"],
            correct: 0,
            explanation: "Order = 2 (highest derivative is d²y/dx²). Degree is not defined because sin(dy/dx) is a transcendental function of the derivative. Trick: If derivative appears in trig/log/exp → degree not defined."
        },
        {
            id: 34, chapter: "Sequences", type: "integer",
            text: "The sum of the first 10 terms of the series 1² + 2² + 3² + ... is:",
            options: [],
            correct: 385,
            explanation: "Σn² = n(n+1)(2n+1)/6 = 10×11×21/6 = 2310/6 = 385. Trick: Memorize Σn = n(n+1)/2, Σn² = n(n+1)(2n+1)/6, Σn³ = [n(n+1)/2]²"
        },
        {
            id: 35, chapter: "Complex Numbers", type: "mcq",
            text: "The modulus and argument of the complex number -1 + i are:",
            options: ["√2, 3π/4", "√2, π/4", "1, 3π/4", "2, 3π/4"],
            correct: 0,
            explanation: "|z| = √(1+1) = √2. arg(z) = π - arctan(1/1) = π - π/4 = 3π/4 (2nd quadrant). Trick: Always check the quadrant before writing the argument!"
        },
    ]
};

// ─── ROADMAP (16 WEEKS) ────────────────────────────
const roadmapData = [
    {
        week: 1, theme: "Foundation — Mechanics I & Basic Math",
        days: [
            { day: "Mon", title: "Units, Dimensions & Kinematics", subjects: ["physics"], detail: "Dimensional analysis, significant figures, 1D & 2D kinematics, projectile motion" },
            { day: "Tue", title: "Sets, Relations & Functions", subjects: ["maths"], detail: "Types of functions, domain/range, composition, inverse functions" },
            { day: "Wed", title: "Newton's Laws of Motion", subjects: ["physics"], detail: "FBD technique, friction, pseudo forces, connected bodies, constraint equations" },
            { day: "Thu", title: "Atomic Structure", subjects: ["chemistry"], detail: "Bohr model, quantum numbers, orbitals, electronic configuration, photoelectric" },
            { day: "Fri", title: "Trigonometric Identities", subjects: ["maths"], detail: "All identities, compound angles, multiple angles, half angle formulas" },
            { day: "Sat", title: "Practice Day: Mechanics + Maths", subjects: ["physics", "maths"], detail: "Solve 30 problems from NLM + Trigonometry. Time yourself!" },
            { day: "Sun", title: "📋 Weekly Test + Revision", subjects: ["revision"], detail: "Mini test (30 Qs, 90 min) covering Week 1 topics. Review mistakes." },
        ]
    },
    {
        week: 2, theme: "Mechanics II & Chemical Bonding",
        days: [
            { day: "Mon", title: "Work, Power, Energy", subjects: ["physics"], detail: "Work-energy theorem, conservative forces, potential energy curves, power" },
            { day: "Tue", title: "Chemical Bonding — VSEPR & Hybridization", subjects: ["chemistry"], detail: "VSEPR shapes, hybridization calculation, sigma/pi bonds, molecular geometry" },
            { day: "Wed", title: "Rotational Motion", subjects: ["physics"], detail: "Moment of inertia, parallel/perpendicular axis theorem, rolling, torque" },
            { day: "Thu", title: "Limits & Continuity", subjects: ["maths"], detail: "L'Hôpital's rule, standard limits, squeeze theorem, continuity conditions" },
            { day: "Fri", title: "MOT & Hydrogen Bonding", subjects: ["chemistry"], detail: "MO diagrams for homonuclear diatomics, bond order, paramagnetism, H-bonding" },
            { day: "Sat", title: "Practice: Rotation + Bonding", subjects: ["physics", "chemistry"], detail: "25 rotation problems + 25 chemical bonding questions" },
            { day: "Sun", title: "📋 Weekly Test + Revision", subjects: ["revision"], detail: "Test on Weeks 1-2 topics. Focus on conceptual understanding." },
        ]
    },
    {
        week: 3, theme: "Electrostatics & Algebra Foundations",
        days: [
            { day: "Mon", title: "Electrostatics — Coulomb's Law & Field", subjects: ["physics"], detail: "Electric field lines, superposition, continuous charge distributions" },
            { day: "Tue", title: "Quadratic Equations & Complex Numbers", subjects: ["maths"], detail: "Roots, discriminant, nature of roots, Argand plane, modulus, argument" },
            { day: "Wed", title: "Gauss's Law & Capacitors", subjects: ["physics"], detail: "Gaussian surfaces, capacitor combinations, energy stored, dielectrics" },
            { day: "Thu", title: "GOC — Inductive & Resonance Effects", subjects: ["chemistry"], detail: "Electron displacement effects, stability of intermediates, acidity/basicity" },
            { day: "Fri", title: "Matrices & Determinants", subjects: ["maths"], detail: "Operations, inverse, adjoint, Cramer's rule, system of equations" },
            { day: "Sat", title: "Practice: Electrostatics + Matrices", subjects: ["physics", "maths"], detail: "30 numerical problems mixing electrostatics and matrices" },
            { day: "Sun", title: "📋 Weekly Test + Revision", subjects: ["revision"], detail: "Cumulative test. Track improvement from Week 1." },
        ]
    },
    {
        week: 4, theme: "Current Electricity & Organic Chemistry I",
        days: [
            { day: "Mon", title: "Current Electricity", subjects: ["physics"], detail: "Ohm's law, Kirchhoff's rules, Wheatstone bridge, meter bridge, potentiometer" },
            { day: "Tue", title: "Hydrocarbons & Stereochemistry", subjects: ["chemistry"], detail: "IUPAC, isomerism, chirality, R/S configuration, E/Z nomenclature" },
            { day: "Wed", title: "Differentiation", subjects: ["maths"], detail: "Chain rule, implicit, parametric, logarithmic differentiation, higher derivatives" },
            { day: "Thu", title: "Application of Derivatives", subjects: ["maths"], detail: "Maxima/minima, tangent/normal, rate of change, Rolle's, LMVT" },
            { day: "Fri", title: "Reaction Mechanisms — SN1, SN2, E1, E2", subjects: ["chemistry"], detail: "Substitution vs elimination, factors affecting, stereochemistry of products" },
            { day: "Sat", title: "Practice: Current Elec + Organic", subjects: ["physics", "chemistry"], detail: "Mixed problem set. Focus on circuit analysis and mechanism prediction." },
            { day: "Sun", title: "📋 Monthly Test 1", subjects: ["revision"], detail: "Full mock: 75 Qs, 180 min. Covers Weeks 1-4. Analyze performance." },
        ]
    },
    {
        week: 5, theme: "Magnetism & Integration",
        days: [
            { day: "Mon", title: "Magnetic Effects of Current", subjects: ["physics"], detail: "Biot-Savart, Ampere's law, solenoid, toroid, force between conductors" },
            { day: "Tue", title: "Integration Basics", subjects: ["maths"], detail: "Standard integrals, substitution, partial fractions, trigonometric integrals" },
            { day: "Wed", title: "Moving Charges in Magnetic Field", subjects: ["physics"], detail: "Lorentz force, cyclotron, velocity selector, Hall effect" },
            { day: "Thu", title: "Chemical Equilibrium", subjects: ["chemistry"], detail: "Kp, Kc, Le Chatelier's principle, degree of dissociation, reaction quotient" },
            { day: "Fri", title: "Integration by Parts & Special Forms", subjects: ["maths"], detail: "ILATE, reduction formulas, ∫eˣ[f+f'] type, rationalization" },
            { day: "Sat", title: "Practice: Magnetism + Integration", subjects: ["physics", "maths"], detail: "25 magnetism + 25 integration problems under timed conditions" },
            { day: "Sun", title: "📋 Weekly Test + Revision", subjects: ["revision"], detail: "Test on Week 5 topics. Review integration techniques." },
        ]
    },
    {
        week: 6, theme: "EMI, AC & Ionic Equilibrium",
        days: [
            { day: "Mon", title: "Electromagnetic Induction", subjects: ["physics"], detail: "Faraday's law, Lenz's law, motional EMF, eddy currents, self/mutual inductance" },
            { day: "Tue", title: "Ionic Equilibrium", subjects: ["chemistry"], detail: "pH, buffer solutions, Henderson equation, solubility product, common ion effect" },
            { day: "Wed", title: "Alternating Current", subjects: ["physics"], detail: "AC circuits, phasors, LCR series, resonance, power factor, transformer" },
            { day: "Thu", title: "Definite Integrals & Properties", subjects: ["maths"], detail: "King's rule, Walli's formula, Leibniz rule, gamma function, properties" },
            { day: "Fri", title: "Area Under Curves", subjects: ["maths"], detail: "Area between curves, standard areas, sketching techniques" },
            { day: "Sat", title: "Practice: EMI/AC + Equilibrium", subjects: ["physics", "chemistry"], detail: "Numerical heavy practice. Focus on LCR and pH calculations." },
            { day: "Sun", title: "📋 Weekly Test + Revision", subjects: ["revision"], detail: "Comprehensive test on Weeks 5-6. Timed strictly." },
        ]
    },
    {
        week: 7, theme: "Optics & Coordinate Geometry I",
        days: [
            { day: "Mon", title: "Ray Optics", subjects: ["physics"], detail: "Mirror/lens formula, magnification, combinations, prism, optical instruments" },
            { day: "Tue", title: "Straight Lines", subjects: ["maths"], detail: "All forms of line equation, distance, angle between lines, family of lines" },
            { day: "Wed", title: "Wave Optics", subjects: ["physics"], detail: "YDSE, single slit, resolving power, polarization, Brewster's angle" },
            { day: "Thu", title: "Circles", subjects: ["maths"], detail: "General equation, tangent, normal, chord of contact, radical axis" },
            { day: "Fri", title: "Electrochemistry", subjects: ["chemistry"], detail: "Nernst equation, conductance, Kohlrausch's law, electrolysis, batteries" },
            { day: "Sat", title: "Practice: Optics + Circles", subjects: ["physics", "maths"], detail: "Mixed problem set. Lens combinations + tangent to circles." },
            { day: "Sun", title: "📋 Weekly Test + Revision", subjects: ["revision"], detail: "Test on Week 7. Identify weak areas in coordinate geometry." },
        ]
    },
    {
        week: 8, theme: "Thermodynamics & Conics",
        days: [
            { day: "Mon", title: "Thermodynamics", subjects: ["physics"], detail: "Laws of thermodynamics, processes, PV diagrams, Carnot engine, efficiency" },
            { day: "Tue", title: "Parabola", subjects: ["maths"], detail: "Standard forms, parametric, tangent, normal, chord properties, focus" },
            { day: "Wed", title: "KTG & Heat Transfer", subjects: ["physics"], detail: "Maxwell distribution, rms/avg/mp velocity, degrees of freedom, conduction" },
            { day: "Thu", title: "Ellipse & Hyperbola", subjects: ["maths"], detail: "Properties, eccentricity, tangent, normal, auxiliary circle, asymptotes" },
            { day: "Fri", title: "Chemical Thermodynamics", subjects: ["chemistry"], detail: "Hess's law, Gibbs energy, entropy, spontaneity, bond energies" },
            { day: "Sat", title: "Practice: Thermo + Conics", subjects: ["physics", "maths"], detail: "30 problems mixing thermodynamics with conic sections" },
            { day: "Sun", title: "📋 Monthly Test 2", subjects: ["revision"], detail: "Full mock: 75 Qs, 180 min. Covers Weeks 1-8. Midway assessment!" },
        ]
    },
    {
        week: 9, theme: "Waves & Chemical Kinetics",
        days: [
            { day: "Mon", title: "Waves & Sound", subjects: ["physics"], detail: "Wave equation, standing waves, harmonics, Doppler effect, beats" },
            { day: "Tue", title: "Chemical Kinetics", subjects: ["chemistry"], detail: "Rate law, order, Arrhenius, half-life calculations, mechanism" },
            { day: "Wed", title: "SHM", subjects: ["physics"], detail: "Equation, energy, springs, pendulum, damped oscillations" },
            { day: "Thu", title: "Differential Equations", subjects: ["maths"], detail: "Formation, order/degree, separation of variables, linear DE, homogeneous" },
            { day: "Fri", title: "Solutions & Colligative Properties", subjects: ["chemistry"], detail: "Raoult's law, elevation, depression, osmotic pressure, van't Hoff factor" },
            { day: "Sat", title: "Practice: Waves + Kinetics", subjects: ["physics", "chemistry"], detail: "SHM problems + rate law numericals. Time management focus." },
            { day: "Sun", title: "📋 Weekly Test + Revision", subjects: ["revision"], detail: "Test on Week 9. Focus on numerical accuracy." },
        ]
    },
    {
        week: 10, theme: "Modern Physics & Organic Chemistry II",
        days: [
            { day: "Mon", title: "Photoelectric Effect & Dual Nature", subjects: ["physics"], detail: "Einstein's equation, de Broglie, Davisson-Germer, stopping potential" },
            { day: "Tue", title: "Aldehydes & Ketones", subjects: ["chemistry"], detail: "Nucleophilic addition, Cannizzaro, Aldol, oxidation, Grignard reactions" },
            { day: "Wed", title: "Bohr Model & X-Rays", subjects: ["physics"], detail: "Energy levels, spectral series, Moseley's law, X-ray spectrum" },
            { day: "Thu", title: "Carboxylic Acids & Derivatives", subjects: ["chemistry"], detail: "Acidity order, esterification, decarboxylation, Hell-Volhard-Zelinsky" },
            { day: "Fri", title: "Probability Basics", subjects: ["maths"], detail: "Sample space, conditional probability, Bayes' theorem, total probability" },
            { day: "Sat", title: "Practice: Modern Physics + Organic", subjects: ["physics", "chemistry"], detail: "Photoelectric numericals + name reaction identification problems" },
            { day: "Sun", title: "📋 Weekly Test + Revision", subjects: ["revision"], detail: "Test on Week 10. Check organic chemistry mechanism skills." },
        ]
    },
    {
        week: 11, theme: "Nuclear Physics, p-Block & Probability",
        days: [
            { day: "Mon", title: "Nuclear Physics & Radioactivity", subjects: ["physics"], detail: "Mass defect, binding energy, decay laws, fission, fusion" },
            { day: "Tue", title: "p-Block Elements (Group 15-18)", subjects: ["chemistry"], detail: "Oxoacids, interhalogen, noble gas compounds, anomalous properties" },
            { day: "Wed", title: "Binomial Distribution & Statistics", subjects: ["maths"], detail: "Binomial distribution, mean, variance, standard deviation" },
            { day: "Thu", title: "Coordination Compounds", subjects: ["chemistry"], detail: "Werner theory, CFT, nomenclature, isomerism, EAN rule, stability" },
            { day: "Fri", title: "Permutations & Combinations", subjects: ["maths"], detail: "nPr, nCr, circular permutations, derangements, distribution problems" },
            { day: "Sat", title: "Practice: Nuclear + p-Block + PnC", subjects: ["physics", "chemistry", "maths"], detail: "Mixed set from all three subjects. 30 questions, 90 min." },
            { day: "Sun", title: "📋 Weekly Test + Revision", subjects: ["revision"], detail: "Test on Week 11. Identify gaps in inorganic chemistry." },
        ]
    },
    {
        week: 12, theme: "3D Geometry, Vectors & d-Block",
        days: [
            { day: "Mon", title: "Vectors", subjects: ["maths"], detail: "Dot product, cross product, scalar triple product, vector equations" },
            { day: "Tue", title: "d & f Block Elements", subjects: ["chemistry"], detail: "Properties, electronic config, color, magnetic properties, KMnO₄, K₂Cr₂O₇" },
            { day: "Wed", title: "3D Geometry — Lines & Planes", subjects: ["maths"], detail: "Direction cosines, equations of line/plane, angle, distance, shortest distance" },
            { day: "Thu", title: "Semiconductors & Electronics", subjects: ["physics"], detail: "Band theory, p-n junction, diode, transistor, logic gates" },
            { day: "Fri", title: "Sequences & Series", subjects: ["maths"], detail: "AP, GP, HP, AGP, special summations, AM-GM-HM inequality" },
            { day: "Sat", title: "Practice: Vectors + 3D + d-Block", subjects: ["maths", "chemistry"], detail: "Focus on 3D geometry problems + coordination chemistry." },
            { day: "Sun", title: "📋 Monthly Test 3", subjects: ["revision"], detail: "Full mock: 75 Qs, 180 min. Covers Weeks 1-12. Critical assessment." },
        ]
    },
    {
        week: 13, theme: "Revision Sprint — Physics",
        days: [
            { day: "Mon", title: "Mechanics Revision", subjects: ["physics"], detail: "All formulas, key problems, common traps, shortcut methods" },
            { day: "Tue", title: "Electrodynamics Revision", subjects: ["physics"], detail: "Electrostatics + Current + EMI + AC complete revision with formulas" },
            { day: "Wed", title: "Optics + Modern Physics Revision", subjects: ["physics"], detail: "Ray + Wave optics, Photoelectric, Bohr, Nuclear — all formulas" },
            { day: "Thu", title: "Thermo + Waves + Magnetism Revision", subjects: ["physics"], detail: "Complete formula sheet revision with 50 rapid-fire problems" },
            { day: "Fri", title: "Physics Error Analysis", subjects: ["physics"], detail: "Review all past mock mistakes in physics. Redo wrong questions." },
            { day: "Sat", title: "Physics Full Test", subjects: ["physics"], detail: "25 Questions, 60 min. Aim for 85%+ accuracy." },
            { day: "Sun", title: "📋 Review & Recovery", subjects: ["revision"], detail: "Analyze physics test. Make final formula cards for weak areas." },
        ]
    },
    {
        week: 14, theme: "Revision Sprint — Chemistry",
        days: [
            { day: "Mon", title: "Physical Chemistry Revision", subjects: ["chemistry"], detail: "Equilibrium, Kinetics, Thermo, Electro, Solutions — all numericals" },
            { day: "Tue", title: "Organic Chemistry Revision", subjects: ["chemistry"], detail: "GOC, named reactions, mechanism practice, product prediction" },
            { day: "Wed", title: "Inorganic Chemistry Revision", subjects: ["chemistry"], detail: "p-block, d-block, coordination, metallurgy — fact revision" },
            { day: "Thu", title: "Chemistry Formula & Fact Sheet", subjects: ["chemistry"], detail: "Complete formula compilation + inorganic exceptions + reagent list" },
            { day: "Fri", title: "Chemistry Error Analysis", subjects: ["chemistry"], detail: "Review all chemistry mock mistakes. Pattern identification." },
            { day: "Sat", title: "Chemistry Full Test", subjects: ["chemistry"], detail: "25 Questions, 60 min. Aim for 80%+ accuracy." },
            { day: "Sun", title: "📋 Review & Recovery", subjects: ["revision"], detail: "Chemistry test analysis. Revise most-missed topics." },
        ]
    },
    {
        week: 15, theme: "Revision Sprint — Mathematics",
        days: [
            { day: "Mon", title: "Calculus Revision", subjects: ["maths"], detail: "Limits, Derivatives, Integration, Area, DE — all techniques" },
            { day: "Tue", title: "Algebra Revision", subjects: ["maths"], detail: "Matrices, Complex, P&C, Binomial, Sequences — key formulas" },
            { day: "Wed", title: "Coordinate Geometry Revision", subjects: ["maths"], detail: "Lines, Circles, Conics — all tangent/normal conditions" },
            { day: "Thu", title: "Trigonometry + Vectors + 3D Revision", subjects: ["maths"], detail: "Complete formula revision with 40 rapid problems" },
            { day: "Fri", title: "Maths Error Analysis", subjects: ["maths"], detail: "Review all maths mistakes from mocks. Find calculation patterns." },
            { day: "Sat", title: "Maths Full Test", subjects: ["maths"], detail: "25 Questions, 60 min. Aim for 80%+ accuracy." },
            { day: "Sun", title: "📋 Review & Recovery", subjects: ["revision"], detail: "Maths test analysis. Finalize formula sheet." },
        ]
    },
    {
        week: 16, theme: "🎯 Final Week — Peak Performance",
        days: [
            { day: "Mon", title: "Full Mock Test 1", subjects: ["revision"], detail: "Complete 75 Qs, 180 min mock. Simulate exact exam conditions." },
            { day: "Tue", title: "Mock 1 Analysis + Formula Revision", subjects: ["revision"], detail: "Detailed analysis. Revise weak formulas. Mental preparation." },
            { day: "Wed", title: "Full Mock Test 2", subjects: ["revision"], detail: "Another full mock. Focus on time management and accuracy." },
            { day: "Thu", title: "Light Revision + Cheat Sheets Only", subjects: ["revision"], detail: "Only formula cards and cheat sheets. No new problems. Stay confident!" },
            { day: "Fri", title: "Mental Preparation & Quick Formulas", subjects: ["revision"], detail: "Read cheat sheets once. Relax. Early dinner. Good sleep." },
            { day: "Sat", title: "🎯 EXAM DAY", subjects: ["revision"], detail: "You've prepared for 16 weeks. Trust yourself, Nishu! You've got this! 💪" },
            { day: "Sun", title: "Celebrate! 🎉", subjects: ["revision"], detail: "Whatever the result, you gave your best. Be proud of your journey!" },
        ]
    },
];

// ─── CHEAT SHEETS ────────────────────────────────
const cheatSheetData = {
    tricks: [
        { icon: "🎯", title: "Projectile Motion Shortcut", items: ["Range = u²sin2θ/g. Max range at 45°", "Complementary angles (30°&60°) give SAME range", "Time of flight depends only on vertical component", "At max height: v_y=0, v_x unchanged"] },
        { icon: "⚡", title: "Quick Circuit Solving", items: ["Star-Delta for complex circuits", "Symmetry: remove middle wire if equal potentials", "Wheatstone balance: no current through galvanometer", "For n identical resistors: R_s=nR, R_p=R/n"] },
        { icon: "🧮", title: "Calculus Speed Tricks", items: ["sin x ≈ x, cos x ≈ 1-x²/2 for small x", "∫₀^π xf(sinx)dx = (π/2)∫₀^π f(sinx)dx", "eˣ[f(x)+f'(x)] integrates to eˣf(x)", "Leibniz formula for nth derivative of products"] },
        { icon: "🔬", title: "Organic Chemistry Shortcuts", items: ["Markovnikov: H adds to C with more H", "Anti-Markovnikov only with HBr + peroxide", "α-H present → Aldol; No α-H → Cannizzaro", "Electron-donating groups → ortho/para directors"] },
        { icon: "📊", title: "Quick Probability", items: ["P(A∪B) = P(A)+P(B)-P(A∩B)", "Independent: P(A∩B)=P(A)×P(B)", "Binomial: mean=np, var=npq", "For 'at least one': 1 - P(none)"] },
        { icon: "🧪", title: "Equilibrium Quick Tips", items: ["Q < K: forward reaction favored", "Q > K: backward reaction favored", "Catalyst doesn't change K, only speeds up", "Adding inert gas at constant V: no effect on equilibrium"] },
        { icon: "📐", title: "Coordinate Geometry Tricks", items: ["Tangent to y²=4ax: y = mx + a/m", "For circle: tangent length = √(S₁)", "Eccentricity: Circle=0, Ellipse<1, Parabola=1, Hyperbola>1", "Area of triangle: ½|x₁(y₂-y₃)+x₂(y₃-y₁)+x₃(y₁-y₂)|"] },
        { icon: "⚛️", title: "Modern Physics Memory Aids", items: ["λ = 12.27/√V Å (de Broglie for electron)", "E ∝ -1/n², r ∝ n² (Bohr model)", "Stopping potential independent of intensity", "Half-life: after n half-lives, N = N₀/2ⁿ"] },
    ],
    strategy: [
        { icon: "⏱️", title: "Time Management in Exam", items: ["Attempt easy questions first (scan all 75 first)", "Spend max 2 min per MCQ, 3 min per numerical", "Physics: 50 min, Chemistry: 50 min, Maths: 60 min", "Keep 20 min buffer for revision and marking"] },
        { icon: "🎯", title: "Marking Strategy", items: ["MCQ: +4 correct, -1 wrong. Attempt if >50% sure", "Integer type: +4 correct, 0 wrong. Always attempt!", "Mark unsure answers for review", "Never leave integer questions blank (0 penalty)"] },
        { icon: "📋", title: "Paper Attempt Order", items: ["Start with your STRONGEST subject", "Within subject: do integer type first (no negative)", "Skip questions taking >3 minutes", "Return to skipped questions in the last 30 min"] },
        { icon: "🧠", title: "Night Before Exam", items: ["DO NOT study new topics", "Quick glance at formula sheets and cheat cards", "Light dinner, sleep by 10 PM", "Keep documents, admit card, pen ready"] },
    ],
    mistakes: [
        { icon: "❌", title: "Physics Common Errors", items: ["Forgetting sign convention in optics", "Not converting units (cm to m, mA to A)", "Assuming velocity = speed in vector problems", "Confusing B (magnetic field) direction"] },
        { icon: "❌", title: "Chemistry Common Errors", items: ["Confusing Kp and Kc (forget RT^Δn)", "Wrong IUPAC naming priority order", "Mixing up SN1 and SN2 conditions", "Forgetting to balance equations before calculations"] },
        { icon: "❌", title: "Maths Common Errors", items: ["Forgetting +C in indefinite integrals", "Domain restrictions in log/trig functions", "Not checking if matrix is invertible before using A⁻¹", "Confusing ≤ and < in inequality solutions"] },
        { icon: "❌", title: "General Exam Traps", items: ["Reading 'maximum' as 'minimum'", "Circular answer selection (second-guessing)", "Calculation errors due to rushing", "Not reading all 4 options before selecting"] },
    ],
    lastmin: [
        { icon: "⏰", title: "Physics Last-Minute Formulas", items: ["v_escape = √2 × v_orbital", "Capacitor in series: charge same, voltage divides", "Carnot efficiency: η = 1 - T₂/T₁ (Kelvin only!)", "Photon energy: E = 12400/λ(Å) eV"] },
        { icon: "⏰", title: "Chemistry Last-Minute Facts", items: ["Diagonal relationship: Li-Mg, Be-Al, B-Si", "Fajan's rule: small cation + large anion → covalent", "SN1: 3° > 2° > 1°, SN2: 1° > 2° > 3° (reverse!)", "pH of strong acid: pH = -log[H⁺] directly"] },
        { icon: "⏰", title: "Maths Last-Minute Formulas", items: ["AM ≥ GM ≥ HM (equality when all equal)", "|A| of n×n with factor k: multiply by kⁿ", "sin(nπ) = 0, cos(nπ) = (-1)ⁿ", "∫₀^(2a) f(x)dx = 2∫₀^a f(x)dx if f(2a-x)=f(x)"] },
        { icon: "⏰", title: "Universal Quick Checks", items: ["Dimension check your final answer", "Plug boundary values (x=0, θ=0°, 90°)", "Answer should make physical sense", "Check units match on both sides"] },
    ]
};

// ─── BADGES SYSTEM ────────────────────────────────
const badgesData = [
    { id: "first_login", icon: "🌟", name: "First Step", desc: "Started your JEE journey", xp: 10, condition: "auto" },
    { id: "first_test", icon: "📝", name: "Test Taker", desc: "Completed your first mock test", xp: 25, condition: "test_count >= 1" },
    { id: "perfect_10", icon: "💯", name: "Perfect 10", desc: "Scored 10/10 on performance scale", xp: 100, condition: "score_10" },
    { id: "physics_pro", icon: "⚛️", name: "Physics Pro", desc: "Scored 80%+ in a Physics test", xp: 50, condition: "physics_80" },
    { id: "chemistry_pro", icon: "🧪", name: "Chemistry Wizard", desc: "Scored 80%+ in a Chemistry test", xp: 50, condition: "chemistry_80" },
    { id: "maths_pro", icon: "📊", name: "Maths Master", desc: "Scored 80%+ in a Mathematics test", xp: 50, condition: "maths_80" },
    { id: "streak_3", icon: "🔥", name: "On Fire", desc: "3-day study streak", xp: 30, condition: "streak >= 3" },
    { id: "streak_7", icon: "💪", name: "Unstoppable", desc: "7-day study streak", xp: 75, condition: "streak >= 7" },
    { id: "streak_30", icon: "👑", name: "Champion", desc: "30-day study streak", xp: 200, condition: "streak >= 30" },
    { id: "formula_50", icon: "📐", name: "Formula Collector", desc: "Reviewed 50+ formulas", xp: 40, condition: "formulas >= 50" },
    { id: "chapter_10", icon: "📚", name: "Chapter Boss", desc: "Completed 10 chapters", xp: 60, condition: "chapters >= 10" },
    { id: "chapter_all", icon: "🎓", name: "Syllabus Complete", desc: "Completed all 75 chapters", xp: 300, condition: "chapters >= 75" },
    { id: "mock_5", icon: "🏅", name: "Mock Warrior", desc: "Completed 5 mock tests", xp: 75, condition: "test_count >= 5" },
    { id: "mock_10", icon: "🏆", name: "Mock Legend", desc: "Completed 10 mock tests", xp: 150, condition: "test_count >= 10" },
    { id: "doubt_10", icon: "❓", name: "Curious Mind", desc: "Asked 10 doubts", xp: 30, condition: "doubts >= 10" },
    { id: "improver", icon: "📈", name: "Rising Star", desc: "Improved score by 20%+ between tests", xp: 80, condition: "improvement" },
];

// ─── DOUBT RESPONSES ──────────────────────────────
const doubtResponses = {
    "What should I study today?": `Great question, Nishu! 🎯\n\nBased on the roadmap, here's your priority for today:\n\n1. **Physics**: Review formulas from your current chapter\n2. **Chemistry**: Practice 10 GOC mechanism problems\n3. **Maths**: Solve 5 integration problems using by parts\n\n💡 **Tip**: Start with the subject you find hardest — your brain is freshest in the morning!\n\nRemember: Consistency > Intensity. Even 3 focused hours beats 8 distracted hours. You've got this! 💪`,
    
    "Explain Integration by Parts": `Of course! Let me break it down simply 🧮\n\n**Formula**: ∫u dv = uv - ∫v du\n\n**How to choose u and dv** (ILATE Rule):\n- **I** - Inverse trig (sin⁻¹x, tan⁻¹x)\n- **L** - Logarithmic (ln x, log x)\n- **A** - Algebraic (x², x³)\n- **T** - Trigonometric (sin x, cos x)\n- **E** - Exponential (eˣ, aˣ)\n\n**The one higher in ILATE = u**\n\n**Example**: ∫x·eˣ dx\n→ u = x (Algebraic), dv = eˣdx\n→ du = dx, v = eˣ\n→ = xeˣ - ∫eˣ dx = xeˣ - eˣ + C = eˣ(x-1) + C ✅\n\n**JEE Super Trick**: ∫eˣ[f(x)+f'(x)]dx = eˣf(x) + C\nThis appears almost every year! Just identify f and f'. 🔥`,
    
    "Give me tips for Organic Chemistry": `Organic Chemistry can feel overwhelming, but here's your game plan, Nishu! 🧪\n\n**1. Master GOC First** (Foundation!)\n→ Inductive, Resonance, Hyperconjugation effects\n→ Stability of carbocations, carbanions, radicals\n→ Acidity/Basicity comparison\n\n**2. Learn Named Reactions in GROUPS**:\n→ Reduction: Clemmensen, Wolff-Kishner, Birch\n→ Oxidation: Baeyer-Villiger, KMnO₄, CrO₃\n→ C-C bond forming: Aldol, Grignard, Wittig\n\n**3. Practice Mechanism, Not Just Products**\n→ Draw arrow pushing for every reaction\n→ Understand WHY it happens, not just WHAT happens\n\n**4. Memory Tricks**:\n→ SN1: "Slow first step" → 3° substrate, polar protic solvent\n→ SN2: "Swift second" → 1° substrate, polar aprotic solvent, strong nucleophile\n→ Markovnikov: "The rich get richer" (more H gets more H)\n\n**5. Daily Practice**: 10 product prediction problems minimum! 🎯`,
    
    "Quiz me on Mechanics": `Let's do a quick quiz, Nishu! 🎯 Think about each one:\n\n**Q1**: A ball is thrown upward with velocity 20 m/s. Max height?\n🤔 Think... H = u²/2g = 400/20 = **20 m** ✅\n\n**Q2**: A 2 kg block on a frictionless surface. F = 10 N applied. Acceleration?\n🤔 Think... a = F/m = 10/2 = **5 m/s²** ✅\n\n**Q3**: A particle in circular motion. If speed is constant, is it accelerating?\n🤔 Think... **YES!** Direction changes → centripetal acceleration a = v²/r ✅\n\n**Q4**: Work done by friction is always:\n🤔 Think... **Negative** in most cases (opposes motion). But static friction CAN do positive work (like on a box in an accelerating truck)! ✅\n\nHow did you do? Want more? Just ask! 💪`,
    
    "How to manage time in exam?": `Time management is CRUCIAL! Here's my proven strategy, Nishu ⏱️\n\n**Total: 180 min for 75 questions**\n\n**Phase 1 — Quick Scan (10 min)**\n→ Flip through ALL questions once\n→ Mark easy, medium, hard mentally\n→ This removes surprise anxiety\n\n**Phase 2 — Easy Kills (60 min)**\n→ Solve all "I know this" questions first\n→ Target: 30-35 questions done\n→ Build confidence and momentum\n\n**Phase 3 — Medium Crunch (70 min)**\n→ Tackle "I can solve this with some work"\n→ Max 3 min per question\n→ Skip if stuck → move on!\n\n**Phase 4 — Hard Attempts (20 min)**\n→ Return to difficult ones\n→ Use elimination for MCQs\n→ Integer type: educated guess > blank\n\n**Phase 5 — Review (20 min)**\n→ Check marked-for-review answers\n→ Verify calculation-heavy answers\n→ DO NOT change answers unless certain\n\n**Pro Tips**:\n→ Integer type = NO negative marking = ALWAYS attempt!\n→ MCQ with >50% confidence → attempt it\n→ Don't get stuck on one question for >3 min\n→ Keep a watch on your desk (most centers allow) ⌚`,
};

// ─── RANK LEVELS ──────────────────────────────────
const rankLevels = [
    { name: "🌱 Beginner", minXP: 0 },
    { name: "🥉 Bronze Scholar", minXP: 100 },
    { name: "🥈 Silver Scholar", minXP: 300 },
    { name: "🥇 Gold Scholar", minXP: 600 },
    { name: "💎 Diamond Scholar", minXP: 1000 },
    { name: "🏆 JEE Champion", minXP: 1500 },
    { name: "👑 JEE Legend", minXP: 2000 },
];

// ─── CHAPTER DETAILS: SYLLABUS + MOST ASKED ──────────────
const chapterDetailsData = {
    physics: {
        "Mechanics (NLM, WPE, Rotational)": {
            syllabus: [
                "Newton's Laws of Motion", "Free Body Diagrams", "Friction — Static & Kinetic",
                "Constraint Equations", "Pseudo Forces", "Work Done by Constant & Variable Forces",
                "Work-Energy Theorem", "Conservation of Energy", "Power",
                "Linear Momentum & Impulse", "Collisions — Elastic & Inelastic",
                "Centre of Mass", "Moment of Inertia", "Parallel & Perpendicular Axis Theorems",
                "Torque & Angular Momentum", "Rolling Motion", "Gravitation & Kepler's Laws",
                "Projectile Motion", "Circular Motion"
            ],
            mostAsked: [
                { type: "Block on incline with friction — find acceleration", count: 18, years: "Every year" },
                { type: "Work-energy theorem numerical", count: 15, years: "Every year" },
                { type: "Collision problems (coefficient of restitution)", count: 14, years: "9/10 years" },
                { type: "Rolling on incline — acceleration & friction", count: 12, years: "8/10 years" },
                { type: "Projectile — range/height/time of flight", count: 11, years: "Every year" },
                { type: "Moment of inertia calculation", count: 10, years: "8/10 years" },
                { type: "Conservation of angular momentum", count: 8, years: "7/10 years" },
                { type: "Gravitational PE & escape velocity", count: 7, years: "7/10 years" },
            ]
        },
        "Electrostatics & Current Electricity": {
            syllabus: [
                "Coulomb's Law & Superposition", "Electric Field Lines",
                "Electric Field due to Continuous Distributions", "Electric Potential & Potential Energy",
                "Gauss's Law & Applications", "Capacitors — Parallel Plate, Spherical",
                "Capacitor Combinations (Series/Parallel)", "Dielectrics",
                "Energy Stored in Capacitors", "Ohm's Law & Resistivity",
                "Kirchhoff's Laws", "Wheatstone Bridge", "Meter Bridge & Potentiometer",
                "RC Circuits", "Power Dissipation"
            ],
            mostAsked: [
                { type: "Capacitor combination — charge & voltage", count: 16, years: "Every year" },
                { type: "Electric field/potential due to charge distribution", count: 14, years: "Every year" },
                { type: "Kirchhoff's laws circuit solving", count: 12, years: "Every year" },
                { type: "Gauss's law application (sphere/cylinder)", count: 10, years: "9/10 years" },
                { type: "Wheatstone bridge balance condition", count: 8, years: "8/10 years" },
                { type: "Energy in capacitor with/without dielectric", count: 7, years: "7/10 years" },
            ]
        },
        "Electromagnetic Induction & AC": {
            syllabus: [
                "Faraday's Law of Induction", "Lenz's Law", "Motional EMF",
                "Self Inductance & Mutual Inductance", "Eddy Currents",
                "AC Voltage applied to R, L, C", "Phasor Diagrams",
                "LCR Series Circuit", "Resonance & Quality Factor",
                "Power in AC Circuits", "Transformer"
            ],
            mostAsked: [
                { type: "Motional EMF — rod on rails in magnetic field", count: 10, years: "9/10 years" },
                { type: "LCR circuit — impedance & current", count: 9, years: "9/10 years" },
                { type: "Resonance frequency calculation", count: 7, years: "7/10 years" },
                { type: "Self inductance of solenoid", count: 6, years: "6/10 years" },
                { type: "Transformer ratio problems", count: 5, years: "5/10 years" },
            ]
        },
        "Modern Physics": {
            syllabus: [
                "Photoelectric Effect", "Einstein's Equation", "Stopping Potential",
                "de Broglie Hypothesis", "Bohr's Model of Hydrogen Atom",
                "Energy Levels & Spectral Series", "X-Ray Production & Moseley's Law",
                "Nuclear Structure & Binding Energy", "Radioactive Decay Laws",
                "Alpha, Beta, Gamma Decay", "Nuclear Fission & Fusion", "Mass-Energy Equivalence"
            ],
            mostAsked: [
                { type: "Photoelectric — threshold frequency/stopping potential", count: 10, years: "Every year" },
                { type: "Bohr model — energy/radius of nth orbit", count: 9, years: "9/10 years" },
                { type: "de Broglie wavelength calculation", count: 8, years: "8/10 years" },
                { type: "Radioactive decay — half-life problems", count: 7, years: "7/10 years" },
                { type: "Nuclear binding energy per nucleon", count: 5, years: "5/10 years" },
            ]
        },
        "Optics (Ray + Wave)": {
            syllabus: [
                "Reflection — Plane & Curved Mirrors", "Mirror Formula & Magnification",
                "Refraction — Snell's Law", "Total Internal Reflection",
                "Lenses — Thin Lens Formula", "Lens Combinations",
                "Prism — Minimum Deviation", "Optical Instruments",
                "Young's Double Slit Experiment", "Single Slit Diffraction",
                "Resolving Power", "Polarization & Brewster's Angle"
            ],
            mostAsked: [
                { type: "Lens/mirror numerical — image position & magnification", count: 9, years: "Every year" },
                { type: "Young's double slit — fringe width/position", count: 8, years: "8/10 years" },
                { type: "Total internal reflection — critical angle", count: 6, years: "6/10 years" },
                { type: "Prism deviation problems", count: 5, years: "5/10 years" },
                { type: "Combination of lens and mirror", count: 5, years: "5/10 years" },
            ]
        },
        "Thermodynamics & KTG": {
            syllabus: [
                "Zeroth & First Law of Thermodynamics", "Isothermal Process",
                "Adiabatic Process", "Isobaric & Isochoric Process", "PV Diagrams",
                "Carnot Engine & Efficiency", "Kinetic Theory of Gases",
                "Maxwell Speed Distribution", "Degrees of Freedom",
                "Specific Heat Capacities (Cp, Cv)", "Mean Free Path"
            ],
            mostAsked: [
                { type: "Work done in thermodynamic process (PV diagram)", count: 8, years: "8/10 years" },
                { type: "Carnot efficiency calculation", count: 6, years: "6/10 years" },
                { type: "Adiabatic process — T, P, V relations", count: 6, years: "6/10 years" },
                { type: "RMS/average/most probable velocity", count: 5, years: "5/10 years" },
            ]
        },
        "Magnetism & Magnetic Effects": {
            syllabus: [
                "Biot-Savart Law", "Magnetic Field due to Wire/Loop/Solenoid",
                "Ampere's Circuital Law", "Force on Moving Charge in Magnetic Field",
                "Lorentz Force", "Cyclotron", "Force between Parallel Conductors",
                "Magnetic Moment", "Earth's Magnetism", "Para/Dia/Ferromagnetism"
            ],
            mostAsked: [
                { type: "Magnetic field at center of loop/solenoid", count: 8, years: "8/10 years" },
                { type: "Force on current-carrying conductor in B field", count: 7, years: "7/10 years" },
                { type: "Charged particle motion in magnetic field", count: 7, years: "7/10 years" },
                { type: "Biot-Savart law application", count: 5, years: "5/10 years" },
            ]
        },
        "Waves & Oscillations": {
            syllabus: [
                "Simple Harmonic Motion — Equation & Graphs", "Energy in SHM",
                "Spring-Mass System", "Simple Pendulum",
                "Wave Equation & Wave Speed", "Standing Waves & Harmonics",
                "Organ Pipes — Open & Closed", "Beats", "Doppler Effect"
            ],
            mostAsked: [
                { type: "SHM — time period of spring/pendulum", count: 7, years: "7/10 years" },
                { type: "Doppler effect — apparent frequency", count: 6, years: "6/10 years" },
                { type: "Standing waves — nodes/antinodes", count: 5, years: "5/10 years" },
                { type: "Beat frequency calculation", count: 4, years: "5/10 years" },
            ]
        },
        "Semiconductor Electronics": {
            syllabus: [
                "Energy Bands in Solids", "Intrinsic & Extrinsic Semiconductors",
                "p-n Junction Diode", "Forward & Reverse Bias",
                "Zener Diode", "LED & Photodiode", "Transistor (npn, pnp)",
                "Logic Gates — AND, OR, NOT, NAND, NOR", "Rectifiers"
            ],
            mostAsked: [
                { type: "Logic gate output determination", count: 5, years: "6/10 years" },
                { type: "Diode in circuit — current/voltage", count: 4, years: "5/10 years" },
                { type: "Rectifier — ripple frequency", count: 3, years: "4/10 years" },
            ]
        },
        "Fluid Mechanics": {
            syllabus: [
                "Pascal's Law & Hydraulic Lift", "Pressure at Depth & Manometers",
                "Archimedes' Principle & Buoyancy", "Equation of Continuity",
                "Bernoulli's Principle & Applications", "Torricelli's Law & Efflux Velocity",
                "Viscosity & Poiseuille's Formula", "Stokes' Law & Terminal Velocity",
                "Surface Tension & Surface Energy", "Capillary Rise & Excess Pressure"
            ],
            mostAsked: [
                { type: "Bernoulli's theorem numerical (venturimeter / leaking tank)", count: 7, years: "7/10 years" },
                { type: "Capillary rise & excess pressure in soap bubble", count: 5, years: "6/10 years" },
                { type: "Terminal velocity using Stokes' law", count: 4, years: "5/10 years" },
                { type: "Buoyant force on floating/submerged body", count: 4, years: "4/10 years" },
            ]
        },
    },
    chemistry: {
        "Chemical Bonding & Molecular Structure": {
            syllabus: [
                "Ionic Bond — Lattice Energy", "Covalent Bond — Lewis Structures",
                "VSEPR Theory — Shapes of Molecules", "Hybridization (sp, sp², sp³, sp³d, sp³d²)",
                "Molecular Orbital Theory", "Bond Order & Magnetic Properties",
                "Hydrogen Bonding", "Dipole Moment", "Fajan's Rules",
                "Resonance & Formal Charge"
            ],
            mostAsked: [
                { type: "Hybridization & shape identification", count: 12, years: "Every year" },
                { type: "Bond order from MOT configuration", count: 9, years: "9/10 years" },
                { type: "VSEPR geometry prediction", count: 8, years: "8/10 years" },
                { type: "Dipole moment — zero or non-zero", count: 6, years: "6/10 years" },
                { type: "Paramagnetic/diamagnetic from MO diagram", count: 5, years: "5/10 years" },
            ]
        },
        "Coordination Compounds": {
            syllabus: [
                "Werner's Theory", "IUPAC Nomenclature",
                "Isomerism — Geometrical, Optical, Linkage, Ionization",
                "Crystal Field Theory (CFT)", "Splitting in Octahedral & Tetrahedral",
                "Spectrochemical Series", "Magnetic Properties",
                "EAN Rule & Stability", "Applications of Coordination Compounds"
            ],
            mostAsked: [
                { type: "IUPAC naming of complex compounds", count: 9, years: "9/10 years" },
                { type: "Isomerism identification", count: 7, years: "7/10 years" },
                { type: "CFT — d-orbital splitting & color", count: 6, years: "6/10 years" },
                { type: "Oxidation state of central metal", count: 6, years: "7/10 years" },
                { type: "Magnetic moment calculation", count: 4, years: "4/10 years" },
            ]
        },
        "Organic Chemistry: GOC & Reaction Mechanisms": {
            syllabus: [
                "Inductive Effect (+I, -I)", "Resonance & Mesomeric Effect",
                "Hyperconjugation", "Electrophilic Addition",
                "Electrophilic Aromatic Substitution (EAS)", "SN1 & SN2 Mechanisms",
                "E1 & E2 Elimination", "Carbocation Rearrangement",
                "Acidity & Basicity Comparison", "Tautomerism"
            ],
            mostAsked: [
                { type: "Acidity/basicity order comparison", count: 12, years: "Every year" },
                { type: "SN1 vs SN2 — product/rate prediction", count: 10, years: "Every year" },
                { type: "Stability order of carbocations", count: 9, years: "9/10 years" },
                { type: "EAS — directing effects of substituents", count: 8, years: "8/10 years" },
                { type: "Markovnikov vs anti-Markovnikov addition", count: 6, years: "6/10 years" },
            ]
        },
        "Aldehydes, Ketones & Carboxylic Acids": {
            syllabus: [
                "Nucleophilic Addition to C=O", "Aldol Condensation",
                "Cannizzaro Reaction", "Wittig Reaction",
                "Clemmensen & Wolff-Kishner Reduction", "Oxidation Reactions",
                "Grignard Reaction with Aldehydes/Ketones",
                "Esterification", "Decarboxylation", "Hell-Volhard-Zelinsky Reaction",
                "Acidity of Carboxylic Acids — Substituent Effects"
            ],
            mostAsked: [
                { type: "Named reaction product prediction (Aldol, Cannizzaro)", count: 10, years: "Every year" },
                { type: "Reagent identification for functional group conversion", count: 8, years: "8/10 years" },
                { type: "Acidity order of substituted carboxylic acids", count: 7, years: "7/10 years" },
                { type: "Grignard reaction — product identification", count: 5, years: "5/10 years" },
            ]
        },
        "Chemical Equilibrium & Ionic Equilibrium": {
            syllabus: [
                "Law of Mass Action", "Equilibrium Constant (Kp, Kc, Kx)",
                "Le Chatelier's Principle", "Degree of Dissociation",
                "Acids & Bases — Brønsted & Lewis", "pH & pOH Calculations",
                "Buffer Solutions — Henderson Equation", "Solubility Product (Ksp)",
                "Common Ion Effect", "Hydrolysis of Salts"
            ],
            mostAsked: [
                { type: "pH calculation of weak acid/base", count: 10, years: "Every year" },
                { type: "Buffer solution pH — Henderson equation", count: 8, years: "8/10 years" },
                { type: "Le Chatelier — effect of T/P/concentration", count: 7, years: "7/10 years" },
                { type: "Kp ↔ Kc conversion", count: 6, years: "6/10 years" },
                { type: "Solubility product & precipitation prediction", count: 5, years: "5/10 years" },
            ]
        },
        "Electrochemistry": {
            syllabus: [
                "Galvanic Cells & Cell Notation", "Standard Electrode Potential",
                "Nernst Equation", "Relationship ΔG° and E°cell",
                "Electrolysis — Faraday's Laws", "Conductance & Molar Conductivity",
                "Kohlrausch's Law", "Batteries — Primary & Secondary",
                "Corrosion & Prevention"
            ],
            mostAsked: [
                { type: "Nernst equation — EMF calculation at non-standard", count: 8, years: "8/10 years" },
                { type: "Faraday's law — mass deposited in electrolysis", count: 6, years: "6/10 years" },
                { type: "Cell EMF from electrode potentials", count: 6, years: "6/10 years" },
                { type: "Molar conductivity at infinite dilution", count: 4, years: "4/10 years" },
            ]
        },
        "Thermodynamics & Thermochemistry": {
            syllabus: [
                "Hess's Law", "Standard Enthalpy of Formation",
                "Bond Dissociation Energy", "Kirchhoff's Equation",
                "Entropy & Second Law", "Gibbs Free Energy & Spontaneity",
                "ΔG° = -RT ln K", "Third Law of Thermodynamics"
            ],
            mostAsked: [
                { type: "Hess's law — enthalpy of reaction calculation", count: 6, years: "7/10 years" },
                { type: "ΔG = ΔH − TΔS — spontaneity prediction", count: 6, years: "6/10 years" },
                { type: "Bond energy calculation of ΔH", count: 4, years: "5/10 years" },
            ]
        },
        "Chemical Kinetics": {
            syllabus: [
                "Rate of Reaction & Rate Law", "Order & Molecularity",
                "First Order Kinetics — Half-life", "Zero Order & Second Order",
                "Arrhenius Equation", "Activation Energy & Catalyst",
                "Temperature Dependence", "Pseudo First Order Reactions"
            ],
            mostAsked: [
                { type: "First order half-life and rate constant", count: 7, years: "7/10 years" },
                { type: "Arrhenius — activation energy/temperature effect", count: 6, years: "6/10 years" },
                { type: "Order determination from experimental data", count: 5, years: "5/10 years" },
                { type: "Time for x% completion (first order)", count: 4, years: "5/10 years" },
            ]
        },
        "p-Block Elements": {
            syllabus: [
                "Group 13 — Boron Family", "Group 14 — Carbon Family",
                "Group 15 — Nitrogen Family & Oxoacids", "Group 16 — Oxygen Family & Oxoacids",
                "Group 17 — Halogens & Interhalogen", "Group 18 — Noble Gas Compounds",
                "Anomalous Properties of First Element", "Diagonal Relationships"
            ],
            mostAsked: [
                { type: "Structure/basicity of oxoacids", count: 8, years: "8/10 years" },
                { type: "Interhalogen compounds — shape/hybridization", count: 6, years: "6/10 years" },
                { type: "Anomalous properties of N, O, F", count: 5, years: "5/10 years" },
                { type: "Noble gas compound geometry", count: 4, years: "4/10 years" },
            ]
        },
        "Solutions & Colligative Properties": {
            syllabus: [
                "Types of Solutions & Concentration Units (Molarity, Molality, Mole Fraction)",
                "Raoult's Law & Ideal/Non-Ideal Solutions", "Positive & Negative Deviations",
                "Azeotropes", "Relative Lowering of Vapour Pressure",
                "Elevation in Boiling Point (ΔTb = Kb·m)", "Depression in Freezing Point (ΔTf = Kf·m)",
                "Osmotic Pressure (π = CRT)", "Van't Hoff Factor (i) — Degree of Association/Dissociation",
                "Abnormal Molar Masses"
            ],
            mostAsked: [
                { type: "Van't Hoff factor (i) with colligative property formula", count: 8, years: "8/10 years" },
                { type: "Depression in freezing point / elevation in boiling point calculation", count: 7, years: "8/10 years" },
                { type: "Raoult's law — total vapour pressure of binary mixture", count: 6, years: "7/10 years" },
                { type: "Osmotic pressure comparison (isotonic solutions)", count: 4, years: "5/10 years" },
            ]
        },
    },
    maths: {
        "Calculus (Limits, Continuity, Differentiability)": {
            syllabus: [
                "Limits — Standard Forms", "L'Hôpital's Rule",
                "Squeeze Theorem", "Continuity at a Point & Interval",
                "Types of Discontinuities", "Differentiability & its Relation with Continuity",
                "Derivatives — Chain, Product, Quotient Rule",
                "Implicit & Parametric Differentiation", "Higher Order Derivatives",
                "Rolle's Theorem & LMVT", "Maxima & Minima",
                "Monotonicity & Concavity", "Rate of Change"
            ],
            mostAsked: [
                { type: "Limit evaluation using Taylor series/L'Hôpital", count: 12, years: "Every year" },
                { type: "Maxima/minima — critical points & second derivative test", count: 10, years: "Every year" },
                { type: "Continuity & differentiability at a point", count: 8, years: "8/10 years" },
                { type: "Application of LMVT/Rolle's theorem", count: 6, years: "6/10 years" },
                { type: "Rate of change problems", count: 5, years: "5/10 years" },
            ]
        },
        "Integration & Area Under Curves": {
            syllabus: [
                "Standard Integrals", "Integration by Substitution",
                "Integration by Parts (ILATE)", "Partial Fractions",
                "Trigonometric Substitutions", "Special Integrals (eˣ[f+f'] type)",
                "Definite Integrals — Properties", "King's Rule",
                "Walli's Formula", "Leibniz Rule",
                "Area Under Curves", "Area Between Two Curves"
            ],
            mostAsked: [
                { type: "Definite integral using properties (King's rule)", count: 12, years: "Every year" },
                { type: "Integration by parts with eˣ functions", count: 10, years: "Every year" },
                { type: "Area bounded by curves (parabola, line, circle)", count: 9, years: "9/10 years" },
                { type: "Partial fraction decomposition integral", count: 6, years: "6/10 years" },
                { type: "Reduction formula / Walli's formula", count: 5, years: "5/10 years" },
            ]
        },
        "Coordinate Geometry (Straight Lines, Circles, Conics)": {
            syllabus: [
                "Distance, Section, Area Formulas", "Equations of a Line — All Forms",
                "Angle between Lines & Distance from Line", "Family of Lines",
                "Circle — General & Standard Equation", "Tangent & Normal to Circle",
                "Radical Axis & Power of a Point",
                "Parabola — Standard Forms & Properties", "Parametric Form of Parabola",
                "Ellipse — Eccentricity, Foci, Directrix", "Tangent to Ellipse",
                "Hyperbola — Asymptotes, Conjugate", "Tangent to Conics (T=0)"
            ],
            mostAsked: [
                { type: "Tangent/normal to conic at a point", count: 14, years: "Every year" },
                { type: "Locus problems involving conics", count: 10, years: "Every year" },
                { type: "Area of triangle formed by lines", count: 8, years: "8/10 years" },
                { type: "Equation of circle through given points", count: 7, years: "7/10 years" },
                { type: "Eccentricity and focus of conics", count: 6, years: "6/10 years" },
                { type: "Chord of contact/pair of tangents", count: 5, years: "5/10 years" },
            ]
        },
        "Probability & Statistics": {
            syllabus: [
                "Classical Probability", "Conditional Probability P(A|B)",
                "Multiplication & Addition Theorems", "Bayes' Theorem",
                "Total Probability", "Binomial Distribution",
                "Mean, Median, Mode", "Variance & Standard Deviation",
                "Random Variables"
            ],
            mostAsked: [
                { type: "Conditional probability & Bayes' theorem", count: 10, years: "Every year" },
                { type: "Binomial distribution — mean/variance", count: 7, years: "7/10 years" },
                { type: "Probability with combinatorics (draw balls)", count: 7, years: "7/10 years" },
                { type: "Mean & variance calculation", count: 5, years: "5/10 years" },
            ]
        },
        "Matrices & Determinants": {
            syllabus: [
                "Types of Matrices", "Matrix Operations & Algebra",
                "Transpose, Symmetric, Skew-Symmetric", "Determinant Properties",
                "Cofactors & Adjoint", "Inverse of a Matrix",
                "System of Linear Equations", "Cramer's Rule",
                "Cayley-Hamilton Theorem", "Rank of a Matrix"
            ],
            mostAsked: [
                { type: "System of equations — unique/infinite/no solution", count: 9, years: "9/10 years" },
                { type: "|kA| = kⁿ|A| trap questions", count: 7, years: "7/10 years" },
                { type: "Inverse matrix & adjoint calculation", count: 6, years: "6/10 years" },
                { type: "Idempotent/involutory matrix properties", count: 4, years: "4/10 years" },
            ]
        },
        "3D Geometry & Vectors": {
            syllabus: [
                "Vectors — Addition, Scalar Multiplication", "Dot Product & Angle",
                "Cross Product & Area", "Scalar Triple Product — Volume",
                "Direction Cosines & Ratios", "Equation of Line in 3D",
                "Equation of Plane", "Angle between Line & Plane",
                "Shortest Distance between Skew Lines", "Image of Point in Plane"
            ],
            mostAsked: [
                { type: "Shortest distance between two skew lines", count: 8, years: "8/10 years" },
                { type: "Equation of plane through 3 points", count: 7, years: "7/10 years" },
                { type: "Scalar triple product — coplanar check", count: 6, years: "6/10 years" },
                { type: "Angle between line and plane", count: 5, years: "5/10 years" },
                { type: "Image/foot of perpendicular from point to plane", count: 4, years: "4/10 years" },
            ]
        },
        "Trigonometry": {
            syllabus: [
                "Trigonometric Identities", "Compound Angle Formulas",
                "Multiple & Half Angle Formulas", "Sum-to-Product & Product-to-Sum",
                "Trigonometric Equations — General Solutions",
                "Inverse Trigonometric Functions", "Properties of Triangles",
                "Sine Rule, Cosine Rule, Area", "Heights & Distances"
            ],
            mostAsked: [
                { type: "General solution of trigonometric equations", count: 7, years: "7/10 years" },
                { type: "Inverse trig — simplification/evaluation", count: 6, years: "6/10 years" },
                { type: "Properties of triangles (sine/cosine rule)", count: 5, years: "5/10 years" },
                { type: "Max/min of trigonometric expressions", count: 4, years: "4/10 years" },
            ]
        },
        "Differential Equations": {
            syllabus: [
                "Formation of Differential Equations", "Order & Degree",
                "Variable Separable Method", "Homogeneous Differential Equations",
                "Linear Differential Equations", "Exact Differential Equations",
                "Applications — Growth/Decay, Geometry"
            ],
            mostAsked: [
                { type: "Order & degree identification (with trig/log)", count: 6, years: "6/10 years" },
                { type: "Solving linear first order DE", count: 5, years: "5/10 years" },
                { type: "Formation of DE from family of curves", count: 5, years: "5/10 years" },
                { type: "Variable separable method", count: 4, years: "4/10 years" },
            ]
        },
        "Sequences & Series": {
            syllabus: [
                "Arithmetic Progression — nth term & sum", "Geometric Progression — nth term & sum",
                "Harmonic Progression", "AGP — Sum of AP×GP",
                "AM ≥ GM ≥ HM Inequality", "Sum of Squares & Cubes",
                "Telescoping Series", "Method of Differences", "Vn Method"
            ],
            mostAsked: [
                { type: "Sum of n terms — AP/GP/Special series", count: 6, years: "6/10 years" },
                { type: "AM-GM inequality application", count: 5, years: "5/10 years" },
                { type: "Finding common ratio/difference from conditions", count: 4, years: "5/10 years" },
                { type: "Infinite GP sum", count: 4, years: "4/10 years" },
            ]
        },
        "Permutations & Combinations": {
            syllabus: [
                "Fundamental Counting Principle", "Permutations (nPr)",
                "Combinations (nCr)", "Permutations with Repetition",
                "Circular Permutations", "Derangements",
                "Distribution of Objects", "Multinomial Theorem Applications"
            ],
            mostAsked: [
                { type: "Selection & arrangement with conditions", count: 5, years: "5/10 years" },
                { type: "Distribution of identical/distinct objects", count: 4, years: "4/10 years" },
                { type: "Word formation with restrictions", count: 4, years: "4/10 years" },
                { type: "Circular arrangement problems", count: 3, years: "3/10 years" },
            ]
        },
        "Complex Numbers & Quadratic Equations": {
            syllabus: [
                "Algebra of Complex Numbers & Conjugate", "Modulus & Argument (Principal)",
                "Polar & Euler Form (r e^(iθ))", "Triangle Inequality (|z1 + z2| ≤ |z1| + |z2|)",
                "De Moivre's Theorem", "Cube Roots of Unity (1, ω, ω²)",
                "n-th Roots of Unity", "Geometry of Complex Numbers (Circles, Lines)",
                "Quadratic Equations — Roots & Coefficients Relation", "Location of Roots",
                "Common Roots Condition", "Descartes' Rule of Signs"
            ],
            mostAsked: [
                { type: "Cube roots of unity (1 + ω + ω² = 0) algebraic manipulation", count: 7, years: "7/10 years" },
                { type: "Locus of complex numbers |z - z1| = |z - z2| or arg conditions", count: 6, years: "7/10 years" },
                { type: "Location of roots of quadratic equation within interval", count: 6, years: "6/10 years" },
                { type: "Triangle inequality max/min value problems", count: 5, years: "5/10 years" },
                { type: "Quadratic expression sign (a > 0, D < 0 for always positive)", count: 4, years: "5/10 years" }
            ]
        },
    }
};

// ─── TOPIC MASTERCLASSES (TOP FACULTY EXPLANATIONS) ───
const topicMasterclassData = {
    // ════════ PHYSICS: MECHANICS (ALL 19 TOPICS) ════════
    "Newton's Laws of Motion": {
        quote: "Forces do not cause motion — forces cause CHANGE in motion! Grasp this and half of Mechanics is solved.",
        intuition: "Think of an object like the world's most stubborn couch potato: it hates acceleration. If it is resting, it wants to stay resting. If it is cruising at 60 km/h, it wants to cruise forever without burning fuel (Inertia, 1st Law). When you do push it, how briskly it speeds up depends on your net push divided by its inertia: a = F_net / m (2nd Law). And remember: forces are interactions, never solo acts. If you lean against a wall, the wall pushes right back on your hand with identical magnitude (3rd Law).",
        coreFormulas: [
            { label: "2nd Law (General)", formula: "F_net = dp/dt = m·a + v·(dm/dt) [Use m·a when mass is constant, v_rel·(dm/dt) for rockets]" },
            { label: "Impulse-Momentum", formula: "J = ∫ F dt = Δp = p_final - p_initial" },
            { label: "3rd Law Pair", formula: "F_AB = - F_BA (Always on two DIFFERENT objects, never on the same object)" }
        ],
        kotaTricks: [
            "⚡ The 'Whole System' Shortcut: When multiple connected blocks move together with common acceleration, combine them! a = (Net Unbalanced External Driving Force) / (Total Mass). Internal tensions & normal forces vanish from the equation.",
            "⚡ Pulley Acceleration Quick Trick: a = (Supporting weights - Opposing weights)·g / (Total mass in motion)."
        ],
        commonTraps: [
            "🚨 Action and Reaction NEVER cancel each other out! Normal force from the table and gravity on a block are NOT action-reaction pairs because both act on the same block.",
            "🚨 Forgetting to resolve vectors along the direction of motion vs perpendicular to motion before writing ΣF = ma."
        ],
        benchmarkQuestion: {
            question: "Three blocks of mass 2 kg, 3 kg, and 5 kg are in contact on a frictionless table. A horizontal push of 20 N is applied to the 2 kg block. What is the contact force between the 3 kg and 5 kg block?",
            approach: "1. Whole System: a = F_ext / (m1 + m2 + m3) = 20 / (2 + 3 + 5) = 2 m/s².\n2. Isolate the 5 kg block: The ONLY horizontal force accelerating the 5 kg block is the contact push N from the 3 kg block.\n3. N = m5 · a = 5 · 2 = 10 N.",
            answer: "10 N (Solved in 25 seconds without writing 3 separate equations!)"
        }
    },

    "Free Body Diagrams": {
        quote: "Draw the FBD correctly, and Newton does the rest. Mess up the FBD, and no math can rescue you.",
        intuition: "An FBD is an X-ray of ONE isolated object. You mentally erase the entire universe, draw the object as a point or box, and ONLY draw arrows for forces acting ON the object — never forces exerted BY the object. Count your contact points: strings pull (T), surfaces push perpendicularly (N) and slide with friction (f). Add non-contact gravity (mg) downward. That is the whole list!",
        coreFormulas: [
            { label: "Equilibrium", formula: "ΣFx = 0  and  ΣFy = 0" },
            { label: "Accelerated Frame", formula: "ΣF_real + F_pseudo = 0  (or ΣF_real = m·a in ground frame)" }
        ],
        kotaTricks: [
            "⚡ Contact Rule: Count surfaces touching the body. If 2 surfaces touch, you have exactly 2 Normal forces and at most 2 friction forces.",
            "⚡ Incline Coordinate Hack: Always tilt your axes! Make x-axis parallel to incline, y-axis perpendicular. mg breaks into mg·sinθ down incline and mg·cosθ perpendicular."
        ],
        commonTraps: [
            "🚨 Drawing 'ma' as a force on the FBD! 'ma' is the RESULT of forces, not an actual force. Never draw an arrow called 'ma'.",
            "🚨 Drawing the force exerted BY the object on surrounding surfaces."
        ],
        benchmarkQuestion: {
            question: "A 4 kg block rests on a 30° smooth incline, held by a horizontal string. Find the tension in the string and normal force.",
            approach: "1. FBD forces: mg = 40 N vertically down, Normal N perpendicular to incline (at 30° to vertical), Tension T horizontal.\n2. Along incline: T cos 30° = mg sin 30° ⇒ T = mg tan 30° = 40 · (1/√3) = 23.1 N.\n3. Perpendicular: N = mg cos 30° + T sin 30° = 40(√3/2) + 23.1(0.5) = 46.2 N.",
            answer: "T = 23.1 N, N = 46.2 N"
        }
    },

    "Friction — Static & Kinetic": {
        quote: "Friction is smart: static friction does not have a fixed value — it is a self-adjusting guardian angel until it breaks!",
        intuition: "Static friction is like an arm-wrestling opponent who only pushes back with exactly as much force as you push, up to a maximum limit (f_s_max = μ_s·N). If you push a heavy sofa with 5 N, friction pushes back with 5 N, NOT μ_s·N! Only when your push exceeds μ_s·N does it slip, and then kinetic friction (f_k = μ_k·N) takes over with a constant value.",
        coreFormulas: [
            { label: "Static Friction", formula: "0 ≤ f_s ≤ f_s_max  where  f_s_max = μ_s · N" },
            { label: "Kinetic Friction", formula: "f_k = μ_k · N  (Opposes relative sliding between surfaces)" },
            { label: "Angle of Repose", formula: "tan θ = μ_s (Max incline angle before slipping begins)" }
        ],
        kotaTricks: [
            "⚡ The 2-Block Master Technique: When block A sits on block B and you pull one block, always find the MAXIMUM common acceleration first: a_max = f_s_max / m_top = μ_s · g. If the pulling force causes a < a_max, both blocks move together as one!",
            "⚡ Direction of Friction: Think 'if there was zero friction, which way would this surface slip relative to the other?' Friction acts in the exact opposite direction of that imaginary slip."
        ],
        commonTraps: [
            "🚨 Blindly substituting f = μ·N without checking if the applied force is actually enough to cause motion!",
            "🚨 Assuming Normal force is always mg. On an incline N = mg cos θ; if a vertical push F acts, N = mg + F."
        ],
        benchmarkQuestion: {
            question: "A 5 kg block on a rough horizontal floor (μ_s = 0.4, μ_k = 0.3) is pulled by a horizontal force of 15 N. What is the friction force acting on it? (g = 10 m/s²)",
            approach: "1. Normal force N = mg = 50 N.\n2. Maximum static friction f_s_max = μ_s · N = 0.4 · 50 = 20 N.\n3. The applied force is 15 N, which is LESS than 20 N.\n4. Therefore, the block does not move! Static friction adjusts to exactly balance the push: f_s = 15 N.",
            answer: "15 N (NOT 20 N and NOT 15 N to the right!)"
        }
    },

    "Constraint Equations": {
        quote: "Pulleys and strings cannot stretch or vanish. Their geometry dictates that every millimeter lost here is gained there.",
        intuition: "Constraint relations are pure geometry disguised as physics. If you pull a movable pulley up by 1 cm, it takes 1 cm from the left string and 1 cm from the right string, meaning the free end must feed 2 cm of rope! Instead of getting tangled in string lengths, Kota faculties use the legendary Virtual Work Method: strings do zero net work!",
        coreFormulas: [
            { label: "Virtual Work Constraint", formula: "Σ (T · a) = 0  and  Σ (T · v) = 0  and  Σ (T · x) = 0" },
            { label: "Wedge Constraint", formula: "v_perpendicular_to_contact_surface MUST be identical for both wedge and block" }
        ],
        kotaTricks: [
            "⚡ The Tension-Dot-Acceleration Magic: Label tension in every string branch in terms of 'T'. Write Σ (T_i · a_i · cos θ_i) = 0. Instant acceleration relationship in 10 seconds without calculating string lengths!",
            "⚡ Wedge Hack: Draw the common normal at the contact surface. The velocity component of both bodies along this normal MUST match: v1 · sin α = v2 · cos β."
        ],
        commonTraps: [
            "🚨 Forgetting the sign of cos θ when applying Σ T · a = 0. If T and a point in the same direction, cos 0° = +1; if opposite, cos 180° = -1."
        ],
        benchmarkQuestion: {
            question: "A block A of mass m is suspended from a movable pulley connected to fixed block B on a table. If block A descends with acceleration a_A, what is the acceleration a_B of block B?",
            approach: "1. Tension on B is T horizontally. Tension supporting movable pulley A is 2T upward.\n2. Apply Σ (T · a) = 0:\n   T_B · a_B · (1) + (2T) · a_A · (-1) = 0\n   T · a_B - 2T · a_A = 0 ⇒ a_B = 2 · a_A.",
            answer: "a_B = 2 · a_A"
        }
    },

    "Pseudo Forces": {
        quote: "Pseudo force is the price you pay for being lazy and observing physics from an accelerating reference frame!",
        intuition: "When a bus driver slams the gas pedal, you feel pushed back into your seat. Does a ghost push you? No! The bus is accelerating forward under you, and your inertia wants to stay behind. If you insist on sitting inside the bus (an accelerating, non-inertial frame) and doing physics, you MUST add a fictitious 'pseudo force' F_pseudo = - m · a_frame on every mass, pointing opposite to the frame's acceleration.",
        coreFormulas: [
            { label: "Pseudo Force", formula: "F_pseudo = - m · a_frame (Magnitude = m · a_frame, direction strictly opposite to a_frame)" },
            { label: "Effective Gravity", formula: "g_eff = g - a_frame  (vector subtraction)" }
        ],
        kotaTricks: [
            "⚡ Elevator Pendulum Trick: T = 2π √(L / g_eff). Lift accelerating up with 'a' ⇒ g_eff = g + a (heavier). Accelerating down with 'a' ⇒ g_eff = g - a (lighter). Free fall ⇒ g_eff = 0 (infinite period!).",
            "⚡ Wedge in Motion: To keep a block stationary on a smooth incline of angle θ, the wedge must accelerate with a = g · tan θ to the right."
        ],
        commonTraps: [
            "🚨 Using the acceleration of the object itself instead of the acceleration of the FRAME for F_pseudo!",
            "🚨 Adding pseudo force when you are already observing from the stationary ground frame (inertial frame)."
        ],
        benchmarkQuestion: {
            question: "A simple pendulum of mass m is suspended inside a car accelerating horizontally with 'a'. Find the angle θ the string makes with vertical in equilibrium.",
            approach: "1. Sit inside the car (non-inertial frame accelerating right with 'a').\n2. Forces on bob: mg downward, F_pseudo = m·a to the left, Tension T along string.\n3. Balance forces: T sin θ = m·a, T cos θ = m·g.\n4. Divide: tan θ = a / g ⇒ θ = arctan(a / g).",
            answer: "θ = tan⁻¹(a / g)"
        }
    },

    "Work Done by Constant & Variable Forces": {
        quote: "Work is not about how tired you get; it is strictly about how much force actually helped displacement happen.",
        intuition: "If you push a wall until you sweat for 3 hours, your muscles did work internally, but in Physics, work done ON the wall is strictly ZERO because the wall did not move! Work is the dot product: W = F · d · cos θ. Only the force component in the direction of motion counts. If force varies (like a spring), work is the area under the Force vs Position (F-x) curve.",
        coreFormulas: [
            { label: "Constant Force", formula: "W = F · d = |F| |d| cos θ" },
            { label: "Variable Force (1D)", formula: "W = ∫[x1 to x2] F(x) dx  (= Area under F-x graph)" },
            { label: "Variable Force (3D)", formula: "W = ∫ Fx dx + ∫ Fy dy + ∫ Fz dz" }
        ],
        kotaTricks: [
            "⚡ Perpendicular Forces Do Zero Work: Centripetal force, magnetic Lorentz force (q v × B), and Normal force on a stationary surface always have θ = 90°, so W = 0 automatically!",
            "⚡ Conservative Force Test: If F = -∇U, work along any closed loop is zero: ∮ F · dr = 0."
        ],
        commonTraps: [
            "🚨 Confusing sign of work done BY the spring (W = -½ k x²) vs work done ON the spring to compress it (W = +½ k x²).",
            "🚨 Forgetting that friction CAN do positive work (e.g. static friction on the top block in a two-block system causes it to accelerate forward)."
        ],
        benchmarkQuestion: {
            question: "A force F = (3x² + 2x) N acts on a particle moving from x = 1 m to x = 3 m. Calculate the work done.",
            approach: "1. Variable force in 1D ⇒ W = ∫[1 to 3] (3x² + 2x) dx.\n2. Anti-derivative = [x³ + x²] from 1 to 3.\n3. Evaluate at 3: 3³ + 3² = 27 + 9 = 36 J.\n4. Evaluate at 1: 1³ + 1² = 1 + 1 = 2 J.\n5. W = 36 - 2 = 34 J.",
            answer: "34 Joules"
        }
    },

    "Work-Energy Theorem": {
        quote: "The single most powerful hammer in JEE Physics. When kinematics looks impossible, W-E theorem solves it in two lines.",
        intuition: "Instead of tracking time, vectors, and accelerations at every microsecond, Work-Energy theorem looks at the universe like a bank account. Net work done by ALL forces (gravity, friction, tension, hands, springs, pseudo forces) equals the change in kinetic energy: W_all = ΔK = ½mv_f² - ½mv_i². No matter how curved the trajectory is!",
        coreFormulas: [
            { label: "Universal Form", formula: "W_conservative + W_non-conservative + W_external = ΔK" },
            { label: "Alternative Form", formula: "W_non-conservative + W_external = ΔE_mechanical = ΔK + ΔU" }
        ],
        kotaTricks: [
            "⚡ Loop-the-Loop Minimum Speed: At highest point v_top = √(g·R); at lowest point v_bottom = √(5g·R) for a string to avoid slackening.",
            "⚡ Spring-Mass on Incline: Instead of integrating, write: W_gravity + W_spring + W_friction = 0 at the turning point (where v starts from 0 and momentarily becomes 0)."
        ],
        commonTraps: [
            "🚨 Forgetting friction work: W_friction = - f_k · (actual path length s), NOT displacement! Friction dissipates energy continuously along every curve.",
            "🚨 Counting potential energy twice! If you include W_gravity on the left side, DO NOT also include ΔU_gravity on the right side."
        ],
        benchmarkQuestion: {
            question: "A 2 kg block slides down a curved frictionless track of height h = 5 m and hits a horizontal spring with k = 400 N/m. Find the maximum compression of the spring. (g = 10 m/s²)",
            approach: "1. All forces are conservative (gravity + spring). W_all = ΔK.\n2. Initially at rest (K_i = 0), at max compression momentarily at rest (K_f = 0) ⇒ ΔK = 0.\n3. W_gravity + W_spring = 0 ⇒ mgh - ½ k x² = 0.\n4. ½ (400) x² = (2)(10)(5) = 100 ⇒ 200 x² = 100 ⇒ x² = 0.5 ⇒ x = 1/√2 = 0.707 m.",
            answer: "x = 0.71 m"
        }
    },

    "Conservation of Energy": {
        quote: "Energy cannot be created or destroyed — it only changes clothes from Kinetic to Potential to Thermal.",
        intuition: "Think of energy like 100 gold coins. If you drop a stone from a cliff, it starts with 100 coins of Gravitational PE and 0 coins of KE. Halfway down, it has 50 PE and 50 KE. Just before impact, all 100 coins have converted to KE. If there is friction or air drag, some coins leak into heat, but the grand total is ALWAYS conserved.",
        coreFormulas: [
            { label: "Mechanical Energy", formula: "E_mech = K + U = constant (valid when ONLY conservative forces do work)" },
            { label: "Gravitational PE", formula: "U_g = m · g · h  (near Earth surface)" },
            { label: "Spring Elastic PE", formula: "U_s = ½ k x²" }
        ],
        kotaTricks: [
            "⚡ Reference Level Freedom: You can set U = 0 anywhere you like! Choose the lowest point in the problem as U = 0 so all your PE terms stay positive.",
            "⚡ Vertical Circle Critical Speed for Rod vs String: For a rigid massless rod, speed at top can be 0 (v_top = 0 ⇒ v_bottom = √(4gR) = 2√(gR)), while for a string it cannot go slack (v_top = √(gR) ⇒ v_bottom = √(5gR))."
        ],
        commonTraps: [
            "🚨 Using conservation of mechanical energy when friction or inelastic collision is present. (Mechanical energy is lost to heat!)."
        ],
        benchmarkQuestion: {
            question: "A pendulum bob of mass m is released from horizontal position (θ = 90°). Find the tension in the string when it reaches the lowest point.",
            approach: "1. Conservation of energy: mgl = ½ m v² ⇒ v² = 2gl.\n2. At lowest point, forces are Tension T upward and mg downward.\n3. Net radial force provides centripetal acceleration: T - mg = m v² / l.\n4. Substitute v² = 2gl: T - mg = m(2gl) / l = 2mg ⇒ T = 3mg.",
            answer: "T = 3 mg (Exactly 3 times its weight!)"
        }
    },

    "Power": {
        quote: "Work tells you how much was done; Power tells you how fast and powerful the engine is.",
        intuition: "Walking up 5 flights of stairs and sprinting up 5 flights of stairs requires the exact same work (mgh). But sprinting makes your heart pound because you delivered that work in 15 seconds instead of 5 minutes! Power is the rate of doing work: P = dW/dt = F · v.",
        coreFormulas: [
            { label: "Average Power", formula: "P_avg = ΔW / Δt" },
            { label: "Instantaneous Power", formula: "P = F · v = F · v · cos θ" },
            { label: "Constant Power Acceleration", formula: "If P = const ⇒ v ∝ t^(1/2)  and  x ∝ t^(3/2)" }
        ],
        kotaTricks: [
            "⚡ Constant Power Master Scaling: For a vehicle accelerated from rest by constant power P: v(t) = √(2Pt/m) ∝ t^(1/2), and position x(t) = ⅓ √(8P/m) · t^(3/2) ∝ t^(1.5). NTA loves this exact proportionality question!",
            "⚡ Pump Power: P = (dm/dt) · gh + ½ (dm/dt) · v² = ρ·A·v·(gh + ½v²)."
        ],
        commonTraps: [
            "🚨 Assuming F is constant when Power is constant. As v increases, if P = F·v is constant, force F MUST decrease as 1/v!"
        ],
        benchmarkQuestion: {
            question: "An engine pumps water continuously through a hose of cross-section A with speed v. What rate of work (power) does the engine impart to the water?",
            approach: "1. Mass of water delivered per second: dm/dt = ρ · A · v.\n2. Kinetic energy imparted per second = ½ (dm/dt) v² = ½ (ρ A v) v² = ½ ρ A v³.\n3. Power = ½ ρ A v³.",
            answer: "P = ½ ρ A v³ (Note: proportional to v³!)"
        }
    },

    "Linear Momentum & Impulse": {
        quote: "If no external bully pushes the system, the total momentum remains locked in stone forever.",
        intuition: "Momentum p = m·v is the 'un-stoppability' of an object. A train moving at 5 km/h has gigantic momentum because of mass; a bullet moving at 800 m/s has gigantic momentum because of velocity. Impulse is the delivery of momentum: J = F · Δt. To catch a cricket ball without pain, you draw your hands back to increase Δt, reducing the impact force F!",
        coreFormulas: [
            { label: "Linear Momentum", formula: "p = m · v" },
            { label: "Conservation Principle", formula: "If Σ F_external = 0 ⇒ p_total = constant" },
            { label: "Impulse", formula: "J = ∫ F dt = Δp = p_final - p_initial" }
        ],
        kotaTricks: [
            "⚡ Gun Recoil: m_gun · v_gun = - m_bullet · v_bullet ⇒ v_gun = - (m_bullet / m_gun) · v_bullet.",
            "⚡ Exploding Shells: If a projectile explodes at the highest point, internal explosion forces do not alter COM trajectory: m · v_COM = Σ m_i · v_i."
        ],
        commonTraps: [
            "🚨 Momentum is a VECTOR. You MUST designate a positive direction. If an 80 g ball hits a wall at +10 m/s and rebounds at -10 m/s, Δp = m(-10 - (+10)) = -20m, NOT zero!"
        ],
        benchmarkQuestion: {
            question: "A 0.15 kg ball moving horizontally at 20 m/s is hit by a bat and returns in the opposite direction at 20 m/s. The contact lasts 0.01 s. Find the average force exerted by the bat.",
            approach: "1. Take initial direction as positive (+).\n2. p_initial = 0.15 · (+20) = +3.0 kg·m/s.\n3. p_final = 0.15 · (-20) = -3.0 kg·m/s.\n4. Impulse J = Δp = p_f - p_i = -3.0 - 3.0 = -6.0 N·s.\n5. F_avg = J / Δt = -6.0 / 0.01 = -600 N.",
            answer: "600 N (opposite to initial velocity)"
        }
    },

    "Collisions — Elastic & Inelastic": {
        quote: "In every collision momentum is conserved. What separates elastic from inelastic is whether kinetic energy survives or turns into heat.",
        intuition: "When billiard balls collide, they spring back with almost zero deformation: Kinetic Energy is saved (Elastic, e = 1). When two lumps of clay smash together and stick, deformation is maximum and kinetic energy is wiped out into heat (Completely Inelastic, e = 0). The coefficient of restitution e measures the 'bounciness': e = (separation velocity) / (approach velocity).",
        coreFormulas: [
            { label: "Restitution Coeff (e)", formula: "e = (v2 - v1) / (u1 - u2)  [0 ≤ e ≤ 1; e=1 Elastic, e=0 Perfectly Inelastic]" },
            { label: "Final Velocity Formula", formula: "v1 = [(m1 - e·m2)u1 + (1+e)m2·u2] / (m1 + m2)" },
            { label: "Loss in KE", formula: "ΔK_loss = ½ · [m1·m2 / (m1 + m2)] · (1 - e²) · (u1 - u2)²" }
        ],
        kotaTricks: [
            "⚡ Equal Masses Elastic Collision: When m1 = m2 and e = 1, velocities COMPLETELY SWAP! u1 becomes v2, and u2 becomes v1. Classic 5-second JEE answer.",
            "⚡ Massive Target Trick: If a light ball of mass m hits a massive stationary wall/truck (M >> m) elastically, it simply bounces back with speed v = -u."
        ],
        commonTraps: [
            "🚨 Believing kinetic energy is conserved in all collisions. ONLY momentum is universally conserved; KE is only conserved when e = 1."
        ],
        benchmarkQuestion: {
            question: "A ball of mass 2 kg moving at 6 m/s collides head-on with a stationary 4 kg ball. If the collision is perfectly elastic (e = 1), find the velocity of each ball after collision.",
            approach: "1. v1 = [(m1 - m2)u1 + 2m2·u2] / (m1 + m2) = [(2 - 4)(6) + 0] / (2 + 4) = -12 / 6 = -2 m/s (rebounds).\n2. v2 = [(m2 - m1)u2 + 2m1·u1] / (m1 + m2) = [0 + 2(2)(6)] / 6 = 24 / 6 = +4 m/s.",
            answer: "v1 = -2 m/s, v2 = +4 m/s"
        }
    },

    "Centre of Mass": {
        quote: "The Centre of Mass is the balance point of the entire system — if gravity holds the body, COM is where it rests in equilibrium.",
        intuition: "A spinning wrench flying through the air looks like a chaotic blur. But if you put a glowing neon dot on its Centre of Mass, that dot moves in a pure, peaceful, gorgeous parabola! The COM represents the weighted average position of mass: X_com = Σ(m_i x_i) / M. If no external force acts on a boat when a person walks across it, the COM of (boat + person) stays dead frozen in space!",
        coreFormulas: [
            { label: "Discrete COM", formula: "R_com = (m1 r1 + m2 r2 + ... + mn rn) / (m1 + m2 + ... + mn)" },
            { label: "Continuous COM", formula: "R_com = (1/M) ∫ r dm" },
            { label: "Cavity Theorem", formula: "X_rem = (M_total · X_total - M_cavity · X_cavity) / (M_total - M_cavity)" }
        ],
        kotaTricks: [
            "⚡ Man on Boat / Plank Trick: A person of mass m walks distance L on a free plank of mass M. Displacement of plank = - (m · L) / (m + M). Instant answer without integration!",
            "⚡ Standard COMs: Semicircular ring = 2R/π; Semicircular disc = 4R/(3π); Hemispherical shell = R/2; Solid hemisphere = 3R/8."
        ],
        commonTraps: [
            "🚨 Forgetting that COM can lie completely OUTSIDE the physical material of the object (e.g. donut, ring, hollow sphere)."
        ],
        benchmarkQuestion: {
            question: "A circular disc of radius R has a circular hole of radius R/2 cut out, with the rim of the hole touching the rim of the disc. Where is the COM of the remaining part relative to original center?",
            approach: "1. Area of original disc A1 = π R² (mass M1 ∝ R²).\n2. Area of cut cavity A2 = π (R/2)² = π R² / 4 (mass M2 = M1 / 4).\n3. Center of cavity is at x = R/2.\n4. X_com = (M1 · 0 - M2 · (R/2)) / (M1 - M2) = (- (M1/4)(R/2)) / (3M1/4) = - R / 6.",
            answer: "R/6 away from the hole (x = -R/6)"
        }
    },

    "Moment of Inertia": {
        quote: "Moment of Inertia is rotational mass. The further mass is spread from the axis, the harder it is to spin!",
        intuition: "Why is a tightrope walker holding a long pole? Because spreading mass far away dramatically increases Moment of Inertia (I = m·r²). That massive I fiercely resists any sudden tipping rotations! For linear motion, mass m resists acceleration. For rotation, I resists angular acceleration (τ = I·α).",
        coreFormulas: [
            { label: "Discrete", formula: "I = Σ m_i · r_i²" },
            { label: "Continuous", formula: "I = ∫ r² dm" },
            { label: "Radius of Gyration", formula: "k = √(I / M)  ⇒  I = M · k²" }
        ],
        kotaTricks: [
            "⚡ Standard Geometries (Through COM): Ring = MR²; Disc = ½ MR²; Solid Cylinder = ½ MR²; Hollow Cylinder = MR²; Solid Sphere = 2/5 MR²; Hollow Sphere = 2/3 MR²; Rod (center) = 1/12 ML²; Rod (end) = ⅓ ML².",
            "⚡ Resistance to Rolling Ranking: 2/5 (Solid Sphere) < ½ (Disc) < 2/3 (Hollow Sphere) < 1 (Ring). Solid sphere always wins the race down an incline!"
        ],
        commonTraps: [
            "🚨 The distance 'r' is strictly the PERPENDICULAR distance from the rotation axis, NOT the distance from the origin!"
        ],
        benchmarkQuestion: {
            question: "Find the ratio of moment of inertia of a solid sphere of mass M and radius R about its diameter to that of a thin spherical shell of same mass and radius.",
            approach: "1. Solid sphere I_solid = (2/5) M R².\n2. Spherical shell I_shell = (2/3) M R².\n3. Ratio = (2/5) / (2/3) = 3/5 = 0.6.",
            answer: "3 : 5"
        }
    },

    "Parallel & Perpendicular Axis Theorems": {
        quote: "Never integrate twice: if you know I through the COM, parallel axis theorem shifts you to any parallel axis in one step.",
        intuition: "Want the moment of inertia about a door's hinge instead of its center? Parallel Axis Theorem says: I_axis = I_com + M·d², where d is the shift distance. It tells you that I is ALWAYS at its absolute minimum through the COM! Perpendicular Axis Theorem is a planar special: for flat 2D lamina, I_z = I_x + I_y.",
        coreFormulas: [
            { label: "Parallel Axis Theorem", formula: "I = I_com + M · d²  (Valid for ANY 3D body; axis MUST be parallel to COM axis)" },
            { label: "Perpendicular Axis Theorem", formula: "I_z = I_x + I_y  (STRICTLY for flat 2D planar lamina in xy-plane)" }
        ],
        kotaTricks: [
            "⚡ Disc Edge Tangent: I_tangent_parallel = I_com + M R² = ½ MR² + MR² = 3/2 MR².\nPerpendicular tangent: I_tangent_perp = (5/4) MR².",
            "⚡ Rod at End: I_end = I_com + M(L/2)² = 1/12 ML² + 1/4 ML² = ⅓ ML²."
        ],
        commonTraps: [
            "🚨 Using Parallel Axis Theorem between two arbitrary axes! One of the two axes MUST pass through the Centre of Mass. You cannot shift directly from edge to edge without passing through COM.",
            "🚨 Applying Perpendicular Axis Theorem to a solid sphere or cylinder! It ONLY works for flat 2D planar plates."
        ],
        benchmarkQuestion: {
            question: "Find the moment of inertia of a uniform circular disc of mass M and radius R about a tangent in the plane of the disc.",
            approach: "1. For a disc in xy plane: by perpendicular axis theorem, I_z = I_x + I_y = 2·I_diameter ⇒ I_diameter = ½ I_z = ¼ M R².\n2. A tangent in the plane is parallel to the diameter at distance d = R.\n3. Apply Parallel Axis Theorem: I_tangent = I_diameter + M R² = ¼ M R² + M R² = 5/4 M R².",
            answer: "5/4 M R²"
        }
    },

    "Torque & Angular Momentum": {
        quote: "Torque is the rotational push; Angular momentum is rotational momentum. In the absence of external torque, spins are forever.",
        intuition: "Why is a door handle placed at the outer edge rather than near the hinge? Because Torque = r × F = r · F · sin θ! The larger the lever arm r, the more rotation torque you generate with tiny effort. Angular momentum L = r × p = I · ω. When a spinning ice skater pulls her arms inward, her Moment of Inertia I drops, so her spin speed ω skyrockets to conserve L!",
        coreFormulas: [
            { label: "Torque", formula: "τ = r × F = r · F_perp = I · α" },
            { label: "Angular Momentum", formula: "L = r × p = I · ω  (for fixed axis rotation)" },
            { label: "Conservation of L", formula: "If Σ τ_ext = 0 ⇒ I1 · ω1 = I2 · ω2" }
        ],
        kotaTricks: [
            "⚡ Lever Arm Technique: τ = F · r_perp, where r_perp is the perpendicular distance from the pivot to the line of action of force. Avoids cross products!",
            "⚡ Combined Translation + Rotation L: L_total = L_com + r_com × M v_com."
        ],
        commonTraps: [
            "🚨 Calculating torque without specifying the PIVOT point. Torque only has meaning relative to a specified origin/point!",
            "🚨 Forgetting direction: use the Right-Hand Rule (curl fingers from r to F; thumb points in direction of torque)."
        ],
        benchmarkQuestion: {
            question: "A uniform disc of mass M and radius R rotating at angular speed ω0 is placed gently on a horizontal table. Friction acts until pure rolling begins. Find the final angular velocity.",
            approach: "1. Take torque about the point of contact on the floor. Friction acts through this point, so τ_contact = 0!\n2. Angular momentum about contact point is conserved: L_initial = I_com · ω0 = (½ M R²) ω0.\n3. Pure rolling state: v = R ω, and L_final = I_com · ω + M v R = ½ M R² ω + M R² ω = 3/2 M R² ω.\n4. Equate: ½ M R² ω0 = 3/2 M R² ω ⇒ ω = ω0 / 3.",
            answer: "ω = ω0 / 3 (Pure rolling attained at one-third original speed!)"
        }
    },

    "Rolling Motion": {
        quote: "Rolling is translation plus rotation dancing in perfect harmony. At the contact point, the wheel kisses the road at zero relative speed!",
        intuition: "In pure rolling without slipping, the bottom point of the tire is momentarily AT REST relative to the road (v_contact = v_com - R·ω = 0 ⇒ v_com = R·ω). Because the contact point isn't sliding, static friction does zero work! All kinetic energy splits into translational KE (½ M v²) and rotational KE (½ I ω²).",
        coreFormulas: [
            { label: "Pure Rolling Condition", formula: "v_com = R · ω  and  a_com = R · α" },
            { label: "Total Kinetic Energy", formula: "K_total = ½ M v² + ½ I ω² = ½ M v² (1 + k²/R²)" },
            { label: "Incline Acceleration", formula: "a = (g · sin θ) / (1 + k²/R²)" }
        ],
        kotaTricks: [
            "⚡ The Rolling Fraction Table (k²/R²):\n• Solid Sphere: k²/R² = 2/5 = 0.40 ⇒ a = 5/7 g sin θ\n• Disc / Solid Cylinder: k²/R² = 1/2 = 0.50 ⇒ a = 2/3 g sin θ\n• Hollow Sphere: k²/R² = 2/3 = 0.67 ⇒ a = 3/5 g sin θ\n• Ring / Hollow Cylinder: k²/R² = 1.00 ⇒ a = 1/2 g sin θ",
            "⚡ Velocity at bottom of incline h: v = √[ 2gh / (1 + k²/R²) ]. The smallest k²/R² reaches the bottom fastest!"
        ],
        commonTraps: [
            "🚨 Thinking friction always slows down rolling! On an incline, friction acts UP the incline to provide the clockwise torque needed to roll.",
            "🚨 Believing kinetic friction acts during pure rolling. It is STATIC friction (f_s ≤ μ_s N), so mechanical energy is conserved!"
        ],
        benchmarkQuestion: {
            question: "A solid sphere and a disc of equal mass and radius roll down an inclined plane from the same height without slipping. Which reaches the bottom first?",
            approach: "1. a = g sin θ / (1 + k²/R²).\n2. For solid sphere: k²/R² = 2/5 = 0.40 ⇒ a_sphere = (5/7) g sin θ = 0.714 g sin θ.\n3. For disc: k²/R² = 1/2 = 0.50 ⇒ a_disc = (2/3) g sin θ = 0.667 g sin θ.\n4. a_sphere > a_disc ⇒ Sphere accelerates faster and reaches first.",
            answer: "Solid Sphere reaches first"
        }
    },

    "Gravitation & Kepler's Laws": {
        quote: "Gravity is the silent glue of the cosmos. Everything attracts everything with a whisper proportional to mass.",
        intuition: "Newton realized the same force pulling an apple to the ground keeps the Moon in orbit. Gravity is an inverse-square force: double the distance, and the pull drops to one-fourth. Kepler discovered that planets sweep equal areas in equal times (which is just Conservation of Angular Momentum in space!) and T² ∝ R³.",
        coreFormulas: [
            { label: "Universal Gravitation", formula: "F = G · (m1 · m2) / r²" },
            { label: "Gravitational Field & Potential", formula: "g = GM/r²  and  V = - GM/r" },
            { label: "Escape Velocity", formula: "v_esc = √(2GM / R) = √(2gR) ≈ 11.2 km/s (for Earth)" },
            { label: "Orbital Velocity", formula: "v_orb = √(GM / r) = v_esc / √2" },
            { label: "Kepler's 3rd Law", formula: "T² = (4π² / GM) · a³  ⇒  T² ∝ a³" }
        ],
        kotaTricks: [
            "⚡ Altitude vs Depth Variation:\n• At height h << R: g_h ≈ g(1 - 2h/R)\n• At depth d: g_d = g(1 - d/R) [Exact for all depths!]\n• At what height is g same as depth d? 2h = d (for h << R).",
            "⚡ Satellite Energy: Kinetic K = GMm/(2r), Potential U = -GMm/r, Total E = -GMm/(2r). Ratio K : U : E = 1 : -2 : -1."
        ],
        commonTraps: [
            "🚨 Using g_h = g(1 - 2h/R) when h is large! If h = R, you MUST use the exact formula g_h = g / (1 + h/R)² = g / 4.",
            "🚨 Escape velocity is INDEPENDENT of the launch angle and independent of the mass of the projectile!"
        ],
        benchmarkQuestion: {
            question: "At what height above the Earth's surface does the acceleration due to gravity become 1/9th of its value at the surface? (Radius of Earth = R)",
            approach: "1. Exact formula: g(h) = g / (1 + h/R)².\n2. Given g(h) = g / 9 ⇒ (1 + h/R)² = 9.\n3. Take square root: 1 + h/R = 3 ⇒ h/R = 2 ⇒ h = 2R.",
            answer: "h = 2 R (twice the Earth's radius)"
        }
    },

    "Projectile Motion": {
        quote: "Horizontal and vertical motions are independent twins who live in the same house but never talk to each other.",
        intuition: "Once you launch a projectile, gravity ONLY pulls vertically (a_y = -g). Nobody is pushing or pulling horizontally (a_x = 0). So the horizontal velocity v_x = u·cos θ stays locked and constant from launch to landing! All you have to do is run horizontal kinematics and vertical kinematics side-by-side using time t as the shared bridge.",
        coreFormulas: [
            { label: "Time of Flight", formula: "T = 2 u sin θ / g" },
            { label: "Maximum Height", formula: "H = u² sin² θ / (2g)" },
            { label: "Horizontal Range", formula: "R = u² sin(2θ) / g" },
            { label: "Trajectory Equation", formula: "y = x tan θ - (g x² / (2 u² cos² θ)) = x tan θ (1 - x / R)" }
        ],
        kotaTricks: [
            "⚡ Complementary Angles Rule: Range is IDENTICAL for angles θ and (90° - θ). For example, 30° and 60° have the exact same landing distance!",
            "⚡ The 4H/R Formula: tan θ = 4H / R. If H = R, then tan θ = 4 ⇒ θ = 76°.",
            "⚡ Factored Trajectory Equation: y = x tan θ (1 - x/R). In JEE, this form solves 80% of trajectory problems in 1 step."
        ],
        commonTraps: [
            "🚨 At maximum height, velocity is NOT zero! Vertical velocity is zero (v_y = 0), but horizontal velocity is still alive and kicking: v = u cos θ."
        ],
        benchmarkQuestion: {
            question: "A projectile has a range of 80 m and maximum height of 20 m. Find the projection angle and initial velocity. (g = 10 m/s²)",
            approach: "1. Use Kota trick: tan θ = 4H / R = 4(20) / 80 = 80 / 80 = 1.\n2. tan θ = 1 ⇒ θ = 45°.\n3. At 45°, R = u² / g = 80 ⇒ u² = 800 ⇒ u = √800 = 20√2 m/s.",
            answer: "θ = 45°, u = 20√2 m/s ≈ 28.3 m/s"
        }
    },

    "Circular Motion": {
        quote: "Turning requires a force pointing to the center — without centripetal force, straight lines are nature's only option.",
        intuition: "Even if a car goes around a circle at a steady 60 km/h, it IS accelerating! Why? Because velocity is a vector, and its direction is turning every millisecond. To turn, there must be a force pulling inward toward the center: a_c = v² / R. If you cut the string, the object doesn't fly outward — it flies tangent to the circle!",
        coreFormulas: [
            { label: "Centripetal Acceleration", formula: "a_c = v² / R = ω² · R" },
            { label: "Tangential Acceleration", formula: "a_t = dv/dt = α · R  (changes speed)" },
            { label: "Total Acceleration", formula: "a_net = √(a_c² + a_t²)" },
            { label: "Banked Road (Optimal)", formula: "tan θ = v² / (R · g)" }
        ],
        kotaTricks: [
            "⚡ Banked Road Speed Range: v_max = √[ R·g (tan θ + μ) / (1 - μ tan θ) ]; v_min = √[ R·g (tan θ - μ) / (1 + μ tan θ) ].",
            "⚡ Conical Pendulum: Time period T = 2π √(L cos θ / g) = 2π √(h / g), where h is the vertical distance from pivot to circle plane."
        ],
        commonTraps: [
            "🚨 Centripetal force is NOT a new magical force like gravity or tension. It is just the label for WHATEVER real force points to the center (e.g. friction for cars, gravity for planets, tension for strings)."
        ],
        benchmarkQuestion: {
            question: "A car rounds an unbanked circular curve of radius 50 m on a road with friction coefficient μ = 0.5. What is the maximum safe speed? (g = 10 m/s²)",
            approach: "1. Friction provides centripetal acceleration: f_max = μ · mg = m v² / R.\n2. Mass cancels: v_max = √(μ · R · g).\n3. v_max = √(0.5 · 50 · 10) = √250 = 5√10 ≈ 15.8 m/s.",
            answer: "15.8 m/s (approx 57 km/h)"
        }
    }
};

// ─── ACTIVE RECALL FLASHCARDS DATA ───────────────────
const flashcardsData = [
    // PHYSICS
    {
        id: "p1",
        subject: "physics",
        chapter: "Mechanics",
        front: "Acceleration of an object rolling down an incline of angle θ without slipping?",
        back: "a = (g · sin θ) / (1 + k²/R²)",
        insight: "k²/R² is 2/5 for solid sphere, 1/2 for disc, 2/3 for hollow sphere, 1 for ring. Solid sphere is fastest!",
        mnemonic: "Rolling fraction resists acceleration. Higher k²/R² = slower descent."
    },
    {
        id: "p2",
        subject: "physics",
        chapter: "Electrostatics & Current",
        front: "Energy stored in a capacitor & Energy density in an electric field?",
        back: "U = ½ C V² = Q² / (2C) = ½ Q V\nu_E = ½ ε₀ E² (energy per unit volume)",
        insight: "When connected to a battery: V = const. When battery is disconnected: Q = const.",
        mnemonic: "CV is voltage-linked, Q²/2C is charge-linked."
    },
    {
        id: "p3",
        subject: "physics",
        chapter: "Modern Physics",
        front: "Einstein's Photoelectric Equation & Stopping Potential relation?",
        back: "K_max = h ν - Φ = h c / λ - Φ\ne · V_s = K_max  ⇒  V_s = (h/e)ν - (Φ/e)",
        insight: "Slope of V_s vs ν graph is ALWAYS h/e, identical for ALL metals! Intercept gives work function.",
        mnemonic: "Energy supplied (hν) = Cost to escape (Φ) + Pocket cash (K_max)."
    },
    {
        id: "p4",
        subject: "physics",
        chapter: "EMI & AC",
        front: "Resonance frequency, Quality factor (Q), and Impedance in series LCR circuit?",
        back: "ω₀ = 1 / √(LC)   (f₀ = 1 / (2π√LC))\nZ = R  at resonance (purely resistive, min Z, max I)\nQ = (ω₀ L) / R = (1 / R) · √(L / C)",
        insight: "High Q factor means sharper resonance curve and superior frequency selectivity.",
        mnemonic: "At resonance, Inductor and Capacitor cancel each other out completely: V_L = - V_C."
    },
    {
        id: "p5",
        subject: "physics",
        chapter: "Optics",
        front: "Fringe width in Young's Double Slit Experiment (YDSE) & Optical Path shift?",
        back: "β = (λ · D) / d\nShift due to glass slab of thickness t and index μ: Δy = (μ - 1) t · (D / d)",
        insight: "Fringe width β is unchanged when a slab is inserted — the ENTIRE pattern simply shifts toward the slab.",
        mnemonic: "Blue light (smaller λ) gives narrower fringes; Red light (larger λ) gives wider fringes."
    },
    {
        id: "p6",
        subject: "physics",
        chapter: "Thermodynamics",
        front: "Efficiency of Carnot Engine & Coefficient of Performance (COP) of Refrigerator?",
        back: "η_Carnot = 1 - (T_cold / T_hot) = (W / Q_hot)\nCOP_refrig = T_cold / (T_hot - T_cold) = Q_cold / W\nRelation: COP = (1 - η) / η",
        insight: "Temperatures MUST strictly be in KELVIN (K = °C + 273.15). Never use Celsius!",
        mnemonic: "Heat always flows downhill spontaneously; lifting it uphill costs Work."
    },

    // CHEMISTRY
    {
        id: "c1",
        subject: "chemistry",
        chapter: "Chemical Bonding",
        front: "Molecular Orbital Theory: Bond Order formula & Magnetic Nature condition?",
        back: "Bond Order = ½ · (N_b - N_a)\nParamagnetic = has unpaired electrons (e.g. O₂ with BO = 2, B₂ with BO = 1)\nDiamagnetic = all electrons paired (e.g. N₂ with BO = 3)",
        insight: "For ≤ 14 electrons (N₂, C₂, B₂), π2px = π2py comes BEFORE σ2pz! For > 14 (O₂, F₂), σ2pz is lower in energy.",
        mnemonic: "O₂ has 2 unpaired electrons in π*2px and π*2py — classic magnetic trap in JEE!"
    },
    {
        id: "c2",
        subject: "chemistry",
        chapter: "Electrochemistry",
        front: "Nernst Equation at 298 K (25°C) & Equilibrium Constant relation?",
        back: "E_cell = E°_cell - (0.0591 / n) · log₁₀(Q)\nAt equilibrium: E_cell = 0  ⇒  E°_cell = (0.0591 / n) · log₁₀(K_eq)\nΔG° = - n F E°_cell",
        insight: "n is the number of moles of electrons transferred in the balanced redox equation.",
        mnemonic: "Spontaneous when E°_cell > 0 and ΔG° < 0."
    },
    {
        id: "c3",
        subject: "chemistry",
        chapter: "Chemical Kinetics",
        front: "First-Order Integrated Rate Law, Half-Life, and Arrhenius Equation?",
        back: "k = (2.303 / t) · log₁₀( [A]₀ / [A]_t )\nt_1/2 = 0.693 / k  (INDEPENDENT of initial concentration!)\nk = A · e^(-Ea / RT)  ⇒  log₁₀(k2/k1) = (Ea / 2.303R) · [ (T2 - T1) / (T1·T2) ]",
        insight: "Plot of ln k vs 1/T is linear with slope = - Ea / R.",
        mnemonic: "In first order: 50% left at t1/2, 25% at 2·t1/2, 12.5% at 3·t1/2 (pure geometric progression)."
    },
    {
        id: "c4",
        subject: "chemistry",
        chapter: "Organic: GOC & Mechanisms",
        front: "Carbocation Stability order & when does rearrangement occur?",
        back: "Stability: 3° Benzylic/Allylic > 3° Alkyl > 2° > 1° > Methyl\nRearrangement occurs via 1,2-Hydride shift or 1,2-Methyl shift whenever a more stable cation can form!",
        insight: "Ring expansion from 4-membered → 5-membered and 5-membered → 6-membered is extremely exothermic and rapid.",
        mnemonic: "Carbocations love company: resonance first, hyperconjugation second, inductive third."
    },
    {
        id: "c5",
        subject: "chemistry",
        chapter: "Aldehydes/Ketones/Acids",
        front: "Aldol Condensation vs Cannizzaro Reaction — What decides which occurs?",
        back: "Aldol: MUST have at least one α-hydrogen (in dilute base e.g. NaOH) → β-hydroxy aldehyde → α,β-unsaturated compound upon heating.\nCannizzaro: NO α-hydrogen (e.g. HCHO, PhCHO) in concentrated base (50% KOH) → disproportionates into Alcohol + Carboxylate salt.",
        insight: "Cross-Cannizzaro with HCHO always oxidizes HCHO to Formate (HCOO⁻) because HCHO is most electrophilic!",
        mnemonic: "Alpha-H present = Aldol. Alpha-H absent = Cannizzaro."
    },
    {
        id: "c6",
        subject: "chemistry",
        chapter: "Solutions",
        front: "Van't Hoff factor (i) with Degree of Dissociation (α) and Association (β)?",
        back: "Dissociation: i = 1 + (n - 1) α   [n = number of ions produced]\nAssociation: i = 1 + (1/n - 1) β   [n = polymer degree, e.g. dimer n=2]\nΔT_f = i · K_f · m   and   ΔT_b = i · K_b · m",
        insight: "Benzoic acid in benzene forms dimers via H-bonding: n = 2, so i < 1!",
        mnemonic: "Dissociation makes i > 1 (more particles); Association makes i < 1 (fewer particles)."
    },

    // MATHEMATICS
    {
        id: "m1",
        subject: "maths",
        chapter: "Calculus (Diff+Int)",
        front: "King's Rule of Definite Integrals (The #1 JEE Integration Trick)?",
        back: "∫[a to b] f(x) dx = ∫[a to b] f(a + b - x) dx\nSpecial case (0 to a): ∫[0 to a] f(x) dx = ∫[0 to a] f(a - x) dx",
        insight: "Add the original integral I to the transformed integral I: 2I = ∫[a to b] [f(x) + f(a+b-x)] dx. 90% of times, the integrand simplifies to a constant 1!",
        mnemonic: "Sum of limits minus x — King solves what algebra cannot."
    },
    {
        id: "m2",
        subject: "maths",
        chapter: "3D & Vectors",
        front: "Shortest Distance between two Skew Lines in 3D?",
        back: "d = | (a2 - a1) · (b1 × b2) | / | b1 × b2 |\nWhere line 1: r = a1 + λ b1  and  line 2: r = a2 + μ b2",
        insight: "If lines intersect, shortest distance d = 0, meaning (a2 - a1) · (b1 × b2) = 0 (the vectors are coplanar!).",
        mnemonic: "Scalar triple product of (shift vector, direction 1, direction 2) divided by magnitude of cross product."
    },
    {
        id: "m3",
        subject: "maths",
        chapter: "Coordinate Geometry",
        front: "Condition of Tangency to standard Parabola, Ellipse, and Hyperbola?",
        back: "Parabola y² = 4ax: c = a / m   (Line: y = mx + c)\nEllipse x²/a² + y²/b² = 1: c² = a² m² + b²\nHyperbola x²/a² - y²/b² = 1: c² = a² m² - b²",
        insight: "Point of contact on parabola y² = 4ax with tangent y = mx + a/m is (a/m², 2a/m).",
        mnemonic: "Parabola: a/m. Ellipse: +b². Hyperbola: -b²."
    },
    {
        id: "m4",
        subject: "maths",
        chapter: "Matrices & Determinants",
        front: "Properties of Adjoint & Determinants for an n×n matrix A?",
        back: "| k · A | = kⁿ · | A |\n| adj(A) | = | A |^(n - 1)\n| adj(adj(A)) | = | A |^( (n - 1)² )\nA · adj(A) = adj(A) · A = | A | · I_n",
        insight: "For 3×3 matrix (n = 3): |adj(A)| = |A|², and |adj(adj(A))| = |A|⁴.",
        mnemonic: "Every 'adj' shaves 1 power off n. Double adj shaves squared power."
    },
    {
        id: "m5",
        subject: "maths",
        chapter: "Probability & Stats",
        front: "Bayes' Theorem for finding posterior probability P(E_i | A)?",
        back: "P(E_i | A) = [ P(E_i) · P(A | E_i) ] / [ Σ P(E_k) · P(A | E_k) ]",
        insight: "Denominator is simply the Law of Total Probability: P(A). Numerator is the favorable branch.",
        mnemonic: "Numerator is the specific path you care about; Denominator is the sum of all paths that could produce event A."
    },
    {
        id: "m6",
        subject: "maths",
        chapter: "Differential Equations",
        front: "Integrating Factor (I.F.) and Solution for Linear 1st Order DE?",
        back: "dy/dx + P(x) · y = Q(x)\nIntegrating Factor I.F. = e^( ∫ P(x) dx )\nGeneral Solution: y · (I.F.) = ∫ [ Q(x) · (I.F.) ] dx + C",
        insight: "If coefficient of dy/dx is not 1, divide the entire equation by it FIRST before identifying P(x)!",
        mnemonic: "y times I.F. equals integral of Q times I.F."
    }
];

// ─── CLASSIC NTA TRAPS & MISTAKE MASTERCLASS ────────
const classicTrapsData = [
    {
        id: "trap_1",
        subject: "physics",
        title: "Thermodynamic Work: Physics vs Chemistry Convention",
        problem: "In an isothermal expansion of an ideal gas, is Work positive or negative?",
        trap: "In Physics, W = + ∫ P dV (Work done BY the gas). When gas expands, ΔV > 0 so W > 0. In Chemistry (IUPAC), W = - P_ext ΔV (Work done ON the system). When gas expands, W_chem is NEGATIVE!",
        prevention: "Always identify whether the question is from Physics paper (First Law: ΔQ = ΔU + W) or Chemistry paper (First Law: ΔU = q + w). Never mix them!",
        frequency: "Appears every year in both Physics and Chemistry!"
    },
    {
        id: "trap_2",
        subject: "chemistry",
        title: "Carbocation Rearrangement before Nucleophile Attack",
        problem: "Addition of HBr to 3,3-dimethyl-1-butene does NOT yield 2-bromo-3,3-dimethylbutane as major product.",
        trap: "Students add H⁺ to form a secondary carbocation at C-2 and immediately attach Br⁻ there. But carbocations rearrange! A 1,2-methyl shift occurs instantly to convert the 2° cation into a far more stable 3° carbocation at C-3.",
        prevention: "Whenever a carbocation intermediate is formed, STOP! Look at adjacent carbons: Can a 1,2-hydride or 1,2-methyl shift create a tertiary or resonance-stabilized cation? If yes, rearrange first!",
        frequency: "9 out of 10 years in Organic JEE Main"
    },
    {
        id: "trap_3",
        subject: "maths",
        title: "Inverse Trig Range Blindness: sin⁻¹(sin x) ≠ x",
        problem: "Evaluate sin⁻¹(sin(2π/3)) and cos⁻¹(cos(7π/6)).",
        trap: "Blindly canceling sin⁻¹ and sin to write 2π/3! But the principal range of sin⁻¹ is strictly [-π/2, π/2], and 2π/3 lies OUTSIDE this range!",
        prevention: "sin(2π/3) = sin(π - π/3) = sin(π/3). Therefore, sin⁻¹(sin(π/3)) = π/3. For cos⁻¹, range is [0, π], so cos⁻¹(cos(7π/6)) = cos⁻¹(cos(2π - 5π/6)) = 5π/6.",
        frequency: "Tested every single year in Math Session 1 & 2"
    },
    {
        id: "trap_4",
        subject: "physics",
        title: "Direction of Friction in Pure Rolling",
        problem: "A cylinder rolls down an incline without slipping. Which way does friction act, and does it dissipate mechanical energy?",
        trap: "Students think friction always opposes motion and dissipates energy into heat. Here, friction acts UP the incline to provide clockwise torque, and because the contact point doesn't slide, static friction does ZERO work!",
        prevention: "Static friction in pure rolling conserves mechanical energy! E_initial = E_final. For a driven car rear wheel, friction acts FORWARD; for front rolling wheel, friction acts BACKWARD.",
        frequency: "8 out of 10 years in Mechanics"
    },
    {
        id: "trap_5",
        subject: "maths",
        title: "Applying L'Hôpital's Rule to Non-Indeterminate Forms",
        problem: "Evaluate lim (x → 0) (cos x / x).",
        trap: "Applying L'Hôpital blindly: differentiating top gives -sin x, bottom gives 1, getting 0! But cos(0)/0 is 1/0, which is NOT an indeterminate form (0/0 or ∞/∞). L'Hôpital is illegal here!",
        prevention: "ALWAYS test the limits first! L'Hôpital is strictly prohibited unless numerator and denominator both evaluate to 0 or both evaluate to ±∞.",
        frequency: "Classic negative marking trap in Calculus"
    },
    {
        id: "trap_6",
        subject: "physics",
        title: "Discharging a Capacitor into Another: The 50% Energy Paradox",
        problem: "A capacitor C charged to V is connected in parallel to an identical uncharged capacitor C. What fraction of energy is lost?",
        trap: "Students calculate Q = C V, common potential V' = V/2, final energy = ½(2C)(V/2)² = ¼ C V². Initial was ½ C V². Half the energy vanished! Where did it go if the connecting wires have zero resistance?",
        prevention: "Exactly 50% of the energy is ALWAYS lost, regardless of resistance! If R → 0, the energy radiates away as electromagnetic waves and spark. ΔU_loss = ½ [C1·C2 / (C1 + C2)] (V1 - V2)².",
        frequency: "High-yield numerical in Electrostatics"
    }
];



