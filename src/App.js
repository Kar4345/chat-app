import { BrowserRouter as Router, Routes ,Route, Switch, Link } from 'react-router-dom';
import "../src/css/App.css";
import Signup from './components/Signup';
import Home from '../src/components/Home';
import Login from './components/Login';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;
