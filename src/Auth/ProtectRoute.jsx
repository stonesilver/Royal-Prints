import { Outlet, Navigate } from 'react-router-dom';

const signedIn = true;

const ProtectRoute = () => {
  return signedIn ? <Outlet /> : <Navigate to='/' replace />;
};

export default ProtectRoute;
