import {Outlet }  from 'react-router-dom';

import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import img from '/public/Shelter1.png'


const Shelter = () => {
  const addshelter = useSelector((state)=> state.Addfeed.addShelter)
  const[resp, setresp]= useState([]);
  useEffect(()=>{
    axios .get(`http://homecompass.runasp.net/Facility/bycategory/10`).then((res)=>{
      //console.log(res);
      setresp(res.data)
      
    }).catch((err)=>{
      console.log(err);
    })
  })
  //http://homecompass.runasp.net/index.html
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
      <div className=" mt-4  ">
        {resp.map((data , id) => (
          <div key={id} className="flex  m-2 p-3 bg-light space-x-12 rounded-lg max-lg:flex-col "> 
              {/* flex gap-20 */}
                
                  <div className='flex flex-col  items-center'>
                    <img 
                     className='w-[300px] h-[200px] rounded-md'
                      src={data.photoUrl}
                      alt=""
                      />
                      <h1  className='text-center mt-1'>{data.name}</h1>
                  </div>
                  <div className='flex-1'>
                    {/* <h1>
                      <span className="text-basic font-bold"> Restaurant :</span>{" "}
                      {data.contactInformaton}
                    </h1> */}
                    <h1 className='p-y-4 text-basic text-[16px] font-normal'>
                      <span className="text-basic font-bold text-balance"> Contact :</span>{" "}
                      {data.contactInformaton}
                    </h1>
                    <h1 className='text-balance p-y-4 text-basic text-[16px] font-normal'>
                      <span className="text-basic font-bold"> Description :</span>{" "}
                      {data.description}
                    </h1>
                    <h1 className='text-balance p-y-4 text-basic text-[16px] font-normal'>
                      <span className="text-basic font-bold"> Target :</span>{" "}
                      {data.target}
                    </h1>
                    <h1 className='text-balance p-y-4 text-basic text-[16px] font-normal'>
                      <span className="text-basic font-bold"> resources :</span>{" "}
                      <ul>
                        {data.resources.map((resource, index) => (
                          <li key={index}>
                            {resource.name}
                          </li>
                        ))}
                      </ul>
                      
                    </h1>
                    <h1 className='text-balance p-y-4 text-basic text-[16px] font-normal'>
                      <span className="text-basic font-bold"> Address :</span>{" "}
                      {data.location}
                    </h1>
                  
                  </div>
              
              

          </div>
        ))}

{addshelter.map((element, id)=>(
                <div key={id} className='flex  m-2 p-2 bg-light space-x-12 rounded-lg max-lg:flex-col'>
                    <div className='flex items-center justify-center'>
                        <img src={img} alt=""  className='w-[300px] h-[200px]'/>
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-basic font-bold text-balance mb-2">Your adrees : {''} 
                        <span className="text-[#3333] ">{element.addrese}</span></h1>
                        <h1 className="text-basic font-bold text-balance mb-2">Describtion  : {''} 
                        <span className="text-[#3333] ">{element.description}</span></h1>
                        <h1 className="text-basic font-bold text-balance mb-2">contact  : {''} 
                        <span className="text-[#3333] ">{element.contact}</span></h1>
                        <h1 className="text-basic font-bold text-balance mb-2">Phone  : {''} 
                        <span className="text-[#3333] ">{element.phone}</span></h1>
                        
                    </div>
                </div>

            ))}



      </div>
      
      <Outlet/>
    </div>
    
  )
}

export default Shelter
