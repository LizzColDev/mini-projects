import { Col, Row } from 'react-bootstrap';
import './InputCalculator.css';

function InputCalculator({input}) {

  return (
    <Row>
      <Col>
        <input className="result" readOnly value={input} />
      </Col>
    </Row>
  );
}

export default InputCalculator;