import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";

import Header from "../../components/UI/Header";
import VideoPlayer from "../../components/VideoPlayer";
import Notifications from "../../components/Notifications";
import Options from "../../components/Options";
import Page from "../../components/UI/Page";
import Home from "../home";

import styles from "../../styles/Home.module.css";

import { Button } from "@chakra-ui/react";
import { Container, Heading } from "@chakra-ui/layout";

import { useMoralis } from "react-moralis";

import { Moralis } from "moralis";
import { useEffect } from "react";

const serverUrl = "https://gpcsccfs4eyy.grandmoralis.com:2053/server";
const appId = "nDoAAbLEDLmP9TArw7fXMikJnSTiB4XJlCDkfo4L";

Moralis.initialize(appId);
Moralis.serverURL = serverUrl;

async function getCloud() {
  // Fetch data from external API
  const cloud = await Moralis.Cloud.run("cloud");
  const users = cloud.map((ParseUser: { attributes: { username: any } }) => ({
    params: {
      username: ParseUser.attributes.username
    }
  }));
  console.log(users);
  return users;
  // return cloud;
}
const Call = (props: any) => {
  const { isAuthenticated, logout, user } = useMoralis();
  // const username = user?.attributes.username;
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      <Home />;
    }
  }, [isAuthenticated]);
  getCloud();

  return (
    <>
      <Page>
        {/* <Head>
          <title>Video-Calls ETH POC</title>
          <meta name="description" content="VIDEO-CALLS" />
          <link rel="icon" href="/squared.png" />
        </Head>
        <Header /> */}
        <Container align="center">
          <Heading mb={6}>{user?.attributes.username}`s Meeting Room</Heading>
          <VideoPlayer />
          <Options>
            <Notifications />
          </Options>
          <div className={styles.help_text}>
            <Link passHref href="/">
              <Button
                colorScheme="red"
                variant="solid"
                onClick={() => logout()}
              >
                Logout
              </Button>
            </Link>
          </div>
        </Container>
      </Page>
    </>
  );
};
export default Call;

// SACADO DE YOUTUBE: https://www.youtube.com/watch?v=2zRHlqc0_yw

// export const getStaticPaths: GetStaticPaths = async () => {
//   // const res = await Moralis.Cloud.run("cloud");
//   const res = await fetch(
//     "https://gpcsccfs4eyy.grandmoralis.com:2053/server/classes/_User"
//   );
//   const data = await res.json();
//   const paths = data.map((ParseUser: { attributes: { username: any } }) => ({
//     params: {
//       username: ParseUser.attributes.username
//     }
//   }));
//   return {
//     paths,
//     fallback: false
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ context }: any) => {
//   const objectId = context.params.objectId;
//   // const postData = await getPostData(params.id as string);
//   // const res = await Moralis.Cloud.run("cloud" + objectId);
//   const res = await fetch(
//     "https://gpcsccfs4eyy.grandmoralis.com:2053/server/classes/_User" + objectId
//   );
//   const data = await res.json();
//   return {
//     props: {
//       user: data
//     },
//     revalidate: 1 // In seconds
//   };
// };

// DOCUMENTATION DE NEXT

// export const getStaticPaths: GetStaticPaths = async () => {
//   const data = await getCloud();
//   const paths = data.map((ParseUser: { attributes: { username: any } }) => ({
//     params: {
//       username: ParseUser.attributes.username
//     }
//   }));
//   // const data = await paths.json();
//   return {
//     paths,
//     fallback: false
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }: any) => {
//   const postData = await getPostData(params.id as string);
//   return {
//     props: {
//       postData
//     },
//     revalidate: 1 // In seconds
//   };
// };
