import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  const [time, newTime] = useState(now);

  function update() {
    const setTime = new Date().toLocaleTimeString();
    newTime(setTime);
  }
  setInterval(update, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
