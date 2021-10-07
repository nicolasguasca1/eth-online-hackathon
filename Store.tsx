import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useContext
} from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

import { useRouter } from "next/router";

import { useMoralis } from "react-moralis";

const SocketContext = createContext({});
const SocketUpdateContext = createContext({});

const socket = io(`${process.env.NEXT_PUBLIC_SERVER_URL}`);

// const socket = io("https://warm-wildwood-81069.herokuapp.com");

function useSocket() {
  const useSocket = useContext(SocketContext);
  if (useSocket === undefined) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return useSocket;
}

function useSocketUpdate() {
  const useSocketUpdate = useContext(SocketUpdateContext);
  if (useSocketUpdate === undefined) {
    throw new Error("useSocketUpdate must be used within a SocketProvider");
  }
  return useSocketUpdate;
}

const ContextProvider = ({ children }: any) => {
  const router = useRouter();
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState<MediaStream>();
  const [name, setName] = useState("");
  const [call, setCall] = useState<any>({});
  const [me, setMe] = useState("");
  const [isAdmin, setAdmin] = useState(false);
  const [isGuest, setGuest] = useState(false);
  const [idToCall, setIdToCall] = useState("");

  const myVideo = useRef<HTMLVideoElement>(null!);
  const userVideo = useRef<HTMLVideoElement>(null!);
  const connectionRef = useRef<Peer.Instance>(null!);

  // EXPERIMENTAL
  const {
    isAuthenticated,
    isUnauthenticated,
    logout,
    user,
    authenticate,
    isAuthenticating,
    authError,
    signup,
    login
  } = useMoralis();

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
    });

    socket.on("callUser", ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, []);

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: call.from });
    });

    peer.on("stream", (currentStream) => {
      if (userVideo.current) userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id: String) => {
    // setAdmin(false);
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on("signal", async (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name
      });
    });

    peer.on("stream", (currentStream) => {
      if (userVideo.current) userVideo.current.srcObject = currentStream;
    });

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });
    if (connectionRef.current) connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    setAdmin(false);
    if (connectionRef.current) connectionRef.current.destroy();
    // if (typeof window !== "undefined") window.location.reload();
    router.push("/home");
  };

  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        callEnded,
        me,
        isAdmin,
        router,
        isGuest,
        user,
        isAuthenticated,
        isUnauthenticated,
        isAuthenticating,
        authError,
        idToCall
      }}
    >
      <SocketUpdateContext.Provider
        value={{
          callUser,
          leaveCall,
          answerCall,
          setName,
          setAdmin,
          setGuest,
          logout,
          authenticate,
          signup,
          login,
          setIdToCall
        }}
      >
        {children}
      </SocketUpdateContext.Provider>
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext, useSocket, useSocketUpdate };
