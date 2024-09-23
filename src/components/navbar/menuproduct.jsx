import React, { useState } from "react";
import MenuList from "./menulist";

function menuProduct(props) {
    const [isProductClick, setIsProductClick] = useState(false);

    function ProductClick() {
        isProductClick ? setIsProductClick(false) : setIsProductClick(true);
    }

    return (
        <>
            <div
                className={`${
                    isProductClick ? "bg-cnavbglist" : ""
                } w-full h-11 flex pl-4 py-2.5 absolute`}
                onClick={ProductClick}
            >
                <p className="text-cnavmenutext font-arimo text-base leading-5 font-bold">
                    {props.text}
                </p>
                <i className={`${props.caret} text-cnavmenutext`}></i>
            </div>
            <li className={`flex`}>
                <a className="text-cnavmenutext font-arimo text-base leading-5 font-bold w-full pl-4 py-2.5">
                    {props.text}
                    <ul
                        className={`${
                            isProductClick ? "block" : "hidden"
                        } bg-cvnavbgmenu w-c2560px relative -left-4 pl-4 top-3`}
                    >
                        <MenuList list="Dangerous Goods"></MenuList>
                        <MenuList list="General Cargo"></MenuList>
                        <MenuList list="Human Remains"></MenuList>
                        <MenuList list="Perishable Goods"></MenuList>
                        <MenuList list="Pet & Animals"></MenuList>
                        <MenuList list="Pharmaceutical Goods"></MenuList>
                        <MenuList list="Valet & Automobile"></MenuList>
                        <MenuList list="Valuable Goods"></MenuList>
                    </ul>
                </a>
            </li>
        </>
    );
}

export default menuProduct;
