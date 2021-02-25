import React, { useContext } from "react";
import styles from "../styles/componentes/CompletedChallenges.module.css";
import { ChallengesContext } from "../contexts/ChallengeContext";

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
};

export default CompletedChallenges;
