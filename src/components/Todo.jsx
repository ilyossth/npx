const Todo = (props) => {
    console.log(props);
    const onUpdateClicked = () =>{
        console.log("Update clicked");
    }
    const onTrashClicked = () =>{
        console.log("trash clicked");
    }
    
  return (
    <div className="todo">
      <h1>{props.title}</h1>
      <div className="icon">
        <i onClick={onUpdateClicked} class="fa-solid fa-pen"></i>
        <i onClick={onTrashClicked} class="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};

export default Todo;
