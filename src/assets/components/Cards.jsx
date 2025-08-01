import { NavLink } from "react-router";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.jpeg";

export default function Cards() {
  return (
    <section className="py-12 px-9 max-w-4xl mx-auto">
      <div className=" h-xl">
        <div className="flex flex-col justify-center items-center lg:flex-row">
          <div className="h-56 lg:h-72 w-full lg:w-72 bg-custom-gradient1  rounded-2xl lg:-rotate-12 hover:scale-105 transition shadow-xl duration-300 hover:z-20 flex items-center justify-center overflow-hidden">
            <a
              className="bg-custom-gradient1 "
              href="https://theshoecompany0.netlify.app/"
            >
              {" "}
              <img
                className="max-w-full max-h-full object-contain"
                src={image1}
                alt=""
              />
            </a>
          </div>
          <div className="h-56 lg:h-72 w-full lg:w-72 mt-6 lg:mt-0 bg-custom-gradient2  rounded-2xl hover:scale-105 transition duration-300 shadow-xl z-10 flex items-center justify-center overflow-hidden">
            <a
              className="bg-custom-gradient2"
              href="https://close-to-the-world-app.netlify.app/"
            >
              {" "}
              <img
                className="max-w-full max-h-full object-contain"
                src={image2}
                alt=""
              />
            </a>
          </div>
          <div className="h-56 lg:h-72 w-full lg:w-72 mt-6 lg:mt-0 bg-custom-gradient3  rounded-2xl lg:rotate-12 hover:scale-105 transition shadow-xl duration-300 hover:z-20 flex items-center justify-center overflow-hidden">
            <a
              className="bg-custom-gradient3"
              href="https://quoteverse1.netlify.app/"
            >
              {" "}
              <img
                className="max-w-full max-h-full object-contain"
                src={image3}
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="text-sm md:text-lg mt-20 text-center border border-gray-600 rounded-full w-fit mx-auto flex justify-center items-center px-4 py-3 gap-3 hover:gap-4 hover:scale-105 hover:bg-[#404040] hover:cursor-pointer transition duration-300">
          <NavLink className="" to="/works">
            View more projects
          </NavLink>
          <span>→</span>
        </div>
      </div>
    </section>
  );
}
