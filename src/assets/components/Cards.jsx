import { NavLink } from "react-router";
import image1 from "../images/image1.png";
import taskforgeImg from "../images/taskforge.png";
import shopperImg from "../images/shopper-app.png";

const featuredProjects = [
  {
    title: "The Shoe Company",
    tagline: "Footwear brand landing",
    link: "https://theshoecompany0.netlify.app/",
    image: image1,
    gradient: "bg-custom-gradient1",
  },
  {
    title: "TaskForge",
    tagline: "HR task management · Next.js · MongoDB",
    link: "https://task-forge-ruby.vercel.app/",
    image: taskforgeImg,
    gradient: "bg-gradient-to-b from-slate-800 to-slate-900",
  },
  {
    title: "SHOP.CO",
    tagline: "E-commerce UI · React · Tailwind",
    link: "https://the-shopper-app.netlify.app",
    image: shopperImg,
    gradient: "bg-gradient-to-b from-stone-100 to-stone-200",
  },
];

export default function Cards() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-200 mb-2 tracking-tight">
        Featured work
      </h2>
      <p className="text-gray-500 text-center text-sm md:text-base mb-10 max-w-lg mx-auto">
        Full-stack and UI-focused projects — from HR systems to e-commerce
      </p>
      <div className="flex flex-col justify-center items-center gap-8 lg:flex-row lg:gap-6">
        {featuredProjects.map((project, i) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative h-64 lg:h-80 w-full lg:w-80 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] hover:shadow-2xl hover:z-10 transition-all duration-300 flex-shrink-0 ${i === 0 ? "lg:-rotate-6" : i === 2 ? "lg:rotate-6" : ""}`}
          >
            <div
              className={`absolute inset-0 ${project.gradient} opacity-95 group-hover:opacity-100 transition-opacity`}
            />
            <img
              className="absolute inset-0 w-full h-full object-cover object-top"
              src={project.image}
              alt={project.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="font-semibold text-base drop-shadow-md">
                {project.title}
              </p>
              <p className="text-gray-300 text-xs mt-0.5">{project.tagline}</p>
              <span className="inline-block mt-2 text-blue-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                View project →
              </span>
            </div>
          </a>
        ))}
      </div>
      <div className="text-sm md:text-lg mt-14 text-center border border-gray-600 rounded-full w-fit mx-auto flex justify-center items-center px-4 py-3 gap-3 hover:gap-4 hover:scale-105 hover:bg-[#404040] hover:cursor-pointer transition duration-300">
        <NavLink className="" to="/works">
          View more projects
        </NavLink>
        <span>→</span>
      </div>
    </section>
  );
}
