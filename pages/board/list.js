import { useEffect, useState } from "react";
import Boards from "../../components/Boards";
import { Header } from "../../components/Header";
import { getBoard } from "../../services/BoardService";

const BoardList = () => {
  const [board, setBoard] = useState({});
  const [boards, setBoards] = useState([]);
  const [numberOfBoards, setNumberOfBoards] = useState(0);

  // useEffect(() => {
  //   getBoard().then((response) => {
  //     console.log(response);
  //     console.log("타입 : ", typeof response);
  //     setBoards(response);
  //     setNumberOfBoards(response.length);
  //     console.log("boards ::: ", boards);
  //   });
  //   return () => {};
  // }, [boards]);

  return (
    <>
      <Header />
      {/* <Boards boards={boards}></Boards> */}
    </>
  );
};

export default BoardList;

// export default function BoardList() {

//     const state = useState('');
//     getBoard = () => {
//         getBoard()
//             .then(boards => {
//                 console.log(boards)
//                 this.setState({boards : boards, numberOfBoards : boards.length})
//             });
//     }

//     return (
//         <>
//             <Header />
//             <DisplayBoard
//             numberOfBoards={this.state.numberOfBoards}
//             getBoard={this.getBoard} />
//         </>
//     )
// }
