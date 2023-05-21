'use client';

import { useEffect } from 'react';

function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className='text-center mt-10'>
      <div>Error!</div>
      <button className='hover:text-amber-600' onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}

export default Error;
