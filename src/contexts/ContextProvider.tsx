import React, { createContext, useContext, useState, useEffect } from "react";

interface ContextProviderValue {
  data: any;
  fetchData: () => Promise<void>;
}

const initialState: ContextProviderValue = {
  data: null,
  fetchData: () => Promise.resolve(),
};

const StateContext = createContext<ContextProviderValue>(initialState);

export const ContextProvider = ({ children }: any) => {
  const [data, setData] = useState(null);

  const fetchData = () => {
    return fetch(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };

  const value: ContextProviderValue = {
    data,
    fetchData,
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
