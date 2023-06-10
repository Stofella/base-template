import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { ReactNode } from 'react';

interface GlobalStyleProps {
  children: ReactNode
}

export const GlobalStyle = ({ children }: GlobalStyleProps) => {

  let themeBase = createTheme({
    palette: {
      mode: "dark",
    }
  });

  themeBase = responsiveFontSizes(themeBase);

  return (
    <ThemeProvider theme={themeBase}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );  
}