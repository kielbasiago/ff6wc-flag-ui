import React from "react";
import "./App.css";
import { css, ThemeProvider, createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { theme } from "./theme/theme";

const FlagView = React.lazy(() => import("./FlagView/FlagView"));

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<FlagView />} />
            </Routes>
        </ThemeProvider>
    );
}
export default App;
