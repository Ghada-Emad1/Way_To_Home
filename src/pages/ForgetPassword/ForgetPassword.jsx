import forgetPass from "/forgetpassword.jpg";
import { CiMail } from "react-icons/ci";
const ForgetPassword = () => {
  return (
    <div className=" flex w-3/4 mx-auto h-[100vh] justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 bg-white h-[80vh]  md:rounded-ss-2xl md:rounded-es-2xl p-6 shadow-lg w-[550px]">
        <h1 className="ml-3">Enter your email and we will send the instruction</h1>
        <CiMail 
          className="absolute left-[80px] top-[344px] md:top-[332px] md:left-[306px]"
        />
        <input
          type="email"
          placeholder="Email"
          name="emil"
          id=""
          required
          className="rounded-sm px-6 py-1 outline outline-basic w-[330px]"
        />
        <div>
          
        </div>
        <button className="flex mt-6 w-[330px] bg-basic text-white py-2 justify-center rounded-lg text-lg">Next</button>
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
