import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { BoardBreadcrumb } from "../../components/BoardBreadcrumb";
import Boards from "../../components/Boards";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { Sider } from "../../components/Sider";

const BoardList = () => {
  // const [board, setBoard] = useState({});
  // const [boards, setBoards] = useState([]);
  // const [numberOfBoards, setNumberOfBoards] = useState(0);

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
      <Layout>
        <NavBar />
        <Layout>
          <Sider />
          <Layout style={{ padding: "0 24px 24px" }}>
            <BoardBreadcrumb />
            <Content
              className="site-layout-background"
              style={{
                padding: 30,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Boards />
            </Content>
          </Layout>
        </Layout>
      </Layout>
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
