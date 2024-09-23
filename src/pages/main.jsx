import React from "react";

import Navbar from "../frame/navbar";
import News from "../frame/news";
import Live from "../frame/live";
import Link from "../frame/link";
import Group from "../frame/group";
import Footer from "../frame/footer";

function main() {
    return (
        <>
            <Navbar></Navbar>
            <News></News>
            <Live></Live>
            <Link></Link>
            <Group></Group>
            <Footer></Footer>
        </>
    );
}

export default main;
