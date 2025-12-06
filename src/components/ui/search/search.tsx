import { ProductCardThumb } from '@components/items/product-card/product-card-thumb';
import { SpinnerLoader } from '@components/ui/loaders/spinner';
import type { Product } from '@features/products/types';
import { forwardRef } from 'react';
import s from './search.module.scss';

export type SearchFCProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  closeResult?: () => void;
  searchResultItems: Product[];
  isLoading?: boolean;
  isError?: boolean;
  isResultsOpen?: boolean;
  inputRef: React.Ref<HTMLInputElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Search = forwardRef<HTMLDivElement, SearchFCProps>(
  (
    {
      value,
      setValue,
      closeResult,
      searchResultItems,
      isLoading = false,
      isResultsOpen = false,
      inputRef,
      ...attr
    },
    ref
  ) => {
    const hasResults = searchResultItems.length > 0;
    const displayedResults = searchResultItems.slice(0, 5);

    return (
      <div className={s.searchWrapper} ref={ref}>
        <input
          className={s.search}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
          {...attr}
        />
        {isResultsOpen && (
          <div className={s.resultsPopup}>
            <ul className={s.searchList}>
              {isLoading ? (
                <SpinnerLoader />
              ) : hasResults ? (
                displayedResults.map((productInfo) => (
                  <li key={productInfo.id} onClick={closeResult}>
                    <ProductCardThumb productInfo={productInfo} />
                  </li>
                ))
              ) : (
                <li className={s.thumbNotFound}>
                  No results match your search.
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

Search.displayName = 'Search';
