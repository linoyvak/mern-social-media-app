import { useEffect } from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  Avatar,
  Button,
  Image,
  Input,
  Icon,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  fetchPosts,
} from "../store/actions/postActions";
import { FcLike } from "react-icons/fc";
import { BsShare } from "react-icons/bs";
import { MdOutlineInsertComment } from "react-icons/md";

const Posts = () => {
  const posts = useSelector((state: RootState) => state.post.posts);
  const avatarShadow = useColorModeValue(
    "0px 0px 5px 0px rgba(0,0,0,0.2)",
    "none"
  );
  const auth = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);



  return (
    <Stack>
      {posts?.length === 0 ? (
        <Text textAlign="center" color="gray.500">
          No posts uploaded!
        </Text>
      ) : (
        posts?.map((post: any) => (
          <Box px={7} py={1}>
            <Box
              px={4}
              py={6}
              bg="white"
              borderRadius="20px"
              boxShadow={"0px 0px 5px 0px rgba(0,0,0,0.2)"}
            >
              <Flex mb={2}>
                <Avatar
                  size="sm"
                  name={auth.user?.username || "User Name"}
                  src={auth.user?.profileImage || "/path/to/profile.jpg"}
                  mr={2}
                  p={"5px"}
                  boxShadow={avatarShadow}
                />

                <Box mb={2}>
                  <Text fontWeight="bold" fontSize="sm" color="gray.600" mr={2}>
                    {post.username}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {new Date(post.createdAt).toLocaleDateString()} /{" "}
                    {new Date(post.createdAt).toLocaleTimeString()}
                  </Text>
                </Box>
              </Flex>
              <Text fontFamily={"body"} fontSize={"sm"} mb={2}>
                {post.content}
              </Text>
              {post.image && (
                <Image
                  src={`http://localhost:5000${post.image}`}
                  alt="User Post"
                  borderRadius="md"
                  h={"300px"}
                  w={"100%"}
                  mb={2}
                />
              )}

              <Flex align={"center"} gap={5}>
                {/* like */}
                <Flex gap={2} align="center">
                  <Icon
                    as={FcLike as any}
                    w={6}
                    h={6}
                    cursor="pointer"
                  />
                  {post.likes.includes(auth.user?._id) ? "Unlike" : "Like"} (
                  {post.likes.length})
                </Flex>

                {/* comment */}
                <Flex gap={2} mt={1} align="center">
                  <Icon
                    as={MdOutlineInsertComment as any}
                    w={5}
                    h={5}
                    cursor="pointer"
                  />
                  <Text >
                    {post.comments.length}
                  </Text>
                </Flex>

                {/* share */}

                <Flex gap={2} mt={1} align="center">
                  <Icon as={BsShare as any} w={4} h={4} cursor="pointer" />
                  Share
                </Flex>
              </Flex>

              <Flex align={"center"} mt={2}>
                <Input
                  h={"30px"}
                  borderRadius={"20px"}
                  placeholder="Write a comment..."
                />
                <Button
                  ml={2}
                  size="sm"
                  colorScheme="blue"
                  borderRadius={"20px"}
                >
                  Comment
                </Button>
              </Flex>
            </Box>
          </Box>
        ))
      )}
    
 
    </Stack>
  );
};

export default Posts;
