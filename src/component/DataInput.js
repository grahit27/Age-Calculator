import { useState } from "react";

const DataInput = ({ data, setData }) => {
  const placeValue = (data) => {
    switch (data) {
      case "day":
        return "DD";
      case "month":
        return "MM";
      case "year":
        return "YY";
    }
  };
  return (
    <div className="font-poppins ">
      <h1 className="py-1 text-Smokey_grey text-xs font-bold tracking-[.25rem]">
        {data.toUpperCase()}
      </h1>
      <div className="p-2 w-[170px] ring-1 ring-inset ring-Light_grey focus-within:ring-1 focus-within:ring-inset focus-within:ring-Purple rounded-xl">
        <input
          type="number"
          placeholder={placeValue(data)}
          className="block pl-2 w-full outline-0 font-extrabold text-[32px] bg-transparent focus:ring-0 "
          onChange={(e) => {
            // e.target.value>0 ? setData(e.target.value) :
            setData(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};
export default DataInput;
