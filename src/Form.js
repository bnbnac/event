import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.input`
  color: black;
  height: 40px;
`;

function Form({ title }) {
  return (
    <Container>
      <h1>{title}</h1>
      <Input placeholder="Hi" onChange={(e) => console.log(e.target.value)} />
    </Container>
  );
}

export default Form;
