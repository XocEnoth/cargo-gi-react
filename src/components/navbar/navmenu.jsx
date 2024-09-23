import React from "react";

function navMenu(props) {
    return (
        <>
            <li className="flex hover:bg-cnavbglist">
                <a
                    className="text-cnavmenutext font-arimo text-base leading-5 font-bold w-full pl-4 py-2.5"
                    href={props.link}
                >
                    {props.text}
                </a>
            </li>
        </>
    );
}

export default navMenu;
