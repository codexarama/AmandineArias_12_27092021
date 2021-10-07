import React from 'react';
import {useParams} from 'react-router-dom';

import logo from '../Assets/logo.svg'
import { getUserById } from '../Services/api';
import User from '../Components/User';
import '../Styles/accueil.css';

export default function Accueil() {

  const user = useParams();
  const userId = parseInt(user.id);

  return (
    <main className='accueil'>
      <header>
        <img className="logo" src={logo} alt="logo sport see" />
      <h1 className="welcome-msg">Bonjour, qui est-ce ?</h1>
      </header>
      <section className="users">
      { getUserById(userId.map(({id, userInfos}) => <User key={id} id={id} name={userInfos.firstName} />))
}
      </section>
    </main>
  );
}



// import React from 'react';
// import logo from '../Assets/logo.svg'
// import { getUserById } from '../Services/api';
// import '../Styles/accueil.css';

// export default function Accueil() {
//   return (
//     <main className='accueil'>
//       <header>
//         <img className="logo" src={logo} alt="logo sport see" />
//       <h1 className="welcome-msg">Bonjour, qui est-ce ?</h1>
//       </header>
//       <section className="users">
//         {mock.map(({ id, userInfos }) => (
//           <User key={id} id={id} name={userInfos.firstName} />
//         ))}
//       </section>
//     </main>
//   );
// }
