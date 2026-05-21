import {
  FlaskConical,
  Paintbrush,
  HardHat,
  Recycle,
  Link2,
  Factory,
  Palette,
  Building2,
  Wrench,
  Shield,
  Award,
  Clock,
  Users,
  Beaker,
  Target,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Globe,
  Briefcase,
  Star
} from 'lucide-react'

/* ================================================================
   COMPANY INFO
   ================================================================ */
export const company = {
  name: 'S P V Plastchem (Pvt) Ltd',
  shortName: 'SPV Plastchem',
  tagline: 'Leading Indenting Agent for Plastics & Chemical Industry',
  description:
    'S P V PLASTCHEM (PVT) LTD is a leading indenting Agent within the geographical territory of Sri Lanka in Supplying raw materials and machinery to the Plastics & Chemical industry. With our expertise and recognition in the industry, we act as an Indenting agent / Marketing office in Sri Lanka for global companies.',
  founded: '2020',
  commenced: '01st January 2021',
  chairman: 'Dr. Vudyananda Sellahewa, FPRI',
  chairmanTitle: 'Chairman / Managing Director',
  chairmanBio:
    'Dr. Vudyananda Sellahewa has experience working with Dow chemical products and other multinational companies since 1997 in Sri Lanka. He is a Fellow Member and served The Plastics and Rubber Institute of Sri Lanka as an Executive Committee member until 2019/2020, and is a Life Member of the Sri Lanka Institute of Packaging. With over Twenty-Five years of experience in the Plastics, Chemical, Rubber & Automotive industry, he continuously works on developing and promoting products needed for the industry and focuses on the constant expansion of the organization with more principals.',
  phone: '(+94) 11 7592828',
  mobile: '(+94) 777 805655',
  email: 'vudya@spvplastchem.lk',
  address: 'Piliyandala, Sri Lanka',
  fullAddress: 'Piliyandala, Sri Lanka',
  website: 'spv-plastchem-eh7g.vercel.app',
}

/* ================================================================
   CONTACT INFO
   ================================================================ */
export const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(+94) 11 7592828',
    href: 'tel:+94117592828',
  },
  {
    icon: Phone,
    label: 'Mobile',
    value: '(+94) 777 805655',
    href: 'tel:+94777805655',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'vudya@spvplastchem.lk',
    href: 'mailto:vudya@spvplastchem.lk',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Piliyandala, Sri Lanka',
    href: null,
  },
]

export const corporateInfo = {
  auditors: 'C J Associates. Chartered Accountants, Highlevel Plaza, Delkanda, Nugegoda, Sri Lanka',
  secretary: 'Premier Consultants Pvt. Ltd',
  bankers: 'Sampath Bank PLC, Karagampitiya Branch – 182A, Hill Street, Dehiwala, Sri Lanka',
  memberships: [
    'The Plastics and Rubber Institute of Sri Lanka (Fellow Member)',
    'Sri Lanka Institute of Packaging (Life Member)'
  ]
}

/* ================================================================
   STATS
   ================================================================ */
export const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '11', label: 'Global Principals' },
  { value: '5', label: 'Key Industries' },
  { value: '2020', label: 'Established' },
]

/* ================================================================
   PRINCIPALS & PARTNERS
   ================================================================ */
export const principals = [
  {
    id: 'dow',
    name: 'DOW CHEMICAL INTERNATIONAL PVT LTD',
    slug: 'dow-chemical',
    icon: FlaskConical,
    color: '#E11D48',
    shortDescription: '',
    description: 'We act as an Indenting agent / Marketing office for DOW CHEMICAL INTERNATIONAL PVT LTD, specializing in raw materials for the Paint & Coating Industry.',
    applications: [],
    products: [
      { name: 'Paint & Coating Materials', description: 'Raw materials for commercial and industrial paint formulations.', specs: { 'Type': 'Raw Materials' } }
    ]
  },
  {
    id: 'angus',
    name: 'ANGUS CHEMICAL',
    slug: 'angus-chemical',
    icon: Beaker,
    color: '#2563EB',
    shortDescription: '',
    description: 'Supplying Amino – AMP Dispersant, a multifunctional specialty additive containing 2-amino-2-methyl-1-Propanol AMP 95.',
    applications: [],
    products: [
      { name: 'AMP-95 Additive', description: 'Amino-AMP Dispersant acting as a multifunctional specialty additive containing 2-amino-2-methyl-1-Propanol.', specs: { 'Concentration': 'AMP 95', 'Grade': 'Industrial' } }
    ]
  },
  {
    id: 'dupont',
    name: 'DU PONT (DOW) - DDP',
    slug: 'dupont',
    icon: Link2,
    color: '#059669',
    shortDescription: '',
    description: 'Providing Rubber to Metal Bonding Adhesives, Construction Chemicals, and Automotive solutions.',
    applications: [],
    products: [
      { name: 'Rubber to Metal Bonding Adhesive', description: 'Specialty adhesives engineered for high-strength rubber-to-metal bonding.', specs: { 'Origin': 'USA' } },
      { name: 'Construction Additives', description: 'Advanced additives for building material enhancement.', specs: { 'Origin': 'USA' } }
    ]
  },
  {
    id: 'idex',
    name: 'IDEX - (India)',
    slug: 'idex',
    icon: Factory,
    color: '#D97706',
    shortDescription: '',
    description: 'Supplying dispensing and mixing machines specifically designed for the Paint Industry.',
    applications: [],
    products: [
      { name: 'Dispensing & Mixing Machines', description: 'Precision mixing and dispensing machinery for paint and coating manufacturers.', specs: { 'Origin': 'USA' } }
    ]
  },
  {
    id: 'evonik',
    name: 'Evonik India Pvt. Ltd. (Germany, France)',
    slug: 'evonik',
    icon: Target,
    color: '#7C3AED',
    shortDescription: '',
    description: 'Marketing office for Polyurethane Additives from Evonik.',
    applications: [],
    products: [
      { name: 'Polyurethane Additives', description: 'Specialty catalysts and surfactants to optimize PU system manufacturing.', specs: { 'Origin': 'Germany' } }
    ]
  },
  {
    id: 'seiko',
    name: 'SEIKO USA',
    slug: 'seiko',
    icon: Briefcase,
    color: '#475569',
    shortDescription: '',
    description: 'Supplying Smart label printers and Labels from SEIKO USA.',
    applications: [],
    products: [
      { name: 'Smart Label Printers', description: 'High-precision smart hardware for commercial and logistics label printing.', specs: { 'Origin': 'Japan', 'Connectivity': 'Smart / USB / Network' } },
      { name: 'High-Durability Labels', description: 'Labels resistant to chemicals, moisture, and extreme temperatures.', specs: { 'Origin': 'Japan' } }
    ]
  },
  {
    id: 'soujanya',
    name: 'SOUJANYA Color India',
    slug: 'soujanya',
    icon: Palette,
    color: '#EC4899',
    shortDescription: '',
    description: 'Providing Pigment Colorants and Pastes for PU, Paint, and Rubber industries.',
    applications: [],
    products: [
      { name: 'Pigment Colorants & Pastes', description: 'Vibrant, high-stability pigment pastes for coloring PU systems, paints, and rubber compounds.', specs: { 'Origin': 'India' } }
    ]
  },
  {
    id: 'yong-fong',
    name: 'YONG FONG RUBBER INDUSTRIES SDN. BHD',
    slug: 'yong-fong',
    icon: Recycle,
    color: '#10B981',
    shortDescription: '',
    description: 'Supplying Reclaimed Rubber from Yong Fong Rubber Industries.',
    applications: [],
    products: [
      { name: 'Reclaimed Rubber', description: 'Sustainable, high-quality devulcanized reclaimed rubber to optimize manufacturing costs.', specs: { 'Origin': 'Malaysia' } }
    ]
  },
  {
    id: 'malion',
    name: 'MALION NEW MATERIALS CO., LTD',
    slug: 'malion',
    icon: Paintbrush,
    color: '#0EA5E9',
    shortDescription: '',
    description: 'Marketing Pigment Master Batch (White, Black) for various applications.',
    applications: [],
    products: [
      { name: 'Pigment Master Batch (White & Black)', description: 'Premium grade black and white color masterbatches for the plastics industry.', specs: { 'Origin': 'China' } }
    ]
  },
  {
    id: 'micas',
    name: 'MICAS ORGANICS LIMITED',
    slug: 'micas',
    icon: Star,
    color: '#F59E0B',
    shortDescription: '',
    description: 'Supplying Color Pigments from Micas Organics Limited.',
    applications: [],
    products: [
      { name: 'Color Pigment', description: 'High-purity organic and inorganic pigments for color‑critical manufacturing.', specs: { 'Origin': 'India' } }
    ]
  },
  {
    id: 'manali',
    name: 'MANALI PETRO CHEMICALS',
    slug: 'manali',
    icon: FlaskConical,
    color: '#8B5CF6',
    shortDescription: '',
    description: 'Supplying Polyol from Manali Petro Chemicals.',
    applications: [],
    products: [
      { name: 'Polyol', description: 'High-quality polyols for flexible and rigid foam production.', specs: { 'Origin': 'India' } }
    ]
  }
]

export const productCategories = principals;

/* ================================================================
   INDUSTRIES SERVED
   ================================================================ */
export const industries = [
  {
    id: 'paint',
    name: 'Paint and Coating',
    icon: Palette,
    description: 'Supplying raw materials, additives, and dispensing machinery for Paint and Coating manufacturers of Sri Lanka.',
    solutions: ['Pigment Colorants', 'AMP Dispersants', 'Dispensing Machines', 'Binders'],
  },
  {
    id: 'rubber',
    name: 'Rubber Products',
    icon: Factory,
    description: 'Providing bonding adhesives, reclaimed rubber, and colorants for Rubber Products manufacturers of Sri Lanka.',
    solutions: ['Rubber to Metal Bonding', 'Reclaimed Rubber', 'Pigment Pastes'],
  },
  {
    id: 'plastic',
    name: 'Plastic Processing & Packaging',
    icon: Briefcase,
    description: 'Serving the Plastic processing and Packaging Industries of Sri Lanka with masterbatches and raw materials.',
    solutions: ['Pigment Master Batch', 'Smart Label Printers', 'Packaging Solutions'],
  },
  {
    id: 'construction',
    name: 'Construction & Cement',
    icon: Building2,
    description: 'Providing construction chemicals and raw materials for the Construction & Cement manufacturing Industries of Sri Lanka.',
    solutions: ['Construction Chemicals', 'Bonding Adhesives'],
  },
  {
    id: 'pu',
    name: 'Polyurethane / Automotive',
    icon: Wrench,
    description: 'Supplying PU additives, binders, and polyol for the Polyurethane Industry and Automotive Industry.',
    solutions: ['Polyurethane Additives', 'Polyol', 'PU Systems (Binders)'],
  },
]

/* ================================================================
   WHY CHOOSE US
   ================================================================ */
export const whyChooseUs = [
  {
    icon: Shield,
    title: 'Industry Expertise',
    description: 'Over 25 years of specialized experience in Plastics, Chemical, Rubber & Automotive industries under our MD.',
  },
  {
    icon: Globe,
    title: 'Global Principals',
    description: 'Representing top-tier global multinational companies as their indenting agent and marketing office.',
  },
  {
    icon: Award,
    title: 'Recognized Leadership',
    description: 'Led by a Fellow Member of The Plastics and Rubber Institute of Sri Lanka.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Expansion',
    description: 'Constantly working on the development and promotion of products needed for the industry.',
  },
]

/* ================================================================
   COMPANY HISTORY / TIMELINE
   ================================================================ */
export const companyHistory = [
  {
    year: '1997',
    title: 'Industry Foundation',
    description: 'Dr. Vudyananda Sellahewa began his extensive career working with Dow chemical products and other multinationals.',
  },
  {
    year: '2020',
    title: 'Company Established',
    description: 'S P V Plastchem (Pvt) Ltd was established on November 30th, 2020.',
  },
  {
    year: '2021',
    title: 'Business Commenced',
    description: 'Official business operations commenced on January 1st, 2021 as an Indenting Agent.',
  },
  {
    year: 'Present',
    title: 'Global Partnerships',
    description: 'Acting as the Marketing Office in Sri Lanka for 11 global companies across multiple sectors.',
  },
]

/* ================================================================
   CORPORATE VALUES
   ================================================================ */
export const corporateValues = [
  {
    icon: Target,
    title: 'Quality Sourcing',
    description: 'Connecting Sri Lankan industries with high-quality raw materials and machinery globally.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Ensuring consistent supply and trustworthy relationships with both principals and clients.',
  },
  {
    icon: Users,
    title: 'Industry Development',
    description: 'Promoting products that drive forward the capabilities of local manufacturing sectors.',
  },
]

/* ================================================================
   TESTIMONIALS
   ================================================================ */
export const testimonials = [
  {
    id: 1,
    name: '',
    company: '',
    role: '',
    content: 'SPV Plastchem has been our most reliable supplier for paint dispersants and additives. Their technical knowledge is unmatched in the industry.',
    rating: 5,
  },
  {
    id: 2,
    name: '',
    company: '',
    role: '',
    content: 'The quality of the reclaimed rubber and bonding adhesives provided by SPV has significantly improved our manufacturing efficiency.',
    rating: 5,
  },
  {
    id: 3,
    name: '',
    company: '',
    role: '',
    content: 'Dr. Vudyananda and his team always ensure we get the best PU additives exactly when we need them. A truly professional indenting agent.',
    rating: 5,
  }
];
