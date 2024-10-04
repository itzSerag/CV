import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "AI Powered Document Chat App - DocTalker",
    description:
      "Me and my team built an AI-powered Document chat Web Application . I have developed API using Express, JS , OpenAI, AWS, and MongoDB. Used OTP via EmailJs, Google for the authentication system. Built AI assistants using OpenAI's latest model. Voice messages are converted to text  , The app fetches data from pdfs , .docx , urls (any website , youtube transcript) , handwritten pdf with highest accuracy and chunk data into samller piceses then generates embeddings for each chunk then process these embeddings and user query embedding and make semmentic serach over the pdf chunks , summerize the pdfs , clean code and highest authentication and security standards. ",
    tools: [
      "Express",
      "MongoDB",
      "OpenAI API",
      "AWS S3",
      "Node Mailer",
      ,
      "Nginx",
      "Embeddings",
      "MongoDB Transactions",
      "JWT",
      "Gemini",
      "VectorBD",
      "semantic search",
      "huggingface",
    ],
    role: "Backend Developer",
    code: "https://github.com/itzSerag/DocTalker__Backend",
    demo: "",
    image:
      "https://drive.google.com/file/d/1G-A5Qgy83hMG_To0dvWsSMpAYmpP0rR-/view?usp=drive_link",
  },
  {
    id: 2,
    name: "Foodish App for food delivery",
    description:
      "Develop a robust food delivery backend managing customers, vendors, delivery users, payments, OTP-based authentication, and real-time geographic tracking to assign the nearest available delivery users within a vendor's service area and handle User's Voucher for company discounts and provide admin crud operations for dashboard RBA ",
    tools: ["Express", "MongoDB", "Typescript", "SMS - OTP ", "Stripe", "JWT"],
    role: "Backend Developer",
    code: "https://github.com/itzSerag/Food_Delivary",
    demo: "",
    image:
      "https://drive.google.com/file/d/14-OOOLt_Cjsn8DVUXFKlrFxeYHgecTG7/view?usp=drive_link",
  },
  {
    id: 3,
    name: "Online Courses English Academy",
    description:
      "Creating a high-scale online courses application utilizing NestJS and TypeScript for a clean, maintainable code structure, PostgreSQL with Prisma ORM and barrel pattern design for efficient database management, AWS SES for OTP-based secure user authentication, and seamless integration of Facebook and Google OAuth using Passport for easy login. Additionally, the app incorporates Paymob Gateway for fast and secure transactions, while AWS S3 is leveraged for data storage with CDN capabilities to ensure quick access",
    tools: [
      "NestJs",
      "Postgres",
      "Prisma",
      "Paymob",
      "AWS S3",
      "JWT",
      "AWS SES",
    ],
    role: "Backend Developer",

    code: "https://github.com/itzSerag/Online_Courses_Backend",
    demo: "https://englishome.netlify.app/",
    image: crefin,
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
