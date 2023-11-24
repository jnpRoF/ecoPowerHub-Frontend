// import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import UserPage from "./components/pages/UserPage/UserPage.jsx";
import ConnectWallet from "./components/pages/ConnectWallet/ConnectWallet.jsx";
import MarketPlace from "./components/pages/MarketPlace/MarketPlace.jsx";
import EachEnergyType from "./components/pages/EachEnergyType/EachEnergyType.jsx";
import CreateAccount from "./components/pages/CreateAccount/CreateAccount.jsx";
import HomePage from "./components/pages/HomePage/HomePage.jsx";

const App = () => {
    const { isWeb3Enabled } = useMoralis()
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="connect-wallet" element={<ConnectWallet />} />
                <Route path="marketplace" element={<MarketPlace />} />
                <Route path="energy" element={<EachEnergyType />} />
                <Route path="user" element={<UserPage />} />
                <Route path="register" element={<CreateAccount />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
