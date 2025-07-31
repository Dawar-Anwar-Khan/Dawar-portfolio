import { useEffect, useState } from "react";
import works from "./works";

export default function Works() {
  const [onHover, setOnHover] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-[100%] mx-auto mb-32 mt-32">
      <div className="mb-12">
        <h1 className="text-center text-4xl font-bold font-garamond">
          Latest Projects & Activities
        </h1>
      </div>
      {works.map((work) => {
        const isHovered = onHover === work.title;

        return (
          <div
            key={work.title}
            className={`w-1/2 mx-auto rounded-lg border border-[#404040] p-3 bg-[#252525] mb-4 ${
              isHovered && "hover:mb-5 transition-all duration-3000"
            }`}
            onMouseEnter={(e) => {
              e.stopPropagation();
              setOnHover(work.title);
            }}
            onMouseLeave={(e) => {
              e.stopPropagation();
              setOnHover(null);
            }}
          >
            <div className="flex justify-between items-center">
              <h3 className="mb-3 text-xl">{work.title}</h3>
              <span>→</span>
            </div>
            <div>
              <p
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isHovered
                    ? "max-h-[200px] opacity-100 mb-4"
                    : "max-h-0 opacity-0 mb-0"
                }`}
              >
                {work.context}
              </p>
            </div>
            <div className="flex gap-3 ml-1 mt-0">
              <a
                className="hover:shadow-[0_0_11px_rgba(255,255,255,0.5)] text-white border border-[#313131]  bg-[#313131] rounded-2xl py-1 px-2 text-sm"
                href={work.link}
              >
                Live Demo
              </a>
              <a
                className="hover:shadow-[0_0_11px_rgba(255,255,255,0.5)] text-white border border-[#313131]  bg-[#313131] rounded-2xl py-1 px-2 text-sm"
                href={work.code}
              >
                Code
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
