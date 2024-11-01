import * as React from "react";
import {
  Link,
  Typography,
  MenuItem,
  Container,
  Menu,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const sections = ["Projects", "Skills", "Publications"];

function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        maxWidth: "95%",
        borderRadius: "0px 0px 20px 20px",
        backgroundColor: "#112533",
        position: "sticky",
        zIndex: "1000",
        top: "0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img
              style={{ width: "4rem" }}
              src="images/logo.png"
              alt="Portfolio Logo"
            />
            <Typography variant="h5">Rafael Silva-Vergara</Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {sections.map((section) => (
                <MenuItem key={section} onClick={handleCloseNavMenu}>
                  <Link href={"#" + section.toLowerCase()} textAlign="center">
                    {section}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {sections.map((section) => (
              <Link
                key={section}
                href={"#" + section.toLowerCase()}
                sx={{ margin: 2, color: "white", display: "block" }}
              >
                {section}
              </Link>
            ))}
            <Button variant="outlined" size="small">
              <Link href="#contact">Contact</Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;
