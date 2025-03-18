import React from "react";
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
import Lottie from "lottie-react";

const Login = () => {
  return (
    <Flex minH="100vh" bg="#6352EC" p="150px" w="100%">
      {/* Left Side - Welcome Message */}
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
          <Text fontSize="lg">Sign in to access your account</Text>
        </Box>
      </Flex>

      {/* Right Side - Login Form */}
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
            User Login
          </Heading>

          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>

          <Button width="full" colorScheme="purple" mt={4}>
            Login
          </Button>

          <Divider my={4} />

          {/* Google Login Button */}
          <Button width="full" colorScheme="red" variant="outline">
            Continue with Google
          </Button>

          <Flex align="center" justify="center" mt={4}>
            <Text fontSize="sm" mr={1}>
              Don’t have an account?
            </Text>
            <Link color="blue.500" href="/register">
              Sign Up
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
