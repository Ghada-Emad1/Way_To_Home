import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Signup from "/signup.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import {  useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { addUserInfo } from "../../AddReducer/AddUserInfo";
const SignUp = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const users = useSelector((state) => state.Adduser);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputText = `p-2 w-full focus:outline-basic rounded-lg border-2 border-light`;
  const schema = yup.object().shape({
    YourName: yup.string().required("Your Name is Required"),
    Email: yup
      .string()
      .email("Invaild Email")
      .required("Your Email is Required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

 
const fetchData=()=>{
  const data={
    username:username,
    email:email,
    password:password
  }
  const url=  'https://homecompassapi.azurewebsites.net/Auth/register'
  axios.post(url,data).then((res)=>{
    console.log("data inserted")
    console.log(res.data)
  })

}
  const onSubmit = async (data) => {
    
    dispatch(
      addUserInfo({ id: users[users.length - 1].id + 1, username, email })
    );
    navigate("/dashboard", { replace: true });

    reset();
  };
  

  return (
    <div className="h-[100vh] flex items-center justify-center w-5/6 mx-auto ">
      <div className="hidden sm:block">
        <img
          src={Signup}
          className="w-[600px]  sm:h-[90vh] shadow-lg rounded-ss-lg rounded-es-lg"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        method="post"
        className="flex w-[400px] bg-white  sm:h-[90vh] shadow-lg md:rounded-ee-lg  md:rounded-se-lg sm:w-[600px] my-2 flex-col p-8    gap-6  sm:p-20"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-bold text-basic">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={username}
            placeholder="Your Name"
            required
            className={inputText}
            {...register("YourName")}
            onChange={(e) => setName(e.target.value)}
          />
          <p className=" text-Error">{errors.YourName?.message}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-bold text-basic">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={email}
            placeholder="Your Email"
            className={inputText}
            {...register("Email")}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-Error">{errors.Email?.message}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-bold text-basic">
            Password
          </label>
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            className={inputText}
            {...register("password")}
            onChange={(e) => setpassword(e.target.value)}
          />
          <p className="text-Error">{errors.password?.message}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirm_password" className="font-bold text-basic">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm_password"
            className={inputText}
            {...register("confirmPassword")}
            value={confirm_password}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="text-Error">{errors.confirmPassword?.message}</p>
        </div>

        <div>
          <button
            type="submit"
            onClick={()=>fetchData()}
            className="bg-basic font-bold text-white px-10 py-2 flex justify-center  items-center text-center"
          >
            Next
          </button>
        </div>

        <div className="flex justify-center -mt-2 flex-col gap-4 items-center">
          <h1 className="font-bold text-Orange text-lg">contact With Us</h1>
          <div className="flex gap-6">
            <button>
              <FaFacebook size={25} />
            </button>
            <button>
              <FaGoogle size={25} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
