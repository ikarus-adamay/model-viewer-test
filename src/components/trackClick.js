import React, {useState} from 'react'

import hamburger from '../assets/models/hamburger.glb'
import '../assets/styles/viewer.css'
import "@google/model-viewer/dist/model-viewer";

const TrackClick = () => {
  // const [token, setToken] = useState(0);
  const modelRef = React.useRef();
  const [annots, setAnnots] = useState([]);

  const handleTouchStart = (event) => {
    const {clientX, clientY, clientZ} = event.touches[0];
    if (modelRef.current) {
      let hit = modelRef.current.positionAndNormalFromPoint(clientX, clientY, clientZ);
      if (hit) {
        setAnnots((annots) => {
          return [...annots, hit];
        });
      }
    }
  };

  const handleClick = (event) => {
    const { clientX, clientY, clientZ } = event;

    if (modelRef.current) {
      let hit = modelRef.current.positionAndNormalFromPoint(clientX, clientY, clientZ);
      if (hit) {
        setAnnots((annots) => {
          return [...annots, hit];
        });
      }
    }
  };

  const getDataPosition = (annot) => {
    return `${annot.position.x} ${annot.position.y} ${annot.position.z}`;
  };

  const getDataNormal = (annot) => {
    return `${annot.normal.x} ${annot.normal.y} ${annot.normal.z}`;
  };
  
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
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        ref={(ref) => {
          modelRef.current = ref;
        }}
    >
      {annots.map((annot, idx) => (
        <button
          key={`hotspot-${idx}`}
          className="view-button"
          slot={`hotspot-${idx}`}
          data-position={getDataPosition(annot)}
          data-normal={getDataNormal(annot)}
        ></button>
        ))
      }
    </model-viewer>
  )
}

export default TrackClick