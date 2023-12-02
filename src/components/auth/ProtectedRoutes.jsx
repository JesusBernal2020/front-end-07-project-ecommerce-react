import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { token } = useSelector((store) => store.userInfo);

  if (token) {
    <Outlet />;
  } else {
    return <Navigate to="login" />;
  }
};

export default ProtectedRoutes;
