"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString();
      const currentDate = now.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      setTime(currentTime);
      setDate(currentDate);
    };

    updateTime(); // update immediately when component mounts
    const interval = setInterval(updateTime, 1000); // then update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white text-center">
      <h1 className="text-5xl font-bold">{time}</h1>
      <p className="text-2xl mt-4">{date}</p>
    </main>
  );
}
