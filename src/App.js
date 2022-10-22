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
  word-break: break-all;
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
    let x = 0;
    let z = 0;
    const visited = [1];
    const answer = [];
    while (i < 9999999) {
      visited.push(0);
      i += 1;
    }

    // let user = 0;
    let maxi = 0;
    let id = "";
    let pick = [];
    const leng = added.length;
    while (z < leng) {
      j = 0;
      id = added[z];

      const user = parseInt(range[id].popul);
      const high = parseInt(range[id].high);
      const low = parseInt(range[id].low);

      while (j < user) {
        k = 0;
        l = 0;
        pick = [];
        // j-th user pick 15 numbers without repeat
        while (k < 15) {
          const now = Math.floor(Math.random() * (high - low) + low + 1);
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
      maxi = Math.max(maxi, high);
      z += 1;
    }

    // console unvisited idx
    console.log("unvisitied");
    while (m <= maxi && x < 50) {
      if (visited[m] === 0) {
        answer.push(m);
        x += 1;
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
        <Form title={"회차 수(default 1)"} />
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
        {luck ? (luck.toString ? luck[0] : "Max Over") : ""}
      </Head>
      <Head> max보다 작은 번호 중 뽑히지 않은 번호(하위 50개까지만 표시)</Head>
      <Head style={{ color: "green" }}>
        {luck ? (luck.toString() ? luck.toString() : "다 찼습니다.") : ""}
      </Head>
    </Container>
  );
}

export default App;
