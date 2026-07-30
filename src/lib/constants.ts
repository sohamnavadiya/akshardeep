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
    yearsExperience: 14,
    clients: 200,
    products: 150,
    infrastructure: 5420,
  },
  partners: [
    { name: "Forbes Marshall", full: "Forbes Marshall (HVY) Pvt. Ltd.", logo: "/about/page3_img1_437x302.png" },
    { name: "Intervalve", full: "Intervalve Poonamwala Pvt. Ltd.", logo: "/about/page3_img2_437x302.png" },
    { name: "El-O-Matic", full: "El-O-Matic India Pvt. Ltd.", logo: "/about/page3_img3_437x302.png" },
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

export interface CertificateItem {
  id: string;
  title: string;
  badge: string;
  brand: string;
  issuer: string;
  description: string;
  pages: string[];
  pdfUrl: string;
  fileSize: string;
  type: string;
}

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "elomatic-authorization",
    title: "El-O-Matic Authorisation Letter",
    badge: "Official Authorisation Letter",
    brand: "El-O-Matic & Intervalve",
    issuer: "El-O-Matic India Pvt. Ltd. / Intervalve Poonawalla",
    description:
      "Official authorisation letter certifying Akshardeep Engineers as authorised channel partner for El-O-Matic pneumatic actuators and valve automation solutions.",
    pages: [
      "/certificates/authorization-letter-elomatic-p1.png",
      "/certificates/authorization-letter-elomatic-p2.png",
    ],
    pdfUrl: "/documents/authorization-letter-elomatic.pdf",
    fileSize: "130 KB",
    type: "Authorisation Certificate",
  },
  {
    id: "forbes-marshall-certificate",
    title: "Forbes Marshall Authorised Channel Partner Certificate",
    badge: "Channel Partner Certificate",
    brand: "Forbes Marshall",
    issuer: "Forbes Marshall (HVY) Pvt. Ltd.",
    description:
      "Official channel partner certificate from Forbes Marshall authorizing Akshardeep Engineers for sales and supply of industrial steam & process flow control systems.",
    pages: ["/certificates/forbes-marshall-certificate-p1.png"],
    pdfUrl: "/documents/forbes-marshall-certificate.pdf",
    fileSize: "788 KB",
    type: "Authorisation Certificate",
  },
  {
    id: "akshardeep-brochure",
    title: "Akshardeep Engineers Corporate Brochure",
    badge: "Company Profile & Products",
    brand: "Akshardeep Engineers",
    issuer: "Akshardeep Engineers",
    description:
      "Complete corporate brochure & product catalogue detailing our range of industrial valves, instrumentation, and valve automation capabilities.",
    pages: ["/about/page2_img5_1111x940.png"],
    pdfUrl: "/documents/akshardeep-brochure.pdf",
    fileSize: "6.9 MB",
    type: "Company Brochure",
  },
];


export const NAV_LINKS = [
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Butterfly Valves", href: "/products/butterfly-valves" },
      { label: "Ball Valves", href: "/products/ball-valves" },
      { label: "Gate, Globe & Check Valves", href: "/products/gate-globe-check" },
      { label: "Other Valves", href: "/products/other-valves" },
      { label: "Valve Automation", href: "/products/valve-automation" },
      { label: "Instrumentation", href: "/products/instrumentation" },
      { label: "Pneumatics", href: "/products/pneumatics" },
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

export type SpecRow = { key: string; value: string };
export type SubProduct = {
  name: string;
  model?: string;
  image: string;
  specs: SpecRow[];
};

export type Product = {
  name: string;
  category: string;
  slug: string;
  tagline: string;
  heroImage: string;
  description: string;
  specs: string; // short summary for listing
  items: readonly string[];
  specTable: SpecRow[];
  subProducts?: SubProduct[];
};

export const PRODUCTS: Product[] = [
  {
    name: "Butterfly Valves",
    category: "Valves",
    slug: "butterfly-valves",
    tagline: "Concentric & High Performance designs for every pressure class.",
    heroImage: "/products/page4_img2_1091x947.png",
    description:
      "Akshardeep supplies a comprehensive range of butterfly valves from Intervalve — including concentric bonded seat, replaceable seat, PTFE seated, and high-performance double/triple offset designs for demanding applications across chemicals, pharma, power and oil & gas.",
    specs: "40 NB – 1200 NB | PN10 to Class #600",
    items: ["Bonded Seat Concentric", "Replaceable Seat Concentric", "PTFE Seated", "Triple Offset HP", "Soft Seated Double Offset", "Metal Seated Double Offset"],
    specTable: [
      { key: "Size Range", value: "40 NB to 1200 NB (Concentric) | 50 NB to 750 NB (HP)" },
      { key: "Pressure Rating", value: "PN10 & PN16 (Concentric) | ASME Class #150, #300, #600 (HP)" },
      { key: "End Connection", value: "Wafer / Lugged / Double Flanged" },
      { key: "Face to Face", value: "API 609 Cat-A / ISO 5752 Tab 5 / BS EN558" },
      { key: "Body MOC", value: "CI / SGI / WCB / CF8 / CF8M" },
      { key: "Disc MOC", value: "SGI / WCB / CF8 / CF8M / Special Alloys" },
      { key: "Seat Options", value: "Nitrile, EPDM, Neoprene, Hypalon, Viton, Silicon, PTFE" },
      { key: "Operator", value: "Hand Lever / Gear Box / Actuator" },
      { key: "Design Standard", value: "API 609, ISO 5752, BS EN558" },
    ],
    subProducts: [
      {
        name: "Bonded Seat Butterfly Valve",
        model: "IVGKL / IVGKB / IVTLB / IVDF",
        image: "/products/page4_img1_410x419.png",
        specs: [
          { key: "Model", value: "IVGKL / IVGKB / IVTLB / IVDF" },
          { key: "Size Range", value: "40 NB to 1200 NB" },
          { key: "Pressure Rating", value: "PN10 & PN16" },
          { key: "Seat Design", value: "Bonded" },
          { key: "End Connection", value: "Wafer / Lugged / Double Flanged" },
        ],
      },
      {
        name: "Replaceable Seat Butterfly Valve",
        model: "IVGKR / IVTL",
        image: "/products/page4_img3_981x927.png",
        specs: [
          { key: "Model", value: "IVGKR / IVTL" },
          { key: "Size Range", value: "50 NB to 600 NB" },
          { key: "Pressure Rating", value: "Up to PN10" },
          { key: "Seat Design", value: "Replaceable" },
          { key: "End Connection", value: "Wafer / Lugged" },
        ],
      },
      {
        name: "Triple Offset HP Butterfly Valve",
        model: "IVTEX",
        image: "/products/page5_img5_278x477.png",
        specs: [
          { key: "Model", value: "IVTEX" },
          { key: "Size Range", value: "80 NB to 750 NB" },
          { key: "Pressure Rating", value: "ASME Class #150, #300, #600" },
          { key: "Operating Temp", value: "-50°C to +540°C" },
          { key: "Seat Design", value: "Laminar Seal" },
        ],
      },
      {
        name: "Soft Seated Double Offset",
        model: "IVEX-T",
        image: "/products/page5_img3_218x387.png",
        specs: [
          { key: "Model", value: "IVEX-T" },
          { key: "Size Range", value: "50 NB to 600 NB" },
          { key: "Pressure Rating", value: "ASME Class #150, #300" },
          { key: "Operating Temp", value: "-50°C to +220°C" },
          { key: "Seat Design", value: "Replaceable PTFE / GFT" },
        ],
      },
      {
        name: "Metal Seated Double Offset",
        model: "IVEX-M",
        image: "/products/page5_img4_250x408.png",
        specs: [
          { key: "Model", value: "IVEX-M" },
          { key: "Size Range", value: "50 NB to 600 NB" },
          { key: "Pressure Rating", value: "ASME Class #150, #300" },
          { key: "Operating Temp", value: "-50°C to +500°C" },
          { key: "Seat", value: "Inconel-625 / SS 316" },
        ],
      },
    ],
  },
  {
    name: "Ball Valves",
    category: "Valves",
    slug: "ball-valves",
    tagline: "Trunnion, floating and 3-piece designs for all pressure classes.",
    heroImage: "/products/page6_img1_381x369.png",
    description:
      "Full range of ball valves from 15 NB to 700 NB covering ASME Class #150 to #2500. Available in trunnion mounted, floating, 3-piece, jacketed, 3-way and tank bottom configurations. Fire safe, anti-static and SIL-rated options available.",
    specs: "15 NB – 700 NB | Class #150 – #2500",
    items: ["2/3 Pcs Trunnion Mounted", "2 Pcs Floating", "3 Pcs Design", "Jacketed Floating", "3 Way Floating", "Tank Bottom"],
    specTable: [
      { key: "Size Range", value: "15 NB to 700 NB" },
      { key: "Pressure Rating", value: "ASME Class #150 to Class #2500" },
      { key: "Operating Temp", value: "-29°C to +425°C" },
      { key: "Body MOC", value: "Carbon Steel / Stainless Steel / Duplex / Alloys" },
      { key: "Ball MOC", value: "Carbon Steel / Stainless Steel / Duplex / Alloys" },
      { key: "Seat Options", value: "PTFE / GFT / CFT / Devlon / PEEK / Metal (CRC / TCC / ST)" },
      { key: "Testing Standard", value: "API 6D / BS EN ISO 5208 / API 598 / BS EN ISO 17292" },
      { key: "End Connection", value: "Flanged / Socket Weld / Screwed / Butt Weld" },
      { key: "Features", value: "Fire Safe, Full Bore, Anti-Static, Live Loading Stem, Top ISO Pad" },
    ],
    subProducts: [
      {
        name: "Trunnion Mounted Ball Valve",
        model: "2/3 Pcs Design",
        image: "/products/page6_img1_381x369.png",
        specs: [
          { key: "Size Range", value: "50 NB to 700 NB" },
          { key: "Pressure Rating", value: "ASME Class #150 to Class #2500" },
          { key: "End Connection", value: "Flanged" },
          { key: "Face to Face", value: "ASME B16.10" },
          { key: "Seat", value: "Soft & Metal Seated" },
        ],
      },
      {
        name: "Floating Ball Valve",
        model: "2 Pcs Design",
        image: "/products/page6_img2_482x283.png",
        specs: [
          { key: "Size Range", value: "15 NB to 250 NB" },
          { key: "Pressure Rating", value: "ASME Class #150 – #2500" },
          { key: "Operating Temp", value: "-29°C to +425°C" },
          { key: "Testing Standard", value: "API 6D / API 598" },
          { key: "Features", value: "Fire Safe, Anti-Static, Full Bore" },
        ],
      },
      {
        name: "3 Piece Ball Valve",
        model: "3 Pcs Design",
        image: "/products/page6_img3_454x244.png",
        specs: [
          { key: "Size Range", value: "15 NB to 50 NB" },
          { key: "Pressure Rating", value: "ASME Class #800" },
          { key: "End Connection", value: "Socket Weld / Screwed / Butt Weld" },
          { key: "Seat Design", value: "PTFE / MPTFE / TFM 1600 / RPTFE / Devlon / PEEK" },
          { key: "Testing Standard", value: "BS EN ISO 5208 / API 598" },
        ],
      },
      {
        name: "Tank Bottom Ball Valve",
        image: "/products/page8_img3_244x262.png",
        specs: [
          { key: "Size Range", value: "15 mm to 250 mm NB" },
          { key: "Pressure Rating", value: "ASME #150, #300, #600" },
          { key: "Temp. Range", value: "-35°C to 280°C (Soft Seated)" },
          { key: "Body Materials", value: "Stainless Steel / Carbon Steel / Alloys" },
          { key: "Features", value: "Cavity free, Angled stem design, Direct mounting to vessel flange" },
        ],
      },
    ],
  },
  {
    name: "Gate, Globe & Check Valves",
    category: "Valves",
    slug: "gate-globe-check",
    tagline: "Cast and forged steel valves for high-pressure critical applications.",
    heroImage: "/products/page7_img2_225x372.png",
    description:
      "Comprehensive range of cast steel and forged steel gate, globe, and check valves from 15 NB to 1500 NB, covering ASME Class #150 to Class #2500. Designed per API 600 / API 602 / API 594 standards with API 598 testing.",
    specs: "15 NB – 1500 NB | Class #150 – #2500",
    items: ["Cast Steel Gate/Globe/Check", "Forged Steel Gate/Globe", "Dual Plate Check", "Single Piece Wafer Check"],
    specTable: [
      { key: "Size Range", value: "15 NB to 1500 NB" },
      { key: "Pressure Rating", value: "ASME Class #150, #300, #600 (Cast) | Class #150 to #2500 (Forged)" },
      { key: "Design Standard", value: "API 600 / BS 1873 / BS 1868 / API 602 / API 594" },
      { key: "Testing Standard", value: "API 598" },
      { key: "Face to Face", value: "ASME B16.10 / API 594" },
      { key: "Trim Options", value: "1 / 5 / 8 / 12 / 16" },
      { key: "End Connection", value: "Flanged / Butt Weld / Socket Weld / Screwed" },
      { key: "Seat Options (Check)", value: "EPDM / PTFE / 13 Cr. / SS316 / SS304 / ST" },
    ],
    subProducts: [
      {
        name: "Cast Steel Gate/Globe/Check",
        image: "/products/page7_img2_225x372.png",
        specs: [
          { key: "Size Range", value: "50 NB to 1000 NB" },
          { key: "Pressure Rating", value: "ASME Class #150, #300, #600" },
          { key: "Design Standard", value: "API 600 / BS 1873 / BS 1868" },
          { key: "End Connection", value: "Flanged & Butt Weld" },
          { key: "Trim Options", value: "1 / 5 / 8 / 12 / 16" },
        ],
      },
      {
        name: "Forged Steel Gate/Globe/Check",
        image: "/products/page7_img5_189x395.png",
        specs: [
          { key: "Size Range", value: "15 NB to 50 NB" },
          { key: "Pressure Rating", value: "ASME Class #150 to Class #2500" },
          { key: "Design Standard", value: "API 602" },
          { key: "End Connection", value: "Flanged / Socket Weld / Screwed / Butt Weld" },
          { key: "Trim Options", value: "1 / 5 / 8 / 12 / 16" },
        ],
      },
      {
        name: "Dual Plate Check Valve",
        image: "/products/page7_img4_344x254.png",
        specs: [
          { key: "Size Range", value: "25 NB to 1500 NB" },
          { key: "Pressure Rating", value: "ASME Class #150, #300, #600" },
          { key: "Design Standard", value: "API 594" },
          { key: "Seat Options", value: "EPDM / PTFE / 13 Cr. / SS316 / SS304 / ST" },
          { key: "End Connection", value: "Flanged / Wafer" },
        ],
      },
      {
        name: "Wafer Type Check Valve",
        model: "IVC / IVCT",
        image: "/products/page7_img1_304x349.png",
        specs: [
          { key: "Model", value: "IVC / IVCT" },
          { key: "Size Range", value: "25 NB to 900 NB" },
          { key: "Pressure Rating", value: "Up to PN16" },
          { key: "Testing Standard", value: "API 598" },
          { key: "Seat Design", value: "Replaceable" },
        ],
      },
    ],
  },
  {
    name: "Other Type Valves",
    category: "Valves",
    slug: "other-valves",
    tagline: "Lined, jacketed, 3-way, strainers and sight glasses for specialty applications.",
    heroImage: "/products/page8_img2_369x349.png",
    description:
      "Specialty valve range including PFA/FEP lined ball & butterfly valves, jacketed ball valves, 3-way valves, disc check valves, full view sight glasses, double window sight glasses, Y-type and basket type strainers.",
    specs: "15 mm – 300 mm | ASME #150–#600",
    items: ["Lined Valves (PFA/FEP)", "Jacketed Floating Ball Valve", "Tank Bottom Ball Valve", "3 Way Ball Valve", "Disc Check Valve", "Sight Glasses", "Y-Type Strainer", "Basket Strainer"],
    specTable: [
      { key: "Lined Valve Types", value: "Ball, Butterfly & Plug Valves" },
      { key: "Size Range", value: "15 mm to 300 mm (type dependent)" },
      { key: "Body MOC", value: "WCB, CF8 & CF8M" },
      { key: "Lined MOC", value: "PFA, Antistatic PFA, TFM & FEP" },
      { key: "Sight Glass Types", value: "Reflex / Transparent / Tubular" },
      { key: "Strainer Types", value: "Y-Type & Basket Type" },
      { key: "Strainer Mesh", value: "SS304, SS316, SS316L & Duplex Steel" },
      { key: "Pressure Rating", value: "Up to ASME #600 (valve) / 20 kg/cm² (strainer)" },
    ],
    subProducts: [
      {
        name: "Lined Valves (Ball, Butterfly & Plug)",
        image: "/products/page8_img2_369x349.png",
        specs: [
          { key: "Type", value: "Ball / Butterfly / Plug Valves" },
          { key: "Size Range", value: "15 mm to 300 mm" },
          { key: "Lined MOC", value: "PFA, Antistatic PFA, TFM & FEP" },
          { key: "Body MOC", value: "WCB, CF8 & CF8M" },
          { key: "Ball/Disc/Plug MOC", value: "CF8 & CF8M" },
        ],
      },
      {
        name: "Jacketed Floating Ball Valve",
        image: "/products/page8_img1_306x234.png",
        specs: [
          { key: "Size", value: "15 mm to 250 mm NB" },
          { key: "Pressure Rating", value: "ASME #150 & #300" },
          { key: "Temp. Range", value: "-35°C to 280°C" },
          { key: "Design Standard", value: "API 6D Rev 23; ISO 17292 Rev 2004" },
          { key: "Features", value: "Fire safe (API-607), One Piece Body, Double Sealing" },
        ],
      },
      {
        name: "3 Way Floating Ball Valve",
        image: "/products/page8_img4_221x358.png",
        specs: [
          { key: "Type", value: "T Port & L Port" },
          { key: "Size", value: "15 mm to 100 mm NB" },
          { key: "Pressure Range", value: "ASME #150 & #300" },
          { key: "Temp. Range", value: "-35°C to 280°C" },
          { key: "Body Materials", value: "Stainless Steel / Carbon Steel / Alloys" },
        ],
      },
      {
        name: "Y-Type Strainer",
        image: "/products/page9_img4_234x316.png",
        specs: [
          { key: "Size Range", value: "25 NB to 150 NB" },
          { key: "Pressure Rating", value: "150# & 300#" },
          { key: "Body & Cover", value: "WCB, CF8, CF8M & CF3M" },
          { key: "Mesh", value: "SS304, SS316, SS316L & Duplex Steel" },
          { key: "Mesh Number", value: "20, 30, 40*, 60, 80, 100" },
        ],
      },
      {
        name: "Full View Sight Glass",
        image: "/products/page9_img1_135x201.png",
        specs: [
          { key: "Type", value: "IC Casting, Base Stock, T Bush" },
          { key: "Size Range", value: "15 NB to 150 NB" },
          { key: "Design Temp", value: "Up to 200°C" },
          { key: "Design Pressure", value: "Up to 10 Kg/cm²" },
          { key: "W/P Part", value: "MS, SS304, SS316, SS316L and PP, PTFE Lined" },
        ],
      },
    ],
  },
  {
    name: "Valve Automation",
    category: "Automation",
    slug: "valve-automation",
    tagline: "Pneumatic actuators and complete ON/OFF automation packages.",
    heroImage: "/products/page10_img4_371x688.png",
    description:
      "Akshardeep Engineers designs, assembles and supplies complete valve automation solutions using El-O-Matic pneumatic actuators. With over 14 years experience, we deliver reliable ON/OFF and modulating automation packages integrated with SCADA/DCS systems.",
    specs: "4 – 4022 Nm Torque | 3–8 Bar",
    items: ["Single Acting (SA)", "Double Acting (DA)", "P-Series Actuators", "E-Series Actuators", "Ball Valve Assemblies", "Butterfly Valve Assemblies"],
    specTable: [
      { key: "Actuator Type", value: "Single Acting (SA) & Double Acting (DA)" },
      { key: "P-Series Torque", value: "4 to 4022 Nm @ 3–7 Bar" },
      { key: "P-Series Springs", value: "Min 6, Max 14 springs" },
      { key: "E-Series Torque", value: "4 to 1423 Nm @ 3–6 Bar" },
      { key: "E-Series Springs", value: "Min 3, Max 6 springs" },
      { key: "Operating Pressure (SA)", value: "3 to 8 Bar" },
      { key: "Body MOC", value: "Aluminium / Carbon Steel / Stainless Steel" },
      { key: "Minimum Life", value: "5 Lakh Cycles" },
      { key: "Valves Automated", value: "Ball Valve, Butterfly Valve, Plug Valve, PFA Line Valve" },
      { key: "Certifications", value: "Fire Safe, SIL 3 Certified" },
    ],
    subProducts: [
      {
        name: "El-O-Matic Pneumatic Actuator",
        image: "/products/page9_img5_426x215.png",
        specs: [
          { key: "Type", value: "Single Acting & Double Acting" },
          { key: "P-Series Torque", value: "4 to 4022 Nm @ 3–7 Bar" },
          { key: "E-Series Torque", value: "4 to 1423 Nm @ 3–6 Bar" },
          { key: "Body MOC", value: "Aluminium / Carbon Steel / SS" },
          { key: "Life", value: "5 Lakh Cycles (Minimum)" },
        ],
      },
      {
        name: "Actuated Ball Valve Assembly",
        image: "/products/page10_img4_371x688.png",
        specs: [
          { key: "Integration", value: "SCADA or DCS compatible" },
          { key: "Safety", value: "Fail-Safe Design, Fire Safe, SIL 3" },
          { key: "Operation", value: "Remote / Automation / Digital Partial Stroke" },
          { key: "Closure", value: "Rapid Closure Mechanism" },
          { key: "Certification", value: "SIL 3 Certified" },
        ],
      },
      {
        name: "Automation Control Panel",
        image: "/products/page10_img3_405x570.png",
        specs: [
          { key: "Compatibility", value: "All major DCS / SCADA systems" },
          { key: "Positioner Types", value: "EP Positioner, Smart Positioner (HART)" },
          { key: "Accessories", value: "Solenoid Valves, Limit Switches, AFR" },
          { key: "Support", value: "Service unit and personnel for ongoing support" },
          { key: "Custom Assembly", value: "Custom ON/OFF actuator valve assemblies" },
        ],
      },
    ],
  },
  {
    name: "Diaphragm Seal Replacement",
    category: "Instrumentation",
    slug: "diaphragm-seal",
    tagline: "Any brand, any type — reduce maintenance cost with seal replacement.",
    heroImage: "/products/page12_img1_465x354.png",
    description:
      "In partnership with Badotherm India (joint venture of Badotherm Holland Inc., founded 1957), Akshardeep provides high-quality diaphragm seal replacement services. Replace the seal — not the transmitter — saving cost, reducing inventory and cutting delivery time.",
    specs: "Any Brand | Flanged / Threaded / Clamped",
    items: ["Flanged Type Seals", "Threaded Type Seals", "Clamped Type Seals", "PTFE Coated Seals", "Gold Coated Seals", "Custom Exotic Alloys"],
    specTable: [
      { key: "Diaphragm MOC", value: "Stainless Steel, Hastelloy, Duplex 2205, Nickel 201, Tantalum" },
      { key: "Fill Fluid Options", value: "BSO-18 (-10/+315°C), BSO-22 (-50/+225°C), BSO-36 (-45/+170°C), BSO-48 (-20/+420°C), BSO-01 (-110/+100°C)" },
      { key: "Coating Options", value: "PTFE (40 & 80 µm), PFA (40 & 80 µm), FEP, Gold (25 & 40 µm), Silver" },
      { key: "Process Connection (Flange)", value: "1\" to 4\" CL 150# to 2500#" },
      { key: "Process Connection (Female Thread)", value: "1/4\" NPT to 2\" NPT" },
      { key: "Process Connection (Male Thread)", value: "1/4\" to 1.5\" NPT" },
      { key: "Compatibility", value: "Any brand, any type can be replaced" },
      { key: "Partner", value: "Badotherm India (Badotherm Holland Inc. JV, Est. 1957)" },
    ],
    subProducts: [
      {
        name: "Flanged Diaphragm Seal",
        image: "/products/page11_img1_165x248.png",
        specs: [
          { key: "Process Connection", value: "Flange 1\" to 4\" CL 150# to 2500#" },
          { key: "Diaphragm MOC", value: "SS, Hastelloy, Duplex, Tantalum" },
          { key: "Coating", value: "PTFE / PFA / Gold / Silver" },
          { key: "Fill Fluid", value: "As per temperature range" },
          { key: "Compatibility", value: "Any brand transmitter" },
        ],
      },
      {
        name: "Threaded Diaphragm Seal",
        image: "/products/page11_img2_158x285.png",
        specs: [
          { key: "Process Connection", value: "1/4\" NPT to 2\" NPT (Female Thread)" },
          { key: "Diaphragm MOC", value: "SS, Hastelloy, Duplex, Tantalum" },
          { key: "Coating", value: "PTFE / PFA / Gold / Silver" },
          { key: "Fill Fluid", value: "As per temperature range" },
          { key: "Compatibility", value: "Any brand transmitter" },
        ],
      },
      {
        name: "Seal Configuration Unit",
        image: "/products/page12_img2_206x341.png",
        specs: [
          { key: "Configuration", value: "Single & Double Seal Systems" },
          { key: "Temperature Range", value: "-110°C to +420°C (depending on fill fluid)" },
          { key: "Design", value: "Custom engineering for extreme conditions" },
          { key: "Accuracy", value: "Same as brand-new diaphragm transmitter" },
          { key: "Partner", value: "Badotherm Holland Inc. (Est. 1957, Netherlands)" },
        ],
      },
    ],
  },
  {
    name: "Instrumentation",
    category: "Instrumentation",
    slug: "instrumentation",
    tagline: "Precision pressure, temperature and level monitoring devices.",
    heroImage: "/products/page16_img2_325x407.png",
    description:
      "Complete range of precision monitoring instruments including pressure gauges (SP & GP), diaphragm gauges, temperature gauges, thermocouples, RTD sensors, pressure transmitters, level switches and gauge accessories from Badotherm India and global makes.",
    specs: "63–250 mm | -200°C to 600°C | Up to 700 kg/cm²",
    items: ["Pressure Gauges", "Diaphragm Gauges", "Temperature Gauges", "Thermocouples", "RTD Sensors", "Pressure Transmitters", "Level Switches", "Gauge Accessories"],
    specTable: [
      { key: "Pressure Gauge Size", value: "63, 100, 150, 200 and 250 mm" },
      { key: "Pressure Range", value: "-760 mmHg to 0, up to 700 kg/cm²" },
      { key: "Accuracy", value: "Class ±1.0% of FS (Pressure) | ±1.6% FS (Diaphragm)" },
      { key: "Casing", value: "Stainless Steel" },
      { key: "Protection", value: "IP67" },
      { key: "RTD Type", value: "PT-100 (-200 to 450°C), Class A / Class B" },
      { key: "Thermocouple Types", value: "J / K / N / R / S / B / T / E" },
      { key: "Temperature Range", value: "-40°C to 600°C (Bimetallic & Gas Filled)" },
      { key: "Level Switch Float Dia", value: "28 mm, 42 mm, 52 mm, 75 mm SS316" },
      { key: "NABL Traceability", value: "Available on RTD, Capsule Gauge, Level Switch" },
    ],
    subProducts: [
      {
        name: "Pressure Gauge (SP & GP)",
        image: "/products/page16_img2_325x407.png",
        specs: [
          { key: "Nominal Size", value: "63, 100, 150, 200 and 250 mm" },
          { key: "Std. Ranges", value: "-760 mmHg to 0, up to 700 kg/cm²" },
          { key: "Accuracy", value: "Class ±1.0% of FS" },
          { key: "Protection", value: "IP67" },
          { key: "Compliance", value: "EN837-1" },
        ],
      },
      {
        name: "Chemical Seal Pressure Gauge",
        image: "/products/page17_img1_308x412.png",
        specs: [
          { key: "Connection", value: "Threaded / Flanged / Triclover" },
          { key: "Diaphragm MOC", value: "SS316L, Monel 400, Inconel 825, Hastelloy-C276, Tantalum" },
          { key: "Applications", value: "Corrosive Media, High Temperature, Viscous Fluids, Pharma" },
          { key: "Traceability", value: "NABL Traceability Certificate" },
          { key: "Transmitting Fluid", value: "Silicon DC200, DC704, Halocarbon, Flurolube" },
        ],
      },
      {
        name: "RTD Sensor",
        image: "/products/page18_img4_326x328.png",
        specs: [
          { key: "Elements", value: "Simplex / Duplex" },
          { key: "Element Type", value: "PT-100 (-200 to 450°C)" },
          { key: "Accuracy Class", value: "Class A / Class B (IEC-60751 / DIN 43760)" },
          { key: "Wire Configuration", value: "2 / 3 / 4 Wire" },
          { key: "Traceability", value: "NABL Traceability Certificate" },
        ],
      },
      {
        name: "Thermocouple",
        image: "/products/page18_img3_198x340.png",
        specs: [
          { key: "Elements", value: "Simplex / Duplex" },
          { key: "Element Type", value: "J / K / N / R / S / B / T / E" },
          { key: "Accuracy Class", value: "Class I / Class II (IEC-584.2)" },
          { key: "Wire Configuration", value: "2 Wire (Simplex) / 4 Wire (Duplex)" },
          { key: "Sheath Material", value: "SS316 / Others on request" },
        ],
      },
      {
        name: "Bimetallic Temperature Gauge",
        image: "/products/page18_img1_415x286.png",
        specs: [
          { key: "Nominal Size", value: "100 and 150 mm" },
          { key: "Std. Ranges", value: "-40°C to 400°C" },
          { key: "Accuracy", value: "Tolerance Class 1 as per EN 13190" },
          { key: "Compliance", value: "EN13190" },
          { key: "Traceability", value: "NABL Traceability Certificate" },
        ],
      },
      {
        name: "Side/Top Mounted Level Switch",
        image: "/products/page19_img1_408x256.png",
        specs: [
          { key: "Float Dia", value: "42 mm, 52 mm, 75 mm SS316" },
          { key: "Enclosure", value: "Weather Proof IP67 or LM24" },
          { key: "Micro Switch Type", value: "1SPDT, 2SPDT" },
          { key: "Maximum Pressure", value: "20 Bar" },
          { key: "Traceability", value: "NABL Traceability Certificate" },
        ],
      },
    ],
  },
  {
    name: "Pneumatics & Process Instruments",
    category: "Instrumentation",
    slug: "pneumatics",
    tagline: "Flow meters, control valves, steam traps and pneumatic components.",
    heroImage: "/products/page21_img5_612x205.png",
    description:
      "Wide range of process instruments including electromagnetic, Coriolis, ultrasonic, vortex and variable area flowmeters. Also safety relief valves, control valves, process analytics, steam traps, and a full suite of pneumatic components including solenoid valves, cylinders and FRL units.",
    specs: "Multiple Technologies | Global Makes",
    items: ["Electromagnetic Flowmeters", "Coriolis Mass Flowmeters", "Ultrasonic Flowmeters", "Vortex Flowmeters", "Control Valves", "Safety Relief Valves", "Steam Traps", "Solenoid Valves", "Air Cylinders"],
    specTable: [
      { key: "Flowmeter Types", value: "Electromagnetic, Coriolis, Ultrasonic, Vortex, Variable Area" },
      { key: "Control Valve Size", value: "1/2\" to 16\"" },
      { key: "Control Valve Body", value: "WCB, CF8M, CF8, LCB" },
      { key: "Safety Relief Valve Size", value: "25 NB × 50 NB to 250 NB × 350 NB" },
      { key: "Safety Relief Pressure", value: "0.7 to 90 Kg/cm²" },
      { key: "Safety Relief Temp", value: "-40°C to +538°C" },
      { key: "Certification", value: "IBR / EIL / CCOE" },
      { key: "Steam Trap Types", value: "Thermodynamic, Ball Float, Bimetallic Thermostatic" },
      { key: "Solenoid Valve Types", value: "3/2 Way, 5/2 Way & Convertible" },
      { key: "Makes", value: "Forbes Marshall, Yokogawa, Emerson, ABB, Endress+Hauser, Rotork" },
    ],
    subProducts: [
      {
        name: "Electromagnetic Flowmeter",
        image: "/products/page20_img2_116x242.png",
        specs: [
          { key: "Type", value: "Electromagnetic" },
          { key: "Makes", value: "Yokogawa, Emerson, ABB, Endress+Hauser" },
          { key: "Output", value: "4–20 mA with HART / Pulse / Modbus" },
          { key: "Certification", value: "SIL2 / SIL3, PED Category III" },
          { key: "Applications", value: "Conductive liquids, slurries, chemicals" },
        ],
      },
      {
        name: "Control Valve",
        image: "/products/page21_img1_147x342.png",
        specs: [
          { key: "Nominal Size", value: "1/2\" to 16\"" },
          { key: "Body Material", value: "WCB, CF8M, CF8, LCB" },
          { key: "Seat", value: "SS316, SS410, SS440C Hardened" },
          { key: "Seat Leakage", value: "Metal Class IV; Optional Class V; Class VI (0–180°C)" },
          { key: "Accessories", value: "Smart Positioner, Limit Switch, Solenoid Valve" },
        ],
      },
      {
        name: "Safety Relief Valve",
        image: "/products/page20_img7_105x149.png",
        specs: [
          { key: "Size", value: "25 NB × 50 NB to 250 NB × 350 NB" },
          { key: "Pressure Range", value: "0.7 to 90 Kg/cm²" },
          { key: "Temp. Range", value: "-40°C to +538°C" },
          { key: "Fluid", value: "Liquid, Gas & Steam" },
          { key: "Certification", value: "IBR / EIL / CCOE" },
        ],
      },
      {
        name: "Steam Trap",
        image: "/products/page21_img2_129x343.png",
        specs: [
          { key: "Types", value: "Thermodynamic, Ball Float, Single/Two Orifice Float, Bimetallic Thermostatic" },
          { key: "Make", value: "Forbes Marshall" },
          { key: "Applications", value: "Steam distribution systems, condensate recovery" },
          { key: "Pressure Range", value: "Various — contact for selection" },
          { key: "Size Range", value: "Various — contact for selection" },
        ],
      },
    ],
  },
];

export const CLIENTS = [
  { name: "Aarti Industries Limited", logo: "/clients/client_01.png" },
  { name: "Asian Paints", logo: "/clients/client_02.png" },
  { name: "Galaxy (Global Supplies)", logo: "/clients/client_03.png" },
  { name: "Godrej Industries Ltd.", logo: "/clients/client_04.png" },
  { name: "PCBL Chemical", logo: "/clients/client_05.png" },
  { name: "Apcotex", logo: "/clients/client_06.png" },
  { name: "Alkem", logo: "/clients/client_07.png" },
  { name: "FMC", logo: "/clients/client_08.png" },
  { name: "Cohizon Life Sciences", logo: "/clients/client_09.png" },
  { name: "Coromandel", logo: "/clients/client_10.png" },
  { name: "Covestro", logo: "/clients/client_11.png" },
  { name: "Indorama", logo: "/clients/client_12.png" },
  { name: "KLJ Group", logo: "/clients/client_13.png" },
  { name: "Finerchem", logo: "/clients/client_14.png" },
  { name: "Rallis India (TATA)", logo: "/clients/client_15.png" },
  { name: "Aditya Birla Grasim", logo: "/clients/client_16.png" },
  { name: "Lanxess", logo: "/clients/client_17.png" },
  { name: "Kohler", logo: "/clients/client_18.png" },
  { name: "Cadila Pharmaceuticals", logo: "/clients/client_19.png" },
  { name: "Champion", logo: "/clients/client_20.png" },
  { name: "BEIL Infrastructure Ltd", logo: "/clients/client_21.png" },
  { name: "Beotochem Lodge", logo: "/clients/client_22.png" },
  { name: "Alembic", logo: "/clients/client_23.png" },
  { name: "Nitrex", logo: "/clients/client_24.png" },
  { name: "Gulbrandsen Technologies", logo: "/clients/client_25.png" },
  { name: "Bostik", logo: "/clients/client_26.png" },
  { name: "Atul", logo: "/clients/client_27.png" },
  { name: "UPL (OpenAg)", logo: "/clients/client_28.png" },
  { name: "Vardhman", logo: "/clients/client_29.png" },
  { name: "Modiguard", logo: "/clients/client_30.png" },
  { name: "Sakata INX Corp", logo: "/clients/client_31.png" },
  { name: "Saint-Gobain", logo: "/clients/client_32.png" },
  { name: "HiKAL", logo: "/clients/client_33.png" },
  { name: "Songwon", logo: "/clients/client_34.png" },
  { name: "Solvay", logo: "/clients/client_35.png" },
];

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
