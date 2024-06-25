import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Missing = () => {
  const[missingpeople,setmissingpeople]=useState([])
  function GetMissingPeople() {
    axios
      .get("http://homecompass.runasp.net/Missing")
      .then((res) => {
        setmissingpeople(res.data)
      });
  }
  useEffect(() => {
    GetMissingPeople();
  }, []);
  return (
    <div className="bg-white  flex flex-col overflow-auto h-[100vh] text-nowrap">
     
      <div className=" grid grid-cols-2 justify-center items-center gap-4 mx-4 bg-white">
        {missingpeople.map((element, index) => (
          <div
            key={index}
            className="bg-light p-4 content flex justify-center   gap-2 max-sm:flex flex-row "
          >
            <div>
              <div className="flex justify-center mb-4">
                <img
                  className="w-[200px] h-[150px] object-cover rounded-sm "
                  src={element.photoURL}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 items-center">
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
      </div>

      <Outlet />
    </div>
  );
};

  
  
  

export default Missing;
