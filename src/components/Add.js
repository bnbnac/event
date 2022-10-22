import { useEffect, useState } from "react";
import styled from "styled-components";
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
  /* background-color: lightpink; */
`;
const Column = styled.div`
  display: flex;
`;
const Head = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
`;

// let added = [];

function Add({ added, setAdded, range, setRange }) {
  const handleAdd = () => {
    const now = Date.now();
    const nowString = now.toString();
    setAdded([...added, now]);
    setRange({ ...range, [nowString]: { low: 0, high: 9999999, popul: 0 } });
  };
  const handleDelete = (e) => {
    const tar = e.target.parentElement.id;
    const deletedAdded = [...added];
    const index = deletedAdded.indexOf(parseInt(tar));
    if (index !== -1) {
      deletedAdded.splice(index, 1);
    }
    setAdded(deletedAdded);

    const deletedRange = { ...range };
    delete deletedRange[tar];
    setRange(deletedRange);
  };

  const [total, setTotal] = useState(0);
  let sum = 0;
  useEffect(() => {
    sum = 0;
    added.map((e) => {
      sum += parseInt(range[e].popul);
      setTotal(sum);
    });
  }, [range]);

  return (
    <Container>
      <Top>
        <Row>
          <Head>Max : {}</Head>
          <Head>TOTAL : {total}명</Head>
        </Row>
        <Btn onClick={() => handleAdd()}>범위추가</Btn>
      </Top>
      <Row id="add">
        {added.map((el) => {
          return (
            <div key={el}>
              <>-------------------------------------------------</>
              <Column id={el}>
                <Range setRange={setRange} el={el} range={range}></Range>
                <Btn onClick={(event) => handleDelete(event)}>x</Btn>
              </Column>
            </div>
          );
        })}
      </Row>
    </Container>
  );
}

export default Add;
