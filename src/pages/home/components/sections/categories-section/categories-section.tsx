import { CategoryCard } from '@components/items/category-card/category-card';
import { useGetAllCategoriesQuery } from '@features/categories/categoriesApi';
import { SectionWithTitle } from '@layout/section-with-title/section-with-title';
import { API } from '@utils/constants/api-endpoints';
import s from './categories-section.module.scss';

export const CategoriesSection = () => {
  const { data } = useGetAllCategoriesQuery();

  return (
    <SectionWithTitle
      title="Browse Categories"
      subtitle="Find the perfect match for your needs"
    >
      <ul className={s.wrapper}>
        {data?.slice(0, 5).map((c) => {
          return (
            <li key={c.id}>
              <CategoryCard
                to={API.allProductsByCategory(String(c.id))}
                name={c.name}
                imgUrl={c.image}
              />
            </li>
          );
        })}
      </ul>
    </SectionWithTitle>
  );
};
