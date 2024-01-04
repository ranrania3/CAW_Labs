import React from 'react';
import stagiare from './stagiare.png';
import maze from './maze.png';
import task from './tasklist2.png';
import './App.css'
const main = {
  fontFamily: 'cursive',
};
const projecttitl = {
  justifyContent: 'center',
  textAlign: 'center',
  paddingTop: '1em',
  fontSize: '30px',
  letterSpacing: '8px',
  textDecoration: 'underline',
};
const hp = {
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '20px',
  color: '	#505050',
};
const imge = {
  width: '600px',
  paddingLeft: '3em',
   
  };
  
const projet = {
  display: 'flex',
  alignItems: 'center',
  paddingLeft :'3em',
  paddingTop :'2em',
};
const prop ={
paddingLeft :'3em',
paddingRight : '2em',
fontSize : '25px',
};
const ProjectShowCase = () => {
  const openStagiare = () =>{
window.open('http://localhost/m%C3%A9moire/index.html', '_blank');
  };
    const openMaze = () =>{
  window.open('http://localhost/CAW_Lab2_Grp2_Namer.Rania_Lalia.Walid/Lab2_maze.html', '_blank');
    };
    const openTasklist =()=>{
      window.open('http://localhost:3001/','_blank');
    };
  return (
    <div  style={main}>
      <div  id='projects' style={projecttitl}>
        <h1>PROJECTS</h1></div>
      <div style={hp}>
        <p >Here are some of the projects i created</p></div>
      <div style={projet}>
        <img style={imge} src={stagiare} />
        <p style={prop}>Stagiare is a very useful website that i created to help interns (stagiars) send a request to companies to participate in diffrent internships and helps companies accept or reject them quickly</p>
      </div>
      <button className='btn' onClick={openStagiare}>Check it</button>
      <div style={projet}>
        <img style={imge} src={maze} />
        <p style={prop}>The Amazing Mouse Maze is more of a fun application that i created it is a little challenging and i used React JS to develop it</p>

      </div>
      <button className='btn'  onClick={openMaze}>Check it</button>
      <div style={projet}>
        <img style={imge} src={task} />
        <p style={prop}>Task List is a website i made to ease tasks and order it and make achieving it more fun and easy and kinda intresting i also used React JS in this one which was so helpful</p>

      </div>
      <button className='btn' onClick={openTasklist}>Check it</button>
    </div>
  );
};

export default ProjectShowCase;
