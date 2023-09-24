import { useEffect, useState } from "react";
const today = new Date();
const placeValue = (type) => {
  switch (type) {
    case "day":
      return "DD";
    case "month":
      return "MM";
    case "year":
      return "YYYY";
  }
};
const checkData = ({ type, data }) => {
  console.log("Check Data Times");
  if (!data) return true;
  switch (type) {
    case "day":
      return data >= 1 && data <= 31 ? true : false;
    case "month":
      return data >= 1 && data <= 12 ? true : false;
    case "year":
      return data >= 1900 && data <= today.getFullYear() ? true : false;
  }
};
const DataInputField = ({ type, data, setData, colorScheme, errorBool }) => {
  return (
    <div className="font-poppins">
      <h1
        className={`py-1 text-${colorScheme.h1} text-xs font-bold tracking-[.25rem]`}
      >
        {type.toUpperCase()}
      </h1>
      <div
        className={`p-2 w-[170px] ring-1 ring-inset ring-${colorScheme.inputBox} focus-within:ring-1 focus-within:ring-inset focus-within:ring-Purple rounded-xl`}
      >
        <input
          type="number"
          placeholder={placeValue(type)}
          className="block pl-2 w-full outline-0 font-extrabold text-[32px] bg-transparent focus:ring-0 "
          onChange={(e) => {
            setData(e.target.value);
          }}
        ></input>
      </div>
      {errorBool &&
        (data ? (
          <label className="text-sm text-Light_red font-poppins italic">
            Must be a valid {type}
          </label>
        ) : (
          <label className="text-sm text-Light_red font-poppins italic">
            This field is required
          </label>
        ))}
    </div>
  );
};

const DataInput = ({ type, data, setData }) => {
  console.log("Data Field Render");
  return checkData({ type, data }) ? (
    <DataInputField
      {...{ type, data, setData }}
      colorScheme={{
        h1: "Smokey_grey",
        inputBox: "Light_grey",
      }}
      errorBool={false}
    />
  ) : (
    <DataInputField
      {...{ type, data, setData }}
      colorScheme={{
        h1: "Light_red",
        inputBox: "Light_red",
      }}
      errorBool={true}
    />
  );
};
export default DataInput;
