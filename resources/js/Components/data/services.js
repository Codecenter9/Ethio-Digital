import {
  Code2,
  Smartphone,
  Cloud,
  Shield,
  Settings,
  Palette,
  TrendingUp,
  Award,
  Edit3,
  MessageCircle,
  Video,
  Wrench,
  Rocket,
  GraduationCap,
  CloudCog,
  Headphones
} from "lucide-react";

// Software Services
export const softwareServices = [
  {
    title: "Website Development",
    description:
      "Responsive and SEO-optimized websites using Next.js, React, and Laravel.",
    icon: Code2, // just reference the component, not JSX
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "App Development",
    description:
      "Cross-platform mobile apps (iOS & Android) built with Flutter and React Native.",
    icon: Smartphone,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Cloud Solutions",
    description:
      "Migration, deployment, and management services on AWS, Azure, and Google Cloud.",
    icon: Cloud,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Cybersecurity",
    description: "Secure systems, penetration testing, and 24/7 threat monitoring.",
    icon: Shield,
    color: "from-teal-500 to-green-500",
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing updates, monitoring, and reliable technical support.",
    icon: Settings,
    color: "from-cyan-500 to-blue-500",
  },
];

// Creative Services
export const creativeServices = [
  { title: "Graphics Design", description: "From logos to full branding & UI/UX, we create visuals that inspire.", icon: Palette, color: "from-purple-500 to-pink-500" },
  { title: "Digital Marketing", description: "SEO, social media, and data-driven campaigns to grow your brand.", icon: TrendingUp, color: "from-amber-500 to-orange-500" },
  { title: "Brand Identity", description: "Creative strategies to build unique, lasting brand presence.", icon: Award, color: "from-pink-500 to-red-500" },
  { title: "Content Creation", description: "Engaging blogs, videos, and visuals tailored to connect with your audience.", icon: Edit3, color: "from-indigo-500 to-purple-500" },
  { title: "Social Media Management", description: "Grow your presence with curated posts, campaigns, and audience engagement.", icon: MessageCircle, color: "from-blue-500 to-cyan-500" },
  { title: "Video & Motion Graphics", description: "Creative video production and animations that tell your story visually.", icon: Video, color: "from-rose-500 to-red-500" },
];

// Other Services
export const otherServices = [
  { title: "IT Consulting", description: "Expert guidance for choosing the right technologies & strategies.", icon: Wrench, color: "from-gray-500 to-blue-gray-500" },
  { title: "Startup Solutions", description: "MVP development, product launches, and growth strategy support.", icon: Rocket, color: "from-yellow-500 to-orange-500" },
  { title: "Educational Training", description: "Hands-on digital skills, programming, and cloud training.", icon: GraduationCap, color: "from-red-500 to-rose-500" },
  { title: "Cloud & DevOps Services", description: "Optimize infrastructure with automation, CI/CD pipelines, and monitoring.", icon: CloudCog, color: "from-sky-500 to-blue-500" },
  { title: "Technical Support", description: "Dedicated support for troubleshooting, system maintenance, and updates.", icon: Headphones, color: "from-green-500 to-emerald-500" },
];
