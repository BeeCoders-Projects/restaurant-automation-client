import {useDispatch, useSelector} from "react-redux";
import {checkIsAuth, logout} from "../redux/features/auth/authSlice";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Button from "./Button";

function Navbar (){
    const isAuth = useSelector(checkIsAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, token } = useSelector((state) => state.auth)

    useEffect(() => {
        if (!isAuth) navigate('/auth')
    }, [isAuth, navigate])

    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
    }

    return (
        <div>
            <h2>User: {user}</h2><br/>
            <p>Access token:</p>
            <p>{token}</p>
            <Button primary className="p-2" onClick={logoutHandler}>Выйти</Button>
        </div>
    )
}

export default Navbar;