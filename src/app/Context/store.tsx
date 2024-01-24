"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface GlobalContextData {
  data: {
    darkMode: boolean;
  };
  setDarkMode: Dispatch<SetStateAction<{ darkMode: boolean }>>;
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setDarkMode] = useState({
    darkMode: false,
  });

  return (
    <GlobalContext.Provider value={{ data, setDarkMode }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
