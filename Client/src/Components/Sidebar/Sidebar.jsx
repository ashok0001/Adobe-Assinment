import { useDisclosure } from "@chakra-ui/hooks";
import React, { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router";
import { mainu } from "./SidebarConfig";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Home");
  const { user } = useSelector((store) => store);

  const handleTabClick = (tab) => {
    setActiveTab(tab.title);
    navigate(`/${tab.route}`)
   
  };





  return (
    <div className=" sticky top-0 h-[100vh] pb-10 flex">
      <div className={`px-10 flex flex-col justify-between h-full`}>
        <div className="pt-10">
         
          <div className="mt-10">
            {mainu.map((item) => (
              <div
                onClick={() => handleTabClick(item)}
                className="flex items-center mb-5 cursor-pointer text-lg"
              >
                {activeTab === item.title ? item.activeIcon : item.icon}
                <p
                  className={` ${
                    activeTab === item.title ? "font-bold" : "font-semibold"
                  } `}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

       
      </div>

    

    
    </div>
  );
};

export default Sidebar;
