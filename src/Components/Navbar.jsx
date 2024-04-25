import { Box, IconButton, Stack, Toolbar } from "@mui/material";
import React from "react";
import logo from "../../public/logo.svg";
import MenuDrawer from "./MenuDrawer";


const Navbar = () => {
  return (
    <Toolbar>
      <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
        <Box sx={{width : 50}}>
          <img src={logo} alt="logo" style={{width: "100%", height :"100%"}}/>
        </Box>
        
        <MenuDrawer/>
      </Stack>
    </Toolbar>
  );
};

export default Navbar;
