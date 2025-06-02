import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../context/AuthContexProvider';

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" replace />;
}
