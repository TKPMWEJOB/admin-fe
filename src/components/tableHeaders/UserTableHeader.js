import { Tooltip } from "@mui/material";
import DataGridLockComponent from "../DataGridLockComponent";
import DataGridMappingComponent from "../DataGridMappingComponent";

const headers = [
    { field: 'id', width: "20" },
    {
        field: 'email', headerName: "Email", width: "200",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'username', headerName: "Username", width: "100",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'firstName', headerName: "First Name", width: "100",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'lastName', headerName: "Last Name", width: "100",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'isLocked', headerName: "Status", width: "130",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <DataGridLockComponent params={params} />
            </Tooltip>
        ),
    },
    {
        field: 'isMapping', headerName: "Map Student ID", width: "130",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <DataGridMappingComponent params={params} />
            </Tooltip>
        ),
    },
    {
        field: 'phone', headerName: "Phone", width: "110",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'studentID', headerName: "Student ID", width: "100",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'birthday', headerName: "Brithday", width: "80",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'school', headerName: "School", width: "100",
        renderCell: (params) => (
            <Tooltip title={params.value? params.value : ''} >
                <span className="table-cell-trucate">{params.value}</span>
            </Tooltip>
        ),
    },
    {
        field: 'address', headerName: "Address", width: "200",
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