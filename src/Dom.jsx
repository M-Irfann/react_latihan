import React, { use, useState } from 'react'

function Dom() {
  const [warna, setWarna] = useState('')
  const [text, setText] = useState('irfan')

  const colors = () => {
    setWarna('blue')
    setText('muhammad irfan nugroho')
  }


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <p style={{color : warna}}>{text}</p>
      <button onClick={colors}>Klik ubah</button>
    </div>
  );
}

export default Dom