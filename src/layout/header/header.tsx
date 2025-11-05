import { useAppSelector } from '@app/rtk/hooks/hooks';
import { NavButton } from '@components/ui/buttons/nav-button/nav-button';
import { Logo } from '@components/ui/logo/logo';
import { Search } from '@components/ui/search/search';
import { cartItemsSelector } from '@features/cart/cartSlice';
import { wishlistItemsSelector } from '@features/wishlist/selectors';
import { ROUTES } from '@utils/constants/routes';
import clsx from 'clsx';
import { useState } from 'react';
import s from './header.module.scss';

export const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const cartProductIds = useAppSelector(cartItemsSelector);
  const wishlistProductIds = useAppSelector(wishlistItemsSelector);

  return (
    <header className={s.header}>
      <div className={clsx('container', s.contentWrapper)}>
        <a href={ROUTES.HOME} className={s.logoLink}>
          <Logo className={s.logo} />
        </a>

        <div
          className={clsx(s.searchWrapper, { [s.searchOpen]: isSearchOpen })}
        >
          <Search
            value={searchValue}
            setValue={setSearchValue}
            placeholder="Поиск товаров..."
          />
        </div>

        <div className={s.navWrapper}>
          <button
            className={s.searchToggle}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Открыть поиск"
          >
            🔍
          </button>

          <NavButton
            to={ROUTES.WISHLIST}
            icon={'❤️'}
            count={wishlistProductIds.length}
          />
          <NavButton
            to={ROUTES.CART}
            icon={'🛒'}
            count={cartProductIds.length}
          />
        </div>
      </div>
    </header>
  );
};
