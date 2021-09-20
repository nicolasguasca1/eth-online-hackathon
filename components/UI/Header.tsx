import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            className={styles.image}
            alt="logo"
            width="60"
            height="60"
            src="/squared.png"
          />
        </Link>
        <Link href="/">
          <span className={styles.help_text}>Callties</span>
        </Link>
      </div>
      <div className={styles.action_btn}>
        <FontAwesomeIcon
          className={styles.icon_block}
          icon={faQuestionCircle}
        />
        <FontAwesomeIcon
          className={styles.icon_block}
          icon={faExclamationCircle}
        />
        <FontAwesomeIcon className={styles.icon_block} icon={faCog} />
      </div>
    </div>
  );
};
export default Header;
