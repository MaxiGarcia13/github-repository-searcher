import './list.css';

interface RepositoriesListProps<T> {
  items: T[];
  ItemComponent: React.FunctionComponent<T>;
}

const RepositoriesList = <T,>({ items, ItemComponent }: RepositoriesListProps<T>): React.ReactElement => {
  return (
    <ul className='list__grid'>
      {items.map((item: T, index) => {
        return (
          <li className='list__item' key={index}>
            <ItemComponent {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default RepositoriesList;
