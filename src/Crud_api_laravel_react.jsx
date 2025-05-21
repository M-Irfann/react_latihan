import { useEffect, useState } from "react";
import axios from "axios";

function Crud_api_laravel_react() {

    const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: "", body: "" });
  const [editId, setEditId] = useState(null);

  const API = "http://localhost:8000/api/posts";

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const res = await axios.get(API);
    setPosts(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`${API}/${editId}`, form);
    } else {
      await axios.post(API, form);
    }
    setForm({ title: "", body: "" });
    setEditId(null);
    getPosts();
  };

  const handleEdit = (post) => {
    setForm({ title: post.title, body: post.body });
    setEditId(post.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    getPosts();
  };

  return (
    <div>
      <h2>CRUD React & Laravel</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <textarea placeholder="Body" value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })}></textarea>
        <button type="submit">{editId ? "Update" : "Create"}</button>
      </form>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>: {post.body}
            <button onClick={() => handleEdit(post)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default Crud_api_laravel_react