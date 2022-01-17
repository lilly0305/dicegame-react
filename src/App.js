import logoImg from './assets/logo.png'


// state 사용하려면 불러와야 함 - 화면을 새롭게 rendering할 때 필요한 기능
import { useState } from 'react';
import Board from "./Board";
import Button from './Button';
import './App.css';

// 랜덤 n을 뽑아내는 함수
function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);
    
  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);

    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className="App">
      <div>
        <img className="App-logo" src={logoImg} alt="주사위게임 로고" />
        <h1 className="App-title">주사위게임</h1>
        <div>
          <Button className='App-button' color='blue' onClick={handleRollClick}>던지기</Button>
          <Button className='App-button' color='red' onClick={handleClearClick}>처음부터</Button>
        </div>
      </div>

      <div className="App-boards">
        <div className="Board App-board">
          <Board name="나" color="blue" gameHistory={myHistory} />
        </div>
        <div className="Board App-board">
          <Board name="상대" color="red" gameHistory={otherHistory} />
        </div>
      </div>
    </div>
  )
}

export default App;