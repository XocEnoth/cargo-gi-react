import React from "react";
import Follow from "../components/footer/follow";

function footer() {
    return (
        <>
            <div className="w-full flex justify-center bg-cbgfooter py-12">
                <div className="w-11/12 xl:w-9/12 2xl:w-2/3 flex flex-col md:flex-row md:grid md:grid-cols-2 lg:grid-cols-4 items-center">
                    <img
                        src="/footer/GA-cargo-transp_white.webp"
                        alt=""
                        className="w-9/12 mb-8"
                    />
                    <div className="">
                        <p className="text-white font-arimo text-lg font-medium text-center mb-2">
                            Quick Links
                        </p>
                        <a
                            href=""
                            className="text-clinkfooter font-arimo font-light text-base text-center block mb-1"
                        >
                            Products
                        </a>
                        <a
                            href=""
                            className="text-clinkfooter font-arimo font-light text-base text-center block mb-1"
                        >
                            Airport to Airport
                        </a>
                        <a
                            href=""
                            className="text-clinkfooter font-arimo font-light text-base text-center block mb-1"
                        >
                            FAQ
                        </a>
                        <a
                            href=""
                            className="text-clinkfooter font-arimo font-light text-base text-center block mb-1"
                        >
                            Terms and Conditions
                        </a>
                    </div>
                    <div className="mt-8">
                        <p className="text-white font-arimo text-lg font-medium text-center mb-2">
                            Contact us
                        </p>
                        <p className="text-clinkfooter font-arimo font-light text-base text-center mb-1">
                            PT. Garuda Indonesia (Persero) Tbk Service
                            Management Building, Soekarno Hatta International
                            Airport Tangerang 15111, Indonesia <br />
                            P.O. Box 1004, TNG BUSH
                        </p>
                        <p className="text-clinkfooter font-arimo font-light text-base text-center mb-1 mt-4">
                            Phone: +6221-2351-9090
                            <br />
                            Mobile: 0804-1-909090
                        </p>
                    </div>
                    <div className="mt-8">
                        <p className="text-white font-arimo text-lg font-medium text-center mb-2">
                            Follow us
                        </p>
                        <div className="flex justify-center">
                            <Follow img="/news/icons8-twitter-24.webp"></Follow>
                            <Follow img="/news/icons8-facebook-24.webp"></Follow>
                            <Follow img="/news/icons8-instagram-filled-24.webp"></Follow>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default footer;
