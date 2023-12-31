import DataInput from "./DataInput";
import DataShow from "./DataShow";
import { useState } from "react";
import calAge from "../utils/DateCalc";
const Body = () => {
  const [age, setAge] = useState({});
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  // console.log("Body Render");
  // Issues
  // Missing Field is Empty Error when button in clicked
  // Resize based on Mobile
  return (
    <div className="m-4">
      <div className="p-2 m-2 grid grid-cols-3 gap-4 ">
        <DataInput type="day" data={day} setData={(d) => setDay(d)} />
        <DataInput type="month" data={month} setData={(m) => setMonth(m)} />
        <DataInput type="year" data={year} setData={(y) => setYear(y)} />
      </div>
      <div className=" m-2 flex items-center">
        <hr className="w-full" />
        <button
          type="button"
          className="p-4 m-2 rounded-full bg-Purple hover:bg-Off_black"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" strokeWidth="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>
      </div>
      <div>
        <DataShow {...age} />
      </div>
    </div>
  );
};
export default Body;
