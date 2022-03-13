import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Icons from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Form, TextInput } from '../../../components';
import { useAuth } from '../../../contexts';
import { ISite } from '../../../core';
import { SITES_STORAGE } from '../../../services';
import { SITES_AUDIT_LOG_STORAGE } from '../../../services/sitesService';
import { authStatusEnum, ISiteAuditLog } from '../../../core/models/siteAuditLogModel';
import { v4 } from 'uuid';

export function SiteGeneratorForm(props: any) {
    const { selectedSite } = props;
    console.log(selectedSite)
    const [name, setName] = useState(selectedSite?.name || "");
    const [city, setCity] = useState(selectedSite?.city || "");
    const [description, setDescription] = useState(selectedSite?.description || "");
    const [latitude, setLatitude] = useState(selectedSite?.description || "");
    const [longitude, setLongitude] = useState(selectedSite?.longitude || "");

    const handleSubmit = () => { };

    const handleCreate = (e: any) => {
        e.preventDefault();

        const siteId = v4();
        const siteLogId = v4();
        try {
            let model: ISite = {
                id: siteId,
                name,
                city,
                description,
                latitude,
                longitude
            };

            let siteAuditLogModel: ISiteAuditLog = {
                id: siteLogId,
                siteId,
                createdBy: "sharna",
                createdAt: "3.14.2022",
                updatedBy: "",
                updatedAt: "",
                authStatus: authStatusEnum.Create
            };
            let data = localStorage.getItem(SITES_STORAGE);
            let sites = data != null ? JSON.parse(data) : [];
            let logData = localStorage.getItem(SITES_AUDIT_LOG_STORAGE);
            let logs = logData != null ? JSON.parse(logData) : [];


            localStorage.setItem(SITES_STORAGE, JSON.stringify([...sites, model]));
            localStorage.setItem(SITES_AUDIT_LOG_STORAGE, JSON.stringify([...logs, siteAuditLogModel]));


        }
        catch (err) {
            console.log(err);

        }

    };

    return <Form className="col-12" onSubmit={handleCreate}>
        <div className='d-flex justify-content-start mt-1'>
            <Button className="btn btn-sm btn-outline-primary" type="submit" >
                <FontAwesomeIcon icon={Icons.faSave} className="blueColor" /> Save
            </Button>
            <Button className="btn btn-sm btn-outline-secondary ms-2" type="submit" >
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
            </Button>
        </div>
        <hr />
        <div className='ms-1 mb-4'>
            <label>Site id: 1</label>
        </div>
        <TextInput
            type="text"
            placeholder="Name"
            className="form-control"
            value={name}
            onChange={(e: any) => setName(e.target.value)} />

        <TextInput
            type="text"
            placeholder="Jurisdiction/City/Region"
            className="form-control"
            value={city}
            onChange={(e: any) => setCity(e.target.value)} />

        <TextInput
            type="text"
            placeholder="Site Description"
            className="form-control"
            value={description}
            onChange={(e: any) => setDescription(e.target.value)} />
        <div className='row'>
            <div className='col-6'>
                <TextInput
                    type="text"
                    placeholder="Latitude"
                    className="form-control"
                    value={latitude}
                    onChange={(e: any) => setLatitude(e.target.value)} />
            </div>
            <div className='col-6'>
                <TextInput
                    type="text"
                    placeholder="Longitude"
                    className="form-control"
                    value={longitude}
                    onChange={(e: any) => setLongitude(e.target.value)} />
            </div>
        </div>

    </Form>
}
