import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  Divider,
} from "@chakra-ui/react";
import { RootState } from "../store/store";
import { registerUser} from "../store/actions/authActions";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1741916497825.json";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirecting, setRedirecting] = useState(false);

  // Automatically redirect when registration (or OAuth) is successful
  useEffect(() => {
    if (auth.user) {
      setRedirecting(true);
      setTimeout(() => {
        navigate("/home", { replace: true });
      }, 2000); // 2 seconds delay for the animation
    }
  }, [auth.user, navigate]);

  // Regular registration with email, username, and password
  const handleRegister = () => {
    dispatch(registerUser(email, username, password) as any);
  };



  if (redirecting) {
    return (
      <Flex minH="100vh" align="center" justify="center" bg="gray.50">
        <Box textAlign="center" width="300px">
          {/* Lottie animation instead of a spinner */}
          <Lottie animationData={animationData} loop={true} />
          <Text mt={4} fontSize="xl" color="purple.600">
            Logged in successfully, redirecting soon...
          </Text>
        </Box>
      </Flex>
    );
  }

  return (
    <Flex minH="100vh" bg="#6352EC" p="150px" w="100%">
      <Flex
        flex={1}
        direction="column"
        justify="center"
        bgGradient="linear(to-br, #6352ec, #ff6f3c)"
        p={{ base: 6, md: 10 }}
        boxShadow="xl"
      >
        <Box color="white" pl={{ base: 0, md: 8 }}>
          <Heading textAlign="center">Welcome to Website</Heading>
          <Text fontSize="lg">Create an account to get started</Text>
        </Box>
      </Flex>

      <Flex
        flex={1}
        bg="gray.50"
        align="center"
        justify="center"
        p={{ base: 6, md: 10 }}
      >
        <Box
          w="full"
          maxW="md"
          borderRadius="lg"
          p={8}
          boxShadow="xl"
          bg="white"
        >
          <Heading as="h2" size="xl" textAlign="center" mb={6}>
            User Registration
          </Heading>
          {auth.error && (
            <Text color="red.500" mb={4}>
              {auth.error}
            </Text>
          )}

          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button
            width="full"
            colorScheme="purple"
            onClick={handleRegister}
            isLoading={auth.loading}
          >
            Register
          </Button>

          <Divider my={4} />

    

          <Flex align="center" justify="center" mt={4}>
            <Text fontSize="sm" mr={1}>
              Already have an account?
            </Text>
            <Link color="blue.500" href="/login">
              Login
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Register;
