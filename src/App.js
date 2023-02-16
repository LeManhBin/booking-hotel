import './App.css';
import HomeLayout from './layouts/HomeLayout/HomeLayout';
import {Routes, Route, BrowserRouter as Router, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/homePage/HomePage';
import RoomsPage from './pages/roomsPage/RoomsPage';
import AboutPage from './pages/aboutPage/AboutPage';
import ReservationPage from './pages/reservationPage/ReservationPage';
import BlogPage from './pages/blogPage/BlogPage';
import { ContactPage } from './pages/contactPage/ContactPage';
import LoginPage from './pages/loginPage/LoginPage';
import LoginLayout from './layouts/LoginLayout/LoginLayout';
import RegisterPage from './pages/registerPage/RegisterPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='rooms' element={<RoomsPage/>}/>
            <Route path='rooms/:idRoom'/>
            <Route path='reservation' element={<ReservationPage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='blog' element={<BlogPage/>}/>
            <Route path='contact' element={<ContactPage/>}/>
          </Route>
          <Route path='/login-layout' element={<LoginLayout/>}>
            <Route index element={<LoginPage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
