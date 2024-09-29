import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio Serag Eldien - Software Developer',
  description: 'This is the portfolio of Serag Eldien. I am a Backend developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <meta favicon="./favicon.ico" /> */}
      <meta name="google-site-verification" content="IJmxHYDpir-qXYB7SshaYEpjbtGSIjDBL5MtQzEqyYY" />
      <meta keywords="Serag Eldien, Serag, Eldien, Portfolio, Software Developer, Backend Developer, Fullstack Developer, Web Developer, Developer, Programmer, Software Engineer, Software, Backend, Frontend, Fullstack, Web, Developer, Programmer, Software Engineer, Software, Backend, Frontend, Fullstack, Web" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Portfolio Serag Eldien - Software Developer" />
      <meta property="og:description" content="This is the portfolio of Serag Eldien. I am a Backend developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges." />
      <meta property="og:image" content="https://drive.google.com/file/d/1eQ5SUHLRKtHXuo0N2SySJx-6noJg4NbD/view" />
      <meta property="og:url" content="https://serag-eldein-portfolio.netlify.app/" />
      <meta property="og:site_name" content="Portfolio Serag Eldien - Software Developer" />
      <meta name="description" content="This is the portfolio of Serag Eldien. I am a Backend developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges." />
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  )
};
