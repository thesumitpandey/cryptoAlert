import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import  "./file.css";




const about=()=> {
  return (
    <div >
        <div className="container " style={{padding:100, minHeight:900}}>

        <Accordion defaultActiveKey="0"     >
      <Accordion.Item eventKey="0" >
        <Accordion.Header  ><strong>About us</strong></Accordion.Header>
        <Accordion.Body className='head'>
        Welcome to CryptoAlert, your go-to app for real-time updates and insights into the dynamic world of cryptocurrencies. Our platform provides you with the latest information on major cryptocurrencies, including:
        Bitcoin (BTC)
        Ethereum (ETH)
        Tether (USDT)
        Binance Coin (BNB)
        Cardano (ADA)
        Solana (SOL)
At CryptoAlert, our mission is to empower users with timely updates and comprehensive insights, helping you navigate the ever-evolving landscape of cryptocurrencies with confidence. Stay informed, make smart decisions, and take control of your crypto journey with CryptoAlert!
<h5>

        Thank you for choosing  CryptoAlert as your trusted news source. We look forward to keeping you informed!
</h5>

        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
        </div>

    </div>
  )
}
export default about;
