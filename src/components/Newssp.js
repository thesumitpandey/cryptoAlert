import  "./file.css";
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import nn from './nn.webp';
import PropTypes from 'prop-types';


const News = (props) => {
  
  News.defaultProps = {
    country: 'us',
    pageSize: 12,
    category: 'general'
  };

  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    api: PropTypes.string.isRequired,
    set: PropTypes.func
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const [data,setdata] = useState("");

  const fetchNews =(k) => {

      props.set(0);
      setLoading(true);

      let info={"status":"ok","totalResults":4,"articles":[{"source":{"id":null,"name":"newsBTC"},"author":"Dalmas Ngetich","title":"Polkadot Treasury Reserves at All-Time Low And DOT Bears Aren’t Helping","description":"Polkadot is among the top blockchains, securing a spot in the top 20. Even though the platform promotes blockchain interoperability, a feature needed in the age of increasing fragmentation, DOT prices have failed to inspire bulls.  This state of affairs on pr…","url":"http://www.newsbtc.com/news/polkadot-dot/polkadot-treasury-reserves-at-all-time-low/","urlToImage":"https://www.newsbtc.com/wp-content/uploads/2023/05/guerrillabuzz-m18EUUI8pSI-unsplash.jpg?fit=1920%2C1080","publishedAt":"2024-11-02T02:30:57Z","content":"Dalmas, a seasoned crypto reporter, brings a unique perspective to the industry. His specialization in NFTs, blockchain, DeFi, and blockchain news for NewsBTC, combined with a background in mechanica… [+3178 chars]"},{"source":{"id":null,"name":"ZyCrypto"},"author":"Aliyu Pokima","title":"How Far Will Bitcoin’s Jump Drive The Meme Coin Frenzy?","description":"The market rally inspired by a jump in Bitcoin’s price has impacted meme coins, boosting several tokens to new highs.","url":"https://zycrypto.com/how-far-will-bitcoins-jump-drive-the-meme-coin-frenzy/","urlToImage":"https://zycrypto.com/wp-content/uploads/2022/08/Bitcoin-And-Ethereum-Eye-30-Jump-In-August-Despite-Lacklustre-On-Chain-Activity.jpg","publishedAt":"2024-11-02T05:18:02Z","content":"The market rally inspired by a jump in Bitcoins price has impacted meme coins, boosting several tokens to new highs. Meme coins across categories ranging from Dog-themed, Cat-themed, political, or So… [+1605 chars]"},{"source":{"id":null,"name":"ZyCrypto"},"author":"Guest Author","title":"BNB and Solana in the Headlines, But Lunex Network’s Crypto Presale Leads the Charge","description":"As a bullish 2024 ramps up, established players Binance Coin (BNB) and Solana (SOL) once again steal the show. But as these market giants struggle to scale and strengthen their ecosystems, Lunex Network is cutting through the noise with its innovative tech, p…","url":"https://zycrypto.com/bnb-and-solana-in-the-headlines-but-lunex-networks-crypto-presale-leads-the-charge/","urlToImage":"https://zycrypto.com/wp-content/uploads/2024/11/BNB-and-Solana-in-the-Headlines-But-Lunex-Networks-Crypto-Presale-Leads-the-Charge.jpg","publishedAt":"2024-11-02T18:16:52Z","content":"As a bullish 2024 ramps up, established players Binance Coin (BNB) and Solana (SOL) once again steal the show. But as these market giants struggle to scale and strengthen their ecosystems, Lunex Netw… [+3533 chars]"},{"source":{"id":null,"name":"The Daily Hodl"},"author":"Daily Hodl Staff","title":"Crypto Analyst Suggests Dogecoin (DOGE) Could Kick Off Parabolic Run This Month – Here’s Why","description":"A widely followed crypto analyst thinks the top meme asset Dogecoin (DOGE) could kick off a parabolic bull run this month. In a new strategy session, crypto trader Ali Martinez shares a chart with his 76,400 followers on the social media platform X that sugge…","url":"https://dailyhodl.com/2024/11/01/crypto-analyst-suggests-dogecoin-doge-could-kick-off-parabolic-run-this-month-heres-why/","urlToImage":"https://dailyhodl.com/wp-content/uploads/2024/10/doge-kick-off-run.jpg","publishedAt":"2024-11-02T00:00:52Z","content":"A widely followed crypto analyst thinks the top meme asset Dogecoin (DOGE) could kick off a parabolic bull run this month.\r\nIn a new strategy session, crypto trader Ali Martinez shares a chart with h… [+1413 chars]"}]}

   


       setArticles(info.articles);  
      setLoading(false);
    setTotalArticles(info.totalResults)
      props.set(100);

    
  };

  
  useEffect(() => {
    document.title = `${props.category} - CryptoAlert`;
   setdata(props.category)
    fetchNews(data);
    // eslint-disable-next-line
  }, [page, props.category, props.country]);

  

  return (
    
    <div className="container top">
     
      <h1 style={{color:"white"}}><strong className="text">
       Top Updates- 
        </strong>{props.category}</h1>
      {loading && <Spinner className="d-flex justify-content-center" />}
      
      <div className="row">
        {!loading && articles.map((element) => (
          <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title}
              description={ element.description.slice(0,100)}
              imageUrl={element.urlToImage || nn}
              newsUrl={element.url}
              date={element.publishedAt}
              source={element.source.name}
            />
          </div>
        ))}
      </div>

       
      
    </div>
  );
};

export default News;
