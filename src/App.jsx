import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputTareas from "./components/InputTareas";

function App() {
  return (
    <>
      <Container fluid className="gaussianBlur mt-5">
        <h1 className="text-center mt-2 formatTitle">Bienvenido!</h1>
        <h2 className="text-center mt-4">Ingresa tus tareas</h2>
        <InputTareas></InputTareas>
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <footer className="text-center py-3">
        <p className="textRemFormat2">&copy;2023 - Desarrollado por JonyTelloDEV</p>
        <p className="textRemFormat3">Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
