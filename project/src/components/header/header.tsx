function Header() {
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <a className="logo__link" href="1">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      {/* если страница add-review
       <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav> */}
      {/* если страница myList
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">9</span>
        </h1> */}

      {/* если ты зарегестрировался и не страница входа и регистрации */}
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img
              src="img/avatar.jpg"
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>

      {/* если не зарегестрировался
       <h1 className="page-title user-page__title">Sign in</h1> */}
    </header>
  );
}

export default Header;
