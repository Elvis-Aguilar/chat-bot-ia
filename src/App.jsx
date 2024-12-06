import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

const App = () => {
  return (
    <div className="h-screen flex flex-col bg-primary text-text">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1">
          <Chat />
        </div>
      </div>
    </div>

  );
};

export default App;
