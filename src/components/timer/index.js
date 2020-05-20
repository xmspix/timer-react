import React, { useState, useRef } from "react";
import Buttons from "./buttons";

const addZero = (num) => (num < 10 ? "0" + num : num);

const Timer = () => {
  // const [counter, setCounter] = React.useState(3);
  // Third Attempts
  // React.useEffect(() => {
  //   const timer =
  //     counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

  //   counter <= 0
  //     ? (document.getElementById("timer").innerHTML = "00:00:00")
  //     : (document.getElementById("timer").innerHTML = counter);
  //   return () => clearInterval(timer);
  // }, [counter]);

  const [counter, setCounter] = useState();

  React.useEffect(() => {
    const countDown = new Date(counter).getTime();
    // Update the count down every 1 second
    const timer = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      // var distance = counter - now;
      var distance = (new Date(counter).getTime() - now) * 1e-3 + 1;

      // Time calculations for days, hours, minutes and seconds
      let d = addZero((distance / 86400) | 0);
      let h = addZero((distance / 3600) | 0);
      let m = addZero((distance / 60) % 60 | 0);
      let s = addZero(distance % 60 | 0);

      // Display the result in the element with id="demo"
      document.getElementById("timer").innerHTML = `${h}:${m}:${s}`;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "00:00:00";
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="controls">
      <Buttons state={setCounter} />
      <div id="timer">00:00:00</div>
    </div>
  );
};

export default Timer;
