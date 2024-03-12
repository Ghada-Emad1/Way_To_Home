import { Outlet } from "react-router-dom";
//import "./stylework.css";
import { WorksList } from "../../data/WorksList";
const Works = () => {
  return (
    <div className="bg-white flex flex-col overflow-auto h-[100vh] text-nowrap">
        <div className="flex gap-5 justify-center my-4">
          <input
            type="text"
            placeholder="Search for Your Work"
            className="rounded-lg border border-basic w-[350px] p-2 "
          />
          <button className="rounded-lg bg-basic px-6 py-2 text-white font-semibold">
            Search
          </button>
        </div>

        <div className=" grid grid-cols-2 gap-4 mx-4 max-lg:flex flex-col ">
          {WorksList.map((element, index) => (
            <div key={index} className=" block  p-5 bg-[#EFF5F5] rounded-[8px]"> 
              <div>
                <p className="text-[#497174] text-lg font-semibold Inter">
                  {element.paragrah}</p>
              </div>
              <div>
                <p className="text-balance text-[14px] text-[#A5A5A5]">Lorem ipsum dolor sit amet is a Latin phrase 
                that translates to “ pain is an illusion.”</p>
              </div>
              <div>
                <h5 className="text-[#497174] Inter mt-2">
                <span className="text-basic font-bold Inter "> Address :</span>{" "}
                  {element.Address}
                </h5>
              </div>
              <div>
                <h5 className="text-[#497174] Inter mt-1">
                <span className="text-basic font-bold Inter "> Phone Number :</span>{" "}
                  {element.Phone}
                </h5>
              </div>
              <div>
                <h5 className="text-[#EB6440] Inter mt-1">
                <span className="text-basic font-bold Inter "> Salary :</span>{" "}
                  {element.salary}
                </h5>
              </div>
              
            </div>
          ))}
        </div>
      <Outlet />
    </div>
  );
};

export default Works;
