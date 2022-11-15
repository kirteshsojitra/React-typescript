import React from "react";
import {useState} from "react";
const User = () => {
  type objProps = {
    name: string;
    email: string;
  };
  const [obj, setObj] = useState<objProps | null>(null);
  const handleLogin = () => {
    setObj({name: "samir", email: "samir@gmail.com"});
  };
  const handleLogout = () => {
    setObj(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>name: {obj?.name}</div>
      <div>email: {obj?.email}</div>
    </div>
  );
};

export default User;
