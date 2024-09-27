import React, { useState } from "react";
import "./LedControl.css"; // Import file CSS

const LedControl = () => {
  const [ledStatus, setLedStatus] = useState("OFF");

  const handleOnClick = () => {
    // Gửi yêu cầu đến API hoặc thiết bị điều khiển LED để bật LED
    setLedStatus("ON");
  };

  const handleOffClick = () => {
    // Gửi yêu cầu đến API hoặc thiết bị điều khiển LED để tắt LED
    setLedStatus("OFF");
  };

  return (
    <div className="led-control">
      <h1>Điều Khiển Đèn LED</h1>
      <p>Led Status: {ledStatus}</p>
      <button onClick={handleOnClick} className="on-button">
        ON
      </button>
      <button onClick={handleOffClick} className="off-button">
        OFF
      </button>
    </div>
  );
};

export default LedControl;
