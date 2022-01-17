import { Tooltip } from "@mui/material";

const headers = [
    { field: 'id', width: "20" },
    {
        field: 'username', headerName: "username", width: "150",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'firstName', headerName: "first name", width: "200",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'lastName', headerName: "last name", width: "200",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'email', headerName: "Email", width: "300",
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