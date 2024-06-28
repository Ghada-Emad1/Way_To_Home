import { Outlet } from "react-router-dom";
import imge from "/public/Ellipse7.png";
import axios from "axios";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { LiaCommentSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import "./style.css";
import { useEffect, useState } from "react";

const Feed = () => {
  const [likedPosts, setLikedPosts] = useState({});
  const [showOne, setShowOne] = useState({});
  const titledes = useSelector((state) => state.Addfeed.addpost);
  const users = useSelector((state) => state.Adduser.userInfo);
  const currentDate = new Date().toLocaleDateString();

  const handleClick = (postId) => {
    setLikedPosts((prevLikedPosts) => ({
      ...prevLikedPosts,
      [postId]: !prevLikedPosts[postId],
    }));
    setShowOne((prevShowOne) => ({
      ...prevShowOne,
      [postId]: !prevShowOne[postId],
    }));
  };

  console.log(titledes);
  const [result, setresult] = useState([]);

  function fetchPost() {
    axios.get("https://homecompass.runasp.net/Post").then((res) => {
      setresult(res.data);
    });
  }
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="m-3">
      <div className="h-[100vh] overflow-auto grid-cols-1 grid md:grid-cols-2  gap-4   ">
        {result.slice(0, -1).map((element) => (
          <div
            key={element.id}
            className="flex flex-col  bg-light p-3 gap-1 rounded-md"
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
                <p className=" text-basic font-semibold">{element.content}</p>
                <p className="font-bold mt-4">
                  Pubiched On:{" "}
                  <span className=" font-light">{element.publisedOn}</span>
                </p>
                <div className="flex justify-evenly items-center mt-5">
                  <div className="flex items-center gap-1">
                    <small>{element.likesCount}</small>
                    <FaHeart id={element.id} size={22} />
                  </div>

                  <button className="text-basic">
                    <LiaCommentSolid size={25} />
                  </button>
                  <button className="text-[#F9B300]">
                    <MdOutlineReportGmailerrorred size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {titledes.map((ele, id) => (
          <div
            key={id}
            className=" flex flex-col  bg-light p-3 gap-1 rounded-md"
          >
            {users.map((e) => (
              <div key={e} className="flex gap-2 items-center">
                <img className="w-[70px] h-[70px]" src={imge} />
                <div>
                  <h1 className="text-Orange text-sm bold">Needy</h1>
                  <span className="text-Orange text-[15px]">{e.username}</span>
                </div>
              </div>
            ))}

            <div className=" flex justify-center ">
              <p>{ele.postt}</p>
            </div>
            <div className="flex justify-center font-bold text-basic">
              Published on: <span className="font-light">{currentDate}</span>
            </div>
            <div className="flex justify-evenly items-center mt-2 ">
              {/* <AiFillLike  size={25} /> */}
              <button
                onClick={() => handleClick(id)}
                className=" text-[#ff0000] flex gap-1"
              >
                {/* <FcLike /> */}
                <FaHeart color={likedPosts[id] ? "red" : "#28484A"} size={25} />
                {showOne[id] && <span>1</span>}
              </button>
              <button className="text-basic">
                <LiaCommentSolid size={25} />
              </button>
              <button className="text-[#F9B300]">
                <MdOutlineReportGmailerrorred size={25} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Feed;
