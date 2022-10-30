import React from 'react'
import { useState } from 'react'
import Viewer from './Viewer'
import ViewerTwo from './ViewerTwo';
const App = () => {
  const [state, setState] = useState(false);

  const clickHandler=(e)=>{
    setState(!state);
  };
  return (<>
    <button onClick={clickHandler} className><sdf></sdf></button>
    <div>
      {state && <Viewer/>}
      {!state && <ViewerTwo/>}
    </div></>
  )
}

export default App
