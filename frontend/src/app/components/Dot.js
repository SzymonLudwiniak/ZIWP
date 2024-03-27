"use client";
import { useState } from "react";
import styles from "../styles/page.module.css";
import styled from "styled-components";

const StyledDotDiv = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const StyledInfoDiv = styled.div`
  position: absolute;
  display: block;
  width: auto;
  height auto;
  padding: 5px;
  gap: 10px;
  background-color: white;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid #aaa;
  border-radius: 5px;
`;

const StyledSmallGreyLabel = styled.label`
  display: block;
  font-size: 0.6rem;
  color: grey;
`;

const StyledBlackLabel = styled.label`
  display: block;
  font-size: 0.8rem;
  color: black;
  max-width: 450px;
`;

const StyledAuthorRow = styled.div``;

export default function Dot({ x, y, textData }) {
  const [showInfo, setShowInfo] = useState(false);
  const newX = parseInt(x) + 20;
  const newY = parseInt(y) + 15;

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <>
      <StyledDotDiv
        style={{
          top: parseInt(y) + "px",
          left: parseInt(x) + "px",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></StyledDotDiv>
      {showInfo && (
        <StyledInfoDiv
          style={{
            top: newY + "px",
            left: newX + "px",
          }}
        >
          <StyledAuthorRow>
            <StyledSmallGreyLabel>Author: </StyledSmallGreyLabel>
            <StyledBlackLabel>{textData.author}</StyledBlackLabel>
          </StyledAuthorRow>
          <StyledAuthorRow>
            <StyledSmallGreyLabel>Date: </StyledSmallGreyLabel>
            <StyledBlackLabel>{textData.date}</StyledBlackLabel>
          </StyledAuthorRow>
          <StyledAuthorRow>
            <StyledSmallGreyLabel>Description: </StyledSmallGreyLabel>
            <StyledBlackLabel>{textData.description}</StyledBlackLabel>
          </StyledAuthorRow>
        </StyledInfoDiv>
      )}
    </>
  );
}
