import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import App from "./App"; // Import your main application component
import "./buffer-polyfill";
import { createRoot } from "react-dom/client";
const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; 
  return library;
};

// Import createRoot from "react-dom/client"


const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>
);
