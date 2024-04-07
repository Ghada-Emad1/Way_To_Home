import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Food = () => {
  const[foodlist,setfoodlist]=useState([])
  function GetFood() {
    axios
      .get("https://homecompassapi.azurewebsites.net/Facility/bycategory/10")
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
      <div className=" grid grid-cols-2 justify-center items-center gap-4 mx-4 bg-white">
        {foodlist.map((element, index) => (
          <div
            key={index}
            className="bg-light p-4 content flex justify-center   gap-2 max-sm:flex flex-row "
          >
            <div>
              <div className="flex justify-center mb-4">
                <img
                  className="w-[200px] h-[150px] object-cover rounded-sm "
                  src={element.photoUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h1>
                  <span className="text-basic font-bold">Restaurant:</span>{" "}
                  {element.name}
                </h1>
               
                <div className="flex text-wrap px-5">
                <small className="w-[200px] text-Orange">{element.description}</small>

                </div>
                
                <p><span className="font-bold text-basic">Location: </span>{element.location}</p>

                <div>
                  <p><span className="text-Orange font-bold">For: </span>{element.target}</p>
                  
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

  
  
  

export default Food;
