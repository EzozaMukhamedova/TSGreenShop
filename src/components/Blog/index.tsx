// import axios from "axios";
// import React, { useState, useEffect } from "react";

// const api = import.meta.env.VITE_API;

// const token = "67e1514e2ac3b760a778e38a";

// const fetchUsers = async () => {
//   const { data } = await axios.get(
//     `${api}/flower/category?access_token=64bebc1e2c6d3f056a8c85b7`
//   );
//   return data;
// };

// const Blog = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = axios.get(
//         `${api}/user/blogs?access_token=64bebc1e2c6d3f056a8c85b7`
//       );
//       const data = await response.json();
//       console.log(data); // Ma'lumotlarni konsolda ko'rish uchun
//       if (data && data.posts) {
//         setPosts(data.posts);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div className="mt-[50px] mx-auto w-full max-w-6xl p-5">
//       <h2 className="text-3xl font-bold mb-4">Blog</h2>
//       <div className="grid grid-cols-3 gap-4">
//         {posts.map((post) => (
//           <div key={post._id} className="border rounded-lg p-4">
//             <h3 className="font-semibold text-xl mb-2">{post.title}</h3>
//             <p className="text-gray-600">{post.content}</p>
//             <div className="flex justify-between items-center mt-4">
//               <span>Views: {post.views}</span>
//               <div>
//                 <span>Likes: {post.likes}</span>
//                 <span>Comments: {post.comments}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Tooltip } from "antd";
import axios from "axios";

import { CirclePlus, Search, Eye, MessageCircle, Heart } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getter } from "../../hooks/useLocalStorage";
import { useNavigate, useSearchParams } from "react-router-dom";

const api = import.meta.env.VITE_API;

const GetBlogs = async (search: string) => {
  const access_token =
    getter({ key: "user" })?.user?._id || "64bebc1e2c6d3f056a8c85b7";
  const res = await axios.get(
    `${api}/user/blog?access_token=${access_token}&search=${search}`
  );
  return res.data;
};

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const [searchValue, setSearchValue] = useState(search);
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery({
    queryKey: ["getBlogs", search],
    queryFn: () => GetBlogs(search),
  });

  const handleSearch = () => {
    setSearchParams({ search: searchValue.trim() });
  };

  return (
    <>
      <ToastContainer />
      <h2 className="text-4xl font-bold text-center my-10 mt-[100px]">
        My Feed
      </h2>

      <div className="max-w-[700px] w-full flex m-auto items-center border rounded overflow-hidden">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full outline-none py-2 px-4"
          placeholder="Search blogs..."
        />
        <button
          className="px-4 py-2 border-l text-gray-400"
          onClick={handleSearch}
        >
          <Search />
        </button>
      </div>

      <Tooltip title="Add New Article" placement="top">
        <button
          className="text-black-400 outline-none group mt-5 ml-[-1160px]"
          onClick={() => toast.info("You are not an admin")}
        >
          <CirclePlus
            size={35}
            className="group-hover:rotate-180 rotate-0 transition-all duration-500"
          />
        </button>
      </Tooltip>

      <div className="mt-10 max-w-[1200px] mx-auto">
        {isLoading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">
            Error loading blogs. Please try again.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data?.data?.length > 0 ? (
              data.data.map((blog: any) => (
                <div
                  key={blog._id}
                  className="border rounded-lg pt-5 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="px-5">
                    <h3
                      className="text-xl font-semibold mb-2 hover:underline hover:text-[#46A358] cursor-pointer transition-colors duration-200"
                      onClick={() => navigate(`/blog/${blog._id}`)}
                    >
                      {blog.title || "No Title"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {blog.short_description?.slice(0, 200) || "No content"}...
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4 text-gray-400 text-sm px-5 border-t">
                    <div
                      className="flex items-center gap-1 border-r pl-5 py-3 pr-10 hover:text-blue-500 transition-colors duration-200"
                      onClick={() => toast.info("You viewed this blog")}
                    >
                      <Eye size={16} /> {blog.views || 0}
                    </div>
                    <div
                      className="flex items-center gap-1 hover:text-yellow-500 transition-colors duration-200"
                      onClick={() =>
                        toast.info("You opened the comment section")
                      }
                    >
                      <MessageCircle size={16} /> {blog.commentCount || 0}
                    </div>
                    <div
                      className="flex items-center gap-1 border-l pr-5 pl-10 py-3 cursor-pointer hover:text-pink-500 transition-colors duration-200"
                      onClick={() => toast.info("You liked this blog")}
                    >
                      <Heart size={16} /> {blog.likesCount || 0}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-3">No blogs found</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
