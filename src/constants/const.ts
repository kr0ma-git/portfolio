import type { OrbitStackItem } from "@/components/Card/OrbitCardStack";

const links = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects"
  },
  {
    href: "#techstack",
    label: "Tech Stack"
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const skills = [
  "React",
  "TypeScript",
  "Node.js / Express",
  "MongoDB",
  "C# / ASP.NET Core",
  "Three.js",
  "GSAP",
];

const projects: OrbitStackItem[] = [
  {
    name: "The BeansTalk",
    role: "Full-Stack",
    description: "A cafe business management web application featuring CRUD operations and administrative functionality",
    initials: "BT",
    stat: "PHP",
    accent: "#f3f1ea",
    video: "/videos/lb-cmp-ladybug-sample-7bud03a51.mp4",
    link: "https://github.com/kr0ma-git/Cafe-Business-Info-Management-System",
  },
  {
    name: "CineMatch",
    role: "Backend",
    description: "A movie and film discovery platform to help users find titles matching their preferences",
    initials: "CM",
    stat: "Express + Node + Mongo",
    accent: "#f3f1ea",
    video: "/videos/lb-cmp-untitled-7aex031ab.mp4",
    link: "https://github.com/kr0ma-git/CineMatch",
  },
  {
    name: "Sidequest",
    role: "Full-Stack",
    description: "An odd-job marketplace app connecting posters and job seekers for informal, on-demand work",
    initials: "SQ",
    stat: "React Native + Supabase",
    accent: "#78dcca",
    video: "/videos/lb-cmp-untitled-7a4r0222b.mp4",
    link: "https://github.com/kr0ma-git/Sidequest",
  },
  {
    name: "GradeMaster",
    role: "Full-Stack",
    description: "A desktop application for managing courses, student records, and grades",
    initials: "GM",
    stat: "Java",
    accent: "#f8d66d",
    video: "/videos/lb-cmp-ladybug-sample-7b8s025e3.mp4",
    link: "https://github.com/kr0ma-git/GradeMaster-V0.2"
  }
];

const techStackIcons = [
  {
    name: "React / React Native",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Node",
    modelPath: "/models/node-transformed.glb",
    scale: 4.8,
    rotation: [0, -20.5, 0],
  },
  {
    name: "Three",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, 2.3, 0],
  },
  {
    name: "C# / ASP.NET Backend",
    modelPath: "/models/e3a5d3e564a64fb0ab39665f44632520.glb",
    scale: 0.08,
    rotation: [0, 0, 0],
  },
  {
    name: "Tailwind CSS",
    modelPath: "/models/tailwind_css_logo__3d_model.glb",
    scale: 50,
    rotation: [0, 0, 0],
  }
]

const socials = [
  { 
    label: "GitHub",
    href: "https://github.com/kr0ma-git" 
  },
  { 
    label: "Facebook",
    href: "https://facebook.com/waynekousuke.yano" 
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wayne-kousuke-yano-53335a352"
  },
];


export {
    links,
    skills,
    projects,
    techStackIcons,
    socials
}