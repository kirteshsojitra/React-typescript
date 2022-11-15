import {createContext, useState} from "react";

type AuthUser = {
  name: string;
  email: string;
};
type UserContextValue = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextValue);

export const UserContextProvider = ({children}: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};
