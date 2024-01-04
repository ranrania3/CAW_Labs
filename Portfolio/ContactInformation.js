import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { Link } from 'react-scroll';

const main ={
fontFamily :'cursive',
};
const title ={
  justifyContent: 'center',
  textAlign: 'center',
  paddingTop: '1em',
  fontSize: '30px',
  letterSpacing: '2px',
  textDecoration: 'underline',
};
const p = {
  textAlign : 'center',
  fontSize : '20px',
  padding:'1em 2em 1em 2em',
  fontWeight : 'bold',
  color : '#505050',
};
const first ={
  justifyContent: 'center',
  textAlign: 'center',
  display :'flex',
  fontSize : '25px',
  color : 'purple',
};
const email = {
paddingRight : '2em',
};
const second ={
  justifyContent: 'center',
  textAlign: 'center',
  display :'flex',
  fontSize : '25px',
  paddingBottom: '3em',
};
const facebook ={
  paddingRight :'2em',
  color : 'blue',
};
const instagram ={
  paddingRight :'2em',
  color : '#fc5185',
};
const telegram ={
  color : '#8bcfcc',
};
const bottom ={
  bottom :0,
  backgroundColor:'#970747',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%', 
  padding : '1em 0 0.5em 0'
};
const botp ={
  color :'white',
};
const namee ={
  textDecoration : 'underline',
  cursor : 'pointer',
}
const ContactInformation = () => {
  return (<div style={main}>
    <div id='contact'>
      <h2 style={title}>Contact Informations</h2>
    </div>
    <p style={p}>Get in touch with me via Social Media, Email or Phone Number</p>
    <div style={first}>
    <p style={email}><MdEmail /> Email: rania.namer@univ-constantine2.dz</p>
    <p><FaPhoneAlt /> Phone: 0658866111</p>
    </div>
    <div style={second}>
    <a style={facebook} target='_blank' href='
https://www.facebook.com/profile.php?id=100012205020421&mibextid=nb1MFm3jZYALyyMy'><FaFacebook />Facebook</a>
    <a style={instagram} target='_blank' href='https://www.instagram.com/_.ran_nia'><FaInstagramSquare />Instagram</a>
    <a style={telegram} target='_blank' href='https://t.me/ran261'><FaTelegram />Telegram</a>
    </div>
    <div style={bottom}>
    <hr />
    <p style={botp}>© Copyright 2024. Made by <Link to = 'home' style={namee}>Namer Rania</Link></p>
    </div>
    </div>
  );
};

export default ContactInformation;
