import React from 'react'
import "./moviecard.css"
const MovieCard=({movie}) =>{
  return (

<>

  <body>
  <div className="container">
  <div  className="card">
    <div className="content">
      <div className="imgBx">
        <img style={{height:'85px',width:'85px'}} src={movie.posterUrl}
            alt="" />
      </div>
      <div className="contentBx">
        <h3>
        {movie.title}
          <br />
          <span>{movie.description}</span>
        </h3>
     

            {/* WATCH TRAILER*/}
            <button>
              <i className="fas fa-play" /> SEE TRAILER
            </button>
            {/* GET*/}
            <button>
              <i className="fas fa-download" /> DOWNLOAD
            </button>
            {/*USERS RATINGS*/}
            <button>
              <i className="fas fa-thumbs-up" /> 97%
            </button>
            {/*BOOKMARK*/}
            <button>
              <i className="fas fa-star" />
            </button>
          
  
     
        <div className="play_btn">
          <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
            <i className="fas fa-play-circle" />
          </a>
        </div>
      
        </div>
    </div>
  </div>
</div>
  
  </body>
</>
)}

export default MovieCard
