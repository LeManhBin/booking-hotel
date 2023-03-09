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
import ProfilePage from './pages/profilePage/ProfilePage';
import AccountPage from './pages/accountPage/AccountPage';
import AddNewRoom from './pages/roomAdminPage/AddNewRoom';
import AddNewEmployee from './pages/employeePage/AddNewEmployee';
import AddNewUser from './pages/usersAdminPage/AddNewUser';
import { useEffect } from 'react';
import { actReLogin } from './redux/features/usersSlice/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { KEY_ACCESS_TOKEN } from './constants/config';
import ViewUser from './pages/usersAdminPage/ViewUser';
import SearchPage from './pages/searchPage/SearchPage';
import ViewBooking from './pages/BookingAdminPage/ViewBooking';
import "react-datepicker/dist/react-datepicker.css"
import DetailBookingPage from './pages/DetailBookingPage/DetailBookingPage';
import BookingConfirm from './pages/BookingAdminPage/BookingConfirm';
function App() {
  const dispatch = useDispatch()
  const accessToken = localStorage.getItem(KEY_ACCESS_TOKEN) || null

  useEffect(() => {
    if(accessToken) {
      dispatch(actReLogin(accessToken))
    }

  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='rooms' element={<RoomsPage/>}/>
            <Route path='rooms/:idRoom'element={<DetailPage/>}/>
            <Route path='detail-booking' element={<DetailBookingPage/>}/>
            <Route path='room/search/:size' element={<SearchPage/>}/>
            <Route path='reservation' element={<ReservationPage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='blog' element={<BlogPage/>}/>
            <Route path='contact' element={<ContactPage/>}/>
            <Route path='cart-booking' element={<CartPage/>}/>
            <Route path='account' element={<AccountPage/>}/>
            <Route path='account/profile' element={<ProfilePage/>}/>
          </Route>
          <Route path='/login-layout' element={<LoginLayout/>}>
            <Route index element={<LoginPage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
              <Route index element={<DashboardPage/>}/>
              <Route path='rooms' element={<RoomAdminPage/>}/>
              <Route path='account' element={<AccountPage/>}/>
              <Route path='account/profile' element={<ProfilePage/>}/>
              <Route path='add-new-room' element={<AddNewRoom/>} />
              <Route path='users' element={<UsersAdminPage/>}/>
              <Route path='users/:idUser' element={<ViewUser/>}/>
              <Route path='add-new-user' element={<AddNewUser/>} />
              <Route path='employee' element={<EmployeePage/>}/>
              <Route path='add-new-employee' element={<AddNewEmployee/>} />
              <Route path='booking' element={<BookingAdminPage/>}/>
              <Route path='booking/:idBooking' element={<ViewBooking/>}/>
              <Route path='booking-confirm' element={<BookingConfirm/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
