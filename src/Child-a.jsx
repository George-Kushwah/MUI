import React from "react";
import { useContext } from "react";
import { Globesl } from "./context/Themprousecontext";

export default function Childa() {
  const { val, setData } = useContext(Globesl);

  return (
    <div>
      {/* {String(val)} */}
      Child-a----{val}
      <button type="button" onClick={setData}>
        Click me{" "}
      </button>
    </div>
  );
}
