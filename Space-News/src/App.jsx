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
    <div className="App">
      <div className="title">
        <h1>WELCOME TO SPACE NEWS!</h1>
      </div>
    <div className='newsContainer'>
          {articles.map((article, key) =>{
            return <div className='article' title={article.url} key={key} onClick={() => window.open(article.url, '_blank')}>
                          <div className="image">
                            <img src={article.imageUrl} alt="" />
                          </div>
                          <div className="content">
                            <h2>{article.title}</h2>
                            <p>{article.summary}</p>
                            <p><strong>Published on: {new Date(article.publishedAt).toDateString()}</strong></p>
                          </div>
                          
                      </div>
                   
          })}
    </ div>
    </div>
  )
}

export default App
