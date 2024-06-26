import { Outlet } from "react-router-dom";

import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import img from "/public/shelter11.jpeg";

const Shelter = () => {
  const addshelter = useSelector((state) => state.Addfeed.addShelter);
  const [resp, setresp] = useState([]);
  useEffect(() => {
    axios
      .get(`https://homecompass.runasp.net/Facility`)
      .then((res) => {
        setresp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  

  return (
    <div className="bg-white flex flex-col overflow-auto h-[100vh] text-nowrap">
      <div className="  ">
        {resp.map((data, id) => (
          <div
            key={id}
            className="flex  m-2 p-2 bg-light space-x-12 rounded-lg max-lg:flex-col "
          >
            {/* flex gap-20 */}

            <div className="flex flex-col  items-center">
              <img
                className="w-[350px] h-[250px] object-cover rounded-lg "
                src={data.photoUrl}
                alt=""
              />
              <h1 className="text-center text-basic"> Name : {data.name}</h1>
            </div>
            <div className="flex-1   gap-5">
              <h1 className="text-balance mb-2 mt-3">
                <span className="text-basic font-bold"> Description :</span>{" "}
                {data.description}
              </h1>
              <h1 className="text-balance mb-2">
                <span className="text-basic font-bold"> Target :</span>{" "}
                {data.target}
              </h1>
              <h1 className="text-balance mb-2">
                <span className="text-basic font-bold"> resources :</span>{" "}
                {data.resources[0].name}
              </h1>
              <h1 className="text-balance mb-2">
                <span className="text-basic font-bold"> Address :</span>{" "}
                {data.location}
              </h1>
            </div>
          </div>
        ))}

        {addshelter.map((data, id) => (
          <div
          key={id}
          className="flex  m-2 p-2 bg-light space-x-12 rounded-lg max-lg:flex-col "
        >
          {/* flex gap-20 */}

          <div className="flex flex-col  items-center">
            <img
              className="w-[350px] h-[250px] object-cover rounded-lg "
              src={img}
              alt=""
            />
            <h1 className="text-center text-basic"> Name : {data.name}</h1>
          </div>
          <div className="flex-1   gap-5">
            <h1 className="text-balance mb-2 mt-3">
              <span className="text-basic font-bold"> Description :</span>{" "}
              {data.description}
            </h1>
            <h1 className="text-balance mb-2">
              <span className="text-basic font-bold"> Target :</span>{" "}
              {data.target}
            </h1>
            
            <h1 className="text-balance mb-2">
              <span className="text-basic font-bold"> Address :</span>{" "}
              {data.addrese}
            </h1>
          </div>
        </div>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Shelter;
