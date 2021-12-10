import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ChatProvider from 'context/ChatProvider';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AuthScreen from 'screens/AuthScreen';
import ChatScreen from 'screens/ChatScreen';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <ChatProvider>
            <Routes>
              <Route path="/" element={<AuthScreen />}></Route>
              <Route path="/chats" element={<ChatScreen />}></Route>
            </Routes>
          </ChatProvider>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
