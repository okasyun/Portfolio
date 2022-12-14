import React, { memo, FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import { ListItemText } from "@mui/material";
import { ListItemIcon } from "@mui/material";

import { homeRoutes } from "../../router/HomeRoutes";

const iconList = [
  <HomeIcon />,
  <PersonIcon />,
  <BuildIcon />,
  <CodeIcon />,
  <EmailIcon />,
];
const Header: FC = memo(() => {
  const CustomButton = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  }));

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Typography variant="h6" component="div">
              <Link to={homeRoutes[0].path}>Shun Okamoto</Link>
            </Typography>
            <div style={{ flexGrow: 1 }}></div>
            {homeRoutes.map((route) => (
              <CustomButton
                // sx={{ flexGrow: 1 }}
                sx={{ mx: 4 }}
                key={route.id}
                variant="text"
                color="inherit"
                onClick={() => {
                  navigate(route.path);
                }}
              >
                {route.label}
              </CustomButton>
            ))}
            {/* style??????????????????????????????????????????????????????????????????????????? */}
            <div style={{ flexGrow: 1 }}></div>
            <IconButton
              sx={{ display: { md: "none" } }}
              id="basic-menu"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              size="large"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {homeRoutes.map((route, index) => (
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigate(route.path);
                  }}
                  key={route.id}
                >
                  <ListItemIcon>{iconList[index]}</ListItemIcon>
                  <ListItemText>{route.label}</ListItemText>
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
});

export default Header;
