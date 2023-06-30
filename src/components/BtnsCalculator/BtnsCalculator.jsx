import { Button, Col, Row } from 'react-bootstrap';
import './BtnsCalculator.css';

function BtnsCalculator() {

  return (
    <>
    <Row>
      <Col>
        <Button  onClick={() => console.log('7')} className="number-button">7</Button>
        <Button  onClick={() => console.log('8')} className="number-button">8</Button>
        <Button  onClick={() => console.log('9')} className="number-button">9</Button>
        <Button variant="danger" onClick={() => console.log('+')} className="operator">/</Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button  onClick={() => console.log('4')} className="number-button">4</Button>
        <Button  onClick={() => console.log('5')} className="number-button">5</Button>
        <Button  onClick={() => console.log('6')} className="number-button">6</Button>
        <Button variant="danger" onClick={() => console.log('+')} className="operator">+</Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button  onClick={() => console.log('1')} className="number-button">1</Button>
        <Button  onClick={() => console.log('2')} className="number-button">2</Button>
        <Button  onClick={() => console.log('3')} className="number-button">3</Button>
        <Button variant="danger" onClick={() => console.log('-')} className="operator">-</Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button  onClick={() => console.log('0')} className="number-button">0</Button>
        <Button  onClick={() => console.log('.')} className="number-button">.</Button>
        <Button variant="success" >=</Button>
        <Button variant="danger" onClick={() => console.log('*')} className="operator">*</Button>
      </Col>
    </Row>
    <Row className="w-100">
        <Col className="w-100 justify-content-center d-flex" xs={12} md={6}>
          <Button className="clear" variant="danger" block>Clear</Button>
        </Col>
      </Row>
  </>
  );
}

export default BtnsCalculator;