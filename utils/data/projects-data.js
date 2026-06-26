import chatty from "./projects-data-img/chatty.png";
import doctalker from "./projects-data-img/doctalker.png";
import foodish from "./projects-data-img/foodish.jpeg";
import online_courses from "./projects-data-img/online_courses.png";

export const projectsData = [
  {
    id: 1,
    name: "DocTalker — AI-Powered Document Chat",
    description:
      "Full-stack AI platform where users chat with PDFs, .docx files, YouTube videos, and web pages. Built vector-search pipelines using OpenAI embeddings and MongoDB Atlas, with semantic chunking and similarity search for maximum accuracy. Supports voice-to-text input, real-time streaming responses, and multi-format document ingestion.",
    tools: [
      "Express",
      "MongoDB",
      "OpenAI API",
      "AWS S3",
      "Nginx",
      "JWT",
      "Gemini",
      "VectorDB",
      "Semantic Search",
      "HuggingFace",
      "Node Mailer",
    ],
    role: "Backend Developer",
    code: "https://github.com/itzSerag/DocTalker__Backend",
    demo: "",
    image: doctalker,
  },
  {
    id: 2,
    name: "Chatty — Real-Time Chat Application",
    description:
      "Scalable real-time messaging platform built with Socket.io and NestJS. Features JWT authentication, private & group chat rooms, online presence tracking, message history pagination via PostgreSQL, and Redis-powered pub/sub for horizontal scalability across multiple server instances.",
    tools: [
      "NestJs",
      "Socket.io",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "JWT",
      "Typescript",
      "Docker",
    ],
    role: "Backend Developer",
    code: "https://github.com/itzSerag/Chatty",
    demo: "",
    image: chatty,
  },
  {
    id: 3,
    name: "Englishome — Online Courses Academy",
    description:
      "Production-ready e-learning backend for an English Academy. Architected with NestJS and PostgreSQL (Prisma ORM), featuring AWS SES for OTP authentication, Google & Facebook OAuth via Passport.js, Paymob payment gateway integration, and AWS S3 + CDN for fast media delivery.",
    tools: [
      "NestJs",
      "Postgres",
      "Prisma",
      "Paymob",
      "AWS S3",
      "JWT",
      "AWS SES",
      "Passport.js",
    ],
    role: "Backend Developer",
    code: "https://github.com/itzSerag/Online_Courses_Backend",
    demo: "https://englishome.netlify.app/",
    image: online_courses,
  },
  {
    id: 4,
    name: "Foodish — Food Delivery Backend",
    description:
      "Robust food delivery platform managing customers, vendors, and delivery users with real-time geographic tracking and nearest-driver assignment algorithm. Features OTP authentication via SMS, Stripe payment integration, admin RBAC dashboard, and vendor voucher management system.",
    tools: ["Express", "MongoDB", "Typescript", "SMS OTP", "Stripe", "JWT"],
    role: "Backend Developer",
    code: "https://github.com/itzSerag/Food_Delivary",
    demo: "",
    image: foodish,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
