export interface Project {
  id: string;
  title: string;
  brandName: string;
  tagline: string;
  industry: string;
  category: 'Healthcare' | 'Luxury & Hospitality' | 'E-Commerce' | 'Travel & Adventure' | 'Fitness & Wellness';
  url: string;
  thumbnail: string;
  badge: string;
  palette: { name: string; hex: string }[];
  typography: string[];
  designObjective: string;
  uxApproach: string;
  conversionStrategy: string;
  keyFeatures: string[];
  screens: { title: string; desc: string; image: string }[];
}

export const projectsData: Project[] = [
  {
    id: 'apex-fitness',
    title: 'IronForge - High-Performance Athletic Club',
    brandName: 'IronForge Club',
    tagline: 'Transforming members through athletic discipline, certified coaching, and world-class equipment.',
    industry: 'Fitness & Sports Wellness',
    category: 'Fitness & Wellness',
    url: 'https://apex-fitness-gateway.demowork963.workers.dev/',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    badge: 'High-Impact Dark Aesthetic',
    palette: [
      { name: 'Onyx Black', hex: '#0B0C10' },
      { name: 'Hyper Crimson', hex: '#E63946' },
      { name: 'Steel Gray', hex: '#1F242D' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    typography: ['Syne', 'Plus Jakarta Sans', 'Inter'],
    designObjective: 'Design an intense, energetic, and commanding digital presence for a premium athletic facility that separates it from standard impersonal gym chains.',
    uxApproach: 'Structured progressive overload tracks into interactive program cards (Weight Training, Hypertrophy, CrossFit, Mobility), paired with transparent membership tiering and clear 24/7 feature highlights.',
    conversionStrategy: 'Dual high-converting trial pathways ("Start Your Journey" and "Book Free Trial") anchored persistently in hero and program discovery zones.',
    keyFeatures: [
      'Interactive 10-track specialist training matrix',
      'Transparent 3-tier membership breakdown with instant checkout flow',
      'Coach credential verification & transformation gallery showcase',
      '24/7 facility highlight grid with high-contrast iconography'
    ],
    screens: [
      {
        title: 'Hero & Mission Statement',
        desc: 'Bold display typography paired with motion-driven callouts that immediately establish authority.',
        image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Programs & Training Tracks',
        desc: 'Modular grid breaking down progressive overload, hypertrophy, and functional movement.',
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Transformation & Membership Tiers',
        desc: 'Zero-friction pricing matrix with transparent perks and cancel-anytime commitments.',
        image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'dental-studio',
    title: 'Nivora Dental Studio - Modern Dentistry & Thoughtful Care',
    brandName: 'Nivora Dental Studio',
    tagline: 'Modern dentistry that puts patient comfort, clinical precision, and long-term oral health first.',
    industry: 'Healthcare & Specialized Dentistry',
    category: 'Healthcare',
    url: 'https://dental-web1.demowork963.workers.dev/',
    thumbnail: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    badge: 'Tranquil Healthcare UI',
    palette: [
      { name: 'Forest Teal', hex: '#1E584F' },
      { name: 'Warm Cream', hex: '#FBF9F5' },
      { name: 'Soft Sage', hex: '#D8E2DC' },
      { name: 'Dark Slate', hex: '#192823' }
    ],
    typography: ['Playfair Display', 'Plus Jakarta Sans'],
    designObjective: 'Replace traditional clinical anxiety with an atmosphere of gentle, reassuring calm through luxury editorial aesthetics and clear treatment transparency.',
    uxApproach: 'Gentle patient onboarding UX that emphasizes unhurried consultations, doctor qualifications (BDS, MDS), and step-by-step procedure transparency.',
    conversionStrategy: 'Low-friction appointment request buttons combined with direct one-tap WhatsApp triage for anxious patients.',
    keyFeatures: [
      'Comprehensive dental service breakdown with reassuring explanations',
      'Clinical doctor profile detailing 12+ years of Prosthodontics & Implant expertise',
      'Modern diagnostics and clinic hygiene trust indicators',
      'Soft-tone appointment booking form with instant slot confirmation'
    ],
    screens: [
      {
        title: 'Sanctuary Hero Concept',
        desc: 'Serene warm cream background with refined serif headings to diffuse medical tension.',
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Patient-First Care Principles',
        desc: 'Visual proof of sterilization standards, comfortable seating, and clear diagnosis communication.',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'lan-commerce',
    title: 'LUXE Atelier - Editorial Luxury Fashion & Essentials',
    brandName: 'LUXE Atelier',
    tagline: 'A modern atelier of considered essentials, crafted in limited runs from fine natural fibres.',
    industry: 'High-End E-Commerce & Fashion',
    category: 'E-Commerce',
    url: 'https://lan-commerce.demowork963.workers.dev/',
    thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    badge: 'Editorial E-Commerce',
    palette: [
      { name: 'Deep Carbon', hex: '#111111' },
      { name: 'Champagne Gold', hex: '#D4AF37' },
      { name: 'Linen White', hex: '#FAFAFA' },
      { name: 'Neutral Stone', hex: '#E5E5E5' }
    ],
    typography: ['Playfair Display', 'Inter'],
    designObjective: 'Create a high-fashion digital storefront that feels like flipping through a collectible print lookbook, conveying tactile luxury and exclusivity.',
    uxApproach: 'Micro-animated announcement tickers, full-bleed seasonal editorial banners, categorized product discovery tiles with smooth zoom interactions, and sticky mobile navigation.',
    conversionStrategy: 'Immediate collection entry points ("Shop the Winter Edit"), value-reinforcing micro-perks (30-day returns, signature packaging), and streamlined cart triggers.',
    keyFeatures: [
      'Live animated announcement banner with fluid marquee typography',
      'Tactile category image grid (Cashmere, Overcoats, Tailored Denim, Silk)',
      'Lookbook carousel integration and verified buyer social proof cards',
      'Exclusive newsletter access gate ("The List") for limited private drops'
    ],
    screens: [
      {
        title: 'Winter Edit Editorial Hero',
        desc: 'High-fashion visual dominance with custom serif italic accents and quick shop triggers.',
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Category Visual Matrix',
        desc: 'Square tiles with illuminated overlays and refined hover transforms.',
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'goa-wellness',
    title: 'Sereno Wellness Spa - Candolim Luxury Sanctuary',
    brandName: 'Sereno Wellness Spa',
    tagline: 'Professional massage and wellness therapies designed for deep relaxation, recovery, and renewal.',
    industry: 'Hospitality & Holistic Wellness',
    category: 'Luxury & Hospitality',
    url: 'https://goawellness-zenflow.demowork963.workers.dev/',
    thumbnail: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    badge: 'Tactile Spa Experience',
    palette: [
      { name: 'Tropical Teak', hex: '#23302B' },
      { name: 'Warm Gold', hex: '#C5A880' },
      { name: 'Botanical Sage', hex: '#3B4D45' },
      { name: 'Soft Sand', hex: '#F6F4EE' }
    ],
    typography: ['Playfair Display', 'Manrope'],
    designObjective: 'Capture the tranquil ambiance of a Goan tropical wellness haven, turning digital visitors into booked spa guests.',
    uxApproach: 'Categorized treatment filter tabs (Relaxation, Therapeutic, Aromatherapy, Body Rituals, Couples) with instant expandable benefit bullets and pricing clarity.',
    conversionStrategy: 'Direct one-touch WhatsApp booking with pre-filled treatment and time preference parameters.',
    keyFeatures: [
      'Filterable treatment catalogue with transparent pricing and duration tags',
      'Expandable treatment benefit drawers with zero page reload friction',
      'Sanctuary trust strip: private rooms, fresh linen, certified women therapists',
      'Interactive FAQ accordion answering first-timer booking questions'
    ],
    screens: [
      {
        title: 'Linen-Dressed Treatment Sanctuary',
        desc: 'Atmospheric hero with subtle tropical mist gradient and gold typography highlights.',
        image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Categorized Treatment System',
        desc: 'Card-based treatments with accordion details and instant booking CTAs.',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'smile-care',
    title: 'Poplar Dental Studio - Patient-Centred Dental Practice',
    brandName: 'Poplar Dental Studio',
    tagline: 'Modern, patient-first dental care combining clinical expertise, cutting-edge tools, and thoughtful comfort.',
    industry: 'Healthcare & Family Dentistry',
    category: 'Healthcare',
    url: 'https://smile-care.demowork963.workers.dev/',
    thumbnail: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop',
    badge: 'Precision Healthcare UX',
    palette: [
      { name: 'Spruce Green', hex: '#123B3A' },
      { name: 'Warm Amber', hex: '#DDA15E' },
      { name: 'Ivory Base', hex: '#F9F8F6' },
      { name: 'Charcoal Ink', hex: '#1F2937' }
    ],
    typography: ['DM Serif Display', 'Plus Jakarta Sans'],
    designObjective: 'Establish instant trust for families and busy urban professionals seeking reliable, transparent dental treatments.',
    uxApproach: 'Step-by-step 4-stage treatment roadmap (Consultation → Diagnosis → Plan → Ongoing Care) so patients know exactly what to expect before visiting.',
    conversionStrategy: 'Strategically positioned consultation buttons backed by deep-dive service pathways across 11 key dental specialties.',
    keyFeatures: [
      'Interactive 11-service clinic grid with arrow-hover visual feedback',
      'Step-by-step visual treatment journey timeline with connected markers',
      'Dedicated Dental Implants spotlight feature with clear anatomical breakdown',
      'Doctor credentials spotlight highlighting Dr. Arjun Rao (12+ years experience)'
    ],
    screens: [
      {
        title: 'Warm Consultation Hero',
        desc: 'Reassuring imagery of doctor-patient dialogue backed by rating badges.',
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Four-Stage Treatment Journey',
        desc: 'Horizontal numbered timeline removing fear of unexpected clinical steps.',
        image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'mangrove-udupi',
    title: 'Mangrove Kayaking Point - Sunrise Backwater Expedition',
    brandName: 'Mangrove Kayaking Udupi',
    tagline: 'Paddle hidden mangrove root tunnels and mirror-still backwaters at sunrise on the Karnataka coast.',
    industry: 'Eco-Tourism & Adventure Travel',
    category: 'Travel & Adventure',
    url: 'https://mangrove-udupi.demowork963.workers.dev/',
    thumbnail: '/images/mangrove-kayak.jpg',
    badge: 'Cinematic Storytelling',
    palette: [
      { name: 'Estuary Charcoal', hex: '#161B1D' },
      { name: 'Sunrise Amber', hex: '#E09F3E' },
      { name: 'Mangrove Green', hex: '#2A4736' },
      { name: 'Mist White', hex: '#F0F4F8' }
    ],
    typography: ['Cormorant Garamond', 'Manrope'],
    designObjective: 'Deliver an immersive, sensory-rich digital narrative that conveys the peace and pristine natural beauty of paddling at dawn.',
    uxApproach: 'A 7-stage chronological expedition storyline (Arrival → Briefing → Life Jackets → Training → The Trail → Photography → The Return) illustrated with authentic photography.',
    conversionStrategy: 'Urgent early-morning booking callout ("Book Your Adventure") with floating particle aesthetics and live river statistics.',
    keyFeatures: [
      'Atmospheric hero with floating light particle drift animation and water ripple gradient',
      '7-step interactive expedition walkthrough with alternating photographic layouts',
      '10-point "Why Visit Us" bento grid detailing safety for beginners and zero-plastic policies',
      'Bento gallery with hover reveal captions and high-resolution expander triggers'
    ],
    screens: [
      {
        title: 'Sunrise Channel Hero',
        desc: 'Golden-hour mist overlay with unhurried typography and gentle scroll pulses.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: '7-Step Expedition Narrative',
        desc: 'Alternating image-text storytelling guiding paddlers through every moment of the morning.',
        image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'aura-digital',
    title: 'Maison Serène - Luxury Spa & Wellness Rituals',
    brandName: 'Maison Serène',
    tagline: 'Personalised spa rituals and quiet luxury in Bandra West, tended by master therapists.',
    industry: 'Luxury Wellness & Personal Care',
    category: 'Luxury & Hospitality',
    url: 'https://aura-digital-serenity.demowork963.workers.dev/',
    thumbnail: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
    badge: 'Quiet Luxury Aesthetics',
    palette: [
      { name: 'Rich Espresso', hex: '#1C1917' },
      { name: 'Oatmeal Taupe', hex: '#D6CCC2' },
      { name: 'Subtle Gold', hex: '#C6A875' },
      { name: 'Warm Alabaster', hex: '#FAFAF9' }
    ],
    typography: ['Playfair Display', 'Plus Jakarta Sans'],
    designObjective: 'Position a boutique urban spa as an oasis of refined stillness, appealing to discerning clients looking for restorative bespoke treatments.',
    uxApproach: 'Conversational ritual selector with detailed descriptions of bespoke essential oil choices, Himalayan salt polishes, and hot basalt treatments.',
    conversionStrategy: 'Direct WhatsApp booking with automatic treatment pre-population for frictionless scheduling.',
    keyFeatures: [
      'Bespoke ritual catalogue spanning Swedish Massage, Hot Stone, and Golden Body Polish',
      'Conversation-first intake philosophy removing standardized spa rigidity',
      'Signature membership packages and verified client reviews',
      'Tactile imagery focusing on warm natural materials and private suites'
    ],
    screens: [
      {
        title: 'Stillness Hero Interface',
        desc: 'Minimalist brand typography over tranquil treatment suite environments.',
        image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Handcrafted Ritual Selection',
        desc: 'Detailed treatment cards with one-tap WhatsApp concierge integration.',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'luxe-spaces',
    title: 'Maison Atelier - Interior Design & Architecture Studio',
    brandName: 'Maison Atelier',
    tagline: 'Designing spaces that inspire life. Award-winning residential and commercial architecture.',
    industry: 'Architecture & High-End Interiors',
    category: 'Luxury & Hospitality',
    url: 'https://luxe-spaces-studio.demowork963.workers.dev/',
    thumbnail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    badge: 'Interactive Before/After UX',
    palette: [
      { name: 'Obsidian Black', hex: '#0A0A0A' },
      { name: 'Warm Terracotta Accent', hex: '#C2714F' },
      { name: 'Raw Limestone', hex: '#ECE8E1' },
      { name: 'Muted Bronze', hex: '#8C8275' }
    ],
    typography: ['Playfair Display', 'Inter'],
    designObjective: 'Reflect the architectural discipline, spatial balance, and material richness of an international design practice based in NY, Paris, and Milan.',
    uxApproach: 'Interactive before/after drag comparison slider demonstrating renovation mastery, supported by a 6-stage project execution timeline.',
    conversionStrategy: 'Exclusive consultation booking CTAs with project scale selector (Residential, Commercial, Turnkey).',
    keyFeatures: [
      'Interactive Before/After renovation visual slider with draggable touch handle',
      '6-stage architectural process timeline from initial consultation to final handover styling',
      'Curated project archive featuring Sonoma Villas, New York lofts, and Lyon hotels',
      'Prestige awards showcase honoring AD100, Elle Decor, and Dezeen recognition'
    ],
    screens: [
      {
        title: 'Architectural Headline Hero',
        desc: 'Massive display typography with italic accent emphasis and project metrics.',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Interactive Renovation Slider',
        desc: 'Split-screen real-time comparison tool allowing clients to inspect transformation craftsmanship.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'wonderlux-travels',
    title: 'Wanderlux Travels - Luxury Tour Packages & Custom Itineraries',
    brandName: 'Wanderlux Travels',
    tagline: 'Crafting extraordinary journeys worldwide with handpicked luxury stays, private guides, and zero hassle.',
    industry: 'Luxury Travel & Itinerary Design',
    category: 'Travel & Adventure',
    url: 'https://wonderluxtravels.demowork963.workers.dev/',
    thumbnail: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1200&auto=format&fit=crop',
    badge: 'High-Converting Travel Hub',
    palette: [
      { name: 'Midnight Navy', hex: '#0B2447' },
      { name: 'Imperial Gold', hex: '#E5A93C' },
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Warm Sand', hex: '#F7F5F0' }
    ],
    typography: ['Fraunces', 'Inter'],
    designObjective: 'Turn bucket-list dreamers into paying travelers through inspirational photography, transparent package pricing, and quick custom quotes.',
    uxApproach: 'Multi-category package explorer with duration badges (5D/4N), curated activity bullet points, and free 14-day cancellation trust badges.',
    conversionStrategy: '2-hour turnaround custom quote promise paired with direct WhatsApp chat and instant package checkout modals.',
    keyFeatures: [
      'Curated destination showcase covering Dubai, Bali, Maldives, Kashmir, and Singapore',
      'All-inclusive signature package cards with per-person transparent rates',
      '6 core travel promises with best-price guarantee and 24/7 concierge support',
      'Verified traveler review cards with 4.9/5 satisfaction metrics'
    ],
    screens: [
      {
        title: 'Overwater Bungalow Hero',
        desc: 'Ken Burns animated hero imagery with social trust badges and instant WhatsApp CTA.',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Signature Package Cards',
        desc: 'All-inclusive packages with duration callouts, perk lists, and booking modals.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'grand-journey',
    title: 'Wanderlust Voyages - Tours, Taxi & Luxury Fleet Rentals',
    brandName: 'Wanderlust Voyages',
    tagline: 'Domestic and international tours, tempo travellers, and tourist coach rentals under one trusted roof.',
    industry: 'Tourism & Specialized Fleet Logistics',
    category: 'Travel & Adventure',
    url: 'https://grand-journey-quest.demowork963.workers.dev/',
    thumbnail: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop',
    badge: 'Multi-Service Logistics UX',
    palette: [
      { name: 'Deep Ocean Blue', hex: '#0F2A3F' },
      { name: 'Sunlit Gold', hex: '#D4A373' },
      { name: 'Warm Ivory', hex: '#FAEDCD' },
      { name: 'Slate Gray', hex: '#334155' }
    ],
    typography: ['Instrument Serif', 'Inter'],
    designObjective: 'Consolidate diverse travel offerings (custom holiday itineraries, corporate group charters, pilgrimage tours, and taxi fleets) into one cohesive, premium interface.',
    uxApproach: 'Domestic vs. International toggle with destination category pills (Honeymoon, Family, Group, Corporate, Pilgrimage) and instant itinerary downloads.',
    conversionStrategy: 'Multi-action buttons on each package card allowing visitors to either view the full itinerary or initiate a dedicated WhatsApp enquiry with pre-filled package IDs.',
    keyFeatures: [
      'Domestic vs International segmented destination filter with live pricing badges',
      'Comprehensive itinerary breakdowns with included stays, meals, and sightseeing perks',
      'Fleet logistics booking for taxis, tempo travellers, and luxury tourist buses',
      '24/7 dedicated travel desk WhatsApp integration'
    ],
    screens: [
      {
        title: 'Ocean Horizon Hero',
        desc: 'Classic serif typography combined with verified driver and hotel credential badges.',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Multi-Filter Package Grid',
        desc: 'Comprehensive package cards with day/night duration, price badges, and WhatsApp triggers.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  }
];

export const servicesData = [
  {
    num: '01',
    title: 'Bespoke Website Design',
    subtitle: 'Brand-Aligned Digital Flagships',
    desc: 'Custom, high-conversion websites designed from the ground up to communicate prestige, establish market authority, and turn casual visitors into committed clients.',
    deliverables: ['Custom Visual Identity & Layouts', 'Responsive Mobile-First Architecture', 'Interactive Prototypes', 'Asset Optimization'],
    timeline: '2-3 Weeks'
  },
  {
    num: '02',
    title: 'Conversion-Focused UI/UX',
    subtitle: 'Frictionless User Pathways',
    desc: 'Deep information architecture, intentional visual hierarchy, and strategic user journeys engineered to eliminate cognitive friction and maximize conversion rates.',
    deliverables: ['User Flow & Wireframing', 'Friction Audit & CRO Strategy', 'Checkout / Booking Funnels', 'Design Systems & UI Kits'],
    timeline: '1-2 Weeks'
  },
  {
    num: '03',
    title: 'High-Impact Landing Pages',
    subtitle: 'High-Conversion Launchpads',
    desc: 'Targeted, laser-focused landing pages crafted for product launches, ad campaigns, and lead generation with persuasive messaging and clear calls to action.',
    deliverables: ['Hero Conversion Architecture', 'Persuasive Copy Layout', 'Speed & Performance Optimization', 'A/B Testing Framework'],
    timeline: '5-7 Days'
  },
  {
    num: '04',
    title: 'Modern Frontend Development',
    subtitle: 'Clean, Fast, Responsive Code',
    desc: 'Pixel-perfect, lightweight, and modern frontend implementations using React, TypeScript, Tailwind CSS, and clean semantic HTML for fast load speeds.',
    deliverables: ['Clean Semantic Codebase', 'Zero Cumulative Layout Shifts', 'Cross-Browser & Mobile QA', 'SEO & OpenGraph Integration'],
    timeline: '2-3 Weeks'
  },
  {
    num: '05',
    title: 'Motion & Micro-Interactions',
    subtitle: 'Cinematic Physics with Framer Motion',
    desc: 'Purposeful micro-interactions, scroll-linked animations, and fluid gestures that elevate your brand perception from average to extraordinary.',
    deliverables: ['Scroll-Triggered Reveals', 'Parallax Depth Systems', 'Magnetic Cursor Interactions', 'Accessible Reduced-Motion Modes'],
    timeline: '1 Week'
  },
  {
    num: '06',
    title: 'Strategic Website Redesign',
    subtitle: 'Elevating Legacy Platforms',
    desc: 'Transform outdated, sluggish, or poor-converting legacy websites into cutting-edge, mobile-optimized digital flagships that command premium pricing.',
    deliverables: ['Legacy Architecture Audit', 'Modern Brand Refresh', 'Content & SEO Preservation', 'Zero-Downtime Launch Plan'],
    timeline: '3-4 Weeks'
  }
];

export const processStages = [
  {
    step: '01',
    title: 'Discover & Align',
    desc: 'We unpack your business goals, target client psychology, competitive positioning, and the primary conversion outcome needed from the site.'
  },
  {
    step: '02',
    title: 'Architecture & Journey',
    desc: 'We map the user journey, structure the information architecture, and wireframe frictionless paths that lead directly to bookings or inquiries.'
  },
  {
    step: '03',
    title: 'High-Fidelity Design',
    desc: 'We create the visual language - typography, luxury neutral palette, tactile spacing, and editorial compositions tailored to your niche.'
  },
  {
    step: '04',
    title: 'Engineering & Build',
    desc: 'We transform approved designs into high-performance, accessible, and responsive code built with modern React, Tailwind, and clean structure.'
  },
  {
    step: '05',
    title: 'Motion & Interaction Polish',
    desc: 'We choreograph Framer Motion physics, cursor interactions, micro-feedback, and subtle depth to give the interface a tactile, high-end feel.'
  },
  {
    step: '06',
    title: 'Optimization & Handoff',
    desc: 'We audit lighthouse performance, configure SEO metadata, test across 10+ viewport sizes, and launch your polished digital flagship.'
  }
];

export const philosophyPillars = [
  {
    num: '01',
    title: 'Designed Around the User',
    desc: 'Every layout decision, button position, and font size exists to make browsing intuitive, effortless, and pleasurable.'
  },
  {
    num: '02',
    title: 'Built Around the Business',
    desc: 'Aesthetics without conversion is vanity. We design clear value propositions and low-friction funnels that turn visitors into clients.'
  },
  {
    num: '03',
    title: 'Crafted Down to the Pixel',
    desc: 'Micro-spacing, typographic rhythm, and optical balance are refined obsessively to convey undeniable digital craftsmanship.'
  },
  {
    num: '04',
    title: 'Animated With Purpose',
    desc: 'Animations guide human attention, provide tactile feedback, and create brand memory - never slowing down or distracting from content.'
  }
];
