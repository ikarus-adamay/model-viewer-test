import React from 'react'


const CameraAngle = () => {
  const modelRef = React.useRef();
  const getCameraAngle = () => {
    if (modelRef.current) {
      modelRef.current.cameraOrbit = "10deg 2deg 3m";
      let camera = modelRef.current.getCameraOrbit();
      console.log(camera);
    }
  }
  return (
    <button onClick={getCameraAngle}></button>
  )
}

export default CameraAngle