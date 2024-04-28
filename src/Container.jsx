import { useState } from "react";
import styles from "./container.module.css";
import Myphoto from "./Myphoto";
import List from "./List";
import Aboutme from "./Aboutme";
import ButtonContainer from "./ButtonContainer";
import Languageprofolio from "./LanguageProfolio";
export default function Container() {
  const [isAboutChanged, setIsAboutChanged] = useState(true);
  const [isProfolioChanged, setIsProfolioChanged] = useState(false);

  return (
    <div className={styles.container}>
      <aside className={styles.photoblock}>
        <Myphoto />
        <nav>
          <List />
        </nav>
      </aside>
      <div className={styles.detail}>
        <div>
          <ButtonContainer
            isAboutChanged={isAboutChanged}
            setIsAboutChanged={setIsAboutChanged}
            isProfolioChanged={isProfolioChanged}
            setIsProfolioChanged={setIsProfolioChanged}
          />
        </div>
        <div style={{ display: isAboutChanged ? "block" : "none" }}>
          <Aboutme />
        </div>
        <div style={{ display: isProfolioChanged ? "block" : "none" }}>
          <Languageprofolio />
        </div>
      </div>
    </div>
  );
}
