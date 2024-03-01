import { Outlet } from "react-router-dom";
import Logo from "/Home_Logo.png";
import UserPhoto from "/unkownProfile.png";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import "./chatbot.css";
// import md from 'markdown-it'

const ChatBot = () => {
  const [userQes, setUserQes] = useState("");
  const [chatContent, setChatContent] = useState("");
  //console.log(userQes);
  const APi_key = "AIzaSyBizwFo--lgR9T2dLGdph8fgFpcxU_Icvc";
  const genAI = new GoogleGenerativeAI(APi_key);
  const model_name = genAI.getGenerativeModel({ model: "gemini-pro" });
  let history = [];
  async function getResponse(prompt) {
    const chat = await model_name.startChat({ history: history });
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
  }
  //getResponse("what is APi");

  const UserQuestion = (data) => {
    return (
      <div className="flex items-center gap-2 mb-6">
        <img src={UserPhoto} alt="" className="w-10 h-10 rounded-full" />
        <p className="bg-light text-basic  px-3 py-1 rounded-md shadow-md whitespace-pre-wrap">
          {data}
        </p>
      </div>
    );
  };
  const ChatResponde = (data) => {
    return (
      <div className="flex gap-2 mb-16  justify-end text-nowrap overflow-auto">
        <pre className=" p-4 rounded-md shadow-md whitespace-pre-wrap bg-light text-basic">
          {data}
        </pre>
        <img src={Logo} alt="user icon" className="w-10 h-10 rounded-full" />
      </div>
    );
  };
  async function handleSubmit(e) {
    e.preventDefault();
    var prompt = userQes;
    if (prompt === "") {
      return;
    }
    console.log("user message", prompt);
    setChatContent((prevContent) => [...prevContent, UserQuestion(prompt)]);

    setUserQes("");

    const AIResponse = await getResponse(prompt);
    

    setChatContent((prevChat) => [...prevChat, ChatResponde(AIResponse)]);
    let newUserRole = {
      role: "user",
      parts: prompt,
    };
    let newAIRole = {
      role: "model",
      parts: AIResponse,
    };

    history.push(newUserRole);
    history.push(newAIRole);

    console.log(history);
  }
  console.log(chatContent);
  return (
    <div className="overflow-auto  text-nowrap mx-5 rounded-lg   bg-basic">
      <div className=" flex flex-col justify-between h-[100vh] p-4 text-white   shadow-lg rounded-lg">
        <header className="flex items-center ">
          <img src={Logo} />
          <h1 className="font-bold text-lg">
            H<span className=" text-Orange font bold">O</span>ME Campass
          </h1>
        </header>

        <div className="mb-[20px]">
          {/* <hr className="-mt-8 mb-4 overflow-auto p-4" /> */}
          {chatContent}
        </div>

        <form
          onSubmit={handleSubmit}
          className="bottom-4   flex justify-center items-end"
        >
          <div className="flex  gap-4 ">
            <input
              className="text-basic ml-4 rounded-lg p-2 w-[500px] focus:ring-light focus:light outline-none"
              type="text"
              value={userQes}
              onChange={(e) => setUserQes(e.target.value)}
              placeholder="Enter your question?"
            />
            <button
              className="px-8 py-2 bg-white rounded-lg text-basic"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <Outlet />
    </div>
  );
};

export default ChatBot;
