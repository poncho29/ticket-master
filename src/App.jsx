
import { useState } from 'react';

import { Events } from './components/events'
import { Navbar } from './components/layout'

import './App.css'

function App() {
  const [searchEvent, setSearchEvent] = useState('');

  const handleSearchEvent = (word) => {
    setSearchEvent(word);
  }

  return (
    <>
      <Navbar onSearch={handleSearchEvent} />

      <Events searchEvent={searchEvent} />
    </>
  )
}

export default App
