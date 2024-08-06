'use client';
import React from 'react';

interface Props {
  error: Error;
  reset: () => void;
}
const Error = ({ error, reset }: Props) => {
  return (
    <div>
      An unexpected error occured. <p>{error.message}</p>
      <button className="btn btn-primary btn-sm mt-3" onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
};

export default Error;
