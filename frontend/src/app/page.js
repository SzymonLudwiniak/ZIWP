"use client";
import Image from "next/image";
import styles from "./styles/page.module.css";
import Dot from "./components/Dot";
import styled, { createGlobalStyle } from "styled-components";
import Board from "./components/Board";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
body{
  background-color: #eee;
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}
`;

const StyledMainComponent = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const allTextData = [
  {
    x: "150",
    y: "150",
    author: "inż. Jakub Kadziewicz",
    date: "12.12.2012",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  },
  {
    x: "250",
    y: "150",
    author: "inż. Szymon Ludwiniak",
    date: "09.09.2009",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  },
  {
    x: "150",
    y: "250",
    author: "inż. Marcin Gnap",
    date: "01.01.2001",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  },
];

export default function Home() {
  return (
    <>
      <StyledMainComponent>
        <Board />
        {allTextData?.length > 0 &&
          allTextData.map((textData, index) => (
            <Dot
              key={index}
              x={textData.x}
              y={textData.y}
              textData={textData}
            />
          ))}
      </StyledMainComponent>
    </>
  );
}
