import React from "react";

interface ButtonProps {
  name: string;
  onClick: () => void;
}

const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <button
      onClick={() => onClick}
      className="px-8 py-3 bg-green-400 rounded-4xl focus:outline-none hover:bg-green-500"
    >
      {name}
    </button>
  );
};

export default Button;
