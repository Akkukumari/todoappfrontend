import { UseSelector, useSelector } from "react-redux";
import { Navigate, useLocation} from "react-router-dom";

export const PrivateRoute=({children}) =>{
    const user=useSelector((state)=>state.authReducer)
    console.log("user", user);
    let location=useLocation();

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace/>
    }
    return children
}