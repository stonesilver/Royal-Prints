import { Outlet, Navigate } from 'react-router-dom';
import AccountLayout from '../Layout/AccountLayout/AccountLayout.component';

const signedIn = true;

const AccountProtectedRoute = () => {
  return signedIn ? (
    <AccountLayout>
      <Outlet />
    </AccountLayout>
  ) : (
    <Navigate to='/' replace />
  );
};

export default AccountProtectedRoute;
