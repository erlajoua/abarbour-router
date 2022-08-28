import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ component: Component }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.user
            ? <Component />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;