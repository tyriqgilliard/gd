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
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
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
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}