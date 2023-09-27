import React from 'react'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

// Internal Components for Navbar //
const Container = styled.div`
    height: 60px;
    `;

const Wrapper = styled.div``;
const Left = styled.div``;
const SearchContainer = styled.div``;
const Input = styled.input``;
const Center = styled.div``;
const Logo = styled.h1``;
const Right = styled.div``;
const MenuItem = styled.div``;





const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input placeholder="Search" />
                    <Search style={{ color: "gray", fontSize: 16 }} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo></Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined />    
                </Badge>
            </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  );
};

export default Navbar;