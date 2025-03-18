import { Box } from "@chakra-ui/react";
import Stories from "../components/Stories";
import Share from "../components/Share";
import Posts from "../components/Posts";

const Feed = () => {
  return (
    <Box
      bg="#f0f0f0"
      width="100%"
      overflowY="auto"
      boxShadow="md"
      p={4}
      sx={{
        "&::-webkit-scrollbar": { display: "none" },
        scrollbarWidth: "none", // For Firefox
      }}
    >
      <Box>
      <Stories />
      <Share />
        <Posts />


      </Box>
    </Box>
  );
};

export default Feed;