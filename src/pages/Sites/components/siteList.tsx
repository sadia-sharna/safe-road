import * as Icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import DataTable from 'react-data-table-component';
import { Button } from '../../../components';
import { ISite } from '../../../core';
import { GetSiteList } from '../../../services';
import { customStyles } from '../../../styles/dataTableStyles';

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
                            <FontAwesomeIcon icon={Icons.faEdit} />
                        </Button>


                    </>
                );
            },
        },

    ];
    return (
        <div className='col-12  border-1'>
            <DataTable
                columns={columns}
                data={sites}
                highlightOnHover
                pointerOnHover
                pagination
                customStyles={customStyles}
            />
        </div>
    );
};