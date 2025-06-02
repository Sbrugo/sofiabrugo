// import image from "../assets/medium.jpg";
// import image2 from "../assets/image_2.png";
// import image3 from "../assets/image_3.png";
// import html from "../assets/html.png";
// import git from "../assets/git.png";
// import css from "../assets/css.png";
// import java from "../assets/java.png";
// import js from "../assets/js.png";
// import mongo from "../assets/mongo.png";
// import nestjs from "../assets/nestjs.png";
// import react from "../assets/react.png";
import { stack } from "../default_verbiage";
const Stack = () => {
  return (
    <div className="p-4 flex flex-wrap gap-4">
      {stack.map((tech, index) => (
        <div key={index}>
          <img src={tech.url} className="h-[60px]" />
        </div>
      ))}
    </div>
  );
};

export default Stack;
