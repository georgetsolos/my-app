import './Header.scss';

type Props = {
  onSignIn: () => void;
  user?: { name: string } | null;
};

export default function Header({ onSignIn, user = null }: Props) {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__brand">
          <span className="header__logo" aria-hidden="true">▣</span>
          MiniGames
        </a>

        <nav className="header__nav" aria-label="Main">
          <a href="/">Home</a>
          <a href="/library">Library</a>
          <a href="/tournaments">Tournaments</a>
          <a href="/community">Community</a>
        </nav>

        <div className="header__actions">
          {user ? (
            <>
              <button className="header__user">
                {user.name} <span aria-hidden="true">▾</span>
              </button>
              <button className="btn btn--ghost">Log Out</button>
            </>
          ) : (
            <>
              <button className="btn btn--ghost" onClick={onSignIn}>Log In</button>
              <button className="btn btn--primary" onClick={onSignIn}>Sign Up</button>
            </>
          )}

          <button className="header__burger" aria-label="Menu">☰</button>
        </div>
      </div>
    </header>
  );
}