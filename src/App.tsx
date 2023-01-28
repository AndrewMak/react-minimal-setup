import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
export function App() {
  
const mdTheme = createTheme();
  return (
    <ThemeProvider theme={mdTheme}>
    
      <CssBaseline />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* <GlobalStyle /> */}
    </ThemeProvider>
  )
}