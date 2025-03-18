import React from "react";
import { Box, Flex, Text, VStack, Divider, Avatar, Image } from "@chakra-ui/react";

// Import image assets
import Friends from "../assets/1.png";
import Groups from "../assets/2.png";
import Market from "../assets/3.png";
import Watch from "../assets/4.png";
import Memories from "../assets/5.png";
import Events from "../assets/6.png";
import Gaming from "../assets/7.png";
import Gallery from "../assets/8.png";
import Videos from "../assets/9.png";
import Messages from "../assets/10.png";
import Tutorials from "../assets/11.png";
import Courses from "../assets/12.png";
import Fund from "../assets/13.png";

const LeftBar = () => {
  return (
    <Box
      flex="2"
      position="sticky"
      top="0"
      height="100vh"
      overflowY="auto"
      bg="white"
      color="black"
      display={{ base: "none", md: "block" }}
      p={5}
      sx={{
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <VStack spacing={6} align="stretch">
        {/* First Menu */}
        <Box>
          <VStack align="stretch" spacing={4}>
            <Flex align="center" gap={3}>
              <Avatar size="sm" />
              <Text fontSize="14px">User Name</Text>
            </Flex>
            <Flex align="center" gap={3} cursor="pointer">
              <Image src={Friends} alt="Friends" boxSize="25px" />
              <Text fontSize="14px" fontWeight="500">Friends</Text>
            </Flex>
            <Flex align="center" gap={3} cursor="pointer">
              <Image src={Groups} alt="Groups" boxSize="25px" />
              <Text fontSize="14px" fontWeight="500">Groups</Text>
            </Flex>
            <Flex align="center" gap={3} cursor="pointer">
              <Image src={Market} alt="Marketplace" boxSize="25px" />
              <Text fontSize="14px" fontWeight="500">Marketplace</Text>
            </Flex>
            <Flex align="center" gap={3} cursor="pointer">
              <Image src={Watch} alt="Watch" boxSize="25px" />
              <Text fontSize="14px" fontWeight="500">Watch</Text>
            </Flex>
            <Flex align="center" gap={3} cursor="pointer">
              <Image src={Memories} alt="Memories" boxSize="25px" />
              <Text fontSize="14px" fontWeight="500">Memories</Text>
            </Flex>
          </VStack>
        </Box>

        <Divider borderColor="gray.300" />

        {/* Second Menu: Your Shortcuts */}
        <Box>
          <Text fontSize="12px" mb={3}>Your shortcuts</Text>
          <VStack align="stretch" spacing={4}>
            <Flex align="center" gap={3} cursor="pointer">
              <Image src={Events} alt="Events" boxSize="25px" />
              <Text fontSize="14px" fontWeight="500">Events</Text>
            </Flex>
            <Flex align="center" gap={3} cursor="pointer">
              <Image src={Gaming} alt="Gaming" boxSize="25px" />
              <Text fontSize="14px" fontWeight="500">Gaming</Text>
            </Flex>
            <Flex align="center" gap={3} cursor="pointer">
              <Image src={Gallery} alt="Gallery" boxSize="25px" />
              <Text fontSize="14px" fontWeight="500">Gallery</Text>
            </Flex>
            <Flex align="center" gap={3} cursor="pointer">
              <Image src={Videos} alt="Videos" boxSize="25px" />
              <Text fontSize="14px" fontWeight="500">Videos</Text>
            </Flex>
            <Flex align="center" gap={3} cursor="pointer">
              <Image src={Messages} alt="Messages" boxSize="25px" />
              <Text fontSize="14px" fontWeight="500">Messages</Text>
            </Flex>
          </VStack>
        </Box>

        <Divider borderColor="gray.300" />

        {/* Third Menu: Others */}
        <Box>
          <Text fontSize="12px" mb={3}>Others</Text>
          <VStack align="stretch" spacing={4}>
            <Flex align="center" gap={3} cursor="pointer">
              <Image src={Fund} alt="Fundraiser" boxSize="25px" />
              <Text fontSize="14px" fontWeight="500">Fundraiser</Text>
            </Flex>
            <Flex align="center" gap={3} cursor="pointer">
              <Image src={Tutorials} alt="Tutorials" boxSize="25px" />
              <Text fontSize="14px" fontWeight="500">Tutorials</Text>
            </Flex>
            <Flex align="center" gap={3} cursor="pointer">
              <Image src={Courses} alt="Courses" boxSize="25px" />
              <Text fontSize="14px" fontWeight="500">Courses</Text>
            </Flex>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default LeftBar;
