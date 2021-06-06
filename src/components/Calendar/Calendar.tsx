import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch } from 'react-redux';
import { updateCurrentDate } from '../../store/appointments/action';

type Props = {
  mentor: string;
};

const Calendar = (props: Props) => {
  const { mentor } = props;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();

  return (
    <>
      <h1>{`Appointments for ${mentor}`}</h1>
      <ReactCalendar
        value={selectedDate}
        onChange={(e) => {
          setSelectedDate(e);
          dispatch(updateCurrentDate(e));
        }}
      />
    </>
  );
};

export default Calendar;
