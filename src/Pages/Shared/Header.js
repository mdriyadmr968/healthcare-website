import './Header.css';

import React from 'react';

import {
  Button,
  Container,
  Navbar,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Metripoly Health</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end ">
            <NavLink to="/home">
              {" "}
              <Button className="mx-3"> Home</Button>
            </NavLink>
            <NavLink to="/about">
              {" "}
              <Button className="mx-3"> About</Button>{" "}
            </NavLink>
            <NavLink to="/services">
              <Button className="mx-3"> Services</Button>
            </NavLink>

            <NavLink to="/article">
              <Button className="mx-3"> Articles</Button>
            </NavLink>
            {user?.email ? (
              <Button onClick={logOut} variant="light">
                Logout
              </Button>
            ) : (
              <NavLink to="/login">
                <Button className="mx-3"> Login</Button>
              </NavLink>
            )}
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
