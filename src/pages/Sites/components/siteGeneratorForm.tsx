import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { v4 } from 'uuid';
import { Button, Form, TextInput } from '../../../components';
import { ISite } from '../../../core';


export function SiteGeneratorForm(props: any) {
    const { selectedSite, handleSubmit } = props;
    const [name, setName] = useState(selectedSite?.name || "");
    const [city, setCity] = useState(selectedSite?.city || "");
    const [description, setDescription] = useState(selectedSite?.description || "");
    const [latitude, setLatitude] = useState(selectedSite?.description || "");
    const [longitude, setLongitude] = useState(selectedSite?.longitude || "");


    const onSubmitSite = (e: any) => {
        e.preventDefault();

        const model: ISite = {
            id: selectedSite ? selectedSite?.id : v4(),
            name,
            city,
            description,
            latitude,
            longitude
        };
        handleSubmit(model);

    };

    return <Form className="col-12" onSubmit={onSubmitSite}>
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
