import Link from "next/link";
import styles from "../../styles/NoMatch.module.css";
import Header from "../../components/UI/Header";

const NoMatch = () => {
  return (
    <div>
      <Header />
      <div className={styles.no_match_content}>
        <h2 className={styles.h2}>
          Ups! The call path you are looking for does not match any existing
          call.
        </h2>
        <div className="action-btn">
          <Link passHref href="/">
            Return to home screen
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NoMatch;
