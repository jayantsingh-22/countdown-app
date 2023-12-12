import React from "react";
import { FaStopCircle } from "react-icons/fa";

interface ResetButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 hover:bg-red-600 text-white my-2 mx-2 py-2 px-4 rounded text-sm md:text-base lg:text-lg xl:text-xl"
    >
      <FaStopCircle className="inline-block mr-2" /> Reset
    </button>
  );
};

export default ResetButton;
