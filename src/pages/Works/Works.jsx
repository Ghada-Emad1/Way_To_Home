import { Outlet } from "react-router-dom";
import "./stylework.css";
const Works = () => {
  return (
    <div >
      {/* <IoIosSearch size={25} className="ico"/> */}
      <input className="search" type="text" placeholder="Search items " />
      <div className="main">
        <div className="card">
          <div className="content">
            <h2>Factory worker</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              repellendus, praesentium facere esse tempora eaque excepturi
              cumque rem laudantium dignissimos dicta aperiam ipsum optio animi
              nobis modi earum eius? Laborum.
            </p>
            <h5>
              Address: <span>*** street</span>
            </h5>
            <h5>
              Phone Number: <span>222-333-444</span>
            </h5>
            <h5>
              Salary: <span className="salary">200$</span>
            </h5>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2>Factory worker</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              repellendus, praesentium facere esse tempora eaque excepturi
              cumque rem laudantium dignissimos dicta aperiam ipsum optio animi
              nobis modi earum eius? Laborum.
            </p>
            <h5>
              Address: <span>*** street</span>
            </h5>
            <h5>
              Phone Number: <span>222-333-444</span>
            </h5>
            <h5>
              Salary: <span className="salary">200$</span>
            </h5>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2>Factory worker</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              repellendus, praesentium facere esse tempora eaque excepturi
              cumque rem laudantium dignissimos dicta aperiam ipsum optio animi
              nobis modi earum eius? Laborum.
            </p>
            <h5>
              Address: <span>*** street</span>
            </h5>
            <h5>
              Phone Number: <span>222-333-444</span>
            </h5>
            <h5>
              Salary: <span className="salary">200$</span>
            </h5>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2>Factory worker</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              repellendus, praesentium facere esse tempora eaque excepturi
              cumque rem laudantium dignissimos dicta aperiam ipsum optio animi
              nobis modi earum eius? Laborum.
            </p>
            <h5>
              Address: <span>*** street</span>
            </h5>
            <h5>
              Phone Number: <span>222-333-444</span>
            </h5>
            <h5>
              Salary: <span className="salary">200$</span>
            </h5>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2>Factory worker</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              repellendus, praesentium facere esse tempora eaque excepturi
              cumque rem laudantium dignissimos dicta aperiam ipsum optio animi
              nobis modi earum eius? Laborum.
            </p>
            <h5>
              Address: <span>*** street</span>
            </h5>
            <h5>
              Phone Number: <span>222-333-444</span>
            </h5>
            <h5>
              Salary: <span className="salary">200$</span>
            </h5>
          </div>
        </div>
       
        <div className="card">
          <div className="content">
            <h2>Factory worker</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              repellendus, praesentium facere esse tempora eaque excepturi
              cumque rem laudantium dignissimos dicta aperiam ipsum optio animi
              nobis modi earum eius? Laborum.
            </p>
            <h5>
              Address: <span>*** street</span>
            </h5>
            <h5>
              Phone Number: <span>222-333-444</span>
            </h5>
            <h5>
              Salary: <span className="salary">200$</span>
            </h5>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Works;
