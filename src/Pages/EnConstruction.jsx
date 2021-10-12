import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/alerte.css'

export default function EnConstruction(props) {

  // console.log(props);

  let { id, topicId } = useParams();

setTimeout(() => {
  props.history.push(`/user/${id}`)
}, 3000);

  return (
    <main>
      <h1 className="alert-msg">Page " {topicId} " en cours de construction</h1>
      <p className="alert-msg info-redirection">Redirection vers le tableau de bord dans 2s.</p>
    </main>
  );
}
