import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import NavBar from './Components/NavBar.jsx';
import Home from './Components/Home.jsx';
import Footer from './Components/Footer.jsx';
import Error404 from './Components/Error404';
import Contact from './Components/Contact';
import Exposition from './Components/Exposition';
import Vitrines from './Components/Vitrines';
import Acces from './Components/Acces';
import Detail from './Components/DetailVitrine';
import DashBoard from './Components/DashBoard';
import CreateForm from './Components/CreateForm';
import AllVitrines from './Components/AllVitrines';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/vitrines' element={<Vitrines/>}/>
          <Route path='/exposition' element={<Exposition/>}/>
          <Route path='/acces/login' element={<Acces/>}/>
          <Route path='/detail' element={<Detail/>}/>
          <Route path='/dashboard' element={<DashBoard/>}/>
          <Route path='/dashboard/creerVitrine' element={<CreateForm/>}/>
          <Route path='/dashboard/listeVitrines' element={<AllVitrines/>}/>
          //Si la page n'existe pas, 2 possibilités
				<Route path="*" element={ <Error404/> }/> //Page d'erreur pour tout autre chemin que ceux définit
				<Route path="*" element={ <Navigate to="/"/> }/> //Renvoi vers une autre page
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
