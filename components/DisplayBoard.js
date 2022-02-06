import react from 'react';

export const DisplayBoard = ({numberOfBoards, getBoard}) => {

    return(
        <div className="display-board">
            <h4>Boards Created</h4>
            <div className="number">
                {numberOfBoards}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getBoard()} className="btn btn-warning">Get all Boards</button>
            </div>
        </div>
    )
}