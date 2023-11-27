import { useState } from 'react'
import { Context } from './contexts.js'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage/HomePage.jsx'
import ConnectWallet from './components/pages/ConnectWallet/ConnectWallet.jsx'
import NavBar from './components/NavBar/Navbar.jsx'
import UserPage from './components/pages/UserPage/UserPage.jsx'
import MarketPlace from './components/pages/MarketPlace/MarketPlace.jsx'
import EachEnergyType from './components/pages/EachEnergyType/EachEnergyType.jsx'
import CreateAccount from './components/pages/CreateAccount/CreateAccount.jsx'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
    const [accessToken, setAccessToken] = useState('')

    const getToken = (accessLocalToken) => {
        setAccessToken(accessLocalToken)
        console.log('it worked!!!' + accessLocalToken)
    }

    return (
        <>
            <NavBar />
            <Context.Provider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="connect-wallet" element={<ConnectWallet />} />
                    <Route path="marketplace" element={<MarketPlace />} />
                    <Route path="energy" element={<EachEnergyType />} />
                    <Route
                        path="user"
                        element={<UserPage accessToken={accessToken} />}
                    />
                    <Route path="register" element={<CreateAccount />} />
                    <Route
                        path="login"
                        element={<Login getToken={getToken} />}
                    />
                </Routes>
            </Context.Provider>
            <Footer />
        </>
    )
}

export default App
