import React from 'react';


export function TextInput({ icon, ...rest }: any) {
  return <div className="input-group mb-3">
    <input {...rest} />
    <span className="input-group-text material-icons-outlined" id="basic-addon2">{icon} </span>
  </div>;
}
