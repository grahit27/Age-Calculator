import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/component/Body";
const AppLayout = () => {
  return (
    <>
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
