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
                            Products/Pet & Animals
                        </p>
                    </div>
                    <div className="lg:grid lg:grid-cols-2">
                        <div className="w-full flex justify-center">
                            <img
                                className="w-96 lg:w-auto"
                                src="/imglink/Live Animal-01_1644975809.webp"
                                alt=""
                            />
                        </div>
                        <div className="">
                            <p className="text-clinktext font-arimo text-2xl font-medium mt-12">
                                Pet & Animals
                            </p>
                            <p className="text-cnavmenutext font-arimo font-bold mt-8 mb-6">
                                Do you wish to transport your furry friends or
                                other live animals by air? Garuda Indonesia
                                Cargo service is ready to make your pets or live
                                animals comfortable on the plane until they
                                arrive at their destination.
                            </p>
                            <p className="text-cnavmenutext font-arimo mb-6">
                                <strong>Dokument: </strong>
                                Air Waybill, CITES (if needed), Shipper’s
                                Certification for Live Animal.
                            </p>
                            <p className="text-cnavmenutext font-arimo mb-10">
                                <strong>Packing: </strong>
                                Animal shipment packaging must comply with
                                applicable standards.
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
