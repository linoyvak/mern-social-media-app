import React from "react";
import NavBar from "../components/NavBar";
import { Box, Flex } from "@chakra-ui/react";
import LeftBar from "../components/LeftBar.jsx";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
      }}
    >
      <NavBar />
      <Flex>
        <Box width={"20%"}>
          <LeftBar />
        </Box>
        <Box width={"55%"}>
          <Outlet />
        </Box>
       
      </Flex>
    </div>
  );
};

export default Home;