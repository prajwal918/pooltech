import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element.");
}

try {
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error("Failed to render the application:", error);
  rootElement.innerHTML = `<div style="color: red; padding: 20px;">
    <h1>Application Error</h1>
    <p>We're sorry, but something went wrong while starting the application.</p>
    <pre>${error instanceof Error ? error.message : "Unknown error"}</pre>
  </div>`;
}
