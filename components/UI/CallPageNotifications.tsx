import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";

import styles from "../../styles/CallPageFooter.module.css";

import { useSocket, useSocketUpdate } from "../../Store";

const CallPageNotifications = () => {
  const {
    call,
    callAccepted,
    isAdmin,
    myVideo,
    isAuthenticated,
    isUnauthenticated,
    user
  }: any = useSocket();
  const { answerCall }: any = useSocketUpdate();

  return (
    <div className={styles.icon_block_left_item}>
      {call.isReceivingCall && !callAccepted && (
        <div>
          <h1>{user?.attributes.username} wants to join your room!</h1>
          <Button colorScheme="teal" variant="outline" onClick={answerCall}>
            Accept
          </Button>
        </div>
      )}
    </div>
  );
};

export default CallPageNotifications;
