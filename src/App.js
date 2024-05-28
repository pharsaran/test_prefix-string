import React, { useState } from 'react';
import LongestCommonPrefix from './LongestCommonPrefix';
import './App.css';

function App() {
  const [inputStrings, setInputStrings] = useState("");
  const [strings, setStrings] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setInputStrings(event.target.value);
  };

  const handleSubmit = () => {
    const newStrings = inputStrings.split(",").map(str => str.trim().toLowerCase());
    if (isValidInput(newStrings)) {
      setErrorMessage("");
      setStrings(newStrings);
    } else {
      setErrorMessage("ข้อมูลไม่ถูกต้อง โปรดตรวจสอบให้แน่ใจว่า ข้อมูลที่กรอกเป็นตัวพิมพ์เล็กเท่านั้น และจำนวนอักษรอยู่ระหว่าง 1 ถึง 200");
    }
  };

  const handleReset = () => {
    setInputStrings("");
    setStrings([]);
    setErrorMessage("");
  };

  const isValidInput = (strs) => {
    if (strs.length < 1 || strs.length > 200) return false;
    for (let i = 0; i < strs.length; i++) {
      if (!/^[a-z]{0,200}$/.test(strs[i])) return false;
    }
    return true;
  };

  return (
    <div className="App">
      <h1>Longest Common Prefix Finder</h1>
      <h2>Enter strings (separated by comma):</h2>
      <input type="text" value={inputStrings} onChange={handleInputChange} />
      <button className="submit" onClick={handleSubmit}>Submit</button>
      <button className="reset" onClick={handleReset}>Reset</button>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {strings.length > 0 && <LongestCommonPrefix strings={strings} />}
    </div>
  );
}

export default App;
