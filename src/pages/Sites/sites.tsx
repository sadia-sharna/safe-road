import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { ModalSiteGenerate } from '.';
import { Button } from '../../components'
import { UiRoutes } from '../../navigation/constant';
import { SiteList } from './components';

export default function Sites() {

    const [selectedSite, setSelectedSite] = useState("");
    const navigate = useNavigate();
    const [showSiteGenerateModal, setShowSiteGenerateModal] = useState(false);
    const onAddSiteBtnClick = (e: any) => {

        try {
            setSelectedSite("");
            setShowSiteGenerateModal(true);
            // let model: ILogin = {
            //     email: email,
            //     password: password
            // };
            // login(model) ? navigate(UiRoutes.Home) : console.log(model);

            // navigate(UiRoutes.CreateSite);

        }
        catch (err) {
            console.log(err);

        }

    };
    return (
        <div>
            <h1>Sites Page</h1>
            <Button className="btn btn-primary" type="button" onClick={onAddSiteBtnClick}>
                <span className='text-white'> Create Site</span>
            </Button>
            <SiteList handleShow={setShowSiteGenerateModal} setSelectedSite={setSelectedSite} />
            <ModalSiteGenerate
                show={showSiteGenerateModal}
                handleShow={setShowSiteGenerateModal}
                selectedSite={selectedSite}
            />

        </div>
    )
}
