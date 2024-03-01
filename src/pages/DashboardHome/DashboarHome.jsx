import { Link } from "react-router-dom";
import { HomelessDashboard } from "../../data/HomelessDasboard";

const DashboarHome = () => {
  return (
    <div>
      <div className="flex justify-center m-4">
        <input
          className="w-[350px] px-3 py-1 rounded-lg border border-basic"
          type="text"
          placeholder="Search item"
          name=""
          id=""
        />
      </div>
      <div className=" mt-8 flex flex-wrap justify-center gap-10 ">
        {HomelessDashboard.map((element, index) => (
          <div  key={index}>
            <Link className="flex" to={element.link}>
              <img className="w-[300px] h-[250px] object-cover rounded-lg" src={element.img} alt="" />
              
            </Link>
            <p className="text-center mt-2 font-semibold text-basic">{element.name}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboarHome;
