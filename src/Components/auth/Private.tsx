import React from "react";
import Login from "./Login";
import {ProfileProps} from "./Profile";
type Privateprops = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

const Private = ({isLoggedIn, component: Component}: Privateprops) => {
  if (isLoggedIn) {
    return <Component name="kirtesh" />;
  } else {
    return <Login />;
  }
};

export default Private;
