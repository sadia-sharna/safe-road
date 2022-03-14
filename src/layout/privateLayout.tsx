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

                        </div>
                    </div>
                    <div className="col px-0 bg-outlet">
                        <div className='topNavBorder topNav p-2'>
                            <div className="d-flex bd-highlight ">
                                <div className="p-2 flex-grow-1 bd-highlight">Safe Road</div>

                                <div className="p-2 bd-highlight">
                                    <div className="account">
                                        <span className="material-icons-outlined" title="Account">
                                            account_circle
                                        </span>
                                        <a href="signup.html">Signup</a>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='row p-2 ' >
                            {auth?.currentUser ? <Outlet /> : <Navigate replace to="/login" />}
                        </div>

                    </div>
                </div>
            </div>


        </>

    )

}
