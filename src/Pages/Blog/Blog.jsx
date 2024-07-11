import { useEffect, useState } from "react";
import blogbanner from "../../assets/images/bg1.png";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className=" bg-white">
      {/*-------------Part-----------1--------*/}
      <div className="relative">
        <div className="w-full h-[300px] bg-white ">
          <img className="absolute mt-20" src={blogbanner} alt="" />
        </div>
        <hr className="bg-orange-600 h-1" />

        <div className="flex items-center justify-center">
          <h1 className="absolute -mt-72 text-slate-900 text-3xl  font-bold">
            <h1>Our Blogs: {blogs.length}</h1>
          </h1>
        </div>
      </div>
      <div className="container m-auto bg-white">
        {/*-------------Part-----------2--------*/}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 py-20">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
