import React from "react";
import {useState} from "react";

const User1 = () => {
  type ObjProps = {
    name: string;
    email: string;
  };
  const [isLoggedIn, setIsLoggedIn] = useState<ObjProps>({} as ObjProps);
  const handleLogin = () => {
    setIsLoggedIn({name: "kirtesh", email: "kirtesh@gmail.com"});
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>name: {isLoggedIn.name}</div>
      <div>email: {isLoggedIn.email}</div>
    </div>
  );
};

export default User1;
