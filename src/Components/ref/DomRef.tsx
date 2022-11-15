import React, {useEffect} from "react";
import {useRef} from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    inputRef.current.style.display = "none";
  }, []);
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};

export default DomRef;
