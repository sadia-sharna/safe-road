import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { SiteGeneratorForm } from '..';
import { Button, Form, TextInput } from '../../../components';
import SiteAuditLog from '../components/siteAuditLog';

export function ModalSiteGenerate(props: any) {
    console.log(props.selectedSite)
    return (
        <Modal
            show={props.show}
            onHide={() => props.handleShow(false)}
            centered

        >
            {/* <Modal.Header closeButton>
                <Modal.Title>Add User</Modal.Title>
            </Modal.Header> */}


            <Modal.Body>
                <SiteGeneratorForm selectedSite={props.selectedSite} />
                {props.selectedSite ? <SiteAuditLog selectedSite={props.selectedSite} /> : null}
            </Modal.Body>
        </Modal>
    )
}
