import * as Icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import DataTable from 'react-data-table-component';
import { Button } from '../../../components';
import { ISite } from '../../../core';
import { GetSiteList } from '../../../services';

type IProps = {
    setSelectedSite: any;
    handleShow: any;
};

export function SiteList(props: IProps) {
    const { setSelectedSite, handleShow } = props;

    const sites = GetSiteList();

    const onEditClick = (row: ISite) => {
        setSelectedSite(row);
        handleShow(true);
    };

    const columns: any[] = [
        {
            name: 'Name',
            selector: (row: ISite) => row.name,
        },
        {
            name: 'City',
            selector: (row: ISite) => row.city,
        },
        {
            name: 'Description',
            selector: (row: ISite) => row.description,
        },
        {
            name: 'Latitude',
            selector: (row: ISite) => row.latitude,
        },
        {
            name: 'Longitude',
            selector: (row: ISite) => row.longitude,
        },
        {
            name: 'Action',
            selector: (row: ISite) => {
                return (
                    <>
                        <Button className="btn btn-sm btn-light" onClick={() => onEditClick(row)} >
                            <FontAwesomeIcon icon={Icons.faEdit} className="blueColor" />
                        </Button>


                    </>
                );
            },
        },

    ];
    return (
        <div className='col-12 mt-5 border-1'>
            <DataTable
                columns={columns}
                data={sites}
                highlightOnHover
                pointerOnHover
                pagination
            />
        </div>
    );
};