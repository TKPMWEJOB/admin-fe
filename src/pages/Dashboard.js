import { DataGrid } from "@mui/x-data-grid"
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import headers from '../components/tableHeaders/CourseTableHeader';
import SearchBar from "../components/SearchBar";
import DateSortOrder from "../components/DateSortOrder";
import { UserContext } from '../contexts/UserContext'

export default function Courses() {
  const [data, setData] = useState([]);
  const [params, setParams] = useState({
    name: "",
    order: "ASC"
  })
  const [refetchData, setRefetchData] = useState(false);
  const { userInfo, updateUser } = useContext(UserContext);

  useEffect(async () => {
    if (!userInfo.isLogin)
      return;
      
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
      if (error.response?.status === 401) {
        updateUser(false, null);
      }
    }
  }, [refetchData, userInfo])


  return (
    <>
      { userInfo.isLogin ?
          <div style={{ padding: '40px' }}>
            <SearchBar params={params} setParams={setParams} refetchData={refetchData} setRefetchData={setRefetchData}></SearchBar>
            <DateSortOrder params={params} setParams={setParams} refetchData={refetchData} setRefetchData={setRefetchData} />
            <DataGrid
              autoHeight
              scrollbarSize={5}
              columns={headers}
              rows={data}
              />

          </div>
        :
        <h1>Please login to continue!</h1>
      }
    </>
  )
}