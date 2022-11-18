import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const colums = [
    {field:"id",headerName:"ID",width:70},
    {field:"title",headerName:"Title",width:130},
    {field:"description",headerName:"Description",width:430},
    {field:"author",headerName:"Author",width:230},
    {field:"imageUrl",headerName:"Img",width:230}

    
]

const Table = () => {
    const [newsInfo, setNewsInfo] = useState([])

    const fetchNews= async()=>{
        const response= await axios.get('http://localhost:8000/news')
        setNewsInfo(response.data)
    }

    useEffect(() => {
      fetchNews()
    }, [])
    
  return (
<div style={{height:500,width:'100%'}}>
        <DataGrid
        rows={newsInfo}
        columns={colums}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        />
    </div>
  )
}

export default Table