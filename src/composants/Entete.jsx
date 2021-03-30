import './Entete.scss';

import { Avatar } from '@material-ui/core'; 

import avatarImg from '../images/avatar.png';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="utilisateur">Luna Gagnon Lavoie <Avatar className="avatar" alt="Luna Gagnon Lavoie" src={avatarImg} /></div>
    </header>
  );
}