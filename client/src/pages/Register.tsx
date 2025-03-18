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

const Register = () => {
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
          <Text fontSize="lg">Create an account to get started</Text>
        </Box>
      </Flex>

      {/* Right Side - Registration Form */}
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

          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Username</FormLabel>
            <Input type="text" placeholder="Choose a username" />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>

          <Button width="full" colorScheme="purple" mt={4}>
            Register
          </Button>

          <Divider my={4} />

          {/* Google Sign-Up Button */}
          <Button width="full" colorScheme="red" variant="outline">
            Sign Up with Google
          </Button>

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
