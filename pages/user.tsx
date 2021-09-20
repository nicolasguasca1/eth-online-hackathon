import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/UI/Header";
import styles from "../styles/Home.module.css";

import { Button } from "@chakra-ui/react";
import { Container, Heading } from "@chakra-ui/layout";
import VideoPlayer from "../components/VideoPlayer";
import Notifications from "../components/Notifications";
import Options from "../components/Options";

import { useMoralis } from "react-moralis";

const User = (props: any) => {
  return (
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
  );
};
export default User;
