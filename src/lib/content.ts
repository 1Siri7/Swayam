export type Service = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    id: 'kitchen',
    title: 'Modular Kitchen',
    tagline: 'Where function meets finesse',
    description:
      'Precision-engineered cabinets, soft-close hardware, and intelligent layouts that make every meal a pleasure to prepare.',
    image: '/images/kitchen/IMG-20260608-WA0012.jpg',
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    tagline: 'Your private retreat',
    description:
      'Wardrobes, headboards, and ambient lighting composed into a restful sanctuary tailored to your evenings.',
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'living',
    title: 'Living Room',
    tagline: 'The heart of your home',
    description:
      'A statement space designed for gathering — balancing scale, texture, and light for effortless everyday luxury.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'office',
    title: 'Office',
    tagline: 'Productivity, refined',
    description:
      'Ergonomic workspaces with integrated storage, acoustic comfort, and lighting tuned for focus.',
    image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    tagline: 'Spaces that mean business',
    description:
      'Retail, hospitality, and corporate interiors engineered to impress clients and elevate your brand.',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'wardrobes',
    title: 'Wardrobes & Storage',
    tagline: 'Order, beautifully kept',
    description:
      'Made-to-measure wardrobes with bespoke internal configurations — every shoe, scarf, and suit in its place.',
    image: '/images/dining/IMG-20260608-WA0028.jpg',
  },
];

export type ProjectCategory = 'Kitchen' | 'Bedroom' | 'Living' | 'Office' | 'Commercial';

export type Project = {
  id: string;
  title: string;
  location: string;
  category: ProjectCategory;
  image: string;
  span?: 'wide' | 'tall';
};

export const projects: Project[] = [
  // ── Kitchen — client images only ──
  {
    id: 'p-k1',
    title: "Chef's Modular Kitchen",
    location: 'Kawadiguda, Hyderabad',
    category: 'Kitchen',
    image: '/images/kitchen/IMG-20260608-WA0012.jpg',
    span: 'wide',
  },
  {
    id: 'p-k2',
    title: 'Warm Tone Kitchen',
    location: 'Kawadiguda, Hyderabad',
    category: 'Kitchen',
    image: '/images/kitchen/WhatsApp_Image_2026-07-25_at_12.25.32_AM.jpeg',
  },
  // ── Living / Dining — client images only ──
  {
    id: 'p-l1',
    title: 'Ambient Dining Space',
    location: 'Kawadiguda, Hyderabad',
    category: 'Living',
    image: '/images/dining/IMG-20260608-WA0028.jpg',
    span: 'tall',
  },
  {
    id: 'p-l2',
    title: 'Elegant Dining Room',
    location: 'Kawadiguda, Hyderabad',
    category: 'Living',
    image: '/images/dining/IMG-20260608-WA0044.jpg',
  },
  // ── Bedroom — pexels (no client images yet) ──
  {
    id: 'p-b1',
    title: 'Serene Primary Suite',
    location: 'Hyderabad',
    category: 'Bedroom',
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'p-b2',
    title: 'Luxury Master Bedroom',
    location: 'Hyderabad',
    category: 'Bedroom',
    image: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  // ── Office ──
  {
    id: 'p-o1',
    title: 'Executive Workspace',
    location: 'Hitech City, Hyderabad',
    category: 'Office',
    image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'wide',
  },
  // ── Commercial ──
  {
    id: 'p-c1',
    title: 'Boutique Retail Lounge',
    location: 'Banjara Hills, Hyderabad',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export type Material = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
};

export const materials: Material[] = [
  {
    id: 'walnut',
    name: 'Walnut Veneer',
    category: 'Wood',
    description: 'Rich, dark-grain veneer with a satin finish — warmth and depth for statement pieces.',
    image: 'https://images.pexels.com/photos/279607/pexels-photo-279607.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'carrara',
    name: 'Carrara Marble',
    category: 'Stone',
    description: 'Italian white marble with soft grey veining — timeless elegance for countertops and cladding.',
    image: 'https://images.pexels.com/photos/3707669/pexels-photo-3707669.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'oak',
    name: 'Oak Laminate',
    category: 'Laminate',
    description: 'Durable laminate with natural oak grain — a practical finish that holds its colour for years.',
    image: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'gold-metal',
    name: 'Brushed Gold',
    category: 'Metal',
    description: 'Warm brushed-gold metal accents for trims, handles, and profiles — a quiet touch of luxury.',
    image: 'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'stone-grey',
    name: 'Stone Grey',
    category: 'Stone',
    description: 'A cool, mineral finish with subtle texture — grounding and contemporary for feature walls.',
    image: 'https://images.pexels.com/photos/3707669/pexels-photo-3707669.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'teak',
    name: 'Teak Hardwood',
    category: 'Wood',
    description: 'Golden-brown hardwood with tight grain — the classic choice for built-ins and panelling.',
    image: 'https://images.pexels.com/photos/279607/pexels-photo-279607.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'quartz',
    name: 'White Quartz',
    category: 'Stone',
    description: 'Non-porous, stain-resistant engineered stone — pristine surfaces that stay pristine.',
    image: 'https://images.pexels.com/photos/3707669/pexels-photo-3707669.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'bronze-glass',
    name: 'Bronze Glass',
    category: 'Glass',
    description: 'Tinted reflective glass for wardrobe shutters and partitions — depth with a hint of drama.',
    image: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export type DesignStyle = {
  id: string;
  name: string;
  description: string;
  accent: string;
  filter: string;
  overlay: string;
  features: string[];
};

export const designStyles: DesignStyle[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean lines, open layouts, and a refined material palette.',
    accent: '#5272a0',
    filter: 'saturate(1.05) contrast(1.06) brightness(1.03)',
    overlay: 'linear-gradient(135deg, rgba(82,114,160,0.2), rgba(15,31,51,0.1))',
    features: ['Sleek finishes', 'Open-plan layout', 'Minimal hardware', 'Neutral palette'],
  },
  {
    id: 'luxury',
    name: 'Luxury',
    description: 'Rich materials, gold accents, and statement lighting.',
    accent: '#d4a73c',
    filter: 'sepia(0.3) saturate(1.3) brightness(1.04) contrast(1.05)',
    overlay: 'linear-gradient(135deg, rgba(212,167,60,0.22), rgba(46,40,32,0.12))',
    features: ['Marble & brass', 'Statement lighting', 'Custom joinery', 'Layered textures'],
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Less is more — pure forms and intentional emptiness.',
    accent: '#aebfd9',
    filter: 'saturate(0.85) brightness(1.08) contrast(0.97)',
    overlay: 'linear-gradient(135deg, rgba(174,191,217,0.18), rgba(180,190,200,0.08))',
    features: ['Hidden storage', 'Monochrome tones', 'Negative space', 'Flush surfaces'],
  },
  {
    id: 'traditional',
    name: 'Traditional',
    description: 'Timeless craftsmanship, warm woods, and classic detailing.',
    accent: '#a37422',
    filter: 'sepia(0.4) saturate(1.2) brightness(0.98) contrast(1.03)',
    overlay: 'linear-gradient(135deg, rgba(163,116,34,0.24), rgba(94,66,30,0.14))',
    features: ['Carved woodwork', 'Rich textiles', 'Warm tones', 'Classic motifs'],
  },
  {
    id: 'scandinavian',
    name: 'Scandinavian',
    description: 'Light woods, soft textiles, and bright airy spaces.',
    accent: '#c9bda3',
    filter: 'saturate(0.9) brightness(1.1) contrast(0.98) hue-rotate(-4deg)',
    overlay: 'linear-gradient(135deg, rgba(245,238,207,0.2), rgba(201,189,163,0.1))',
    features: ['Light oak', 'Soft textiles', 'Natural light', 'Functional form'],
  },
  {
    id: 'industrial',
    name: 'Industrial',
    description: 'Raw concrete, blackened steel, and exposed structure.',
    accent: '#5b5042',
    filter: 'saturate(0.75) brightness(0.9) contrast(1.2)',
    overlay: 'linear-gradient(135deg, rgba(70,61,51,0.26), rgba(28,24,19,0.16))',
    features: ['Exposed surfaces', 'Blackened steel', 'Concrete textures', 'Edison lighting'],
  },
  {
    id: 'contemporary',
    name: 'Contemporary',
    description: 'Of-the-moment design with bold, curated contrast.',
    accent: '#365a87',
    filter: 'saturate(1.1) contrast(1.08) brightness(1.02)',
    overlay: 'linear-gradient(135deg, rgba(54,90,135,0.2), rgba(42,70,108,0.1))',
    features: ['Bold contrasts', 'Mixed materials', 'Curved forms', 'Statement art'],
  },
  {
    id: 'bohemian',
    name: 'Bohemian',
    description: 'Eclectic layers, natural textures, and global patterns.',
    accent: '#a87154',
    filter: 'sepia(0.25) saturate(1.25) brightness(1.0) contrast(1.04) hue-rotate(6deg)',
    overlay: 'linear-gradient(135deg, rgba(168,113,84,0.22), rgba(112,71,54,0.12))',
    features: ['Woven textures', 'Global patterns', 'Layered rugs', 'Indoor greenery'],
  },
];

export type WhyChoose = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const whyChoose: WhyChoose[] = [
  {
    id: 'premium-materials',
    title: 'Premium Materials',
    description: 'Only vetted brands — Hettich, Hafele, Crompton, and more.',
    icon: 'Gem',
  },
  {
    id: 'expert-designers',
    title: 'Expert Designers',
    description: 'A senior designer leads every project from concept to handover.',
    icon: 'PenTool',
  },
  {
    id: 'on-time',
    title: 'On-Time Delivery',
    description: 'A fixed-day timeline you receive before work begins.',
    icon: 'Clock',
  },
  {
    id: 'transparent-pricing',
    title: 'Transparent Pricing',
    description: 'Itemised quotes with no hidden costs — what you see is what you pay.',
    icon: 'ReceiptText',
  },
  {
    id: 'personalized',
    title: 'Personalized Designs',
    description: 'Every home is unique. Your design is built around your life.',
    icon: 'Heart',
  },
  {
    id: '3d-viz',
    title: '3D Visualization',
    description: 'Walk through your home in 3D before a single nail is driven.',
    icon: 'Box',
  },
  {
    id: 'after-sales',
    title: 'After-Sales Support',
    description: 'Service and maintenance long after the keys are handed over.',
    icon: 'Headphones',
  },
  {
    id: 'lifetime',
    title: 'Lifetime Design Assistance',
    description: 'We stay with you for every future refresh and renovation.',
    icon: 'Infinity',
  },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  project: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Aarav & Meera Reddy',
    role: '3BHK Homeowner',
    location: 'Jubilee Hills',
    rating: 5,
    quote:
      'Swayam transformed our apartment beyond what we imagined. The 3D walkthrough let us see everything before they started. Flawless finish and delivered a week early.',
    project: 'Full Home · ₹18L',
  },
  {
    id: 't2',
    name: 'Karthik Varma',
    role: 'Villa Owner',
    location: 'Banjara Hills',
    rating: 5,
    quote:
      'The team understood luxury. Brushed gold accents, marble cladding, and joinery that feels like it will last forever. Worth every rupee.',
    project: 'Villa · ₹35L',
  },
  {
    id: 't3',
    name: 'Sneha Iyer',
    role: 'Apartment Owner',
    location: 'Gachibowli',
    rating: 5,
    quote:
      'As a working professional I valued the transparency. Itemised quote, fixed timeline, daily updates. The modular kitchen is a dream to cook in.',
    project: 'Kitchen + Living · ₹7L',
  },
  {
    id: 't4',
    name: 'Rajesh Naidu',
    role: 'Commercial Client',
    location: 'Hitech City',
    rating: 5,
    quote:
      'Our office now reflects the brand perfectly. Clients comment on it in every meeting. Swayam handled everything with minimal disruption.',
    project: 'Office · ₹22L',
  },
  {
    id: 't5',
    name: 'Priya Sharma',
    role: '2BHK Homeowner',
    location: 'Kondapur',
    rating: 5,
    quote:
      'I was nervous about the budget, but the planner helped me pick the right package. No surprises, beautiful result. Already recommended them to two friends.',
    project: 'Full Home · ₹9L',
  },
];

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: 'f1',
    question: 'How long does a typical project take?',
    answer:
      'A single room takes 3–6 weeks, while a full home typically takes 8–14 weeks depending on scope. You receive a fixed-day delivery timeline before work begins, and we share daily progress updates throughout.',
  },
  {
    id: 'f2',
    question: 'Do you provide a 3D design before starting?',
    answer:
      'Yes. Every project includes detailed 3D visualisations and a walkthrough so you can experience your space, approve materials, and request changes before any fabrication begins.',
  },
  {
    id: 'f3',
    question: 'What is the warranty on your work?',
    answer:
      'We offer a 5-year warranty on all joinery, hardware, and finishes, plus lifetime design assistance for future updates and renovations.',
  },
  {
    id: 'f4',
    question: 'Can I see an itemised quote with no hidden costs?',
    answer:
      'Absolutely. Our quotes are fully itemised — materials, labour, hardware, and finishes listed line by line. What you approve is exactly what you pay. No hidden charges, ever.',
  },
  {
    id: 'f5',
    question: 'Do you work with my existing furniture?',
    answer:
      'Yes. We assess your existing pieces and integrate them into the new design where they fit. We can also recommend refinishing or reupholstering to bring older pieces back to life.',
  },
  {
    id: 'f6',
    question: 'What areas do you serve?',
    answer:
      'We are based in Hyderabad and serve the entire city and surrounding areas — Jubilee Hills, Banjara Hills, Gachibowli, Kondapur, Madhapur, Hitech City, Kukatpally, and beyond. For larger projects we travel further on request.',
  },
];

export type DesignPackage = {
  room: string;
  budget: string;
  name: string;
  features: string[];
  materials: string[];
  timeline: string;
};

export const packageMatrix: Record<string, Record<string, DesignPackage>> = {
  Kitchen: {
    '2-5': {
      room: 'Kitchen',
      budget: '₹2–5 Lakhs',
      name: 'Essential Modular Kitchen',
      features: [
        'L-shaped modular layout',
        'Hettich soft-close hinges',
        'Acrylic laminate shutters',
        'Stainless steel baskets',
        'Under-cabinet LED',
      ],
      materials: ['Oak laminate', 'Granite countertop', 'PVC skirting'],
      timeline: '3–4 weeks',
    },
    '5-10': {
      room: 'Kitchen',
      budget: '₹5–10 Lakhs',
      name: 'Premium Modular Kitchen',
      features: [
        'U-shaped or island layout',
        'Hafele premium hardware',
        'PU-finished shutters',
        'Quartz countertop',
        'Built-in appliance integration',
        'Profile lighting + chimney fascia',
      ],
      materials: ['PU acrylic finish', 'Quartz countertop', 'Glass display unit'],
      timeline: '5–7 weeks',
    },
    '10-20': {
      room: 'Kitchen',
      budget: '₹10–20 Lakhs',
      name: 'Luxury Designer Kitchen',
      features: [
        'Custom island with seating',
        'Hafele / Blum full-access hardware',
        'Veneer + glass combo shutters',
        'Imported marble countertop',
        'Wine unit & appliance garage',
        'Smart lighting scenes',
      ],
      materials: ['Walnut veneer', 'Carrara marble', 'Bronze glass', 'Brushed gold trims'],
      timeline: '7–10 weeks',
    },
    '20+': {
      room: 'Kitchen',
      budget: '₹20 Lakhs+',
      name: 'Bespoke Signature Kitchen',
      features: [
        'Bespoke layout & joinery',
        'Imported hardware throughout',
        'Stone + metal + veneer composition',
        'Integrated smart appliances',
        'Walk-in pantry & wet/dry separation',
        'Fully automated lighting & blinds',
      ],
      materials: ['Book-matched marble', 'Premium veneers', 'Bronze & gold trims', 'Smart glass'],
      timeline: '10–14 weeks',
    },
  },
  Bedroom: {
    '2-5': {
      room: 'Bedroom',
      budget: '₹2–5 Lakhs',
      name: 'Essential Bedroom',
      features: [
        'Sliding wardrobe 6ft',
        'Laminate finishes',
        'Bedside panelling',
        'Basic lighting layout',
      ],
      materials: ['Oak laminate', 'MDF panelling', 'Fabric headboard'],
      timeline: '2–3 weeks',
    },
    '5-10': {
      room: 'Bedroom',
      budget: '₹5–10 Lakhs',
      name: 'Premium Bedroom',
      features: [
        'Walk-in or L-wardrobe',
        'Veneer feature wall',
        'Upholstered headboard',
        'Layered ambient lighting',
        'Vanity unit',
      ],
      materials: ['Teak veneer', 'Fabric panelling', 'Quartz vanity'],
      timeline: '4–6 weeks',
    },
    '10-20': {
      room: 'Bedroom',
      budget: '₹10–20 Lakhs',
      name: 'Luxury Master Suite',
      features: [
        'Custom walk-in wardrobe',
        'Full-wall veneer panelling',
        'Designer lighting coves',
        'Marble-clad ensuite',
        'Smart curtains & climate',
      ],
      materials: ['Walnut veneer', 'Carrara marble', 'Bronze glass', 'Brushed gold'],
      timeline: '6–9 weeks',
    },
    '20+': {
      room: 'Bedroom',
      budget: '₹20 Lakhs+',
      name: 'Bespoke Penthouse Suite',
      features: [
        'Bespoke dressing room',
        'Imported stone & veneer',
        'Automated lighting scenes',
        'Private lounge corner',
        'Smart climate, blinds & audio',
      ],
      materials: ['Book-matched marble', 'Premium veneers', 'Smart glass', 'Gold detailing'],
      timeline: '9–14 weeks',
    },
  },
  'Living Room': {
    '2-5': {
      room: 'Living Room',
      budget: '₹2–5 Lakhs',
      name: 'Essential Living',
      features: ['TV unit with storage', 'Sofa styling', 'Basic lighting', 'Decor console'],
      materials: ['Laminate TV unit', 'Painted walls', 'MDF console'],
      timeline: '2–3 weeks',
    },
    '5-10': {
      room: 'Living Room',
      budget: '₹5–10 Lakhs',
      name: 'Premium Living',
      features: [
        'Designer TV feature wall',
        'Custom console & shelving',
        'Layered lighting',
        'Accent panelling',
      ],
      materials: ['Veneer feature wall', 'Stone console', 'Fabric panels'],
      timeline: '4–6 weeks',
    },
    '10-20': {
      room: 'Living Room',
      budget: '₹10–20 Lakhs',
      name: 'Luxury Living',
      features: [
        'Full feature wall composition',
        'Marble / stone cladding',
        'Cove lighting + dimmable scenes',
        'Custom bar unit',
        'Acoustic treatment',
      ],
      materials: ['Marble cladding', 'Walnut veneer', 'Brushed gold', 'Bronze glass'],
      timeline: '6–9 weeks',
    },
    '20+': {
      room: 'Living Room',
      budget: '₹20 Lakhs+',
      name: 'Bespoke Grand Living',
      features: [
        'Double-height feature wall',
        'Imported stone & metalwork',
        'Fully automated lighting & AV',
        'Custom bar + wine wall',
        'Climate & acoustic engineering',
      ],
      materials: ['Imported marble', 'Premium veneers', 'Gold & bronze detailing'],
      timeline: '10–14 weeks',
    },
  },
  Office: {
    '2-5': {
      room: 'Office',
      budget: '₹2–5 Lakhs',
      name: 'Essential Workspace',
      features: ['Workstation setup', 'Storage unit', 'Basic lighting', 'Cable management'],
      materials: ['Laminate desk', 'MDF storage', 'Painted walls'],
      timeline: '2–3 weeks',
    },
    '5-10': {
      room: 'Office',
      budget: '₹5–10 Lakhs',
      name: 'Premium Workspace',
      features: [
        'Custom desk + shelving',
        'Acoustic panels',
        'Layered lighting',
        'Meeting nook',
      ],
      materials: ['Veneer desk', 'Acoustic felt', 'Glass partition'],
      timeline: '4–6 weeks',
    },
    '10-20': {
      room: 'Office',
      budget: '₹10–20 Lakhs',
      name: 'Luxury Executive Office',
      features: [
        'Executive suite fit-out',
        'Glass cabin + blinds',
        'Concealed AV & smart lighting',
        'Lounge & pantry',
      ],
      materials: ['Veneer & glass', 'Stone countertop', 'Bronze trims'],
      timeline: '6–10 weeks',
    },
    '20+': {
      room: 'Office',
      budget: '₹20 Lakhs+',
      name: 'Bespoke Corporate HQ',
      features: [
        'Full-floor fit-out',
        'Brand-integrated design',
        'Smart meeting rooms',
        'Executive & collaboration zones',
        'Acoustic & AV engineering',
      ],
      materials: ['Premium veneers', 'Imported stone', 'Smart glass', 'Metal detailing'],
      timeline: '12–20 weeks',
    },
  },
  Commercial: {
    '2-5': {
      room: 'Commercial',
      budget: '₹2–5 Lakhs',
      name: 'Essential Retail',
      features: ['Display units', 'Counter styling', 'Basic lighting', 'Signage'],
      materials: ['Laminate displays', 'Painted walls', 'LED strips'],
      timeline: '2–4 weeks',
    },
    '5-10': {
      room: 'Commercial',
      budget: '₹5–10 Lakhs',
      name: 'Premium Storefront',
      features: [
        'Custom display systems',
        'Branded feature wall',
        'Layered lighting',
        'Reception counter',
      ],
      materials: ['Veneer & laminate', 'Stone counter', 'Branded signage'],
      timeline: '4–7 weeks',
    },
    '10-20': {
      room: 'Commercial',
      budget: '₹20 Lakhs+',
      name: 'Luxury Hospitality',
      features: [
        'Full interior fit-out',
        'Custom joinery & lighting',
        'Brand experience zones',
        'Reception & lounge',
      ],
      materials: ['Marble & veneer', 'Bronze & gold trims', 'Designer lighting'],
      timeline: '8–14 weeks',
    },
    '20+': {
      room: 'Commercial',
      budget: '₹20 Lakhs+',
      name: 'Bespoke Flagship',
      features: [
        'Flagship brand experience',
        'Imported materials & lighting',
        'Immersive zones & AV',
        'Full MEP integration',
      ],
      materials: ['Imported marble', 'Premium metals', 'Smart glass', 'Custom lighting'],
      timeline: '14–24 weeks',
    },
  },
};

export type BudgetOption = { id: string; label: string };

export const roomTypes: BudgetOption[] = [
  { id: 'Kitchen', label: 'Kitchen' },
  { id: 'Bedroom', label: 'Bedroom' },
  { id: 'Living Room', label: 'Living Room' },
  { id: 'Office', label: 'Office' },
  { id: 'Commercial', label: 'Commercial' },
];

export const budgetBands: BudgetOption[] = [
  { id: '2-5', label: '₹2–5 Lakhs' },
  { id: '5-10', label: '₹5–10 Lakhs' },
  { id: '10-20', label: '₹10–20 Lakhs' },
  { id: '20+', label: '₹20 Lakhs+' },
];

export const portfolioCategories: (ProjectCategory | 'All')[] = [
  'All',
  'Kitchen',
  'Bedroom',
  'Living',
  'Office',
  'Commercial',
];

export type FeedPost = {
  id: string;
  image: string;
  caption: string;
};

export const feedPosts: FeedPost[] = [
  {
    id: 'f1',
    image: '/images/kitchen/IMG-20260608-WA0012.jpg',
    caption: 'A beautifully crafted kitchen — where function meets finesse.',
  },
  {
    id: 'f2',
    image: '/images/dining/IMG-20260608-WA0028.jpg',
    caption: 'Bronze glass wardrobes — storage that doubles as a feature.',
  },
  {
    id: 'f3',
    image: '/images/dining/IMG-20260608-WA0044.jpg',
    caption: 'Dining rooms designed to turn weeknights into occasions.',
  },
  {
    id: 'f4',
    image: '/images/kitchen/WhatsApp_Image_2026-07-25_at_12.25.32_AM.jpeg',
    caption: 'Warm-tone kitchens that make cooking feel like a ritual.',
  },
  {
    id: 'f5',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Golden hour, every hour — lighting that flatters the room.',
  },
  {
    id: 'f6',
    image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Offices that make Monday mornings feel like an upgrade.',
  },
];
