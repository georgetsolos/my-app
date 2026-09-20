import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

type Props = {
  onSignIn: () => void;
  user?: { name: string } | null;
};

export default function Header({ onSignIn, user = null }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const openAuth = () => {
    setMenuOpen(false);
    onSignIn();
  };

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand" onClick={closeMenu}>
          <span className="header__logo" aria-hidden="true">▣</span>
          MiniGames
        </Link>

        <nav className="header__nav" aria-label="Main">
          <Link to="/">Home</Link>
          <Link to="/library">Library</Link>
          <Link to="/tournaments">Tournaments</Link>
          <Link to="/community">Community</Link>
        </nav>

        <div className="header__actions">
          {user ? (
            <>
              <button className="header__user" type="button">
                {user.name} <span aria-hidden="true">▾</span>
              </button>
              <button className="btn btn--ghost" type="button">Log Out</button>
            </>
          ) : (
            <>
              <button className="btn btn--ghost" type="button" onClick={onSignIn}>
                Log In
              </button>
              <button className="btn btn--primary" type="button" onClick={onSignIn}>
                Sign Up
              </button>
            </>
          )}

          <button
            className="header__burger"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`header__drawer${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="header__drawer-nav" aria-label="Mobile">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/library" onClick={closeMenu}>Library</Link>
          <Link to="/tournaments" onClick={closeMenu}>Tournaments</Link>
          <Link to="/community" onClick={closeMenu}>Community</Link>
        </nav>

        <div className="header__drawer-actions">
          {user ? (
            <button className="btn btn--ghost" type="button" onClick={closeMenu}>
              Log Out
            </button>
          ) : (
            <>
              <button className="btn btn--ghost" type="button" onClick={openAuth}>
                Log In
              </button>
              <button className="btn btn--primary" type="button" onClick={openAuth}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
