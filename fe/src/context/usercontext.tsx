import React, { createContext, useState } from "react";

export const UserContext = createContext("");

export const UserContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [isloggin, setisloggin] = useState<boolean>(false);
  type commondata = {
    username: string;
    useremail: string;
    role: string;
  };
  const [userdata, setuserdata] = useState<commondata>({
    username: "",
    useremail: "",
    role: "",
  });
  const contextvalue: any = { userdata, setuserdata, isloggin, setisloggin };
  return (
    <UserContext.Provider value={contextvalue}>{children}</UserContext.Provider>
  );
};
