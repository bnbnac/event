import styled from "styled-components";
import { Btn } from "./Add";

const Container = styled.div`
  /* display: flex; */
  padding: 15px;
  /* justify-content: space-between; */
  align-items: center;
`;
const Row = styled.div``;
function Range() {
  return (
    <Container>
      <Row>
        betting range
        <input></input>~<input></input>
      </Row>
      <Row>
        population<input></input>
      </Row>
    </Container>
  );
}

export default Range;
