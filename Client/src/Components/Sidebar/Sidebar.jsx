import { useDisclosure } from "@chakra-ui/hooks";
import React, { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router";
import { mainu } from "./SidebarConfig";
import { useSelector } from "react-redux";
import "../../App.css"

const Sidebar = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Home");
  const { user } = useSelector((store) => store);

  const handleTabClick = (tab) => {
    setActiveTab(tab.title);
    navigate(`/${tab.route}`);
  };

  return (
    <div className="sticky top-0 h-[100vh] pb-10 flex components">
      <div className={` flex flex-col h-full`}>
<h1 className="text-2xl font-bold font-sans text-center py-10">Social App</h1>
        <div className="">
          <hr />
          {mainu.map((item) => (
            <div>
              <div
                onClick={() => handleTabClick(item)}
                className="flex items-center my-5 cursor-pointer text-lg px-20"
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
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
