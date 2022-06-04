import React from "react";
// import Jace from '../assets/Jace.jpg'

const Hero = () => {
  return (
    <div
      name="home"
      className="md:w-full md:h-screen bg-[#023147] pt-[6rem] leading-loose "
    >
      <div className="max-w-[1000px] md:w-full mx-auto px-8 flex flex-col justify center h-full">
        <h1 className="text-[#ccd6f6] text-base md:text-6xl">Hello, I'm</h1>{" "}
        <span className="text-3xl md:text-8xl font-bold text-[#7ccb57] pl-5 underline decoration-[#00d8ff] pb-3">
          JACE FEINSTEIN
        </span>
        <h2 className="text-[#ccd6f6] text-base font-bold">
          Full Stack Web Developer
        </h2>
        <p className="w-[100%] md:w-[50%] text-neutral-300 text-base pl-5 md:text-3xl">
          Full-stack web developer with certificate from UT Austin. Using my
          medical background to implement customer focused, responsive web
          design, with ever expanding skills in multiple coding languages. Great
          communicator, able to work in fast paced environment with a team
          dedicated to achieving their goals
        </p>
        {/* <img src={Jace} alt="Jace" /> */}
      </div>
    </div>
  );
};

export default Hero;
