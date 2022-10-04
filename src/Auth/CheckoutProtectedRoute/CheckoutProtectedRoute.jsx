import { Outlet, Navigate } from 'react-router-dom';
import './CheckoutProtectedRoute.styles.scss';

const signedIn = true;

const ProtectedRoute = () => {
  return signedIn ? (
    <div className='protected-route'>
      <Outlet />
    </div>
  ) : (
    <Navigate to='/auth/sign-in' replace />
  );
};

export default ProtectedRoute;
