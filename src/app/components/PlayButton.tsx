import React from "react";
import { FaPlay } from "react-icons/fa";

interface PlayButtonProps {
  onClick: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 hover:bg-green-600 text-white my-2 mx-2 py-2 px-4 rounded text-sm md:text-base lg:text-lg xl:text-xl"
    >
      <FaPlay className="inline-block mr-2" /> Play
    </button>
  );
};

export default PlayButton;
