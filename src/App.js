import AuthLayout from "./components/AuthLayout";
import {Route, Routes} from 'react-router-dom';
import MenuLayout from "./components/MenuLayout";
import DishPage from "./pages/DishPage";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getMe} from "./redux/features/auth/authSlice";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])
    return (
        <div className="w-full h-screen flex flex-col font-didactGothic">
            <Routes>
                <Route path="/" element={<MenuLayout/>}/>
                <Route path="/auth" element={<AuthLayout/>}/>
                <Route path="/dish/:dishId" element={<DishPage/>}/>
            </Routes>
        </div>
    );
}

export default App;