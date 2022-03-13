import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { SideNav, TopNav } from '../navigation/components';
import { privateRoutePathName } from '../navigation/constant';


export default function PrivateLayout() {

    const auth = useAuth();
    return (
        <>

            {/* <TopNav />
            <SideNav /> */}
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-info">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                {/* <li className="nav-item">
              <a href="#" className=" nav-link align-middle px-0">
                Home
              </a>
            </li> */}
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
                            {/* <hr> */}
                            {/* <div className="dropdown pb-4">
              <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle">
                  <span className="d-none d-sm-inline mx-1">loser</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li>
                  <hr className="dropdown-divider">
                </li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div> */}
                        </div>
                    </div>
                    <div className="col py-3">
                        {auth?.currentUser ? <Outlet /> : <Navigate replace to="/login" />}

                    </div>
                </div>
            </div>


        </>

    )

}
