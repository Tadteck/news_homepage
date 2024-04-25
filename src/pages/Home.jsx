import React from "react";
import Navbar from "../Components/Navbar";
import Imgmobile from "../images/image-web-3-mobile.jpg";
import { Box, Button, Stack, Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Box sx={{ px: 3, width: "100%", height: 300 }}>
        <img src={Imgmobile} alt="" style={{ width: "100%" }} />
      </Box>
      <Typography
        sx={{
          px: 3,
          fontSize: "3rem",
          fontWeight: 800,
          py: 3,
          lineHeight: 1.2,
        }}
      >
        The Bright Future of Web 3.0?
      </Typography>

      <Typography sx={{ fontSize:"1rem", px: 3 }}>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </Typography>
      <Box>
        <Button
          sx={{
            px: 3,
            py: 3,
            bgcolor: "hsl(5, 85%, 63%)",
            color: "hsl(36, 100%, 99%)",
            mx: 3,
            my: 2,
          }}
        >
          Read more
        </Button>
      </Box>
      <Box
        sx={{
          px: 3,
          bgcolor: "hsl(240, 100%, 5%)",
          color: "hsl(35, 77%, 62%)",
          py: 3,
          mx: 3,
          my: 2,
        }}
      >
        <h1>New</h1>
        <br />
      
        <Typography sx={{ color: "hsl(36, 100%, 99%)", py: 3 }}>
          <h1 style={{fontSize:"1.5rem"}}>Hydrogen VS Electric Cars</h1>
          <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
        </Typography>
        <hr />
        <Typography sx={{ color: "hsl(36, 100%, 99%)", py: 3 }}>
          <h1 style={{fontSize:"1.5rem"}}>The Downsides of AI Artistry</h1>
          <p>
            {" "}
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </Typography>
        <hr />
        <Typography sx={{ color: "hsl(36, 100%, 99%)", py: 3 }}>
          <h1 style={{fontSize:"1.5rem"}}>Is VC Funding Drying Up?</h1>
          <p>
            {" "}
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </Typography>
      </Box>
      <Stack>
        <Box></Box>
      </Stack>
    </div>
  );
};

export default Home;
