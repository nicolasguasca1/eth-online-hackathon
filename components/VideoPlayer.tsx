import React, { useCallback, useEffect, useState, useContext } from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

import { SocketContext } from "../Store";
import io from "socket.io-client";

import styles from "../styles/CallPage.module.css";

const socket = io(`${process.env.NEXT_PUBLIC_SERVER_URL}`);

const VideoPlayer = (props: any) => {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    setStream,
    setMe,
    setName,
    setCall,
    call,
    user,
    isAdmin,
    isGuest
  }: any = useContext(SocketContext);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        if (myVideo.current) {
          myVideo.current.srcObject = currentStream;
        }
      });

    socket.on("me", (id) => {
      setMe(id);
      setName(user?.attributes.username);
    });

    socket.on("callUser", ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, []);

  useEffect(() => {
    if (isGuest && !callAccepted) {
      <div className={styles.grid_container}>
        <div className={styles.no_match_content}>
          <h2 className={styles.h2_no_match}>
            Please wait until the host of this room let you in.
          </h2>
          <div className={styles.btn_no_match}></div>
        </div>
      </div>;
    } else {
      <div>
        <video className={styles.video} playsInline ref={userVideo} autoPlay />
        <div className={styles.overlay}>
          <h2 className={styles.overlay_h2}>OVERLAY2</h2>
        </div>
      </div>;
    }
  }, []);

  //   return (
  //     <Grid>
  //       {stream && (
  //         <Paper>
  //           <Grid item xs={12} md={6}>
  //             {/* <Typography
  //             variant="h5"
  //             gutterBottom>
  //               {user?.attributes.username}`s Meeting Room
  //             </Typography> */}
  //             <video playsInline muted ref={myVideo} autoPlay />
  //           </Grid>
  //         </Paper>
  //       )}
  //       {callAccepted && !callEnded && (
  //         <Paper className={classes.paper}>
  //           <Grid item xs={12} md={6}>
  //             <Typography variant="h5" gutterBottom>
  //               {call.name || "Name"}
  //             </Typography>
  //             <video
  //               playsInline
  //               ref={userVideo}
  //               autoPlay
  //               className={classes.video}
  //             />
  //           </Grid>
  //         </Paper>
  //       )}
  //     </Grid>
  //   );
  // };

  return (
    <div className={styles.grid_container}>
      {stream && (
        // <Paper>
        //   <Grid item xs={12} md={6}>
        //     {/* <Typography
        //     variant="h5"
        //     gutterBottom>
        //       {user?.attributes.username}`s Meeting Room
        //     </Typography> */}
        //     <video playsInline muted ref={myVideo} autoPlay />
        //   </Grid>
        // </Paper>
        <div>
          <video
            className={styles.video}
            playsInline
            muted
            ref={myVideo}
            autoPlay
          />
          <div className={styles.overlay}>
            <h2 className={styles.overlay_h2}>OVERLAY</h2>
          </div>
        </div>
      )}
      {/* {callAccepted && !callEnded && (
        <div>
          <video
            className={styles.video}
            playsInline
            ref={userVideo}
            autoPlay
          />
          <div className={styles.overlay}>
            <h2 className={styles.overlay_h2}>OVERLAY2</h2>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default VideoPlayer;
