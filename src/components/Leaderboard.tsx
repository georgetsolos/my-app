import './Leaderboard.scss';

type Row = {
  rank: number;
  name: string;
  score: number;
  games: number;
};

const rows: Row[] = [
  { rank: 1, name: 'Alex K.', score: 9840, games: 42 },
  { rank: 2, name: 'Mira S.', score: 9210, games: 38 },
  { rank: 3, name: 'John D.', score: 8930, games: 36 },
  { rank: 4, name: 'Priya N.', score: 8620, games: 31 },
  { rank: 5, name: 'Ravi P.', score: 8105, games: 29 },
];

export default function Leaderboard() {
  return (
    <section className="leaderboard">
      <div className="leaderboard__inner">
        <h2 className="leaderboard__title">Leaderboard</h2>

        <div className="leaderboard__wrap">
          <table className="leaderboard__table">
            <caption className="leaderboard__caption">
              Top players this week
            </caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Player</th>
                <th scope="col">Score</th>
                <th scope="col">Games</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.rank}>
                  <td>{r.rank}</td>
                  <td>{r.name}</td>
                  <td>{r.score.toLocaleString()}</td>
                  <td>{r.games}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
