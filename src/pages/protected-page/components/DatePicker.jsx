import React, { useState } from "react";

const DatePicker = ({
  placeholder = "Select date",
  onChange,
  width,
  height,
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [viewMode, setViewMode] = useState("days"); // "days", "months", "years"

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const generateDaysInMonth = (year, month) => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const daysInMonth = generateDaysInMonth(currentYear, currentMonth);

  const handleDateSelect = (date) => {
    const formattedDate = date.toLocaleDateString("en-GB").replace(/\//g, "-");
    setSelectedDate(formattedDate);
    if (onChange) onChange(date);
    setIsCalendarOpen(false);
  };

  const changeMonth = (direction) => {
    let newMonth = currentMonth + direction;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const changeYear = (direction) => {
    setCurrentYear(currentYear + direction);
  };

  const handleMonthSelect = (month) => {
    setCurrentMonth(month);
    setViewMode("days");
  };

  const handleYearSelect = (year) => {
    setCurrentYear(year);
    setViewMode("months");
  };

  const handleToday = () => {
    const today = new Date();
    setSelectedDate(today.toLocaleDateString("en-GB").replace(/\//g, "-"));
    if (onChange) onChange(today);
    setIsCalendarOpen(false);
  };

  const generateYears = () => {
    const startYear = Math.floor(currentYear / 10) * 10;
    return Array.from({ length: 10 }, (_, i) => startYear + i);
  };

  return (
    <div className="relative inline-block min-w-64">
      <div
        className={`flex items-center justify-between border border-gray-200 rounded-lg px-4 py-2 bg-white cursor-pointer w-[${width}] h-[${height}]`}
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
      >
        <span className="text-gray-700">{selectedDate || placeholder}</span>
        <img
          src="/icons/calendar.svg"
          alt="Calendar Icon"
          className="w-5 h-5 text-gray-500"
        />
      </div>

      {isCalendarOpen && (
        <div className="absolute top-12 left-0 bg-white border border-gray-300 rounded-lg shadow-lg z-50 w-full">
          {viewMode === "days" && (
            <>
              <div className="flex justify-between items-center p-2 bg-gray-100">
                <button
                  onClick={() => changeMonth(-1)}
                  className="px-2 py-1 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  &lt;
                </button>
                <span
                  className="font-semibold text-gray-700 cursor-pointer"
                  onClick={() => setViewMode("months")}
                >
                  {months[currentMonth]} {currentYear}
                </span>
                <button
                  onClick={() => changeMonth(1)}
                  className="px-2 py-1 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  &gt;
                </button>
              </div>
              <div className="grid grid-cols-7 text-center font-semibold text-gray-700 p-2">
                {daysOfWeek.map((day) => (
                  <div key={day}>{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 text-center text-gray-600 p-2">
                {daysInMonth.map((date, index) =>
                  date ? (
                    <div
                      key={index}
                      className={`p-2 hover:bg-gray-200 rounded-lg cursor-pointer ${
                        selectedDate ===
                        date.toLocaleDateString("en-GB").replace(/\//g, "-")
                          ? "bg-blue-500 text-white"
                          : ""
                      }`}
                      onClick={() => handleDateSelect(date)}
                    >
                      {date.getDate()}
                    </div>
                  ) : (
                    <div key={index} className="p-2"></div>
                  )
                )}
              </div>
            </>
          )}

          {viewMode === "months" && (
            <>
              <div className="flex justify-between items-center p-2 bg-gray-100">
                <button
                  onClick={() => changeYear(-1)}
                  className="px-2 py-1 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  &lt;
                </button>
                <button
                  onClick={() => setViewMode("years")}
                  className="px-2 py-1 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  {currentYear}
                </button>
                <button
                  onClick={() => changeYear(1)}
                  className="px-2 py-1 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  &gt;
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2 p-4">
                {months.map((month, index) => (
                  <div
                    key={index}
                    className="p-2 text-center text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer"
                    onClick={() => handleMonthSelect(index)}
                  >
                    {month}
                  </div>
                ))}
              </div>
            </>
          )}

          {viewMode === "years" && (
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <button
                  onClick={() => changeYear(-10)}
                  className="px-2 py-1 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  &lt;
                </button>
                <span className="font-semibold text-gray-700">
                  {generateYears()[0]} - {generateYears()[9]}
                </span>
                <button
                  onClick={() => changeYear(10)}
                  className="px-2 py-1 text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  &gt;
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {generateYears().map((year) => (
                  <div
                    key={year}
                    className="p-2 text-center text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer"
                    onClick={() => handleYearSelect(year)}
                  >
                    {year}
                  </div>
                ))}
              </div>
            </div>
          )}

          {viewMode !== "years" && (
            <div className="flex justify-center p-2">
              <button
                onClick={handleToday}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Today
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DatePicker;
