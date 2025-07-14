import style from './Movies.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Movies() {
  useEffect(() => {
    console.log('init');
  
  }, []); // [] = esegui solo una volta al montaggio
  return (
  <div className="movies-container">
    
 <Link to="/">Home</Link> | <Link to="/contacts">Contact</Link>  
   <h1 className={style.titoloMovies}>Benvenuto in Movies!</h1>
  </div>
  );
}

export default Movies;