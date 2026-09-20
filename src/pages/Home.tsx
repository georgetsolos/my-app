import './Home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Leaderboard from '../components/Leaderboard';
import DevCta from '../components/DevCta';
import { games } from '../data/games';

type Props = { onSignIn: () => void };

export default function Home({ onSignIn }: Props) {
  return (
    <main className="home">
      <Header onSignIn={onSignIn} />

      <section className="hero">
        <div className="hero__inner">
          <div className="hero__text">
            <h1 className="hero__title">Play something new today.</h1>
            <p className="hero__subtitle">
              Discover cozy, indie, and classic games — curated for you.
            </p>
            <button className="btn btn--primary" type="button">
              Browse library
            </button>
          </div>
          <img
            className="hero__art"
            src="/src/assets/hero.png"
            alt=""
            aria-hidden="true"
          />
        </div>
      </section>

      <Carousel />

      <section className="filters">
        <div className="filters__inner">
          <ul className="filters__chips">
            {['All', 'Puzzle', 'Adventure', 'Arcade', 'Strategy'].map(
              (c, i) => (
                <li key={c}>
                  <button
                    className={`chip${i === 0 ? ' chip--active' : ''}`}
                    type="button"
                  >
                    {c}
                  </button>
                </li>
              )
            )}
          </ul>
          <div className="filters__sort">
            <button className="sort-btn" type="button">
              Start by Rating <span aria-hidden="true">▾</span>
            </button>
          </div>
        </div>
      </section>

      <section className="games">
        <div className="games__inner">
          <ul className="games__grid">
            {games.map((g) => (
              <li key={g.id} className="game-card">
                <img className="game-card__img" src={g.cardImage} alt="" />
                <div className="game-card__body">
                  <h3 className="game-card__title">{g.title}</h3>
                  <p className="game-card__meta">
                    ★ {g.rating.toFixed(1)} · {g.category}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Leaderboard />

      <DevCta />

      <Footer />
    </main>
  );
}
