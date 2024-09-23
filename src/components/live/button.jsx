import React from "react";

function button(props) {
    return (
        <>
            <button
                className={`${props.active} w-8 h-1 rounded-c20px mx-1.5`}
            ></button>
        </>
    );
}

export default button;
