import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

type BlogPost = {
  id: number;
  userId: number;
  body: string;
  title: string;
};

function App() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  //fetch blogPosts from https://jsonplaceholder.typicode.com/posts and console log it.

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("not ok!");
        }
        return res.json();
      })
      .then((data: BlogPost[]) => {
        setBlogPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(err.message);
      });
  }, []);

  if (isLoading) {
    return <h1>...Loading</h1>;
  }

  if (isError) {
    return <h1>{isError}</h1>;
  }

  return (
    <div>
      {blogPosts.map((post) => {
        return <BlogCard title={post.title} body={post.body} />;
      })}
    </div>
  );
}

export default App;
