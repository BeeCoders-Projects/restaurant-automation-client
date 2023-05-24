import {MdAlternateEmail} from "react-icons/md";
import {BiLock} from "react-icons/bi";
import Button from "../components/Button";
import {useDispatch, useSelector} from 'react-redux';
import {checkIsAuth, loginUser} from '../redux/features/auth/authSlice'
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function LoginPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const { status } = useSelector((state) => state.auth)
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) navigate('/')
    }, [isAuth, navigate])

    const handleSubmit = () => {
        if(username.length === 0 || password.length < 8){
            setError(true)
        }
        else {
            try {
                dispatch(loginUser({ username, password }))
            } catch (error) {
                console.log(error)
            }
        }
    }
    return(
        <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center flex-col">
            <h2 className="mb-12 text-[40px]">Please log in</h2>
            <p className="absolute text-2xl py-2 text-red-600 top-10">{status}</p>
            <div className="flex flex-col mb-11">
                <div className="relative flex flex-col mb-11">
                    <MdAlternateEmail className="absolute top-8 left-8"/>
                    <input type="text"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           placeholder="Enter username"
                           className={`rounded-full px-32 h-24 ${error && username.length ===0 ? "border-2 border-red-500" : ""}`}/>
                    {error && username.length === 0 ?
                        <label className="absolute top-24 ml-8 text-red-600 text-2xl">*Username is in wrong format</label>:""}
                </div>
                <div className="relative flex flex-col ">
                    <BiLock className="absolute top-8 left-8"/>
                    <input type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder="Enter password"
                           className={`rounded-full px-32 h-24 ${error && password.length < 8 ? "border-2 border-red-500" : ""}`}/>
                    {error && password.length < 8 ?
                    <label className="absolute top-24 ml-8 text-red-600 text-2xl">*Password is in wrong format</label>:""}
                </div>
            </div>
            <Button
                primary
                rounded
                onClick={handleSubmit}
                className={`h-24 px-24 ${username&&password? "hover:bg-yellow-400" : "opacity-50"}`}
            >Log in</Button>
        </form>
    )
}

export default LoginPage;