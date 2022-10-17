import React from 'react'
import "@google/model-viewer/dist/model-viewer";
const Viewer = () => {

  return (
    <model-viewer alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum" src="assets/models/hamburger.glb" shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>
  )
}

export default Viewer