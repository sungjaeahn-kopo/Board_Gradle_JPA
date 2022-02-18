import Boards from './Boards';

const DisplayBoard = ({numberOfBoards, getBoard}) => {

    const length = typeof(getBoard);

    return(
        <div className="display-board">
            <h4>Boards Created</h4>
            <div className="number">
                {numberOfBoards}
            </div>
            <div className="btn">
                {/* <button type="button" onClick={(e) => getBoard()} className="btn btn-warning">Get all Boards</button> */}
                board : {getBoard} {length}
                {/* {boards} */}
                <Boards boards = {getBoard} />
            </div>
        </div>
    )

}

export default DisplayBoard

// export const DisplayBoard = ({numberOfBoards, getBoard}) => {

//     // const router = useRouter();
//     // const board = getBoard();
//     // useEffect(() => {
//     //     router.prefetch('/');
//     //     {board}
//     // }, [])

//     // const [boards, setBoards] = useState([]);

//     // getBoard = () => {
//     //     getBoard()
//     //     .then(response => {
//     //         setBoards({response})
//     //     })




//     //     setBoards(getBoard());
//     // }

//     return(
//         <div className="display-board">
//             <h4>Boards Created</h4>
//             <div className="number">
//                 {numberOfBoards}
//             </div>
//             <div className="btn">
//                 {/* <button type="button" onClick={(e) => getBoard()} className="btn btn-warning">Get all Boards</button> */}
//                 {/* {getBoard} */}
//                 {/* {boards} */}
//                 <Boards boards = {getBoard} />
//             </div>
//         </div>
//     )
// }