import axios from 'axios'
import React, { useEffect, useState } from 'react'

const News = () => {
  const [newsInfo, setNewsInfo] = useState([])

  const fetchNews = async ()=>{
    const response = await axios.get('http://localhost:8000/news')
    console.log(response.data)
    setNewsInfo(response.data)
  }

  useEffect(() => {
    fetchNews()
  }, [])
  
  return (
    <div>
      <h1>News</h1>
      {
        newsInfo.map(newInfor=>(
          <div key={newInfor.id}>
            <h1>{newInfor.title}</h1>
            <img src={newInfor.imageUrl} alt="" />
            <p>{newInfor.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default News