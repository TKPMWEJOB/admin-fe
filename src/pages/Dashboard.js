import { DataGrid } from "@mui/x-data-grid"
import axios from "axios";
import { useEffect, useState } from "react";
import headers from '../components/tableHeaders/CourseTableHeader';
import SearchBar from "../components/SearchBar";

export default function Courses() {
  const [data, setData] = useState([]);
  const [params, setParams] = useState({
    name: "",
    order: "DESC"
  })

  const [refetchData, setRefetchData] = useState(false);
  useEffect(async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/courses`,
        {
          params: params
        });

      const data = res.data.rows;
      console.log(data);
      const courses = data.map((row) => {
        const ownerName = `${row.owner.firstName ? row.owner.firstName : ''} ${row.owner.lastName ? row.owner.lastName : ''}`
        let course = {
          id: row.id,
          name: row.name,
          room: row.room,
          section: row.section,
          username: row.username,
          owner: ownerName,
          ownerId: row.ownerId,
          ownerEmail: row.owner.email,
          createdAt: new Date(row.createdAt).toString(),
          updatedAt: new Date(row.updatedAt).toString(),
        }
        return course;
      })
      setData(courses);
    } catch (error) {
    }
  }, [refetchData])

  const handleSearch = (e) => {
    console.log(e.target.value);
    let newParams = params;
    newParams["name"] = e.target.value;
    setParams(newParams);
    setRefetchData(!refetchData);
  }

  return (

    <div style={{ padding: '40px' }}>
      <SearchBar handleSearch={handleSearch}></SearchBar>
      <DataGrid
        autoHeight
        scrollbarSize={5}
        columns={headers}
        rows={data}
      />

    </div>
  )
}