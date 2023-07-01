import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Signin from './components/Signin';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/Register" element={<Register/>} />
          <Route exact path="/login" element={<Signin/>} />
          <Route exact path="/" element={<Navbar/>} />
          <Route exact path="/about" element={<Aboutus/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
