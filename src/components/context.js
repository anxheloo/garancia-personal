import React, { createContext, useContext, useState, useEffect } from "react";
import { AllPages_URL } from "../urlexp";

const StateContext = createContext();

const StateProvider = ({ children, datas }) => {
  return (
    <StateContext.Provider value={datas}>{children}</StateContext.Provider>
  );
};

const useAppState = () => useContext(StateContext);

export { StateProvider, useAppState };
