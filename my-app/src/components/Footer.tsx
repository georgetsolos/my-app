import './Footer.scss';

const links = ['About Us', 'Contact', 'Privacy', 'Terms'];
const socials = [
  { id: 'discord-icon', label: 'Discord' },
  { id: 'bluesky-icon', label: 'Bluesky' },
  { id: 'x-icon', label: 'X' },
  { id: 'github-icon', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">© 2025 MiniGames</p>

        <ul className="footer__links">
          {links.map((l) => (
            <li key={l}><a href="#" className="pill-link">{l}</a></li>
          ))}
        </ul>

        <ul className="footer__socials">
          {socials.map((s) => (
            <li key={s.id}>
              <a href="#" aria-label={s.label}>
                <svg className="footer__icon" aria-hidden="true">
                  <use href={`/icons.svg#${s.id}`} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}