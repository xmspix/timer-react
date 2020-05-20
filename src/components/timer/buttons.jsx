import React, { useRef } from "react";

const Buttons = ({ state }) => {
  const hoursInput = useRef("hours");
  const minutesInput = useRef("minutes");
  const secondsInput = useRef("seconds");

  const setTimer = ({ hh, mm, ss }) => {
    state(
      new Date().setHours(
        new Date().getHours() + hh || new Date().getHours(),
        new Date().getMinutes() + mm || new Date().getMinutes(),
        new Date().getSeconds() + ss || new Date().getSeconds()
      )
    );
  };

  return (
    <div>
      <div className="set-time">
        <input
          type="number"
          id="hours"
          name="hours"
          min="0"
          max="24"
          placeholder="HH"
          ref={hoursInput}
        />
        :
        <input
          type="number"
          id="minutes"
          name="minutes"
          min="0"
          max="59"
          placeholder="MM"
          ref={minutesInput}
        />
        :
        <input
          type="number"
          id="seconds"
          name="seconds"
          min="0"
          max="59"
          placeholder="SS"
          ref={secondsInput}
        />
        <input
          type="button"
          value="Set Timer"
          onClick={() =>
            setTimer({
              hh: +hoursInput.current.value,
              mm: +minutesInput.current.value,
              ss: +secondsInput.current.value,
            })
          }
        />
        <input
          type="button"
          value="Clear"
          onClick={() => setTimer({ ss: 0 })}
        />
      </div>

      <div className="buttons">
        <input
          type="button"
          value="20 min"
          onClick={() => setTimer({ mm: 20 })}
        />
        <input
          type="button"
          value="45 min"
          onClick={() => setTimer({ mm: 45 })}
        />
      </div>
    </div>
  );
};

export default Buttons;
