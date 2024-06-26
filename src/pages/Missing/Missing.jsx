import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import imge from '/public/missing.jpg';

const Missing = () => {
  const[missingpeople,setmissingpeople]=useState([])
  function GetMissingPeople() {
    axios
      .get("https://homecompass.runasp.net/Missing")
      .then((res) => {
        setmissingpeople(res.data)
      });
  }
  useEffect(() => {
    GetMissingPeople();
  }, []);
  const addmising =useSelector((state) => state.Addfeed.addmissing);
  return (
    <div className="bg-white  flex flex-col overflow-auto h-[100vh] text-nowrap">
     
      <div className=" grid grid-cols-2 gap-3 p-2 max-lg:grid-cols-1 ">
        {missingpeople.map((element, index) => (
          <div
            key={index}
            className="bg-light p-4 content flex rounded-md   "
          >
            <div>
              <div className="flex justify-center mb-4 m-auto">
                <img
                  className="w-[360px] h-[200px]  rounded-sm  "
                  src={element.photoURL}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <h1>
                  <span className="text-basic font-bold">Name:</span>{" "}
                  {element.name}
                </h1>
               
                <div className="flex text-wrap px-5">
                <p className="w-[200px] text-basic">{element.description}</p>

                </div>
                
                <p><span className="font-bold text-basic">Location: </span>{element.address}</p>

                <div>
                  <p className="font-bold text-Orange">Missing Since :{" "}<span className="font-light text-basic">{element.missingDate} </span></p>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
        {addmising.map((element, index) => (
          <div
            key={index}
            className="bg-light p-4 content flex rounded-md   "
          >
            <div>
              <div className="flex justify-center mb-4 m-auto">
                <img
                  className="w-[360px] h-[200px]  rounded-sm  "
                  src={imge}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <h1>
                  <span className="text-basic font-bold">Name:</span>{" "}
                  {element.name}
                </h1>
               
                <div className="flex text-wrap px-5">
                <p className="w-[200px] text-basic">{element.missingDescription}</p>

                </div>
                
                <p><span className="font-bold text-basic">Location: </span>{element.missinglocation}</p>

                <div>
                  <p className="font-bold text-Orange">Missing Since :{" "}<span className="font-light text-basic">{element.missingsince} </span></p>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

  
  
  

export default Missing;
