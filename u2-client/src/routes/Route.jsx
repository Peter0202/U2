import Navbar from '../components/Navbar';
import { Navigate, Outlet } from 'react-router-dom';
const Root = () => {
  const role = localStorage.getItem("roles");
  return (
    <div>
      <Navbar />
      <h1>Welcome to U2</h1>
      <Outlet />
    </div>
  );
}

export default Root;