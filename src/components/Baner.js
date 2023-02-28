import React, { Component } from 'react'
import {movies} from '../MovieData'

export class Baner extends Component {


  render() {
      let moviesElem = movies.results[Math.floor((Math.random() * 10) + 1)]
      
      let backdrop = moviesElem.backdrop_path;

    return (
        <div className="card baner-card">
        <img src={`https://image.tmdb.org/t/p/original${backdrop}`}  className="card-img-top baner-img" alt="..."/>
        
          <h5 className="card-title baner-title">Jurassic Hunt</h5>
          <p className="card-text baner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

      </div>
    )
  }
}

export default Baner