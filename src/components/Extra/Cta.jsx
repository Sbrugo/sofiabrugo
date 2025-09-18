import React from "react";
import githubicon from "../assets/github.svg";
import file from "../assets/file.svg";
import at from "../assets/at.svg";

const Cta = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      <a href="/developer-resume.pdf" download>
        <button className="py-3 px-4 bg-sky-50 border border-bg-indigo-900 rounded-full hover:bg-sky-100 hover:border-sky-500 hover:text-sky-600 flex gap-2 items-center transition">
          <img src={file} alt="resume" className="sm:h-[17px] h-[27px]" />
        </button>
      </a>

      <a
        href="https://github.com/tuusuario"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="py-3 px-4 bg-sky-50 border border-bg-indigo-900 rounded-full hover:bg-sky-100 hover:border-sky-500 hover:text-sky-600 flex gap-2 items-center transition">
          <img src={githubicon} alt="GitHub" className="sm:h-[17px]" />
        </button>
      </a>

      <a href="mailto:tuemail@gmail.com">
        <button className="py-3 px-4 bg-sky-50 border border-bg-indigo-900 rounded-full hover:bg-sky-100 hover:border-sky-500 hover:text-sky-600 flex gap-2 items-center transition">
          <img src={at} alt="contact" className="sm:h-[17px] h-[30px]" />
        </button>
      </a>
    </div>
  );
};

export default Cta;
