import './DevCta.scss';

export default function DevCta() {
  return (
    <section className="dev-cta">
      <div className="dev-cta__inner">
        <div className="dev-cta__card">
          <div className="dev-cta__content">
            <h2 className="dev-cta__title">Are you a game developer?</h2>
            <p className="dev-cta__text">
              Publish your game on MiniGames and reach thousands of players.
            </p>
          </div>
          <button className="btn btn--primary" type="button">
            Submit your game
          </button>
        </div>
      </div>
    </section>
  );
}
