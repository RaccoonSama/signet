import './Acceuil.scss';
import firebase from 'firebase/app';
import {instanceFbUi} from '../data/firebase';
import 'firebaseui/dist/firebaseui.css';
import { useEffect } from 'react';


export default function Acceuil(props) {

    useEffect(() => {
        instanceFbUi.start('#fbui', {
            signInOptions : [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ],
            signInFlow : 'popup'
        });
      
    }, []);




     return (
        <div className="Acceuil">
            <h3 className="logo">Signets <span>beta</span></h3>
             <h2 className="amorce">Organisez vos signets web, <br/> un jeu d'enfant</h2>
             <div id="fbui"></div>
        </div>
    );
}