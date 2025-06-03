import githubicon from "../assets/github.svg";
import file from "../assets/file.svg";
import at from "../assets/at.svg";

import { stack } from "../default_verbiage";
const Stack = () => {
  const handleScrollClick = () => {
    window.location.hash = "projects";
  };
  return (
    <div className="p-4 flex flex-wrap justify-around gap-10">
      {stack.map((tech, index) => (
        <div key={index}>
          <img src={tech.url} className="h-[60px]" />
        </div>
      ))}
      <div className="flex flex-wrap w-full justify-center gap-2 sm:gap-0 sm:justify-between">
        <a href="/developer-resume.pdf" download>
          <button className="py-4 px-2 bg-sky-50 border border-sky-300 rounded-full hover:bg-sky-100 hover:border-sky-500 hover:text-sky-600 flex gap-2 items-center">
            <span className="sm:block hidden">See Resume </span>
            <img src={file} alt="file icon" className="sm:h-[15px] h-[27px]" />
          </button>
        </a>
        <button className="py-4 px-2 bg-sky-50 border border-sky-300 rounded-full hover:bg-sky-100 hover:border-sky-500 hover:text-sky-600 flex gap-2 items-center">
          <span className="sm:block hidden">See Github</span>{" "}
          <img src={githubicon} alt="github icon" className="sm:h-[17px]" />
        </button>
        <button className="py-4 px-2 bg-sky-50 border border-sky-300 rounded-full hover:bg-sky-100 hover:border-sky-500 hover:text-sky-600 flex gap-2 items-center">
          <span className="sm:block hidden">Contact </span>
          <img src={at} alt="github icon" className="sm:h-[17px] h-[30px]" />
        </button>
        <button
          className="py-4 px-2 bg-sky-200 border border-sky-600 rounded-full hover:bg-sky-50 hover:border-sky-300 hover:text-sky-500 flex gap-2 items-center"
          onClick={handleScrollClick}
        >
          Projects
        </button>
      </div>
    </div>
  );
};

export default Stack;
