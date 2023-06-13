import { useState } from 'react';
import { useEffect} from 'react';
import IndexToNotation from './IndexToNotation';


function ButtonSet({value, onButtonClick}) {
  return(
    <button onClick={onButtonClick}>
      {value} Moves
    </button>
  )
}

function ButtonStart({onButtonClick}) {
  return(
    <button onClick={onButtonClick}>
      Start Button
    </button>
  )
}
// i is the handleclick box , z is the correct answer
function NotationTest (i, z) {
  if (i == z) {
    console.log ('Good Job')
    return true
  }
  else { 
    console.log ('Wrong Square')
    wrongNum++;
    return false
  }
}
let Time0 = 0
function startGame(str,count,newArr) {
  if (count == 0) {
    console.log('BEGIN')
    wrongNum=0
    Time0 = Date.now()
  }
}

function RandomizeSelectionArray (num) {
  let arr = Array(num).fill(null);
  let z = 0;
  while (z<num) {
    arr[z] = Math.floor(Math.random() * 64);
    z++;
  }
  return arr
}

function Square1({value, onSquareClick}) {
  return(
    <button className="square1" onClick={onSquareClick}>
      {value}
    </button>
  )
}
function Square2({value, onSquareClick}) {
  return(
    <button className="square2" onClick={onSquareClick}>
      {value}
    </button>
  )
}
// variable declaration: number wrong, a for iterrating, set up for resetting array, newArr move list arr
console.log('Starting up...')
let wrongNum = 0
let a = 0
let setUp = true
let newArr = []
export default function Board() {
  const [squares, setSquares] = useState(Array(64).fill(null));
  var [n, setN] = useState(0);
  var [str, setStr] = useState('');
  if ( setUp == true && n != 0 ) {
    console.log('Number of moves has been set', n)
    newArr = RandomizeSelectionArray(n);
    setStr(IndexToNotation(newArr[0]))
    setUp = false
  }
  function handleSet(i) {
    setN(i)
  }
  function handleClick(i) {
    if(i == 99) {
      startGame(str,a,newArr)
      setStr(IndexToNotation(newArr[0]))
    }
    else{
      setN(n);
      if(NotationTest(i,newArr[a])) {
        a++;
        if(a!=n) {
            setStr(IndexToNotation(newArr[a]));
        }
        console.log(str, "AFTER")
        if(a==newArr.length) {
          console.log('Congrats')
          console.log('Errors:', wrongNum)
          // a is equal to the number of test locations n=2 means a=2
          const TimeF = Date.now()
          const millis = (TimeF - Time0);
          console.log('Time elapsed:', millis/1000)
          // 5 is the current amount of time added per mistake will change to a variable
          console.log('Adjusted time:', ((millis/1000)+wrongNum*5))
          // Reset variables
          setN(0)
          newArr = []
          setStr('')
          a = 0
          setUp = true
          wrongNum = 0
          console.log('RESETTING')
        }
        else {console.log('Round:', a+1);}
      }
      else {return}
    }
  }
  return (
    <>
      <div className="status">BLACK SIDE</div>
      <div className="board-row">
        <Square1 value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square2 value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square1 value={squares[2]} onSquareClick={() => handleClick(2)}/>
        <Square2 value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square1 value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square2 value={squares[5]} onSquareClick={() => handleClick(5)}/>
        <Square1 value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square2 value={squares[7]} onSquareClick={() => handleClick(7)}/>
      </div>
      <div className="board-row">
        <Square2 value={squares[8]} onSquareClick={() => handleClick(8)}/>
        <Square1 value={squares[9]} onSquareClick={() => handleClick(9)}/>
        <Square2 value={squares[10]} onSquareClick={() => handleClick(10)}/>
        <Square1 value={squares[11]} onSquareClick={() => handleClick(11)}/>
        <Square2 value={squares[12]} onSquareClick={() => handleClick(12)}/>
        <Square1 value={squares[13]} onSquareClick={() => handleClick(13)}/>
        <Square2 value={squares[14]} onSquareClick={() => handleClick(14)}/>
        <Square1 value={squares[15]} onSquareClick={() => handleClick(15)}/>
      </div>
      <div className="board-row">
        <Square1 value={squares[16]} onSquareClick={() => handleClick(16)}/>
        <Square2 value={squares[17]} onSquareClick={() => handleClick(17)}/>
        <Square1 value={squares[18]} onSquareClick={() => handleClick(18)}/>
        <Square2 value={squares[19]} onSquareClick={() => handleClick(19)}/>
        <Square1 value={squares[20]} onSquareClick={() => handleClick(20)}/>
        <Square2 value={squares[21]} onSquareClick={() => handleClick(21)}/>
        <Square1 value={squares[22]} onSquareClick={() => handleClick(22)}/>
        <Square2 value={squares[23]} onSquareClick={() => handleClick(23)}/>
      </div>
      <div className="board-row">
        <Square2 value={squares[24]} onSquareClick={() => handleClick(24)}/>
        <Square1 value={squares[25]} onSquareClick={() => handleClick(25)}/>
        <Square2 value={squares[26]} onSquareClick={() => handleClick(26)}/>
        <Square1 value={squares[27]} onSquareClick={() => handleClick(27)}/>
        <Square2 value={squares[28]} onSquareClick={() => handleClick(28)}/>
        <Square1 value={squares[29]} onSquareClick={() => handleClick(29)}/>
        <Square2 value={squares[30]} onSquareClick={() => handleClick(30)}/>
        <Square1 value={squares[31]} onSquareClick={() => handleClick(31)}/>
      </div>
      <div className="board-row">
        <Square1 value={squares[32]} onSquareClick={() => handleClick(32)}/>
        <Square2 value={squares[33]} onSquareClick={() => handleClick(33)}/>
        <Square1 value={squares[34]} onSquareClick={() => handleClick(34)}/>
        <Square2 value={squares[35]} onSquareClick={() => handleClick(35)}/>
        <Square1 value={squares[36]} onSquareClick={() => handleClick(36)}/>
        <Square2 value={squares[37]} onSquareClick={() => handleClick(37)}/>
        <Square1 value={squares[38]} onSquareClick={() => handleClick(38)}/>
        <Square2 value={squares[39]} onSquareClick={() => handleClick(39)}/>
      </div>
      <div className="board-row">
        <Square2 value={squares[40]} onSquareClick={() => handleClick(40)}/>
        <Square1 value={squares[41]} onSquareClick={() => handleClick(41)}/>
        <Square2 value={squares[42]} onSquareClick={() => handleClick(42)}/>
        <Square1 value={squares[43]} onSquareClick={() => handleClick(43)}/>
        <Square2 value={squares[44]} onSquareClick={() => handleClick(44)}/>
        <Square1 value={squares[45]} onSquareClick={() => handleClick(45)}/>
        <Square2 value={squares[46]} onSquareClick={() => handleClick(46)}/>
        <Square1 value={squares[47]} onSquareClick={() => handleClick(47)}/>
      </div>
      <div className="board-row">
        <Square1 value={squares[48]} onSquareClick={() => handleClick(48)}/>
        <Square2 value={squares[49]} onSquareClick={() => handleClick(49)}/>
        <Square1 value={squares[50]} onSquareClick={() => handleClick(50)}/>
        <Square2 value={squares[51]} onSquareClick={() => handleClick(51)}/>
        <Square1 value={squares[52]} onSquareClick={() => handleClick(52)}/>
        <Square2 value={squares[53]} onSquareClick={() => handleClick(53)}/>
        <Square1 value={squares[54]} onSquareClick={() => handleClick(54)}/>
        <Square2 value={squares[55]} onSquareClick={() => handleClick(55)}/>
      </div>
      <div className="board-row">
        <Square2 value={squares[56]} onSquareClick={() => handleClick(56)}/>
        <Square1 value={squares[57]} onSquareClick={() => handleClick(57)}/>
        <Square2 value={squares[58]} onSquareClick={() => handleClick(58)}/>
        <Square1 value={squares[59]} onSquareClick={() => handleClick(59)}/>
        <Square2 value={squares[60]} onSquareClick={() => handleClick(60)}/>
        <Square1 value={squares[61]} onSquareClick={() => handleClick(61)}/>
        <Square2 value={squares[62]} onSquareClick={() => handleClick(62)}/>
        <Square1 value={squares[63]} onSquareClick={() => handleClick(63)}/>
      </div>
      <div className="status">WHITE SIDE</div>
      <div> <ButtonSet value={2} onButtonClick={() => handleSet(2)}/> </div>
      <div> <ButtonSet value={10} onButtonClick={() => handleSet(10)}/> </div>
      <div> <ButtonSet value={20} onButtonClick={() => handleSet(20)}/> </div>
      <div> <ButtonStart value={true} onButtonClick={() => handleClick(99)}/> </div>
      <div className="status"> Next element: { str }</div>
    </>
  );
}