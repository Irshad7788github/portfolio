 import React from 'react';
 import Navbar from './components/Navbar/Navbar';
 import Intro from './components/Intro/Intro';
 import Skills from './components/Skills/Skill';
 import Works from './components/Works/Work';
 import Contact from './components/Contact/Contact';
 import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
       <Skills/>
       <Works/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
