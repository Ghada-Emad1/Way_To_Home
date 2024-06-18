import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { Shelter, addUserpost } from "../../AddReducer/AddReducer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Add = () => {
  const navgate = useNavigate()
  const dispatch = useDispatch()
  // Add post 
  const [addpost , setaddpost] = useState(false);
  const [despost , setdespost] = useState('');
  const [error , seterror] = useState({despost :''});
  const titledes = useSelector((state) => state.Addfeed.addpost);
 
  const hundelsubmitfeed = (e)=>{
    e.preventDefault();
    let newErrors = { despost :''  };
    if (despost =='') {
        
        newErrors.despost = 'Please enter your Post';
        seterror(newErrors);
    }
    if (despost !== '') {
        dispatch(addUserpost({ id :titledes.length +1 , postt:despost ,  } ))
        navgate("/dashboard/feed")
        //seterror({ despost: '' });
        setdespost('')
        setaddpost(false)
 
    }
  };

 // Add shelter 
 const stylee =`focus:outline-Orange px-2 py-2 rounded-md  border border-basic w-[300px] mb-2 `
  const [addShelter , setShelter] = useState(false);
  const [addres , setaddres] = useState('');
  const [desc , setdesc] = useState('');
  const [contact , setcontact] = useState('');
  const [Phone , setphone] = useState('');
  const [errors , seterrors] = useState(
      {
      addres :'',   
      desc :'' ,       
      Phone :'' ,      
  });
  const addshelter = useSelector((state)=> state.Addfeed.addShelter)

  // submit for shelter 
    
  const hundelsubmitshelter = (e)=>{
    e.preventDefault();
    let newErrors = {
        addres: '',
        desc: '',
        Phone: ''
    };

    if (addres == '') {
        newErrors.addres = 'Please enter your address';
    }

    if (desc =='') {
        newErrors.desc = 'Please enter a description';
    }

    if (Phone =='') {
        newErrors.Phone = 'Please enter your phone number';
    }

    seterrors(newErrors);
    
    if (addres && desc && Phone) {
        
        dispatch(Shelter({ id:addshelter.length +1 , addrese:addres , description:desc ,  phone:Phone } ));
        navgate("/dashboard/shelter");
        setaddres('');
        setdesc('');
        setphone('');

        setShelter(false);
    }
    
};

  return (
    <div>
      <div className="w-[120px] md:w-[300px] bg-white flex gap-4 flex-col p-4 rounded-lg">
        <h1 className="text-center font-bold text-basic text-xl">Add</h1>
        <div className="flex justify-center  flex-wrap gap-4">
          <button className="bg-Orange  text-white px-2 md:px-6 py-2 rounded-lg "
          onClick={ ()=> setShelter((prev) => !prev )}
          >
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
        {/* Add shelter */}
        {addShelter ? (
            <Modal>
                <div className="bg-white w-[350px] sm:w-[600px] text-center p-5 rounded-lg h-[480px] flex flex-col items-center justify-center relative  ">
                    <button className='absolute top-5 right-5 text-basic'
                    onClick={()=> setShelter(false)}
                    >
                        <IoMdClose size={25}/>
                    </button>
                    <h1 className='text-[30px] text-Orange'>Add Shelter </h1>
                    <div className="  mt-5">
                        <form onSubmit={hundelsubmitshelter}
                        className='  gap-3'>
                            <div className='flex flex-col justify-start items-start    '>
                                
                                    <label className="font-bold text-basic mb-2"> your Address</label>
                                    <input type='text'
                                        onChange={(e)=>{ 
                                            setaddres(e.target.value);
                                            seterrors({ addres: '' });

                                        }}
                                        placeholder='Enter your Address'
                                    className={stylee}
                                    />

                                    {errors.addres && <span className="text-red-500">{errors.addres}</span>}
                               

                                <label className="font-bold text-basic mb-2">  Describtion  </label>
                                <input type='text'
                                    onChange={(e)=> {
                                        setdesc(e.target.value);
                                        seterrors({ desc: '' });

                                    }}
                                    placeholder='Enter your Describtion'
                                    
                                className={stylee}
                                
                                />
                                {errors.desc && <span className="text-red-500">{errors.desc}</span>}
                                
                                {/* <label className="font-bold text-basic mb-2"> Contact </label>
                                <input type='text'
                                    onChange={(e)=> setcontact(e.target.value)}

                                    
                                className={stylee}
                                /> */}

                                
                                <label className="font-bold text-basic mb-2"> Phone  </label>
                                <input type='text'
                                    onChange={(e)=> {
                                        setphone(e.target.value);
                                        seterrors({ Phone: '' });
                                    }}
                                    placeholder='Enter your phone'
                                className={stylee}
                                />
                                {errors.Phone && <span className="text-red-500">{errors.Phone}</span>}
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

export default Add;
