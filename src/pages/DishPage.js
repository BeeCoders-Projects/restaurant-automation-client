import Header from "../components/Header";
import Button from "../components/Button"
import React, {useEffect} from "react";
import Speciality from "../components/Speciality";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDish} from "../redux/features/dishes/dishSlice";
import SideBar from "../components/SideBar";

function DishPage () {
    const { dishId } = useParams();

    const dispatch = useDispatch();
    const dish = useSelector((state) => state.dish);

    const navigate = useNavigate();

    useEffect(() => {
        if (!/\d+/.test(dishId)) {
            navigate(-1);
        }
    }, [dishId, navigate]);

    useEffect(() => {
        if (dishId){
            dispatch(getDish({dishId}))
        }
    }, [dishId, dispatch])


    const specialityList = dish.specifics?.map((spec, idx) => (<Speciality key={idx} name={spec}/>))
    const ingredientString = dish.ingredients?.map((ingr, index) => (
        <React.Fragment key={index}>
            {index > 0 && ', '}
            {ingr.is_allergic? <span className="text-red-600">{ingr.name}</span>: ingr.name}
        </React.Fragment>
    ))

    const dynamicBgStyle = {
        backgroundImage: `url(${dish.icon || null})`,
    };
    return (
        <div className="flex h-screen">
            <SideBar/>
            <div className="grid h-full">
                <Header/>
                <main className="overflow-auto w-full flex flex-col items-center px-8">
                    <div className="xl:w-[1280px] md:w-[740px]">
                        {dish.isLoading?
                            <h1 className="text-5xl text-center">Сторінка завантажується...</h1>
                            :
                            <div className="flex w-full h-fit">
                            <div
                                className="min-w-[378px] xl:min-w-[478px] grow relative
                                overflow-hidden rounded-xl bg-cover bg-center mr-8"
                                style={dynamicBgStyle}
                            >
                                {dish.special? <div className="absolute py-1 px-5 text-yellow-500 top-0 left-0
                                        bg-yellow-300 rounded-br-xl font-bold font-montserrat text-base">
                                    <label>SPECIAL</label>
                                </div>: null}
                            </div>
                            <div>
                                <p className="text-4xl">{dish.name}</p>
                                <p className="text-xl pt-4">{dish.description}</p>
                                <p className="text-xl pt-4">{ingredientString}</p>
                                <div className="ml-auto w-fit text-2xl pt-5 flex">
                                    <p className="mr-20">{dish.price} грн</p>
                                    <p>{dish.weight} г</p>
                                </div>
                                <div className="flex flex-row flex-wrap items-start item-break py-4">
                                    {specialityList}
                                </div>
                                <div className="flex flex-col items-end">
                                    <Link to="/">
                                        <Button
                                            yellow
                                            style={{
                                                fontSize:"26px",
                                                borderRadius:"15px",
                                                width:"198px",
                                                height:"49px",
                                            }}
                                            className="flex justify-center mt-15"
                                        >На головну</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        }

                    </div>
                </main>
            </div>
        </div>
    )
}

export default DishPage;
