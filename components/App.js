import React, { Component, useEffect, useState } from "react";
import { createBoard, getBoard } from "../services/BoardService";
import Boards from "./Boards";
import DisplayBoard from "./DisplayBoard";
import { Header } from "./Header";
import PostBoard from "./PostBoard";

const App = () => {
  //   const [board, setBoard] = useState({});
  //   const [boards, setBoards] = useState([]);
  //   const [numberOfBoards, setNumberOfBoards] = useState(0);

  //   useEffect(() => {
  //     getBoard().then((response) => {
  //       console.log(response);
  //       console.log("타입 : ", typeof response);
  //       setBoards(response);
  //       setNumberOfBoards(response.length);
  //       console.log("boards ::: ", boards);
  //     });
  //     return () => {};
  //   }, []);

  return (
    <div className="App">
      <Header />
      {/* <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">{/* <PostBoard/> */}
    </div>
    //       <div className="col-md-4"></div>
    //     </div>
    //   </div>
    //   <div className="row mrgbtm">
    // {/* <Boards boards={boards}></Boards> */}
    //   </div> */}
    // </div>
  );
};

export default App;

// class App extends Component {

//     state = {
//         board : {},
//         boards : [],
//         numberOfBoards : 0
//     }

//     getBoard = () => {
//         getBoard()
//             .then(boards => {
//                 console.log(boards)
//                 this.setState({boards : boards, numberOfBoards : boards.length})
//             });
//     }

//     createBoard = (e) => {
//         createBoard(this.state.board)
//             .then(response => {
//                 console.log("App data : " + response);
//                 this.setState({numberOfBoards : this.state.numberOfBoards + 1})
//             })
//     }

//     onChangeForm = (e) => {
//         let board = this.state.board
//         console.log("board!! : ", board);
//         if(e.target.name === 'title') {
//             board.title = e.target.value;
//         } else if(e.target.name === 'writer') {
//             board.writer = e.target.value;
//         } else if(e.target.name === 'content') {
//             board.content = e.target.value;
//         }
//         this.setState({board})
//         console.log("changeform 데이터!! : ", board);
//         console.log("board length !! : ", board.length);
//     }

//     render() {

//         return (
//             <div className="App">
//                 <Header></Header>
//                 <div className="container mrgnbtm">
//                     <div className="row">
//                         <div className="col-md-8">
//                             {/* <CreateBoard
//                                 board={this.state.board}
//                                 onChangeForm={this.onChangeForm}
//                                 createBoard={this.createBoard}
//                                 >
//                                 </CreateBoard> */}
//                                 <PostBoard/>
//                         </div>
//                         <div className="col-md-4">
//                             <DisplayBoard
//                                 numberOfBoards={this.state.numberOfBoards}
//                                 getBoard={this.getBoard}
//                                 >
//                                 </DisplayBoard>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row mrgbtm">
//                     <Boards boards={this.state.boards}></Boards>
//                 </div>
//             </div>
//         );
//     }
// }

// export default App;
