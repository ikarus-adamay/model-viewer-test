import React, { useState, useEffect } from "react";
import annotations from "./assets/models/annotations";
import Modal from "react-modal"
import modelBG from "./assets/backgrounds/7.jpg"
import hamburger from "./assets/models/bread.glb";
// import "./assets/styles/viewer.css";
import "@google/model-viewer/dist/model-viewer";
import {FcCancel} from "react-icons/fc";

import img1 from "./assets/backgrounds/1.jpg";
import img2 from "./assets/backgrounds/2.jpg";
import img3 from "./assets/backgrounds/3.jpg";
import img4 from "./assets/backgrounds/4.jpg";
import img5 from "./assets/backgrounds/5.jpg";
import img6 from "./assets/backgrounds/6.jpg";
import img7 from "./assets/backgrounds/7.jpg";
import img8 from "./assets/backgrounds/8.jpg";
import img9 from "./assets/backgrounds/9.jpg";
import img10 from "./assets/backgrounds/10.jpg";
import img11 from "./assets/backgrounds/11.jpg";
import img12 from "./assets/backgrounds/12.jpg";
import img13 from "./assets/backgrounds/13.jpg";
import img14 from "./assets/backgrounds/14.jpg";
import img15 from "./assets/backgrounds/15.jpg";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "rgba(125,125,125,0.2)",
  },
};

const ViewerTwo = () => {
  const[bgPIcker, setBgPicker] = useState("")

  const [hotspotName, setHotspotName] = useState("");
  const [hotspotDetails, setHotspotDetails] = useState("");
  const [addingModalIsOpen, setIsAddingModalOpen] = useState(false);
  const [deletingingModalIsOpen, setIsDeletingModalOpen] = useState(false);

  function closeAddingModal() {
    setIsAddingModalOpen(false);
  }
  
  function closeDeletingModal() {
    setIsDeletingModalOpen(false);
  }

  const [annotationsArray, setAnnotationsArray] = useState(annotations);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSlotUnique, setIsSlotUnique] = useState(false);

  const [isHotspotAdding, setIsHotspotAdding] = useState(false);
  const modelRef = React.useRef();

  const modelHandleClick = (event) => {
    const { clientX, clientY, clientZ } = event;

    if (modelRef.current) {
      let hit = modelRef.current.positionAndNormalFromPoint(
        clientX,
        clientY,
        clientZ
      );
      if (hit) {
        setPosition(`${hit.position.x}m ${hit.position.y}m ${hit.position.z}m`);
        setNormal(`${hit.normal.x}m ${hit.normal.y}m ${hit.normal.z}m`);
        setIsAddingModalOpen(true);
        console.log(hit);
        console.log(position);
        console.log(normal);
      }
    }
  };
  const handleTouchStart = () => {
    console.log("click");
  };

  const buttonClickHandler = () => {
    setIsHotspotAdding(!isHotspotAdding);
    console.log("click button");
  };

  const saveChanges = () => {
    console.log("save");
  };

  const [position, setPosition] = useState(null);
  const [normal, setNormal] = useState(null);

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!hotspotName || !hotspotDetails) {
      alert(
        "my brother in christ, you are required to add valid hotspot name and hotspot description"
      );
    } else {
      const newHotspot = {
        id: parseInt(new Date().getTime().toString()),
        slot: `hotspot-${new Date().getTime().toString()}`,
        hotspotName: hotspotName,
        dataPosition: position,
        dataNormal: normal,
        annotationData: hotspotDetails,
      };
      setAnnotationsArray([...annotationsArray, newHotspot]);
      setIsAddingModalOpen(false);
      console.log(annotationsArray);
    }
  };

  useEffect(() => {
    setIsHotspotAdding(false);
    if (addingModalIsOpen === false) {
      setPosition(null);
      setNormal(null);
    }
  }, [addingModalIsOpen]);

  const deleteHandler=(idValue)=>{
    const newAnnotationsArray = annotationsArray.filter((annot)=>annot.id!==idValue);
    setAnnotationsArray(newAnnotationsArray);
  }


  return (
    <>
    <div className="flex">
      <div className="flex flex-col mx-52">
        <h1>Choose a Background</h1>

        <div className="flex flex-col  border h-110 overflow-auto p-2">
          <img src={img1} alt="" className="w-80 my-2 border border-gray-400 hover:cursor-pointer" onClick={()=>setBgPicker(img1)} />
          <img src={img2} alt="" className="w-80 my-2 border border-gray-400 hover:cursor-pointer" onClick={()=>setBgPicker(img2)} />
          <img src={img3} alt="" className="w-80 my-2 border border-gray-400 hover:cursor-pointer" onClick={()=>setBgPicker(img3)} />
          <img src={img4} alt="" className="w-80 my-2 border border-gray-400 hover:cursor-pointer" onClick={()=>setBgPicker(img4)} />
          <img src={img5} alt="" className="w-80 my-2 border border-gray-400 hover:cursor-pointer" onClick={()=>setBgPicker(img5)} />
          <img src={img6} alt="" className="w-80 my-2 border border-gray-400 hover:cursor-pointer" onClick={()=>setBgPicker(img6)} />
          <img src={img7} alt="" className="w-80 my-2 border border-gray-400 hover:cursor-pointer" onClick={()=>setBgPicker(img7)} />
          <img src={img8} alt="" className="w-80 my-2 border border-gray-400 hover:cursor-pointer" onClick={()=>setBgPicker(img8)} />
          <img src={img9} alt="" className="w-80 my-2 border border-gray-400 hover:cursor-pointer" onClick={()=>setBgPicker(img9)} />
          <img src={img10} alt="" className="w-80 my-2 border border-gray-400 hover:cursor-pointer" onClick={()=>setBgPicker(img10)} />
          <img src={img11} alt="" className="w-80 my-2 border border-gray-400 hover:cursor-pointer" onClick={()=>setBgPicker(img11)} />
          <img src={img12} alt="" className="w-80 my-2 border border-gray-400 hover:cursor-pointer" onClick={()=>setBgPicker(img12)} />
          <img src={img13} alt="" className="w-80 my-2 border border-gray-400 hover:cursor-pointer" onClick={()=>setBgPicker(img13)} />
          <img src={img14} alt="" className="w-80 my-2 border border-gray-400 hover:cursor-pointer" onClick={()=>setBgPicker(img14)} />
          <img src={img15} alt="" className="w-80 my-2 border border-gray-400 hover:cursor-pointer" onClick={()=>setBgPicker(img15)} />
        </div>
      </div>
    
      <div
        className={`flex justify-center border mx-40${
          isHotspotAdding ? " outline outline-red border-red-600" : "border-black"
        } `}
      > 
        <model-viewer
          alt="Hamburger"
          src={hamburger}
          camera-controls
          skybox-image= {bgPIcker}
          environment-image= 'legacy'
          exposure="0.5"
          interaction-prompt={isHotspotAdding ? "none" : "auto"}
          style={{ width: "50vw", height: "50vh" }}
          onClick={isHotspotAdding && modelHandleClick}
          onTouchStart={handleTouchStart}
          ref={(ref) => {
            modelRef.current = ref;
          }}
          
        >
          {annotationsArray.map((annots) => (
            <>
              {console.log(annots)}
              <button
                key={annots.id}
                className="Hotspot"
                slot={annots.slot}
                data-position={annots.dataPosition}
                data-normal={annots.dataNormal}
              >
                <div className="border bg-cream  px-2 pb-1 pt-0.5 border-gray-400">
                  {annots.annotationData}
                </div>
              </button>
            </>
          ))}

          {/* {annots.map((annot, idx) => (
        <div>getDataPosition(annot)</div>
      ))} */}
        </model-viewer>
      </div></div>
      <Modal
        isOpen={deletingingModalIsOpen}
        onRequestClose={closeDeletingModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="text-gray-700 w-96">
          <div className="text-lg justify-center flex mb-3 underline-offset-2 underline">
            Hotspot Deleter
          </div>

          <div className="border">
            {annotationsArray.map((annot) => (
              <>
                <div className="flex justify-between my-2 border">
                  <div className=" bg-white drop-shadow-md">
                    {annot.hotspotName}
                  </div>
                  <div className=" bg-white drop-shadow-md">
                    {annot.annotationData}
                  </div>
                  <div className="pt-1 border pl-2 hover:cursor-pointer hover:border-red-500"
                  onClick={()=>deleteHandler(annot.id)}>
                  <FcCancel className=""/></div>
                </div>
              </>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              className="border border-gray-600 rounded-md mt-52 py-1 px-5"
              onClick={closeDeletingModal}
            >
              Done
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={addingModalIsOpen}
        onRequestClose={closeAddingModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="text-gray-700">
          <div className="text-lg justify-center flex mb-3 underline-offset-2 underline">
            Hotspot Configurator
          </div>
          <form
            className="flex flex-col justify-center"
            onSubmit={handleModalSubmit}
          >
            <label className="mt-2 pr-2">
              Hotspot Name:
              <input
                type="text"
                value={hotspotName}
                onChange={(e) => setHotspotName(e.target.value)}
                className="ml-3 p-1 border border-gray-600 rounded-md"
                name="name"
              />
            </label>
            <label className="mt-2 pr-2">
              Hotspot Details:
              <input
                type="text"
                value={hotspotDetails}
                onChange={(e) => setHotspotDetails(e.target.value)}
                className="ml-2 p-1 border border-gray-600 rounded-md"
                name="name"
              />
            </label>
            <input
              type="submit"
              className="border mt-10 border-gray-600 rounded-md"
              value="Submit"
            />
          </form>
          <div className="flex justify-center">
            <button
              className="border border-gray-600 rounded-md mt-52 py-1 px-5"
              onClick={closeAddingModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
      <div className="flex justify-center ">
        <button
          className="border mt-20 p-2 px-3 mx-10 drop-shadow-lg bg-white rounded-lg text-gray-700 hover:bg-slate-100"
          onClick={buttonClickHandler}
        >
          {`${isHotspotAdding ? "Cancel" : "Add Hotspot"}`}
        </button>
        <button
          className="border mt-20 p-2 px-3 mx-10 drop-shadow-lg bg-white rounded-lg text-gray-700 hover:bg-slate-100"
          onClick={() => setIsDeletingModalOpen(true)}
        >
          Delete Hotspot
        </button>
      </div>
      <div className="flex justify-center">
        <button
          className="border border-black mt-20 p-2 px-3"
          onClick={saveChanges}
        >
          Save Changes
        </button>
      </div>
    </>
  );
};

export default ViewerTwo;
