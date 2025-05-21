import React, { useState } from 'react';

function CrudSederhana() {
  const [nama, setNama] = useState('');
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // null artinya tidak sedang edit

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nama.trim() === '') return;

    if (editIndex !== null) {
      // UPDATE
      const updatedList = [...list];
      updatedList[editIndex] = nama;
      setList(updatedList);
      setEditIndex(null);
    } else {
      // CREATE
      setList([...list, nama]);
    }

    setNama('');
  };

  const handleEdit = (index) => {
    setNama(list[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = list.filter((_, i) => i !== index);
    setList(filtered);
    if (editIndex === index) {
      setNama('');
      setEditIndex(null);
    }
  };

  return (
    <div>
      <h2>CRUD Sederhana di React</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Masukkan nama"
        />
        <button type="submit">{editIndex !== null ? 'Update' : 'Tambah'}</button>
      </form>

      <table border="1" cellPadding="8" style={{ marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {list.length === 0 ? (
            <tr>
              <td colSpan="3" align="center">Belum ada data</td>
            </tr>
          ) : (
            list.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>{' '}
                  <button onClick={() => handleDelete(index)}>Hapus</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CrudSederhana;
