import { useState } from "react";
import styled from "styled-components";
import Add, { Btn } from "./components/Add";
import Form from "./components/Form";

const Container = styled.div`
  background-color: lightgray;
  width: 700px;
  margin: 30px;
  padding: 30px;
`;
const Head = styled.h1`
  font-size: 30px;
`;

function App() {
  const [added, setAdded] = useState([]);
  const [range, setRange] = useState({});

  const run = () => {
    let i = 0;
    let j = 0;
    let m = 0;
    let k = 0;
    let l = 0;
    const visited = [];
    const answer = [];
    let user = 0;
    added.map((e) => {
      user += parseInt(range[e].popul);
    });
    let expected = 0;
    added.map((e) => {
      expected = Math.max(expected, parseInt(range[e].high));
    });

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
        answer.push(m + 1);
      }
      m += 1;
    }
    console.log(answer);
    return answer;
  };

  const [luck, setLuck] = useState();
  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Form title={"회차 수"} />
        <div>회차당 티켓 수 15</div>
        <div>-----------------</div>
        <Add
          added={added}
          setAdded={setAdded}
          range={range}
          setRange={setRange}
        />
        <div>-----------------</div>
        <div>
          <Btn
            style={{ color: "red", fontSize: "40px" }}
            onClick={() => setLuck(run())}
          >
            Run
          </Btn>
        </div>
      </form>
      <div>-----------------</div>
      <Head>당첨번호</Head>
      <Head style={{ color: "blue" }}>
        {luck.toString() ? luck[0] : "Max Over"}
      </Head>
      <Head>보다 작은 번호 중 비어있는 번호 (max:{})</Head>
      <Head style={{ color: "green" }}>
        {luck.toString() ? luck.toString() : "다 찼습니다."}
      </Head>
    </Container>
  );
}

export default App;
