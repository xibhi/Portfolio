import { Icons } from "@/components/icons";
import {
  HomeIcon,
  NotebookIcon,
  ShieldAlert,
  Wifi,
  Terminal,
  Box,
  Atom,
} from "lucide-react";
import { Python } from "@/components/ui/svgs/python";

export const DATA = {
  name: "Sibhi Balamurugan",
  initials: "SB",
  url: "https://github.com/xibhi",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "I build systems, I break systems, I build systems that build systems, and I build systems that break systems.",
  summary:
    "Started programming at the age of 13, I got a keen interest towards Cyber Security and have explored multiple dimensions of it. I progressively worked on multiple technologies ranging from software to security to hardware, which gave me a brief exposure towards the industry. You can contact me for a coke or to get your idea into code or to consult for your software, security or hardware needs.",
  avatarUrl: "/avatar.webp",
  skills: [
    { name: "Web App Exploitation", icon: ShieldAlert },
    { name: "Wireless Security Assessment", icon: Wifi },
    { name: "Scripting and Automation", icon: Terminal },
    { name: "2D/3D Concept Design", icon: Box },
    { name: "Physics Programming", icon: Atom },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/writeups", icon: NotebookIcon, label: "Writeups" },
  ],
  contact: {
    email: "",
    tel: "",
    social: {
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/_xibhi_",
        icon: Icons.instagram,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/xibhi_",
        icon: Icons.x,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sibhibalamurugan",
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/xibhi",
        icon: Icons.github,
        navbar: true,
      },
      Discord: {
        name: "Discord",
        url: "https://discord.com/users/xibhi",
        icon: Icons.discord,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Secure Worldz",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Senior Director",
      logoUrl: "/secure-worldz.webp",
      start: "Sep 2024",
      end: "Present",
      description:
        "Where I was able to network, acquire experience and earn knowledge. This company set the start of my professional career. I dealt with various web development and security technologies.",
    },
    {
      company: "Upwork",
      href: "https://www.upwork.com",
      badges: [],
      location: "Remote",
      title: "Freelancer",
      logoUrl: "/upwork.webp",
      start: "Jul 2022",
      end: "Present",
      description:
        "Freelancing is one of the best ways to acquire amazing knowledge and experience from the designers, developers and hustlers all over the world, from sitting in my home. I always freelance when I feel I reached an impasse, to get myself moving.",
    },
  ],
  education: [
    {
      school: "Sri Ramakrishna College of Arts and Science",
      href: "https://srcas.ac.in/",
      degree: "B.Sc. Electronics and Communication Systems",
      logoUrl: "/srcas.webp",
      start: "Aug 2025",
      end: "Apr 2028",
    },
  ],
  projects: [
    {
      title: "zibi",
      href: "https://github.com/xibhi/zibi",
      dates: "2026",
      active: true,
      description:
        "A cute clipboard manager that lives entirely in your terminal. Copy, pin, share, transform and revisit clipboard history without leaving the command line — all without touching a mouse or opening a browser.",
      technologies: ["Python", "SQLite", "CLI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/xibhi/zibi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "PigOS",
      href: "https://pigos.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "An opinionated Hyprland desktop environment for Arch Linux. Built to understand the stack. Shared because it works.",
      technologies: [
        "Shell Scripting",
        "Hyprland",
        "Wayland",
        "Waybar",
        "Arch Linux",
      ],
      links: [
        {
          type: "Website",
          href: "https://pigos.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/xibhi/pigos",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  reading: [
    {
      title: "How to Fail at Almost Everything and Still Win Big",
      href: "https://www.youtube.com/watch?v=uy6-fq8PwNk",
      type: "Video",
    },
    {
      title: "24 Cognitive Biases",
      href: "https://www.youtube.com/watch?v=IRfv49wTkfw",
      type: "Video",
    },
    {
      title: "Pmarca Guide to Career Planning: Introduction",
      href: "https://pmarchive.com/guide_to_career_planning_part0.html",
      type: "Article",
    },
    {
      title: "The Melting Ice Cube, Airchat & Pieter Levels",
      href: "https://www.littlealmanack.com/p/the-melting-ice-cube-airchat-and?open=false#%C2%A7best-book-passage-no-context-needed",
      type: "Article",
    },
    {
      title: "Edutainment is Not Learning",
      href: "https://giansegato.com/essays/edutainment-is-not-learning",
      type: "Article",
    },
    {
      title: "How to Do Great Work",
      href: "https://www.paulgraham.com/greatwork.html",
      type: "Essay",
    },
    {
      title: "Crony Beliefs",
      href: "https://meltingasphalt.com/crony-beliefs/",
      type: "Essay",
    },
    {
      title: "The Techno-Optimist Manifesto",
      href: "https://a16z.com/the-techno-optimist-manifesto/",
      type: "Essay",
    },
    {
      title: "What You'll Wish You'd Known",
      href: "https://www.paulgraham.com/hs.html",
      type: "Essay",
    },
    {
      title: "The Tao of Seneca",
      href: "https://tim.blog/2017/07/06/tao-of-seneca/",
      type: "Article",
    },
    {
      title: "Life is Not Short",
      href: "https://dkb.show/post/life-is-not-short",
      type: "Article",
    },
    {
      title: "High Agency",
      href: "https://www.highagency.com/",
      type: "Article",
    },
    {
      title: "Notes on Puzzles",
      href: "https://nabeelqu.substack.com/p/notes-on-puzzles",
      type: "Article",
    },
    {
      title: "You and Your Research",
      href: "https://fs.blog/great-talks/richard-hamming-your-research/",
      type: "Talk",
    },
    {
      title: "Priming",
      href: "https://thedecisionlab.com/biases/priming",
      type: "Article",
    },
    {
      title: "The Lost Art of Logarithms",
      href: "https://www.lostartoflogarithms.com/",
      type: "Article",
    },
    {
      title: "Work Hard",
      href: "https://terrytao.wordpress.com/career-advice/work-hard/",
      type: "Article",
    },
    {
      title: "Advice to Young People, The Lies I Tell Myself",
      href: "https://jxnl.github.io/blog/writing/2024/06/01/advice-to-young-people/",
      type: "Article",
    },
    {
      title: "What I Wish Someone Had Told Me",
      href: "https://blog.samaltman.com/what-i-wish-someone-had-told-me",
      type: "Article",
    },
    {
      title: "How To Be Successful",
      href: "https://blog.samaltman.com/how-to-be-successful",
      type: "Article",
    },
    {
      title: "294 The Five Laws Of Stupidity",
      href: "https://youtu.be/3O9FFrLpinQ",
      type: "Video",
    },
  ],
} as const;
