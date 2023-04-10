import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PostCard = ({post}) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate=useNavigate();
  const handleNavigate=()=>{
      navigate(`/update-post/${"post.postId"}`)
  }
  return (
    <div>
      <div className="shadow-md px-10 pb-10 mb-5">
        <p className="p-5 font-bold">username</p>
        <hr />
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          aliquam architecto ducimus corrupti voluptatem harum possimus commodi
          dolorem quibusdam voluptatum delectus aut inventore eligendi,
          repudiandae at error libero repellat dolorum.
        </p>

        <div className="flex justify-between mt-5">
          {isLiked ? (
            <AiFillHeart className="text-red-500 text-xl cursor-pointer hover:text-lg" />
          ) : (
            <AiOutlineHeart className="text-xl cursor-pointer hover:text-lg" />
          )}
          <BsFillPencilFill onClick={handleNavigate} className="text-xl cursor-pointer hover:text-lg" />
          <MdDelete className="text-xl cursor-pointer hover:text-lg" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
