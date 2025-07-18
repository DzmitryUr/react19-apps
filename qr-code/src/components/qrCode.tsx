import { useEffect, useState } from 'react';

import './qrCode.css';

export default function QrCodeGenerator() {
  const [inputValue, setInputValue] = useState('');
  const [qrText, setQrText] = useState('');
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState('ffffff');
  const [qrCode, setQrCode] = useState('');

  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode(
      `https://api.qrserver.com/v1/create-qr-code/?data=${qrText}!&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [qrText, size, bgColor]);

  // Updating the input word when user
  // click on the generate button
  function handleClick() {
    setQrText(inputValue);
  }
  return (
    <div>
      <h1>QR Code Generator</h1>

      <div className="text-box">
        <input
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="Enter text to encode"
        />
        <button onClick={handleClick}>Generate</button>
      </div>

      <div className="extra-box">
        <h5>Background Color:</h5>
        <input
          type="color"
          onChange={(e) => {
            setBgColor(e.target.value.substring(1));
          }}
        />
      </div>

      <div className="extra-box">
        <h5>Dimension:</h5>
        <input
          type="range"
          min="200"
          max="600"
          value={size}
          onChange={(e) => {
            setSize(Number(e.target.value));
          }}
        />
      </div>

      <div className="output-box">
        {qrCode && <img src={qrCode} alt="" />}
        <a href={qrCode} download="QRCode">
          <button type="button">Download</button>
        </a>
      </div>
    </div>
  );
}
