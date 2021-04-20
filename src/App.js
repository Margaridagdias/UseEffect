import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [listas, setLista] = useState([])

  useEffect(() => {
    console.log('Estou a actualizar a lista')
  }, [listas])

 const handleSubmit = (e) => {
   e.preventDefault();

   setLista([...listas, inputValue]);
   setInputValue('');
 };


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>To do list</h1>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button type="submit">Add to the agenda</button>
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
