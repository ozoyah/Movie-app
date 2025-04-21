import { fetchTrending, imagePathOriginal } from "@/services/api";
import { Container, Heading, Grid, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { imagePath } from "@/services/api";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTrending("day")
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, []);

  console.log("data", data);

  return (
    <Container>
      <Heading as={"h2"} fontSize={"md"} textTransform={"uppercase"}>
        Trending
      </Heading>

      <Grid templateColumns={"repeat(5, 1fr)"}>
        {data?.map((item) => {
          return (
            <Image key={item?.id} src={`${imagePath}/${item?.backdrop_path}`} />
          );
        })}
      </Grid>
    </Container>
  );
};

export default Home;
