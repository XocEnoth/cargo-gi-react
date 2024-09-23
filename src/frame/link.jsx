import React from "react";
import { useNavigate } from "react-router-dom";

function link() {
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full flex justify-center bg-cbglink pt-12">
                <div className="w-11/12 xl:w-9/12 2xl:w-2/3">
                    <div className="w-full bg-cnavmenu px-8 py-2 mb-5">
                        <p className="text-cnavtext font-light font-arimo">
                            Home
                        </p>
                    </div>
                    <p className="text-clinktext text-3xl font-arimo mb-8 ml-4">
                        Products
                    </p>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mx-4">
                        <div
                            className="cursor-pointer"
                            onClick={() => navigate("/product/dangerous-goods")}
                        >
                            <img
                                src="/imglink/Dangerous-Goods_1633922722_1642659872.webp"
                                alt=""
                            />
                            <a
                                href=""
                                className="text-cnavbgbutton font-arimo font-bold text-center block"
                            >
                                Dangerous Goods
                            </a>
                        </div>
                        <div
                            className="cursor-pointer"
                            onClick={() =>
                                navigate("/product/perishable-goods")
                            }
                        >
                            <img
                                src="/imglink/Perishable_1633942576_1642659929.webp"
                                alt=""
                            />
                            <a
                                href=""
                                className="text-cnavbgbutton font-arimo font-bold text-center block"
                            >
                                Perishable Goods
                            </a>
                        </div>
                        <div
                            className="cursor-pointer"
                            onClick={() => navigate("/product/pet-&-animals")}
                        >
                            <img
                                src="/imglink/Live Animal-01_1644975809.webp"
                                alt=""
                            />
                            <a
                                href=""
                                className="text-cnavbgbutton font-arimo font-bold text-center block"
                            >
                                Pet & Animals
                            </a>
                        </div>
                        <div
                            className="cursor-pointer"
                            onClick={() => navigate("/product/valuable-goods")}
                        >
                            <img
                                src="/imglink/Valuable-Goods_1633925091_1642659961.webp"
                                alt=""
                            />
                            <a
                                href=""
                                className="text-cnavbgbutton font-arimo font-bold text-center block"
                            >
                                Valuable Goods
                            </a>
                        </div>
                        <div
                            className="col-start-2 lg:col-start-5 cursor-pointer"
                            onClick={() => navigate("/product/human-remains")}
                        >
                            <img
                                src="/imglink/Human-Remain_1633926035_1642659907.webp"
                                alt=""
                            />
                            <a
                                href=""
                                className="text-cnavbgbutton font-arimo font-bold text-center block"
                            >
                                Human Remains
                            </a>
                        </div>
                        <div
                            className="cursor-pointer"
                            onClick={() => navigate("/product/general-cargo")}
                        >
                            <img
                                src="/imglink/General-Cargo_1633923167_1642659883.webp"
                                alt=""
                            />
                            <a
                                href=""
                                className="text-cnavbgbutton font-arimo font-bold text-center block"
                            >
                                General Cargo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default link;
