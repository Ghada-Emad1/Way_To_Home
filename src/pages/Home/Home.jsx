import About from "/About.png";
import Blog from "/blog.png";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import Features from "../../components/Features/Features";
const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div className="flex py-10 sm:pt-20 px-10 sm:px-24 bg-light">
        <div className="flex   md:mt-[12rem] flex-col gap-10 ">
          <h1 className="font-bold text-4xl text-basic">
            H<span className="text-Orange ">O</span>ME CAMPASS
          </h1>
          <p className="md:pr-[300px] text-sm text-basic">
            The first application to help the homeless by displaying shelters,
            organizations that support them, and restaurants that provide free
            meals for them
          </p>
          <Link to="/signup" className="bg-Orange w-[120px] text-center rounded-lg py-2 text-white hover:bg-Orange/50">Get Started</Link>
        </div>
        

        <div className=" hidden md:block w-[860px] h-[740px] bg-basic py-6 relative ">
          <img
            src={Blog}
            className=" absolute top-0   w-[600px] h-[100vh] object-cover"
          />
        </div>
      </div>



      <Features/>

      <div
        id="about"
        className="my-14  text-lg text-center block sm:flex items-center justify-center sm:text-left p-6"
      >
        <div className="w-full sm:w-1/3 flex flex-col gap-10">
          <h1 className="font-bold text-basic text-3xl capitalize">
            The Home Compass application helps you find homeless people in
            different places
          </h1>
          <p className="text-left">
            Homelessness is a critical issue, as individuals struggle to find
            shelter and work and some people find it difficult to reach them for
            help. That{"'"}s why our project offers a solution to these problems
          </p>
        </div>
        <div>
          <img src={About} className="w-[900px] h-[500px] object-cover" />
        </div>
      </div>

      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
