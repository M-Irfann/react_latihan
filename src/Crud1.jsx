import React, { useState } from 'react'

function Crud1() {
    const [produk, setProduk] = useState([])

    const [nama,setNama] = useState('')
    const [harga,setHarga] = useState('')
    const [editId, setEditId] = useState(null)

    const handleClick = (e) => {
        e.preventDefault()

        if(nama == '' && harga == ''){
            alert('harap isi')
            return
        }

        if(editId!==null){
            const updateProduk = produk.map((item)=>{
                console.log(item)
                item.id === editId ? {...item, nama, harga : parseInt(harga)} : item
            }
            )

            setProduk(updateProduk)
            setEditId(null)
        }else{
            const newProduct = {
                id : Date.now(),
                nama : nama,
                harga : parseInt(harga)
            }
            setProduk([...produk,newProduct])
        }

        setNama('')
        setHarga('')
    }

    const handleEdit = (item)=>{
        setNama(item.nama)
        setHarga(item.harga)
        setEditId(item.id)    
    }

    const handleDelete = (id) => {
        const filtered = produk.filter((item)=>item.id !== id)
        setProduk(filtered)
    }   

  return (
    <div>
        <h3>{editId !== null ? 'edit produk' : 'create produk' }</h3>
        <form onSubmit={handleClick}>
            <input type="text" value={nama} onChange={(e)=> setNama(e.target.value)} placeholder='Your name product' />
            <input type="number" value={harga} onChange={(e)=> setHarga(e.target.value)} placeholder='Your price product' />
            <button type='submit'>{editId !== null ? 'edit' : 'Create'}</button>
        </form>
        <ul>
            {produk.map((item)=>(
                <li key={item.id}>nama : {item.nama} - harga : {item.harga} 
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Hapus</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Crud1