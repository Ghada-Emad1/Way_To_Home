import { Outlet } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import ProfileImage from "/people.avif";
import { useSelector } from "react-redux";
import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import Modal from "../../components/Modal/Modal";
const Settings = () => {
  const navigate = useNavigate();
  const users = useSelector((state) => state.Adduser);
  const [showInfo, setShowInfo] = useState(false);
  const [showNotifi, setshowNotifi] = useState(false);
  const [showReport, setshowReport] = useState(false);
  const [deleteAcc, setdeleteAcc] = useState(false);
  console.log(users);

  return (
    <div className="  h-[100vh] overflow-auto text-nowrap">
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search item"
          className="border p-2 rounded-lg border-basic w-[300px]"
        />
      </div>
      <div className="grid grid-cols-2">
        <div className="mx-10 w-[300px]">
          <h1 className="text-Text font-bold text-xl mb-3">General</h1>
          <div className="bg-light rounded-lg p-4">
            <div className="flex justify-between">
              <button className="flex items-center gap-2">
                <MdOutlineAccountCircle size={25} />
                Account
              </button>
              <button
                className=" transition-all ease-out duration-150"
                onClick={() => setShowInfo((prev) => !prev)}
              >
                <IoIosArrowDropdown size={20} />
              </button>
            </div>

            {showInfo ? (
              <div className="flex flex-col items-center gap-2">
                <div>
                  <img
                    src={ProfileImage}
                    className="w-[90px] h-[90px] rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <h1>
                    <span className="font-semibold text-basic text-lg">
                      Name:
                    </span>
                    {users[1].username}
                  </h1>
                  <p>
                    <span className="font-semibold text-basic text-lg">
                      Email :
                    </span>
                    {users[1].email}
                  </p>
                  <p>
                    <span className="font-semibold text-basic text-lg">
                      Phone:
                    </span>
                    01924322
                  </p>
                  <p>
                    <span className="font-semibold text-basic text-lg">
                      Gender:
                    </span>
                    Female
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="bg-light rounded-lg p-4 mt-6">
            <div className="flex justify-between">
              <button className="flex items-center gap-2">
                <IoMdNotificationsOutline size={25} />
                Notification
              </button>
              <button className=" transition-all ease-out duration-150">
                <IoIosArrowDropdown
                  size={20}
                  onClick={() => setshowNotifi((prev) => !prev)}
                />
              </button>
            </div>
            {showNotifi ? (
              <div className="mt-4 flex flex-col gap-4">
                <div>
                  <p>Message</p>
                </div>
                <div>
                  <h1 className="text-basic font-bold text-lg">
                    Notification Tone{" "}
                  </h1>
                  <p>Lorem ipsum dolor sit amet conse</p>
                </div>
                <div>
                  <h1 className="text-basic font-bold text-lg">
                    Pop Notification{" "}
                  </h1>
                  <p>No pop</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="mt-10 w-[300px]">
            <h1 className="text-Text font-bold text-xl mb-3">FeedBack</h1>
            <div className="bg-light rounded-lg p-4">
              <div className="flex justify-between">
                <button className="flex items-center gap-2">
                  <MdOutlineAccountCircle size={25} />
                  Report
                </button>
                <button className=" transition-all ease-out duration-150">
                  <IoIosArrowDropdown
                    size={20}
                    onClick={() => setshowReport((prev) => !prev)}
                  />
                </button>
              </div>
              {showReport ? (
                <div>
                  <div className="mt-4 text-basic">
                    <p>what is going on</p>
                  </div>
                  <div className="ml-4 mt-6">
                    <div className="border-b border-b-basic mb-2">
                      <p className="mb-2">Nudity</p>
                    </div>
                    <div className="border-b border-b-basic mb-2">
                      <p className="mb-2">Spam</p>
                    </div>
                    <div className="border-b border-b-basic mb-2">
                      <p className="mb-2">Violence</p>
                    </div>
                    <div className="border-b border-b-basic mb-2">
                      <p className="mb-2">Hate Speech</p>
                    </div>
                    <div className="border-b border-b-basic mb-2">
                      <p className="mb-2">Terroism</p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            className="mt-10 w-[300px]"
            onClick={() => setdeleteAcc((prev) => !prev)}
          >
            <div className="bg-light rounded-lg p-4">
              <div className="flex justify-between">
                <button className="flex items-center gap-2">
                  <MdOutlineAccountCircle size={25} />
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>

        <Outlet />
      </div>
      {deleteAcc ? (
        <Modal>
          <div className="bg-white w-[300px] sm:w-[600px] text-center p-5 rounded-lg h-[200px] flex flex-col items-center justify-center">
            <h1 className="font-bold text-basic text-lg">
              Are You Sure you Want Delete Account?
            </h1>
            <div className="flex items-center justify-center gap-5 mt-5">
              <button
                className="bg-Orange px-8 py-2 rounded-lg text-white font-bold text-lg"
                onClick={() => {
                  navigate("/");
                }}
              >
                Yes
              </button>
              <button
                className="bg-basic px-8 py-2 rounded-lg text-white font-bold text-lg"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Settings;
