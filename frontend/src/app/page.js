"use client";
import Image from "next/image";
import styles from "./styles/page.module.css";
import Dot from "./components/Dot";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
body{
  background-color: #eee;
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}
`;

export default function Home() {
  return (
    <>
      <div>
        <Dot x={100} y={100} />
      </div>
    </>
  );
}
