import React, { useContext, useEffect, useState } from "react";
import Buttons from "./buttons";
import Context from "../../store/context";

const addZero = (num) => (num < 10 ? "0" + num : num);

const Timer = () => {
  const globalState = useContext(Context);

  const [state, setState] = useState({
    isAlarm: false,
  });

  const alarm = new Audio("/alarm.mp3");
  const timeRuningOut = new Audio("/tick.mp3");

  useEffect(() => {
    const countDown = new Date(globalState.counter).getTime();
    // Update the count down every 1 second
    const timer =
      // globalState.counter &&
      setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance =
          (new Date(globalState.counter).getTime() - now) * 1e-3 + 1;

        // Time calculations for days, hours, minutes and seconds
        let d = addZero((distance / 86400) | 0);
        let h = addZero((distance / 3600) | 0);
        let m = addZero((distance / 60) % 60 | 0);
        let s = addZero(distance % 60 | 0);

        // Display the result in the element with id="demo"
        document.getElementById("timer").innerHTML = `${h}:${m}:${s}`;

        // if (Math.floor(distance) === 10) {
        //   timeRuningOut.play();
        // }

        // If the count down is finished, write some text
        if (distance < 0 || Math.floor(distance) === 0) {
          clearInterval(timer);
          document.getElementById("timer").innerHTML = "00:00:00";
          // timeRuningOut.pause();
          globalState.counter && setState({ isAlarm: true });
        }
      }, 1000);

    return () => clearInterval(timer);
  }, [globalState.counter]);

  const { isAlarm } = state;

  if (isAlarm) {
    alarm.play();

    document.getElementById("firework").classList.add("firework");

    setTimeout(() => {
      alarm.pause();
      setState({ ...state, isAlarm: false });
    }, 4000);
  }

  return (
    <div className="controls">
      {/* <Buttons /> */}
      <div id="timer">00:00:00</div>
    </div>
  );
};

export default Timer;
