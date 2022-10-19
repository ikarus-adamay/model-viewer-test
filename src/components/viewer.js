import React, {useState} from 'react'
import hamburger from '../assets/models/hamburger.glb'
import '../assets/styles/viewer.css'
import "@google/model-viewer/dist/model-viewer";
const Viewer = () => {
  // const [token, setToken] = useState(0);
  const modelRef = React.useRef();
  const [annots, setAnnots] = useState([]);

  const handleClick = (event) => {
    const { clientX, clientY } = event;

    if (modelRef.current) {
      let hit = modelRef.current.positionAndNormalFromPoint(clientX, clientY);
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
        shadow-intensity="1" 
        camera-controls 
        touch-action="pan-y" 
        style={{ width: "100vw", height: "100vh"}}
        onClick={handleClick}
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

export default Viewer