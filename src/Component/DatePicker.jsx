import React, { useState, useEffect } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { useDispatch } from "react-redux";
import { setDate } from "../store/actions";

const DatePicker = () => {
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedDayRange) {
      dispatch(setDate(selectedDayRange));
    }
  }, [dispatch,selectedDayRange]);

  return (
    <Calendar
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      shouldHighlightWeekends
      locale="fa"
      calendarTodayClassName="custom-today-day"
      colorPrimary="#bace24"
      inputPlaceholder="Select a day range"
      colorPrimaryLight="rgb(196 216 46 / 26%)"
    />
  );
};

export default DatePicker;
