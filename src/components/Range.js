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
  width: 100px;
  font-size: 12px;
`;

function Range({ setRange, el, range }) {
  const low = (event) => {
    const val = event.target.value;
    setRange((prev) => ({ ...prev, [el]: { ...prev[el], low: val } }));
  };
  const high = (event) => {
    const val = event.target.value;
    setRange((prev) => ({ ...prev, [el]: { ...prev[el], high: val } }));
  };
  const pop = (event) => {
    const val = event.target.value;
    setRange((prev) => ({ ...prev, [el]: { ...prev[el], popul: val } }));
  };

  return (
    <Container>
      <Row>
        betting range
        <Input
          placeholder="n 이상(default 1)"
          onChange={(event) => low(event)}
        ></Input>
        ~
        <Input
          style={{ width: "240px" }}
          placeholder="m 이하(default 9999999 그대로하면 렉걸림)"
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
