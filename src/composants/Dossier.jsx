import './Dossier.scss'; 
import { IconButton } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';
export default function Dossier({nom, couleur, modification, image}) {
  return (
    <article className="Dossier" style={{backgroundColor: couleur}}>
      <div className="couverture">
        <IconButton className="deplacer" aria-label="déplacer" disableRipple={true}>
          <SortIcon />
        </IconButton>
        <img src={image} alt={nom}/>
      </div>
      <div className="info">
        <h2>{nom}</h2>
        <p>Modifié : {dateFormat(modification)}</p>
      </div>
      <IconButton className="modifier" aria-label="modifier" size="small">
        <MoreVertIcon />
      </IconButton> 
    </article>
  );
}

function dateFormat(objetDatefb) {
  let dateJS = (objetDatefb) ? new Date(objetDatefb.seconds*1000) : new Date;
  let nomMois = ['janvier','février','mars','avril','mai','juin','juillet','aout', 'septembre', 'octobre', 'novembre', 'décembre']
  let jour = dateJS.getDate();
  let mois = nomMois[dateJS.getMonth()];
  let annee = dateJS.getFullYear();

  return `${jour} ${mois} ${annee}`;

}