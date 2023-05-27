import AuthLayout from "./components/AuthLayout";
import {Route, Routes} from 'react-router-dom';
import MenuLayout from "./components/MenuLayout";
import Navbar from "./components/Navbar";
import DishPage from "./pages/DishPage";

function App() {
    return (
        <div className="w-full h-screen flex flex-col font-didactGothic">
            <Routes>
                <Route path="/" element={<Navbar/>}/>
                <Route path="/auth" element={<AuthLayout/>}/>
                <Route path="/mainMenu" element={<MenuLayout/>}/>
                <Route path="/dish/:id" element={<DishPage/>}/>
            </Routes>
        </div>
    );
}

export default App;