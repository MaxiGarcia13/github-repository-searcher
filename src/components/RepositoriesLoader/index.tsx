import List from '../List';
import { getRepositories } from '../../services/github';
import useFetch from '../../hooks/useFetch';
import RepositoryItem from '../RepositoryItem';
import RepositoryItemSkeleton from '../RepositoryItemSkeleton';
import './repositoriesLoader.css';

interface RepositoriesLoaderProps {
  sinceQuery: number;
}

const RepositoriesLoader = (props: RepositoriesLoaderProps) => {
  const { loading, data, error } = useFetch(getRepositories, props.sinceQuery);

  return (
    <>
      {error && <span className='repositories-error'>{error.message}</span>}

      {loading === true ? (
        <List items={[1, 2, 3]} ItemComponent={RepositoryItemSkeleton} />
      ) : (
        <List items={data} ItemComponent={RepositoryItem} />
      )}
    </>
  );
};

export default RepositoriesLoader;
