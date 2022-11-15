import React from "react";
import Greet from "../Greet";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn?: boolean;
};
const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Hello ${props.name}, Your Mobile Number IS ${props.mobile}!`
          : "Welcome Guest!"}
      </h2>
    </div>
  );
};

export default CustomComponent;
