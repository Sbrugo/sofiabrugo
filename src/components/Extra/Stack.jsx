// import githubicon from "../assets/github.svg";
// import file from "../assets/file.svg";
// import at from "../assets/at.svg";
import { stack } from "../../default_verbiage";

const Stack = () => {
  // const handleScrollClick = () => {
  //   window.location.hash = "projects";
  // };

  return (
    <div className="w-full px-4 py-6">
      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {stack.map((tech, index) => (
          <div key={index} title={tech.name}>
            <img
              src={tech.url}
              alt={tech.name}
              className="h-[60px] hover:scale-110 transition-transform duration-200"
            />
          </div>
        ))}
      </div>

      {/* Botones */}
      {/* <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        <a href="/developer-resume.pdf" download>
          <button className="py-3 px-4 bg-sky-50 border border-sky-300 rounded-full hover:bg-sky-100 hover:border-sky-500 hover:text-sky-600 flex gap-2 items-center transition">
            <span className="sm:block hidden">See Resume</span>
            <img src={file} alt="resume" className="sm:h-[15px] h-[27px]" />
          </button>
        </a>

        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="py-3 px-4 bg-sky-50 border border-sky-300 rounded-full hover:bg-sky-100 hover:border-sky-500 hover:text-sky-600 flex gap-2 items-center transition">
            <span className="sm:block hidden">See Github</span>
            <img src={githubicon} alt="GitHub" className="sm:h-[17px]" />
          </button>
        </a>

        <a href="mailto:tuemail@gmail.com">
          <button className="py-3 px-4 bg-sky-50 border border-sky-300 rounded-full hover:bg-sky-100 hover:border-sky-500 hover:text-sky-600 flex gap-2 items-center transition">
            <span className="sm:block hidden">Contact</span>
            <img src={at} alt="contact" className="sm:h-[17px] h-[30px]" />
          </button>
        </a>

        <button
          className="py-3 px-4 bg-sky-200 border border-sky-600 rounded-full hover:bg-sky-50 hover:border-sky-300 hover:text-sky-500 flex gap-2 items-center transition"
          onClick={handleScrollClick}
        >
          Projects
        </button> 
      </div>*/}
    </div>
  );
};

export default Stack;
