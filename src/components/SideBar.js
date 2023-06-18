import { ReactComponent as Logo } from "../img/Logo.svg";
import { ReactComponent as HomeMenu } from "../img/icons/homeMenu.svg";
import { ReactComponent as OrderMenu } from "../img/icons/orderMenu.svg";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export default function SideBar() {
    const {role} = useSelector(state => state.auth)
    return (
        <div className="w-28
        h-full max-h-screen bg-[#2D2929] px-4 py-7 flex flex-col text-white">
            <Logo className="max-w-full"/>
            {role === 'TABLE'?
                <div className="mt-16">
                    <Link to="/">
                        <HomeMenu className="mx-auto hover:opacity-70 cursor-pointer"/>
                    </Link>
                    <Link  to="/order">
                        <OrderMenu className="mx-auto mt-10 hover:opacity-70 cursor-pointer"/>
                    </Link>
                </div>
                :
                null
            }
        </div>
    )
}