

import { ethers,BigNumber } from './ethers-5.6.esm.min.js'
import { ServiceMarketplaceAddress,
  ServiceMarketplaceABI,
  toroAddress,
  toroABI} from './constants.js'

// const connectButton = document.getElementById('connectButton')
// connectButton.onclick = connect

// const createCompanyButton = document.getElementById('createCompany')
// createCompanyButton.onclick = createCompany

// const investButton = document.getElementById('investButton')
// investButton.onclick = invest

// const payForServiceButton = document.getElementById('payForServiceButton')
// payForServiceButton.onclick = payForService



// const checkInvestorBalanceButton = document.getElementById('checkInvestorBalanceButton')
// checkInvestorBalanceButton.onclick = checkInvestorBalance

// const checkCompanyBalanceButton = document.getElementById('checkCompanyBalanceButton')
// checkCompanyBalanceButton.onclick = checkCompanyBalance

// const withdrawForCompanyButton = document.getElementById('withdrawForCompanyButton')
// withdrawForCompanyButton.onclick = withdrawForCompany

// const withdrawForInvestorButton = document.getElementById('withdrawForInvestorButton')
// withdrawForInvestorButton.onclick = withdrawForInvestor

let account

function listenForTxnMine(txnResponse, provider) {
    // this is to listen to the blockchain and see events that has happened
    console.log(`Mining ${txnResponse.hash} hash`)

    //create a listner for the blockchain
    return new Promise((resolve, reject) => {
        provider.once(txnResponse.hash, (transactionReceipt) => {
            console.log(
                `Completed with ${transactionReceipt.confirmations} confirmations`
            )
            resolve()
        })
    })
}

async function connect() {
    if (typeof window.ethereum !== 'undefined') {
        try {
           account =  await window.ethereum.request({ method: 'eth_requestAccounts' }) //changed This part
        } catch (error) {
            console.log(error)
        }
        connectButton.innerHTML = account // and this part
    
    } else {
        connectButton.innerHTML = 'Install Metamask !!!!'
    }
}

async function createCompany() {
    console.log(`----------------------------------------`)
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const tokenContract = new ethers.Contract(toroAddress,toroABI,signer)
       // const amount =  ethers.utils.parseEthers('1').toString()
        //console.log(amount)
           // await tokenContract.approve(ServiceMarketplaceAddress,amount)

        const contract = new ethers.Contract(
            ServiceMarketplaceAddress,
            ServiceMarketplaceABI,
              signer
        )

        console.log(contract.address)
        try {
           
            const txnResponse = await contract.createCompany(`Demo Company`, 10,5,1,4)// Put the value from the front-end here Namee..bla bla
            await listenForTxnMine(txnResponse, provider)
        } catch (error) {
            console.log(error)
        }
    }
}

async function invest() {
    
    if (typeof window.ethereum !== 'undefined') {
        console.log(` Investing!!!!!!!!!!!`)
        console.log(`-------------------------------------`)
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()

        const tokenContract = new ethers.Contract(toroAddress ,
         toroABI ,
            signer
        )

        const contract = new ethers.Contract(ServiceMarketplaceAddress,ServiceMarketplaceABI,signer)
        await tokenContract.approve(ServiceMarketplaceAddress,BigNumber.from("100000000000000000")) // The number will change depending on the amount they want to withdraw
  
        const txnResponse = await contract.invest(0, BigNumber.from("100000000000000000")); // The number will change depending on the amount they want to withdraw
      
        await listenForTxnMine(txnResponse, provider)
        console.log(`-------------------------------------`)
        console.log(`Done........`)
    }
}

async function payForService() {
  if (typeof window.ethereum !== 'undefined') {
    console.log(` Investing!!!!!!!!!!!`)
    console.log(`-------------------------------------`)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(ServiceMarketplaceAddress,ServiceMarketplaceABI,signer)

    const tokenContract = new ethers.Contract(toroAddress ,
     toroABI ,
        signer
    )
    await tokenContract.approve(ServiceMarketplaceAddress,BigNumber.from("100000000000000000")) // The number will change depending on the amount they want to withdraw
        // The zero for payForservice is the id of a comapny  you can leave it sha
    const txnResponse = await contract.payForService(0, BigNumber.from("100000000000000000")); // The number will change depending on the amount they want to withdraw
  
    await listenForTxnMine(txnResponse, provider)
    console.log(`-------------------------------------`)
    console.log(`Done........`)
}
}

async function checkInvestorBalance() {
  if (typeof window.ethereum !== 'undefined') {
    console.log(` Investing!!!!!!!!!!!`)
    console.log(`-------------------------------------`)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(ServiceMarketplaceAddress,ServiceMarketplaceABI,signer)

  
    const txnResponse = await contract.checkBalanceOfInvestor();
    console.log(txnResponse)

    console.log(`Done........`)
    }
}

async function checkCompanyBalance() {
  if (typeof window.ethereum !== 'undefined') {
    console.log(` Investing!!!!!!!!!!!`)
    console.log(`-------------------------------------`)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(ServiceMarketplaceAddress,ServiceMarketplaceABI,signer)

  
    const txnResponse = await contract. idToCompany(0).companyFunds();// chanage zero the Id of the comapny default comapony Id is zero
    console.log(txnResponse)

    console.log(`Done........`)
    }
}

async function withdrawForCompany() {
  if (typeof window.ethereum !== 'undefined') {
    console.log(` Investing!!!!!!!!!!!`)
    console.log(`-------------------------------------`)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(ServiceMarketplaceAddress,ServiceMarketplaceABI,signer)

    const tokenContract = new ethers.Contract(toroAddress ,
     toroABI ,
        signer
    )
    await tokenContract.approve(ServiceMarketplaceAddress,BigNumber.from("100000000000000000")) // The number will change depending on the amount they want to withdraw
        // The zero for payForservice is the id of a comapny  you can leave it sha
    const txnResponse = await contract.withdrawForCompany(/* Company Id*/0,"0x the address to withdrraw to", /**Amount */ BigNumber.from("100000000000000000")); // The number will change depending on the amount they want to withdraw
  
    await listenForTxnMine(txnResponse, provider)
    console.log(`-------------------------------------`)
    console.log(`Done........`)
}
  }
  
  async function withdrawForInvestor() {
    if (typeof window.ethereum !== 'undefined') {
      console.log(` Investing!!!!!!!!!!!`)
      console.log(`-------------------------------------`)
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(ServiceMarketplaceAddress,ServiceMarketplaceABI,signer)
  
      const tokenContract = new ethers.Contract(toroAddress ,
       toroABI ,
          signer
      )
      await tokenContract.approve(ServiceMarketplaceAddress,BigNumber.from("100000000000000000")) // The number will change depending on the amount they want to withdraw
          // The zero for payForservice is the id of a comapny  you can leave it sha
      const txnResponse = await contract.withdrawForInvestor( /**Amount */ BigNumber.from("100000000000000000"),"0x the address to withdrraw to",); // The number will change depending on the amount they want to withdraw
    
      await listenForTxnMine(txnResponse, provider)
      console.log(`-------------------------------------`)
      console.log(`Done........`)
  }
    }