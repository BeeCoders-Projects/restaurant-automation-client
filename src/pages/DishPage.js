import Header from "../components/Header";
import Button from "../components/Button"
import React, {useEffect} from "react";
import Speciality from "../components/Speciality";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDish} from "../redux/features/dishes/dishSlice";

function DishPage () {
    const { dishId } = useParams();

    const dispatch = useDispatch();
    const dish = useSelector((state) => state.dish)

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
    const ingredientString = dish.ingredients?.map(ingr => (ingr.name)).join(', ')
    const dynamicBgStyle = {
        backgroundImage: `url(${dish.icon || null})`,
    };
    return (
        <>
            <div className="grid h-full">
                <Header/>
                <main className="overflow-auto w-full flex flex-col items-center px-8">
                    <div className="xl:w-[1280px] md:w-[740px]">
                        <div className="flex w-full h-fit">
                            <div
                                className="min-w-[378px] xl:min-w-[478px] grow overflow-hidden rounded-xl bg-cover bg-center mr-8"
                                style={dynamicBgStyle}
                            >d
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
                                    <Button
                                        style={{
                                            backgroundColor:"#FFF200",
                                            fontSize:"26px",
                                            borderRadius:"15px",
                                            width:"198px",
                                            height:"49px",
                                        }}
                                        className="flex justify-center mt-15"
                                    >На головну</Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </>
    )
}

export default DishPage;