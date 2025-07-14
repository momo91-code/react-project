import styleContacts from "./Contacts.module.css"

import { Link } from 'react-router-dom';
function Contacts() {
  return(
   <div className="contacts-container">
     <Link to="/movies">Movies</Link> | <Link to="/">Home</Link>  
      <h1 className={styleContacts.titoloMovies}>Benvenuto in contacts!</h1>
    </div>
  );
}

export default Contacts;