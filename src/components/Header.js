import {useSelector} from "react-redux";
import Button from "./Button";
import {Link} from "react-router-dom";
import {checkIsAuth} from "../redux/features/auth/authSlice";

function Header () {
    const isAuth = useSelector(checkIsAuth);
    const {name} = useSelector((state) => state.auth);

    return (
        <header className="h-24 bg-[#FFFFFF] flex justify-between w-full border-[#E4E4E4] border-b-2 px-7">
            <h1 className="text-5xl text-black self-center">BeeCafe</h1>
            {isAuth?
                <h1 className="text-2xl text-[#676767] self-center">{name}</h1>
                :
                <Link to="/auth"><Button primary className="p-2 self-center">Увійти</Button></Link>
            }
        </header>
    )
}

export default Header;