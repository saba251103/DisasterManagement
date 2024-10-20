import './App.css';
import Home from './Home';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Predict from './predict';
import Newfile from './newfile';
import Dashboard from './dashboard';
import DisasterManagementTips from './tips';

function App() {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        script.id = 'google-translate-script';

        document.body.appendChild(script);

        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,es,fr,de,hi,zh-CN', // Add more languages as needed
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          }, 'google_translate_element');
        };
      }
    };

    addGoogleTranslateScript();
  }, []);

  const speakAltText = () => {
    const images = document.querySelectorAll('img'); // Select all image elements
    const altTexts = Array.from(images)
      .map((img) => img.alt) // Extract the alt text
      .filter((text) => text); // Filter out empty alt texts

    if (altTexts.length > 0) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = altTexts.join('. '); // Join all alt texts into a single string
      speech.lang = 'en-US'; // Set the language
      window.speechSynthesis.speak(speech); // Speak the alt texts
    } else {
      alert('No alt text available to speak.');
    }
  };

  return (
    <Router>
      <div className='App'>
        {/* Google Translate Element */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div id="google_translate_element"></div>
          
          {/* Button to trigger text-to-speech for alt text */}
        
        </div>
        
        {/* Routes for your app */}
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/newfile" element={<Newfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tips" element={<DisasterManagementTips />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
