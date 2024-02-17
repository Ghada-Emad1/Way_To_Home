import { sliderData } from "../../data/slider";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
register();
const Features = () => {
  const swipeRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swipeRef.current;
    const params = {
      slidesPerView: 3,
      navigation: true,
      pagination: true,
      //our New Styles
      injectStyles: [
        `.swiper-button-next,
        .swiper-button-prev{
          background-color:white;
          padding:8px 16px;
          border-radius:100%;
          border:2px solide black;
          color:#EB6440;
        }
        .swiper-pagination-bullet{
          width:10px;
          height:10px;
          background-color:#EB6440;
        }`,
      ],
      breakpoints: {
         340: {
          slidesPerView:1
        },
      },
      
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <div id="prop">
      <div className="text-center">
        <h1 className="font-bold text-4xl mt-6">
          Featured <span className="text-Orange">Properites</span>
        </h1>
        <p className="text-sm text-Orange mt-1">
          helps you find homeless people in different places
        </p>
      </div>
      <div className=" w-5/6 mx-auto  ">
        <div className="">
          <swiper-container ref={swipeRef} init="false" class="container">
            {sliderData.map((data, index) => (
              <swiper-slide key={index} class="slide1 view">
                <div className="mr-5">
                  <img
                    className="w-[560px] h-[250px]  object-cover"
                    src={data.img}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold mt-2 text-lg">{data.Name}</p>
                  <h1 className="text-sm font-semibold">{data.description}</h1>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
    </div>
  );
};

export default Features;
