import { Link, useNavigate } from "react-router-dom";
import LoginImage from "/login.jpg";
import axios from "axios";
import { useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { addUserInfo } from "../../AddReducer/AddUserInfo";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();
  const users = useSelector((state) => state.Adduser.userInfo);
  const dispatch = useDispatch();

console.log(users)
  const inputText = `p-2 w-full focus:outline-basic rounded-lg border-2 border-light`;

  const fetchLogin = async () => {
    const data = {
      email,
      password,
    };
    const url = "https://homecompass.runasp.net/Auth/login";
    try {
      const res = await axios.post(url, data);
      console.log(res.data);
      const userData = res.data;
      localStorage.setItem("user", JSON.stringify(userData)); // Store user data in localStorage
      dispatch(addUserInfo({
        id: userData.userId,
        email: userData.email,
        username: userData.username,
        roles: userData.roles,
        token: userData.token
      }));
      setApiError(""); // Clear previous error
      return true;
    } catch (err) {
      if (err.response && err.response.data) {
        setApiError(err.response.data); // Set error message from response
      } else {
        setApiError("An unexpected error occurred. Please try again.");
      }
      return false;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const success = await fetchLogin();
    if (success) {
      console.log("Successful login");
     
      navigate("/dashboard/"); // Change to your desired route after successful login
    }
    
  };

  return (
    <div className="h-[100vh] flex items-center justify-center w-5/6 mx-auto ">
      <form
        onSubmit={onSubmit}
        className="flex w-[400px] bg-white sm:h-[70vh] shadow-lg rounded-lg md:rounded-es-lg md:rounded-ss-lg sm:w-[600px] my-2 flex-col p-8 gap-6 sm:p-20"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-bold text-basic">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            required
            placeholder="Your Email"
            className={inputText}
            onChange={(e) => setEmail(e.target.value)}
          />
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {apiError && <p className="text-Error font-bold">{apiError}</p>}

        <div className="flex-col items-center text-Orange text-base -mt-3 flex justify-center">
          <Link to="/forgetpassword">Forget Password!!</Link>
          <hr className="mt-2 border-none w-[30%] h-[1px] -leading-3 rounded-lg bg-Orange" />
        </div>
        <div>
          <button
            type="submit"
            className="bg-basic font-bold text-white px-10 py-2 flex justify-center items-center text-center"
          >
            Next
          </button>
        </div>
      </form>
      <div className="hidden sm:block">
        <img
          src={LoginImage}
          className="w-[600px] sm:h-[70vh] shadow-lg rounded-se-lg rounded-ee-lg"
        />
      </div>
    </div>
  );
};

export default Login;
