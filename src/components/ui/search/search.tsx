import s from './search.module.scss';

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Search: React.FC<Props> = ({ value, setValue, ...attr }) => {
  return (
    <input
      className={s.search}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...attr}
    />
  );
};
