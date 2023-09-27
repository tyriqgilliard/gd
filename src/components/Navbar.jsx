import React from 'react'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";


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
                <Badge badgeContent={} color="primary">
                    <ShoppingCartOutlined />    
                </Badge>
            </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  );
};

export default Navbar;