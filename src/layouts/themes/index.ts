import { useMemo } from "react";
import { createTheme, useMediaQuery } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xsm: true;
    xsmm: true;
    smm: true;
    mdm: true;
    lgm: true;
    xlm: true;
  }
  interface ThemeOptions {
    breakpoints?: {
      values?: {
        xs?: number;
        xsm?: number;
        xsmm?: number;
        sm?: number;
        smm?: number;
        md?: number;
        mdm?: number;
        lg?: number;
        lgm?: number;
        xl?: number;
        xlm?: number;
      };
    };
  }
}
const useTheme = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");
  return useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            xs: 0,
            xsm: 320,
            xsmm: 425,
            sm: 600,
            smm: 768,
            md: 900,
            mdm: 1024,
            lg: 1200,
            lgm: 1350,
            xl: 1536,
            xlm: 1980,
          },
        },
      }),
    []
  );
};

export default useTheme;
