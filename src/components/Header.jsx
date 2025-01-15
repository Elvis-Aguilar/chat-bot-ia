import { useState } from 'react';
import { MdSettings } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai"; // Ícono para indicar el menú desplegable

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="bg-sidebar text-text py-4 px-6 shadow-md flex justify-between items-center">
        <h1 className="text-lg font-semibold">Emely Chat Bot IA1-EDV</h1>
        <div className="flex items-center space-x-4">
          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-right text-text hover:text-primary focus:outline-none"
              aria-label="Abrir selector de opciones"
            >
              <span>EmilyChat</span>
              <AiOutlineDown className="ml-1" size={16} />
            </button>
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 bg-sidebar border border-gray-600 rounded-md shadow-lg text-text">
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">EmiliChat</li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">EmiliChat Plus</li>
              </ul>
            )}
          </div>
          {/* Botón de tuerca */}
          <button
            onClick={toggleModal}
            className="text-text hover:text-primary focus:outline-none"
            aria-label="Abrir modal de soporte técnico"
          >
            <MdSettings size={24} />
          </button>
        </div>
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg text-center">
            <h2 className="text-gray-700 font-bold mb-4">Inteligencia Artificial 1</h2>
            <p className="text-gray-700 mb-6">Proyecto fase 2 - Contactar con soporte técnico</p>
            <button
              onClick={toggleModal}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark focus:outline-none"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
