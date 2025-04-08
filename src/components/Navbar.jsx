import { Box, Container, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box py="4" mb="2">
      <Container maxW={"5xl"}>
        <Flex justifyContent={"space-between "}>
          <NavLink to="/Home">
            <Box
              fontSize={"2xl"}
              fontWeight={"bold"}
              color={"#FADA7A"}
              letterSpacing={"widest"}
              fontFamily={"mono"}
            >
              ZedFlix
            </Box>
          </NavLink>
          <Flex gap={4}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#FADA7A" : "white",
                transition: "all 0.2s",
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/movies"
              style={({ isActive }) => ({
                color: isActive ? "#FADA7A" : "white",
                transition: "all 0.2s",
              })}
            >
              Movies
            </NavLink>
            <NavLink
              to="/shows"
              style={({ isActive }) => ({
                color: isActive ? "#FADA7A" : "white",
                transition: "all 0.2s",
              })}
            >
              Tv Shows
            </NavLink>
            <NavLink
              to="/search"
              style={({ isActive }) => ({
                color: isActive ? "#FADA7A" : "white",
                transition: "all 0.2s",
              })}
            >
              Search
            </NavLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
