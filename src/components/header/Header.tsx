import { useEffect, useRef, useState } from 'react';
import { useStore } from '../../app/store';
import './header.css';

function Header() {
  const body = document.body;
  const mode: string | any = localStorage.getItem('mode');

  useEffect(() => body.classList.add(mode), []);
  const [colorMode, setColorMode] = useState(mode);
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) {
      switch (colorMode) {
        case 'light':
          body.classList.replace('dark', 'light');
          localStorage.setItem('mode', 'light');
          break;

        case 'dark':
          body.classList.replace('light', 'dark');
          localStorage.setItem('mode', 'dark');

          break;
      }
    } else {
      mounted.current = true;
    }
  }, [colorMode]);

  return (
    <>
      <header>
        <h1>Where in the world?</h1>
        <p
          className="mode-switch"
          onClick={() => {
            setColorMode(colorMode == 'light' ? 'dark' : 'light');
          }}
        >
          <i className="fa-solid fa-circle-half-stroke"></i>{' '}
          {colorMode.toUpperCase()}
        </p>
      </header>
    </>
  );
}

export default Header;
