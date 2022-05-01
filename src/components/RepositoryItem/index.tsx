import './repositoryItem.css';
interface RepositoryItemProps {
  full_name: string;
  title: string;
  description: string;
  owner: {
    avatar_url: string;
  };
  url: string;
}

const RepositoryItem = ({ full_name, owner, title, description }: RepositoryItemProps): React.ReactElement => {
  return (
    <a href='https://github.com/mojombo/grit' target='_blank' className='result-item'>
      <article>
        <span className='result-item__kind'>{title}</span>
        <header className='result-item__header'>
          <img className='result-item__cover' alt={`${full_name} cover`} src={owner.avatar_url} />
        </header>
        <h3 className='result-item__name'>{full_name}</h3>
        <span className='result-item__artist-name'>{description}</span>
      </article>
    </a>
  );
};

export default RepositoryItem;
