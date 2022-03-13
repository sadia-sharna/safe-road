import React from 'react';

export function Form({ className, children, ...rest }: any) {
  return <form className={`${className} form`} {...rest}>
    {children}
  </form>
}
