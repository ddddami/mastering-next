'use client';
import React from 'react';
interface Props {
  error: Error;
}
const ErrorPage = ({ error }: Props) => {
  return <div>{error.message}</div>;
};

export default ErrorPage;
