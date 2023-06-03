import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Download from './pages/Download';
import Home from './pages/Home';
import Event from './pages/Event';
import UserInfo from './pages/UserInfo';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import AddSlide from './pages/AdminPages/AddSlide';
import EventAdd from './pages/AdminPages/EventAdd';
import DowloadAdd from './pages/AdminPages/DownloadAdd';
import Login from "./pages/Login"
function App() {
  return (
    <div className="container">
      <BrowserRouter>
      
      <Navbar/>
        <Routes>
          <Route  path="/" exact element={<Home/>} />
          <Route path="/download" element={<Download/>} />
          <Route path="/event" element={<Event/>} />
          <Route path="/userinfo" element={<UserInfo/>} />
          <Route path="/contact"element={<Contact/>} />
          <Route path= "/admin" element={<Admin/>}/>
          <Route path='/addslide'  element={<AddSlide/>}/>
          <Route path='/adddownload'  element={<DowloadAdd/>}/>
          <Route path='/addevent'  element={<EventAdd/>}/>
          <Route path= '/login'   element={<Login/>}/> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
