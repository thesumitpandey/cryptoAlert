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

      let info={"status":"ok","totalResults":2,"articles":[{"source":{"id":null,"name":"Ambcrypto.com"},"author":"Erastus Chami","title":"BNB’s 29th Burn – Examining the odds of altcoin rallying to a new high now","description":"BNB’s 29th burn could be the catalyst for a new rally if resistance breaks.","url":"https://ambcrypto.com/bnbs-29th-burn-examining-the-odds-of-altcoin-rallying-to-a-new-high-now/","urlToImage":"https://ambcrypto.com/wp-content/uploads/2024/11/Erastus-BNB-1000x600.png","publishedAt":"2024-11-02T06:00:22Z","content":"<ul><li>BNB’s $1 billion burn can drive potential bullish momentum towards the $606 resistance</li><li> Higher volumes and Open interest revealed strong market interest and optimism</li></ul>The BNB … [+2826 chars]"},{"source":{"id":null,"name":"ZyCrypto"},"author":"Guest Author","title":"BNB and Solana in the Headlines, But Lunex Network’s Crypto Presale Leads the Charge","description":"As a bullish 2024 ramps up, established players Binance Coin (BNB) and Solana (SOL) once again steal the show. But as these market giants struggle to scale and strengthen their ecosystems, Lunex Network is cutting through the noise with its innovative tech, p…","url":"https://zycrypto.com/bnb-and-solana-in-the-headlines-but-lunex-networks-crypto-presale-leads-the-charge/","urlToImage":"https://zycrypto.com/wp-content/uploads/2024/11/BNB-and-Solana-in-the-Headlines-But-Lunex-Networks-Crypto-Presale-Leads-the-Charge.jpg","publishedAt":"2024-11-02T18:16:52Z","content":"As a bullish 2024 ramps up, established players Binance Coin (BNB) and Solana (SOL) once again steal the show. But as these market giants struggle to scale and strengthen their ecosystems, Lunex Netw… [+3533 chars]"}]}

   


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
