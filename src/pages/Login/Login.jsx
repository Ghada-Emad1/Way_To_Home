import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "/login.jpg";


const Login = () => {
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
  
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log({ data });

    navigate("/dashboard", { replace: true });

    console.log({ data });
    reset();
  };

  return (
    <div className="h-[100vh] flex items-center justify-center w-5/6 mx-auto ">
    
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        method="post"
        className="flex w-[400px] bg-white  sm:h-[70vh] shadow-lg rounded-lg md:rounded-es-lg md:rounded-ss-lg sm:w-[600px] my-2 flex-col p-8    gap-6  sm:p-20"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-bold text-basic">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={inputText}
            {...register("YourName")}
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
            placeholder="Your Email"
            className={inputText}
            {...register("Email")}
          />
          <p className="text-Error">{errors.Email?.message}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-bold text-basic">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={inputText}
            {...register("password")}
          />
          <p className="text-Error">{errors.password?.message}</p>
        </div>
        
        <div className=" text-Orange text-base -mt-3 flex justify-center">
          <Link to='/forgetpassword'>Forget Password!!</Link>
        </div>
        <div>
          <button
            type="submit"
            className="bg-basic font-bold text-white px-10 py-2 flex justify-center  items-center text-center"
          >
            Next
          </button>
        </div>
      </form>
      <div className="hidden sm:block">
        <img src={LoginImage}   className="w-[600px]  sm:h-[70vh] shadow-lg rounded-se-lg rounded-ee-lg"/>
      </div>
    </div>
  );
};

export default Login;
