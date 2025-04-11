import React, { useState, createContext } from "react";

export const Globesl = createContext();

export function Thempro({ children }) {
  const [val, setval] = useState("");
  const setData = () => {
    setval("Hello uni color");
  };
  return (
    <Globesl.Provider value={{ val, setData }}>{children}</Globesl.Provider>
  );
}
