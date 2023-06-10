import Header from "./Header";
import {CartLayout} from "./CartLayout";
import SideBar from "./SideBar";

function MenuLayout({cart, children}){
    return (
    <div className="flex h-full">
        <SideBar/>
        <div className="grid h-full flex-1" style={{gridTemplateRows: "auto 1fr"}}>
            <Header/>
            {children}
        </div>
        {cart? <CartLayout/> : null}
    </div>
    )
}

export default MenuLayout;