import styled from "styled-components";
import { CYCLIC } from "./CONSTANT";

const Container = styled.div`
  display: flex;
  padding: 15px;
  /* justify-content: space-between; */
  align-items: center;
`;
const Input = styled.input`
  color: black;
  height: 40px;
  margin: 30px;
`;

function Form({ title }) {
  return (
    <Container>
      <h1>{title}</h1>
      <Input
        placeholder={title}
        onChange={(e) => localStorage.setItem(CYCLIC, e.target.value)}
      />
    </Container>
  );
}

export default Form;
