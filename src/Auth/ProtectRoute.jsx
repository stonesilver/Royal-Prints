import { Outlet, Navigate } from 'react-router-dom';
import AccountLayout from '../Layout/AccountLayout/AccountLayout.component';

const signedIn = true;

const ProtectRoute = () => {
  return signedIn ? (
    <AccountLayout>
      <Outlet />
    </AccountLayout>
  ) : (
    <Navigate to='/' replace />
  );
};

export default ProtectRoute;
