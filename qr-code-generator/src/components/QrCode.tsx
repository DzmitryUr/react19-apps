import { useEffect, useState } from 'react';

import './QrCode.css';

export default function QrCodeGenerator() {
  const [inputValue, setInputValue] = useState('');
  const [qrText, setQrText] = useState('');
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState('ffffff');
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    setQrCode(
      `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${qrText}!&bgcolor=${bgColor}`
    );
  }, [qrText, size, bgColor]);

  function handleClick() {
    setQrText(inputValue);
  }

  return (
    <div>
      <h2>QR Code Generator</h2>
      <div className="text-box">
        <input
          type="text"
          placeholder="Enter text to encode"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="button" onClick={handleClick}>
          Generate
        </button>
      </div>
      <div className="extra-box">
        <h3>Background Color:</h3>
        <input
          type="color"
          onChange={(e) => setBgColor(e.target.value.substring(1))}
        />
      </div>
      <div className="extra-box">
        <h3>Dimensions:</h3>
        <input
          type="range"
          min="200"
          max="600"
          onChange={(e) => setSize(Number(e.target.value))}
        />
      </div>
      <div className="output-box">
        {qrCode && <img src={qrCode} alt="GR Code" />}
        <a href={qrCode} download="QRCode">
          <button type="button">Download</button>
        </a>
      </div>
    </div>
  );
}
