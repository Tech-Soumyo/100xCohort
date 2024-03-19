import React from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <>
      <UserContext.Provider>{children}</UserContext.Provider>
    </>
  );
};

export default UserContextProvider;
