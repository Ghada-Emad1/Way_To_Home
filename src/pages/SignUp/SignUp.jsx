import  { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import axios from "axios";
//import { useDispatch, useSelector } from "react-redux";
//import { addUserInfo } from "../../AddReducer/AddUserInfo";
import Signup from "/signup.jpg";

YupPassword(yup);

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiError, setApiError] = useState("");
 // const users = useSelector((state) => state.Adduser.userInfo);

  //const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputText = `p-2 w-full focus:outline-basic rounded-lg border-2 border-light`;

  const schema = yup.object().shape({
    firstName: yup.string().required("This Field is Required"),
    lastName: yup.string().required("This Field is Required"),
    UserName: yup.string().required("This Field is Required"),
    Email: yup
      .string()
      .email("Invalid Email")
      .required("Your Email is Required"),
    password: yup
      .string()
      .required("No Password Provided")
      .min(8, "Password is too short - should be 8 characters")
      .matches(/[a-z]/, "Passwords must have at least one lowercase character.")
      .matches(/[A-Z]/, "Passwords must have at least one uppercase character.")
      .matches(/[0-9]/, "Passwords must have at least one digit ('0'-'9')")
      .matches(
        /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]/,
        "Passwords must have at least one non alphanumeric character."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const fetchData = async () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
    };
    const Url = "https://homecompass.runasp.net/Auth/register";
    try {
      const res = await axios.post(Url, data);
      console.log(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      setApiError(""); // Clear previous error
      return true;
    } catch (err) {
      if (err.response && err.response.data) {
        setApiError(JSON.stringify(err.response.data)); // Ensure error is a string
      } else {
        setApiError("An unexpected error occurred. Please try again.");
      }
      return false;
    }
  };

  const onSubmit = async () => {
    const success = await fetchData();
    if (success) {
      //const newUserId = users.length === 0 ? 1 : users[users.length - 1].id + 1;
      //dispatch(addUserInfo({ id: newUserId, username, email }));
      navigate("/confirmsignupwithToken");
      reset();
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center w-5/6 mx-auto ">
      <div className="hidden sm:block">
        <img
          src={Signup}
          className="w-[600px]  sm:h-[95vh] shadow-lg rounded-ss-lg rounded-es-lg"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-[400px] bg-white  sm:h-[95vh] shadow-lg md:rounded-ee-lg  md:rounded-se-lg sm:w-[600px] my-2 flex-col p-8  gap-3  sm:p-20"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-bold text-basic">
            First Name
          </label>
          <input
            type="text"
            name="name"
            value={firstName}
            placeholder="First Name"
            required
            className={inputText}
            {...register("firstName")}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <p className=" text-Error">{errors.firstName?.message}</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-bold text-basic">
            Last Name
          </label>
          <input
            type="text"
            name="name"
            value={lastName}
            placeholder="Last Name"
            required
            className={inputText}
            {...register("lastName")}
            onChange={(e) => setLastName(e.target.value)}
          />
          <p className=" text-Error">{errors.lastName?.message}</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-bold text-basic">
            UserName
          </label>
          <input
            type="text"
            name="name"
            value={username}
            placeholder="UserName"
            required
            className={inputText}
            {...register("UserName")}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className=" text-Error">{errors.UserName?.message}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-bold text-basic">
            Email
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-Error">{errors.password?.message}</p>
        </div>

        <div>
          <button
            type="submit"
            className="bg-basic font-bold text-white px-10 py-2 flex justify-center  items-center text-center"
          >
            Next
          </button>
        </div>
        {apiError && <p className="text-Error">{typeof apiError === 'string' ? apiError : 'An error occurred'}</p>}

        <div className="flex justify-center -mt-2 flex-col gap-4 items-center">
          <h1 className="font-bold text-Orange text-lg">Contact With Us</h1>
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

