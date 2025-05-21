import React, { useEffect } from 'react'

function Case2() {

    const produk = [
        { id: 1, nama: "Buku", harga: 12000, kategori: "Alat Tulis" },
        { id: 2, nama: "Pensil", harga: 4000, kategori: "Alat Tulis" },
        { id: 3, nama: "Kipas", harga: 30000, kategori: "Elektronik" },
        { id: 4, nama: "Mouse", harga: 25000, kategori: "Elektronik" },
        { id: 5, nama: "Pulpen", harga: 7000, kategori: "Alat Tulis" },
        { id: 6, nama: "Kalkulator", harga: 15000, kategori: "Elektronik" },
        { id: 7, nama: "Gacoan", harga: 15000, kategori: "Makanan" },
        { id: 8, nama: "Keju", harga: 15000, kategori: "Makanan" }
    ];

    const grouped = produk.reduce((acc,cur) => {
        // console.log(cur.kategori)
        if(!acc[cur.kategori]){
            acc[cur.kategori] = []
        }

        acc[cur.kategori].push(cur)
        return acc
    },{})
    
    useEffect(()=>{
        console.log(grouped)
    },[])


  return (
    <div>
        {Object.entries(grouped).map(([kategori,items]) => {
            
            return (
                <>
                    <div key={kategori}>
                    <h3>{kategori} ({items.length})</h3>
                    <ul>
                        {items.map((item)=>(
                            <li key={item.id}>{item.nama} - {item.harga}</li>
                        ))}
                    </ul>
                </div>
                </>
            )

        })}
    </div>
  )
}

export default Case2