import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import LoginImage from "/login-review.png";


const Login = () => {
  const navigate = useNavigate();
  const inputText = `p-2 w-full focus:outline-basic rounded-lg`;
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
  const onSubmit = async (data) => {
    console.log({ data });

    navigate("/dashboard", { replace: true });

    console.log({ data });
    reset();
  };

  return (
    <div className="h-[100vh] w-full  flex items-center justify-center ">
      <div className="hidden sm:block">
        <img src={LoginImage} alt="" />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        method="post"
        className="flex w-[400px] sm:w-[600px] my-2 flex-col p-6 rounded-lg bg-light shadow-lg gap-6  sm:p-20"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-bold text-basic">
            Your Name
          </label>
          <input
            type="text"
            name="name"
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
            className={inputText}
            {...register("password")}
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
          />
          <p className="text-Error">{errors.confirmPassword?.message}</p>
        </div>
        <div>
          <button
            type="submit"
            className="bg-basic font-bold text-white px-8 py-2 flex items-center text-center"
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
