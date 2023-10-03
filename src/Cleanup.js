import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Created");
    return () => console.log("Destroyed"); // cleanup 함수. 잘 안 쓰임.
  }, []);
}

function Cleanup() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default Cleanup;
