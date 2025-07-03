import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  const getUsers = async () => {
/*     const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data); */
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    setUsers(response.data);
  }

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  setPosts(data);
  console.log(data);
}



  useEffect(() => {
    getUsers();
    getPosts();
  }, [])

  const HTMLUsers = users.map((user) => {
    return (
      <div key={user.id}>
        <h3>{user.name}</h3>
      </div>
    )
  })

  const HTMLPosts = posts.map((post) => {
    return (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    )
  })

  return (
    <div>
      <h1>fetch() | Llamada a una API</h1>

      <section>{HTMLUsers}</section>
      <section>{HTMLPosts}</section>
    </div>
  );
}

export default App;