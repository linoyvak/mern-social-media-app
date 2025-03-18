import React from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  Avatar,
  Image,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { FcLike } from "react-icons/fc";
import { MdOutlineInsertComment } from "react-icons/md";
import { BsShare } from "react-icons/bs";

// Mock Data for Posts
const mockPosts = [
  {
    id: "1",
    username: "John Doe",
    profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
    content: "Just had an amazing trip to the mountains! 🏔️",
    image: "https://source.unsplash.com/random/800x600?nature,water",
    likes: 23,
    comments: 5,
    createdAt: "2024-03-18T12:00:00Z",
  },
  {
    id: "2",
    username: "Jane Smith",
    profileImage: "https://randomuser.me/api/portraits/women/50.jpg",
    content: "Enjoying my morning coffee ☕",
    image: "https://source.unsplash.com/random/800x600?coffee",
    likes: 42,
    comments: 8,
    createdAt: "2024-03-19T08:30:00Z",
  },
];

const Posts = () => {
  return (
    <Stack spacing={4} py={5}>
      {mockPosts.length === 0 ? (
        <Text textAlign="center" color="gray.500">
          No posts uploaded!
        </Text>
      ) : (
        mockPosts.map((post) => (
          <Box key={post.id} px={7} py={1}>
            <Box
              px={4}
              py={6}
              bg="white"
              borderRadius="20px"
              boxShadow="0px 0px 5px 0px rgba(0,0,0,0.2)"
            >
              {/* User Info */}
              <Flex mb={2} align="center">
                <Avatar size="sm" name={post.username} src={post.profileImage} mr={2} />
                <Box>
                  <Text fontWeight="bold" fontSize="sm" color="gray.600">
                    {post.username}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    {new Date(post.createdAt).toLocaleDateString()} / {new Date(post.createdAt).toLocaleTimeString()}
                  </Text>
                </Box>
              </Flex>

              {/* Post Content */}
              <Text fontSize="sm" mb={2}>
                {post.content}
              </Text>
              {post.image && (
                <Image src={post.image} alt="Post Image" borderRadius="md" h="300px" w="100%" mb={2} />
              )}

              {/* Post Actions */}
              <Divider my={3} />
              <Flex align="center" gap={5}>
                {/* Like */}
                <Flex gap={2} align="center" cursor="pointer">
                  <Icon as={FcLike as any} w={6} h={6} />
                  <Text fontSize="sm">Like ({post.likes})</Text>
                </Flex>

                {/* Comment */}
                <Flex gap={2} align="center" cursor="pointer">
                  <Icon as={MdOutlineInsertComment as any} w={5} h={5} />
                  <Text fontSize="sm">Comment ({post.comments})</Text>
                </Flex>

                {/* Share */}
                <Flex gap={2} align="center" cursor="pointer">
                  <Icon as={BsShare as any} w={4} h={4} />
                  <Text fontSize="sm">Share</Text>
                </Flex>
              </Flex>
            </Box>
          </Box>
        ))
      )}
    </Stack>
  );
};

export default Posts;
