import React, { useEffect, useState } from "react";
import Button from "../components/live/button";

function live() {
    const [numberImg, setNumberImg] = useState(1);
    const [linkImg, setLinkImg] = useState("");

    const interval = setTimeout(() => {
        if (numberImg < 5) {
            setNumberImg(numberImg + 1);
        } else {
            setNumberImg(1);
        }
    }, 5000);

    useEffect(() => {
        if (numberImg === 1) {
            setLinkImg("bg-liveimg1 md:bg-weblive1");
        } else if (numberImg === 2) {
            setLinkImg("bg-liveimg2 md:bg-weblive2");
        } else if (numberImg === 3) {
            setLinkImg("bg-liveimg3 md:bg-weblive3");
        } else if (numberImg === 4) {
            setLinkImg("bg-liveimg4 md:bg-weblive4");
        } else {
            setLinkImg("bg-liveimg5 md:bg-weblive5");
        }
    }, [interval]);

    return (
        <>
            <div
                className={`w-full h-c375px ${linkImg} bg-no-repeat bg-cover bg-centerbottom md:bg-right flex justify-center items-end pb-5`}
            >
                <Button
                    active={`${
                        numberImg === 1
                            ? "bg-cnavborderfocus"
                            : "bg-clivebutton"
                    }`}
                ></Button>
                <Button
                    active={`${
                        numberImg === 2
                            ? "bg-cnavborderfocus"
                            : "bg-clivebutton"
                    }`}
                ></Button>
                <Button
                    active={`${
                        numberImg === 3
                            ? "bg-cnavborderfocus"
                            : "bg-clivebutton"
                    }`}
                ></Button>
                <Button
                    active={`${
                        numberImg === 4
                            ? "bg-cnavborderfocus"
                            : "bg-clivebutton"
                    }`}
                ></Button>
                <Button
                    active={`${
                        numberImg === 5
                            ? "bg-cnavborderfocus"
                            : "bg-clivebutton"
                    }`}
                ></Button>
            </div>
        </>
    );
}

export default live;
