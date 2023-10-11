import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header.js';
import Footer from './components/footer.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import ContactUs from './components/ContactUs.js';
import Categories from './components/Categories.js';
import AddUpdateCategory from './components/AddUpdateCategory.js';
import AddUpdateProduct from './components/AddUpdateProduct.js';
import ViewProduct from './components/ViewProduct.js';
import AdminDashboard from './components/AdminDashboard.js';

function App() {
  const HeaderFooterRoute = () => (
  <>
    <Header />
    <Footer />
  </>
);
  return (
    <div className="App">
              <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<HeaderFooterRoute />}>

            <Route index element={<Home />} />

            {/* <Route path="addEmployee" element={<AddEmployees />} /> */}
            
            {/* <Route path="/updateEmployee/:id" element={<UpdateEmployee/>}/> */}
            
            <Route path="/Login" element={<Login />} />
                                 
            <Route path="/Signup" element={<Signup />} />

            <Route path="/ContactUs" element={<ContactUs />} />

            <Route path="/Categories" element={<Categories />} />

            <Route path="/AddUpdateCategory" element={<AddUpdateCategory />} />

            <Route path="/viewProducts" element={<ViewProduct />} />

            <Route path="/addProduct" element={<AddUpdateProduct />} />
            
            <Route path="/adminDashboard" element={<AdminDashboard />} />
            
          </Route>
        
        </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
