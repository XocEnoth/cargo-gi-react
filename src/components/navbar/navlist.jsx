import React from "react";

function navList(props) {
    return (
        <>
            <a
                className="text-cnavtext font-arimo text-lg font-black hidden lg:block pr-6 py-5 pl-4"
                href="/"
            >
                {props.list}
            </a>
        </>
    );
}

export default navList;
