import styles from "./languageprofolio.module.css";
import htmlImage from "./htmlImage.png";
import csslogo from "./cssLogo.png";
import jslogo from "./jslogo.png";
import reactlogo from "./reactlogo.png";
export default function Languageprofolio() {
  return (
    <div className={styles.border}>
      <div className={styles.profolioBlock}>
        <ul>
          <li>ToDo List</li>
          <li>Food Recipe</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={styles.imageBlcok}>
        <span>
          <img src={htmlImage} alt="" className={styles.imageSize} />
        </span>
        <span>
          <img src={csslogo} alt="" className={styles.imageSize} />
        </span>
        <span>
          <img src={jslogo} alt="" className={styles.imageSize} />
        </span>
        <div>
          <span>
            <img src={reactlogo} alt="" className={styles.imageSize} />
          </span>
        </div>
      </div>
    </div>
  );
}
