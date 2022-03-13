import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { PublicLayout } from '../layout'
import PrivateLayout from '../layout/privateLayout'
import { Login } from '../pages/Login'
import { SignUp } from '../pages/Signup'
import { UiRoutes, privateRoutePathName } from './constant';
import Home from '../pages/Home/home';
import Sites from '../pages/Sites/sites'
import { SiteGenerator } from '../pages/Sites/components/siteGenerator';


export default function RouterConfig() {
    return (

        <Routes>
            <Route path={UiRoutes.Root} element={<Navigate replace to={UiRoutes.Login} />} />
            <Route path={UiRoutes.Login} element={<PublicLayout> <Login /> </PublicLayout>} />
            <Route path={UiRoutes.SignUp} element={<PublicLayout> <SignUp /></PublicLayout>} />
            <Route path="/*" element={<PrivateLayout />}>
                <Route path={privateRoutePathName.Home} element={<Home />} />
                <Route path={privateRoutePathName.Sites} element={<Sites />} />
                <Route path={privateRoutePathName.CreateSite} element={<SiteGenerator />} />
                <Route path={privateRoutePathName.EditSite} element={<SiteGenerator />} />

            </Route>
        </Routes>

    )
}
