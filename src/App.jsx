// src/App.jsx
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import AuthForms from './components/AuthForms';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`font-sans transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Header 
          onSignIn={() => setSignInOpen(true)} 
          onSignUp={() => setSignUpOpen(true)}
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
        <Hero />
        <About />
        <Features />
        <AuthForms
          isSignInOpen={isSignInOpen}
          setSignInOpen={setSignInOpen}
          isSignUpOpen={isSignUpOpen}
          setSignUpOpen={setSignUpOpen}
        />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}