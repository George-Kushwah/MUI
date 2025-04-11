import { useState, useEffect, useLayoutEffect } from "react";
import Parentmemochild from "./Parent-memo-child";

const Paentmemo = () => {
  const [val, setval] = useState(0);
  let a = { name: "abcd", jk: { fg: function () {} } };
  useLayoutEffect(() => {
    const startTime = new Date();
    return () => {
      const endTime = new Date();
      const timeRendered = endTime - startTime;
      console.log(timeRendered); // Expect this to be a positive number
    };
  }, []);

  useEffect(() => {
    let id;
    for (let i = 0; i < 2000; i++) {
      id = setTimeout(() => setval(i), 300);
    }
    return () => {
      clearTimeout(id);
    };
  }, []);
  return (
    <div>
      {val}
      <Parentmemochild check={JSON.stringify(a)} />
    </div>
  );
};
export default Paentmemo;
