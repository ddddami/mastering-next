'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const { data, status } = useSession();
  return (
    <nav className="flex p-5">
      <Link className="mr-5" href="/">
        Next.js
      </Link>
      <Link className="mr-5" href="/users">
        Users
      </Link>
      {status === 'unauthenticated' && (
        <Link href="/api/auth/signin">Login</Link>
      )}
      {status === 'loading' && (
        <span className="loading loading-spinner loading-sm"></span>
      )}
      {status === 'authenticated' && <p>{data.user!.name}</p>}
    </nav>
  );
};

export default Navbar;
