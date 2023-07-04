import { Col, Container, Row } from "react-bootstrap"
import CalculatorPage from "./CalculatorPage"
import CounterPage from "./CounterPage"
import ToDoPage from "./ToDoPage"

function Home() {

  return (
    <Container>
      <Row>
        <Col>
          <CounterPage/>
        </Col>
        <Col>
          <CalculatorPage/>
        </Col>
        <Col>
          <ToDoPage/>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
