import React from 'react'
import hamburger from '../assets/models/hamburger.glb'
import "@google/model-viewer/dist/model-viewer";
const Viewer = () => {

  return (
    <model-viewer 
        alt="Hamburger" 
        src={hamburger} 
        shadow-intensity="1" 
        camera-controls 
        touch-action="pan-y" 
        style={{ width: "100vw", height: "90vh" }}>
            <button>Play</button>
    </model-viewer>
  )
}

export default Viewer