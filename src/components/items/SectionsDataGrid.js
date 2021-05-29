import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';

import { sectionSetActive, sectionsStartLoading } from '../../actions/sections';
import { uiOpenForm } from '../../actions/ui';


const columns = [
    { field: 'name', headerName: 'Nombre', width: 150 },
    { field: 'description', headerName: 'Descripción', width: 300 },
];

export const SectionsDataGrid = () => {

    const dispatch = useDispatch();

    const { sections } = useSelector(state => state.section);

    useEffect(() => {
        dispatch(sectionsStartLoading());
    }, [dispatch])

    const handleRowClick = ({ row }) => {
        dispatch(sectionSetActive(row));
        dispatch(uiOpenForm());
    };

    return (
        <div style={{ height: 400, width: '50%' }}>
            <DataGrid rows={sections} columns={columns} getRowId={(row) => row._id} pageSize={5} onRowClick={handleRowClick} />
        </div>
    );
}
