import AuthLayout from "./components/AuthLayout";
import LoginPage from "./pages/LoginPage";
import {Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="w-full h-screen flex flex-col">
            <Routes>
                <Route path="/auth" element={<AuthLayout/>}/>
            </Routes>
        </div>
    );
}

export default App;