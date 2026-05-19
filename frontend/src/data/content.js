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
} from 'lucide-react'

/* ================================================================
   COMPANY INFO
   ================================================================ */
export const company = {
  name: 'S P V Plastchem (Pvt) Ltd',
  shortName: 'SPV Plastchem',
  tagline: 'Engineering Chemical Excellence',
  description:
    'A leading Sri Lankan industrial chemical manufacturing company specializing in specialty chemical formulations, rubber processing solutions, construction chemicals, and industrial bonding technologies.',
  founded: '1995',
  chairman: 'Dr. Vudyananda Sellahewa',
  chairmanTitle: 'Chairman / Managing Director',
  chairmanBio:
    'Dr. Vudyananda Sellahewa brings decades of expertise in industrial chemistry and business leadership. Under his stewardship, S P V Plastchem has grown into a trusted name across multiple industrial sectors in Sri Lanka and beyond, driven by a commitment to innovation, quality, and customer-centric solutions.',
  phone: '(+94) 117 592 828',
  email: 'vudya@spvplastchem.lk',
  address: 'Piliyandala, Sri Lanka',
  fullAddress: '80A, Jayasena Udawatta Place, New Hadigama Road, Piliyandala (10300), Sri Lanka',
  website: 'spv-plastchem-eh7g.vercel.app',
}

/* ================================================================
   CONTACT INFO
   ================================================================ */
export const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(+94) 117 592 828',
    href: 'tel:+94117592828',
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
    value: '80A, Jayasena Udawatta Place, New Hadigama Road, Piliyandala (10300), Sri Lanka',
    href: null,
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'spv-plastchem-eh7g.vercel.app',
    href: 'https://spv-plastchem-eh7g.vercel.app/',
  },
]

/* ================================================================
   STATS
   ================================================================ */
export const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '500+', label: 'Products Delivered' },
  { value: '200+', label: 'Industrial Clients' },
  { value: '4', label: 'Industries Served' },
]

/* ================================================================
   PRODUCT CATEGORIES
   ================================================================ */
export const productCategories = [
  {
    id: 'pu-additives',
    name: 'PU Additives',
    slug: 'pu-additives',
    icon: FlaskConical,
    color: '#3B82F6',
    shortDescription:
      'High-performance polyurethane additives for enhanced material properties.',
    description:
      'Our PU Additives are engineered to improve the performance, durability, and processing characteristics of polyurethane systems. These specialty chemicals serve as catalysts, stabilizers, and property enhancers across flexible foam, rigid foam, coatings, adhesives, sealants, and elastomer applications.',
    applications: [
      'Flexible & rigid foam production',
      'Polyurethane coatings & sealants',
      'Automotive interior components',
      'Insulation systems',
      'Footwear manufacturing',
    ],
    products: [
      {
        name: 'SPV-PU 101 Catalyst',
        description: 'Amine-based catalyst for flexible foam systems with balanced blow/gel activity.',
        specs: { 'Active Content': '≥99%', 'Viscosity': '5-10 cP', 'Density': '0.89 g/cm³' },
      },
      {
        name: 'SPV-PU 202 Stabilizer',
        description: 'Silicone-based cell stabilizer for uniform foam cell structure.',
        specs: { 'Active Content': '≥98%', 'pH Range': '6.5-7.5', 'Shelf Life': '12 months' },
      },
      {
        name: 'SPV-PU 303 Chain Extender',
        description: 'Diol-based chain extender for improved mechanical properties in elastomers.',
        specs: { 'Purity': '≥99.5%', 'Molecular Weight': '90-110', 'Form': 'Liquid' },
      },
    ],
  },
  {
    id: 'surface-finishes',
    name: 'Surface Finishes',
    slug: 'surface-finishes',
    icon: Paintbrush,
    color: '#8B5CF6',
    shortDescription:
      'Premium surface finishing chemicals for industrial coating applications.',
    description:
      'Our Surface Finish solutions provide superior coating performance, adhesion, and aesthetic quality for metal, wood, and composite substrates. Formulated for demanding industrial environments, these products deliver consistent results in automated and manual application processes.',
    applications: [
      'Metal surface treatment',
      'Automotive refinishing',
      'Industrial coating systems',
      'Wood finishing & lacquers',
      'Decorative & protective coatings',
    ],
    products: [
      {
        name: 'SPV-SF 100 Primer',
        description: 'Universal primer for multi-substrate adhesion with excellent corrosion protection.',
        specs: { 'Coverage': '10-12 m²/L', 'Dry Time': '30 min', 'VOC': '<250 g/L' },
      },
      {
        name: 'SPV-SF 200 Clear Coat',
        description: 'High-gloss clear coat with UV resistance and scratch-resistant finish.',
        specs: { 'Gloss Level': '90+ GU', 'UV Stability': 'Excellent', 'Hardness': '2H pencil' },
      },
      {
        name: 'SPV-SF 300 Hardener',
        description: 'Isocyanate-based hardener for two-component coating systems.',
        specs: { 'NCO Content': '21.5%', 'Mix Ratio': '2:1', 'Pot Life': '4-6 hours' },
      },
    ],
  },
  {
    id: 'construction-chemicals',
    name: 'Construction Chemicals',
    slug: 'construction-chemicals',
    icon: HardHat,
    color: '#F59E0B',
    shortDescription:
      'Engineered chemical solutions for modern construction applications.',
    description:
      'Our Construction Chemical range addresses critical needs in waterproofing, concrete admixtures, tile adhesives, and structural repair. These products are formulated to meet international construction standards while being optimized for tropical climate conditions.',
    applications: [
      'Waterproofing systems',
      'Concrete admixtures & plasticizers',
      'Tile adhesives & grouts',
      'Structural repair compounds',
      'Floor hardening & sealing',
    ],
    products: [
      {
        name: 'SPV-CC 100 Waterproofer',
        description: 'Integral waterproofing compound for concrete and mortar applications.',
        specs: { 'Dosage': '0.5-1% by weight', 'Setting Time': 'Normal', 'Chloride': 'Free' },
      },
      {
        name: 'SPV-CC 200 Plasticizer',
        description: 'High-range water reducer for workable, high-strength concrete.',
        specs: { 'Water Reduction': '15-25%', 'Slump Retention': '60 min', 'Compliance': 'SLS/ASTM' },
      },
      {
        name: 'SPV-CC 300 Tile Adhesive',
        description: 'Polymer-modified tile adhesive for interior and exterior applications.',
        specs: { 'Pot Life': '4 hours', 'Open Time': '20 min', 'Coverage': '4-5 kg/m²' },
      },
    ],
  },
  {
    id: 'reclaim-rubber',
    name: 'Reclaim Rubber',
    slug: 'reclaim-rubber',
    icon: Recycle,
    color: '#10B981',
    shortDescription:
      'Sustainable reclaimed rubber products for cost-effective manufacturing.',
    description:
      'Our Reclaim Rubber products are manufactured through advanced devulcanization processes, providing an economical and environmentally responsible alternative to virgin rubber. These materials maintain excellent processing characteristics and mechanical properties suitable for a wide range of rubber goods.',
    applications: [
      'Tire retreading & manufacturing',
      'Rubber mats & flooring',
      'Automotive rubber parts',
      'Conveyor belts',
      'Moulded rubber goods',
    ],
    products: [
      {
        name: 'SPV-RR 100 Whole Tire Reclaim',
        description: 'General-purpose reclaimed rubber from whole tire feedstock.',
        specs: { 'Tensile Strength': '≥8 MPa', 'Elongation': '≥300%', 'Ash Content': '<8%' },
      },
      {
        name: 'SPV-RR 200 Butyl Reclaim',
        description: 'Reclaimed butyl rubber for inner tubes and sealing applications.',
        specs: { 'Mooney Viscosity': '40-55', 'Moisture': '<0.75%', 'Specific Gravity': '1.14' },
      },
      {
        name: 'SPV-RR 300 EPDM Reclaim',
        description: 'Reclaimed EPDM rubber for weather-resistant applications.',
        specs: { 'Tensile': '≥6 MPa', 'Elongation': '≥250%', 'Color': 'Black' },
      },
    ],
  },
  {
    id: 'rubber-to-metal-bonding',
    name: 'Rubber-to-Metal Bonding Adhesives',
    slug: 'rubber-to-metal-bonding',
    icon: Link2,
    color: '#EF4444',
    shortDescription:
      'High-strength bonding adhesives for rubber-to-metal applications.',
    description:
      'Our Rubber-to-Metal Bonding Adhesives are formulated for permanent, high-strength bonds between vulcanized or unvulcanized rubber compounds and metal substrates. These systems are engineered for critical applications in automotive, industrial, and engineering components where bond integrity is paramount.',
    applications: [
      'Engine mounts & vibration dampeners',
      'Automotive bushings & bearings',
      'Industrial rollers & wheels',
      'Bridge bearings',
      'Mining equipment components',
    ],
    products: [
      {
        name: 'SPV-RMB 100 Primer',
        description: 'Single-coat primer for rubber-to-metal bonding systems.',
        specs: { 'Coverage': '8-10 m²/L', 'Flash Point': '4°C', 'Bond Strength': '>15 N/mm' },
      },
      {
        name: 'SPV-RMB 200 Adhesive',
        description: 'One-coat bonding agent for vulcanization bonding of rubber to metal.',
        specs: { 'Cure Temp': '140-180°C', 'Coverage': '6-8 m²/L', 'Substrates': 'Steel/Aluminum' },
      },
      {
        name: 'SPV-RMB 300 Post-Vulcanization',
        description: 'Cold-bonding adhesive for post-cure rubber-to-metal applications.',
        specs: { 'Cure Time': '24-48 hrs', 'Temp Range': '-40 to +120°C', 'Type': 'Two-component' },
      },
    ],
  },
]

/* ================================================================
   INDUSTRIES SERVED
   ================================================================ */
export const industries = [
  {
    id: 'rubber',
    name: 'Rubber Industry',
    icon: Factory,
    description:
      'Comprehensive chemical solutions for rubber compounding, processing, and vulcanization across tire, footwear, and industrial rubber goods manufacturing.',
    solutions: [
      'Rubber processing chemicals',
      'Reclaim rubber supply',
      'Vulcanization bonding systems',
      'Quality control additives',
    ],
  },
  {
    id: 'paint-coatings',
    name: 'Paint & Coatings Industry',
    icon: Palette,
    description:
      'Specialty additives and raw materials for paint formulations, industrial coatings, and surface finishing systems delivering superior performance and aesthetics.',
    solutions: [
      'Surface finishing agents',
      'Coating hardeners & catalysts',
      'Pigment dispersants',
      'Performance additives',
    ],
  },
  {
    id: 'construction',
    name: 'Construction Sector',
    icon: Building2,
    description:
      'Engineered chemical products for modern construction — from waterproofing and concrete admixtures to tile adhesives and structural repair solutions.',
    solutions: [
      'Waterproofing compounds',
      'Concrete plasticizers',
      'Tile adhesives & grouts',
      'Repair & protection systems',
    ],
  },
  {
    id: 'manufacturing',
    name: 'Industrial Manufacturing',
    icon: Wrench,
    description:
      'PU additives, bonding agents, and specialty chemicals serving diverse manufacturing processes across automotive, electronics, and consumer goods industries.',
    solutions: [
      'PU system additives',
      'Industrial adhesives',
      'Process chemicals',
      'Custom formulations',
    ],
  },
]

/* ================================================================
   WHY CHOOSE US
   ================================================================ */
export const whyChooseUs = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'Rigorous quality control processes ensure every product meets international standards and specifications.',
  },
  {
    icon: Beaker,
    title: 'R&D Excellence',
    description:
      'In-house research and development capabilities enable custom formulations and continuous innovation.',
  },
  {
    icon: Clock,
    title: 'Reliable Supply',
    description:
      'Consistent product availability with efficient logistics and inventory management across Sri Lanka.',
  },
  {
    icon: Award,
    title: 'Industry Experience',
    description:
      'Over 25 years of deep expertise in industrial chemistry serving diverse market sectors.',
  },
  {
    icon: Users,
    title: 'Technical Support',
    description:
      'Dedicated technical team providing application guidance, troubleshooting, and on-site assistance.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation Focus',
    description:
      'Continuous development of new formulations to address evolving industrial challenges and requirements.',
  },
]

/* ================================================================
   COMPANY HISTORY / TIMELINE
   ================================================================ */
export const companyHistory = [
  {
    year: '1995',
    title: 'Company Founded',
    description: 'S P V Plastchem (Pvt) Ltd established in Colombo with a focus on specialty chemical trading.',
  },
  {
    year: '2002',
    title: 'Manufacturing Operations',
    description: 'Expanded into chemical manufacturing with dedicated production facilities.',
  },
  {
    year: '2008',
    title: 'Product Line Expansion',
    description: 'Launched construction chemicals and rubber processing solutions divisions.',
  },
  {
    year: '2014',
    title: 'R&D Center Established',
    description: 'Opened in-house research laboratory for custom formulation development.',
  },
  {
    year: '2019',
    title: 'Market Leadership',
    description: 'Became a leading supplier of rubber-to-metal bonding adhesives in Sri Lanka.',
  },
  {
    year: '2024',
    title: 'Digital Transformation',
    description: 'Launched digital platform for enhanced customer engagement and service delivery.',
  },
]

/* ================================================================
   CORPORATE VALUES
   ================================================================ */
export const corporateValues = [
  {
    icon: Target,
    title: 'Customer Focus',
    description: 'We prioritize understanding and meeting our customers\' unique requirements.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Ethical business practices and transparency in every interaction.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Continuous improvement and investment in new technologies and solutions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Building lasting partnerships with clients, suppliers, and communities.',
  },
]
