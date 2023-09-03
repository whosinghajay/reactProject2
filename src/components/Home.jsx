import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4xl",
}

const Home = () => {
  return (
    <Box>
        <MyCarousel />
        <Container
        maxW={"container.xl"}
        minH={"100vh"}
        p={"16"}
        >
            <Heading
            textTransform={"uppercase"}
            py={"2"}
            w={"fit-content"}
            borderBottom={"2px solid"}
            m={"auto"}
            >Services</Heading>

            <Stack
            h={"full"}
            p={"4"}
            alignItems={"center"}
            direction={["column","row"]}
            >
                <Img src={img5} 
                h={["40","400"]}
                filter={"hue-rotate(-130deg)"} />
                <Text 
                letterSpacing={"widest"}
                lineHeight={"190%"}
                p={["4","16"]}
                textAlign={"center"}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum quia dolorum fugiat aspernatur atque reprehenderit unde error iste optio reiciendis qui, temporibus vitae, repellat facere perspiciatis? Ipsam, tempora obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est illum ut molestiae laborum quidem totam expedita dolores tempora commodi architecto, doloribus eum odit laudantium iure quo nemo placeat aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo possimus sint facere impedit harum dolor assumenda quos nulla magnam non accusantium, laudantium asperiores modi praesentium provident dolore consequatur! Nihil, dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis itaque nisi sequi quae obcaecati magni! Deserunt eligendi sunt consectetur rerum et ipsam, dolores quidem sit ratione quibusdam esse eveniet adipisci.
                </Text>
            </Stack>
        </Container>
    </Box>
  )
}

const MyCarousel=()=>(
    <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    >
        <Box w={"full"} h={"100vh"}>
            <Img src={img1} h={"full"} w={"full"} objectFit={"cover"}  />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions} >Watch The Future</Heading>
        </Box>

        <Box w={"full"} h={"100vh"}>
            <Img src={img2} h={"full"} w={"full"} objectFit={"cover"}  />
            <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions} >Future is Gaming</Heading>
        </Box>

        <Box w={"full"} h={"100vh"}>
            <Img src={img3} h={"full"} w={"full"} objectFit={"cover"}  />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions} >Gaming on console</Heading>
        </Box>

        <Box w={"full"} h={"100vh"}>
            <Img src={img4} h={"full"} w={"full"} objectFit={"cover"}  />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions} >Night life is cool</Heading>
        </Box>
    </Carousel>
);

export default Home
