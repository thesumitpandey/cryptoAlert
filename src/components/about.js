import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import  "./file.css";

import Card from 'react-bootstrap/Card';






const about=()=> {
  return (
    <div className="mi"> 
    <Accordion defaultActiveKey="0" className='contain a'>
    <Card className=''>
      <Card.Header>
      
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body className='head'>      
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
</Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
  </div>
  )
}
export default about;
