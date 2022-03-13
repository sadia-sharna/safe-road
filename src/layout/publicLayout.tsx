import React from 'react';

type Props = {
  children: any;
}

export function PublicLayout(props: Props) {
  const { children } = props;
  return <>
    <div className='container'>
      {children}
    </div>

  </>
}
