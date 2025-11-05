import { usePageTitle } from '@app/hooks/usePageTitle';
import { Breadcrumbs } from '@components/ui/breadcrumbs/breadcrumbs';
import { Header } from '@layout/header/header';
import { Outlet } from 'react-router-dom';

export const RootRoute = () => {
  usePageTitle();
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Outlet />
    </>
  );
};
