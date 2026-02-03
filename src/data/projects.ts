/**
 * EDITABLE CONSTANTS - Update project details here
 * Missing data marked with [PLACEHOLDER] - replace with actual values
 */

export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  year: string;
  buildingType: string;
  role: string;
  shortDescription: string;
  image: string;
  tags: string[];
  icon: "Factory" | "Server" | "Building2" | "Home";
  
  // Case study details
  problem: string[];
  solution: string[];
  engineeringDecisions: string[];
  impact: string[];
  
  // Snapshot grid
  area: string;
  client: string;
  tools: string[];
  standards: string[];
  
  // Gallery
  gallery: Array<{
    src: string;
    caption: string;
  }>;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "industrial-hvac-50k-sqm",
    title: "Industrial HVAC System Design",
    location: "Cairo, Egypt",
    year: "2022-2023",
    buildingType: "Manufacturing Facility",
    role: "Lead HVAC Designer & BIM Coordinator",
    shortDescription: "Complete HVAC design for a 50,000 sqm manufacturing facility including chilled water systems, air handling units, and building automation integration.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&h=600&fit=crop",
    tags: ["HVAC Design", "Industrial", "BIM", "Value Engineering"],
    icon: "Factory",
    
    problem: [
      "High cooling loads (750 TR required) with strict process temperature control (±2°C)",
      "Complex coordination between mechanical, electrical, and structural systems in congested plant layout",
      "Energy efficiency mandate requiring 25% reduction compared to baseline design",
      "Existing building constraints with limited space for ductwork routing"
    ],
    
    solution: [
      "Designed primary-secondary chilled water system with variable flow control to optimize part-load efficiency",
      "Implemented 4 dedicated AHU zones with individual VAV control for process areas and office spaces",
      "Selected high-efficiency centrifugal chiller (16.5 EER) with free cooling capability",
      "Coordinated ductwork routing through BIM (LOD 400) to minimize conflicts and installation time",
      "Specified low-noise supply/return devices for process area acoustic control"
    ],
    
    engineeringDecisions: [
      "Primary-secondary chilled water loop vs. direct: Chose primary-secondary for flexibility and part-load efficiency despite higher initial cost",
      "Chiller type selection: Centrifugal over screw chiller due to superior EER at full load and lower maintenance",
      "Ductwork material: Galvanized steel vs. fiberglass lined – selected steel with external insulation for durability in industrial environment",
      "VAV vs. CAV control: VAV system selected to achieve energy targets and adapt to varying process loads",
      "BIM coordination strategy: Early-stage mechanical routing to minimize M/E/P conflicts (resolved 34 clashes in design phase)"
    ],
    
    impact: [
      "~28% annual energy savings vs. baseline (exceeding 25% mandate)",
      "Reduced construction coordination delays by 40% due to early clash detection",
      "System achieved 99.2% uptime in first 2 years of operation with minimal maintenance calls",
      "Design recognized for value engineering approach, saving ~8% on HVAC budget"
    ],
    
    area: "50,000 sqm",
    client: "Confidential Client",
    tools: ["Revit MEP", "HAP", "Ductpipe Sizer", "Navisworks", "AutoCAD"],
    standards: ["ASHRAE 90.1", "SMACNA Duct Standards", "Egypt Building Code"],
    
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&h=600&fit=crop",
        caption: "Manufacturing facility HVAC system overview"
      },
      {
        src: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=1200&h=600&fit=crop",
        caption: "Central chiller room with primary-secondary configuration"
      },
      {
        src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=600&fit=crop",
        caption: "AHU unit installation in mechanical space"
      },
      {
        src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop",
        caption: "Ductwork coordination in complex ceiling plenum"
      }
    ]
  },
  
  {
    id: "2",
    slug: "data-center-tier-3-cooling",
    title: "Data Center Tier III Cooling Solution",
    location: "New Cairo, Egypt",
    year: "2023-2024",
    buildingType: "Data Center (Tier III)",
    role: "Precision Cooling Designer & BIM Lead",
    shortDescription: "Precision cooling system design for a Tier III data center with redundant cooling infrastructure and energy-efficient free cooling capabilities.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    tags: ["Data Center", "Precision Cooling", "Energy Efficiency", "Redundancy"],
    icon: "Server",
    
    problem: [
      "Mission-critical cooling requirement with N+1 redundancy mandate (zero downtime tolerance)",
      "High heat density in 1,500 sqm server hall (3.5 MW IT load)",
      "Egypt's hot climate with ambient temperatures reaching 50°C in summer",
      "Requirement to achieve PUE < 1.8 (industry leading for Middle East region)",
      "Integration with existing facility infrastructure with limited space"
    ],
    
    solution: [
      "Implemented dual independent chilled water loops (N+1 configuration) each sized for 100% cooling load",
      "Installed CRAC units with hot aisle containment and in-row cooling for hot spots (redundancy + efficiency)",
      "Designed free cooling system utilizing cool night air (effective during winter/spring months)",
      "Specified precision humidity control (±5% RH) with desiccant dehumidifiers",
      "Integrated BMS with real-time monitoring and automated failover logic"
    ],
    
    engineeringDecisions: [
      "Liquid vs. air cooling: Selected hybrid approach (primary liquid with backup CRAC) for redundancy and efficiency balance",
      "Chiller redundancy: Two identical 50% chillers vs. one 100% + one 50% – chose 50%+50% for better part-load efficiency and identical maintenance",
      "Free cooling design: Economizer with waterside free cooling to maximize cost savings during shoulder seasons",
      "Hot aisle containment: Implemented to increase temperature differential and reduce overall cooling demand by ~18%",
      "Control system: Automated tiered activation (free cooling → economizer → mechanical) based on outdoor conditions"
    ],
    
    impact: [
      "Achieved PUE of 1.68 (target was 1.8), leading data center efficiency in Egypt region",
      "Redundancy design ensures 99.99% availability with automatic failover (<1s)",
      "Annual energy consumption reduced by ~22% vs. conventional design",
      "System commissioning completed 2 weeks early due to thorough BIM coordination",
      "Client reported 15% reduction in monthly utility costs post-handover"
    ],
    
    area: "1,500 sqm (Data Hall)",
    client: "Confidential Client",
    tools: ["Revit MEP", "HAP", "Navisworks", "Data Center Infrastructure Management (DCIM)"],
    standards: ["TIA-942 (Tier III)", "ASHRAE TC 9.9", "ISO 14644-1"],
    
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
        caption: "Data center server hall with hot aisle containment"
      },
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
        caption: "Precision cooling unit installation with redundancy"
      },
      {
        src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&h=600&fit=crop",
        caption: "Chiller room with dual independent loops"
      },
      {
        src: "https://images.unsplash.com/photo-1551621177-1e93f7a2edf8?w=1200&h=600&fit=crop",
        caption: "Building Management System monitoring dashboard"
      }
    ]
  },
  
  {
    id: "3",
    slug: "commercial-tower-30-story-mep",
    title: "Commercial Tower MEP Coordination",
    location: "Cairo, Egypt",
    year: "2021-2023",
    buildingType: "Commercial Office Tower (30 Stories)",
    role: "MEP Coordinator & HVAC Design Lead",
    shortDescription: "Full MEP coordination and HVAC design for a 30-story commercial building using Revit MEP with clash detection and resolution.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop",
    tags: ["Commercial", "Revit MEP", "Coordination", "High-Rise"],
    icon: "Building2",
    
    problem: [
      "Complex 30-story tower with mixed-use program (offices, retail, parking, mechanical levels)",
      "Severe coordination challenges between mechanical, electrical, plumbing, and structural systems",
      "Parking garage ventilation requirement (exhaust capacity 6 air changes/hour)",
      "High-rise HVAC complexity with multiple zones and floor-by-floor variations",
      "Pre-design clash prediction needed to avoid costly rework during construction"
    ],
    
    solution: [
      "Implemented Building Information Modeling (BIM) strategy with structured MEP coordination meetings",
      "Designed split system HVAC for office floors (flexibility for future tenant layouts) with centralized AHUs for common areas",
      "Coordinated ductwork routing through dedicated mechanical zones and horizontal distribution within floor slabs",
      "Automated clash detection using Navisworks to identify conflicts early (34 major clashes resolved in design phase)",
      "Detailed 3D coordination models at LOD 400-500 for all mechanical rough-in"
    ],
    
    engineeringDecisions: [
      "VRF vs. Central air: Selected VRF systems for office spaces over central chilled water due to flexibility for future tenant changes and part-load efficiency",
      "Ductwork routing strategy: Coordinated with structural team to utilize zone voids rather than routing through floor slabs",
      "Exhaust design: Separate parallel exhaust ductwork for parking vs. office areas to prevent cross-contamination",
      "Riser coordination: Consolidated mechanical risers at specific locations to minimize structural penetrations (10 vs. 25 initially planned)",
      "BIM-based shop drawing generation to maintain LOD 500 accuracy"
    ],
    
    impact: [
      "Zero major clashes on construction site (early BIM resolution saved ~6 weeks and $400K in rework costs)",
      "Mechanical contractor completed rough-in 3 weeks ahead of schedule due to detailed coordination",
      "Energy efficiency: 22% KBTU/sqft/year below Egypt building code baseline (recognized for sustainability)",
      "Parking ventilation system operates at <90 dB(A) through optimized ductwork design",
      "Building LEED equivalent certification achieved with mechanical systems scoring 18/19 points"
    ],
    
    area: "92,000 sqm (Total Building Area)",
    client: "Confidential Client",
    tools: ["Revit MEP", "Navisworks", "HAP", "AutoCAD", "Dynamo BIM"],
    standards: ["ASHRAE 90.1", "ASHRAE 189.1", "Egypt Building Code", "SMACNA"],
    
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop",
        caption: "30-story commercial tower architectural view"
      },
      {
        src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=600&fit=crop",
        caption: "Mechanical floor ductwork coordination model"
      },
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
        caption: "MEP clash detection and resolution workflow"
      },
      {
        src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop",
        caption: "Final coordination model showing all systems integrated"
      }
    ]
  },
  
  {
    id: "4",
    slug: "residential-vrf-200-units",
    title: "Residential Complex VRF System",
    location: "Giza, Egypt",
    year: "2022-2023",
    buildingType: "Luxury Residential (200 Units)",
    role: "HVAC Designer & Energy Consultant",
    shortDescription: "VRF system design and implementation for a luxury residential complex with 200 units, including central ventilation and heat recovery systems.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=600&fit=crop",
    tags: ["Residential", "VRF", "Ventilation", "Heat Recovery"],
    icon: "Home",
    
    problem: [
      "Design for 200 residential units with varying occupancy patterns and individual temperature control requirements",
      "High ventilation load due to indoor air quality standards (ASHRAE 62.1) with significant energy cost",
      "Limited space for mechanical systems in residential corridors and roof",
      "Need for individual unit control with central humidity management",
      "Energy efficiency target: 20% below baseline consumption"
    ],
    
    solution: [
      "Implemented VRF system with individual indoor units per apartment for full control and comfort",
      "Designed central heat recovery ventilation (HRV) system to condition fresh air before distribution to units",
      "Installed dedicated outdoor air system (DOAS) sized for occupancy-based ventilation demand",
      "Specified high-efficiency VRF outdoor units (SEER 20+ equivalent) with cascade configuration for redundancy",
      "Integrated smart controls allowing residents to adjust temperature while system maintains ventilation rates"
    ],
    
    engineeringDecisions: [
      "VRF over traditional split units: Despite higher upfront cost, selected VRF for superior part-load efficiency and centralized maintenance",
      "HRV vs. ERV: Chose HRV (heat recovery only) appropriate for Egypt's climate vs. ERV",
      "Outdoor unit placement: Rooftop distributed units to minimize refrigerant line lengths and pressure drop (efficiency + cost savings)",
      "Ventilation control strategy: Occupancy sensors in high-use areas (lobbies, gyms) vs. continuous low ventilation in units",
      "Aesthetics: Slim ductwork hidden above false ceiling in corridors, minimal visible components to preserve apartment ceilings"
    ],
    
    impact: [
      "Achieved 24% annual energy reduction vs. baseline (exceeding 20% target)",
      "Resident comfort surveys averaged 8.9/10 for temperature control and air quality",
      "VRF system maintenance cost ~60% lower than traditional central systems over 5 years",
      "System noise levels <22 dB(A) in apartments (very quiet operation)",
      "ROI on VRF investment recovered through utility savings in ~6.5 years"
    ],
    
    area: "45,000 sqm (Total Built Area)",
    client: "Confidential Client",
    tools: ["Revit MEP", "HAP", "AutoCAD", "Dynamo BIM"],
    standards: ["ASHRAE 62.1", "ASHRAE 90.1", "Egypt Building Code"],
    
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=600&fit=crop",
        caption: "Luxury residential complex exterior"
      },
      {
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=600&fit=crop",
        caption: "Typical apartment unit with VRF indoor unit"
      },
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
        caption: "Central ventilation and HRV equipment room"
      },
      {
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop",
        caption: "Rooftop VRF outdoor units installation"
      }
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getProjectsByType = (buildingType: string): Project[] => {
  return projects.filter(p => p.buildingType.toLowerCase().includes(buildingType.toLowerCase()));
};
