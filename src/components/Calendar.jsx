import React, { useState } from "react";
import dayjs from "dayjs";

const CalendarComponent = () => {
  const today = dayjs();
  const [currentMonth, setCurrentMonth] = useState(today);

  const startDay = currentMonth.startOf("month").startOf("week");
  const endDay = currentMonth.endOf("month").endOf("week");

  const calendar = [];
  let date = startDay;

  while (date.isBefore(endDay)) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => {
          const thisDate = date;
          date = date.add(1, "day");
          return thisDate;
        })
    );
  }

  const changeMonth = (direction) => {
    setCurrentMonth(currentMonth.add(direction, "month"));
  };

  return (
    <div className="w-80 p-6 bg-gray-900 text-white flex flex-col ">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => changeMonth(-1)}>&lt;</button>
        <div className="font-bold text-xl">{currentMonth.format("YYYY MMM")}</div>
        <button onClick={() => changeMonth(1)}>&gt;</button>
      </div>

      <div className="grid grid-cols-7 text-sm text-gray-400 mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={i} className="text-center">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {calendar.flat().map((day, idx) => (
          <div
            key={idx}
            className={`text-center py-1 rounded ${
              day.isSame(today, "day")
                ? "bg-white text-black font-bold"
                : "text-gray-300"
            }`}
          >
            {day.date()}
          </div>
        ))}
      </div>
      <button className="mt-6 bg-gray-800 hover:bg-gray-700 py-2 rounded-lg text-center">
        Show All
      </button>
    </div>
  );
};

export default CalendarComponent;
