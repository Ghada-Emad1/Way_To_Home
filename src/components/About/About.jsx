import experience from "/exprience.png";
import feedback from "/people.avif";

const About = () => {
  return (
    <div id="about" className="flex mb-14  w-5/6 mx-auto justify-between">
      <div className="flex  items-center jsutify-center">
        <div>
          <img
            src={feedback}
            alt=""
            className="w-[90px] relative -top-24 left-9 h-[90px] object-cover rounded-full"
          />
        </div>
        <div className="bg-white w-[300px] p-10 flex flex-col gap-4 shadow-lg">
          
          <p className="text-black/40">
            It Was a good experience ,I got accurate results ,This is not may
            last deal with the application 
          </p>
          <h1 className="font-bold ">Sara Omar</h1>
          <p className="text-black/40">Cairo,Egypt</p>
        </div>
        
        
      </div>
   

      <div className="hidden md:block">
        <img src={experience} className="w-[500px] h-[110vh] object-cover" />
      </div>
    </div>
  );
};

export default About;
