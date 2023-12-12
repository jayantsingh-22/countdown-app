import React from "react";
import {FaPause} from "react-icons/fa";

interface PauseButtonProps {
  onClick: () => void;
}

const PauseButton: React.FC<PauseButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-500 hover:bg-yellow-600 text-white my-2 mx-2 py-2 px-4 rounded text-sm md:text-base lg:text-lg xl:text-xl"
    >
      <FaPause className="inline-block mr-2" /> Pause
    </button>
  );
};

export default PauseButton;
