import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import NavMenu from "../components/navbar/navmenu";
import MenuService from "../components/navbar/menuservice";
import MenuProduct from "../components/navbar/menuproduct";
import MenuBlog from "../components/navbar/menublog";
import NavList from "../components/navbar/navlist";

function navbar() {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isMenuRemoved, setIsMenuRemoved] = useState(true);

    function searchClick() {
        isSearchActive ? setIsSearchActive(false) : setIsSearchActive(true);
    }

    function menuClick() {
        setIsMenuRemoved(false);
        setTimeout(() => {
            setIsMenuActive(true);
        }, 0.000001);
    }

    function menuClose() {
        setIsMenuActive(false);
        setTimeout(() => {
            setIsMenuRemoved(true);
        }, 500);
    }

    return (
        <>
            <div className="w-full flex justify-between lg:justify-around items-center px-2 fixed top-0 bg-white">
                <i
                    className="bx bx-menu text-5xl lg:hidden"
                    onClick={menuClick}
                ></i>
                <img
                    src="/navbar/Garuda-Indonesia-Cargo.webp"
                    alt=""
                    className="w-c157px h-c50px lg:w-c220px lg:h-c70px lg:mr-4"
                />
                <div className="border-l-2 border-cnavborderhr h-12 hidden xxl:block"></div>
                <p className="text-cnavtext font-arimo text-base font-bold hidden mx-3 xxl:block">
                    GARUDA INDONESIA AIR CARGO SERVICES
                </p>
                <div className="border-l-2 border-cnavborderhr h-12 hidden lg:block"></div>
                <NavList list="HOME"></NavList>
                <div className="border-l-2 border-cnavborderhr h-12 hidden lg:block"></div>
                <NavList list="SERVICE AND SUPPORT"></NavList>
                <div className="border-l-2 border-cnavborderhr h-12 hidden lg:block"></div>
                <NavList list="PRODUCTS"></NavList>
                <div className="border-l-2 border-cnavborderhr h-12 hidden lg:block"></div>
                <NavList list="BLOG"></NavList>
                <div className="border-l-2 border-cnavborderhr h-12 hidden lg:block"></div>
                <NavList list="CONTACT US"></NavList>
                <FontAwesomeIcon
                    icon={faSearch}
                    className="text-3xl text-cnavgrey lg:hidden"
                    aria-hidden="true"
                    onClick={searchClick}
                />
            </div>

            <div
                className={`${
                    isSearchActive ? "flex" : "hidden"
                } w-full bg-white fixed z-10 top-12 rounded-md border border-cnavborder py-c5px justify-between lg:hidden`}
            >
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search"
                    className="px-5 py-2.5 text-sm border-2 w-52 xs:w-72 ns:w-96 sm:w-c500px md:w-c650px h-7 font-arimo focus:outline-none focus:border-cnavborderfocus transition duration-300 ease-in-out"
                />
                <button
                    type="submit"
                    className="bg-cnavbgbutton w-24 text-white font-arimo text-xs hover:bg-cnavbuttonhov hover:text-cnavbuttontexthov transition-all duration-300 ease-in-out"
                >
                    SEARCH
                </button>
            </div>

            <div
                className={`${
                    isMenuActive ? "opacity-100" : "opacity-0"
                } w-full h-screen bg-cnavmenu transition-opacity duration-500 ease-in-out fixed top-0 z-20`}
                style={{ display: isMenuRemoved ? "none" : "block" }}
            >
                <i className="bx bx-x text-6xl ml-0.5" onClick={menuClose}></i>
                <ul className="mt-4">
                    <NavMenu text="HOME" link="/"></NavMenu>
                    <MenuService
                        text="SERVICE AND SUPPORT "
                        caret="bx bx-caret-down"
                    ></MenuService>
                    <MenuProduct
                        text="PRODUCTS "
                        caret="bx bx-caret-down"
                    ></MenuProduct>
                    <MenuBlog text="BLOG " caret="bx bx-caret-down"></MenuBlog>
                    <NavMenu text="CONTACT US" link="/"></NavMenu>
                </ul>
            </div>
        </>
    );
}

export default navbar;
