
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row , Col} from 'react-bootstrap'
import './App.css';
import Cappadocia from './components/Cappadocia';
import FormC from './components/FormC';

function App() {
  return (
    
    <Container fluid>
    <Row>
      <Col><Cappadocia/></Col>
      <Col><FormC/></Col>
    </Row>
    </Container>
    
  );
}

export default App;
