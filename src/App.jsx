// App.js
import React from "react";
import LanguageContextProvider from "./LanguageContext";
import Header from "./Header";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  return (
    <div>
      <LanguageContextProvider>
        <Header />
        <TodoList />
      </LanguageContextProvider>
    </div>
  );
}

export default App;
