import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import DataTable from "../Components/DataTable";


const DataPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const userDataString = localStorage.getItem("user_data");
    if (!userDataString) {
        alert("Please Enter your Credentials to Access the Data")
        return navigate("/")
     }  
  },[])
  

  return (
      <div style={{display:'grid',gridTemplateColumns:'2fr 8fr'}}>
      <Sidebar />
      <DataTable />
      </div>
  );
};

export default DataPage
