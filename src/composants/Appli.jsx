import './Appli.scss';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Acceuil from './Acceuil';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import {instanceFirestore} from '../service/firebase';
import {instanceFirebaseAuth} from '../service/firebase';
import {collUtil} from '../service/config';

export default function Appli() {
  const [utilisateur, setUtilisateur] = useState(null);

  useEffect(() =>
  {
    instanceFirebaseAuth.onAuthStateChanged(
      util => {
        setUtilisateur(util);
        instanceFirestore.collection(collUtil).doc(util.uid).set(
          {nom: util.displayName, courriel: util.email},
          {merge: true}
        )
      }
    )
  }
  
  
  ,[]);

  return (
    <div className="Appli">
     { 
     (utilisateur) ?
      <>
       <Entete utilisateur={utilisateur}/>
        <section className="contenu-principal">
          <ListeDossiers utilisateur={utilisateur}/>
          <Fab className="ajoutRessource" color="primary" aria-label="Ajouter dossier">
            <AddIcon />
          </Fab>
        </section>
        </>
      :
        <Acceuil/>}
    </div>
  );
}
