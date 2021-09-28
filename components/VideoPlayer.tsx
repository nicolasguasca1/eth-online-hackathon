import React, { useCallback, useEffect, useState, useContext } from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

import { SocketContext } from "../Store";
import { useMoralis } from "react-moralis";

import styles from "../styles/CallPage.module.css";

// const useStyles = makeStyles((theme) => ({
//   video: {
//     width: "550px",
//     [theme.breakpoints.down("xs")]: {
//       width: "300px"
//     }
//   },
//   gridContainer: {
//     borderRadius: "15",
//     justifyContent: "center",
//     [theme.breakpoints.down("xs")]: {
//       flexDirection: "column"
//     }
//   },
//   paper: {
//     padding: "10px",
//     border: "2px solid gray",
//     margin: "10px"
//   }
// }));

const VideoPlayer = (props: any) => {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call
  }: any = useContext(SocketContext);
  const { isAuthenticated, logout, user } = useMoralis();

  // const classes = useStyles();

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
      {callAccepted && !callEnded && (
        // <Paper className={classes.paper}>
        //   <Grid item xs={12} md={6}>
        //     <Typography variant="h5" gutterBottom>
        //       {call.name || "Name"}
        //     </Typography>
        //     <video
        //       playsInline
        //       ref={userVideo}
        //       autoPlay
        //       className={classes.video}
        //     />
        //   </Grid>
        // </Paper>
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
      )}
    </div>
  );
};

export default VideoPlayer;
