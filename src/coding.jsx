import { createRoot } from "react-dom/client";

function Greeting(props) {
  return (
    <>
      {props.isMorning ? "Good Morning" : "Good Evening"}
    </>
  );
}

export default Greeting;