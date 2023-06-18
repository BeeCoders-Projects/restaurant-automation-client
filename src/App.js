import AuthLayout from "./components/AuthLayout";
import {Route, Routes, useNavigate} from 'react-router-dom';
import MenuLayout from "./components/MenuLayout";
import DishPage from "./pages/DishPage";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {checkIsAuth, getMe} from "./redux/features/auth/authSlice";
import OrderPage from "./pages/OrderPage";
import MainMenuPage from "./pages/MainMenuPage";

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector(checkIsAuth);

    useEffect(() => {
        dispatch(getMe())
        if (!isAuth) navigate("/auth")
    }, [isAuth, navigate, dispatch]);

    return (
        <div className="w-full h-screen flex flex-col font-didactGothic">
            <Routes>
                <Route path="/" element={<MenuLayout cart={true}><MainMenuPage/></MenuLayout>}/>
                <Route path="/auth" element={<AuthLayout/>}/>
                <Route path="/order" element={<MenuLayout><OrderPage/></MenuLayout>}/>
                <Route path="/dish/:dishId" element={<MenuLayout><DishPage/></MenuLayout>}/>
            </Routes>
        </div>
    );
}

export default App;