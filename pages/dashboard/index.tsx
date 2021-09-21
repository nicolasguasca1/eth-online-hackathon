import React, { useState, useContext } from "react";
// import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
// import shortid from "shortid";
// import "./HomePage.scss";
import Page from "../../components/UI/Page";
import { Input, Button } from "@chakra-ui/react";

import styles from "../../styles/Home.module.css";

import { SocketContext } from "../../Context";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import profilePic from "/Users/nicolasguascasantamaria/Documents/GitHub/eth-online-hackathon/public/picture.jpg";

const Dashboard = (props: any) => {
  // const history = useHistory();
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext<any>(SocketContext);
  // const startCall = () => {
  //   const uid = shortid.generate();
  //   history.push(`/${uid}#init`);
  // };
  const router = useRouter();
  const { id } = router.query;

  return (
    <Page>
      <div className={styles.left_side}>
        <div>
          <h2 className={styles.h2}>Peer to peer meetings.</h2>
          <p className={styles.p}>
            By using Callties, you are able to convert a meeting into a
            live-video creative factory. By pressing `New meeting`, you accept
            and acknowledge you are not using copyrighted content to make your
            creations.
          </p>
          <div className={styles.action_btn}>
            <Button
              className={styles.btn}
              onClick={<Link href="/call/[userId]" as={`/call/${me}`}></Link>}
            >
              {/* <FontAwesomeIcon className={styles.icon_block} icon={faVideo} /> */}
              New Meeting
            </Button>
            <div className={styles.input_block}>
              <div className={styles.input_section}>
                <Input
                  className={styles.input_block}
                  placeholder="Enter a code or link"
                />
                {/* <FontAwesomeIcon
                  className={styles.icon_block}
                  icon={faKeyboard}
                /> */}
              </div>
              <button className={styles.btn}>Join</button>
            </div>
          </div>
        </div>
        <div className={styles.help_text}>
          <Link href="/">Home</Link>
        </div>
      </div>
      <div className={styles.right_side}>
        <div>
          <Image
            className={styles.img}
            width="1024"
            height="681"
            src={profilePic}
            alt="The bunch of computers that run the world"
          />
        </div>
      </div>
    </Page>
  );
};
export default Dashboard;
