import {ListGroup} from "react-bootstrap";
import Tareas from "./Tareas";

const ListadoTareas = ({propsAgregarTareas}) => {
    return (
        <>
        <ListGroup className="d-flex justify-content-center align-items-center">
            {
                propsAgregarTareas.map((nuevaTarea, index)=><Tareas key={index} textoTarea={nuevaTarea}></Tareas>)
            }
        </ListGroup>
        </>
    );
};

export default ListadoTareas;