import {MdOutlineTableBar} from "react-icons/md";
import {BiLock} from "react-icons/bi";
import Button from "../components/Button";
import {useDispatch, useSelector} from 'react-redux';
import {checkIsAuth, loginUser} from '../redux/features/auth/authSlice'
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {IoMdCheckboxOutline, IoMdSquareOutline} from "react-icons/io";
import {HiOutlineMail} from "react-icons/hi";

function LoginPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isAdminLogin, setIsAdminLogin] = useState(false);

    const { status } = useSelector((state) => state.auth)
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) navigate('/')
    }, [isAuth, navigate])

    const isUsernameValid = () => {
        return !Boolean(username.length < 1
        || username.length > 40
        || username.includes(" ")
        || isAdminLogin? !username.includes("@"): false)
    }
    const isPasswordValid = () => {
        return !Boolean(password.length < 8
            || password.length > 40
            || password.includes(" "))
    }

    const handleSubmit = () => {
        if(isUsernameValid() && isPasswordValid()){
            dispatch(loginUser({ username, password }))
        }else {
            setError(true)
        }
    }
    return(
        <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center flex-col">
            <h2 className="mb-12 text-[40px]">{isAdminLogin?"Please log in":"Please log in table"}</h2>
            <p className="absolute text-2xl py-2 text-red-600 top-10">{status}</p>
            <div className="flex flex-col mb-11">
                <div className="relative flex flex-col mb-11">
                    {isAdminLogin?<HiOutlineMail className="absolute top-8 left-8"/>:<MdOutlineTableBar className="absolute top-8 left-8"/>}
                    <input type="text"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           placeholder={isAdminLogin?"Enter email":"Enter table number"}
                           className={`rounded-full px-32 h-24 ${error&&!isUsernameValid() ? "border-2 border-red-500" : ""}`}/>
                    {error&&!isUsernameValid() ?
                        <label className="absolute top-24 ml-8 text-red-600 text-2xl">*Username is in wrong format</label>:""}
                </div>
                <div className="relative flex flex-col ">
                    <BiLock className="absolute top-8 left-8"/>
                    <input type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder="Enter password"
                           className={`rounded-full px-32 h-24 ${error&&!isPasswordValid() ? "border-2 border-red-500" : ""}`}/>
                    {error&&!isPasswordValid() ?
                    <label className="absolute top-24 ml-8 text-red-600 text-2xl">*Password is in wrong format</label>:""}
                </div>
            </div>
            <Button
                primary
                rounded
                onClick={handleSubmit}
                className={`h-24 px-24 ${username&&password? "hover:bg-yellow-400" : "opacity-50"}`}
            >Log in</Button>
            <div className="flex mt-8 w-[540px] justify-between">
                <div className="flex" onClick={() => setIsAdminLogin(false)}>
                    {isAdminLogin?  <IoMdSquareOutline size="42"/> : <IoMdCheckboxOutline size="42"/>}
                    <label>Log in table</label>
                </div>
                <div className="flex" onClick={() => setIsAdminLogin(true)}>
                    {isAdminLogin?  <IoMdCheckboxOutline size="42"/> : <IoMdSquareOutline size="42"/>}
                    <label>Log as admin</label>
                </div>
            </div>
        </form>
    )
}

export default LoginPage;
