import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './ContainerCounter.css';

function ContainerCounter() {
  const [currentNumber, setCurrentNumber] = useState(0);

  const handleClick = () => {
    setCurrentNumber(currentNumber + 1);
  };

  const resetCounter = () => {
    setCurrentNumber(0);
  };

  return (
      <Card.Body className='contain-counter'>
        <Card.Text className='number'>{currentNumber}</Card.Text>
        <Button className='btn-increase' onClick={handleClick}>
          Increase
        </Button>
        <Button className='btn-reset' onClick={resetCounter}>
          Reset
        </Button>
      </Card.Body>
  );
}

export default ContainerCounter;