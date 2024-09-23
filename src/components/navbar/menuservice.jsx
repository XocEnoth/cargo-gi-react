import React, { useState } from "react";
import MenuList from "./menulist";

function menuService(props) {
    const [isServiceClick, setIsServiceClick] = useState(false);

    function serviceClick() {
        isServiceClick ? setIsServiceClick(false) : setIsServiceClick(true);
    }

    return (
        <>
            <div
                className={`${
                    isServiceClick ? "bg-cnavbglist" : ""
                } w-full h-11 flex pl-4 py-2.5 absolute`}
                onClick={serviceClick}
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
                            isServiceClick ? "block" : "hidden"
                        } bg-cvnavbgmenu w-c2560px relative -left-4 pl-4 top-3`}
                    >
                        <MenuList list="Airport Facility"></MenuList>
                        <MenuList list="Labels And Document"></MenuList>
                        <MenuList list="FAQ"></MenuList>
                    </ul>
                </a>
            </li>
        </>
    );
}

export default menuService;
