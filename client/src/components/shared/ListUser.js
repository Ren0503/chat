import React from 'react';
import { ChatState } from 'context/ChatProvider';
import { Box, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';

const ListUser = ({ user, handleFunction }) => {

    return (
        <Box
            onClick={handleFunction}
            cursor="pointer"
            bg="#FAF1E6"
            _hover={{
                background: "#066420",
                color: "white",
            }}
            w="100%"
            d="flex"
            alignItems="center"
            color="black"
            px={3}
            py={2}
            mb={2}
            borderRadius="lg"
        >
            <Avatar
                mr={2}
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.avatar}
            />
            <Box>
                <Text>{user.name}</Text>
                <Text fontSize="xs">
                    <b>Email : </b>
                    {user.email}
                </Text>
            </Box>
        </Box>
    );
};

export default ListUser;
