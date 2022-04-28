import './searchBox.css';

const SearchBox = (): React.ReactElement => {
  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  };

  return (
    <form className='search-box' onSubmit={onSubmit}>
      <input type='search' placeholder='Search repositories' className='search-box__input' />
      <input type='submit' value='🔍' className='search-box__button' />
    </form>
  );
};

export default SearchBox;
