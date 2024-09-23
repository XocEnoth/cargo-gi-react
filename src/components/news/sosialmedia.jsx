import React from "react";

function sosialMedia(props) {
    return (
        <>
            <a className="my-1 mx-2" href={props.link}>
                <img className="w-6 h-6" src={props.img} alt="" />
            </a>
        </>
    );
}

export default sosialMedia;
