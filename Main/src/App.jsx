import React from "react";
import "./App.css";
import BlockchainView from "./Components/BlockchainView";
import { useBlockchain } from "./Hook/useBlockchain";

function App() {
  const { blockchain, isValid, addBlock } = useBlockchain();

  const handleCreateBlock = () => {
    const data = prompt("Enter data for the new block:");
    addBlock(data);
  };

  return (
    <div className="container">
      <h1>Blockchain Visualization</h1>
      <h2>Blockchain Valid: {isValid ? "Yes" : "No"}</h2>
      <BlockchainView
        blockchain={blockchain}
        handleCreateBlock={handleCreateBlock}
      />
    </div>
  );
}

export default App;
