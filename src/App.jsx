
import './App.css'
import Home from './components/Home/Home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';
import Jobs from './components/Jobs/Jobs';
import Users from './components/Users/Users';
import DashboardLayout from './components/DashboardLayout/DashboardLayout';
import ProtectedRoutes from './components/Dashboard/ProtectedRoutes';
import Contact from './components/Contact/Contact';
import Application from './components/Application/Application';
import PasswordReset from './components/PasswordReset/PasswordReset';
import OtpVerification from './components/PasswordReset/OtpVerification';
import ForgetPassword from './components/PasswordReset/ForgetPassword';
import Context from './components/Context/Context';
import ContextProvider from './components/Context/ContextProvider';
import NotFound from './components/Dashboard/NotFound';
NotFound



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/application" element={<Application />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/otpverification" element={<OtpVerification />} />
      <Route path="/passwordReset/:id" element={<PasswordReset />} />

      <Route element={<ProtectedRoutes />} >

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="users" element={<Users />} />
        </Route>

      </Route>
        <Route path="*" element={<NotFound />} />

    </>
  )
);
function App() {


  return (
    <>
        <ContextProvider>
          <RouterProvider router={router} />;
        </ContextProvider>
      

  
      

    </>
  )
}

export default App
