import React, { useState } from 'react'
import axios from 'axios'
import VitrinesBDD from './VitrinesBDD';


let baseURL = "http://localhost:3001/vitrines/"
export default function Vitrines() {
  const [vitrine, setVitrine] = useState([]);

  React.useEffect(() => {
    axios.get(baseURL)
      .then((res) => {
        setVitrine(res.data)
      })
      .catch((err) => console.log(err));
    ;
  }, []);

  console.log("récupération: " ,vitrine);

  if (!vitrine) return null;

  return (
    <div className='page_vitrines'>
      <h1>Les Vitrines</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat fugiat sint illum. Modi, voluptatem esse. Quaerat consectetur nam veniam debitis cupiditate, fugit, assumenda perferendis, corrupti exercitationem modi qui aspernatur!</p>
      <div className='vitrines_container'>

      <div className='filter_container'>
        <p>Filtres</p>
      </div>
      <VitrinesBDD vitrines={vitrine}/>
      </div>
    </div>
  )
}
