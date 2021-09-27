import React, { useContext } from "react";
import { Button, Container } from "@material-ui/core";

import styles from "../../styles/CallPageFooter.module.css";

import { SocketContext } from "../../Store";

const CallPageNotifications = () => {
  const { answerCall, call, callAccepted } = useContext<any>(SocketContext);

  return (
    <div className={styles.icon_block_left_item}>
      {call.isReceivingCall && !callAccepted && (
        <div>
          <h1>{call.name} is calling!</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </div>
  );
};

export default CallPageNotifications;
