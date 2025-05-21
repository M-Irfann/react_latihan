import React, { useEffect, useState } from 'react'

function CreateReadAjax() {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const url = 'https://jsonplaceholder.typicode.com/posts'

    const fetchNotes = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setNotes(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newNote = {
            title,
            body,
            userId : 1
        }

        const response = await fetch(url,{
            method : 'POST',
            headers : {'Content-type':'application/json'},
            body : JSON.stringify(newNote)
        })

        const data = await response.json()

        setNotes([data,...notes])

        setTitle('')
        setBody('')

    }

    useEffect(()=>{
        fetchNotes()
    },[])

  return (
    <div>
        <h2>Catatan</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder='judul'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                required
            /> <br />
            <textarea 
                placeholder='isi catatan'
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required            
            ></textarea> <br />
            <button type='submit'>Create</button>
        </form>

        <ul>
            {notes.map(item=>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default CreateReadAjax