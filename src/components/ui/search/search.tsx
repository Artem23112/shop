import { ProductCardThumb } from '@components/items/product-card/product-card-thumb';
import type { Product } from '@features/products/types';
import s from './search.module.scss';

export type SearchFCProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  searchResultItems: Product[] | null;
  isError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Search: React.FC<SearchFCProps> = ({
  value,
  setValue,
  searchResultItems,
  isError = false,
  ...attr
}) => {
  return (
    <div>
      <input
        className={s.search}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...attr}
      />
      {searchResultItems && !isError && (
        <ul className={s.searchResults}>
          {searchResultItems
            .slice(0, Math.min(searchResultItems.length, 5))
            .map((productInfo) => (
              <li>
                <ProductCardThumb productInfo={productInfo} />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
