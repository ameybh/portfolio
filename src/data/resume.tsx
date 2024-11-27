import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amey Bhavsar",
  initials: "AB",
  url: "https://ameybhavsar.com",
  location: "Bengaluru, KA, India",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "Software Engineer. I love building things that help people. Hit me up on Twitter.",
  summary:
    "In 2023, I moved to Bengaluru to build a [video+ai SaaS for a startup](https://tessact.com). In the past, [I pursued a bachelors in computer science](/#education), grew [a small community](https://youtu.be/c4BA3sV98Y4?si=qussCxzyPT0zV_S8&t=802) for teaching web dev and actively competed in [coding competitions](https://www.stopstalk.com/user/profile/bhavsar).",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "PHP",
    "MySQL",
    "NLP",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "iamamey24+portfolio@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/amey-github/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/amey-li/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/amey-twitter/",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:iamamey24@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Tessact",
      href: "https://tessact.com",
      badges: [],
      location: "Bengaluru, KA, India",
      title: "Software Engineer",
      logoUrl: "/tessact_logo.jpg",
      start: "Jul 2022",
      end: "Present",
      description:
        "Built a web app from scratch in Next.js 14, Typescript and Tailwind with NextUI components. Build a commenting experience with video annotations, mentions, hashtags and video time range selection. Build an admin panel to manage workspaces, teams and user roles. Additionally, used framer-motion to build animations and transitions.",
    },
    {
      company: "Entreprenuership Cell, SLRTCE",
      href: "https://www.linkedin.com/company/e-cell-slrtce/",
      badges: [],
      location: "Mumbai, MH, India",
      title: "Web Developer & Technical Coordinator",
      logoUrl: "/ecell_logo.jpg",
      start: "Aug 2020",
      end: "Jul 2021",
      description:
        "Developed a landing page for the cell with css animations and bootstrap. Created a course portal similar to Coursera in React and Material UI for the institute's internal courses.",
    },
    {
      company: "Intech Olympiad",
      href: "https://www.linkedin.com/company/intech-olympiad/",
      badges: [],
      location: "Pune, MH, India",
      title: "Engineer Intern",
      logoUrl: "/intech_logo.jpg",
      start: "Apr 2020",
      end: "Jul 2020",
      description:
        "Designed and developed a robot for specific applications in various sections of hospitals excluding ICU and surgery while focusing on system and user interface design alongside implementing pathfinding algorithms.",
    },
  ],
  education: [
    {
      school: "University of Mumbai",
      href: "https://mu.ac.in/",
      degree: "Bachelor's Degree of Computer Engineering",
      logoUrl: "/mu_logo.jpg",
      start: "2019",
      end: "2023",
    },

    {
      school: "Sathye Collge, HSC Board",
      href: "https://www.sathayecollege.edu.in/",
      degree: "Higher Secondary School Certificate + CS specialization",
      logoUrl: "/sathye_logo.jpg",
      start: "2017",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Saathi - AI Companion for Mental Health",
      href: "https://saysaathi.vercel.app/",
      dates: "Sept 2022 - May 2023",
      active: false,
      description:
        "I developed an AI-powered chatbot platform to make mental health services more accessible. I trained a CNN model on over 100,000 Reddit posts to classify user messages into depression, anxiety, or bipolar disorder. I then used a seq2seq model to generate empathetic responses and provide insights to psychiatrists, enabling more informed and effective mental health care.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "TailwindCSS",
        "Keras",
        "Flask",
      ],
      links: [
        {
          type: "Website",
          href: "https://saysaathi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/saathi-video.mp4",
    },
    {
      title: "Alumni Community",
      href: "https://alumni-community.netlify.app/",
      dates: "Feb 2022 - Apr 2022",
      active: true,
      description:
        "Engineered a forum with groups, posts, comments, reply and vote feature like Reddit to solve the communication gap between students and alumnus.",
      technologies: ["React.js", "Material UI", "Express.js", "Mongoose"],
      links: [
        {
          type: "Website",
          href: "https://alumni-community.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/alumni-video.mp4",
    },
    {
      title: "Whatsapp bot to solve Math problems",
      href: "https://dev.to/ameybhavsar/i-made-a-whatsapp-bot-to-solve-math-problems-6ab",
      dates: "June 2020 - May 2021",
      active: true,
      description:
        "I made a Whatsapp bot that could reply with solutions for math problems as text as well as image and return google search results too. I wrote a blog and made a boilerplate repo for everyone to try it out.",
      technologies: ["Node.js", "Puppeteer", "Wolfram|Alpha API"],
      links: [
        {
          type: "Blog",
          href: "https://dev.to/ameybhavsar/i-made-a-whatsapp-bot-to-solve-math-problems-6ab",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ameybh/ww-wra-goog",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/maths-bot2.jpg",
      video: "",
    },
    {
      title: "Assignment Tracker",
      href: "https://github.com/ameybh/asn-tracker",
      dates: "March 2021 - May",
      active: true,
      description:
        "Created a full-stack website to manage institute courses and assignment submissions. Students can upload PDFs and teachers can view it and mark as completed. I integrated CopyLeaks API with webhooks to show plagiarism status for uploaded PDFs.",
      technologies: ["PHP", "Bootstrap"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ameybh/asn-tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [],
} as const;
