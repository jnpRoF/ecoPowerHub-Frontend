import img from '../../../constants/images'
import Button from '../../Button/Button'
import Register from '../../Register/Register'
import { useState } from 'react'
// import { ethers, BigNumber } from '../../../constants/ethers-5.6.esm.min.js'

const ConnectWallet = () => {
    const [account, setAccount] = useState('')

    const connect = async () => {
      console.log("clicked")
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                })
                setAccount(accounts[0])
            } catch (error) {
                console.log(error)
            }
        } else {
            setAccount('Install Metamask !!!!')
        }
    }

    return (
        <Register
            src={img.space6}
            pageHead="Connect Wallet"
            pageText1="Choose a wallet you want to connect."
            pageText2="There are several wallet providers."
        >
            <>
                <Button className="px-8 p-4 pt-4 w-full font-semibold cursor-pointer bg-ctaColor rounded-2xl text-center lg:w-3/5">
                    <span onClick={connect}>
                       
                        {account ? account : 'Connect Wallet'}
                    </span>
                </Button>

                {/* <Button
          className="px-8 p-4 pt-4 w-full font-semibold bg-ctaColor rounded-2xl text-center lg:w-3/5"
          href="#"
        >
          <div className="flex items-center space-x-6 text-lg">
            <img src={img.metamask} alt="" className="h-8 w-8" />
            <span>Metamask</span>
          </div>
        </Button>
        <Button
          className="px-4 p-3 pt-4 w-full font-semibold bg-ctaColor rounded-2xl text-center lg:w-3/5"
          href="#"
        >
          <div className="flex items-center space-x-3 text-lg">
            <img src={img.walletconnect} alt="" className="h-8 w-8" />
            <span>Wallet Connect</span>
          </div>
        </Button>
        <Button
          className="px-8 p-4 pt-4 w-full font-semibold bg-ctaColor rounded-2xl text-center lg:w-3/5"
          href="#"
        >
          <div className="flex items-center space-x-6 text-lg">
            <img src={img.coinbase} alt="" className="h-8 w-8" />
            <span>Coinbase</span>
          </div>
        </Button> */}
            </>
        </Register>
    )
}

export default ConnectWallet
