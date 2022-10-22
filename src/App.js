import styled from "styled-components";
import Add, { Btn } from "./Add";
import Form from "./Form";

const Container = styled.div`
  background-color: lightgray;
  width: 700px;
  margin: 30px;
  padding: 30px;
`;

function App() {
  const run = () => {
    let i = 0;
    let j = 0;
    let m = 0;
    let k = 0;
    let l = 0;
    const visited = [];
    const user = 300000;
    const expected = 350000;

    // generate Array length with expected
    // to check picked number
    while (i < expected) {
      visited.push(0);
      i += 1;
    }

    while (j < user) {
      k = 0;
      l = 0;
      const pick = [];

      // j-th user pick 15 numbers without repeat
      while (k < 15) {
        const now = Math.round(Math.random() * expected);
        if (!pick.includes(now)) {
          pick.push(now);
          k += 1;
        }
      }
      // j-th user visit his picked number
      while (l < 15) {
        visited[pick[l]] = 1;
        l += 1;
      }
      j += 1;
    }
    // console unvisited idx
    console.log("unvisitied");
    while (m < expected) {
      if (visited[m] === 0) {
        // avoid zero
        console.log(m + 1);
      }
      m += 1;
    }
  };

  return (
    <Container>
      <Form title={"회차 수"} />
      <Add />
      <h2>-----------------</h2>
      <h2>
        <div>회차당 티켓 수 15</div>
        <Btn onClick={() => run()}>Run</Btn>
      </h2>
      <h2>-----------------</h2>
      <h2>당첨번호 over?</h2>
    </Container>
  );
}

export default App;
