import React from 'react';
import { Modal } from 'react-bootstrap';
import { SiteGeneratorForm } from '..';
import { ISite } from '../../../core';
import SiteAuditLog from '../components/siteAuditLog';

type IProps = {
    selectedSite?: ISite;
    show: boolean;
    handleSubmit: any;
    handleShow: any;

};
export function ModalSiteGenerate(props: IProps) {
    const { selectedSite, show, handleSubmit, handleShow } = props;
    return (
        <Modal
            show={show}
            onHide={() => handleShow(false)}
            centered

        >
            <Modal.Body>
                <SiteGeneratorForm
                    selectedSite={selectedSite}
                    handleSubmit={handleSubmit}
                    handleShow={handleShow} />
                {
                    selectedSite ?
                        <SiteAuditLog selectedSite={selectedSite} />
                        : null
                }
            </Modal.Body>
        </Modal>
    )
}
