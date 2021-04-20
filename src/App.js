import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [listas, setLista] = useState([])

  
 const handleSubmit = (e) => {
   e.preventDefault();

   setLista([...listas, inputValue]);
   setInputValue('');
 };


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Write something</h1>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button type="submit">Clica aqui</button>
      </form>
      <ul>
        {listas.map((lista) => (
          <li key={lista}>{lista}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
