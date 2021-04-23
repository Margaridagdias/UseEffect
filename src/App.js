import { useReducer, useState } from "react";
import "./App.css";
import Todo from "./Todo.js";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
};

function reducer(todos, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case ACTIONS.DELETE_TODO:
      //if the ID of our todo is not equal to the payload id, we keep it
      //otherwise we get rid of it
      return todos.filter((todo) => todo.id !== action.payload.id)

      default:
        return todos
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <>
      <div className="App">
        <h1>My todo list</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </div>
    </>
  );
}

//USE-EFFECT:
// function App() {
//   const [inputValue, setInputValue] = useState('')
//   const [listas, setLista] = useState([])

//   useEffect(() => {
//     console.log('Estou a actualizar a lista')
//   }, [listas])

//  const handleSubmit = (e) => {
//    e.preventDefault();

//    setLista([...listas, inputValue]);
//    setInputValue('');
//  };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <h1>To do list</h1>

//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />

//         <button type="submit">Add to the agenda</button>
//       </form>
//       <ul>
//         {listas.map((lista) => (
//           <li key={lista}>{lista}</li>
//         ))}
//       </ul>
//     </div>
//   );
