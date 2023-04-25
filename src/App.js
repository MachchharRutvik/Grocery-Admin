import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Layout/Sidebar';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import AddProduct from './components/Products/AddProduct';
import UpdateProduct from './components/Products/UpdateProduct';
import Home from './components/Products/Home';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/add-product' exact element={<AddProduct/>}></Route>
          <Route path='/update-product' exact element={<UpdateProduct/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
