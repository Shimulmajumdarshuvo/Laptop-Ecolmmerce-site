import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import DashBoard from './Components/Dashbord/DashBoard';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div >
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>

      </Routes>

    </div>
  );
}


export default App;
