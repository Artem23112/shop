// components/Breadcrumbs.tsx
import type { ReactNode } from 'react';
import { useMatches, type UIMatch } from 'react-router-dom';
import s from './breadcrumbs.module.scss';

export const Breadcrumbs = () => {
  const matches = useMatches();
  const crumbs = matches
    .filter(hasHandleWithCrumb)
    .map((match) => match.handle.crumb(match.data));

  if (crumbs.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb">
      <div className="container">
        <ul className={s.list}>
          {crumbs.map((crumb, index) => (
            <li key={index} className={s.item}>
              {crumb}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

function hasHandleWithCrumb(
  match: UIMatch
): match is UIMatch & { handle: { crumb: (data?: unknown) => ReactNode } } {
  const handle = match.handle as Record<string, unknown> | null | undefined;
  return handle != null && typeof handle.crumb === 'function';
}
