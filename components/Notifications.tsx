import React from "react";
import { Button, Container } from "@material-ui/core";

import { useSocket, useSocketUpdate } from "../Store";

const Notifications = () => {
  const { call, callAccepted }: any = useSocket();
  const { answerCall, logout }: any = useSocketUpdate();

  return (
    <Container>
      {call.isReceivingCall && !callAccepted && (
        <div>
          <h1>{call.name} is calling!</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Notifications;
