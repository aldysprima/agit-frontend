import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#313638" }}>
      <StyledToolbar>
        <Typography variant="h4" fontWeight="bold">
          JobLizt
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="220px"
        >
          <Typography>Welcome, aldysprima</Typography>
          <Icons>
            <Avatar sx={{ cursor: "pointer" }} />
          </Icons>
        </Box>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/home">
          <MenuItem>Home</MenuItem>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/profile"
        >
          <MenuItem>Profile</MenuItem>
        </Link>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
