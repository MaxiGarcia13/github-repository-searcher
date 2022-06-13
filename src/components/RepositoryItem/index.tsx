import { RepositoryItemProps } from '../../domain/repositories';
import './repositoryItem.css';

const RepositoryItem = ({ full_name, owner, title, description, url }: RepositoryItemProps): React.ReactElement => {
  return (
    <a href={url} target='_blank' className='result-item'>
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
