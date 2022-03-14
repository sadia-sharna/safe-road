import React from 'react';
import { Link } from 'react-router-dom';
import { privateRoutePathName } from '../constant';
export function SideNav() {
    return <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-info">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

                <li className="nav-item">
                    <Link to={privateRoutePathName.Home} className=" nav-link align-middle px-0">Home</Link>
                    {/* <a href="#" className=" nav-link align-middle px-0">
                    Home
                </a> */}
                </li>
                <li className="nav-item">
                    <Link to={privateRoutePathName.Sites} className=" nav-link align-middle px-0">Sites</Link>

                </li>

            </ul>

        </div>
    </div>
}
