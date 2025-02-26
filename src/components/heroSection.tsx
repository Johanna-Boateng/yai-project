import React from "react";
import Button from "./shared/button";
import Nav from "./shared/nav";
interface HeroSectionProps {
  title: string;
  onClick: () => void;
  hasButton: boolean;
}
const HeroSection = ({ title, onClick, hasButton }: HeroSectionProps) => {
  return (
    <article className=" w-screen flex flex-col items-center h-screen bg-green-50">
      <Nav />
      <article className="container">
        <div className="flex justify-between items-center h-screen lg:pl-32">
          <div className=" relative flex flex-col items-start max-w-xl gap-8">
            <img
              src="mesh.svg"
              alt="mesh"
              className="absolute max-xl -bottom-40 -left-40 z-0"
            />{" "}
            <div className="z-10">
              <p className="text-sm font-stretch-50% ">
                _____ &nbsp;&nbsp;&nbsp; This is a message
              </p>
              <h1 className="text-7xl/tight font-bold text-left">{title}</h1>
            </div>
            {hasButton && (
              <div className="z-10">
                <Button name="Get Started" onClick={() => onClick()} />
              </div>
            )}
          </div>
          <img src="image.svg" alt="pray image" className="max-w-xl" />
        </div>
      </article>
    </article>
  );
};

export default HeroSection;
