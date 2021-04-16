import './ListeDossiers.scss';
import Dossier from './Dossier';
import { useState, useEffect } from 'react';
import * as crudDossiers from '../service/crud-dossier';



export default function ListeDossiers({utilisateur}) {
  const [dossiers, setDossiers] = useState([]);

  useEffect(
    () => crudDossiers.lireTout(utilisateur.uid).then(
      lesDossiers => setDossiers(lesDossiers)
    )
    , []
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



