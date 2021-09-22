import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMicrophone,
  faPhone,
  faAngleUp,
  faClosedCaptioning,
  faDesktop,
  faMicrophoneSlash
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/CallPageFooter.module.css";

const CallPageFooter = ({
  isPresenting,
  stopScreenShare,
  screenShare,
  isAudio,
  toggleAudio,
  disconnectCall
}) => {
  return (
    <div className={styles.footer_item}>
      <div className={styles.left_item}>
        <div className={styles.icon_block_left_item}>
          Meeting details
          <FontAwesomeIcon className={styles.icon_left_item} icon={faAngleUp} />
        </div>
      </div>
      <div className={styles.center_item}>
        <div
          className={`${styles.icon_block_cent_item} ${
            !isAudio ? styles.red_bg : null
          }`}
          //   className={`icon-block ${!isAudio ? "red-bg" : null}`}
          onClick={() => toggleAudio(!isAudio)}
        >
          <FontAwesomeIcon
            className={styles.icon_cent_item}
            icon={isAudio ? faMicrophone : faMicrophoneSlash}
          />
        </div>
        <div className={styles.icon_block_cent_item} onClick={disconnectCall}>
          <FontAwesomeIcon
            className={`${styles.icon_cent_item} ${styles.red}`}
            icon={faPhone}
          />
        </div>
        <div className={styles.icon_block_cent_item}>
          <FontAwesomeIcon className={styles.icon_cent_item} icon={faVideo} />
        </div>
      </div>
      <div className={styles.right_item}>
        <div className={styles.icon_block_right_item}>
          <FontAwesomeIcon
            className={`${styles.icon_right_item} ${styles.red}`}
            icon={faClosedCaptioning}
          />
          <p className={styles.title}>Turn on captions</p>
        </div>

        {isPresenting ? (
          <div
            className={styles.icon_block_right_item}
            onClick={stopScreenShare}
          >
            <FontAwesomeIcon
              className={`${styles.icon_right_item} ${styles.red}`}
              icon={faDesktop}
            />
            <p className={styles.title}>Stop presenting</p>
          </div>
        ) : (
          <div className={styles.icon_block_right_item} onClick={screenShare}>
            <FontAwesomeIcon
              className={`${styles.icon_right_item} ${styles.red}`}
              icon={faDesktop}
            />
            <p className={styles.title}>Present now</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallPageFooter;
