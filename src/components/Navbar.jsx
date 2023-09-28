import React from "react";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import Cart from "../pages/Cart";

// Internal Components for Navbar //
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const MenuItem01 = ({ to }) => {
  return (
    <a href={`/${to}`}>
        REGISTER
    </a>
  )
};

const MenuItem02 = ({ to }) => {
    return (
      <a href={`/${to}`}>
        LOGIN
      </a>
    )
  };

  const MenuItem03 = ({ to }) => {
    return (
      <a href={`/${to}`}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
      </a>
    )
  };


// Navigation Bar //
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>GLOBALLY DISCLOSED</Logo>
        </Center>
        <Right>
          <MenuItems>
            <MenuItem01 to="register">REGISTER</MenuItem01>
            <MenuItem02 to="login">SIGN IN</MenuItem02>
            <MenuItem03 to="cart"></MenuItem03>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
