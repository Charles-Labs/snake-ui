import React, { useEffect, useState } from 'react';

function SecondsCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Create a new WebSocket connection
    const socket = new WebSocket('ws://localhost:8080/seconds');

    // Event listener for when a message is received
    socket.onmessage = (event) => {
      const newCount = parseInt(event.data, 10);
      setCount(newCount);
    };

    // Cleanup on component unmount
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px' }}>
      <p>Seconds passed: {count}</p>
    </div>
  );
}

export default SecondsCounter;
