import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getter } from "../../../hooks/useLocalStorage";
import { useQuery } from "@tanstack/react-query";
import { Button, Spin, Tooltip, Modal } from "antd";
import { toast } from "sonner";
import { Eye, Heart, Share2 } from "lucide-react";
import { CommentOutlined } from "@ant-design/icons";

const api = import.meta.env.VITE_API;

type UserType = {
  _id: string;
  name: string;
  surname?: string;
  profile_photo?: string;
  followers?: string[];
};

export default function AboutBlog() {
  const userId = getter({ key: "user" })?.user?._id;
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState<any>();
  const [isBlogLoading, setIsBlogLoading] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  const [followCount, setFollowCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [access_token, setAccessToken] = useState<string | undefined>();

  const GetBlog = async () => {
    setIsBlogLoading(true);
    const token =
      getter({ key: "user" })?.user?._id || "64bebc1e2c6d3f056a8c85b7";
    await axios.put(`${api}/user/blog/view?access_token=${token}`, {
      _id: id,
    });
    const res = await axios.get(`${api}/user/blog/${id}?access_token=${token}`);
    setBlog(res?.data);
    setIsBlogLoading(false);
  };

  const { data: userImg, isLoading: userIsLoading } = useQuery<UserType>({
    queryKey: ["user", blog?.data?.created_by],
    queryFn: async () => {
      // const res = await axios.get(`${api}/user/${blog?.data?.created_by}`);
      const access_token = getter({ key: "user" })?.user?._id;
      const res = await axios.get(
        `${api}/user/${blog?.data?.created_by}?access_token=${access_token}`
      );

      return res.data;
    },
    enabled: !!blog?.data?.created_by,
  });

  useEffect(() => {
    GetBlog();
  }, []);

  useEffect(() => {
    if (userImg?.followers && userId) {
      setIsFollowed(userImg.followers.includes(userId));
    }
    setAccessToken(getter({ key: "user" })?.user?._id);
    setFollowCount(userImg?.followers?.length || 0);
  }, [userImg, userId]);

  const handleFollowFc = async () => {
    if (!access_token) {
      toast.error("Please login or register first");
      return;
    }

    if (blog?.data?.created_by === access_token) {
      navigate("/profile/account");
    } else {
      const res = await axios.post(
        `${api}/user/${isFollowed ? "unfollow" : "follow"}?access_token=${
          userImg?._id
        }`,
        { _id: access_token }
      );

      if (res?.data) {
        setIsFollowed(!isFollowed);
        setFollowCount((prev) => prev + (isFollowed ? -1 : 1));
        toast.info(
          isFollowed
            ? `You unfollowed ${userImg?.name || "user"} `
            : `You followed ${userImg?.name || "user"} `
        );
      } else {
        toast.error("Failed to follow/unfollow this user");
      }
    }
  };

  const handleDeleteBlog = async () => {
    setIsDeleting(true);
    await axios.delete(`${api}/user/blog/?access_token=${access_token}`, {
      data: { _id: id },
    });
    toast.info("Blog deleted");
    navigate("/blog");
    setIsDeleting(false);
  };

  if (isBlogLoading || userIsLoading) {
    return (
      // <div className="text-center mt-40">
      //   <Spin size="large" /> Loading...
      // </div>
      <div className="text-center mt-40 text-gray-500 text-lg">Loading...</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 mt-[120px] text-left">
      <div className="flex items-center justify-between gap-10 my-10">
        <div className="flex items-center gap-5">
          <div
            className="w-16 h-16 rounded-full overflow-hidden cursor-pointer"
            onClick={() => navigate(`/aboutuser/${userImg?._id}`)}
          >
            <Tooltip title={`${userImg?.name} ${userImg?.surname}`}>
              <img
                src={userImg?.profile_photo}
                alt="user"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740";
                }}
              />
            </Tooltip>
          </div>
          <div>
            <h3 className="font-semibold text-xl">
              {userImg?.name} {userImg?.surname}
            </h3>
            <p className="text-gray-500 text-sm">{followCount} followers</p>
          </div>
        </div>

        <button
          onClick={handleFollowFc}
          className="py-2 px-4 bg-[#46A358] text-white hover:bg-[#378045] rounded"
        >
          {blog?.data?.created_by === access_token
            ? "You"
            : isFollowed
            ? "Unfollow"
            : "Follow"}
        </button>
      </div>

      {/* Blog Content */}
      <h1 className="text-2xl font-bold my-8">{blog?.data?.title}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog?.data?.content }}
      />

      {/* Blog Stats */}
      <div className="flex items-center justify-between mt-16">
        <div className="flex items-center gap-4 text-gray-600 font-medium">
          <Tooltip title="Views">
            <span className="flex items-center gap-1">
              <Eye size={16} /> {blog?.data?.views}
            </span>
          </Tooltip>
          <Tooltip title="Likes">
            <span className="flex items-center gap-1">
              <Heart size={16} /> 0
            </span>
          </Tooltip>
          <Tooltip title="Comments">
            <span className="flex items-center gap-1">
              <CommentOutlined /> 0
            </span>
          </Tooltip>
          <Tooltip title="Share">
            <span className="flex items-center gap-1">
              <Share2 size={16} /> 0
            </span>
          </Tooltip>
        </div>

        {blog?.data?.created_by === userId && (
          <Button
            loading={isDeleting}
            danger
            onClick={() =>
              Modal.confirm({
                title: "Are you sure you want to delete this blog?",
                okText: "Delete",
                okType: "danger",
                cancelText: "Cancel",
                onOk: handleDeleteBlog,
              })
            }
          >
            Delete
          </Button>
        )}
      </div>
    </div>
  );
}
