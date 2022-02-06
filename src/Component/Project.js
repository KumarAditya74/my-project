import React, { useState } from 'react'

import image from './images/robo1.jpg';
import img1 from './images/cat.jpg';
import img2 from './images/Hackabot.jpg';
import img3 from './images/Spider.jpg';
import img4 from './images/abd.jfif';
import img5 from './images/emma.jfif';
import img6 from './images/neeraj.jfif';
import img7 from './images/professor.jfif';
import img8 from './images/tony.jfif';
import img9 from './images/virat.jfif';
import Robo1 from './videos/Robo1.mp4';
import Robo2 from './videos/Robo2.mp4';
import Robo3 from './videos/Robo3.mp4';
import Robo4 from './videos/Robo4.mp4';
export default function Project(props) {
  const [mode, setMode] = useState('light');
  const toggle = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3f3d45';
      //showAlert("Dark mode has been enabled", "success");
      //document.title = "XTyLo-Dark-Mode";
      //setInterval(() => {
        //document.title = "XTyLo is amazing";
      //}, 2000);
      //setInterval(() => {
        //document.title = "Just install XTyLo";
     // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
     // showAlert("Light mode has been enabled", "success");
      //document.title = "XTyLo-Light-Mode";
    }
  }
  return (
    <div className='body'style={{backgroundColor:props.mode==='dark'?'#5e5978':'white',  color:props.mode==='dark'?'#4287f5':'black'}}>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Let's INNOVE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#home">Home</a>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#type-1">Type-1</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#type-2">Type-2</a></li>
            
           
          </ul>
        </li>
        <a className="nav-link active" href="#team">Our Team</a>
        <a className="nav-link active" href="#join">Collab</a>
        <a className="nav-link active" aria-current="page" href="https://www.linkedin.com/in/kumar-aditya-53a90a214">Contact</a>
      </div>
      
    </div>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggle} id="flexSwitchCheckDefault"/>
        <label className="form-check-label " htmlFor="flexSwitchCheckDefault">DarkMode</label>
      </div>
  </div>
</nav>
<div id='image' data-aos="flip-left">

<img src={image}  />
</div>
<span id='home'></span>
<div className='Box' data-aos="flip-right">
  
  <h1>Welcome! to Let's INNOVE</h1>
  <h3>We create industry working robots, fully automated with modern-era technologies. We are working under partnershiping of NOGOZO private limited. our techs is highly demanding in countries like:- USA,CHINA,JAPAN,KOREA. Our main objective is to create master robots that can automated from anywhere in the world . This could provide a well easy to go life. </h3>
  
</div>

<div className="card-body" >
  <h1 id='title'>Core Projects</h1>

<span id='type-1'>
    </span>
  <div  className="card" data-aos="flip-left">
    
    <img src={img1}/>
    <h1>Project-1</h1><hr/>
    <h3>Nybble: World's Cutest Open Source Quadruped Robotic Cat</h3>
    <p>Nybble is the lightest and fastest robotic cat that really walks. Built on an open source platform, Nybble has endless possibilities in the way you can "teach" tricks, behaviors, and CAT-itude as you program it and help it grow. You can even mount a Raspberry Pi to help Nybble think!
</p>
  </div>
  <div  className="card" data-aos="flip-right">
    <img src={img2}/>
    <h1>Project-2</h1><hr/>
    <h3>Kickstarter hackabot nano</h3>
    <p>Hackabot Nano is a very compact many-in-one plug-and-play Arduino Robot. The goal is to help everyone build a feature-rich robot without all the messy wiring. You simply connect the motors, plug in the sensors and controller and you may start programming. We even provide sample programs to help you get started. </p>

  </div>
  
  <div  className="card" data-aos="flip-left">
    <img src={img3}/>
    <h1>Project-3</h1><hr/>
    <h3>Arduino Spider Robot</h3>
    <p>Robotic spider created by Matt Denton and his company Micromagic Systems. It took four years to create and design it. The robot is capable to transport one person and can circulate on any surface. The robot weighs 4,188 pounds (1,900 kg), is 9.18 feet (2.80 m) high and is powered by a Perkins Engines Turbo Diesel motor of 2.2L of 50Hp that is in charge of the hydraulic system. Several sensors around it help it to walk. The robot is controlled by a computer running the Linux operating system and HexEngine software, which controls the hydraulic solenoid in the legs.</p>

  </div>
  
  </div>
  <span id='type-2'></span>
  <div className="container4" data-aos="zoom-in">
  <h2 id='vid'>Video Projects</h2><br/><br/>
        <div className="video">
            <video width="40%" controls poster="tech1.jpg">
                <source src={Robo1} type="video/mp4"/>

            </video>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
            <video width="40%" controls poster="alien.jfif">
                <source src={Robo2} type="video/mp4"/>
            </video>
        </div>
        
        

        

    </div><br/><br/><br/>
    <div className="container4" data-aos="zoom-in">
       
        <div className="video">
            <video width="40%" controls poster="tech1.jpg">
                <source src={Robo3} type="video/mp4"/>

            </video>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
            <video width="40%" controls poster="alien.jfif">
                <source src={Robo4} type="video/mp4"/>
            </video>
        </div>
       
       

       

    </div><br/><br/><br/><br/><br/><br/><br/><br/>
    <div className="container5" data-aos="zoom-in" style={{backgroundColor:props.mode==='dark'?'#5e5978':'white',  color:props.mode==='dark'?'#4287f5':'black'}}>
        <span id="team"></span>
            <div id="text4">
                <h1>Our Team</h1>
            </div><br/><br/>&nbsp;&nbsp;
            <div className="card2">
                <img id="img11" src={img9}/><br/>
                <h2>Virat Kohli</h2><br/>
                <h4>CEO</h4>
            </div>
            <div className="card2">
                <img id="img11" src={img4}/><br/>
                <h2>A.B Devillers </h2><br/>
                <h4>Production Manager</h4>
            </div>
            <div className="card2">
                <img id="img11" src={img8}/><br/>
                <h2>Tony Stark</h2><br/>
                <h4>Technical Expert</h4>
            </div><br/><br/><br/>
            <div className="card2">
                <img id="img11" src={img6}/><br/>
                <h2>Neeraj Chopra</h2><br/>
                <h4>Director</h4>
            </div>
            <div className="card2">
                <img id="img11" src={img5}/><br/>
                <h2>Emma watson</h2><br/>
                <h4>Designer Head</h4>
            </div>
            <div className="card2">
                <img id="img11" src={img7}/><br/>
                <h2>The Professor</h2><br/>
                <h4>Cyber Expert</h4>
            </div>
        
    </div><br/><br/><br/><br/><br/><br/><br/>
    <div className="container6" data-aos="zoom-in" >
      <span id='collab'></span>
      <h2 id='join'>Join Us</h2><br/><br/>
      <form className="row g-3 needs-validation" novalidate>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom03" className="form-label">State</label>
    <input type="text" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid state.
    </div>
  </div>
  
  <div className="col-md-3">
    <label htmlFor="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" required/>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
 
  <div className="col-12">
    <button className="btn btn-primary" type="submit" >Submit form</button>
  </div>
</form>

    </div><br/><br/><br/>
   
 
    <div class="container7"style={{backgroundColor:props.mode==='dark'?'#5e5978':'white'}}>
        <h3>Copyright @kumaraditya</h3>
    </div>

    </div>
  )
}

