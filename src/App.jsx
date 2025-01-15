import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

const App = () => {
  const initialMessages = [
    {
      message: "¡Hola! Soy Emily un chatbot asistente en Python, Javascritp, Libros y Musica. ¿En qué puedo ayudarte?",
      sentTime: "justo ahora",
      sender: "Chatbot",
    },
  ];

  const [messages, setMessages] = useState(initialMessages);

  // Función para reiniciar el chat
  const resetChat = () => {
    setMessages(initialMessages);
  };

  return (
    <div className="h-screen flex flex-col bg-primary text-text">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar resetChat={resetChat} />
        <div className="flex-1">
          <Chat messages={messages} setMessages={setMessages} />
        </div>
      </div>
    </div>
  );
};

export default App;
