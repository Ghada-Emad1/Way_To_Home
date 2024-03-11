import { Outlet } from "react-router-dom";
import { FoodList } from "../../data/FoodList";
import { FaWhatsapp } from "react-icons/fa6";
//import "./style.css"

const Food = () => {
  return (
    <div className="bg-white flex flex-col overflow-auto h-[100vh] text-nowrap">
      <div className="flex gap-5 justify-center my-4">
        <input
          type="text"
          placeholder="Search for Your restaurant"
          className="rounded-lg border border-basic w-[350px] p-2"
        />
        <button className="rounded-lg bg-basic px-6 py-2 text-white font-semibold">
          Search
        </button>
      </div>
      <div className=" grid grid-cols-2 gap-4 mx-4 bg-white">
        {FoodList.map((element, index) => (
          <div key={index} className=" content flex flex-row gap-2 max-sm:flex flex-row ">
            <div>
            <div>
              <img
                className="w-[200px] h-[150px] object-cover rounded-lg"
                src={element.img}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>
                <span className="text-basic font-bold">Restaurant:</span>{" "}
                {element.Name}
              </h1>
              <p>
                <span className="text-basic font-bold">Address: </span>
                {element.Address}
              </p>
              <div>
                <button className="bg-basic rounded-lg text-white flex items-center gap-2 px-6 py-2">
                  <FaWhatsapp /> {element.contact}
                </button>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Food;
