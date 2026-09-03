// lib/data.ts - Static data for NovaEdge Digital

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    icon: "Palette",
    title: "Web Design",
    description:
      "Stunning, conversion-focused designs crafted to captivate your audience and reflect your brand identity with pixel-perfect precision.",
    href: "/services#web-design",
  },
  {
    icon: "Code2",
    title: "Web Development",
    description:
      "High-performance, scalable websites built with modern technologies that deliver exceptional user experiences across all devices.",
    href: "/services#web-development",
  },
  {
    icon: "ShoppingCart",
    title: "E-commerce Development",
    description:
      "Powerful online stores with seamless checkout flows, secure payment integration, and inventory management systems.",
    href: "/services#ecommerce",
  },
  {
    icon: "Search",
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies that boost your search rankings, drive organic traffic, and grow your online visibility sustainably.",
    href: "/services#seo",
  },
  {
    icon: "Layers",
    title: "Branding",
    description:
      "Cohesive brand identities including logos, color palettes, and brand guidelines that make your business unforgettable.",
    href: "/services#branding",
  },
  {
    icon: "Bot",
    title: "AI Automation",
    description:
      "Smart AI-powered tools and automation workflows that streamline your business operations and multiply your productivity.",
    href: "/services#ai-automation",
  },
];

export const whyChooseUs = [
  {
    icon: "Smartphone",
    title: "Responsive Design",
    description: "Pixel-perfect layouts that look stunning on every screen size.",
  },
  {
    icon: "Zap",
    title: "Fast Performance",
    description: "Optimised code and assets delivering sub-second load times.",
  },
  {
    icon: "TrendingUp",
    title: "SEO Friendly",
    description: "Semantic HTML and best-practice SEO baked in from day one.",
  },
  {
    icon: "Sparkles",
    title: "Modern UI/UX",
    description: "Intuitive interfaces that delight users and drive conversions.",
  },
  {
    icon: "Shield",
    title: "Secure Development",
    description: "Industry-standard security practices to protect your data.",
  },
  {
    icon: "Headphones",
    title: "Ongoing Support",
    description: "Dedicated post-launch support and maintenance packages.",
  },
];

export const featuredProjects = [
  {
    title: "Luxury Restaurant Website",
    category: "Web Design & Development",
    description:
      "An elegant, reservation-focused website for a fine-dining establishment featuring immersive visuals and a seamless booking experience.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    gradient: "from-amber-500 to-orange-600",
    accent: "#f59e0b",
  },
  {
    title: "Modern Real Estate Platform",
    category: "Web Development",
    description:
      "A full-featured property listing platform with advanced search filters, virtual tours, and an agent dashboard.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    gradient: "from-blue-500 to-cyan-600",
    accent: "#3b82f6",
  },
  {
    title: "Fitness & Gym Website",
    category: "Web Design",
    description:
      "A high-energy fitness brand website with class schedules, trainer profiles, and membership sign-up flows.",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
    gradient: "from-green-500 to-emerald-600",
    accent: "#10b981",
  },
  {
    title: "E-commerce Fashion Store",
    category: "E-commerce Development",
    description:
      "A sleek fashion e-commerce store with personalised recommendations, wishlist, and a streamlined checkout.",
    tags: ["Next.js", "Shopify", "TypeScript"],
    gradient: "from-purple-500 to-pink-600",
    accent: "#a855f7",
  },
];

export const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

export const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO, TechStartup Inc.",
    initials: "AJ",
    content:
      "NovaEdge Digital transformed our online presence completely. The new website exceeded every expectation — it's fast, beautiful, and our leads have increased significantly.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Boutique",
    initials: "SM",
    content:
      "Working with NovaEdge was an absolute pleasure. They delivered a stunning e-commerce store on time and within budget. Our online sales tripled in the first month!",
    rating: 5,
  },
  {
    name: "James Park",
    role: "Marketing Director, Apex Group",
    initials: "JP",
    content:
      "The team's attention to detail and technical expertise is outstanding. Our SEO rankings jumped dramatically and the site performance scores are phenomenal.",
    rating: 5,
  },
];

export const allProjects = [
  {
    title: "Luxury Restaurant Website",
    category: "Web Design & Development",
    description:
      "An elegant, reservation-focused website for a fine-dining establishment. Features immersive hero visuals, an interactive menu, and a real-time booking system.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Prisma"],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Modern Real Estate Platform",
    category: "Web Development",
    description:
      "A full-featured property listing platform with advanced search, virtual tours, mortgage calculators, and a comprehensive agent dashboard.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Fitness & Gym Website",
    category: "Web Design",
    description:
      "A high-energy brand website with class schedules, trainer profiles, workout tracking, and membership sign-up flows with Stripe integration.",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Framer Motion"],
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "E-commerce Fashion Store",
    category: "E-commerce",
    description:
      "A sleek fashion e-commerce store with personalised recommendations, wishlist management, size guides, and a streamlined single-page checkout.",
    tags: ["Next.js", "Shopify API", "TypeScript", "Tailwind CSS"],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "Web Application",
    description:
      "A powerful analytics dashboard with real-time charts, team collaboration features, and customisable reporting for enterprise clients.",
    tags: ["React", "D3.js", "TypeScript", "GraphQL"],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "Corporate Law Firm Website",
    category: "Web Design & Development",
    description:
      "A professional, trust-inspiring website for a leading law firm with attorney profiles, practice area pages, and a secure client portal.",
    tags: ["Next.js", "TypeScript", "Contentful CMS"],
    gradient: "from-slate-500 to-gray-600",
  },
];

export const pricingPlans = [
  {
    name: "Basic",
    subtitle: "Landing Page",
    description: "Perfect for startups and individuals needing a professional online presence.",
    features: [
      "Single landing page",
      "Responsive design",
      "Contact form",
      "Basic SEO setup",
      "3 revision rounds",
      "1 month support",
      "Performance optimised",
    ],
    notIncluded: ["CMS integration", "E-commerce functionality", "Custom animations"],
    popular: false,
    gradient: "from-blue-600 to-blue-400",
  },
  {
    name: "Standard",
    subtitle: "Business Website",
    description: "Ideal for growing businesses that need a full multi-page website.",
    features: [
      "Up to 8 pages",
      "Responsive design",
      "CMS integration",
      "Advanced SEO setup",
      "Contact & quote forms",
      "Framer Motion animations",
      "5 revision rounds",
      "3 months support",
      "Google Analytics setup",
    ],
    notIncluded: ["E-commerce functionality"],
    popular: true,
    gradient: "from-purple-600 to-blue-500",
  },
  {
    name: "Premium",
    subtitle: "Advanced Website",
    description: "For businesses that want a bespoke, feature-rich digital experience.",
    features: [
      "Unlimited pages",
      "E-commerce / custom features",
      "Headless CMS",
      "Full SEO strategy",
      "Custom animations",
      "Performance & security audit",
      "Unlimited revisions",
      "6 months priority support",
      "AI integrations available",
      "Analytics & reporting",
    ],
    notIncluded: [],
    popular: false,
    gradient: "from-violet-600 to-purple-400",
  },
];

export const teamMembers = [
  {
    name: "Jordan Blake",
    role: "Founder & Lead Developer",
    bio: "Full-stack developer with 8+ years building scalable web applications for startups and enterprises alike.",
    initials: "JB",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    name: "Casey Williams",
    role: "UI/UX Designer",
    bio: "Award-winning designer specialising in conversion-focused interfaces and immersive brand experiences.",
    initials: "CW",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Morgan Chen",
    role: "SEO & Growth Strategist",
    bio: "Data-driven strategist who has helped 30+ businesses achieve top Google rankings and sustainable organic growth.",
    initials: "MC",
    gradient: "from-violet-500 to-pink-500",
  },
];

export const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Stripe",
  "Shopify",
  "Vercel",
];
