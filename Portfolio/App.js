
import React, { useEffect } from 'react';
import Home from './Home';
import ProjectShowCase from './ProjectShowCase';
import SkillsAndExperience from './SkillsAndExperience';
import ContactInformation from './ContactInformation';

function App() {
  useEffect(() => {
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, []);
  return (
    
    <div>
      <Home />
      <ProjectShowCase />
      <SkillsAndExperience />
      <ContactInformation />
    </div>
  );
 
}


export default App;
