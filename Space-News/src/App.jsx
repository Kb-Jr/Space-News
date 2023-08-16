import { useState, useEffect } from 'react'
import './App.css'

function App() {

const [articles, setArticles] = useState([]);

useEffect(() => {
  fetch("https://api.spaceflightnewsapi.net/v3/articles/")
  .then((response)=> response.json())
  .then((data) =>{
    setArticles(data);
    console.log(data);
  });
}

  
, []);
  return (
    <div className='wrapper'>
          {articles.map((article, key) =>{
            return <div className='articleContainer' key={key} onClick={() => window.open(article.url, '_blank')}>
                          <div className="image">
                            {/* <img src={article.imageUrl} alt="" /> */}
                          </div>
                          <div className="content">
                            {/* <h2>{article.title}</h2>
                            <p>{article.summary}</p>
                            <p>Published on:{new Date(article.publishedAt).toDateString()}</p> */}
                          </div>
                          
                      </div>
                   
          })}
    </ div>
  )
}

export default App
