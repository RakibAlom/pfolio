import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <div class="grid h-screen px-4 place-content-center">
        <div class="text-center">
          <h1 class="font-black text-gray-200 text-9xl">404</h1>

          <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>

          <p class="mt-4 text-gray-500">We can't find that page.</p>

          <Link
            to="/"
            class="mt-4 text-center inline-block overflow-hidden border font-normal transition-all rounded border-[#64ffda] text-[#64ffda] px-4 py-2 hover:bg-[#64ffda1a] focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>

    </div>
  );
};

export default NotFound;