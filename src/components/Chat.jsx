import React, { useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      message: "¡Hola! Soy tu chatbot. ¿En qué puedo ayudarte?",
      sentTime: "justo ahora",
      sender: "Chatbot",
    },
  ]);

  const handleSend = (text) => {
    const newMessage = {
      message: text,
      sentTime: "justo ahora",
      sender: "Usuario",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Respuesta automática del chatbot
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: "Esta es una respuesta automática. 😊",
          sentTime: "justo ahora",
          sender: "Chatbot",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <MainContainer
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "80vh", // Altura fija para el contenedor
          maxHeight: "600px", // Altura máxima
          backgroundColor: "#1e1e1e",
          borderRadius: "12px",
          overflow: "hidden", // Esconde cualquier contenido que se salga
        }}
      >
        <ChatContainer>
          <MessageList
            style={{
              flex: "1 1 auto",
              overflowY: "auto", // Habilita el scroll solo en el eje vertical
              padding: "10px", // Opcional: añade algo de espacio alrededor
              backgroundColor: "#1e1e1e",
            }}
          >
            {messages.map((msg, index) => (
              <Message
                key={index}
                model={{
                  message: msg.message,
                  sentTime: msg.sentTime,
                  sender: msg.sender,
                  direction: msg.sender === "Usuario" ? "outgoing" : "incoming",
                  position: "normal",
                }}
              />
            ))}
          </MessageList>
          <MessageInput
            placeholder="Escribe tu mensaje aquí..."
            onSend={handleSend}
            attachButton={false}
            autoFocus
            style={{
              borderTop: "1px solid #444", // Divide el input visualmente
              backgroundColor: "#1e1e1e",
              color: "#fff",
            }}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Chat;
