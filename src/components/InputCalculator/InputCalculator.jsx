import { Col, Row } from 'react-bootstrap';
import './InputCalculator.css';

function InputCalculator({input}) {

  return (
    <Row>
      <Col>
        <input className="result" type={input} readOnly />
      </Col>
    </Row>
  );
}

export default InputCalculator;