import { useContext } from "react";
import styles from "../styles/componentes/Profile.module.css";
import { ChallengesContext } from "../contexts/ChallengeContext";

const Profile = () => {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jon-by.png" alt="Jonas Yure" />
      <div>
        <strong>Jonas Yure</strong>
        <p>
          <img src="icons/level.svg" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
