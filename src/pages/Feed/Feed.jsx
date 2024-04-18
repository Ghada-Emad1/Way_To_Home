import { Outlet } from "react-router-dom";
import axios from "axios";
import { AiFillLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import { AiFillInfoCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import "./style.css";
import { useEffect, useState } from "react";

const Feed = () => {
  const users = useSelector((state) => state.Addfeed);
  console.log(users);
  const [result, setresult] = useState([]);

  function fetchPost() {
    axios.get("https://homecompassapi.azurewebsites.net/Post").then((res) => {
      setresult(res.data);
    });
  }
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="m-3">
      <div className="h-[100vh] overflow-auto grid-cols-1 grid md:grid-cols-2  gap-8   ">
        {result.map((element) => (
          <div
            key={element.id}
            className="bg-light  w-[350px] flex  gap-4 p-3 rounded-lg"
          >
            <div className="flex flex-col gap-2">
              <img
                src={element.authorPhotoUrl}
                className="h-[60px] w-[60px] object-cover rounded-full"
              />
              <small className="text-Orange font-semibold">
                {element.authorName}
              </small>
              <div className="px-8 ">
                <p className=" text-basic font-bold">{element.content}</p>
                <div className="flex gap-5 mt-5 justify-center">
                  <div className="flex items-center gap-1">
                    <small>{element.likesCount}</small>
                    <AiFillLike id={element.id} size={25} />
                  </div>

                  <LiaCommentSolid size={25} />
                  <AiFillInfoCircle size={25} />
                </div>
              </div>
            </div>
          </div>
        ))}

        {users.map((element)=>{
          <div key={element}>
            <h1>{element.post}</h1>
          </div>
        })}

        <Outlet />
      </div>
    </div>
  );
};

export default Feed;
