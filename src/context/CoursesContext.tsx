"use client";

import { Action, CourseState } from "@/main/Main";
import React, { createContext, useReducer, useContext, ReactNode } from "react";

const initialState: CourseState = {
  courses: [],
};

const reducer = (state: CourseState, action: Action): CourseState => {
  return {
    ...state,
    courses: Array.isArray(action.payload) ? action.payload : state.courses,
  };
};

interface AppContextProps {
  state: CourseState;
  dispatch: React.Dispatch<Action>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
};
