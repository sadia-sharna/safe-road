import React from 'react';

export function Button({ className, children, ...rest }: any) {
    return <button className={`${className}`} {...rest}>
        {children}
    </button>
}
