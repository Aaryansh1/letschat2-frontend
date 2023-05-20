import React, { createContext, ReactNode, useState, useEffect } from 'react';

export type UserContextType = {
  user: ContextType | null;
  setUser: (data: ContextType | null) => void;
  token: string | null;
  setToken: (data: string | null) => void;
};

export type ContextType = {
  id: string;
  username: string;
  email: string;
};

export type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {}
});

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<ContextType | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const data: string | null = localStorage.getItem("userData");
    if (!data) return;

    try {
      const parsedData: ContextType = JSON.parse(data);
      setUser(parsedData);
    } catch (error) {
      console.error("Error parsing saved user data:", error);
    }
  }, []);
  const contextValue: UserContextType = {
    user,
    setUser,
    token,
    setToken
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
