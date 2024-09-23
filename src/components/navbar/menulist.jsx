import React from "react";

function menuList(props) {
    return (
        <>
            <li>
                <button className="text-sm font-bold py-3">{props.list}</button>
            </li>
        </>
    );
}

export default menuList;
