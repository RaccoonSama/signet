import './ListeDossiers.scss';
import dossTab from '../data/liste-dossiers.json';
import Dossier from './Dossier';
import firebase from 'firebase/app';
import firestore from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAmtX_Q-C-aU64ZGfDxu90myW6qppWbHLI",
  authDomain: "cours-react-firebase.firebaseapp.com",
  projectId: "cours-react-firebase",
  storageBucket: "cours-react-firebase.appspot.com",
  messagingSenderId: "752948488573",
  appId: "1:752948488573:web:6720b2db593f3e96c24414"
};

export default function ListeDossiers() {

  return (
    <ul className="ListeDossiers">
      {
        dossTab.map( 
          dossier =>  <li key={dossier.id}><Dossier {...dossier} /></li>
        )
      }
    </ul>
  );
}