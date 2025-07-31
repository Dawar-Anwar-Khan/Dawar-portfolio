import React, { useState, useEffect } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const formattedTime = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  fetch

  return (
    <div className=" text-sm px-4 py-12 mx-auto max-w-2xl md:text-lg">
      <p className=" text-center text-gray-600 font-bold">It's currently <b className="font-mono text-sm md:text-lg text-gray-600">{formattedTime}</b> in Delhi.  </p>
    </div>
  );
};

export default LiveClock;
