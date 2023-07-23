import { ListGroup, Button } from "react-bootstrap";

const Tareas = ({ textoTarea }) => {
  return (
    <ListGroup.Item className="d-flex mt-3 justify-content-between inputAndListWidth">
      {textoTarea}{""}
      <Button
      variant="danger"

      >Borrar</Button>
    </ListGroup.Item>
  );
};

export default Tareas;
