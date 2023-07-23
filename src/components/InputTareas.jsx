import { Form, Button, FormGroup, FormControl } from "react-bootstrap";
import "../App.css";
import ListadoTareas from "./ListadoTareas";
import { useState } from "react";



const InputTareas = () => {

  const [capturaTareas,setCapturaTareas] = useState('');
  const [agregarTareas, setAgregarTareas] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setAgregarTareas([...agregarTareas,capturaTareas]);
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
          value={capturaTareas}
          onChange={(e)=>setCapturaTareas(e.target.value)}

          />
          <Button
          type="submit"
          variant="primary"
          >
            Agregar Tarea
          </Button>
        </FormGroup>
      </Form>
      <ListadoTareas propsAgregarTareas={agregarTareas}></ListadoTareas>
    </>
  );
};

export default InputTareas;
