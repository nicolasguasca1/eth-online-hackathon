import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faTimes,
  faUser,
  faShieldAlt
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/MeetingInfo.module.css";

const MeetingInfo = ({ setMeetInfoPopup, url }: any) => {
  return (
    <div className={styles.meeting_info_block}>
      <div className={styles.meeting_header}>
        <h3 className={styles.h3}>Your meeting`s ready</h3>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faTimes}
          onClick={() => {
            setMeetInfoPopup(false);
          }}
        />
      </div>
      <button className={styles.add_people_btn}>
        <FontAwesomeIcon className={styles.icon_add_ppl} icon={faUser} />
        Add Others
      </button>
      <p className={styles.info_text}>
        Or share this meeting link with others you want in the meeting
      </p>
      <div className={styles.meet_link}>
        <span className={styles.span}>{url}</span>
        <FontAwesomeIcon
          className={styles.icon_span_meet_link}
          icon={faCopy}
          onClick={() => navigator.clipboard.writeText(url)}
        />
      </div>
      <div className={styles.permission_text}>
        <FontAwesomeIcon
          className={`${styles.icon_permission} ${styles.red}`}
          icon={faShieldAlt}
        />
        <p className={styles.small_text}>
          People who use this meeting link must get your permission before they
          can join.
        </p>
      </div>
      <p className={styles.small_text}>Joined as akshay@gmail.com</p>
    </div>
  );
};

export default MeetingInfo;
