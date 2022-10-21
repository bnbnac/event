import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: right;
  padding: 20px;
  background-color: lightblue;
`;
export const Btn = styled.button`
  /* width: 50px; */
  font-size: 30px;
`;

const handleOnClick = () => {
  console.log("clicked");
};

function Add() {
  return (
    <Container>
      <h3>유저수 total : 명</h3>
      <Btn onClick={() => handleOnClick()}>추가</Btn>
    </Container>
  );
}

export default Add;
