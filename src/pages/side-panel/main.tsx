import { StrictMode } from "react";

import App from "./App";
import "@/global.css";
import { Toaster } from "@/components/ui/sonner";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>,
);
