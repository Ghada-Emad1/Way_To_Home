import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Food = () => {
  const[foodlist,setfoodlist]=useState([])
  function GetFood() {
    axios
      .get("http://homecompass.runasp.net/Facility/bycategory/7")
      .then((res) => {
        setfoodlist(res.data)
      });
  }
  useEffect(() => {
    GetFood();
  }, []);
  return (
    <div className="bg-white  flex flex-col overflow-auto h-[100vh] text-nowrap">
      <div className="flex gap-5 justify-center my-4">
        <input
          type="text"
          placeholder="Search for Your restaurant"
          className="rounded-lg border border-basic w-[350px] p-2"
        />
        <button className="rounded-lg bg-basic px-6 py-2 text-white font-semibold">
          Search
        </button>
      </div>
      <div className=" grid grid-cols-1  lg:grid-cols-2 gap-4 mx-4 bg-white ">
        {foodlist.map((element, index) => (
          <div
            key={index}
            className="bg-light p-4 flex gap-2 flex-col rounded-md "
          >
            
              <div className="flex justify-center mb-4">
                <img
                  className="w-[320px] h-[170px] object-cover rounded-md "
                  src={element.photoUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-balance">
                  <span className="text-basic font-bold ">Restaurant:</span>{" "}
                  {element.name}
                </h1>
                <h1 className=" text-Orange text-balance">
                  <span className="text-basic font-bold "> Descrption: </span>{" "}
                  {element.description}
                </h1>
               
                

                
                
                <p className="text-balance"><span className="font-bold text-basic ">Location: </span>{element.location}</p>

                <div>
                  <p className="text-balance"><span className="text-Orange font-bold">For: </span>{element.target}</p>
                  
                </div>
              
            </div>
          </div>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

  
  
  

export default Food;
