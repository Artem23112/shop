import { Link } from 'react-router-dom';
import s from './product-page.module.scss';

export const ProductNotFoundPage: React.FC = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.icon}>🔍</div>
        <h1 className={s.title}>Product Not Found</h1>
        <p className={s.description}>
          Sorry, we couldn't find the product you're looking for. It may have
          been removed or is temporarily unavailable.
        </p>
        <div className={s.info}>
          <h3 className={s.infoTitle}>What you can do:</h3>
          <ul className={s.infoList}>
            <li>
              <span className={s.bullet}>•</span>
              <span>Check if the product ID is correct</span>
            </li>
            <li>
              <span className={s.bullet}>•</span>
              <span>Browse our catalog for similar products</span>
            </li>
            <li>
              <span className={s.bullet}>•</span>
              <span>Use the search to find what you need</span>
            </li>
          </ul>
        </div>
        <div className={s.actions}>
          <Link to="/catalog" className={s.btnPrimary}>
            Browse Catalog
          </Link>
          <Link to="/" className={s.btnSecondary}>
            Back to Home
          </Link>
          <Link to="/search" className={s.btnTertiary}>
            Search Products
          </Link>
        </div>
      </div>
    </div>
  );
};
