import React, { useEffect, useState } from "react";
import "boxicons/css/boxicons.min.css";

import SosialMedia from "../components/news/sosialmedia";

function news() {
    const [numberNews, setNumberNews] = useState(1);
    const [paragrafNews, setParagrafNews] = useState("");

    const interval = setTimeout(() => {
        if (numberNews < 3) {
            setNumberNews(numberNews + 1);
        } else {
            setNumberNews(1);
        }
    }, 5000);

    useEffect(() => {
        if (numberNews === 1) {
            setParagrafNews("GDI Supports Komodo Translocation to Labuan Bajo");
        } else if (numberNews === 2) {
            setParagrafNews(
                "GDI Flew 31.6 Tons of Humanitarian AID to Myanmar"
            );
        } else {
            setParagrafNews("TRANSACTIONS at CSC ARE NOW EASIER WITH QRIS");
        }
    }, [interval]);

    return (
        <>
            <div className="w-full h-14 bg-cnavbgbutton mt-c50px lg:mt-c70px flex lg:justify-center items-center">
                <div className="flex items-center pl-4">
                    <p className="text-white font-arimo leading-6 font-bold">
                        News
                    </p>
                    <i className="bx bx-caret-right text-white"></i>
                </div>
                <p className="text-white font-arimo text-sm font-bold ml-6 lg:mr-40">
                    {paragrafNews}
                </p>
                <div className="hidden lg:flex">
                    <SosialMedia
                        link="/"
                        img="/news/icons8-twitter-24.webp"
                    ></SosialMedia>
                    <SosialMedia
                        link="/"
                        img="/news/icons8-facebook-24.webp"
                    ></SosialMedia>
                    <SosialMedia
                        link="/"
                        img="/news/icons8-instagram-filled-24.webp"
                    ></SosialMedia>
                </div>
                <div className="hidden lg:flex items-center">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Search"
                        className="px-5 py-2.5 text-sm border-2 w-52 h-7 font-arimo focus:outline-none focus:border-cnavborderfocus transition duration-300 ease-in-out rounded-tl-c4px rounded-bl-c4px ml-8"
                    />
                    <button
                        type="submit"
                        className="bg-cnewsearchbg px-2 rounded-tr-c4px rounded-br-c4px"
                    >
                        <i className="bx bx-search text-cnewsearch text-xl"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default news;
