import React from 'react';
import { BsArrowRightCircleFill } from "react-icons/bs";
const main ={
  padding:'0 2em 0 2em',
  fontFamily:'cursive',
};
const Container = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom :'3em',
};
const p = {
  textAlign : 'center',
  fontSize : '20px',
  padding:'2em 2em 2em 2em',
  fontWeight : 'bold',
  color : '#505050',
};
const skillBox = {
  border: '2px solid #673ab7',
  borderRadius: '5px',
  padding: '10px',
  margin: '10px',
  textAlign: 'center',
  minWidth: '120px',
};
const Box = {
  border: '2px solid gray',
  borderRadius: '5px',
  padding: '5px',
  margin: '5px',
  textAlign: 'center',
};
const title ={ 
  justifyContent: 'center',
  textAlign: 'center',
  paddingTop: '1em',
  fontSize: '30px',
  letterSpacing: '2px',
  textDecoration: 'underline',
};
const exper ={
  paddingBottom :'3em',
};
const Experience = ({ title, place, duration, details, achievements, technologies }) => (
  <div>
    <h3><BsArrowRightCircleFill /> {title} at {place}</h3>
    <p>for {duration}</p>
    <p>{details}</p>
    <p>Achievements: {achievements}</p>
    <div style={Container}>
      {technologies.map((tech, index) => (
        <div key={index} style={Box}>
          {tech}
        </div>
      ))}
    </div>
  </div>
);
const Skills = () => {
  const skill = ['HTML', 'CSS', 'JavaScript', 'React', 'Flutter basics', 'SQL', 'PHP', 'PhpMyAdmin', 'Java', 'Python basics'];

  return (
    <div style={main}>
      <div id='skills' style={title}>
      <h2>Skills</h2></div>
      <p style={p}>These are my skills and basically some of the languages i am intrested in and i keep working and practicing on getting better in</p>
      <div style={Container}>
        {skill.map((skill, index) => (
          <div key={index} style={skillBox}>
            {skill}
          </div>
        ))}
      </div>
      <div style={title} id='experience'>
    <h2 >Experience</h2>
    </div>
    <div style={exper}>
 <p style={p}>Regarding my humble experience that is what i can talk about</p>
< Experience
title="License Project"
place = "NTIC Department"
duration ="3 months"
details = "Developped a complete needed Web Application called 'Stagiare' that helps interns send an internship request that has all the needed informations about them to a company so they can participate in it and then the request needs to be first checked and approved by the head of the department so it can be sent to the internship chief that will also check it and then approve or decline it"
achievements = "developed the front end and back end of the application and then created and managed the database"
technologies ={['HTML','CSS','PHP','PhpMyAdmin']}
/>
< Experience
title="Diffrent Endless TPs"
place = "NTIC Department"
duration ="Almost 4 Years"
details = "Developed diffrent web applications with multi features and diffrent goals"
achievements = "developed front end mostly and back end and managed database using SQL most of the time"
technologies ={['HTML','CSS','JavaScript','PHP','PhpMyAdmin','SQL','React']}
/>
    </div>
    </div>
  );
  
};

export default Skills;
