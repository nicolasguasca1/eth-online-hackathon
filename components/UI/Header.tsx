import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useMoralis } from "react-moralis";

const Header = () => {
  const { isAuthenticated, logout, user } = useMoralis();
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link passHref href="/">
          <Image
            className={styles.image}
            alt="logo"
            width="60"
            height="60"
            src="/squared.png"
          />
        </Link>
        <Link passHref href="/">
          <button className={styles.title}>Callties</button>
        </Link>
      </div>
      {isAuthenticated && (
        <div className={styles.action_btn}>
          <Link passHref href="/dashboard/[username]">
            <button className={styles.help_text}>Dashboard</button>
          </Link>
          <Link passHref href="/settings/[username]">
            <button className={styles.help_text}>Settings</button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Header;
