// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
 

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    console.log("sds",{isAuthenticated, children})
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;