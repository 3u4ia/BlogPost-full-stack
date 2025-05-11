import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BlogPost } from './components/BlogPost';


interface BlogPost {
  _id: string,
  title: string,
  body: string,
  author: string,
  date: Date,
}


function App() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  const getBlogPosts = async () => {
    const url = 'http://localhost:3000/blogpost'

    const result = await axios.get(url)

    setBlogPosts(result.data)
  }

  const deleteBlogPost = async (_id: string) => {
    const url = `http://localhost:3000/blogpost/${_id}`
    await axios.delete(url)
    await getBlogPosts()
  }


  useEffect(() => {
    getBlogPosts();
  }, [])


  return(
    

    <div>
      <div>
        {blogPosts.length === 0 ? 'No blogs found' : blogPosts.map(blog => {
          return <BlogPost key={blog._id} {...blog} handleDelete={async () => {
            await deleteBlogPost(blog._id)
          }} />
        })}
        
      </div>
    </div>
  )
}

export default App
