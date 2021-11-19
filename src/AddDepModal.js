import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

function AddDepModal(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API}department`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        DepartmentId: null,
        DepartmentName: event.target.DepartmentName.value,
      }),
    })
      .then((response) => response.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("POST failed");
        }
      );
  };

  return (
    <div className="container">
      <Modal
        show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Department
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="DepartmentName">
                  <Form.Label>DepartmentName</Form.Label>
                  <Form.Control
                    type="text"
                    name="DepartmentName"
                    required
                    placeholder="DepartmentName"
                  />
                </Form.Group>

                <Form.Group>
                  <Button variant="primary" type="submit">
                    Add Department
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddDepModal;
