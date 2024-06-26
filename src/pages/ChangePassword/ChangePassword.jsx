import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
  const inputText = `p-2 w-full focus:outline-basic rounded-lg border-2 border-light`;
  const [email, setemail] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://homecompass.runasp.net/Auth/changePassword?email=${email}&newpassword=${newpassword}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
    navigate("/login");
  };
  return (
    <div className="h-[100vh] flex items-center justify-center w-5/6 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex w-[400px] bg-white sm:h-[70vh] shadow-xl rounded-lg md:rounded-es-lg md:rounded-ss-lg sm:w-[600px] my-2 flex-col p-8 gap-6 sm:p-20"
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
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="token" className="font-bold text-basic">
            New Password
          </label>
          <input
            type="newPassword"
            name="newPassword"
            value={newpassword}
            required
            placeholder="Enter Token"
            className={inputText}
            onChange={(e) => setNewpassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-basic w-[200px] text-white px-6 py-2 rounded-lg mt-4"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
