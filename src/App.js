//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//omportacion bootstrap css para react
import { Container} from 'react-bootstrap';
//import Login from './components/login/login';
import Menu from './components/navbar/navbar' 
import AppRoutes from './components/router/router';


function App() {
  return (
    <div className="App">
      <Menu />
      <Container>
        <AppRoutes/>
      </Container>
    </div>
  );
}

export default App;
