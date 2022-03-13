import React from 'react';


export function TextInput({ icon, ...rest }: any) {
  console.log(icon)
  return <div className="input-group mb-3">
    <input {...rest} />
    {icon ? <span className="input-group-text material-icons-outlined" id="basic-addon2">{icon} </span>
      : ""}
  </div>;
}
