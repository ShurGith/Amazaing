import { createContext, useState } from "react";

const BlogContext = createContext();

function BlogProvider(props) {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);

  const getPosts = async () => {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    setPosts(data)
    setError(false)
    console.log(data);
    }catch(e){
      setError(true)
    }
  }


 return (
   <BlogContext.Provider value={{
    posts, setPosts, getPosts, error, setError
   }}>
     {props.children}
   </BlogContext.Provider>
 );
}


export { BlogContext, BlogProvider };