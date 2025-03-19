import { useState } from "react";
import { Box, Image, Text, Flex, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

// Import images
import img from "../assets/sinval-carvalho-K4o9sLBFdPk-unsplash.jpg";
import img2 from "../assets/magnus-andersson-0tODL-2pO1Y-unsplash.jpg";
import img3 from "../assets/thom-holmes-YubaAlatrIU-unsplash.jpg";
import img4 from "../assets/lerone-pieters-vF6mSAWAzzU-unsplash.jpg";

// Mock Stories Data
const stories = [
  { img: img, name: "John Doe" },
  { img: img2, name: "Jane Doe" },
  { img: img3, name: "Alice" },
  { img: img4, name: "Bob" },
  { img: img, name: "Michael" },
  { img: img2, name: "Sarah" },
  { img: img3, name: "David" },
];

const Stories = () => {
  const [index, setIndex] = useState(0);

  const nextStory = () => {
    setIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevStory = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? stories.length - 1 : prevIndex - 1
    );
  };

  return (
    <Flex align="center" justify="center" position="relative" w="full" py={4}>
      {/* Left Arrow Button */}
      <IconButton
        aria-label="Previous Story"
        icon={<ChevronLeftIcon boxSize={8} />}
        position="absolute"
        left={0}
        zIndex={2}
        onClick={prevStory}
        bg="whiteAlpha.700"
        _hover={{ bg: "whiteAlpha.900" }}
        boxShadow="md"
        borderRadius="full"
      />

      {/* Stories Wrapper */}
      <Flex overflow="hidden" w="90%" position="relative">
        <Flex
          as={motion.div}
          initial={{ x: "-100%" }}
          animate={{ x: `-${index * 220}px` }}
          transition="0.5s ease-in-out"
          gap={4}
        >
          {stories.map((story, idx) => (
            <Box
              key={idx}
              position="relative"
              minWidth="215px"
              height="250px"
              borderRadius="30px"
              overflow="hidden"
              boxShadow="lg"
            >
              <Image src={story.img} alt={story.name} h="100%" w="100%" />
              <Text
                position="absolute"
                bottom="8px"
                left="8px"
                fontWeight="bold"
                color="white"
                bg="rgba(0, 0, 0, 0.5)"
                px={2}
                py={1}
                borderRadius="md"
                fontSize="sm"
              >
                {story.name}
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>

      {/* Right Arrow Button */}
      <IconButton
        aria-label="Next Story"
        icon={<ChevronRightIcon boxSize={8} />}
        position="absolute"
        right={0}
        zIndex={2}
        onClick={nextStory}
        bg="whiteAlpha.700"
        _hover={{ bg: "whiteAlpha.900" }}
        boxShadow="md"
        borderRadius="full"
      />
    </Flex>
  );
};

export default Stories;
