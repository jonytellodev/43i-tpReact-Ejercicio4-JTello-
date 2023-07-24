import { ListGroup, Button } from "react-bootstrap";

const Tareas = ({ textoTarea, suprimirTareas }) => {
  return (
    <ListGroup.Item className="d-flex mt-3 justify-content-between inputAndListWidth">
      {textoTarea}{""}
      <Button
      variant="danger"
      onClick={()=> suprimirTareas(textoTarea)
      }
      className="lineHeightTareas"
      >Borrar</Button>
    </ListGroup.Item>
  );
};

export default Tareas;
