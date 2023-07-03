import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  AppBar,
  Avatar,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import InterestsIcon from "@mui/icons-material/Interests";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const BoxMob = styled("Box")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const BoxWeb = styled("Box")(({ theme }) => ({
  display: "none",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "10px 0",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="sticky" color="secondary">
      <StyledToolbar color="secondary">
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          MYAPP
        </Typography>
        <InterestsIcon
          fontSize="20"
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <InputBase
          sx={{ backgroundColor: "white", width: "40%" }}
          placeholder="search..."
        ></InputBase>
        <BoxWeb>
          <Badge badgeContent={4} color="error">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={2} color="primary">
            <Notifications color="action" />
          </Badge>
          <Avatar
            sx={{
              bgcolor: "red",
              width: "30px",
              height: "30px",
              cursor: "pointer",
            }}
            onClick={handleOpen}
          >
            N
          </Avatar>
        </BoxWeb>
        <BoxMob>
          <Avatar
            sx={{
              bgcolor: "red",
              width: "30px",
              height: "30px",
            }}
          >
            N
          </Avatar>
        </BoxMob>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClick={handleClose}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        className={open ? "color:white" : "display:none"}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
