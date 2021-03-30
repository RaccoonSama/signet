import './ListeDossiers.scss';
import Dossier from './Dossier';
import dbFirestore from '../data/firebase';
import { useState, useEffect } from 'react';



export default function ListeDossiers() {
  const [dossiers, setDossiers] = useState([]);

  useEffect(
    () => dbFirestore.collection('dossier-temp').get().then(
        reponse => {
        let dossiersTemp = [];
        reponse.forEach(doc =>  dossiersTemp.push({id: doc.id, ...doc.data() })); 
        setDossiers(dossiersTemp);
      }
    ), []
  );

  return (
    <ul className="ListeDossiers">
      {
       dossiers.map( 
          dossier =>  <li key={dossier.id}><Dossier {...dossier} /></li>
        )
      }
    </ul>
  );
}



