import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 15px;
  /* justify-content: space-between; */
  align-items: center;
`;
const Input = styled.input`
  color: black;
  margin: 30px;
  width: 300px;
`;

function Form({ title }) {
  return (
    <Container>
      <h1>{title}</h1>
      <Input
        placeholder={"회차수는 어려워서 구현안함 ^^~"}
        onChange={(e) => localStorage.setItem("cyclic", e.target.value)}
      />
    </Container>
  );
}

export default Form;
