import React from 'react';
import { Link } from 'react-router-dom';

export function Account() {
  return <div>
    <span className="material-icons-outlined" title="Account">
      account_circle
    </span>
    <Link to="/signup">SignUp</Link>
    <span className="material-icons-outlined" title="Logout"> logout </span>
  </div>;
}
