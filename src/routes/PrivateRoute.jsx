import PropTypes from "prop-types"
import { Navigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
    const { currentUser } = UserAuth();

    if (!currentUser) {
        return <Navigate to="/" replace={true} />
    }

    return (children);
}

PrivateRoute.propTypes = {
  children: PropTypes.any
}


export default PrivateRoute