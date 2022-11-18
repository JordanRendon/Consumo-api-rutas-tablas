import React, { useState } from 'react'
import  axios from 'axios'

const Form = () => {
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [author, setAuthor] = useState('')
    const [date, setDate] = useState('')

    const sendNew = async (e) =>{
        e.preventDefault()

        const dataNew = {
            id: id,
            title: title,
            description: description,
            imageUrl: imageUrl,
            author: author,
            date: date
        }
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json" 
           }
           
           let bodyContent = JSON.stringify(dataNew);
           
           let reqOptions = {
             url: "http://localhost:8000/news",
             method: "POST",
             headers: headersList,
             data: bodyContent,
           }
           
           let response = await axios.request(reqOptions);
           console.log(response.data);
       
          setId('')
          setTitle('')
          setDescription('')
          setImageUrl('')
          setDate('')
          setAuthor('')
    

    }
    

  return (
    <form onSubmit={sendNew}>
        <input onChange={(e)=>setId(e.target.value)} type="text" placeholder='Ingrese el id'/>
        <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Ingrese el titulo'/>
        <textarea onChange={(e)=>setDescription(e.target.value)} type="text" placeholder='Ingrese la descripción'/>
        <input onChange={(e)=>setImageUrl(e.target.value)} type="text" placeholder='Ingrese una imagen'/>
        <input onChange={(e)=>setDate(e.target.value)} type="date" />
        <input onChange={(e)=>setAuthor(e.target.value)} type="text" placeholder='Ingrese el autor'/>
        <input type="submit" value='Enviar'/>
    </form>
  )
}

export default Form