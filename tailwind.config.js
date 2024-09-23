// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                liveimg1: "url('/imglive/Mobile WEB Live Animal-01.webp')",
                liveimg2:
                    "url('/imglive/IG FEED (SQUARE)_CARGO_Port to Port.webp')",
                liveimg3: "url('/imglive/FB_ Cargo Network ENG.webp')",
                liveimg4: "url('/imglive/FB_RUTE CARGO ENG.webp')",
                liveimg5: "url('/imglive/FB (SQUARE)_CARGO_Comodity.webp')",
                weblive1: "url('/imglive/LANDING PAGE-Live Animal.webp')",
                weblive2: "url('/imglive/WEB BANNER_CARGO_Port to Port.webp')",
                weblive3: "url('/imglive/WEB BANNER_ Cargo Network ENG.webp')",
                weblive4: "url('/imglive/WEB BANNER_CARGO INTERLINE ENG.webp')",
                weblive5: "url('/imglive/WEB BANNER_CARGO_Comodity.webp')",
            },
            backgroundPosition: {
                centerbottom: "center bottom",
            },
            borderRadius: {
                c4px: "4px",
                c20px: "20px",
            },
            colors: {
                cnavgrey: "#848484",
                cnavborder: "rgba(0, 0, 0, 0.15)",
                cnavbgbutton: "#0065b3",
                cnavborderfocus: "#4586ff",
                cnavmenu: "#f5f5f5",
                cnavmenutext: "#848484",
                cnavbuttonhov: "#393e46",
                cnavbuttontexthov: "#f78536",
                cnavbglist: "#ededd2",
                cvnavbgmenu: "#e1e6ea",
                cnavtext: "#777777",
                cnavborderhr: "#afafaf",
                cnewsearch: "#5aa8c5",
                cnewsearchbg: "#eeeeee",
                clivebutton: "rgba(255, 255, 255, 0.8)",
                clinktext: "#5a5a5a",
                cbglink: "#fafafa",
                cbgfooter: "#337ab7",
                clinkfooter: "rgba(255, 255, 255, 0.6)",
            },
            fontFamily: {
                arimo: ["Arimo", "sans-serif"],
            },
            height: {
                c50px: "50px",
                c70px: "70px",
                c375px: "375px",
            },
            margin: {
                c50px: "50px",
                c70px: "70px",
            },
            padding: {
                c5px: "5px",
            },
            screens: {
                xs: "420px",
                ns: "500px",
                xxl: "1366px",
            },
            width: {
                c157px: "157px",
                c220px: "220px",
                c500px: "500px",
                c650px: "650px",
                c2560px: "2560px",
            },
        },
    },
    plugins: [],
};
