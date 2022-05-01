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
    <form className='search-box' onSubmit={onSubmit}>
      <input type='search' placeholder='Search repositories' className='search-box__input' />
      <input type='submit' value='🔍' className='search-box__button' />
    </form>
  );
};

export default SearchBox;
