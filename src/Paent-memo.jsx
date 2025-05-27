import { useState, useEffect, useLayoutEffect } from "react";
import Parentmemochild from "./Parent-memo-child";

const Paentmemo = () => {
  const [val, setval] = useState(0);
  const [dat, setDat] = useState(0);
  let a = { name: "abcd", jk: { fg: function () {} } };

  useEffect(() => {
    let id;
    for (let i = 0; i < 2000; i++) {
      id = setTimeout(() => setval(i), 300);
    }
    return () => {
      clearTimeout(id);
    };
  }, []);
  const addset = () => {
    setDat(dat + 1);
    console.log(dat);
  };

  return (
    <div>
      <p onClick={addset}>{dat}</p>
      {val}
      <Parentmemochild check={JSON.stringify(a)} />
    </div>
  );
};
export default Paentmemo;
