import {
  Box,
  Flex,
  Avatar,
  Input,
  Button,
  Image,
  Divider,
  Text,
} from "@chakra-ui/react";

// Mock Images for Icons
import img from "../assets/img2.png";
import img2 from "../assets/map.png";
import img3 from "../assets/friend.png";



const Share = () => {
    
// Mock Data for User Profile
const mockUser = {
    username: "John Doe",
    profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
  };
  
  return (
    <Box px={7} py={5}>
      <Box
        px={10}
        py={6}
        bg="white"
        borderRadius="20px"
        boxShadow="0px 0px 5px 0px rgba(0,0,0,0.2)"
      >
        {/* Input Section */}
        <Flex align="center" bg="white">
          <Avatar
            size="md"
            name={mockUser.username}
            src={mockUser.profileImage}
            mr={2}
            p="5px"
            boxShadow="md"
          />
          <Input
            placeholder="What's on your mind?"
            border="none"
            bg="white"
            _focus={{ bg: "none", borderColor: "white" }}
            borderRadius="2px"
          />
        </Flex>

        <Divider my={4} height="1px" backgroundColor="lightgray" />

        {/* Action Buttons Section */}
        <Flex justify="space-between">
          <Flex gap={5} align="center">
            {/* Add Image Button */}
            <Flex as="label" align="center" cursor="pointer">
              <Image src={img} alt="Add Image" boxSize="20px" mr={2} />
              <Text fontSize="sm" color="gray.500">Add Image</Text>
            </Flex>

            {/* Add Place Button */}
            <Flex align="center" cursor="pointer">
              <Image src={img2} alt="Add Place" boxSize="20px" mr={2} />
              <Text fontSize="sm" color="gray.500">Add Place</Text>
            </Flex>

            {/* Tag Friends Button */}
            <Flex align="center" cursor="pointer">
              <Image src={img3} alt="Tag Friends" boxSize="20px" mr={2} />
              <Text fontSize="sm" color="gray.500">Tag Friends</Text>
            </Flex>
          </Flex>

          {/* Share Button */}
          <Button
            colorScheme="blue"
            fontSize="sm"
            bg="purple.300"
            rounded="2px"
            h="30px"
          >
            Share
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Share;
