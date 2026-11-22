import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./lib/AuthContext.jsx";
import { SubscriptionProvider } from "./lib/SubscriptionContext.jsx";
import { ProgressProvider } from "./lib/ProgressContext.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <SubscriptionProvider>
        <ProgressProvider>
          <App />
        </ProgressProvider>
      </SubscriptionProvider>
    </AuthProvider>
  </React.StrictMode>
);
