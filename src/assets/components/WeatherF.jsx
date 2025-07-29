import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "YOUR_API_KEY_HERE";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

      const res = await fetch(url);
      const data = await res.json();
      setWeather(data);
    });
  }, []);

  if (!weather) return <div className="text-gray-400">Loading weather...</div>;

  return (
    <div className="bg-slate-800 text-white p-4 rounded shadow w-fit text-sm font-mono">
      <div className="text-lg font-semibold">
        {weather.name}, {weather.sys.country}
      </div>
      <div>{weather.weather[0].description}</div>
      <div className="text-xl">{Math.round(weather.main.temp)}°C</div>
    </div>
  );
};

export default Weather;
