import react from "react";

export const Boards = ({boards}) => {
    console.log('boards length:::', boards.length)
    
    if(boards.length === 0) return null
    
    const BoardRow = (board, index) => {

        return (
            <tr key = {index} className={index%2 === 0? 'odd' : 'even'}>
                <td>{index + 1}</td>
                <td>{board.title}</td>
                <td>{board.writer}</td>
                <td>{board.content}</td>
            </tr>
        )
    }

    const boardTable = boards.map((board, index) => BoardRow(board, index))

    return(
        <div className="container">
            <h2>Boards</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Board Id</th>
                        <th>BoardTitle</th>
                        <th>BoardWriter</th>
                        <th>BoardContent</th>
                    </tr>
                </thead>
                <tbody>
                    {boardTable}
                </tbody>
            </table>
        </div>
    )
}