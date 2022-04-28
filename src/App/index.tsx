import Brand from '../components/Brand';
import SearchBox from '../components/SearchBox';
import RepositoriesList from '../components/RepositoriesList';

import './app.css';

function App() {
  const repositories = [];
  return (
    <div className='app'>
      <header className='app__header'>
        <Brand className='app__brand' />
        <SearchBox />
      </header>
      <main className='app__main'>{repositories.length > 0 && <RepositoriesList />}</main>
    </div>
  );
}

export default App;
