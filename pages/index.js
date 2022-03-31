import App from "../components/App";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return <App />;
}

// export async function getServerSideProps() {
//   const { board } = await (await fetch("/api/board")).json();
//   return {
//     props: {
//       board,
//     },
//   };
// }
