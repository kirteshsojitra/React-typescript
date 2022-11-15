import React from "react";

type Button1Props = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;
const Button1 = ({variant, children, ...rest}: Button1Props) => {
  return (
    <div>
      <button className={`class-with-${variant}`} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default Button1;
