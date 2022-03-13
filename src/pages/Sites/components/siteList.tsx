import React from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { UiRoutes } from '../../../navigation/constant';

const columns = [
    {
        name: 'Name',
        selector: (row: any) => row.name,
    },
    {
        name: 'City',
        selector: (row: any) => row.city,
    },
    {
        name: 'Latitude',
        selector: (row: any) => row.lat,
    },
    {
        name: 'Longitude',
        selector: (row: any) => row.long,
    },
    {
        name: 'Longitude',
        selector: (row: any) => row.long,
    },
    {
        name: 'Actions',
        selector: (row: any) => {
            return (
                <>
                    <Link
                        to={UiRoutes.EditSite}
                        className="btn"
                    >
                        Edit
                    </Link>

                </>
            );
        },
    },

];

const data = [
    {
        id: '1',
        name: 1,
        city: 'Beetlejuice',
        description: '1988',
        lat: 'q',
        long: 'e'
    },
    {
        id: '1',
        name: 1,
        city: 'Beetlejuice',
        description: '1988',
        lat: 'q',
        long: 'e'
    },
]

export function SiteList() {
    return (
        <div className='col-12 mt-5 border-1'>
            <DataTable
                columns={columns}
                data={data}
                highlightOnHover
                pointerOnHover
                pagination
            />
        </div>
    );
};