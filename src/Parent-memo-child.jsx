import { memo } from "react";

const Parentmemochild = (props) => {
  console.log("Child Render");
  return <div>Childs {props.df}</div>;
};
export default memo(Parentmemochild);
