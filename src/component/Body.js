import DataInput from "./DataInput";
import DataShow from "./DataShow";
import { useState } from "react";
import calAge from "../utils/DateCalc";
const Body = () => {
  const [age, setAge] = useState({});
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(1);
  console.log(calAge({ dobDay: 27, dobMonth: 4, dobYear: 2000 }));
  return (
    <div className="">
      <div className="p-2 m-2 grid grid-cols-3 gap-4 ">
        <DataInput data="day" setData={(d) => setDay(d)} />
        <DataInput data="month" setData={(m) => setMonth(m)} />
        <DataInput data="year" setData={(y) => setYear(y)} />
      </div>
      <button
        type="button"
        className="p-2 m-2 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => {
          setAge(
            calAge({
              dobDay: day,
              dobMonth: month,
              dobYear: year,
            })
          );
        }}
      >
        Find
      </button>
      <div>
        <DataShow {...age} />
      </div>
    </div>
  );
};
export default Body;
