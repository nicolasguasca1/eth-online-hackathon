import React, { useState, useContext } from "react";
// import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
// import shortid from "shortid";
// import "./HomePage.scss";
import Header from "../../components/UI/Header";

import { SocketContext } from "../../Context";

import { useRouter } from "next/router";
import Link from "next/link";

const Dashboard = () => {
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
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>Premium video meetings. Now free for everyone.</h2>
            <p>
              We re-engineered the service we built for secure business
              meetings, Google Meet, to make it free and available for all.
            </p>
            <div className="action-btn">
              <Link
                className="btn green"
                href="/call/[userId]"
                as={`/call/${me}`}
              >
                {/* <FontAwesomeIcon className="icon-block" icon={faVideo} /> */}
                New Meeting
              </Link>
              <div className="input-block">
                <div className="input-section">
                  <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                  <input placeholder="Enter a code or link" />
                </div>
                <button className="btn no-bg">Join</button>
              </div>
            </div>
          </div>
          <div className="help-text">
            <a href="/">Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
