import { Link } from 'react-router-dom';
import s from './not-found.module.scss';

export const NotFound: React.FC = () => {
  return (
    <main className={s.container}>
      <div className={s.content}>
        <h1 className={s.title}>404</h1>
        <h2 className={s.subtitle}>Page Not Found</h2>
        <p className={s.description}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className={s.actions}>
          <Link to="/" className={s.btnPrimary}>
            Go Home
          </Link>
          <Link to="/catalog" className={s.btnSecondary}>
            Browse Catalog
          </Link>
        </div>
      </div>
    </main>
  );
};
