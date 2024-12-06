// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { IoChatbox } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div
            className={`${isCollapsed ? "w-16" : "w-64"
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
                {/* Cada opción pasa un texto y un icono diferente */}
                <SidebarOption
                    text="Nuevo chat"
                    icon={<IoChatbox />}
                    isCollapsed={isCollapsed}
                />
                <SidebarOption
                    text="Historial"
                    icon={<FaHistory />}
                    isCollapsed={isCollapsed}
                />
                <SidebarOption
                    text="Borrar Chat"
                    icon={<MdDelete />}
                    isCollapsed={isCollapsed}
                />
            </div>

            <div className="p-4 text-gray-400 text-sm">
                {isCollapsed ? "©" : "© 2024 Tu Chatbot"}
            </div>
        </div>
    );
};

// Componente para cada opción del Sidebar
// eslint-disable-next-line react/prop-types
const SidebarOption = ({ text, icon, isCollapsed }) => {
    return (
        <div
            className="flex items-center w-full px-4 py-2 cursor-pointer hover:bg-gray-600 hover:text-accent transition-colors"
        >
            {/* Aquí mostramos el icono que se pasa como propiedad */}
            <span className="text-xl">{icon}</span>
            {!isCollapsed && (
                <span className="ml-3 text-text font-medium">{text}</span>
            )}
        </div>
    );
};

export default Sidebar;
