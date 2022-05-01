import './repositoryItemSkeleton.css';

const RepositoryItemSkeleton = () => {
  return (
    <article className='skeleton-item'>
      <span className='skeleton skeleton-item__kind' />
      <span className='skeleton skeleton-item__header' />
      <span className='skeleton skeleton-item__name' />
    </article>
  );
};

export default RepositoryItemSkeleton;
