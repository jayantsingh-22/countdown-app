import { useState, useEffect } from "react";
import PlayButton from "./PlayButton";
import ResetButton from "./ResetButton";
import PauseButton from "./PauseButton";
import ResumeButton from "./ResumeButton";

interface CountdownProps {
  minutes: number;
}

const Countdown: React.FC<CountdownProps> = ({ minutes }) => {
  const [time, setTime] = useState(minutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [initialTime, setInitialTime] = useState(minutes * 60);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  useEffect(() => {
    setIsActive(false);
    setIsPaused(false);
    setTime(minutes * 60);
    setInitialTime(minutes * 60);
  }, [minutes]);

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(initialTime);
  };

  const handlePause = () => {
    setIsActive(false);
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handleStart = () => {
    if (time === initialTime) {
      setIsActive(true);
    }
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
        {formatTime(time)}
      </p>
      <div className="flex flex-wrap justify-center items-center md:mt-4 my-4">
        {time === initialTime ? (
          <PlayButton onClick={handleStart} />
        ) : (
          <>
            <ResetButton onClick={handleReset} />
            {isActive && !isPaused ? (
              <PauseButton onClick={handlePause} />
            ) : (
              <ResumeButton onClick={handleResume} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Countdown;
