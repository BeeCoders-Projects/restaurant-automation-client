import { ReactComponent as Logo } from "../img/Logo.svg";
import LoginPage from "../pages/LoginPage";

function AuthLayout(){
    return (
        <>
            <header className="h-32 bg-[#2D2929] flex justify-center items-center relative">
                <Logo className="absolute max-w-24 left-4"/>
                <h1 className="text-5xl text-white">Bee Cafe</h1>
            </header>
            <main className="flex items-center justify-center grow py-12 font-light auth">
                <div className="text-4xl w-[1024px] h-[672px]
                                rounded-2xl bg-[#B8B4B491] bg-opacity-60
                                py-12 flex items-center flex-col auth-container">
                    <LoginPage/>
                </div>
            </main>
        </>
    )
}

export default AuthLayout;