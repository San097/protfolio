export const person = {
  name: "Santosh Kumar G",
  email: "santosh.ds.rymec@gmail.com",
  phone: "+91 77955 42969",
  location: "Ballari, Karnataka, India",
};

export const nav = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

export const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Email", href: "mailto:santosh.ds.rymec@gmail.com" },
];

export const tools = ["Python", "SQL", "Power BI", "TensorFlow", "OpenCV", "Flask", "Pandas", "Docker"];

export const achievements = [
  { number: "92%", label: "Accuracy on the road-surface CNN classifier" },
  { number: "30K", label: "E-commerce orders analysed end to end" },
  { number: "4", label: "Full-stack and analytics projects shipped" },
  { number: "8.33", label: "GPA in B.Tech, Data Science" },
];

type Project = {
  title: string;
  type: string;
  category: string;
  date: string;
  blurb: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageSrc?: string;
};

export const projects: Project[] = [
  {
    title: "Road Pavement Detection",
    type: "Full-stack AI web application",
    category: "Machine Learning",
    date: "Mar 2026 – Apr 2026",
    blurb:
      "Detects potholes, cracks and normal road surfaces from uploaded images using a CNN, with confidence scoring and a responsive monitoring dashboard. Deployed for public access.",
    stack: ["Python", "Flask", "TensorFlow", "OpenCV"],
    githubUrl: "https://github.com/San097/Road_pavement_project",
    demoUrl: "https://road-pavement-project.vercel.app/",
    imageSrc: "/img/road-pavement-dashboard.png",
  },
  {
    title: "E-Commerce Sales Analytics",
    type: "End-to-end data analytics",
    category: "Data Analytics",
    date: "30K orders",
    blurb:
      "Cleaned data in MySQL, explored it in Python and built a 4-page Power BI dashboard (Executive Summary, Sales, Customer, Product) with DAX measures and slicers. Surfaced top categories, seasonal revenue trends and the best traffic sources.",
    stack: ["MySQL", "Pandas", "Seaborn", "Power BI", "DAX"],
    githubUrl: "https://github.com/San097/Ecommerce-Sales-Analytics-main",
    imageSrc: "/img/ecommerce-sales-dashboard.jpg",
  },
  {
    title: "Code Gen AI",
    type: "AI-powered full-stack coding platform",
    category: "Full-Stack",
    date: "Sep 2025 – Nov 2025",
    blurb:
      "A coding platform built on Next.js 15 and React 19, integrating the Vercel AI SDK and multiple AI coding agents with Vercel Sandbox for code generation and safe execution.",
    stack: ["Next.js 15", "React 19", "Vercel AI SDK"],
    githubUrl: "https://github.com/San097/code-gen-AI",
    demoUrl: "https://code-gen-ai-phase2.vercel.app/",
    imageSrc: "/img/code-gen-ai-preview.png",
  },
  {
    title: "Student Management System",
    type: "Full-stack web application",
    category: "Full-Stack",
    date: "Mar 2025 – Apr 2025",
    blurb:
      "CRUD application for student records with authentication, role-based access and a responsive Bootstrap interface, backed by Flask and MySQL.",
    stack: ["Flask", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/San097/Student-management-system",
    imageSrc: "/img/student-management-dashboard.png",
  },
];

export const experience = [
  {
    role: "Machine Learning Intern",
    org: "Contriver, Bengaluru",
    date: "Feb 2026 – May 2026",
    points: [
      "Built and deployed a full-stack Road Pavement Detection system with TensorFlow, OpenCV and Flask.",
      "Engineered CNN models that classify potholes, cracks and normal surfaces with 92% accuracy and confidence scoring.",
      "Built image-processing workflows in Flask and integrated the model with the web application.",
      "Worked across end-to-end ML deployment, image preprocessing and dashboard integration.",
    ],
  },
  {
    role: "AI Engineer Program",
    org: "DataMites (IABAC & NASSCOM-aligned)",
    date: "Ongoing",
    points: [
      "10-month, 400+ hour programme with live training and capstone projects.",
      "Covers Python, statistics, machine learning, feature engineering, SQL, MongoDB, Git and BI tools.",
      "Upcoming: deep learning, computer vision, NLP, generative AI and agentic AI.",
    ],
  },
];

export const education = [
  { title: "B.Tech in Data Science", place: "RYMEC Engineering College, Ballari", date: "Dec 2023 – May 2026", note: "GPA 8.33" },
  { title: "Diploma in Computer Science", place: "Government Polytechnic College, Ballari", date: "Jan 2023 – Oct 2023", note: "GPA 7.1" },
  { title: "SSLC", place: "SG High School, Ballari", date: "Jun 2019 – Mar 2020", note: "GPA 6.9" },
];

export const certifications = [
  { title: "Data Analytics Job Simulation", by: "Deloitte (via Forage) — Data Analysis & Forensic Technology" },
  { title: "The Complete Full-Stack Web Development Bootcamp", by: "Udemy (Dr. Angela Yu) — 62 hours" },
  { title: "Internship Certificate", by: "Contriver — Web Development & Data Science, 90 days" },
];

export const skills = [
  { group: "Programming & Query", items: ["Python", "SQL", "Java"] },
  { group: "Analysis & Visualization", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"] },
  {
    group: "Machine Learning",
    items: ["Linear & Logistic Regression", "Decision Tree", "Random Forest", "KNN", "SVM", "Naive Bayes", "K-Means"],
  },
  { group: "Deep Learning & Vision", items: ["TensorFlow", "CNN", "OpenCV"] },
  { group: "Data Preprocessing", items: ["Data Cleaning", "EDA", "Feature Engineering"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "NoSQL"] },
  { group: "Deployment & Tools", items: ["Flask", "Docker", "Git", "GitHub", "Vercel", "Render"] },
];

export const languages = ["English", "Hindi", "Kannada", "Telugu"];
