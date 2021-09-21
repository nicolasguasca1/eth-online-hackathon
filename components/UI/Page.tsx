import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Header from "./Header";

interface IProps {
  children: React.ReactNode;
}

const Page = ({ children }: IProps) => (
  <div className={styles.home_page}>
    <Head>
      <title>Video-Calls ETH POC</title>
      <meta name="description" content="VIDEO-CALLS" />
      <link rel="icon" href="/squared.png" />
    </Head>
    <Header />
    <div>{children}</div>
  </div>
);

export default Page;
