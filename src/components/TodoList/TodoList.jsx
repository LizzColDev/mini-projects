import { Container } from "react-bootstrap"
import FormToDo from "../FormToDo/FormToDo"
import ToDoContain from "../ToDoContain/ToDoContain"
import { useLocalStorage } from "../../hooks/useLocalStorage";

function TodoList() {
    const [todos, saveTodosToLocalStorage] = useLocalStorage('todos', []);
    
    const addTodo = todo => {
        if(todo.text.trim()){
            todo.text = todo.text.trim();

            const currentTodos = [todo, ...todos];

            saveTodosToLocalStorage(currentTodos);
        }
    }

    const deleteTodo = id =>{
        console.log(id, 'id')
        const currentTodos = todos.filter(todo => todo.id !== id);
        saveTodosToLocalStorage(currentTodos)
    }

    const completeTodo = id =>{
        const currentTodos = todos.map(todo =>{
            if(todo.id === id){
                return {
                    ...todo,
                    completed: !todo.completed
                  };

            }
            return todo
        });
        saveTodosToLocalStorage(currentTodos);
    }

    return (
        <Container>
            <FormToDo
                onSubmit={addTodo}
                />
            {
                todos.map((todo) =>
                    <ToDoContain 
                        key={todo.id}
                        text={todo.text} 
                        id={todo.id}
                        deleteTodo={deleteTodo}
                        completeTodo={completeTodo}
                        completed={todo.completed}
                        />
                )
            }
            
        </Container>
    )

}

export default TodoList