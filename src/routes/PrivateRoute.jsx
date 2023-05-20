import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <progress className="progress progress-secondary w-56"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="/logIn" replace></Navigate>;
};

export default PrivateRoute;