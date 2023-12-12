import { useState } from "react";
import Countdown from "../components/Countdown";

const IndexPage: React.FC = () => {
  const [minutes, setMinutes] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= 0) {
      setMinutes(newValue);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-white text-3xl md:text-xl text-center py-4 md:py-2 -mt-80">
        Enter time in minutes:
      </p>

      <input
        type="number"
        value={minutes}
        onChange={handleInputChange}
        className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <div className="mt-4">
        <Countdown minutes={minutes} />
      </div>
    </div>
  );
};

export default IndexPage;
