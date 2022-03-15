import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { PublicLayout } from '../layout'
import PrivateLayout from '../layout/privateLayout'
import { Login } from '../pages/Login'
import { SignUp } from '../pages/Signup'
import Sites from '../pages/Sites/sites'
import { privateRoutePathName, UiRoutes } from './constant'
import Notfound from './notfound'


export default function RouterConfig() {
    return (

        <Routes>
            <Route path={UiRoutes.Root} element={<Navigate replace to={UiRoutes.Login} />} />
            <Route path={UiRoutes.Login} element={<PublicLayout> <Login /> </PublicLayout>} />
            <Route path={UiRoutes.SignUp} element={<PublicLayout> <SignUp /></PublicLayout>} />
            <Route path="/*" element={<PrivateLayout />}>
                <Route path={privateRoutePathName.Sites} element={<Sites />} />
                <Route path='*' element={<Notfound />} />

            </Route>

        </Routes>

    )
}
