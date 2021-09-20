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

import styles from "../styles/Home.module.css";

import { Button } from "@chakra-ui/react";
import { Container, Heading } from "@chakra-ui/layout";

import { useMoralis } from "react-moralis";

import { Moralis } from "moralis";

const serverUrl = "https://gpcsccfs4eyy.grandmoralis.com:2053/server";
const appId = "nDoAAbLEDLmP9TArw7fXMikJnSTiB4XJlCDkfo4L";

Moralis.initialize(appId);
Moralis.serverURL = serverUrl;

async function getCloud() {
  // Fetch data from external API
  const cloud = await Moralis.Cloud.run("cloud");
  // console.log(cloud);
  // const users = cloud.map((ParseUser: { attributes: { username: any } }) => ({
  //   params: {
  //     username: ParseUser.attributes.username
  //   }
  // }));
  // return users;
  return cloud;
}
const Call = (props: any) => {
  // const router = useRouter();
  // const { id } = router.query;
  getCloud();
  console.log(getCloud());

  return (
    <>
      <Header />
      <Container align="center">
        <Heading mb={6}>
          Welcome to the decentralized LIVE Web {props.username}!
        </Heading>
        <Button onClick={() => logout()}>Logout</Button>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </Container>
    </>
  );
};
export default Call;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getCloud();
  const paths = data.map((ParseUser: { attributes: { username: any } }) => ({
    params: {
      username: ParseUser.attributes.username
    }
  }));
  // const data = await paths.json();
  return {
    paths,
    fallback: false
  };
};

// export const getStaticProps: GetStaticProps = async ({ params }: any) => {
//   const postData = await getPostData(params.id as string);
//   return {
//     props: {
//       postData
//     },
//     revalidate: 1 // In seconds
//   };
// };
