import { useState } from "react";
import { DisplayBoard } from "../../components/DisplayBoard"
import { Header } from "../../components/Header"
import { getBoard } from "../../services/BoardService";

const BoardList = () => {

    const [boards, setBoards] = useState(getBoard);
    const [numberOfBoards, setNumberOfBoards] = useState('');

    // getBoard = () => {
    //     getBoard(boards)
    //     .then(boards => {
    //         console.log('결과값 : ', boards)
    //         setBoards(getBoard({boards, numberOfBoards}));
    //     })
    // }

    return (
        <>
            <Header />
            <DisplayBoard 
            numberOfBoards={numberOfBoards}
            getBoard={boards} />
        </>
    )
}

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