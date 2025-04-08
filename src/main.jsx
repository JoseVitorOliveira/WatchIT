import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/WatchIT/">
    <ScrollToTop />
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
