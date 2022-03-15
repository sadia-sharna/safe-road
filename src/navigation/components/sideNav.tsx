import React from 'react';
import { Link } from 'react-router-dom';
import { privateRoutePathName } from '../constant';
export function SideNav() {
    return <div className="col-auto col-md-3 col-xl-2  px-0 sideNav">

        <div className="d-flex flex-column  text-white min-vh-100">

            <hr className='mt-5' />
            <ul className="nav flex-column">

                <li className="nav-item">
                    <Link to={privateRoutePathName.Sites} className="nav-link ">Sites</Link>

                </li>

            </ul>
        </div>

    </div>

}
