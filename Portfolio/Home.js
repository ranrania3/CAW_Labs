import React from 'react';
import { Link } from 'react-scroll';
import profile from './Picsart_24-01-02_14-14-54-673.jpg'
import './App.css'
const Home = () => {
    const h1 = {
      letterSpacing : '3px',
     paddingLeft:'10px',
     whiteSpace: 'nowrap',
     cursor :'pointer',
    };
    const container = {
        display : 'flex',
        alignItems : 'center',
        paddingLeft :'2em',
        backgroundColor:'violet',
        paddingBottom:'0.5em',
        position : 'fixed',
        zIndex: 1000,
        top: 0,
  left: 0,
  right : 0,
  transition: 'background-color 0.3s ease-in-out',
    };
    const A = {
marginRight:'3em',
transition: 'transform 0.3s ease-in-out',

    };
    const Nav = {
        display : 'flex',
        alignItems : 'center',
        paddingLeft :'35em',
        cursor : 'pointer',
       
    };
    const infos = {
      backgroundColor:'#fde9df',
        textAlign : 'center',
        alignItems : 'center',
        paddingTop : '9em',
        paddingBottom : '9em',
    };
    const h11 = {
        fontSize : '6em',
    };
    const p = {
        fontWeight : 'bold',
        color : 'gray',
    };
    const img = {
        width:'50px',
        height : '60px',
     borderRadius : '50%',
     cursor:'pointer',
    }
    const main ={
      fontFamily :'cursive',
    };
  return (
    <div style={main}>
        <div style={container}>
<Link to="home" >
        <img style={img} src={profile} />   
</Link>
<Link to='home'><h3 style={h1}>NAMER RANIA</h3></Link>
      <div style={Nav}>
      <Link to="projects" style={A} className='link'>
            Projects
          </Link>
          <Link to="skills" style={A} className='link'>
            Skills
          </Link>
          <Link to="experience" className='link' style={A}>
            Experience
          </Link>
          <Link to="contact" className='link' style={A}>
            Contact
          </Link>
</div>
      </div>
     
      <div style={infos} id='home'>
      <h1 style={h11}>I'm Namer Rania</h1>
      <h2>Welcome to my Portfolio</h2>
      <p style={p}>A mini Web Developer building and developing basic simple but effective and intresting as well Websites and Web Applications,</p>
      <p style={p}>Down here you will find informations about me including my skills and some projects and other things that can be helpful</p>
      </div>
     
    </div>
  );
};

export default Home;
