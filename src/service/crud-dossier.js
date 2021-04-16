import {instanceFirestore} from './firebase';
import {collUtil, collDossiers} from './config';

export async function lireTout(uid) {
    let dossiersTemp = [];
    return instanceFirestore.collection(collUtil).doc(uid).collection(collDossiers).get().then(
        reponse => {
        reponse.forEach(doc =>  dossiersTemp.push({id: doc.id, ...doc.data() })); 
        
      }
    ).then(
        () => dossiersTemp
    )
    
}

export async function supprimer() {
    
}
export async function modifier() {
    
}
export async function ajouter() {
    
}