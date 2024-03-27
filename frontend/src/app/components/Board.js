import styled from "styled-components";

const StyledCoordinateSystem = styled.div`
  position: relative;
  width: 99vw;
  height: 98vh;
  border-radius: 5px;
  background-color: white;
  top: 1vh;
  left: 0.5vw;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.1);
`;

const StyledYAxis = styled.div`
  top: 0;
  left: 50%;
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: black;
`;

const StyledXAxis = styled.div`
  top: 50%;
  left: 0;
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: black;
`;

export default function Board() {
  return (
    <>
      <StyledCoordinateSystem>
        <StyledXAxis />
        <StyledYAxis />
      </StyledCoordinateSystem>
    </>
  );
}
