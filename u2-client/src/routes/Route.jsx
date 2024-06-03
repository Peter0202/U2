import Navbar from '../components/Navbar';
import { Navigate, Outlet } from 'react-router-dom';
const Root = () => {

  const role = localStorage.getItem("roles");
  return (
  <div>
    <Navbar />
    <Outlet />
  </div>
  );
}

export default Root;