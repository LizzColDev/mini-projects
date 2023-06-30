import { Card, Container } from 'react-bootstrap';
import './styles.css';
import BtnsCalculator from '../components/BtnsCalculator/BtnsCalculator';
import InputCalculator from '../components/InputCalculator/InputCalculator';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import ModalAlert from '../components/ModalAlert/ModalAlert';

function CalculatorPage() {

const [input, setInput] = useState('');
const [showAlert, setShowAlert] = useState(false);


const addInput = (value) => {
setInput(input + value);
};

const handleClear =() => setInput('');
const handleCalculate  = () => {
  if(input){
    setShowAlert(false)
    try {
      setInput(evaluate(input))
    } catch (error) {
      setShowAlert(true)
    }

  } else{
    setShowAlert(true)

  }
}
  return (
    <Card className="container-counter mb-2">
      <Card.Header className='counter-title'>Interactive Calculator</Card.Header>
      <Container className="calculator">
        <InputCalculator input={input} />
        <BtnsCalculator 
          addInput={addInput} 
          handleClear={handleClear} 
          handleCalculate ={handleCalculate }
        />
        <ModalAlert 
          showModal={showAlert} 
          setShowModal={setShowAlert} />
      </Container>
    </Card>
  );
}

export default CalculatorPage;