import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthScreen from 'screens/AuthScreen';
import ChatScreen from 'screens/ChatScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" component={AuthScreen} />
        <Route path="/chats" component={ChatScreen} />
      </Routes>
    </div>
  );
}

export default App;
