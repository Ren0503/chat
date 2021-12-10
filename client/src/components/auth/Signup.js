import React, { useState } from 'react';
import axios from 'axios';
import { VStack } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

const Signup = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [avatar, setAvatar] = useState();
    const [loading, setLoading] = useState(false);

    const handleShow = () => setShow(!show);

    const toast = useToast();
    const navigate = useNavigate();

    const submitHandler = async () => {
        setLoading(true);

        if (!name || !email || !password || !confirmPassword) {
            toast({
                title: "Please fill all the fields",
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
            });

            setLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            toast({
                title: "Passwords Do Not Match",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });

            return;
        }

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const { data } = await axios.post(
                '/api/user',
                { name, email, password, avatar },
                config
            );

            toast({
                title: "Signup Successful",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });

            localStorage.setItem("userInfo", JSON.stringify(data));

            setLoading(false);

            navigate("/chats");
        } catch (error) {
            toast({
                title: "Error Occurred!",
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });

            setLoading(false);
        }
    }


    const uploadImage = async (pics) => {
        setLoading(true);

        if (pics === undefined) {
            toast({
                title: "Please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });

            return;
        }

        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const formData = new FormData();
            formData.append("file", pics);
            formData.append("upload_preset", "chat_app");
            formData.append("cloud_name", "dsvc4kfvh");

            try {
                const { data } = await axios.post(
                    `${process.env.REACT_APP_CLOUDINARY_ENDPOINT}/upload`,
                    formData,
                );

                setAvatar(data.secure_url);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        } else {
            toast({
                title: "Please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
    }

    return (
        <VStack spacing="5px">
            <FormControl id="first-name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                    type="email"
                    placeholder="Enter Your Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                    <Input
                        type={show ? "text" : "password"}
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleShow}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup size="md">
                    <Input
                        type={show ? "text" : "password"}
                        placeholder="Confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleShow}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id="pic">
                <FormLabel>Upload your Picture</FormLabel>
                <Input
                    type="file"
                    p={1.5}
                    accept="image/*"
                    onChange={(e) => uploadImage(e.target.files[0])}
                />
            </FormControl>
            <Button
                colorScheme="blue"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}
                isLoading={loading}
            >
                Sign Up
            </Button>
        </VStack>
    )
}

export default Signup;
