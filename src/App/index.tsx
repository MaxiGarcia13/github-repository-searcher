import { useState } from 'react';
import Brand from '../components/Brand';
import SearchBox from '../components/SearchBox';
import RepositoriesLoader from '../components/RepositoriesLoader';
import './app.css';

function App() {
  const [sinceQuery, setSinceQuery] = useState(0);

  const onSearch = (value: number) => {
    setSinceQuery(value);
  };

  return (
    <div className='app'>
      <header className='app__header'>
        <Brand className='app__brand' />
        <SearchBox onSearch={onSearch} />
      </header>
      <main className='app__main'>
        <RepositoriesLoader sinceQuery={sinceQuery} />
      </main>
    </div>
  );
}

export default App;
