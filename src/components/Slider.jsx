import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div``;
const Arrow = styled.div``;
const Wrapper = styled.div``;
const Slide = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.img``;
const InfoContainer = styled.div``;
const Title = styled.h1``;
const Desc = styled.p``;
const Button = styled.button``;





const Slider = () => {
    return (
        <Container>
            <Arrow>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                    <Image />
                    </ImgContainer>
                    <InfoContainer>
                        <Title></Title>
                        <Desc></Desc>
                        <Button></Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}