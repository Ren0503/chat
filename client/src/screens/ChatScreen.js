import React, { useState } from 'react';
import { Box } from '@chakra-ui/layout';
import { ChatBox, MyChat } from 'components/chat';
import Sidebar from 'components/core/Sidebar';
import { ChatState } from 'context/ChatProvider';

const ChatScreen = () => {
    const [fetchAgain, setFetchAgain] = useState(false)
    const { user } = ChatState();

    return (
        <div style={{ width: "100%" }}>
            {user && <Sidebar />}
            <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
                {user && <MyChat fetchAgain={fetchAgain} />}
                {user && (
                    <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
                )}
            </Box>
        </div>
    );
};

export default ChatScreen;
