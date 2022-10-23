import { useEffect, useState } from 'react';
import './header.css';

function Header() {
  const [mode, setMode] = useState('dark');
  const body = document.body;

  useEffect(() => body.classList.add(mode), []);

  useEffect(() => {
    switch (mode) {
      case 'light':
        body.classList.replace('light', 'dark');
        break;

      case 'dark':
        body.classList.replace('dark', 'light');
        break;
    }
  }, [mode]);

  return (
    <>
      <header>
        <h1>Where in the world?</h1>
        <p
          className="mode-switch"
          onClick={() => setMode(mode == 'light' ? 'dark' : 'light')}
        >
          <i className="fa-solid fa-circle-half-stroke"></i>{' '}
          {mode.toUpperCase()} mode
        </p>
      </header>
    </>
  );
}

export default Header;
