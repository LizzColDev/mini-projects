import { Modal} from 'react-bootstrap';
import './ModalAlert.css';

function ModalAlert({showModal, setShowModal, text}) {

  return (
    <Modal className='modal-alert' show={showModal} onHide={() => setShowModal(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Sorry!</Modal.Title>
    </Modal.Header>
    <Modal.Body>{text}</Modal.Body>
    <Modal.Footer>
    </Modal.Footer>
  </Modal>
  );
}

export default ModalAlert;