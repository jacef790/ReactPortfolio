import React from "react";
import Comp from "../assets/comp.jpg";
import JS from "../assets/js.jpg";
import Keyboard from "../assets/keyboard.jpg";
import Led from "../assets/led.jpg";
import Love from "../assets/love.jpg";
import Duck from "../assets/duck.jpg";

const Projects = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#023147]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <div>
            <p className="text-4xl text-center font-bold flex justify-center underline decoration-[#7ccb57] text-gray-300">
              Work
            </p>
          </div>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 gap-4">
          <div
            style={{ backgroundImage: `url(${Duck})`}}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
