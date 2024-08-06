import React, { Suspense } from 'react';
import UsersTable from './UsersTable';

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleString()}</p>

      <Suspense
        fallback={<span className="loading loading-spinner loading-sm "></span>}
      >
        <UsersTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
