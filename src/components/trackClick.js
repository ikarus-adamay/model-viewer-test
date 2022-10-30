import React, {useState} from 'react'

import hamburger from '../assets/models/hamburger.glb'
import '../assets/styles/viewer.css'
import "@google/model-viewer/dist/model-viewer";

import TimeMe from 'timeme.js'

const TrackClick = () => {
  
  const modelRef = React.useRef();
  const [annots, setAnnots] = useState([]);

  const handleTouchStart = (event) => {
    const {clientX, clientY, clientZ} = event.touches[0];
    if (modelRef.current) {
      let hit = modelRef.current.positionAndNormalFromPoint(clientX, clientY, clientZ);
      let camera = modelRef.current.getCameraOrbit();
      let view = modelRef.current.getFieldOfView();
      let target = modelRef.current.getCameraTarget();
      if (hit) {
        setAnnots((annots) => {
          return [...annots, hit];
        });
      }
      console.log(camera);
      console.log(view);
      console.log(target);
    }
  };

  const handleClick = (event) => {
    const { clientX, clientY, clientZ} = event;

    if (modelRef.current) {
      let hit = modelRef.current.positionAndNormalFromPoint(clientX, clientY, clientZ);
      let camera = modelRef.current.getCameraOrbit();
      let view = modelRef.current.getFieldOfView();
      let target = modelRef.current.getCameraTarget();
      if (hit) {
        setAnnots((annots) => {
          return [...annots, hit];
        });
      }
      // console.log(camera);
      // console.log(view);
      // console.log(target);

      TimeMe.initialize({
        currentPageName: "model-viewer", // current page
        idleTimeoutInSeconds: 10 // stop recording time if user is idle for 30 seconds
      });
      let time = TimeMe.getTimeOnCurrentPageInSeconds();
      // console.log(time);

      const d = new Date(Date.now());
      // console.log(d.toISOString());

      annots.map((annot) =>
      //json local storage object creation
        localStorage.setItem('obj', JSON.stringify({
          "position":{
            "x": annot.position.x,
            "y": annot.position.y,
            "z": annot.position.z
          },
          "normal":{
            "x": annot.normal.x,
            "y": annot.normal.y,
            "z": annot.normal.z
          },
          "cameraOrbit":{
            "theta": camera.theta,
            "phi": camera.phi,
            "radius": camera.radius
          },
          "fieldView": view,
          "camera target":{
            "x": target.x,
            "y": target.y,
            "z": target.z
          },
          "Timestamp": d.toISOString(),
          "Time": time
        })) 
      );

      annots.map((annot) => {
        const obj = localStorage.getItem('obj');
        console.log(JSON.parse(obj));
        return obj;
      })
    }
  };



  const getDataPosition = (annot) => {
    return `${annot.position.x} ${annot.position.y} ${annot.position.z}`;
  };

  const getDataNormal = (annot) => {
    return `${annot.normal.x} ${annot.normal.y} ${annot.normal.z}`;
  };

  // const getCameraAngle = (event) => {
  //   if (modelRef.current) {
  //     let camera = modelRef.current.getCameraOrbit();
  //     let view = modelRef.current.getFieldOfView();
  //     let target = modelRef.current.getCameraTarget();
  //     console.log(camera);
  //     console.log(view);
  //     console.log(target);
  //   }
  // }

  // const coordinatePosition = annots.map((annot, index) => 
  //   <div key={index}>{annot.position.x}, {annot.position.y}, {annot.position.z}, {annot.normal.x}, {annot.normal.y}, {annot.normal.z}</div>
  //   localStorage.setItem('obj', JSON.stringify({x: annot.position.x, y: annot.position.y, z: annot.position.z}))
  //   );

  // const recordTime = (event) => {
  //   TimeMe.initialize({
  //     currentPageName: "model-viewer", // current page
  //     idleTimeoutInSeconds: 10 // stop recording time if user is idle for 30 seconds
  //   });
  //   let time = TimeMe.getTimeOnElementInSeconds(modelRef.current);
  //   console.log(time);
  // }

  // const getTimestamp = (event) => {
  //   const d = new Date(Date.now());
  //   return d.toISOString();
  // }

  return (
    <model-viewer 
        id = "model-viewer"
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