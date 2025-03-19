import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Avatar,
  Button,
  Stack,
  Image,
  Divider,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import { useEffect } from "react";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchUserPosts } from "../store/actions/postActions";


const mockUser = {
  username: "John Doe",
  email: "johndoe@example.com",
  profileImage: "/path/to/profile.jpg",
};

const mockPosts = [
  {
    id: "1",
    username: "John Doe",
    avatar: "/path/to/profile.jpg",
    content: "Had a great day at the beach! 🌊",
    image: "/path/to/beach.jpg",
  },
  {
    id: "2",
    username: "John Doe",
    avatar: "/path/to/profile.jpg",
    content: "Loving my new workspace setup! 💻",
    image: "/path/to/workspace.jpg",
  },
];

const Profile: React.FC = () => {
  
  const [username, setUsername] = useState(mockUser.username);
  const [email, setEmail] = useState(mockUser.email);

  const dispatch = useDispatch<any>();
  const auth = useSelector((state: RootState) => state.auth);
  const userPosts = useSelector((state: RootState) => state.post.userPosts);

  useEffect(() => {
    if (auth.user) {
      dispatch(fetchUserPosts(auth?.user._id));
    }
  }, [dispatch, auth.user]);


  return (
    <Box>
      {/* Centered Profile Container */}
      <Box width="100%" borderRadius="md" boxShadow="md" p={4}>
        <Flex flex="1" maxW="900px" mx="auto" w="100%" p={4} direction="column">
          {/* Profile Header */}
          <Box bg="white" borderRadius="md" boxShadow="md" p={6}>
            <Flex align="center">
              <Avatar size="xl" src={mockUser.profileImage} mr={4} />
              <Box>
                <Heading as="h2" size="lg">
                  {username}
                </Heading>
                <Text fontSize="md" color="gray.500">
                  {email}
                </Text>
              </Box>
            </Flex>
            <Divider my={4} />

            {/* Profile Update Form */}
            <FormControl mb={4}>
              <FormLabel>Username</FormLabel>
              <Input value={username} onChange={(e) => setUsername(e.target.value)} />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Profile Picture</FormLabel>
              <Input type="file" accept="image/*" />
            </FormControl>

            <Button colorScheme="blue">Save Changes</Button>
          </Box>

          <Divider my={6} />

            {/* User's Posts */}
            <Box>
            <Heading as="h3" size="md" mb={4}>
              Your Posts
            </Heading>
            <Stack spacing={4}>
              {userPosts.length === 0 ? (
                <Text color="gray.500">You haven't posted anything yet.</Text>
              ) : (
                userPosts.map((post) => (
                  <Box
                    key={post._id}
                    bg="white"
                    p={4}
                    borderRadius="md"
                    boxShadow="sm"
                  >
                    <Flex align="center" mb={2}>
                      <Avatar size="sm" src={post.avatar} mr={2} />
                      <Text fontWeight="bold">{post.username}</Text>
                    </Flex>

                    <>
                        <Text mb={2}>{post.content}</Text>
                        {post.image && (
                          <Image
                            height="200px"
                            width="100%"
                            src={`http://localhost:5000${post.image}`}
                            alt="User Post"
                            borderRadius="md"
                            mb={2}
                          />
                        )}
                        <Flex gap={2}>
                          <Button
                            size="sm"
                            colorScheme="blue"
                          
                          >
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            colorScheme="red"
                          >
                            Delete
                          </Button>
                        </Flex>
                      </>

                 
                  </Box>
                ))
              )}
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Profile;
