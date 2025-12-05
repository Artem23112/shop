import { useActions, useAppSelector } from '@app/rtk/hooks/hooks';
import { Search, type SearchFCProps } from '@components/ui/search/search';
import { filterStateSelector } from '@features/filters/selectors';
import { useGetProductsByFilterQuery } from '@features/products/productsApi';
import { useEffect, type FC } from 'react';

type Props = Omit<SearchFCProps, 'searchResultItems'>;

export const SearchContainer: FC<Props> = ({ value, setValue, ...attr }) => {
  const { changeSearchValue } = useActions();
  const { searchValue } = useAppSelector(filterStateSelector);
  const { data: productsBySearch } = useGetProductsByFilterQuery(
    { title: searchValue },
    { skip: searchValue.trim() === '' }
  );
  const searchResult = searchValue.trim() ? (productsBySearch ?? null) : null;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      changeSearchValue(value);
    }, 400);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <Search
      value={value}
      setValue={setValue}
      searchResultItems={searchResult}
      {...attr}
    />
  );
};
