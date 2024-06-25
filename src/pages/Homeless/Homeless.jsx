import axios from "axios";
import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import img from "/public/homeless.jpeg";
const Works = () => {
  const [resp, setresp] = useState([]);
  useEffect(() => {
    axios
      .get("http://homecompass.runasp.net/Homeless")
      .then((res) => {
        setresp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const addhomeless = useSelector((state) => state.Addfeed.addhomeless);
  return (
    <div className="bg-white flex flex-col overflow-auto h-[100vh] text-nowrap">
      <div className=" grid grid-cols-2  gap-4 mx-4 max-lg:flex flex-col mt-2">
        {resp.map((data, id) => (
          <div key={id} className="p-5 bg-[#EFF5F5] rounded-[8px]">
            <div>
              <img src={data.photoURL} alt="homeless_photo" />
            </div>
            <div>
              <p className="text-[#497174] text-lg font-semibold">
                {data.name}
              </p>
            </div>
            <div>
              <p className="text-balance text-[14px] text-[#A5A5A5]">
                {data.description}
              </p>
            </div>
            <div>
              <h5 className="text-[#497174] Inter mt-2">
                <span className="text-basic font-bold Inter "> Address :</span>{" "}
                {data.address}
              </h5>
            </div>
          </div>
        ))}

        {addhomeless.map((element, id) => (
          <div
            key={id}
            className="flex  m-2 p-2 bg-light space-x-12 rounded-lg max-lg:flex-col"
          >
            <div className="flex items-center justify-center">
              <img src={img} alt="" className="w-[300px] h-[200px]" />
            </div>
            <div className="flex-1">
              <h1 className="text-basic font-bold text-balance mb-2">
                Your Name
                <span className="text-[#3333] ">{element.addrese}</span>
              </h1>
              <h1 className="text-basic font-bold text-balance mb-2">
                Describtion : {""}
                <span className="text-[#3333] ">{element.description}</span>
              </h1>
              <h1 className="text-basic font-bold text-balance mb-2">
                contact : {""}
                <span className="text-[#3333] ">{element.contact}</span>
              </h1>
              <h1 className="text-basic font-bold text-balance mb-2">
                Phone : {""}
                <span className="text-[#3333] ">{element.phone}</span>
              </h1>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Works;
