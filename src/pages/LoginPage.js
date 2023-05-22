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

    const { status } = useSelector((state) => state.auth)
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) navigate('/')
    }, [isAuth, navigate])

    const handleSubmit = () => {
        try {
            dispatch(loginUser({ username, password }))
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <form onSubmit={(e) => e.preventDefault()} className="flex items-center flex-col">
            <h2 className="mb-12 text-[40px]">Please log in</h2>
            <p className="text-lg py-2 text-red-600">{status}</p>
            <div className="flex flex-col mb-11">
                <div className="relative">
                    <MdAlternateEmail className="absolute top-8 left-8"/>
                    <input type="text"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           placeholder="Enter username"
                           className="rounded-full px-32 h-24 mb-11"/>
                </div>
                <div className="relative">
                    <BiLock className="absolute top-8 left-8"/>
                    <input type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder="Enter password"
                           className="rounded-full px-32 h-24"/>
                </div>
            </div>
            <Button
                primary
                rounded
                onClick={handleSubmit}
                className="h-24 px-24 hover:bg-yellow-400"
            >Log in</Button>
        </form>
    )
}

export default LoginPage;