import React from 'react';
import { Route } from 'react-router-dom';
import AuthScreen from 'screens/AuthScreen';
import ChatScreen from 'screens/ChatScreen';

function App() {
  return (
    <div className="App">
      <Route path="/" component={AuthScreen} exact />
      <Route path="/chats" component={ChatScreen} />
    </div>
  );
}

export default App;
