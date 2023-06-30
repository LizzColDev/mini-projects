import { Card, Container } from 'react-bootstrap';
import './styles.css';
import BtnsCalculator from '../components/BtnsCalculator/BtnsCalculator';
import InputCalculator from '../components/InputCalculator/InputCalculator';

function CalculatorPage() {



  return (
    <Card className="container-counter mb-2">
      <Card.Header className='counter-title'>Interactive Calculator</Card.Header>
      <Container className="calculator">
        <InputCalculator/>
        <BtnsCalculator/>
      </Container>
    </Card>
  );
}

export default CalculatorPage;