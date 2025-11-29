import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div style={{ margin: 20 }}>
      {todos.map((todo) => (
        <div key={todo.id} style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />

          <p
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginRight: 10,
            }}
          >
            {todo.text}
          </p>

          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
