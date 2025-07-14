import styleHome from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
   
       <Link to="/movies">Movies</Link> | <Link to="/contacts">Contact</Link>  
     
      <h1>Benvenuto in Home!</h1>
    </div>
  );
}

export default Home;

