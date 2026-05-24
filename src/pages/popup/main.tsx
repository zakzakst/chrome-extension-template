import { StrictMode } from "react";

import App from "./App";
import "@/global.css";
import { createRoot } from "react-dom/client";
import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>,
);
