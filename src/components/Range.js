import styled from "styled-components";

const Container = styled.div`
  /* display: flex; */
  padding: 15px;
  /* justify-content: space-between; */
  align-items: center;
`;
const Row = styled.div``;
const Input = styled.input`
  margin: 5px;
  width: 130px;
  font-size: 12px;
`;

function Range({ setRange, el, range }) {
  const low = (event) => {
    const val = event.target.value;
    setRange((prev) => ({ ...prev, [el]: { ...prev[el], low: val } }));
    console.log(range);
  };
  const high = (event) => {
    const val = event.target.value;
    setRange((prev) => ({ ...prev, [el]: { ...prev[el], high: val } }));
    console.log(range);
  };
  const pop = (event) => {
    const val = event.target.value;
    setRange((prev) => ({ ...prev, [el]: { ...prev[el], popul: val } }));
    console.log(range);
  };

  return (
    <Container>
      <Row>
        betting range
        <Input
          placeholder="n 이상(default 0)"
          onChange={(event) => low(event)}
        ></Input>
        ~
        <Input
          placeholder="m 이하(default 9999999)"
          onChange={(event) => high(event)}
        ></Input>
      </Row>
      <Row>
        population
        <Input onChange={(event) => pop(event)}></Input>
      </Row>
    </Container>
  );
}

export default Range;
