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
                            Products/Dangerous Goods
                        </p>
                    </div>
                    <div className="lg:grid lg:grid-cols-2">
                        <div className="w-full flex justify-center">
                            <img
                                className="w-96 lg:w-auto"
                                src="/imglink/Dangerous-Goods_1633922722_1642659872.webp"
                                alt=""
                            />
                        </div>
                        <div className="">
                            <p className="text-clinktext font-arimo text-2xl font-medium mt-12">
                                Dangerous Goods
                            </p>
                            <p className="text-cnavmenutext font-arimo font-bold mt-8 mb-6">
                                Definition: Dangerous Goods are shipments that
                                contain one or more 9 UN classes (and several
                                subcategories).{" "}
                            </p>
                            <p className="text-cnavmenutext font-light font-arimo mb-6">
                                Items that are likely to endanger health,
                                safety, assets, or the environment. For example,
                                products containing elements that have the
                                potential to trigger an explosion or the
                                shipment of chemical industry products.
                                Understanding the regulations and the process of
                                shipping Dangerous Goods before sending can help
                                in minimizing unwanted events, such as damage to
                                goods to flight accidents
                            </p>
                            <p className="text-cnavmenutext font-arimo mb-6">
                                <strong>Dokument: </strong>
                                Air Waybill, Shipper’s Declaration, and Material
                                Safety Data Sheet
                            </p>
                            <p className="text-cnavmenutext font-arimo mb-10">
                                <strong>Packing: </strong>
                                Shipper to ensure packing, marking, and labeling
                                requirements are properly met in accordance with
                                IATA Dangerous Goods Regulations, as well as
                                complete Shipper's Declaration of Dangerous
                                Goods.
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
