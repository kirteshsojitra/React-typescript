import React from "react";

type InputProps = React.ComponentProps<"input">;

const Input11 = (props: InputProps) => {
  return (
    <div>
      <input {...props} />
    </div>
  );
};

export default Input11;
