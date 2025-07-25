import styleContacts from "./Contacts.module.css"

import { Link } from 'react-router-dom';
import API from './../../Api/ApiHelper';
import { useEffect } from "react";
function Contacts() {

   async function fetchPokemon() {
  
    const response = await API.get('pokemon?limit=1000', {});

    console.log(response);
    return response;
  }

   async function getSinglePokemon(id) {
  
    const response = await API.get('pokemon/' + id, {});

    console.log(response);
    return response;
  }

   useEffect(() => {
    async function getGenres() {
      try {

        const data = await fetchPokemon();
        let singlePokemon = await getSinglePokemon(1) 

         console.log(data);
        console.log(singlePokemon);
        
      } catch (error) {
        console.error('Errore nel caricamento', error);
      }
    }

    getGenres();
  }, []); // [] = esegui solo una volta al montaggio

  return(
   <div className="contacts-container">
     <Link to="/movies">Movies</Link> | <Link to="/">Home</Link>  
      <h1 className={styleContacts.titoloMovies}>Benvenuto in contacts!</h1>

      <h2>Lista pokemon</h2>

    </div>

  );
}

export default Contacts;