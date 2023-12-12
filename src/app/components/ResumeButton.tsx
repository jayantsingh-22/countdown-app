import React from "react";
import { FaPlayCircle } from "react-icons/fa";

interface ResumeButtonProps {
  onClick: () => void;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white my-2 mx-2 py-2 px-4 rounded text-sm md:text-base lg:text-lg xl:text-xl"
    >
      <FaPlayCircle className="inline-block mr-2" /> Resume
    </button>
  );
};

export default ResumeButton;
