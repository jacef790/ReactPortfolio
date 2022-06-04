import React from "react";


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

        <div className="grid grid-col-1 md:grid-cols-2 gap-4 bg-[#7ccb57]">
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className=" ">
              <span className="text-2xl font-bold text-[#023147] tracking-wider">
                Quacker, a social media experience
              </span>
              <div className="pt-8 text-center">
                <a href="https://glacial-shelf-75917.herokuapp.com/" target='blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/cycoconutz/Project-2-Quacker" target='blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className=" ">
              <span className="text-2xl font-bold text-[#023147] tracking-wider">
                Compatibility Finder
              </span>
              <div className="pt-8 text-center">
                <a href="https://tim-zebra.github.io/Compatible-or-Not_Find-true-love-here./" target='blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Tim-Zebra/Compatible-or-Not_Find-true-love-here." target='blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          
        
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className=" ">
              <span className="text-2xl font-bold text-[#023147] tracking-wider">
                Note Taker
              </span>
              <div className="pt-8 text-center">
                <a href="https://murmuring-cliffs-95595.herokuapp.com/" target='blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jacef790/Note-Taker" target='blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
         
          
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className=" ">
              <span className="text-2xl font-bold text-[#023147] tracking-wider">
                Password Generator
              </span>
              <div className="pt-8 text-center">
                <a href="https://jacef790.github.io/HW-03-PasswordGenerator/" target='blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/jacef790/HW-03-PasswordGenerator" target='blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
