import { Outlet } from "react-router-dom";

import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import {useSelector,useDispatch} from 'react-redux'
import "./style.css";
import { useState } from "react";
const Feed = () => {
  const users=useSelector((state)=>state.users)
  const dispatch=useDispatch();
  const[color,setcolor]=useState("")
  const handleLike=()=>{
    if(color=='red'){
      setcolor("")
    }else{
      setcolor("red")
    }

  }
  return (
    <div className="flex gap-3 mx-6 my-4 flex-wrap">
      {users.map((element, index) => (
        <div className="bg-light w-[350px] flex flex-col gap-4 p-3 rounded-lg" key={index}>
          <div className="flex items-center gap-2">
            <img src={element.img} />
            <div>
              <h1 className="font-bold text-sm text-Orange">{element.name}</h1>
              <p className="font-bold text-sm text-Orange">{element.description}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <p>{element.post}</p>
          </div>
          <div className="flex justify-center">
            <AiFillLike color={color}  onClick={handleLike}/>
            <AiFillDislike/>
            
          </div>
        </div>
      ))}

      <Outlet />
    </div>
  );
};


export default Feed;
