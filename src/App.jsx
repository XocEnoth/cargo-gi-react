import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/main";
import Dangerousgoods from "./pages/dangerous-goods";
import Perishablegoods from "./pages/perishable-goods";
import Petanimals from "./pages/pet-animals";
import Valugoods from "./pages/valu-goods";
import Human from "./pages/human";
import General from "./pages/general";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route
                    path="/product/dangerous-goods"
                    element={<Dangerousgoods />}
                />
                <Route
                    path="/product/perishable-goods"
                    element={<Perishablegoods />}
                />
                <Route path="product/pet-&-animals" element={<Petanimals />} />
                <Route path="product/valuable-goods" element={<Valugoods />} />
                <Route path="product/human-remains" element={<Human />} />
                <Route path="product/general-cargo" element={<General />} />
            </Routes>
        </Router>
    );
}

export default App;
