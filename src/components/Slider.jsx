import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

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