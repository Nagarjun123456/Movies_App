
import './App.css';
import NavBar from './components/NavBar';
import Baner from './components/Baner';
import MovieList from './components/MovieList';
import Favourites from './components/Favourites';
import { BrowserRouter , Route, Routes} from 'react-router-dom'

function App() {
  return (
   
     <BrowserRouter>
     
     <NavBar/>

     <Routes>
        <Route path='/' element={<> <Baner/> <MovieList/></>}/>
        <Route path='/favourites' element={  <Favourites/>}/> 
     </Routes>





   
     
  

     </BrowserRouter>

  
    
   
   
  );
}

export default App;
