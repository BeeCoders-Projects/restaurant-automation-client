import {MdAlternateEmail} from "react-icons/md";
import {BiLock} from "react-icons/bi";
import Button from "../components/Button";
import React from "react";

function LoginPage(){
    return(
        <>
            <h2 className="mb-12 text-[40px]">Please log in</h2>
            <div className="flex flex-col mb-11">
                <div className="relative">
                    <MdAlternateEmail className="absolute top-8 left-8"/>
                    <input type="text" placeholder="Enter username" className="rounded-full px-32 h-24 mb-11"/>
                </div>
                <div className="relative">
                    <BiLock className="absolute top-8 left-8"/>
                    <input type="password" placeholder="Enter password" className="rounded-full px-32 h-24"/>
                </div>
            </div>
            <Button primary rounded className="h-24 px-24 hover:bg-yellow-400">Log in</Button>
        </>
    )
}

export default LoginPage;