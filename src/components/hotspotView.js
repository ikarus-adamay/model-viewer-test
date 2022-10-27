import React from 'react'
import hamburger from '../assets/models/hamburger.glb'
import "@google/model-viewer/dist/model-viewer";
import '../assets/styles/hotspot.css'


const HotspotView = () => {
  return (
    <model-viewer 
        alt="Hamburger" 
        src={hamburger} 
        ar
        ar-scale="fixed"
        shadow-intensity="1" 
        camera-controls 
        touch-action="pan-y" 
        xr-environment
        style={{ width: "100vw", height: "100vh"}}
    ><button class="hotspot" slot="hotspot-visor" data-position="0 1.75 0.35" data-normal="0 0 1"></button>
    <button class="hotspot" slot="hotspot-hand" data-position="-0.54 0.93 0.1" data-normal="-0.73 0.05 0.69">
      <div class="annotation">This hotspot disappears completely</div>
    </button>
    <button class="hotspot" slot="hotspot-foot" data-position="0.16 0.1 0.17" data-normal="-0.07 0.97 0.23" data-visibility-attribute="visible"></button>
    <div class="annotation">This annotation is fixed in screen-space</div></model-viewer>
  )
}

export default HotspotView