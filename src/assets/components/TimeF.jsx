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
    <div className=" text-xl px-4 py-12 mx-auto w-1/2">
      <p className=" text-center text-gray-600 font-bold">It's currently <b className="font-mono text-lg text-gray-600">{formattedTime}</b> in Delhi.  </p>
    </div>
  );
};

export default LiveClock;
