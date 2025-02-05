import React, { useState } from "react";
import { startStreaming, stopStreaming } from "../utils/streaming";

const LiveStream = () => {
  const [isStreaming, setIsStreaming] = useState(false);

  const toggleStreaming = () => {
    if (isStreaming) {
      stopStreaming();
    } else {
      startStreaming();
    }
    setIsStreaming(!isStreaming);
  };

  return (
    <div className="live-stream">
      <h2>Live Performance</h2>
      <button onClick={toggleStreaming}>
        {isStreaming ? "Stop Streaming" : "Start Streaming"}
      </button>
      <div className="chat">
        {/* Render live chat */}
      </div>
    </div>
  );
};

export default LiveStream;
