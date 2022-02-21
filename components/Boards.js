import { useEffect } from "react";
import { getBoard } from "../services/BoardService";
import { Table, Tag, Space } from "antd";
import { withRouter } from "./WithRouter";

const Boards = ({ boards }) => {
  const columns = [
    {
      title: "Index",
      dataIndex: "seq",
      key: "seq",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Writer",
      dataIndex: "writer",
      key: "writer",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "CreateDate",
      dataIndex: "createDate",
      key: "createDate",
    },
    {
      title: "UpdateDate",
      dataIndex: "updateDate",
      key: "updateDate",
    },
    {
      title: "Cnt",
      dataIndex: "cnt",
      key: "cnt",
    },
    // {
    //   title: "Tags",
    //   key: "tags",
    //   dataIndex: "tags",
    //   render: (tags) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? "greekblue" : "green";
    //         if (tag === "loser") {
    //           color = "volano";
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (text, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];

  console.log("boards length ::: ", boards.length);
  if (boards.length === 0) return null;

  //   const onChange = () => {};

  //   const BoardRow = (board, index) => {
  //     return (
  //       <tr
  //         key={index}
  //         className={index % 2 === 0 ? "odd" : "even"}
  //         // onChange={onChange}
  //       >
  //         <td>{index + 1}</td>
  //         <td>{board.title}</td>
  //         <td>{board.writer}</td>
  //         <td>{board.content}</td>
  //       </tr>
  //     );
  //   };

  //   const boardTable = boards.map((board, index) => BoardRow(board, index));

  return (
    // <>
    //   <h2>Boards</h2>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Board Id</th>
    //         <th>Board Title</th>
    //         <th>Board Writer</th>
    //         <th>Board Content</th>
    //       </tr>
    //     </thead>
    //     <tbody>{boardTable}</tbody>
    //   </table>
    // </>
    <Table columns={columns} dataSource={boards} />
  );
};

export default Boards;

// export const Boards = ({boards}) => {
//     console.log('boards length:::', boards.length)

//     if(boards.length === 0) return null

//     const BoardRow = (board, index) => {

//         return (
//             <tr key = {index} className={index%2 === 0? 'odd' : 'even'}>
//                 <td>{index + 1}</td>
//                 <td>{board.title}</td>
//                 <td>{board.writer}</td>
//                 <td>{board.content}</td>
//             </tr>
//         )
//     }

//     const boardTable = boards.map((board, index) => BoardRow(board, index))

//     return(
//         <div className="container">
//             <h2>Boards</h2>
//             <table className="table table-bordered">
//                 <thead>
//                     <tr>
//                         <th>Board Id</th>
//                         <th>BoardTitle</th>
//                         <th>BoardWriter</th>
//                         <th>BoardContent</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {boardTable}
//                 </tbody>
//             </table>
//         </div>
//     )
// }
