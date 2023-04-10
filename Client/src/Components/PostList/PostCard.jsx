import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePostAction, likePostAction, unlikePostAction } from "../../Redux/Post/Action";
import { isLikedPost } from "../../Config/Logic";

const PostCard = ({post}) => {
  const [isLiked, setIsLiked] = useState(false);
  const jwt=localStorage.getItem("jwt");
    const dispatch=useDispatch();
  const navigate=useNavigate();
  const {user}=useSelector(store=>store);
  const posts=useSelector(store=>store.post)
  const handleNavigate=()=>{
      navigate(`/update-post/${"post.postId"}`)
  }
const data={
      postId:post.id,
      jwt
    }
  const handleDeletePost=()=>{
    const data={
      postId:post.id,jwt
    }
    dispatch(deletePostAction(data));
  }
  const handleLike=()=>{
    setIsLiked(true);
dispatch(likePostAction(data))
  }
  const handleUnlike=()=>{
    dispatch(unlikePostAction(data))
    setIsLiked(false)
  }

  useEffect(()=>{
     const liked=isLikedPost(post,user.reqUser.id)
setIsLiked(liked)
  },[posts.likedUser,posts.unikedPost])

 

  return (
    <div>
      <div className="shadow-md px-10 pb-10 mb-5">
        <p className="p-5 font-bold">{post?.user?.name}</p>
        <hr />
        <p className="mt-5">
          {post?.content}
        </p>

        <div className="flex justify-between mt-5">
          <div className="flex items-center">
          {isLiked ? (
            <AiFillHeart onClick={handleUnlike} className="text-red-500 text-xl cursor-pointer hover:text-lg" />
          ) : (
            <AiOutlineHeart onClick={handleLike}  className="text-xl cursor-pointer hover:text-lg" />
          )}
          {post?.likedUser.length>0 && <span className="ml-2">{post?.likedUser.length} like</span>}
          </div>
          <BsFillPencilFill onClick={handleNavigate} className="text-xl cursor-pointer hover:text-lg" />
          <MdDelete onClick={handleDeletePost} className="text-xl cursor-pointer hover:text-lg" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
