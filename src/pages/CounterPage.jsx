import { Card } from 'react-bootstrap';
import './styles.css';
import ContainerCounter from '../components/Counter/ContainerCounter';

function CounterPage() {



  return (
    <Card className="container-counter mb-2">
      <Card.Header className='counter-title'>Interactive Counter</Card.Header>
      <ContainerCounter/>
    </Card>
  );
}

export default CounterPage;