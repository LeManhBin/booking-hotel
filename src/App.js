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
import DetailPage from './pages/detailPage/DetailPage';
import CartPage from './pages/cartPage/CartPage';
import AdminLayout from './layouts/AdminLayout/AdminLayout';
import DashboardPage from './pages/dashboardPage/DashboardPage';
import EmployeePage from './pages/employeePage/EmployeePage';
import RoomAdminPage from './pages/roomAdminPage/RoomAdminPage';
import UsersAdminPage from './pages/usersAdminPage/UsersAdminPage';
import BookingAdminPage from './pages/BookingAdminPage/BookingAdminPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='rooms' element={<RoomsPage/>}/>
            <Route path='rooms/:idRoom'element={<DetailPage/>}/>
            <Route path='reservation' element={<ReservationPage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='blog' element={<BlogPage/>}/>
            <Route path='contact' element={<ContactPage/>}/>
            <Route path='cart-booking' element={<CartPage/>}/>
          </Route>
          <Route path='/login-layout' element={<LoginLayout/>}>
            <Route index element={<LoginPage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
              <Route index element={<DashboardPage/>}/>
              <Route path='rooms' element={<RoomAdminPage/>}/>
              <Route path='users' element={<UsersAdminPage/>}/>
              <Route path='employee' element={<EmployeePage/>}/>
              <Route path='Booking' element={<BookingAdminPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
