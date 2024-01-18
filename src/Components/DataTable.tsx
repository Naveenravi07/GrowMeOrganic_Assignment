import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from "@mui/x-data-grid";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", width: 600 },
];

export default function DataTable() {

  const [data, setData] = useState<Post[]>([]);
  const fetch_all_products = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData : Post[]  = await response.json();
      setData(jsonData);
    } catch (error) {
        alert("An error occured while fetching data")
      console.error("Error occurred:", error);
    }
  };

  useEffect(() => {
    fetch_all_products();
  }, []);

    return(
        <Box sx={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    )
}

