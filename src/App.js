import AuthLayout from "./components/AuthLayout";
import {Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="w-full h-screen flex flex-col">
            <Routes>
                <Route path="/" element={<Navbar/>}/>
                <Route path="/auth" element={<AuthLayout/>}/>
            </Routes>
        </div>
    );
}

export default App;