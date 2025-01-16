import "./App.css";
import Todo from "./components/Todo";

function App() {
const todos =[
  {
    title:"pul tapiw garak"
  },
  {
    title:"dars atiw garak"
  },
  {
    title:"senior dasturci boliw garak"
  },
]

  return (
    <div className="todo-list">
      <div className="header">
        <input className="input" type="text" placeholder="Add Task" />
        <button className="button">Add</button>
      </div>
      <div className="todo-container">
        {todos.map((t)=>{
          return <Todo title={t.title}/>
        })}
        <Todo/>
      </div>
    </div>
  );
}

export default App;
