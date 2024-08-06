import React from 'react';

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}
const page = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
  
  return (
    <React.Fragment>
      <h1>ProductsPage</h1>
      <div>{slug}</div>
      <p>{sortOrder}</p>
    </React.Fragment>
  );
};

export default page;
