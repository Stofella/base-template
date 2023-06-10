import { RouterProvider } from "./routes";
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from "./shared/GlobalStyle";

import { Footer } from "./shared/footer";
import { Header } from "./shared/header";
import { Container } from "@mui/material";


export const App = () => {
   return (
    <BrowserRouter>
     <GlobalStyle>
        <Header />
        <Container maxWidth="md">
          <RouterProvider />
        </Container>
        <Footer />
      </GlobalStyle>
    </BrowserRouter >
   );  
}
