import { useState } from "react";
import styles from "./buttoncontainer.module.css";

export default function ButtonContainer({
  isAboutChanged,
  setIsAboutChanged,
  isProfolioChanged,
  setIsProfolioChanged,
}) {
  function changeToabout() {
    setIsAboutChanged(true);
    setIsProfolioChanged(false);
  }
  function changeToprofolio() {
    setIsAboutChanged(false);
    setIsProfolioChanged(true);
  }

  return (
    <div className={styles.border}>
      <ul className={styles.navbar}>
        <li onClick={changeToabout} className={styles.float}>
          <a href="#aboutme">About me</a>
        </li>
        <li onClick={changeToprofolio} className={styles.float}>
          <a href="#language&profolio">Language & Profolio</a>
        </li>
      </ul>
    </div>
  );
}
