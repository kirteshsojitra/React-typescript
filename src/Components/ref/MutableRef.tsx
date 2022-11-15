import React, {useEffect, useRef, useState} from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const InterValRef = useRef<number | undefined>(undefined);

  const stopTimer = () => {
    window.clearInterval(InterValRef.current);
  };

  useEffect(() => {
    InterValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);
  return (
    <div>
      <div>Hook Timer {timer}</div>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
};

export default MutableRef;
