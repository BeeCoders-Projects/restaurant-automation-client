import Header from "./Header";
import OrderPage from "../pages/OrderPage";

function OrderLayout(){
    return (
        <div className="flex h-full">
            <div className="grid h-full flex-1" style={{gridTemplateRows: "auto 1fr"}}>
                <Header/>
                <OrderPage/>
            </div>
        </div>
    )
}

export default OrderLayout;