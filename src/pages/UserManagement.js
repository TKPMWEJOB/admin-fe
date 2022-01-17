import { DataGrid } from "@mui/x-data-grid"
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import headers from '../components/tableHeaders/UserTableHeader';
import SearchBar from "../components/SearchBar";
import DateSortOrder from "../components/DateSortOrder";
import { UserContext } from '../contexts/UserContext'

export default function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({
    name: "",
    order: "ASC"
  })
  const [refetchData, setRefetchData] = useState(false);
  const { userInfo, updateUser } = useContext(UserContext);

  useEffect(async () => {
    if (!userInfo.isLogin)
      return;
    setLoading(true);
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/users`,
        {
          params: params
        });

      const data = res.data.rows;
      console.log(data);
      const users = data.map((row) => {
        let user = {
          id: row.id,
          email: row.email,
          username: row.username,
          firstName: row.firstName,
          lastName: row.lastName,
          phone: row.phone,
          address: row.address,
          studentID: row.studentID,
          birthday: row.birthday ? (new Date(row.birthday)).toLocaleDateString() : null,
          school: row.school,
          gender: row.gender,
          createdAt: (new Date(row.createdAt)).toLocaleString(),
          updatedAt: (new Date(row.updatedAt)).toLocaleString(),
          isLocked: row.isLocked,
          isMapping: row.isMapping,
        }
        return user;
      })
      setData(users);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response?.status === 401) {
        updateUser(false, null);
      }
    }
  }, [refetchData])


  return (
    <>
      { userInfo.isLogin ?
          <div style={{ padding: '40px' }}>
            <SearchBar params={params} setParams={setParams} refetchData={refetchData} setRefetchData={setRefetchData} />
            <DateSortOrder params={params} setParams={setParams} refetchData={refetchData} setRefetchData={setRefetchData} />
            <DataGrid
              autoHeight
              scrollbarSize={5}
              columns={headers}
              rows={data}
              loading={loading}
              />

          </div>
        :
        <h1>Please login to continue!</h1>
      }
    </>
  )
}