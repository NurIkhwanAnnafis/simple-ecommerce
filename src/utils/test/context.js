import React, { createContext, useEffect } from 'react';

export const CustomContextApp = createContext(null);

const CustomContextProvider = ({ children, otherProps }) => {
  const context = { ...otherProps };

  return (
    <CustomContextApp.Provider value={context}>
      {children}
    </CustomContextApp.Provider>
  )
}

export default CustomContextProvider;