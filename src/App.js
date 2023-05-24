import AuthLayout from "./components/AuthLayout";
import LoginPage from "./pages/LoginPage";
import {Route, Routes} from 'react-router-dom';
import MenuLayout from "./components/MenuLayout";

function App() {
    return (
        <div className="w-full h-screen flex flex-col">
            <Routes>
                <Route path="/auth" element={<AuthLayout/>}/>
                <Route path="/mainMenu" element={<MenuLayout/>}/>
            </Routes>
        </div>
    );
}

export default App;