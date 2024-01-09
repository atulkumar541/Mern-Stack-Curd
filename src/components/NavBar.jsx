import { AppBar, Toolbar, Typography, styled } from "@mui/material";

import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
  margin-bottom: 20px;
`;

const Tabs = styled(NavLink)`
  margin-right: 20px;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: right;
`;

const NavBar = () => {
  return (
    <div>
      <Header position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MERN CURD
          </Typography>

          <Tabs to="/">All users</Tabs>
          <Tabs to="/add">Add User</Tabs>
        </Toolbar>
      </Header>
    </div>
  );
};

export default NavBar;
