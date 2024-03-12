import {Outlet }  from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { ShelterList } from '../../data/ShelterList';
//import "./style.css";


const Shelter = () => {
  return (
    <div className="bg-white flex flex-col overflow-auto h-[100vh] text-nowrap">
      <div className="flex gap-5 justify-center my-4">
          <input
            type="text"
            placeholder="Search for Your Shelter"
            className="rounded-lg border border-basic w-[350px] p-2 "
          />
          <button className="rounded-lg bg-basic px-6 py-2 text-white font-semibold">
            Search
          </button>
      </div>
      <div className=" grid grid-cols-1 gap-4 mx-4 max-lg:flex flex-col ">
        {ShelterList.map((element, index) => (
          <div key={index} className=" flex justify-between flex-row p-5 bg-[#EFF5F5] rounded-[8px]"> 
              <div className="flex justify-between flex-row gap-2 max-md:flex-col">
                <div></div>
                  <div>
                    <img
                      className="w-[200px] h-[150px] object-cover rounded-lg"
                      src={element.img}
                      alt=""
                    />
                  </div>
                  <div className='flex flex-col justify-evenly'>
                    <h1>
                      <span className="text-basic font-bold">Restaurant:</span>{" "}
                      {element.Phone}
                    </h1>
                    <p>
                      <span className="text-basic font-bold">Address: </span>
                      {element.Address}
                    </p>
                    <div>
                      <button className="bg-basic rounded-lg text-white flex items-center gap-2 px-6 py-2 max-md:m-auto max-md:mt-3">
                        <FaWhatsapp /> {element.contact}
                      </button>
                    </div>
                  </div>
              </div>
              <div>
                <img
                    className="w-[200px] h-[150px] object-cover rounded-lg max-md:hidden "
                    src={element.imgmap}
                    alt=""
                />
              </div>

          </div>
        ))}
      </div>
      
      <Outlet/>
    </div>
    
  )
}

export default Shelter
