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

      let info={"status":"ok","totalResults":5,"articles":[{"source":{"id":"the-irish-times","name":"The Irish Times"},"author":"Harry McGee","title":"The unravelling of a housing minister: Eoghan Murphy opens up about sleeping pills, manic running, anxiety and tears","description":"Former minister for housing Eoghan Murphy’s account of his failures (and failings) is candid, unforgiving, unfiltered and utterly brutal","url":"https://www.irishtimes.com/politics/2024/11/02/the-unravelling-of-a-housing-minister-eoghan-murphy-opens-up-about-sleeping-pills-manic-running-anxiety-and-tears/","urlToImage":"https://www.irishtimes.com/resizer/v2/KZUAC76SJUESN6R4IGE2OOECAQ.jpg?smart=true&auth=b14ac27ecb91a9f31d0788693f45f633388c20bb16ddd879b5f38f12a9c4efbe&width=1200&height=630","publishedAt":"2024-11-02T06:00:00Z","content":"In spring 2019, the numbers staying in emergency accommodation topped 10,000 for the first time.\r\nEoghan Murphy was minister for housing and had been in the job for less than two years. It was a seis… [+8473 chars]"},{"source":{"id":null,"name":"newsBTC"},"author":"Ronaldo Marquez","title":"CEO Ardoino On Tether Q3 Performance: $2.3 Billion Gains And What Lies Ahead For The Stablecoin","description":"On Thursday, Tether (USDT), the world’s largest stablecoin issuer, released its third-quarter (Q3) assurance opinion report, revealing substantial financial results amid the broader market recovery led by Bitcoin (BTC).  Total Tether Assets Reach All-Time Hig…","url":"http://www.newsbtc.com/news/tether-usdt/ceo-ardoino-on-tether-q3-performance-2-3-billion-gains-and-what-lies-ahead-for-the-stablecoin/","urlToImage":"https://www.newsbtc.com/wp-content/uploads/2024/11/Screenshot_567.jpg?fit=1319%2C736","publishedAt":"2024-11-02T07:30:04Z","content":"On Thursday, Tether (USDT), the worlds largest stablecoin issuer, released its third-quarter (Q3) assurance opinion report, revealing substantial financial results amid the broader market recovery le… [+2900 chars]"},{"source":{"id":null,"name":"BBC News"},"author":null,"title":"Woman 'sickened' by demands to return flood payment","description":"Flood compensation was offered to businesses affected by heavy flooding in 2023.","url":"https://www.bbc.com/news/articles/clyj54kx31jo","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/e941/live/88c77340-98e5-11ef-90b6-03c434ddb078.jpg","publishedAt":"2024-11-02T06:48:38Z","content":"Lorretta Gallagher had to close her textile art and gift shop for seven months after severe flooding in Newry\r\nA woman from Newry said she felt \"sickened\" by communications from her local council aft… [+4485 chars]"},{"source":{"id":null,"name":"Ixbt.com"},"author":"Jin","title":"Рекордная прибыль Tether: стейблкоин-гигант превосходит крупные державы по владению госдолгом США","description":"Компания Tether, эмитент крупнейшего стейблкоина USDT, продемонстрировала впечатляющие финансовые результаты в 2024 году, заработав $7,7 млрд, из которых $2,5 млрд пришлись на третий квартал. Успех...Читать дальше","url":"https://www.ixbt.com/live/crypto/rekordnaya-pribyl-tether-steyblkoin-gigant-prevoshodit-krupnye-derzhavy-po-vladeniyu-gosdolgom-ssha.html","urlToImage":"https://img.ixbt.site/live/topics/preview/00/08/73/16/96a41a7e63.jpg","publishedAt":"2024-11-02T03:16:00Z","content":"Tether, USDT, 2024 , $7,7 , $2,5 . , $134,4 , USDT .\r\n Tether 2024 : $27,8 , USDT 30%. , 120 USDT, $102,5 , , .\r\n: $119 $125 , $6 . USDT Tether ."},{"source":{"id":"news-com-au","name":"News.com.au"},"author":"Cameron Micallef","title":"Cost of living pressures sees 462,000 Aussies need to sell their home if there is no rate cut by February","description":"Aussie households are preparing for a tough Christmas with a record 47 per cent – about 1 in 2 – struggling to pay their home loan, as interest rates remain higher for longer.","url":"https://www.news.com.au/finance/business/breaking-news/462000-aussies-could-be-forced-to-sell-their-home-by-february/news-story/34a8c8d6c8c2c8d75697dd3ed8dd7f84","urlToImage":"https://content.api.news/v3/images/bin/07ebca88f0f6fd11150b5911a7776ea9","publishedAt":"2024-11-02T00:34:56Z","content":"Aussie households are preparing for a tough Christmas with a record 47 per cent – about 1 in 2 – struggling to pay their home loan, as interest rates remain higher for longer. \r\nSurvey data by compar… [+4045 chars]"}]}

   


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
