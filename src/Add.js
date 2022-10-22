import { useState } from "react";
import styled from "styled-components";
import { RANGE } from "./CONSTANT";
import Range from "./Range";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightblue;
`;
export const Btn = styled.button`
  margin: 30px;
  font-size: 20px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  padding-bottom: 10px;
`;
const Row = styled.div`
  /* display: flex; */
  align-items: center;
  padding-bottom: 10px;
  background-color: lightpink;
`;
const Column = styled.div`
  display: flex;
`;

// let added = [];

function Add() {
  let [added, setAdded] = useState([]);

  const handleOnClick = () => {
    const now = Date.now();
    setAdded([...added, now]);
  };

  return (
    <Container>
      <Top>
        <h3>유저수 TOTAL : 명</h3>
        <Btn onClick={() => handleOnClick()}>추가</Btn>
      </Top>
      <Row id="add">
        {added.map((id, i) => {
          console.log(id);
          return (
            <div key={id}>
              <Column>
                <Range></Range>
                <Btn>x</Btn>
              </Column>
            </div>
          );
        })}
      </Row>
    </Container>
  );
}

export default Add;
