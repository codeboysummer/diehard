import React, { createContext, useState } from "react";

interface WidthContextType {
  isExpanded: boolean;
  setIsExpanded: (newValue: boolean) => void;
}

export const WidthContext = createContext<WidthContextType>({
  isExpanded: true,
  setIsExpanded: (newValue: boolean) => {},
});
const WidthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <WidthContext.Provider value={{ isExpanded, setIsExpanded }}>
      {children}
    </WidthContext.Provider>
  );
};

export default WidthProvider;
