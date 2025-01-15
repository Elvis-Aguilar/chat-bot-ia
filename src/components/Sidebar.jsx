import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { IoChatbox } from "react-icons/io5";

const Sidebar = ({ resetChat }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } bg-sidebar h-full shadow-md flex flex-col transition-all duration-300`}
    >
      <div
        className="flex items-center justify-between p-4 cursor-pointer text-text"
        onClick={toggleSidebar}
      >
        {isCollapsed ? (
          <AiOutlineMenu size={24} className="text-text" />
        ) : (
          <AiOutlineClose size={24} className="text-text" />
        )}
      </div>

      <div className="flex-1 flex flex-col items-start">
        <div
          className="flex items-center w-full px-4 py-2 cursor-pointer hover:bg-gray-600 hover:text-accent transition-colors"
          onClick={resetChat}
        >
          <IoChatbox className="text-xl" />
          {!isCollapsed && <span className="ml-3 text-text font-medium">Nuevo Chat</span>}
        </div>
        <div
          className="flex items-center w-full px-4 py-2 cursor-pointer hover:bg-gray-600 hover:text-accent transition-colors"
          onClick={resetChat}
        >
          <MdDelete className="text-xl" />
          {!isCollapsed && <span className="ml-3 text-text font-medium">Borrar Chat</span>}
        </div>
      </div>

      <div className="p-4 text-gray-400 text-sm">
        {isCollapsed ? "©" : "© 2024 Tu Chatbot"}
      </div>
    </div>
  );
};

export default Sidebar;
