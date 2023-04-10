import {
    AiOutlineHome,
    AiFillHome,
    AiOutlineSearch,
    AiOutlineCompass,
    AiFillCompass,
    AiFillMessage,
    AiOutlineMessage,
    AiOutlineHeart,
    AiFillHeart,
    AiOutlinePlusCircle,
    AiFillPlusCircle,
  } from "react-icons/ai";
  import { CgProfile } from "react-icons/cg";
  import { BsFilePost, BsFilePostFill } from "react-icons/bs"
  import { SiGoogleanalytics } from "react-icons/si"

export const mainu = [
    { title: "Users List", icon: <CgProfile className="text-2xl mr-5" />, activeIcon: <CgProfile className="text-2xl mr-5" />,route:"user-list" },
    
   
    {
      title: "Posts List",
      icon: <BsFilePostFill className="text-2xl mr-5" />,
      activeIcon: <BsFilePost className="text-2xl mr-5" />,
      route:"post-list"
    },
    
    {
        title: "User Analytics",
        icon: <SiGoogleanalytics className="text-2xl mr-5" />,
        activeIcon: <SiGoogleanalytics className="text-2xl mr-5" />,
        route:"analytics/user"
      },
      {
        title: "Post Analytics",
        icon: <SiGoogleanalytics className="text-2xl mr-5" />,
        activeIcon: <SiGoogleanalytics className="text-2xl mr-5" />,
        route:"analytics/post"
      },
    
    {
      title: "Create",
      icon: <AiOutlinePlusCircle className="text-2xl mr-5" />,
      activeIcon: <AiFillPlusCircle className="text-2xl mr-5" />,
      route:"create-post"
    },
  ];