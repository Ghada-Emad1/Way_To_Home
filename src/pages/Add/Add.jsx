import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../AddReducer/AddReducer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Add = () => {
  const [AddPost, setAddPost] = useState(false);
  const navigate = useNavigate();
  const [post, setPost] = useState("");
  const users = useSelector((state) => state.Addfeed);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ post }));
  };
  return (
    <div>
      <div className="w-[300px] bg-white flex gap-4 flex-col p-4 rounded-lg">
        <h1 className="text-center font-bold text-basic text-xl">Add</h1>
        <div className="flex flex-wrap gap-4">
          <button className="bg-Orange text-white px-6 py-2 rounded-lg ">
            Shelter
          </button>
          <Link
            to="/dashboard/shelter"
            className="bg-Orange text-white px-6 py-2 rounded-lg "
          >
            Restaurant
          </Link>
          <div
            className="bg-Orange text-white cursor-pointer px-6 py-2 rounded-lg "
            onClick={() => setAddPost((prev) => !prev)}
          >
            Post
          </div>
          <Link
            to="/dashboard/shelter"
            className="bg-Orange text-white px-6 py-2 rounded-lg "
          >
            Missing
          </Link>
        </div>
      </div>
      {AddPost ? (
        <Modal>
          <div className="bg-white w-[300px] sm:w-[600px] text-center p-5 rounded-lg h-[200px] flex flex-col items-center justify-center">
            <h1>Add Your Post </h1>
            <div className="flex items-center justify-center gap-5 mt-5">
              <form onSubmit={handleSubmit} className="flex gap-4">
                <input
                  className="focus:outline-Orange px-2 rounded-lg border border-basic w-[200px]"
                  onChange={(e) => setPost(e.target.value)}
                  type="text"
                  placeholder="Add Your Post.."
                />
                <button
                  className="bg-Orange text-white rounded-lg px-6 py-2"
                  onClick={() => {
                    navigate("/dashboard/feed");
                    
                  }}
                >
                  Add
                </button>
                <button className="bg-basic text-white rounded-lg px-6 py-2" onClick={() => setAddPost(false)}>Return to page</button>
             
              </form>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Add;
