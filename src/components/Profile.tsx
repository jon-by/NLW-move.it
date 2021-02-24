import styles from "../styles/componentes/Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jon-by.png" alt="Jonas Yure" />
      <div>
        <strong>Jonas Yure</strong>
        <p>
          <img src="icons/level.svg" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
