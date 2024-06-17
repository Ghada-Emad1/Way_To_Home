import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { addUser } from "../../AddReducer/AddReducer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Add = () => {
  const navgate = useNavigate()
  const dispatch = useDispatch()
  // Add post 
  const [addpost , setaddpost] = useState(false);
  const [despost , setdespost] = useState('');
  const [error , seterror] = useState({despost :''});
  const titledes = useSelector((state) => state.Addfeed);
 
  const hundelsubmitfeed = (e)=>{
    e.preventDefault();
    
    let newErrors = { despost :''  };
    if (despost =='') {
        
        newErrors.despost = 'Please enter your Post';
        seterror(newErrors);
    }

    if (despost !== '') {
        dispatch(addUser({ id :titledes.length +1 , postt:despost ,  } ))
        navgate("/dashboard/feed")
        //seterror({ despost: '' });
        setdespost('')
        setaddpost(false)
        
        
    }
    
};





  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(addUser({ post }));
  // };
  return (
    <div>
      <div className="w-[120px] md:w-[300px] bg-white flex gap-4 flex-col p-4 rounded-lg">
        <h1 className="text-center font-bold text-basic text-xl">Add</h1>
        <div className="flex justify-center  flex-wrap gap-4">
          <button className="bg-Orange  text-white px-2 md:px-6 py-2 rounded-lg ">
            Shelter
          </button>
          <Link
            to="/dashboard/restaurant"
            className="bg-Orange  w-[90px] text-white px-2 md:px-6 py-2 rounded-lg "
          >
            Restaurant
          </Link>
          <div
            className="bg-Orange   text-white cursor-pointer px-4 md:px-6 py-2 rounded-lg "
            onClick={() => setaddpost((prev) => !prev)}
          >
            Post
          </div>
          <Link
            to="/dashboard/missing"
            className="bg-Orange text-white  px-2 md:px-6 py-2 rounded-lg "
          >
            Missing
          </Link>
        </div>
      </div>
      {addpost ? (
        <Modal>
          <div className="bg-white w-11/12 sm:w-[600px] text-center p-5 rounded-lg h-[200px] flex flex-col items-center justify-center relative  flex-nowrap ">
                <button className='absolute top-5 right-5 text-basic'
                onClick={()=> setaddpost(false)}
                >
                    <IoMdClose size={25}/>
                </button>
                <h1 className='text-[20px] text-Text'>Add Your Post </h1>
                <div className="  gap-5 mt-5">
                    <form onSubmit={hundelsubmitfeed}
                    className='flex flex-row items-center justify-center gap-2'> 
                        <div className='flex flex-col justify-center ite' >

                        
                        <input type="text"
                        onChange={(e)=>{

                            setdespost(e.target.value) 
                            seterror({ despost: '' }); 
                        }}
                        
                        className="focus:outline-Orange px-2 py-2 rounded-sm  border border-basic w-[300px]" 
                        placeholder='Add Your Post..'/>

                        {error.despost && <span className="text-red-500">{error.despost}</span>}

                        
                        </div>

                         
                        
                        <button className="bg-Orange text-white rounded-lg px-6 py-2">
                            Add
                        </button>
                    </form>

                   
                </div>
            </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Add;
