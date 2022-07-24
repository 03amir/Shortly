import React from "react";
import * as theme from "../config/theme";
import styled from "styled-components";
import Image from "next/image";

function Card({ heading, details, image }) {
  return (
    <CardWrapper>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>

      <CardDetails>
        <h2>{heading}</h2>
        <p>{details}</p>
      </CardDetails>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  position: relative;
  width: 27%;

  padding: 10px;
  padding-bottom: 25px;
  border-radius: 5px;

  background: white;
`;

const CardDetails = styled.div`
  width: 80%;
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-align: start;

  p {
    margin-top: -5px;
    font-size: 17px;
    color: ${(props) => props.theme.grey};
  }
`;

const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  padding: 20px;
  border-radius: 50%;
  margin-left: 20px;
  margin-top: -50px;

  background: ${(props) => props.theme.veryDarkViolate};
`;

export default Card;
