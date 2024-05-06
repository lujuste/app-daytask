import React, { ReactNode, createContext, useContext, useState } from 'react';

interface CustomParamsProviderProps {
  children: ReactNode;
}

interface CustomParamsHookData {
  paramsRoute: string;
  setParamsRoute: React.Dispatch<React.SetStateAction<string>>;
}

const CustomParamsContext = createContext({} as CustomParamsHookData);

const CustomParamsContextProvider: React.FC<CustomParamsProviderProps> = ({children}) => {
  const [paramsRoute, setParamsRoute ] = useState("");

  return (
    <CustomParamsContext.Provider value={{ paramsRoute, setParamsRoute }}>
      {children}
    </CustomParamsContext.Provider>
  )
}

//create a hook
function useCustomParams() {
  const context = useContext(CustomParamsContext);
  if(!context) {
    throw new Error("useCustomParams must be used with an CustomParamsContextProvider")
  }
  return context
}

export { CustomParamsContextProvider, useCustomParams };