import React from "react";
import { Link } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
import { imagePath } from "@/services/api";

const CardComponent = ({ item }) => {
  return (
    <Link to="/">
      <Box
        margin={"3"}
        borderWidth={"1px"}
        borderColor={"#FFF085"}
        // shadow={"5px 5px 5px 5px rgba(233, 245, 74, 0.2)"}
      >
        <Image
          src={`${imagePath}/${item?.poster_path}`}
          mixBlendMode={"dark"}
        />
      </Box>
    </Link>
  );
};

export default CardComponent;
