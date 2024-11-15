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
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavigationStyles from "./NavigationStyles";

const sections = ["Projects", "Skills", "Publications"];

function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const isMobileWidth = useMediaQuery("(max-width: 600px)");

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={NavigationStyles.navigation}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              component="img"
              sx={{ width: "4rem" }}
              src="images/logo.png"
              alt="Portfolio Logo"
            ></Box>
            {!isMobileWidth && (
              <Typography variant="h5">Rafael Silva-Vergara</Typography>
            )}
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="#contact" textAlign="center">
                  Lets Connect
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {sections.map((section) => (
              <Link
                key={section}
                href={"#" + section.toLowerCase()}
                sx={{
                  margin: 2,
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                {section}
              </Link>
            ))}
            <Button
              sx={{ height: "2.75rem", borderWidth: "2px" }}
              variant="outlined"
              size="small"
            >
              <Link
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                href="#contact"
              >
                Lets Connect
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;
