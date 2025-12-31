import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { DataProvider } from "./context/DataContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
  </StrictMode>,
);
