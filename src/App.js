import AuthLayout from "./components/AuthLayout";
import {Route, Routes, useNavigate} from 'react-router-dom';
import MenuLayout from "./components/MenuLayout";
import DishPage from "./pages/DishPage";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {checkIsAuth, getMe} from "./redux/features/auth/authSlice";
import StartPage from "./pages/StartPage";

function App() {
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector(checkIsAuth);

    useEffect(() => {
        dispatch(getMe())
        if (!isAuth) navigate("/auth")
    }, [isAuth, navigate, dispatch]);

    const handleClick = () => {
        setShowMenu(!showMenu)
    }
    const mainElement = showMenu? <MenuLayout/>: <StartPage handle={handleClick}/>;
    return (
        <div className="w-full h-screen flex flex-col font-didactGothic">
            <Routes>
                <Route path="/" element={mainElement}/>
                <Route path="/auth" element={<AuthLayout/>}/>
                <Route path="/dish/:dishId" element={<DishPage/>}/>
            </Routes>
        </div>
    );
}

export default App;