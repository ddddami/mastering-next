import React from 'react';
import Link from 'next/link';
import { sort } from 'fast-sort';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UsersTable = async ({ sortOrder }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/x', {
    cache: 'no-store',
  });
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === 'name' ? (u) => u.name : (u) => u.email
  );
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>
              <Link href={'/users/' + user.id}>{user.id}</Link>
            </td>
            <td> {user.name}</td>
            <td> {user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
