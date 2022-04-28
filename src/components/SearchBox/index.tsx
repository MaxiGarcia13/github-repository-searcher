import './searchBox.css';

const SearchBox = (): React.ReactElement => {
  return (
    <form action='' className='search-box'>
      <input type='search' placeholder='Search repositories' className='search-box__input' />
      <input type='submit' value='🔍' className='search-box__button' />
    </form>
  );
};

export default SearchBox;
