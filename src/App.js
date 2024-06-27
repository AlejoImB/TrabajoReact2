import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const checkPalindrome = () => {
    const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleanInput.split('').reverse().join('');
    
    if (cleanInput === reversed) {
      setResult('Es capicúa');
    } else {
      setResult('No es capicúa');
    }
  };

  return (
    <div className="App">
      <h1>Verificador de Capicúas</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Introduce texto o números"
      />
      <button onClick={checkPalindrome}>Verificar</button>
      <p>{result}</p>
    </div>
  );
}

export default App;