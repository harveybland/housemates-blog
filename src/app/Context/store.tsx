"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

// type DataType = {
//   darkMode: boolean;
// };

// interface DarkMode {
//   data: DataType;
//   setDarkMode: Dispatch<SetStateAction<DataType>>;
// }

const GlobalContext = createContext<any>(null);

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
