import { createContext, ReactNode, useContext, useState } from "react";
interface ThemeContextI {
  isDark: boolean;
  toogleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextI | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Error context theme");
  }
  return { isDark: context.isDark, toogleTheme: context.toogleTheme };
};

interface Props {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const toogleTheme = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ isDark, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
