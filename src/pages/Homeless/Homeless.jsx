import axios from "axios";
import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import imge from '/public/missing.jpg';
const Homeless = () => {
  const [resp, setresp] = useState([]);
  useEffect(() => {
    axios
      .get("https://homecompass.runasp.net/Homeless")
      .then((res) => {
        setresp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const addhomeless =useSelector((state) => state.Addfeed.addhomeless);
  return (
    <div className="bg-white flex flex-col overflow-auto h-[100vh] text-nowrap">
      <div className=" grid grid-cols-2  gap-4 mx-4 max-lg:flex flex-col mt-2">
        {resp.map((data, id) => (
          <div key={id} className="p-5 bg-[#EFF5F5] rounded-[8px]">
            <div>
              <img src={data.photoURL} alt="homeless_photo"  className="w-[360px] h-[200px] rounded-sm"/>
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

        {/* {addhomeless.map((data, id) => (
          <div key={id} className="p-5 bg-[#EFF5F5] rounded-[8px]">
            <div>
              <img src={imge} alt="homeless_photo"  className="w-[360px] h-[200px] rounded-sm"/>
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
                {data.location}
              </h5>
            </div>
          </div>
        ))} */}

        
      </div>
      <Outlet />
    </div>
  );
};

export default Homeless;
