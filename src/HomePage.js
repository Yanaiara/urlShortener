import React, { useState } from "react";
import cryptoJS from 'crypto-js';

const HomePage = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const generatedShortUrl = generateShortUrl(url);
    setShortUrl(generatedShortUrl);
  };

  const generateShortUrl = (url) => {
    const hash = cryptoJS.MD5(url).toString(cryptoJS.enc.Hex);

    const shortUrl = hash.replace(/[^a-zA-Z0-9]/g, "").substring(0, 6)

    return `https://www.example.com/short/${shortUrl}`;
  };

  return (
    <div>
      <input type="text" value={url} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Encurtar URL</button>
      <p>URL curta: {shortUrl}</p>
    </div>
  );
};

export default HomePage;
