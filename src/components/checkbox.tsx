import React from 'react';

type Props = {
    className:any;
    text:any;
};
export  function Checkbox(props:Props) {
    const {className, text} = props;
    return <label className={className}>
        <input type="checkbox" />
        <span> {text}</span>
    </label>;
}
