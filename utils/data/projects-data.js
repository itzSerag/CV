import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Document Chat App - DocTalker',
        description: "Me and my team built an AI-powered Document chat Web Application . I have developed API using Express, JS , OpenAI, AWS, and MongoDB. Used OTP via EmailJs, Google for the authentication system. Built AI assistants using OpenAI's latest model. Voice messages are converted to text  , The app fetches data from pdfs , .docx , urls (any website , youtube transcript) , handwritten pdf with highest accuracy and chunk data into samller piceses then generates embeddings for each chunk then process these embeddings and user query embedding and make semmentic serach over the pdf chunks , summerize the pdfs , clean code and highest authentication and security standards. ", 
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS S3', 'Node Mailer',
         , 'Nginx' , 'Embeddings' , 'MongoDB Transactions' , 'JWT' , 'Gemini' , 'VectorBD' ,
            'semantic search' , 'huggingface'],
        role: 'Backend Developer',
        code: '',
        demo: '',
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