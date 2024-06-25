import axios from "axios";
import forgetPass from "/forgetpassword.jpg";
import { CiMail } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  
  const navigate=useNavigate()
  const[email,setemail]=useState("")
  console.log(email)
const forgetpasswordauth=()=>{
   axios.post(`http://homecompass.runasp.net/Auth/forgotPassword?email=${email}`).then((res)=>{
    console.log(res)
    navigate("/confirmtoken")
   })
}
  return (
    <div className=" flex w-3/4 mx-auto h-[100vh] justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 bg-white h-[80vh]  md:rounded-ss-2xl md:rounded-es-2xl p-6 shadow-lg w-[550px]">
        <h1 className="ml-3">Enter your email and we will send the instruction</h1>
        <CiMail 
          className="absolute left-[90px] top-[344px] md:top-[337px] md:left-[295px]"
        />
        <input
          type="email"
          placeholder="Email"
          name="emil"
          id=""
          required
          value={email}
          onChange={(e)=>setemail(e.target.value)}
          className="rounded-sm px-7 py-1 outline outline-basic w-[330px]"
        />
        <div>
          
        </div>
        <button onClick={forgetpasswordauth} className="flex mt-6 w-[330px] bg-basic text-white py-2 justify-center rounded-lg text-lg">Next</button>
      </div>
      <div>
        <img
          src={forgetPass}
          alt=""
          className="w-[600px] shadow-lg rounded-se-2xl rounded-ee-2xl h-[80vh] object-cover hidden md:block"
        />
      </div>
    </div>
  );
};

export default ForgetPassword;
