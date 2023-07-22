import { ListGroup,Button } from "react-bootstrap";

const ListadoTareas = () => {
    return (
        <>
        <ListGroup className="d-flex justify-content-center align-items-center">
            <ListGroup.Item className="d-flex justify-content-between mt-3 inputAndListWidth">Tarea 1<Button variant="danger">Borrar</Button></ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between mt-3 inputAndListWidth">Tarea 2<Button variant="danger">Borrar</Button></ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between mt-3 inputAndListWidth">Tarea 3<Button variant="danger">Borrar</Button></ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between mt-3 inputAndListWidth">Tarea 4<Button variant="danger">Borrar</Button></ListGroup.Item>
        </ListGroup>
        </>
    );
};

export default ListadoTareas;