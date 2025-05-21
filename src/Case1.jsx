import React, { useEffect } from 'react'

function Case1() {
    
  const produk = [
    { id: 1, nama: "Buku", harga: 12000, kategori: "Alat Tulis" },
    { id: 2, nama: "Pensil", harga: 4000, kategori: "Alat Tulis" },
    { id: 3, nama: "Kipas", harga: 30000, kategori: "Elektronik" },
    { id: 4, nama: "Mouse", harga: 25000, kategori: "Elektronik" },
    { id: 5, nama: "Pulpen", harga: 7000, kategori: "Alat Tulis" }
  ];

  const price = produk.filter((data) => data.harga < 71000)

  const grouped = price.reduce((acc, cur)=>{
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
        {Object.entries(grouped).map(([kategori, items]) => (
            <div key={kategori}>
                <h3>{kategori}</h3>
                <ul>

                  {items.map(item => (
                      <li key={item.id}>{item.nama} - Rp{item.harga}</li>
                  ))}

                </ul>
            </div>
        ))}
    </div>
  )
}

export default Case1