import React, { useState } from 'react';
import { ModalSiteGenerate } from '.';
import { Button } from '../../components';
import { useAuth } from '../../contexts';
import { ISite } from '../../core';
import { CreateSite, UpdateSite } from '../../services';
import { SiteList } from './components';

export default function Sites() {

    const [selectedSite, setSelectedSite] = useState<ISite>();
    const [showSiteGenerateModal, setShowSiteGenerateModal] = useState(false);
    const { currentUser } = useAuth();

    const onAddSiteBtnClick = (e: any) => {
        setSelectedSite(undefined);
        setShowSiteGenerateModal(true);

    };

    const handleSubmit = (model: ISite) => {
        if (!selectedSite) {
            CreateSite(model, currentUser);
        }
        else {
            UpdateSite(model, currentUser);
        }

    }


    return (
        <div>
            <h4 className='text-dark'>Sites </h4>
            <Button
                className="btn btn-primary mt-4 btn-sm"
                type="button"
                onClick={onAddSiteBtnClick}>
                <span className='text-white'>
                    Add Site
                </span>
            </Button>
            <div className='mt-4'>
                <SiteList
                    handleShow={setShowSiteGenerateModal}
                    setSelectedSite={setSelectedSite} />

            </div>
            <ModalSiteGenerate
                show={showSiteGenerateModal}
                handleShow={setShowSiteGenerateModal}
                selectedSite={selectedSite}
                handleSubmit={handleSubmit}
            />

        </div>
    )
}
