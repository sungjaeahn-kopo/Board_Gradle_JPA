import { Table, Tag, Space } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getBoard } from "../services/BoardService";

// const Boards = ({ boards }) => {
const Boards = () => {
  const [boards, setBoards] = useState([]);
  const [numberOfBoards, setNumberOfBoards] = useState(0);
  const [mapping, setMapping] = useState({});

  const columns = [
    {
      title: "Seq",
      dataIndex: "seq",
      key: "seq",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.seq - b.seq,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => (
        <Link
          // board={boards[`{mapping[text]}`].content}
          href={{
            pathname: `/board/${mapping[text]}`,
            query: {
              // boards: boards[`${mapping[text]}` - 1],
              boards: JSON.stringify(boards[`${mapping[text]}` - 1]),
              // boards: JSON.stringify(boards[0]),
            },
          }}
          as={`/board/${mapping[text]}`}

          // as={`/board/${mapping[text]}`}
          // onClick={() => {
          //   console.log("board.seq ::: ", boards.title);
          // router.push : 클라이언트사이드렌더링
          //   router.push(`/board/${mapping[text]}`);
          //   console.log("seq ::: ", mapping[text]);
          // }}
        >
          <a
          // onClick={() => {
          //   console.log("columns ::: ", `${columns["title"]}`);
          //   onClick(`${mapping[text]}`, `${columns}`);
          // }}
          >
            {text}
          </a>
        </Link>
      ),
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

  useEffect(() => {
    getBoard().then((boards) => {
      setBoards(boards);
      setNumberOfBoards(boards.length);
      var mappingTemp = {};
      for (var i = 0; i < boards.length; i++) {
        mappingTemp[boards[i].title] = boards[i].seq;
      }
      setMapping(mappingTemp);
    });

    // console.log("boards ::: ", boards);
    // console.log("router pathname ::: ", router.pathname);
    // console.log("user ::: ", user);
    // console.log("numberOfBoards ::: ", numberOfBoards);
  }, [boards]);

  // console.log("boards.seq ::: ", boards);
  // console.log("boards length ::: ", boards.length);
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

  // const boardTable = boards.map((board, index) => BoardRow(board, index));

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
    // <Table columns={columns} dataSource={boards} />
    <Table
      // onRow={(boards, rowIndex) => {
      //   return {
      //     onClick: (event) => {},
      //   };
      // }}
      // onHeaderRow={(columns, index) => {
      //   return {
      //     onClick: () => {},
      //   };
      // }}
      columns={columns}
      dataSource={boards}
    />
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
