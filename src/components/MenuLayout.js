import Header from "./Header";
import {CartLayout} from "./CartLayout";
import SideBar from "./SideBar";
import {changeTableStatus} from "../redux/features/auth/authSlice";
import StartPage from "../pages/StartPage";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearLocalCart} from "../redux/features/cart/cartSlice";

function MenuLayout({cart, children}){
    const {orderId} = useSelector((state) => state.order);
    const [showMenu, setShowMenu] = useState(orderId?true:false);
    const {name} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleClick = () => {
        setShowMenu(true);
        dispatch(changeTableStatus({table_name: name, status: "Occupied"}));
        clearLocalCart();
    }

    return (
        <>
            {showMenu ?
                <div className="flex h-full">
                    <SideBar/>
                    <div className="grid h-full flex-1" style={{gridTemplateRows: "auto 1fr"}}>
                        <Header/>
                        {children}
                    </div>
                    {cart? <CartLayout/> : null}
                </div>
                : <StartPage handle={handleClick}/>

            }
            </>

    )
}

export default MenuLayout;