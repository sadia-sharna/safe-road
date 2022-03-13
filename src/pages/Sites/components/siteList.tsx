import React from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { Button } from '../../../components';
import { ISite } from '../../../core';
import { UiRoutes } from '../../../navigation/constant';
import { SITES_STORAGE } from '../../../services';



export function SiteList(props: any) {
    let data = localStorage.getItem(SITES_STORAGE);
    let sites = data != null ? JSON.parse(data) : [];
    const onEditClick = (row: ISite) => {
        console.log(row);
        props.setSelectedSite(row);
        props.handleShow(true);
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
            name: 'Actions',
            selector: (row: ISite) => {
                return (
                    <>
                        <Button onClick={() => onEditClick(row)}>
                            Edit
                        </Button>
                        {/* <Link
                        to={UiRoutes.EditSite}
                        className="btn"
                    >
                        Edit
                    </Link> */}

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