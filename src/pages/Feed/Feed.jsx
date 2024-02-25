import {Outlet} from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { MdMessage } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import "./style.css"
const Feed = () => {
  return (
    <div>
        <input className='search' type='text'placeholder='Search items '/>
      <div className="main">
        <div className="cardfeed">
                <div className="content">
                    <div className='imagefont'>
                      <img  src="/Ellipse 7.png" alt="" />
                      <div className='discribtion'>
                        <h5>Unknown </h5>
                        <span>Needy</span>
                      </div>
                    </div>
                    <p>I need a home , I live under Dort bridge.</p>
                    <div className='icons'>
                    <CiHeart />
                    <MdMessage />
                    <AiOutlineExclamationCircle />
                    </div>
                </div>
        </div>
        <div className="cardfeed">
                <div className="content">
                    <div className='imagefont'>
                      <img  src="/Ellipse 8.png" alt="" />
                      <div className='discribtion'>
                        <h5> Mark </h5>
                        <span>Volunteer</span>
                      </div>
                    </div>
                    <p>I have a home for any one in need</p> 
                    {/* <p>address:Lorem ipsum dolor sit amet</p> */}
                    <div className='icons'>
                    <CiHeart  />
                    <MdMessage />
                    <AiOutlineExclamationCircle />
                    </div>
                </div>
        </div>
      </div>
        <Outlet/>
      
    </div>
  )
}

export default Feed
