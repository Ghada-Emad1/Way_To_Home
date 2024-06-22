import { Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import ProfileImage from "/people.avif";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";
import Modal from "../../components/Modal/Modal";
import { deleteuser } from "../../AddReducer/AddUserInfo";
import { addUserInfo } from "../../AddReducer/AddUserInfo";
const Settings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch ();
  const users = useSelector((state) => state.Adduser.userInfo);
  const [showInfo, setShowInfo] = useState(false);
  const [showNotifi, setshowNotifi] = useState(false);
  const [showReport, setshowReport] = useState(false);
  const [deleteAcc, setdeleteAcc] = useState(false); 
  const [percent, setpercent] = useState('50%'); 
  console.log(users);
  const handleLogout = () => {
    if (users.length > 0) {
      dispatch(deleteuser(users[0].id));
      //navgate("/")
      
    }
  };

  //add more infomation user 
  const stylee =`focus:outline-Orange px-2 py-1 rounded-md  border border-basic w-[300px] mb-2 `
  const [addmoreinform , setaddmoreinform] =useState(false);
  const [addphone , setaddphone] =useState('');
  const [addgender , setaddgender] =useState('');
  const [error , seterror] = useState({addphone :'' ,addgender :'' });
  const onsubmit = (e) => {
    e.preventDefault();
    let newErrors = { addphone :'' ,addgender :''  };
    if (addphone =='') {
        
        newErrors.addphone = 'Please Enter Your Phone';
        
    }
    if (addgender =='') {
        
        newErrors.addgender = 'Please Enter Your Gender';
    }
    seterror(newErrors);
    if ( addphone && addgender && users.length > 0) {
      dispatch(
        addUserInfo({ id: users[0].id, phone: addphone, gender: addgender })
      );
      setaddmoreinform(false); // Close the modal after submitting
      setaddphone('');
      setaddgender('');
      setpercent('75%')

    }
  };
  
    // const onsubmit =(e)=>{
        
    //     e.preventDefault();
    //     dispatch(
    //       addUserInfo({ phone:addphone , gender:addgender })
    //     );
        
    // }
    

  return (
    <div className="  h-[100vh] overflow-auto text-nowrap">
        <div className="relative flex items-center mt-2 m-auto w-11/12">
          <CiSearch className="absolute top-[10px] left-1 text-gray-500" size={19}/>
          <input className= ' bg-[#dcdfdf] p-2 rounded-sm pl-10 w-[70%]' type="text " 
            placeholder='Search Items 'style={{ textAlign: 'left',  paddingLeft: '25px' }}
            
            
          />
        </div>
          
          
      <div className="grid  md-grid-cols-2 grid-cols-1">
        <div className="mx-10 w-[310px] mt-5">

        <div className="flex  flex-row items-center mb-3 ">
            <div className="text-[#497174]">

            <MdArrowBackIosNew size={23} />
            </div>
            <h1 className=" text-[24px] font-semibold mx-2" >
            Settings

            </h1>
          </div>


          <div className="flex flex-row max-md:flex-col w-full bg-teal-900 p-6 gap-6 rounded-md">
            <div className="bg-[#497174] flex justify-center items-center p-3 rounded-full border-2 border-inherit h-[70px]">

            <h1 className="text-white text-[24px] font-semibold leading-7">{percent}</h1>

            </div>
            <div className="flex flex-col ">
              <h1 className="text-white text-[18px] font-semibold  leading-7">Profile Information</h1>
              <p className="text-white  text-[14px] font-thin  leading-7">Lorem ipsum dolor sit amet</p>
              <button className="bg-white text-teal-900  rounded-md py-1 mt-2 font-semibold px-1 "
              onClick={() => setaddmoreinform((prev) => !prev)}
              >Complete your profile</button>
            </div>

           
          </div>
          
          


          <h1 className=" font-bold text-xl mb-3 text-[#848484]">General</h1>
          <div className="bg-light rounded-lg p-4">
            <div className="flex justify-between">
              <button className="flex items-center gap-2 text-[15px] font-semibold text-[#497174] ">
                <MdOutlineAccountCircle size={25} />
                Account
              </button>
              <button
                className=" transition-all ease-out duration-150 text-[#497174]"
                onClick={() => setShowInfo((prev) => !prev)}
              >
                <IoIosArrowDown  size={20} />
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
                {users.length >0  ?  users.map((element)=>(
                <div>
                  <h1>
                    <span className="font-semibold text-basic text-lg">
                      Name:
                    </span>
                    {element.username}
                  </h1>
                  <p>
                    <span className="font-semibold text-basic text-lg">
                      Email :
                    </span>
                    {element.email}
                  </p>
                  <p>
                    <span className="font-semibold text-basic text-lg">
                      Phone:
                    </span>
                    {element.phone}
                  </p>
                  <p>
                    <span className="font-semibold text-basic text-lg">
                      Gender:
                    </span>
                    {element.gender}
                  </p>
                </div>
                )):""}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="bg-light rounded-lg p-4 mt-6">
            <div className="flex justify-between">
              <button className="flex items-center gap-2 text-[15px] font-semibold text-[#497174]">
                <IoMdNotificationsOutline size={25} />
                Notification
              </button>
              <button className=" transition-all ease-out duration-150 text-[#497174]">
                <IoIosArrowDown 
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
            <h1 className="text-[#848484] font-bold text-xl mb-3">FeedBack</h1>
            <div className="bg-light rounded-lg p-4">
              <div className="flex justify-between">
                <button className="flex items-center gap-2 text-[15px] font-semibold text-[#497174]">
                  <MdOutlineAccountCircle size={25} />
                  Report
                </button>
                <button className=" transition-all ease-out duration-150 text-[#497174]">
                  <IoIosArrowDown 
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
                      <p className="mb-2 hover:text-Orange">Nudity</p>
                    </div>
                    <div className="border-b border-b-basic mb-2">
                      <p className="mb-2 hover:text-Orange">Spam</p>
                    </div>
                    <div className="border-b border-b-basic mb-2">
                      <p className="mb-2 hover:text-Orange">Violence</p>
                    </div>
                    <div className="border-b border-b-basic mb-2">
                      <p className="mb-2 hover:text-Orange">Hate Speech</p>
                    </div>
                    <div className="border-b border-b-basic mb-2">
                      <p className="mb-2 hover:text-Orange">Terroism</p>
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
                <button className="flex items-center gap-2 text-[15px] font-semibold text-[#497174]">
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
          <div className="bg-white w-[300px] sm:w-[600px] text-center p-5 rounded-lg h-[200px] flex flex-col items-center justify-center relative">
          <button className='absolute top-5 right-5 text-basic'
                onClick={()=> setdeleteAcc(false)}
                >
                    <IoMdClose size={25}/>
                </button>
            <h1 className="font-bold text-basic text-lg">
              Are You Sure you Want Delete Account?
            </h1>
            <div className="flex items-center justify-center gap-5 mt-5">
              <button
                className="bg-Orange px-8 py-2 rounded-lg text-white font-bold text-lg"
                onClick={handleLogout}
                // onClick={() => {{handleLogout}
                //   //navigate("/");
                // }}
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
    {/* add more information phone and Gender */}
    {addmoreinform ? (
        <Modal>
            <div className="bg-white w-[350px] sm:w-[500px] text-center p-5 rounded-lg  flex flex-col items-center justify-center relative  ">
                <button className='absolute top-5 right-5 text-basic'
                onClick={()=> setaddmoreinform(false)}
                >
                    <IoMdClose size={25}/>
                </button>
                <h1 className='text-[30px] text-Orange'>Add More Information </h1>
                <div className="  gap-5 mt-5">
                <form onSubmit={onsubmit}
                        className='  gap-3'>
                            <div className='flex flex-col justify-start items-start    '>
                                
                                    <label className="font-bold text-basic mb-2"> Your Phone</label>
                                    <input type='text'
                                       onChange={(e) => setaddphone(e.target.value)}
                                        placeholder='Enter your Phone'
                                    className={stylee}
                                    />
                                      {error.addphone && <span className="text-red-500">{error.addphone}</span>}
                                    
                               

                                <label className="font-bold text-basic mb-2">  Gender  </label>
                                <input type='text'
                                  onChange={(e) => setaddgender(e.target.value)}
                                    placeholder='Enter your Gender'
                                    
                                className={stylee}
                                
                                />
                                
                                {error.addgender && <span className="text-red-500">{error.addgender}</span>}
                                <div>

                                    <button className='px-6 py-2 rounded-md text-white bg-Orange mt-1'>Add</button>
                                </div> 

                               
                            </div>
                        </form>

                   
                </div>
            </div>
        </Modal>

    ):null}


    </div>
  );
};

export default Settings;
