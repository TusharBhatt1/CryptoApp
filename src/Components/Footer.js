import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function News() {

  
const openemail=()=>{
  window.open("mailto:tusharbhatt0135@gmail.com")
}
const openlinkedin=()=>{
  window.open("https://www.linkedin.com/in/tushar-bhatt-59b64623b")
}

  return (
   <div className='p-10 flex gap-20 flex-col'>

   <h2 className='text-center mt-10 text-white text-2xl  p-5 bg-black font-extrabold'>FAQ</h2>
   
   <div>
    <details className='font-bold border-b-2 p-4 border-white'>
      <summary>What is CrytoCurrency ?</summary>
      <p className='p-4'> Cryptocurrency is a digital or virtual form of currency that uses cryptography for security. 
      It is decentralized and operates on a technology called blockchain, which is a distributed ledger that records
       all transactions across a network of computers. Cryptocurrencies, such as Bitcoin and Ethereum, are not controlled 
       by any central authority, such as a government or financial institution.</p>
    </details>
    <details className='font-bold border-b-2 p-4 border-white'>
      <summary>How does Cryptocurrency work??</summary>
      <p className='p-4'> Cryptocurrencies work through a combination of cryptographic algorithms and decentralized technology. 
      When a transaction is initiated, it is verified by a network of computers (nodes) using complex mathematical calculations. Once verified, the transaction is added to a block and added to the blockchain.
      Miners, who provide computing power to the network, are rewarded with newly created cryptocurrency for their contribution. This process ensures transparency, security, and immutability of the transactions.</p>
    </details>
    <details className='font-bold border-b-2 p-4 border-white'>
      <summary >What is the concept of Blockchain in Cryptocurrency?</summary>
      <p className='p-4'>  Blockchain is the underlying technology behind cryptocurrencies.
      It is a decentralized and distributed ledger that records all transactions across a network of computers or nodes.
      It operates on the principle of transparency and immutability, meaning that once a transaction is recorded on the blockchain, it cannot be altered or tampered with.</p>
    </details>
 
    </div>

    <div className='text-center text-pink p-10 border-b-8 border-white font-serif font-bold text-2xl flex flex-col gap-10'>
     <button onClick={openlinkedin}>LinkedIn :<LinkedInIcon /></button>
     <button onClick={openemail}>Mail : <MailOutlineIcon/></button>
     </div>

    </div>
  )
}
