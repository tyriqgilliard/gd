import React from "react";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

// --- Internal Components for Navbar --- //
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

// --- Search Bar & Input --- //
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
`;

// --- Menu Items --- //
const MenuItem01 = ({ to }) => {
  return (
    <a href={`/${to}`} style={{
        textDecoration: 'none',
    }}>
      <MenuItems>REGISTER</MenuItems>
    </a>
  );
};

const Logo = ({ to }) => {
    return (
      <a href={`/${to}`} style={{
          textDecoration: 'none',
          fontWeight: 'bold',
          color: 'black',
      }}>
        <MenuItems>GLOBALLY DISCLOSED</MenuItems>
      </a>
    );
  };

const MenuItem02 = ({ to }) => {
  return (
    <a href={`/${to}`} style={{
        textDecoration: 'none',
    }}>
      <MenuItems>LOGIN</MenuItems>
    </a>
  );
};

const MenuItem03 = ({ to }) => {
  return (
    <a href={`/${to}`} >
      <Badge badgeContent={3} color="primary">
        <ShoppingCartOutlined
          style={{
            marginLeft: "20px",
          }}
        />
      </Badge>
    </a>
  );
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
          <Logo to=""></Logo>
        </Center>
        <Right>
          <MenuItem01 to="register"></MenuItem01>
          <MenuItem02 to="login"></MenuItem02>
          <MenuItem03 to="cart"></MenuItem03>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
