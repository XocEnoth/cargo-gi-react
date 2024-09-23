import React from "react";

import Navbar from "../frame/navbar";
import News from "../frame/news";
import Live from "../frame/live";
import Footer from "../frame/footer";

function main() {
    return (
        <>
            <Navbar></Navbar>
            <News></News>
            <Live></Live>
            <div className="w-full flex justify-center bg-cbglink pt-12 pb-12">
                <div className="w-11/12 xl:w-9/12 2xl:w-2/3">
                    <div className="w-full bg-cnavmenu px-8 py-2 mb-5">
                        <a
                            className="text-cnavbgbutton font-light font-arimo"
                            href="/"
                        >
                            Home/
                        </a>
                        <p className="text-cnavtext font-light font-arimo">
                            Products/Perishable Goods
                        </p>
                    </div>
                    <div className="lg:grid lg:grid-cols-2">
                        <div className="w-full flex justify-center">
                            <img
                                className="w-96 lg:w-auto"
                                src="/imglink/Perishable_1633942576_1642659929.webp"
                                alt=""
                            />
                        </div>
                        <div className="">
                            <p className="text-clinktext font-arimo text-2xl font-medium mt-12">
                                Perishable Goods
                            </p>
                            <p className="text-cnavmenutext font-arimo font-bold mt-8 mb-6">
                                Definition: Perishable goods are commodities
                                that are vulnerable to time/place, and require
                                special handling; for example, fresh fish,
                                frozen meat, fruits, vegetables, and
                                flowers/plants.
                            </p>
                            <p className="text-cnavmenutext font-light font-arimo mb-6">
                                At the Garuda Indonesia Cargo warehouse, we
                                handle special perishable goods shipments by
                                providing two individual rooms: Cool Room and
                                Cold Room. These rooms’ temperature is
                                adjustable to the optimal temperature of the
                                goods so that your delivery remains fresh and
                                when it arrives at its’ destination.
                            </p>
                        </div>
                        <a
                            className="bg-cnavbgbutton font-arimo text-xs text-white py-2 px-5"
                            href=""
                        >
                            CONTACT US
                        </a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default main;
