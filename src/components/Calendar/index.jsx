import {useState} from 'react';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
function Calendar() {
  const [date, setDate] = useState(new Date());
  return (
      <Flatpickr
        value={date}
        options={{
          dateFormat: "d-m-Y"
        }}
        onChange={(dateSelect) => setDate(dateSelect)}
      />
  );
}

export default Calendar;