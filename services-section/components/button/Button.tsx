import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`bg-[var(--button-color)] rounded-lg transition-colors duration-300 hover:bg-[var(--hover-button-color)] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
