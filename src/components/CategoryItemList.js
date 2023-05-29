import React from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryItemList() {
    return (
        <div className="h-40 w-full flex overflow-x-scroll">
            <CategoryItem isActive={true}/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
        </div>
    )
}