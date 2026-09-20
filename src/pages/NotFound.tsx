import { Link } from 'react-router-dom';
import './NotFound.scss';

export default function NotFound() {
  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">That page doesn't exist.</p>
      <Link to="/" className="btn btn--primary">Back to Home</Link>
    </main>
  );
}
