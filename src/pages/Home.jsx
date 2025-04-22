import { fetchTrending, imagePathOriginal } from "@/services/api";
import { Container, Heading, Grid, Center, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { imagePath } from "@/services/api";
import CardComponent from "@/components/CardComponent";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["trending", "day"],
    queryFn: () => fetchTrending("day"),
  });

  if (isLoading)
    return (
      <Center height="50vh">
        <Spinner size="xl" color={"#FFF085"} />
      </Center>
    );

  console.log("data", data);

  return (
    <Container>
      <Heading as={"h2"} fontSize={"md"} textTransform={"uppercase"}>
        Trending
      </Heading>

      <Grid templateColumns={"repeat(5, 1fr)"}>
        {data?.map((item) => {
          return <CardComponent key={item?.id} item={item} />;
        })}
      </Grid>
    </Container>
  );
};

export default Home;
