import axios from "axios";
import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Works = () => {
  const[resp, setresp]= useState([]);
  useEffect(()=>{
    axios .get('https://homecompass.runasp.net/Job').then((res)=>{
      setresp(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  })
  ///http://homecompass.runasp.net//Job
  const addwork = useSelector((state)=> state.Addfeed.addwork);
  return (
    <div className="bg-white flex flex-col overflow-auto h-[100vh] text-nowrap">
        

        <div className=" grid grid-cols-2 gap-3 p-2 max-lg:grid-cols-1">
          {resp.map((data, id) => (
            <div key={id} className="p-5 bg-[#EFF5F5] rounded-[8px]"> 
              <div>
                <p className="text-[#497174] text-lg font-semibold Inter">
                  {data.title}</p>
              </div>
              <div>
                <p className="text-balance text-[14px] text-[#A5A5A5]">{data.description} 
                </p>
              </div>
              <div>
                <h5 className="text-[#497174] Inter mt-2">
                <span className="text-basic font-bold Inter "> Address :</span>{" "}
                  {data.location}
                </h5>
              </div>
              <div>
                <h5 className="text-[#497174] Inter mt-1">
                <span className="text-basic font-bold Inter ">Email: </span>{" "}
                  {data.contactInformation}
                </h5>
              </div>
              <div>
                <h5 className="text-[#EB6440] Inter mt-1">
                <span className="text-basic font-bold Inter "> Work hours :</span>{" "}
                {data.hours}
                  
                </h5>
              </div>
              <div>
                <h5 className="text-[#EB6440] Inter mt-1">
                <span className="text-basic font-bold Inter "> Salary :</span>{" "}
                {data.salary}
                </h5>
              </div>
              <div>
                <h5 className="text-[#497174] Inter mt-1 text-pretty">
                <span className="text-basic font-bold "> skills :</span>{" "}
                  {data.skills}
                </h5>
              </div>
              
            </div>
          ))}


          {/* {addwork.map((data, id) => (
            <div key={id} className=" block  p-5 bg-[#EFF5F5] rounded-[8px]"> 
              <div>
                <p className="text-[#497174] text-lg font-semibold Inter">
                  {data.namejob}</p>
              </div>
              <div>
                <p className="text-balance text-[14px] text-[#A5A5A5]">{data.description} 
                </p>
              </div>
              <div>
                <h5 className="text-[#497174] Inter mt-2">
                <span className="text-basic font-bold Inter "> Address :</span>{" "}
                  {data.workaddrese}
                </h5>
              </div>
              <div>
                <h5 className="text-[#497174] Inter mt-1">
                <span className="text-basic font-bold Inter ">Email: </span>{" "}
                  {data.workemail}
                </h5>
              </div>
              <div>
                <h5 className="text-[#EB6440] Inter mt-1">
                <span className="text-basic font-bold Inter "> Work hours :</span>{" "}
                  {data.Workhour}
                </h5>
              </div>
              <div>
                <h5 className="text-[#EB6440] Inter mt-1">
                <span className="text-basic font-bold Inter "> Salary :</span>{" "}
                  {data.Salary}
                </h5>
              </div>
              <div>
                <h5 className="text-[#497174] Inter mt-1">
                <span className="text-basic font-bold Inter "> skills :</span>{" "}
                  {data.skills}
                </h5>
              </div>
              
            </div>
          ))} */}

        </div>
      <Outlet />
    </div>
  );
};

export default Works;
