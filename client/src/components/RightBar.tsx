import {
  Box,
  Text,
  Flex,
  Avatar,
  Button,
  VStack,
} from "@chakra-ui/react";

const suggestions = [
  {
    name: "Jane Doe",
    image:
      "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "John Smith",
    image:
      "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const latestActivities = [
  {
    name: "Jane Doe",
    image:
      "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    activity: "changed their cover picture",
    time: "1 min ago",
  },
  {
    name: "John Smith",
    image:
      "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    activity: "liked a post",
    time: "5 min ago",
  },
];


const RightBar = () => {
  return (
    <Box
      flex="2"
      position="sticky"
      top="0"
      height="100vh"
      overflowY="auto"
      bg="#f0f0f0"
      color="black"
      display={{ base: "none", md: "block" }}
      p={5}
      sx={{
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <VStack spacing={6} align="stretch">
        {/* Suggestions Section */}
        <Box
          p={4}
          bg="white"
          borderRadius="md"
          border="1px solid #f0f0f0"
          boxShadow="sm"
        >
          <Text color="gray" fontSize="md" mb={4}>
            Suggestions For You
          </Text>
          {suggestions.map((user, index) => (
            <Flex
              key={index}
              align="center"
              justify="space-between"
              mb={3}
              p={2}
              borderRadius="md"
              boxShadow="sm"
              bg="white"
            >
              <Flex align="center" gap={3}>
                <Avatar size="sm" name={user.name} src={user.image} />
                <Text fontWeight="bold">{user.name}</Text>
              </Flex>
              <Flex gap={2}>
                <Button
                  size="xs"
                  bg="#5271ff"
                  color="white"
                  _hover={{ bg: "#3a5ecb" }}
                >
                  Follow
                </Button>
                <Button
                  size="xs"
                  bg="#f0544f"
                  color="white"
                  _hover={{ bg: "#d9443b" }}
                >
                  Dismiss
                </Button>
              </Flex>
            </Flex>
          ))}
        </Box>

        {/* Latest Activities Section */}
        <Box
          p={4}
          bg="white"
          borderRadius="md"
          border="1px solid #f0f0f0"
          boxShadow="sm"
        >
          <Text color="gray" fontSize="md" mb={4}>
            Latest Activities
          </Text>
          {latestActivities.map((activity, index) => (
            <Flex
              key={index}
              align="center"
              justify="space-between"
              mb={3}
              p={2}
              bg="white"
              borderRadius="md"
              boxShadow="sm"
            >
              <Flex align="center" gap={3}>
                <Avatar size="sm" name={activity.name} src={activity.image} />
                <Box>
                  <Text fontSize="sm">
                    <Text as="span" fontWeight="bold">
                      {activity.name}
                    </Text>{" "}
                    {activity.activity}
                  </Text>
                </Box>
              </Flex>
              <Text fontSize="xs" color="gray.500">
                {activity.time}
              </Text>
            </Flex>
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default RightBar;