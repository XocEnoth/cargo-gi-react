import React from "react";
import Group from "../components/group/group";

function group() {
    return (
        <>
            <div className="w-full bg-cbglink pt-16">
                <p className="text-clinktext font-arimo text-3xl text-center mb-8">
                    Garuda Indonesia Group
                </p>
                <div className="w-full flex justify-center">
                    <div className="w-11/12 xl:w-9/12 2xl:w-2/3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 pb-12">
                        <Group img="/group/citilink.webp"></Group>
                        <Group img="/group/aerowisata.webp"></Group>
                        <Group img="/group/gmf.webp"></Group>
                        <Group img="/group/gapura.webp"></Group>
                        <Group img="/group/asyst.webp"></Group>
                        <Group img="/group/goh.webp"></Group>
                        <Group img="/group/sabre.webp"></Group>
                        <Group img="/group/logo-garuda-sentra-medika.webp"></Group>
                    </div>
                </div>
            </div>
        </>
    );
}

export default group;
