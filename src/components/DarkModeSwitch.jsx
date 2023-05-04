'use client';

import { MdLightMode } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <>
      {currentTheme === 'dark' ? (
        <MdLightMode
          className='text-xl cursor-pointer hover:text-amber-500'
          onClick={() => setTheme('light')}
        />
      ) : (
        <BsFillMoonFill
          className='text-xl cursor-pointer hover:text-amber-500'
          onClick={() => setTheme('dark')}
        />
      )}
    </>
  );
}

export default DarkModeSwitch;
