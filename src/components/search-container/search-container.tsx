import { useActions, useAppSelector } from '@app/rtk/hooks/hooks';
import { Search, type SearchFCProps } from '@components/ui/search/search';
import { filterStateSelector } from '@features/filters/selectors';
import { useGetProductsByFilterQuery } from '@features/products/productsApi';
import { ROUTES } from '@utils/constants/routes';
import { useEffect, useRef, useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = Omit<SearchFCProps, 'searchResultItems'>;

export const SearchContainer: FC<Props> = ({ value, setValue, ...attr }) => {
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const searchWrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { changeSearchValue } = useActions();
  const { searchValue } = useAppSelector(filterStateSelector);
  const { data: productsBySearch = [], isLoading, isFetching } =
    useGetProductsByFilterQuery(
      { title: searchValue },
      { skip: searchValue === '' }
    );

  useEffect(() => {
    if (!isResultsOpen) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(e.target as Node)
      ) {
        setIsResultsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isResultsOpen]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      changeSearchValue(value.trim());
      if (!value) return;
      setIsResultsOpen(true);
    }, 400);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  useEffect(() => {
    if (!searchValue) {
      setIsResultsOpen(false);
      return;
    }

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        navigate(ROUTES.CATALOG());
        setIsResultsOpen(false);
      }
    };
    document.addEventListener('keypress', handleKeyPress);
    return () => document.removeEventListener('keypress', handleKeyPress);
  }, [searchValue]);

  return (
    <Search
      ref={searchWrapperRef}
      value={value}
      setValue={setValue}
      searchResultItems={productsBySearch}
      isLoading={isLoading || isFetching}
      isResultsOpen={isResultsOpen}
      onFocus={() =>searchValue && setIsResultsOpen(true)}
      {...attr}
    />
  );
};
