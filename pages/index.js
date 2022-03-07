import Head from "next/head";
import Image from "next/image";
import App from "../components/App";
import styles from "../styles/Home.module.css";
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
