import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const activeChain = {
 chainId: 11155111,
 rpc: ["https://sepolia.infura.io/v3/5b887901bcee46279c3803899a48c5a0"],

 nativeCurrency: {
  decimals: 18,
  name: "Ether",
  symbol: "ETH",
 },
 shortName: "Sepolia testnet",
 slug: "sepoliatest",
 testnet: true,
 chain: "Sepolia",
 name: "Sepolia Testnet",
};

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <ThirdwebProvider
   activeChain={activeChain}
   //  clientId={"f0d9bfeee428cdd3ba34e13869e2fd12"}
   clientId={import.meta.env.VITE_CLIENT_ID}
   chainId={11155111}
   supportedChains={[activeChain]}
   autoConnect={true}
  >
   <App />
  </ThirdwebProvider>
 </React.StrictMode>
);
