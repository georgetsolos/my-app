import { useRef } from 'react';
import { games } from '../data/games';
import './Carousel.scss';

const featured = games.slice(0, 6);

export default function Carousel() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section className="carousel">
      <div className="carousel__inner">
        <header className="carousel__header">
          <h2 className="carousel__title">Featured games</h2>
          <div className="carousel__controls">
            <button
              className="carousel__btn"
              type="button"
              aria-label="Previous"
              onClick={() => scrollBy(-1)}
            >
              ‹
            </button>
            <button
              className="carousel__btn"
              type="button"
              aria-label="Next"
              onClick={() => scrollBy(1)}
            >
              ›
            </button>
          </div>
        </header>

        <ul className="carousel__track" ref={trackRef}>
          {featured.map((g) => (
            <li key={g.id} className="carousel__slide">
              <article className="carousel-card">
                <img className="carousel-card__img" src={g.heroImage} alt="" />
                <div className="carousel-card__body">
                  <h3 className="carousel-card__title">{g.title}</h3>
                  <p className="carousel-card__meta">
                    ★ {g.rating.toFixed(1)} · {g.category}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
