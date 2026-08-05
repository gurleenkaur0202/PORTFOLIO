import { ProfileData, Skill, EducationItem, ExperienceItem, ProjectItem, AchievementItem } from './types';

export const profileData: ProfileData = {
  name: "Gurleen Kaur",
  tagline: "Full Stack Developer | AI Enthusiast | UI/UX Designer",
  subtitle: "Bachelors in technology in computer science engineering at K.R. Mangalam University (2023–2027). Based in Gurugram / Faridabad, India.",
  email: "kaurgurleen0202@gmail.com",
  phone: "+91-8178126477",
  location: "Faridabad / Gurugram, Haryana, India",
  github: "https://github.com/gurleen0202",
  linkedin: "https://linkedin.com/in/gurleen-kaur-02",
  avatar: "<img src='https://i.postimg.cc/sQmGNN9j/Whats-App-Image-2026-08-05-at-3-17-52-PM.jpg' border='0' alt='Whats-App-Image-2026-08-05-at-3-17-52-PM'>",
  bio: [
    "A curious mind in code and a creative soul in fashion—that's who I am. Currently pursuing my B.Tech in Computer Science Engineering at K.R. Mangalam University, I live at the intersection of technology and artistry.",
    "When I'm not writing lines of code or exploring new AI innovations, I bring concepts of aesthetics and expression to life. With a passion for full-stack development, AI/ML, and UI/UX design, I'm on a mission to blend data, design, and innovation.",
    "I thrive in spaces where logic meets creativity—constantly learning, experimenting, and shaping ideas that bridge software engineering and user experience."
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (OOP)",
    "Data Analysis & Visualization"
  ],
  resumePdfUrl: "https://raw.githubusercontent.com/gurleen0202/portfolio-assets/main/Gurleen_Kaur_Resume.pdf"
};

export const skillsData: Skill[] = [
  // Technical / Programming Languages
  { name: "Java", category: "technical", level: 85, iconName: "Code2", description: "Object-oriented development & core algorithms" },
  { name: "Python", category: "technical", level: 88, iconName: "Terminal", description: "Data analysis, AI scripting, & backend logic" },
  { name: "C++", category: "technical", level: 80, iconName: "Cpu", description: "Data structures & low-level memory concepts" },
  { name: "HTML5 / CSS3", category: "technical", level: 95, iconName: "Layout", description: "Semantic markup, modern layouts & animations" },
  { name: "JavaScript / React", category: "technical", level: 90, iconName: "Globe", description: "Interactive SPAs, state management & hooks" },
  
  // AI / ML Skills
  { name: "Neural Networks", category: "ai", level: 80, iconName: "BrainCircuit", description: "Deep learning fundamentals & architecture" },
  { name: "OpenAI GPT / LLMs", category: "ai", level: 92, iconName: "Sparkles", description: "Prompt engineering, evaluation & post-training" },
  { name: "AI Alignment & Post-Training", category: "ai", level: 88, iconName: "Bot", description: "Dataset curation, RLHF concepts & response refinement" },

  // Tools & Libraries
  { name: "Git & GitHub", category: "tools", level: 90, iconName: "GitBranch", description: "Version control, branching & team workflows" },
  { name: "MS Excel / Office Suite", category: "tools", level: 85, iconName: "FileSpreadsheet", description: "Data organization, reporting & spreadsheets" },

  // UI/UX Design
  { name: "UI/UX Design", category: "design", level: 90, iconName: "Palette", description: "User research, wireframing & component systems" },
  { name: "Figma & Adobe XD", category: "design", level: 85, iconName: "Figma", description: "High-fidelity mockups & interactive prototypes" },

  // Soft Skills & Professional Competencies
  { name: "Full Stack Development", category: "soft", level: 90, iconName: "Layers", description: "End-to-end web app architecture" },
  { name: "Team Collaboration", category: "soft", level: 95, iconName: "Users", description: "Cross-functional communication & agile participation" },
  { name: "Research Skills", category: "soft", level: 88, iconName: "Search", description: "Problem analysis & exploring emerging tech" },
  { name: "Project Management", category: "soft", level: 85, iconName: "Kanban", description: "Task prioritization & milestone delivery" },
  { name: "Effective Communication", category: "soft", level: 92, iconName: "MessageSquare", description: "Clear documentation & presentation skills" },
  { name: "Data Visualization", category: "soft", level: 88, iconName: "PieChart", description: "Converting complex metrics into visual insights" }
];

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    institution: "K.R. Mangalam University",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "Aug 2023 – May 2027",
    score: "CGPA: 7.0 / 10",
    location: "Gurugram, Haryana, India",
    highlights: [
      "Specializing in Full Stack Development, Artificial Intelligence & Machine Learning",
      "Active participant in tech symposiums, college entrepreneurship initiatives & R&D projects",
      "Relevant Coursework: Data Structures, Database Management Systems (DBMS), OOP, Data Analysis"
    ]
  },
  {
    id: "edu-2",
    institution: "Carmel Convent School",
    degree: "Senior Secondary (Class XII) - Science Stream",
    duration: "2021 – 2023",
    location: "Faridabad, Haryana, India",
    highlights: [
      "Focused on Physics, Chemistry, Mathematics, and Computer Science",
      "Participated in inter-school science symposiums and creative arts activities"
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "LLM Post-Training Intern",
    company: "Ethara.ai",
    duration: "April 2026 – August 2026",
    location: "Remote / Hybrid",
    description: [
      "Worked on diverse AI projects, including Talos, Fenrir, and domain-specific datasets, ensuring accurate and reliable model responses.",
      "Contributed to post-training workflows for large language models by creating, refining, and evaluating high-quality prompts.",
      "Gained hands-on experience with AI alignment, prompt engineering, and model evaluation techniques."
    ],
    skills: ["LLM Post-Training", "Prompt Engineering", "Model Evaluation", "Talos & Fenrir AI", "AI Alignment"]
  },
  {
    id: "exp-2",
    role: "Front-End Developer Intern",
    company: "Writo Education Pvt. Ltd",
    duration: "June 2025 – August 2025",
    location: "India",
    description: [
      "Designed and developed the official website for OPS Naturals, creating responsive and user-friendly interfaces using HTML, CSS, and JavaScript.",
      "Built UI/UX mockups and interactive web pages to strengthen brand identity and improve user experience.",
      "Collaborated with the development and design teams to deliver project milestones on time following modern web practices."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "UI/UX Mockups", "Responsive Web Design", "Brand Identity"]
  },
  {
    id: "exp-3",
    role: "UI/UX & Front-End Intern",
    company: "Lakshay Industries",
    duration: "June 2024 – July 2024",
    location: "India",
    description: [
      "Assisted in designing intuitive UI/UX layouts and implementing front-end design concepts for internal learning solutions.",
      "Worked closely with the engineering team to enhance software development workflows and strengthen collaboration across projects."
    ],
    skills: ["UI/UX Layouts", "Front-End Concepts", "Internal Learning Tools", "Prototyping"]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Yggdrasil",
    tagline: "Every Day Has a Story. Let Yggdrasil Remember It.",
    description: "A modern, secure, and beautifully designed digital journal and productivity platform combining a diary, planner, calendar, and personal knowledge base into one seamless experience.",
    longDescription: "Yggdrasil is built for individuals who want an all-in-one space for daily reflections, goal tracking, and knowledge management. Features rich text editing, encrypted local storage, habit tracking, and tag-based knowledge discovery.",
    category: "ai",
    tags: ["React", "TypeScript", "Tailwind CSS", "Productivity Platform", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    githubUrl: "https://github.com/gurleen0202/yggdrasil",
    demoUrl: "https://yggdrasil-journal.vercel.app"
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-1",
    title: "College Entrepreneurship Initiative — AtoZ Naturals",
    organization: "K.R. Mangalam University",
    date: "2024",
    description: "Collaborated with AtoZ Naturals as part of a college entrepreneurship initiative, actively contributing to brand promotion, strategic digital marketing, and customer engagement.",
    iconName: "TrendingUp"
  },
  {
    id: "ach-2",
    title: "LLM Post-Training & Prompt Engineering Contributions",
    organization: "Ethara.ai",
    date: "2026",
    description: "Recognized for high-quality prompt creation, model evaluation, and alignment work on specialized AI models like Talos and Fenrir.",
    iconName: "Award"
  },
  {
    id: "ach-3",
    title: "Tech & Fashion Tech R&D Exploration",
    organization: "K.R. Mangalam University & Industry Workshops",
    date: "2023 - 2026",
    description: "Pioneered creative exploration bridging fashion design principles with digital tech and data-driven user experiences.",
    iconName: "Sparkles"
  }
];

export const faqData = [
  {
    question: "Who is Gurleen Kaur?",
    answer: "Gurleen Kaur is a Computer Science and Engineering student at K.R. Mangalam University (2023–2027) based in Haryana, India. She is passionate about Full Stack Development, AI/ML, and UI/UX Design."
  },
  {
    question: "What internship experience does Gurleen have?",
    answer: "Gurleen has completed 3 key internships: LLM Post-Training Intern at Ethara.ai (working on Talos & Fenrir AI models), Front-End Developer Intern at Writo Education (building OPS Naturals platform), and UI/UX Intern at Lakshay Industries."
  },
  {
    question: "What programming languages does Gurleen know?",
    answer: "Gurleen is skilled in Java, Python, C++, HTML5, CSS3, JavaScript, TypeScript, React, and SQL (DBMS)."
  },
  {
    question: "How can I contact Gurleen?",
    answer: "You can reach Gurleen via email at kaurgurleen0202@gmail.com or call her directly at +91-8178126477."
  }
];
