import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import menuicon from "../images/icon-menu.svg";
import { Button, IconButton, Stack, capitalize } from "@mui/material";
import closemenu from "../images/icon-menu-close.svg";

export default function MenuDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <Box
        onClick={toggleDrawer(anchor, false)}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          p: 3,
        }}
      >
        <IconButton>
          <img src={closemenu} alt="" />
        </IconButton>
      </Box>
      <Stack sx={{ padding: 2, gap: 1 }}>
        {["home", "new", "popular", "trending", "categories"].map(
          (item, index) => (
            <Button
              key={index}
              sx={{
                textTransform: "capitalize",
                justifyContent: "flex-start",
                fontSize: "1.2rem",
                color: "hsl(240, 100%, 5%)",
              }}
            >
              {item}
            </Button>
          )
        )}
      </Stack>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer("right", true)}>
        <img src={menuicon} alt="" />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
