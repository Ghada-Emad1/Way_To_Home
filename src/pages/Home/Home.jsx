import About from "/About.png";

import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div id="home">
      <div className="intro">
        <h1 className="font-bold text-9xl">The Way To Home</h1>
      </div>

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

      <Contacts/>
      <Footer/>
    </div>
  );
};

export default Home;
