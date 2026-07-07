// ============================================================
// portfolioData.js — Centralized configuration for Subasri M's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "SUBASRI M",
  firstName: "Subasri",
  brandName: "SUBASRI M",
  title: "Aspiring .NET & React Developer",
  location: "Erode, Tamil Nadu, India",
  phone: "+91 93427-05650",
  emails: {
    primary: "subadhanu2418@gmail.com",
    secondary: "skynetsubasri@gmail.com",
  },
  summary:
    "Motivated IT student with 2+ years of internship experience in C#, .NET WinUI 3, and MySQL, and recent hands-on exposure to React front-end development. Delivered production-ready modules for hospital, windmill, and jewellery management systems.",
  resumeUrl: "/Subasri_M_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/Subasri-madhavan",
  linkedin: "https://www.linkedin.com/in/subasrimadhavan",
};

export const heroContent = {
  greeting: "Hi, I'm Subasri M",
  titleHighlight: "Aspiring .NET & React Developer",
  subtitle:
    "I build clean, real-world software solutions using C#, .NET WinUI 3, MySQL, and React.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:subadhanu2418@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Subasri,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Subasri_M_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Subasri M</span>, a motivated IT student based in Erode, Tamil Nadu, with 2+ years of internship experience building production-ready modules for hospital, windmill, and jewellery management systems — and recent hands-on experience in React front-end development.`,
  techStack: ["C#", ".NET WinUI 3", "React", "MySQL"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, practical approach to building clean, working software — from business logic and database integration to responsive, user-friendly interfaces.",
  cards: [
    {
      number: "01",
      title: "Understand",
      text: "I start by understanding the business requirements and real-world workflows the software needs to support.",
    },
    {
      number: "02",
      title: "Design",
      text: "Planning database structure and application logic before writing code, so features integrate cleanly.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building features and UI using C#, .NET WinUI 3, MySQL, and React, with attention to clean, maintainable code.",
    },
    {
      number: "04",
      title: "Deliver",
      text: "Testing, refining, and shipping production-ready modules used in real hospital, windmill, and jewellery management systems.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data (based on resume's Technical Skills section)
export const technicalSkills = {
  categories: [
    {
      title: "Languages",
      skills: [
        { name: "C#", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 88 },
      ],
    },
    {
      title: "Frameworks / Libraries",
      skills: [
        { name: ".NET", level: 85 },
        { name: "WinUI 3", level: 80 },
        { name: "React", level: 75 },
      ],
    },
    {
      title: "Database",
      skills: [{ name: "MySQL", level: 82 }],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: 80 },
        { name: "AWS", level: 65 },
        { name: "Visual Studio", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "DB Browser", level: 78 },
      ],
    },
  ],
};

// Experience Data (from resume's EXPERIENCE section)
export const internshipsList = [
  {
    organization: "Skynetbee Artificial Intelligence Pvt. Ltd.",
    role: "Software Development Intern",
    duration: "2 Years",
    skills: [
      "Business Logic",
      "Database Integration",
      "Feature Enhancements",
    ],
    tech: ["C#", ".NET WinUI 3", "MySQL"],
    highlights: [
      "Built Billing & Bed Management modules for SSS Super Speciality Hospital.",
      "Created Wind Master module for a Windmill Management System.",
      "Developed Purchase Management module for a Jewellery Management System.",
    ],
  },
  {
    organization: "BRU Internship Program",
    role: "React App Development Intern",
    duration: "",
    skills: ["State Management", "Component Lifecycle", "Responsive UI"],
    tech: ["React", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Built reusable React components and responsive UI for web application modules.",
      "Worked with state management, props, and component lifecycle in live projects.",
      "Gained practical front-end development experience through end-to-end project delivery.",
    ],
  },
];

// Achievements & Additional Knowledge (from resume)
export const achievementsList = [
  {
    title: "Most Promising Developer Award",
    description: "Recognised for outstanding internship contributions.",
    badge: "Award",
  },
  {
    title: "1st Prize – Short Film Hackathon",
    description: "Won first place for creative editing and acting.",
    badge: "Hackathon",
  },
  {
    title: "1st Prize – Trading Hackathon",
    description: "Won first place in a trading-focused hackathon.",
    badge: "Hackathon",
  },
];

export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down real-world business logic into clean, working modules." },
  { name: "Adaptability", icon: "🌟", desc: "Moved from C#/.NET development into React front-end work with ease." },
  { name: "Communication", icon: "💬", desc: "Clear collaboration across internship teams and live projects." },
  { name: "Creativity", icon: "🎨", desc: "Applies a creative eye through content creation and video editing in DaVinci Resolve." },
];

export const projects = [
  {
    id: "shopvibe-cart",
    number: "01",
    badge: "🚀 Featured Project",
    title: "ShopVibe Cart",
    description:
      "A responsive e-commerce web app with product search, category filtering, cart, and wishlist functionality. Deployed on Netlify with a clean, mobile-friendly UI built using React component architecture.",
    techTags: ["React", "HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/Subasri-madhavan/shopvibe-cart",
      demo: "https://shopvibecart.netlify.app/",
    },
    isFlagship: true,
  },
  {
    id: "hospital-billing",
    number: "02",
    badge: null,
    title: "Hospital Billing & Bed Management System",
    description:
      "Billing and bed management modules built for SSS Super Speciality Hospital, handling business logic and database integration in a .NET developer environment.",
    techTags: ["C#", ".NET WinUI 3", "MySQL"],
    links: {},
    isFlagship: false,
  },
  {
    id: "windmill-management",
    number: "03",
    badge: null,
    title: "Windmill Management System (Wind Master Module)",
    description:
      "The Wind Master module for a Windmill Management System, built to handle core business logic and data operations.",
    techTags: ["C#", ".NET WinUI 3", "MySQL"],
    links: {},
    isFlagship: false,
  },
  {
    id: "jewellery-purchase-management",
    number: "04",
    badge: null,
    title: "Jewellery Purchase Management System",
    description:
      "A Purchase Management module developed for a Jewellery Management System, covering business logic and database integration.",
    techTags: ["C#", ".NET WinUI 3", "MySQL"],
    links: {},
    isFlagship: false,
  },
];

export const education = {
  degree: "B.Sc. Information Technology",
  institution: "RD National College of Arts and Science, Bharathiar University",
  duration: "2024 – 2027 (3rd Year, Pursuing)",
};

export const additionalKnowledge = {
  knowledge: ["Trading", "PC Building", "Content Creation", "DaVinci Resolve Video Editing"],
  interests: ["Artificial Intelligence", "Software Development", "Technology Exploration", "Sci-Fi Movies"],
};

export const footerContent = {
  taglines: [
    "Software Development & Web Dev",
    "C# | .NET WinUI 3 | React",
    "Full Stack Applications",
  ],
  credential: "B.Sc. IT | RD National College of Arts and Science",
  copyright: `© ${new Date().getFullYear()} Subasri M | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
