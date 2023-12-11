import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Add from './Components/Re/Add.js';
import Show from './Components/Re/Show.js';
import Update from './Components/Re/Update.js';
import Delete from './Components/Re/Delete.js';
import Navbar from './Components/Navbar.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/add' element={<Add/>}  ></Route>
          <Route path='/show' element={<Show/>}  ></Route>
          <Route path='/update' element={<Update/>}  ></Route>
          <Route path='/delete' element={<Delete/>}  ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
