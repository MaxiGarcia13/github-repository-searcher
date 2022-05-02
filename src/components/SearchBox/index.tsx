import './searchBox.css';

interface SearchBoxProps {
  onSearch: (value: number) => void;
}

const SearchBox = (props: SearchBoxProps): React.ReactElement => {
  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const { 0: input } = ev.target as HTMLFormElement;
    const { value } = input as HTMLInputElement;

    props.onSearch(+value);
  };

  return (
    <div className='search-box'>
      <form className='search-box___form' onSubmit={onSubmit}>
        <input type='search' placeholder='Search by repository ID.' className='search-box__input' />
        <input type='submit' value='🔍' className='search-box__button' />
      </form>
      <span className='search-box__hint'>(Only return repositories with an ID greater than this ID.)</span>
    </div>
  );
};

export default SearchBox;
