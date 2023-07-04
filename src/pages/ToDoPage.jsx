import { Card } from 'react-bootstrap';
import './styles.css';
import TodoList from '../components/TodoList/TodoList';

function ToDoPage() {

  return (
    <Card className="container-counter mb-2">
      <Card.Header className='counter-title'>Interactive ToDo</Card.Header>
      <Card.Body style={{padding: '12px', backgroundColor: '#e8e5e5'}}>
      <TodoList/>

      </Card.Body>
    </Card>
  );
}

export default ToDoPage;