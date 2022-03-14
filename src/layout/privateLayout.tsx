import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { SideNav, TopNav } from '../navigation/components';
import { UiRoutes } from '../navigation/constant';


export default function PrivateLayout() {

    const auth = useAuth();
    return (
        <>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <SideNav />
                    <TopNav>
                        {auth?.currentUser ? <Outlet /> : <Navigate replace to={UiRoutes.Login} />}
                    </TopNav>

                </div>
            </div>


        </>

    )

}
