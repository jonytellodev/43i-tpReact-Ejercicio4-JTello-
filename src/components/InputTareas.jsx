import { Form, Button, FormGroup, FormControl } from "react-bootstrap";
import "../App.css";
import ListadoTareas from "./ListadoTareas";
import { useState } from "react";



const InputTareas = () => {

  const [capturaTarea,setCapturaTarea] = useState('');
  const [agregarTarea, setAgregarTarea] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setAgregarTarea([...agregarTarea,capturaTarea]);
    setCapturaTarea('');
  }

  return (
    <>
      <Form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <FormGroup
          className="mb-2 mt-5 inputAndListWidth d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <FormControl
          type="text"
          placeholder="Tarea #"
          className="me-3"
          value={capturaTarea}
          onChange={(e)=>setCapturaTarea(e.target.value)}

          />
          <Button
          type="submit"
          variant="primary"
          >
            Agregar
          </Button>
        </FormGroup>
      </Form>
      <ListadoTareas></ListadoTareas>
    </>
  );
};

export default InputTareas;
