import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
//import { AuthorizationStatus } from '../../constants';

type Props = {
  children?: JSX.Element;
}

function Header({ children }: Props) {
  return (

    <header className="page-header user-page__head">
      <div className="logo">
        <Link to={AppRoute.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {children}
      {AuthorizationStatus.NoAuth ?
        <div className="user-block">
          <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
        </div>
        :
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to={AppRoute.Login} className="user-block__link">Sign out</Link>
          </li>
        </ul>}
    </header>
  );
}

export default Header;
