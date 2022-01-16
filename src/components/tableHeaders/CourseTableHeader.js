import { Tooltip } from "@mui/material";

const headers = [
    { field: 'id', width: "20" },
    {
        field: 'name', headerName: "Course name", width: "300",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'room',
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'section',
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'username', width: "120",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'owner', width: "150",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'ownerEmail', headerName: "Email", width: "200",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'createdAt', headerName: "Created Date", width: "120",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'updatedAt', headerName: "Updated Date", width: "120",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
]

export default headers;