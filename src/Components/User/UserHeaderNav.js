import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import styles from './UserHeaderNav.module.css';
import { ReactComponent as Feed } from '../../Assets/feed.svg';
import { ReactComponent as Stats } from '../../Assets/estatisticas.svg';
import { ReactComponent as Post } from '../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/account" end activeClassName={styles.active}>
        <Feed />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/account/stats" activeClassName={styles.active}>
        <Stats />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/account/post" activeClassName={styles.active}>
        <Post />
        {mobile && 'Nova Postagem'}
      </NavLink>
      <button onClick={userLogout}>
        <Logout />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
