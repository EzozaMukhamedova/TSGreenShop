import React from "react";
import { useSelector } from "react-redux";

const Hero = () => {
  const counter = useSelector((state) => state.counter.value);
  console.log(counter);

  return <div>Counter: {counter}</div>;
};

export default Hero;

// import React from "react";
// import { useAppSelector } from "../../../store/hooks"; // 相対パスに注意

// const Hero = () => {
//   const counter = useAppSelector((state) => state.counter.value); // これで型エラーなし！
//   return <div>Counter: {counter}</div>;
// };

// export default Hero;
