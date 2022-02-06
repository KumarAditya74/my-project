
import './App.css';
import Project from './Component/Project';
import React , {useState} from 'react';
function App() {
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
   <>
    <Project  mode={mode} toggle={toggle}   />
   </>
  );
}

export default App;
