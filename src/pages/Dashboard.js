import { RemoveFromQueue } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid"
import axios from "axios";
import { useEffect, useState } from "react";
import headers from '../components/tableHeaders/CourseTableHeader'

export default function Courses() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/courses`);
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
  }, [])



  return (
    <div style={{ padding: '20px' }}>
      <DataGrid
        style={{ height: '800px' }}
        hideFooterPagination
        scrollbarSize={5}
        columns={headers}
        rows={data}
      />

    </div>
  )
}