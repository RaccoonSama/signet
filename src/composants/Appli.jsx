import './Appli.scss';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Acceuil from './Acceuil';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';


export default function Appli() {
  const [utilisateur, setUtilisateur] = useState(null);

  useEffect(() =>
  {
    firebase.auth().onAuthStateChanged(
      util => setUtilisateur(util)
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
          <ListeDossiers />
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
