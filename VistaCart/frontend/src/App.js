import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';

function App() {
  return (
    <div className="App">
              <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Header />}>

            <Route index element={<Home />} />

            {/* <Route path="addEmployee" element={<AddEmployees />} /> */}
            
            {/* <Route path="/updateEmployee/:id" element={<UpdateEmployee/>}/> */}
            
            <Route path="/Login" element={<Login />} />
                                 
            <Route path="/Signup" element={<Signup />} />

          </Route>
        
        </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
