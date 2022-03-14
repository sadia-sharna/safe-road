import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../contexts';
import { UiRoutes } from '../constant';
export function TopNav({ children }: any) {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const onLogout = () => {
        navigate(UiRoutes.Login);
        logout();
    };


    return <div className="col px-0 bg-outlet">
        <div className='topNavBorder topNav p-2'>
            <div className="d-flex bd-highlight ">
                <h5 className="p-2 flex-grow-1 bd-highlight text-success">Safe Road</h5>

                <div className="p-2 bd-highlight">
                    <div className="account">
                        <span className="material-icons-outlined" title="Account">
                            account_circle
                        </span>
                        {currentUser?.name}
                        <span className="material-icons-outlined" title="Logout" onClick={onLogout}> logout </span>
                    </div>
                </div>

            </div>
        </div>


        <div className='row p-2' >
            {children}
        </div>

    </div>
}
