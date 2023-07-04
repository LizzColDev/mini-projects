import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ModalAlert from "../ModalAlert/ModalAlert";
import './FormToDo.css'
function FormToDo({onSubmit}) {
  const [input, setInput] = useState('');
  const [nextId, setNextId] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange=(e)=>{
      setInput(e.target.value)
  }

  const hadleSubmit=(event)=>{
      event.preventDefault();

      const newId = nextId + 1
      setNextId(newId)

  if(input){
    const newTodo = {
      id: newId,
      text: input,
      completeTodo: false,
  }
    onSubmit(newTodo)
  }else{
    setShowAlert(true)
  }

  }
    
  return (
    <Form
        onSubmit={hadleSubmit}
        style={{marginBottom: '6px'}}
        >
      <Row className="align-items-center">
        <Col xs className="my-1">
        <div className="d-flex w-100">
            <Form.Control
              id="inlineFormInputName"
              placeholder="Write your New Todo"
              className="w-100"
              onChange={handleChange}
            />
            <Button 
                className="btn-delete-todo"
                type="submit"
                >
                Add ToDo</Button>
          </div>
          <ModalAlert 
            showModal={showAlert} 
            setShowModal={setShowAlert}
            text='Please write a ToDo' 
          />
        </Col>
      </Row>
    </Form>
  );
}

export default FormToDo;