import Brand from '../components/Brand';
import SearchBox from '../components/SearchBox';
import './app.css';

function App() {
  return (
    <div className='app'>
      <header className='app__header'>
        <Brand className='app__brand' />
        <SearchBox />
      </header>
      <main>Repositories List</main>
    </div>
  );
}

export default App;
