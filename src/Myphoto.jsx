import myImage from "./myphoto.jpg";
import styles from "./myphoto.module.css";
export default function Myphoto() {
  return (
    <div>
      <img src={myImage} alt="Abby's photo" className={styles.myPhoto} />
    </div>
  );
}
