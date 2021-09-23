import { useState } from "react";
import styles from "../../styles/Messenger.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faUserFriends,
  faCommentAlt,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../utils/helpers";

const Messenger = ({ setIsMessenger, sendMsg, messageList }: any) => {
  const [msg, setMsg] = useState("");

  const handleChangeMsg = (e: any) => {
    setMsg(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      sendMsg(msg);
      setMsg("");
    }
  };

  const handleSendMsg = () => {
    sendMsg(msg);
    setMsg("");
  };

  return (
    <div className={styles.messenger_container}>
      <div className={styles.messenger_header}>
        <h3 className={styles.h3}>Meeting details</h3>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faTimes}
          onClick={() => {
            setIsMessenger(false);
          }}
        />
      </div>

      <div className={styles.messenger_header_tabs}>
        <div className={styles.tab}>
          <FontAwesomeIcon className={styles.icon} icon={faUserFriends} />
          <p>People (1)</p>
        </div>
        <div className={(styles.tab, styles.active)}>
          <FontAwesomeIcon className={styles.icon} icon={faCommentAlt} />
          <p>Chat</p>
        </div>
      </div>

      <div className={styles.chat_section}>
        {messageList.map((item: any) => (
          <div key={item.time} className={styles.chat_block}>
            <div className={styles.sender}>
              {item.user} <small>{formatDate(item.time)}</small>
            </div>
            <p className={styles.msg}>{item.msg}</p>
          </div>
        ))}
      </div>

      <div className={styles.send_msg_section}>
        <input
          placeholder="Send a message to everyone"
          value={msg}
          onChange={(e) => handleChangeMsg(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <FontAwesomeIcon
          className={styles.icon}
          icon={faPaperPlane}
          onClick={handleSendMsg}
        />
      </div>
    </div>
  );
};

export default Messenger;
