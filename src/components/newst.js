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

      let info={"status":"ok","totalResults":4,"articles":[{"source":{"id":null,"name":"Bitcoinist"},"author":"Scott Matherson","title":"Dogecoin Community Celebrates DOGE Day – What Is It All About?","description":"Today, the Dogecoin community, including investors, traders, and enthusiasts, are rallying to celebrate “DOGE Day,” an annual event dedicated to the beloved doggy-themed meme coin, Dogecoin (DOGE). Related Reading: Kraken Sacks 15% Of Staff—A Strategic Pivot …","url":"https://bitcoinist.com/dogecoin-community-celebrates-doge-day-what-is-it-all-about/","urlToImage":"https://bitcoinist.com/wp-content/uploads/2024/11/a_aaa3e3.jpg","publishedAt":"2024-11-02T23:30:43Z","content":"Today, the Dogecoin community, including investors, traders, and enthusiasts, are rallying to celebrate DOGE Day, an annual event dedicated to the beloved doggy-themed meme coin, Dogecoin (DOGE). \r\nA… [+3077 chars]"},{"source":{"id":null,"name":"Bitcoinist"},"author":"Scott Matherson","title":"Dogecoin Price Completes October In The Green, Here’s What Historical Data Says About November","description":"Following Bitcoin’s recent bullish trajectory, the Dogecoin price has ended October in the green, marking its second-highest monthly returns in October since 2014, according to Cryptorank’s historical data. Now, as November unfolds, investors and market exper…","url":"https://bitcoinist.com/dogecoin-price-october-green/","urlToImage":"https://bitcoinist.com/wp-content/uploads/2024/11/Dogecoin-green.webp","publishedAt":"2024-11-02T06:00:12Z","content":"Following Bitcoins recent bullish trajectory, the Dogecoin price has ended October in the green, marking its second-highest monthly returns in October since 2014, according to Cryptoranks historical … [+3236 chars]"},{"source":{"id":null,"name":"The Daily Hodl"},"author":"Daily Hodl Staff","title":"Crypto Analyst Suggests Dogecoin (DOGE) Could Kick Off Parabolic Run This Month – Here’s Why","description":"A widely followed crypto analyst thinks the top meme asset Dogecoin (DOGE) could kick off a parabolic bull run this month. In a new strategy session, crypto trader Ali Martinez shares a chart with his 76,400 followers on the social media platform X that sugge…","url":"https://dailyhodl.com/2024/11/01/crypto-analyst-suggests-dogecoin-doge-could-kick-off-parabolic-run-this-month-heres-why/","urlToImage":"https://dailyhodl.com/wp-content/uploads/2024/10/doge-kick-off-run.jpg","publishedAt":"2024-11-02T00:00:52Z","content":"A widely followed crypto analyst thinks the top meme asset Dogecoin (DOGE) could kick off a parabolic bull run this month.\r\nIn a new strategy session, crypto trader Ali Martinez shares a chart with h… [+1413 chars]"},{"source":{"id":null,"name":"Ambcrypto.com"},"author":"AMBCrypto Team","title":"Whales jumping to double up on rewards with BlockDAG’s 100% Bonus Offer","description":"As Dogecoin (DOGE) targets a breakthrough at the $0.30 mark, the broader market’s downward trend […]","url":"https://ambcrypto.com/whales-jumping-to-double-up-on-rewards-with-blockdags-100-bonus-offer/","urlToImage":"https://ambcrypto.com/wp-content/uploads/2024/11/Screenshot-2024-11-02-183249-982x600.png","publishedAt":"2024-11-02T17:05:23Z","content":"As Dogecoin (DOGE) targets a breakthrough at the $0.30 mark, the broader market’s downward trend casts doubts about its upward trajectory. Meanwhile, the presale domain is buzzing with activity as fr… [+3888 chars]"}]}

   


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

  const handleNext = () => {
    setPage(page+1);
  };

  const handlePrev = () => {
    setPage(page-1);
  };

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
