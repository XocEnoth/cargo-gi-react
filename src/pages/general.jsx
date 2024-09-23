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
                            Products/General Cargo
                        </p>
                    </div>
                    <div className="lg:grid lg:grid-cols-2">
                        <div className="w-full flex justify-center">
                            <img
                                className="w-96 lg:w-auto"
                                src="/imglink/General-Cargo_1633923167_1642659883.webp"
                                alt=""
                            />
                        </div>
                        <div className="">
                            <p className="text-clinktext font-arimo text-2xl font-medium mt-12">
                                General Cargo
                            </p>
                            <p className="text-cnavmenutext font-arimo font-bold mt-8 mb-6">
                                Definition: Garuda Indonesia serves the delivery
                                of general goods or General Cargo such as
                                fashion products, textiles, books, toys, spare
                                parts, etc.
                            </p>
                            <p className="text-cnavmenutext font-arimo mb-6">
                                You can deliver your General Cargo through the
                                Cargo Service Center or business partner.
                            </p>
                            <p className="text-cnavmenutext font-arimo mb-10">
                                <strong>Dokument: </strong>
                                Air Waybill
                            </p>
                            <p className="text-cnavmenutext font-arimo mb-10">
                                <strong>Packing: </strong>
                                Shipper to ensure packing, marking, and labeling
                                requirements are properly met in accordance with
                                IATA Regulations.
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
