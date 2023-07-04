import { Col, ListGroup, Row } from "react-bootstrap"
import { CiBookmarkRemove } from 'react-icons/ci';
import './ToDoContainer.css'

function ToDoContain({text, completed, id, completeTodo, deleteTodo}){
  const itemStyle = {
    backgroundColor: `rgba(1, 46, 86, ${(id % 3) * 0.15 + 0.9})`,
    color: '#f0f8ff',
  };
  
  const handleCompleteTodo = (event) => {
    event.stopPropagation();
    console.log(id)
    completeTodo(id);
  };

  const handleDeleteTodo = (event) => {
    event.stopPropagation();
    deleteTodo(id);
  };
    return (
      <Row>
        <Col>
          <ListGroup className="d-flex flex-column">
              <ListGroup.Item 
                className={completed ? 'completed' : ''}
                style={!completed ? itemStyle : null}
                onClick={handleCompleteTodo}
                >
                
                {text}
                <CiBookmarkRemove 
                  className="todo-delete-icon"
                  onClick={handleDeleteTodo}
                  />
              </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

    )
}

export default ToDoContain