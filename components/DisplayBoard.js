import { useRouter } from 'next/router';
import react, { useState } from 'react';
import Boards from './Boards';

export const DisplayBoard = ({numberOfBoards, getBoard}) => {

    // const router = useRouter();
    // const board = getBoard();
    // useEffect(() => {
    //     router.prefetch('/');
    //     {board}
    // }, [])

    const [boards, setBoards] = useState(Boards);

    // getBoard = () => {
    //     setBoards(getBoard());
    // }

    return(
        <div className="display-board">
            <h4>Boards Created</h4>
            <div className="number">
                {numberOfBoards}
            </div>
            <div className="btn">
                {/* <button type="button" onClick={(e) => getBoard()} className="btn btn-warning">Get all Boards</button> */}
                {/* {getBoard()} */}
                {/* {boards} */}
                <Boards boards = {boards} />
            </div>
        </div>
    )
}