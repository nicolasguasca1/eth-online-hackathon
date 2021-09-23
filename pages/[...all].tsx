import Link from "next/link";
import styles from "../styles/NoMatch.module.css";
import Page from "../components/UI/Page";

const NoMatch = () => {
  return (
    <Page>
      <div className={styles.no_match_content}>
        <h2 className={styles.h2}>Ups! You have reached an invalid path.</h2>
        <div className="action-btn">
          <Link passHref href="/home">
            Return to home screen
          </Link>
        </div>
      </div>
    </Page>
  );
};
export default NoMatch;
