export const COMPANY = {
  name: "Akshardeep Engineers",
  tagline: "Precision in Measuring. Perfection in Control. Proven Performance.",
  description:
    "Established in 2013, Akshardeep Engineers is an authorised channel partner of Forbes Marshall, Intervalve & El-O-Matic — providing cost effective, efficient and robust solutions for industrial flow control and process instrumentation.",
  phone: "+91 94294 83636",
  phone2: "+91 99798 99983",
  email: "sales@akshardeep.com",
  website: "www.akshardeep.com",
  whatsapp: "919429483636",
  address: {
    line1: "Plot No. 2900/90, Old Indokem LTD.",
    line2: "Near Atul LTD., Ankleshwar GIDC",
    city: "Ankleshwar",
    state: "Gujarat 393002",
    country: "India",
  },
  social: {
    linkedin: "https://linkedin.com/company/akshardeep-engineers",
  },
  stats: {
    yearsExperience: 11,
    clients: 200,
    products: 50,
    infrastructure: 3420,
  },
  partners: [
    { name: "Forbes Marshall", full: "Forbes Marshall (HVY) Pvt. Ltd." },
    { name: "Intervalve", full: "Intervalve Poonamwala Pvt. Ltd." },
    { name: "El-O-Matic", full: "El-O-Matic India Pvt. Ltd." },
  ],
  additionalBrands: [
    "Badotherm",
    "Yokogawa",
    "ABB",
    "Emerson",
    "Rotork",
    "Endress+Hauser",
    "Siemens",
    "Honeywell",
  ],
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Butterfly Valves", href: "/products#butterfly-valves" },
      { label: "Ball Valves", href: "/products#ball-valves" },
      { label: "Gate, Globe & Check Valves", href: "/products#gate-globe-check" },
      { label: "Other Valves", href: "/products#other-valves" },
      { label: "Valve Automation", href: "/products#valve-automation" },
      { label: "Instrumentation", href: "/products#instrumentation" },
      { label: "Pneumatics", href: "/products#pneumatics" },
    ],
  },
  { label: "Solutions", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const INDUSTRIES = [
  { name: "Oil & Gas", slug: "oil-and-gas" },
  { name: "Chemical Plants", slug: "chemical-plants" },
  { name: "Pharmaceutical", slug: "pharmaceutical" },
  { name: "Power Plants", slug: "power-plants" },
  { name: "Refineries", slug: "refineries" },
  { name: "Steel Plants", slug: "steel-plants" },
  { name: "Fertilizers", slug: "fertilizers" },
  { name: "Water Treatment", slug: "water-treatment" },
  { name: "Manufacturing", slug: "manufacturing" },
] as const;

export const SOLUTIONS = [
  {
    name: "Industrial Valves",
    description: "Complete range of butterfly, ball, gate, globe and check valves for every application.",
  },
  {
    name: "Valve Automation",
    description: "ON/OFF automation, SCADA integration, pneumatic actuators and fail-safe systems.",
  },
  {
    name: "Pressure Measurement",
    description: "Pressure gauges, transmitters, differential pressure instruments and chemical seals.",
  },
  {
    name: "Temperature Measurement",
    description: "Thermocouples, RTD sensors, bimetallic gauges and temperature transmitters.",
  },
  {
    name: "Flow Measurement",
    description: "Electromagnetic, Coriolis, ultrasonic, vortex and variable area flowmeters.",
  },
  {
    name: "Process Automation",
    description: "Control valves, positioners, solenoid valves and complete automation packages.",
  },
  {
    name: "Valve Services",
    description: "Repair, testing, calibration, maintenance and emergency field support.",
  },
  {
    name: "Diaphragm Seal Replacement",
    description: "Any brand, any type — flanged, threaded or clamped seal replacement.",
  },
] as const;

export const PRODUCTS = [
  {
    name: "Butterfly Valves",
    category: "Valves",
    slug: "butterfly-valves",
    specs: "40 NB – 1200 NB | PN10 to Class #600",
    items: ["Concentric (Bonded/Replaceable/PTFE Seated)", "Triple Offset", "Double Offset (Soft/Metal Seated)"],
  },
  {
    name: "Ball Valves",
    category: "Valves",
    slug: "ball-valves",
    specs: "15 NB – 700 NB | Class #150 – #2500",
    items: ["Trunnion Mounted", "Floating", "3-Piece", "Jacketed", "3-Way", "Tank Bottom"],
  },
  {
    name: "Gate, Globe & Check Valves",
    category: "Valves",
    slug: "gate-globe-check",
    specs: "15 NB – 1500 NB | Class #150 – #2500",
    items: ["Cast Steel Gate/Globe/Check", "Forged Steel", "Dual Plate Check", "Wafer Check"],
  },
  {
    name: "Pneumatic Actuators",
    category: "Automation",
    slug: "pneumatic-actuators",
    specs: "4 – 4022 Nm | 3–8 Bar",
    items: ["Single Acting", "Double Acting", "P-Series", "E-Series"],
  },
  {
    name: "Pressure Instruments",
    category: "Instrumentation",
    slug: "pressure-instruments",
    specs: "63 – 250 mm | Up to 700 kg/cm²",
    items: ["Pressure Gauges", "Chemical Seal Gauges", "Transmitters", "Switches"],
  },
  {
    name: "Temperature Instruments",
    category: "Instrumentation",
    slug: "temperature-instruments",
    specs: "-200°C to 600°C",
    items: ["Thermocouples", "RTD Sensors", "Bimetallic Gauges", "Gas Filled Gauges"],
  },
  {
    name: "Flow Meters",
    category: "Instrumentation",
    slug: "flow-meters",
    specs: "Multiple Technologies",
    items: ["Electromagnetic", "Coriolis Mass", "Ultrasonic", "Vortex", "Variable Area"],
  },
  {
    name: "Control Valves & Accessories",
    category: "Automation",
    slug: "control-valves",
    specs: "½\" – 16\" | WCB/CF8/CF8M",
    items: ["Control Valves", "Positioners", "Solenoid Valves", "Limit Switches"],
  },
] as const;

export const SERVICES = [
  { name: "Valve Repair", description: "Complete repair services for any size, type, make or rating." },
  { name: "Calibration", description: "Positioner and instrument calibration with NABL traceability." },
  { name: "Hydrostatic Testing", description: "Body and seat leakage testing per API 598 standards." },
  { name: "Actuator Mounting", description: "Professional mounting of actuators and positioners." },
  { name: "Diaphragm Seal Replacement", description: "Any brand replacement — reduces maintenance cost." },
  { name: "Emergency Field Support", description: "On-site support for critical shutdowns and repairs." },
] as const;

export const ENGINEERING_PROCESS = [
  { step: "01", title: "Requirement", description: "Application & spec analysis" },
  { step: "02", title: "Selection", description: "Product & material selection" },
  { step: "03", title: "Engineering", description: "Technical design review" },
  { step: "04", title: "Assembly", description: "Precision assembly & mounting" },
  { step: "05", title: "Testing", description: "Hydrostatic & seat leak test" },
  { step: "06", title: "Inspection", description: "Quality verification" },
  { step: "07", title: "Dispatch", description: "Secure packaging & delivery" },
  { step: "08", title: "Support", description: "After-sales & field service" },
] as const;
