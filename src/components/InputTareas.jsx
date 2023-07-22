import { Form, Button, FormGroup, FormControl } from "react-bootstrap";
import "../App.css";
import ListadoTareas from "./ListadoTareas";

const InputTareas = () => {
  return (
    <>
      <Form className="d-flex justify-content-center">
        <Form.Group
          className="mb-2 mt-5 inputAndListWidth d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control type="text" placeholder="Tarea #" className="me-3" />
          <Button type="submit" variant="primary">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListadoTareas></ListadoTareas>
    </>
  );
};

export default InputTareas;
