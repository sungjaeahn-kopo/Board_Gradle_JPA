
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

export default BoardRow;