import {Outlet }  from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import "./style.css";


const Shelter = () => {
  return (
    <div >
      
      <input className='search' type='text'placeholder='Search items '/>
          <div className="contaner">
        <div className="main">
            <div className="rightside">
                <img className='img' src="/Shelter1.png" alt="" title="imag her"/>
                <div className="box">
                  <div className='text'>
                    <h4>Phone : <span>01015154654</span></h4>
                    <h4>Address : <span>01015154654</span></h4>
                  </div>
                  <FaWhatsapp className='whats'/>
                    <input type="submit" value="Contact"/>
                </div>
                
            </div>
            <div className="leftside">
               <img className='imgleft' src="/map1.png" alt=""/> 
            </div>
        </div>
        <div className="main">
            <div className="rightside">
                <img className='img' src="/shelter2.png" alt=""/>
                <div className="box">
                  <div className='text'>
                    <h4>Phone : <span>777-888-999</span></h4>
                    <h4>Address : <span>22 ***street</span></h4>
                  </div>
                    <FaWhatsapp className='whats'/>
                    <input type="submit" value="Contact"/>
                </div>
            </div>
            <div className="leftside">
               <img className='imgleft' src="/map2.png" alt=""/> 
            </div>
        </div>
        <div className="main">
            <div className="rightside">
                <img className='img' src="/shelter4.png" alt="" title="imag her"/>
                <div className="box">
                  <div className='text'>
                    <h4>Phone : <span>777-888-999</span></h4>
                    <h4>Address : <span>22 ***street</span></h4>
                  </div>
                    <FaWhatsapp className='whats'/>
                    <input type="submit" value="Contact"/>
                </div>
            </div>
            <div className="leftside">
               <img className='imgleft' src="/map2.png" alt=""/> 
            </div>
            
        </div>
        {/* <div className="main">
            <div className="rightside">
                <img className='img' src="/Shelter.jpg" alt="" title="imag her"/>
                <div className="box">
                  <div className='text'>
                    <h4>Phone : <span>777-888-999</span></h4>
                    <h4>Address : <span>22 ***street</span></h4>
                  </div>
                  
                    <input type="submit" value="Contact"/>
                </div>
            </div>
            <div className="leftside">
               <img className='imgleft' src="/map2.png" alt=""/> 
            </div>
        </div> */}
    </div>
      <Outlet/>
    </div>
  )
}

export default Shelter
