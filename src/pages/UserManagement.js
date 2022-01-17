import { DataGrid } from "@mui/x-data-grid"
import axios from "axios";
import { useEffect, useState } from "react";
import headers from '../components/tableHeaders/UserTableHeader';
import SearchBar from "../components/SearchBar";
import DateSortOrder from "../components/DateSortOrder";

import { Tooltip, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import BanIcon from "@mui/icons-material/Block";

export default function Users({ setTitle }) {
  const [data, setData] = useState([]);
  const [params, setParams] = useState({
    name: "",
    order: "DESC"
  })
  const [isSaved, setIsSaved] = useState(true);

  const [refetchData, setRefetchData] = useState(false);
  useEffect(async () => {
    setTitle("Dashboard");
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/users`,
        {
          params: params
        });

      const data = res.data.rows;
      console.log(data);
      const courses = data.map((row) => {
        let course = {
          id: row.id,
          username: row.username,
          studentID: row.studentID,
          firstName: row.firstName,
          lastName: row.lastName,
          email: row.email,
          createdAt: new Date(row.createdAt).toString(),
          updatedAt: new Date(row.updatedAt).toString(),
        }
        return course;
      })
      setData(courses);
    } catch (error) {
      console.log(error);
    }
  }, [refetchData])

  const handleOpenDialogAction = () => {
    console.log("Ban");
  }

  const action = {
    field: 'actions',
    type: 'actions',
    width: 40,
    sortable: false,
    disableClickEventBubbling: true,
    renderCell: () => {
      return (
        <Tooltip title="Ban user" arrow>
          <IconButton variant="contained" color="default" size="small" onClick={handleOpenDialogAction}>
            <BanIcon />
          </IconButton>
        </Tooltip>
      );
    }
  }

  headers.push(action);
  const editableColumn = {
    field: 'studentID', headerName: "Student ID", width: "150", editable: true,
    renderCell: (params) => (
      <Tooltip title={params.value ? params.value : ''} >
        <span className="table-cell-trucate">{params.value}</span>
      </Tooltip>
    ),
  }
  headers.splice(1, 0, editableColumn)

  const onCellChange = async (p, event, detail) => {
    try {
      setIsSaved(false);
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/admin/users/update-student-id`,
        {
          id: p.id,
          studentID: p.value,
        });
      setIsSaved(true);
      if (res.status != 200) {
        setRefetchData(!refetchData);
      }
    } catch (error) {
      console.log(error);
      setRefetchData(!refetchData);
    }
  }

  return (

    <div style={{ padding: '40px' }}>
      <SearchBar params={params} setParams={setParams} refetchData={refetchData} setRefetchData={setRefetchData}></SearchBar>
      <DateSortOrder params={params} setParams={setParams} refetchData={refetchData} setRefetchData={setRefetchData} />
      <Typography style={{ color: 'gray' }}>{isSaved ? "Saved" : "Saving..."}</Typography>
      <DataGrid
        autoHeight
        scrollbarSize={5}
        columns={headers}
        rows={data}
        onCellEditCommit={onCellChange}
      />

    </div>
  )
}