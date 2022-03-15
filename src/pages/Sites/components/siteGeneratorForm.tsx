import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { v4 } from 'uuid';
import { Button, Form, TextInput } from '../../../components';
import { ISite } from '../../../core';

type IProps = {
    selectedSite?: ISite;
    handleSubmit: any;
    handleShow: any;
};

export function SiteGeneratorForm(props: IProps) {
    const { selectedSite, handleSubmit, handleShow } = props;
    const [name, setName] = useState(selectedSite?.name || "");
    const [city, setCity] = useState(selectedSite?.city || "");
    const [description, setDescription] = useState(selectedSite?.description || "");
    const [latitude, setLatitude] = useState(selectedSite?.latitude || "");
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


        handleShow(false);
        handleSubmit(model);

    };
    const onCancel = () => {
        handleShow(false);
    };

    return <Form className="col-12" onSubmit={onSubmitSite}>
        <div className='d-flex justify-content-start mt-1'>
            <Button className="btn btn-sm btn-outline-primary" type="submit" >
                <FontAwesomeIcon icon={Icons.faSave} /> Save
            </Button>
            <Button className="btn btn-sm btn-outline-secondary ms-2" type="btn" onClick={onCancel}>
                <FontAwesomeIcon icon={Icons.faClose} /> Cancel
            </Button>
        </div>
        <hr />
        {selectedSite
            ? <div className='ms-1 mb-4'>
                <label>Site id: {(selectedSite.id)?.split('-')[0]}</label>
            </div>
            : null}
        <div className="form-group">
            <label>Name</label>
            <TextInput
                type="text"
                className="form-control"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                required />
        </div>

        <div className="form-group mt-4">
            <label>Jurisdiction/City/Region</label>
            <TextInput
                type="text"
                className="form-control"
                value={city}
                onChange={(e: any) => setCity(e.target.value)}
                required />

        </div>

        <div className="form-group mt-4">
            <label>Site Description</label>
            <textarea
                className="form-control"
                value={description}
                onChange={(e: any) => setDescription(e.target.value)} />
        </div>

        <div className='row mt-4'>
            <div className='col-6'>
                <div className="form-group">
                    <label>Latitude</label>
                    <TextInput
                        type="number"
                        className="form-control"
                        value={latitude}
                        onChange={(e: any) => setLatitude(e.target.value)}
                        required />
                </div>
            </div>
            <div className='col-6'>
                <div className="form-group">
                    <label>Longitude</label>
                    <TextInput
                        type="number"
                        className="form-control"
                        value={longitude}
                        onChange={(e: any) => setLongitude(e.target.value)}
                        required />
                </div>

            </div>
        </div>

    </Form>
}
