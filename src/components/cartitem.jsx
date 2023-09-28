import React, { useContext } from "react";
import { Add, Remove } from "@material-ui/icons";
import { ShopContext } from "../context/shop-context";
import styled from "styled-components";
import CSS from "./cart.css";
import { mobile } from "../responsive";
import { item, popularProducts } from "../data";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Image = styled.img`
  width: 200px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CartItem = (props) => {
  const { id, productName, img, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <Product>
      <Image
        src={item.keys=(item.img)}
        style={{
          width: "200px",
        }}
      />
      <Details>
        <ProductName>
          <b>Product: </b>{(item.keys = productName)}
        </ProductName>
        <ProductId>
          <b>ID:</b> {(item.keys = id)}
        </ProductId>
        <ProductPrice> ${price}</ProductPrice>
        <ProductAmountContainer>
          <Remove 
          style={{
            cursor: 'pointer',
          }}
          onClick={() => removeFromCart(id)}> - </Remove>
          <ProductAmount
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <Add 
          style={{
            cursor: 'pointer',
          }}
          onClick={() => addToCart(id)}> + </Add>
        </ProductAmountContainer>
      </Details>
    </Product>
  );
};
