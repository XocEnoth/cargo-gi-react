import React, { useState } from "react";
import MenuList from "./menulist";

function menuBlog(props) {
    const [isBlogClick, setIsBlogClick] = useState(false);

    function BlogClick() {
        isBlogClick ? setIsBlogClick(false) : setIsBlogClick(true);
    }

    return (
        <>
            <div
                className={`${
                    isBlogClick ? "bg-cnavbglist" : ""
                } w-full h-11 flex pl-4 py-2.5 absolute`}
                onClick={BlogClick}
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
                            isBlogClick ? "block" : "hidden"
                        } bg-cvnavbgmenu w-c2560px relative -left-4 pl-4 top-3`}
                    >
                        <MenuList list="Cargo e-Magazine"></MenuList>
                        <MenuList list="Cargo Knowledge"></MenuList>
                        <MenuList list="News & Information"></MenuList>
                        <MenuList list="Promo Highlight"></MenuList>
                    </ul>
                </a>
            </li>
        </>
    );
}

export default menuBlog;
