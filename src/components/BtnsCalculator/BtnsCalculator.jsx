import { Button, Col, Row } from 'react-bootstrap';
import './BtnsCalculator.css';

function BtnsCalculator({addInput, handleClear, handleCalculate }) {

  return (
    <>
    <Row>
      <Col>
        <Button  onClick={() => addInput('7')} className="number-button">7</Button>
        <Button  onClick={() => addInput('8')} className="number-button">8</Button>
        <Button  onClick={() => addInput('9')} className="number-button">9</Button>
        <Button variant="danger" onClick={() => addInput('/')} className="operator">/</Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button  onClick={() => addInput('4')} className="number-button">4</Button>
        <Button  onClick={() => addInput('5')} className="number-button">5</Button>
        <Button  onClick={() => addInput('6')} className="number-button">6</Button>
        <Button variant="danger" onClick={() => addInput('+')} className="operator">+</Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button  onClick={() => addInput('1')} className="number-button">1</Button>
        <Button  onClick={() => addInput('2')} className="number-button">2</Button>
        <Button  onClick={() => addInput('3')} className="number-button">3</Button>
        <Button variant="danger" onClick={() => addInput('-')} className="operator">-</Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button  onClick={() => addInput('0')} className="number-button">0</Button>
        <Button  onClick={() => addInput('.')} className="number-button">.</Button>
        <Button onClick={() => handleCalculate ()} variant="success" >=</Button>
        <Button variant="danger" onClick={() => addInput('*')} className="operator">*</Button>
      </Col>
    </Row>
    <Row className="w-100">
        <Col className="w-100 justify-content-center d-flex" xs={12} md={6}>
          <Button 
            className="clear" 
            variant="danger" 
            onClick={() => handleClear()}
            >
              Clear
              </Button>
        </Col>
      </Row>
  </>
  );
}

export default BtnsCalculator;